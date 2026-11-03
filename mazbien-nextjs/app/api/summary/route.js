import { createClient } from "@supabase/supabase-js";
import { completeChat } from "@/lib/openrouter";

const ASSESSMENT_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function userClient(token) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function departmentsWithExperience(departments, byDepartment, fallback) {
  const names = Array.isArray(departments) ? departments : [];
  return names.map((department) => ({
    department: String(department),
    aiExperience: byDepartment?.[department] || fallback || "unspecified",
  }));
}

function namesFromSelected(selected) {
  if (!Array.isArray(selected)) return [];
  return selected
    .map((item) => (typeof item === "string" ? item : item?.name))
    .map((name) => String(name || "").trim())
    .filter(Boolean);
}

export async function POST(request) {
  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice("Bearer ".length).trim() : "";
  const supabase = token ? userClient(token) : null;
  if (!supabase) {
    return Response.json({ error: "Sign in before drafting a summary." }, { status: 401 });
  }

  const { data: userData, error: userError } = await supabase.auth.getUser(token);
  if (userError || !userData.user) {
    return Response.json({ error: "Sign in before drafting a summary." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send the assessment id as JSON." }, { status: 400 });
  }

  const assessmentId = String(body?.assessmentId || "").trim();
  if (!ASSESSMENT_ID.test(assessmentId)) {
    return Response.json({ error: "Send a saved assessment id." }, { status: 400 });
  }

  const model = process.env.OPENROUTER_MODEL?.trim();
  if (!model) {
    return Response.json({ error: "Set OPENROUTER_MODEL on the server." }, { status: 500 });
  }

  const assessmentResult = await supabase
    .from("assessments")
    .select(
      "id, company_name, industry, size, departments, department_ai_experience, ai_experience, tier, score, quote_total, selected_addons",
    )
    .eq("id", assessmentId)
    .maybeSingle();
  if (assessmentResult.error) {
    return Response.json({ error: assessmentResult.error.message }, { status: 500 });
  }
  if (!assessmentResult.data) {
    return Response.json({ error: "That assessment is not available for this consultant." }, { status: 404 });
  }

  const rolesResult = await supabase
    .from("roles")
    .select("name, department, priority")
    .eq("assessment_id", assessmentId);
  if (rolesResult.error) {
    return Response.json({ error: rolesResult.error.message }, { status: 500 });
  }

  const addonRowsResult = await supabase
    .from("assessment_addons")
    .select("custom_name, addon_id")
    .eq("assessment_id", assessmentId);
  if (addonRowsResult.error) {
    return Response.json({ error: addonRowsResult.error.message }, { status: 500 });
  }

  const addonIds = (addonRowsResult.data || []).map((row) => row.addon_id).filter(Boolean);
  let catalog = new Map();
  if (addonIds.length) {
    const catalogResult = await supabase.from("addons").select("id, name").in("id", addonIds);
    if (catalogResult.error) {
      return Response.json({ error: catalogResult.error.message }, { status: 500 });
    }
    catalog = new Map((catalogResult.data || []).map((row) => [row.id, row.name]));
  }

  const assessment = assessmentResult.data;
  const selectedAddons = [
    ...namesFromSelected(assessment.selected_addons),
    ...(addonRowsResult.data || []).map((row) => row.custom_name || catalog.get(row.addon_id) || ""),
  ].filter((name, index, all) => name && all.indexOf(name) === index);

  const facts = {
    companyName: assessment.company_name,
    industry: assessment.industry,
    size: assessment.size,
    departments: departmentsWithExperience(
      assessment.departments,
      assessment.department_ai_experience,
      assessment.ai_experience,
    ),
    roles: (rolesResult.data || []).map((role) => ({
      name: role.name,
      department: role.department,
      priority: role.priority,
    })),
    tier: assessment.tier,
    score: assessment.score,
    fixedPrice: assessment.quote_total,
    selectedAddons,
  };

  try {
    const summary = await completeChat(
      [
        {
          role: "system",
          content:
            "You write a short recommendation summary for a Mazbien consultant to review. Use only the facts in the JSON. The tier, score, and fixedPrice are already decided by the rule engine. Do not propose a different tier, do not recalculate the score, and do not change or invent a price. If fixedPrice is present, mention that exact price. Two short paragraphs, plain prose, no markdown.",
        },
        { role: "user", content: JSON.stringify(facts) },
      ],
      { model, maxTokens: 400 },
    );
    return Response.json({ summary });
  } catch (error) {
    const status = error.status >= 400 && error.status < 600 ? error.status : 502;
    const message = String(error.message || "OpenRouter could not draft the summary.").replace(
      /sk-or-[a-z0-9-]+/gi,
      "[redacted]",
    );
    return Response.json({ error: message }, { status: status === 401 ? 502 : status });
  }
}

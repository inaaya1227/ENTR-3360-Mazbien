import { createClient } from "@supabase/supabase-js";
import {
  SUMMARY_SYSTEM_PROMPT,
  SUMMARY_UNAVAILABLE,
  normalizeHandSummary,
  reviewModelSummary,
  templateSummary,
} from "@/lib/aiSummary";
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

function addonPrices(rows, selected) {
  const prices = [];
  for (const row of rows || []) prices.push(row.price_at_selection);
  if (Array.isArray(selected)) {
    for (const item of selected) {
      if (item && typeof item === "object" && item.price != null) prices.push(item.price);
    }
  }
  return prices;
}

async function draftFromModel(facts, prices, model) {
  const messages = [
    { role: "system", content: SUMMARY_SYSTEM_PROMPT },
    { role: "user", content: JSON.stringify(facts) },
  ];
  for (let attempt = 0; attempt < 2; attempt += 1) {
    let text = "";
    try {
      text = await completeChat(messages, { model, maxTokens: 500, temperature: 0.2 });
    } catch (error) {
      const message = String(error?.message || "").replace(/sk-or-[a-z0-9-]+/gi, "[redacted]");
      console.error(error?.status || 0, message);
      return null;
    }
    const reviewed = reviewModelSummary(text, facts, prices);
    if (reviewed.ok) return reviewed.summary;
    console.error("[summary] rejected", reviewed.reason);
  }
  return null;
}

async function saveSummary(supabase, assessmentId, summary, status, model) {
  const updated = await supabase
    .from("assessments")
    .update({
      ai_summary: summary,
      ai_summary_status: status,
      ai_summary_model: model,
      ai_summary_updated_at: new Date().toISOString(),
    })
    .eq("id", assessmentId)
    .select("ai_summary, ai_summary_status, ai_summary_model, ai_summary_updated_at")
    .maybeSingle();
  if (updated.error) {
    console.error("[summary] save failed", updated.error.message);
    return { ok: false };
  }
  if (!updated.data) return { ok: false, missing: true };
  return { ok: true, row: updated.data };
}

function savedPayload(row, fallback) {
  return {
    summary: row.ai_summary,
    status: row.ai_summary_status,
    model: row.ai_summary_model,
    updatedAt: row.ai_summary_updated_at,
    fallback,
    message: fallback ? SUMMARY_UNAVAILABLE : "",
  };
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

  if (body?.action === "save" || body?.action === "approve") {
    const summary = normalizeHandSummary(body.summary);
    if (!summary) return Response.json({ error: "Send the summary as overview and roles." }, { status: 400 });
    const existing = await supabase
      .from("assessments")
      .select("id, ai_summary_model")
      .eq("id", assessmentId)
      .maybeSingle();
    if (existing.error) {
      console.error("[summary] save failed", existing.error.message);
      return Response.json({ error: "The summary could not be saved." }, { status: 500 });
    }
    if (!existing.data) {
      return Response.json({ error: "That assessment is not available for this consultant." }, { status: 404 });
    }
    const saved = await saveSummary(
      supabase,
      assessmentId,
      summary,
      body.action === "approve" ? "approved" : "draft",
      summary.ai_generated ? existing.data.ai_summary_model : null,
    );
    if (!saved.ok) {
      return Response.json(
        { error: saved.missing ? "That assessment is not available for this consultant." : "The summary could not be saved." },
        { status: saved.missing ? 404 : 500 },
      );
    }
    return Response.json(savedPayload(saved.row, false));
  }

  const model = process.env.OPENROUTER_MODEL?.trim();

  const assessmentResult = await supabase
    .from("assessments")
    .select(
      "id, company_name, industry, size, departments, department_ai_experience, ai_experience, tier, score, quote_total, selected_addons",
    )
    .eq("id", assessmentId)
    .maybeSingle();
  if (assessmentResult.error) {
    console.error("[summary] save failed", assessmentResult.error.message);
    return Response.json({ error: "The summary could not be saved." }, { status: 500 });
  }
  if (!assessmentResult.data) {
    return Response.json({ error: "That assessment is not available for this consultant." }, { status: 404 });
  }

  const rolesResult = await supabase
    .from("roles")
    .select("name, department, priority")
    .eq("assessment_id", assessmentId);
  if (rolesResult.error) {
    console.error("[summary] save failed", rolesResult.error.message);
    return Response.json({ error: "The summary could not be saved." }, { status: 500 });
  }

  const addonRowsResult = await supabase
    .from("assessment_addons")
    .select("custom_name, addon_id, price_at_selection")
    .eq("assessment_id", assessmentId);
  if (addonRowsResult.error) {
    console.error("[summary] save failed", addonRowsResult.error.message);
    return Response.json({ error: "The summary could not be saved." }, { status: 500 });
  }

  const addonIds = (addonRowsResult.data || []).map((row) => row.addon_id).filter(Boolean);
  let catalog = new Map();
  if (addonIds.length) {
    const catalogResult = await supabase.from("addons").select("id, name").in("id", addonIds);
    if (catalogResult.error) {
      console.error("[summary] save failed", catalogResult.error.message);
      return Response.json({ error: "The summary could not be saved." }, { status: 500 });
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

  const prices = addonPrices(addonRowsResult.data, assessment.selected_addons);
  let summary = null;
  if (model) summary = await draftFromModel(facts, prices, model);
  else console.error(0, "OPENROUTER_MODEL is not set");
  const fallback = !summary;
  if (!summary) summary = templateSummary(facts);

  const saved = await saveSummary(supabase, assessmentId, summary, "draft", summary.ai_generated ? model : null);
  if (!saved.ok) {
    return Response.json(
      {
        summary,
        fallback,
        message: saved.missing ? "That assessment is not available for this consultant." : "The summary could not be saved.",
      },
      { status: saved.missing ? 404 : 200 },
    );
  }
  return Response.json(savedPayload(saved.row, fallback));
}

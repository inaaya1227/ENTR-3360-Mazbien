import { createClient } from "@supabase/supabase-js";
import { completeChat } from "@/lib/openrouter";

function clip(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

function stringList(value, maxItems, maxLength) {
  if (!Array.isArray(value)) return [];
  return value
    .slice(0, maxItems)
    .map((item) => clip(item, maxLength))
    .filter(Boolean);
}

function assessmentFacts(body) {
  const departments = stringList(body?.departments, 12, 80);
  const experience = {};
  for (const department of departments) {
    experience[department] = clip(body?.departmentExperience?.[department], 40);
  }

  const roles = Array.isArray(body?.roles)
    ? body.roles.slice(0, 20).map((role) => ({
        name: clip(role?.name, 80),
        department: clip(role?.department, 80),
      }))
    : [];

  const followups = Array.isArray(body?.followupAnswers)
    ? body.followupAnswers.slice(0, 12).map((item) => ({
        question: clip(item?.question, 240),
        answer: clip(item?.answer, 400),
      }))
    : [];

  const pathways = Array.isArray(body?.pathways)
    ? body.pathways.slice(0, 20).map((item) => ({
        name: clip(item?.name, 80),
        department: clip(item?.department, 80),
        priority: clip(item?.priority, 20),
        modules: stringList(item?.modules, 4, 80),
      }))
    : [];

  return {
    companyName: clip(body?.companyName, 120),
    industry: clip(body?.industry, 80),
    size: clip(body?.size, 40),
    departments,
    departmentExperience: experience,
    roles: roles.filter((role) => role.name && role.department),
    painPoints: clip(body?.painPoints, 1200),
    desiredOutcomes: clip(body?.desiredOutcomes, 400),
    followups: followups.filter((item) => item.question || item.answer),
    tier: clip(body?.tier, 40),
    score: Number.isFinite(Number(body?.score)) ? Number(body.score) : null,
    quote: clip(body?.quote, 80),
    pathways,
  };
}

async function signedInUser(request) {
  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice("Bearer ".length).trim() : "";
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!token || !url || !anonKey) return null;

  const supabase = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return null;
  return data.user;
}

export async function POST(request) {
  const user = await signedInUser(request);
  if (!user) {
    return Response.json({ error: "Sign in before drafting a proposal." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send the assessment as JSON." }, { status: 400 });
  }

  const facts = assessmentFacts(body);
  if (!facts.companyName || !facts.tier || facts.score === null) {
    return Response.json({ error: "The assessment needs a company, tier, and score first." }, { status: 400 });
  }

  try {
    const summary = await completeChat([
      {
        role: "system",
        content:
          "You draft an internal proposal note for Mazbien, an AI training consultancy. Use only the facts in the user JSON. Keep the given tier, score, and price. Do not invent headcount, tools, results, or client commitments. Write two short paragraphs in plain prose. No markdown, bullets, or headings.",
      },
      {
        role: "user",
        content: JSON.stringify(facts),
      },
    ]);
    return Response.json({ summary });
  } catch (error) {
    const status = error.status >= 400 && error.status < 600 ? error.status : 502;
    const message = String(error.message || "OpenRouter could not draft the proposal.").replace(/sk-or-[a-z0-9-]+/gi, "[redacted]");
    return Response.json({ error: message }, { status: status === 401 ? 502 : status });
  }
}

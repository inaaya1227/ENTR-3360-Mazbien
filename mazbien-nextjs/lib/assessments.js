import { getSupabaseClient, isSupabaseConfigured } from "./supabaseClient";
import { loadLocalHistory, pushLocalHistory } from "./draftStore";
import { TIER_COPY } from "./catalog";

export async function saveAssessmentForReview({ draft, scoring, displayTier, pathways }) {
  const payload = {
    company_name: draft.companyName,
    industry: draft.industry,
    size: draft.size,
    departments: draft.departments,
    ai_experience: draft.aiExperience,
    pain_points: draft.painPoints,
    tools: [...(draft.tools || []), draft.customTools].filter(Boolean),
    tier: displayTier,
    score: scoring.total,
    status: "sent_for_review",
  };

  const localRecord = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    ...payload,
    source: "local",
  };

  const supabase = getSupabaseClient();
  if (!supabase) {
    pushLocalHistory(localRecord);
    return {
      ok: true,
      source: "local",
      warning:
        "Supabase env vars are missing. The review packet was saved on this device only. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, then run supabase/schema.sql.",
      id: localRecord.id,
    };
  }

  const { data, error } = await supabase.from("assessments").insert(payload).select("id").single();
  if (error) {
    pushLocalHistory({ ...localRecord, source: "local-fallback" });
    return {
      ok: true,
      source: "local-fallback",
      warning: `Supabase save failed (${error.message}). Saved on this device so you can keep working. Confirm tables from supabase/schema.sql.`,
      id: localRecord.id,
    };
  }

  const assessmentId = data.id;
  const roleRows = pathways.map((pathway) => ({
    assessment_id: assessmentId,
    name: pathway.name,
    department: pathway.department,
    priority: pathway.priority,
    modules: pathway.modules,
  }));
  if (roleRows.length) {
    const { error: roleError } = await supabase.from("roles").insert(roleRows);
    if (roleError) {
      return { ok: false, error: roleError.message };
    }
  }

  const followupRows = (draft.followupAnswers || [])
    .filter((item) => item.question)
    .map((item) => ({
      assessment_id: assessmentId,
      question_text: item.question,
      answer_text: item.answer || "",
    }));
  if (followupRows.length) {
    const { error: followError } = await supabase.from("followup_answers").insert(followupRows);
    if (followError) {
      return { ok: false, error: followError.message };
    }
  }

  pushLocalHistory({ ...localRecord, id: assessmentId, source: "supabase" });
  return { ok: true, source: "supabase", id: assessmentId };
}

export async function fetchAssessmentHistory() {
  const local = loadLocalHistory();

  if (!isSupabaseConfigured()) {
    return { rows: local, source: "local", warning: "Showing device history until Supabase is configured." };
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("assessments")
    .select("id, company_name, industry, size, departments, tier, score, status, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return { rows: local, source: "local", warning: error.message };
  }

  return { rows: data || [], source: "supabase" };
}

export function tierLabel(tier) {
  const copy = TIER_COPY[tier];
  return copy ? `${copy.name} — ${copy.title}` : tier;
}

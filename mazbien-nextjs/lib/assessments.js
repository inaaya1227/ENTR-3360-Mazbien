import { ADDON_CATALOG, buildQuote, buildSelectedAddons } from "./addons";
import { TOOLS, TIER_COPY } from "./catalog";
import { emptyDraft, upsertLocalHistory } from "./draftStore";
import { generateFollowups } from "./followups";
import { getSupabaseClient, isSupabaseConfigured } from "./supabaseClient";

const STATUS_LABELS = {
  draft: "Draft",
  in_review: "In review",
  sent_for_review: "Sent for review",
};

export function statusLabel(status) {
  if (!status) return "—";
  return STATUS_LABELS[status] || status;
}

export async function saveAssessmentForReview({ draft, scoring, displayTier, pathways }) {
  const selectedAddons = buildSelectedAddons(draft, scoring.recommendedTier);
  const quote = buildQuote(displayTier, selectedAddons);
  const payload = {
    company_name: draft.companyName,
    industry: draft.industry,
    size: draft.size,
    departments: draft.departments,
    department_ai_experience: draft.departmentExperience || {},
    pain_points: draft.painPoints,
    tools: [...(draft.tools || []), draft.customTools].filter(Boolean),
    tier: displayTier,
    score: scoring.total,
    quote_total: quote.totalLabel,
    status: "sent_for_review",
    desired_outcomes: draft.desiredOutcomes || "",
    consultant_notes: draft.consultantNotes || "",
    selected_addons: selectedAddons,
  };
  if (draft.assessmentId) payload.previous_status = draft.previousStatus || null;

  const localRecord = {
    id: draft.assessmentId || crypto.randomUUID(),
    created_at: new Date().toISOString(),
    ...payload,
    source: "local",
  };

  const supabase = getSupabaseClient();
  if (supabase) {
    const { data: userResult, error: userError } = await supabase.auth.getUser();
    if (userError || !userResult?.user) {
      return { ok: false, error: "Sign in before sending for review." };
    }
    if (!draft.assessmentId) payload.consultant_id = userResult.user.id;
    localRecord.consultant_id = userResult.user.id;
  }

  if (!supabase) {
    upsertLocalHistory(localRecord);
    return {
      ok: true,
      source: "local",
      updated: Boolean(draft.assessmentId),
      warning:
        "Supabase env vars are missing. The review packet was saved on this device only. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, then run supabase/schema.sql.",
      id: localRecord.id,
    };
  }

  const saved = draft.assessmentId
    ? await supabase.from("assessments").update(payload).eq("id", draft.assessmentId).select("id").single()
    : await supabase.from("assessments").insert(payload).select("id").single();
  if (saved.error) {
    if (!draft.assessmentId) {
      upsertLocalHistory({ ...localRecord, source: "local-fallback" });
      return {
        ok: true,
        source: "local-fallback",
        warning: `Supabase save failed (${saved.error.message}). Saved on this device so you can keep working. Confirm tables from supabase/schema.sql.`,
        id: localRecord.id,
      };
    }
    return { ok: false, error: saved.error.message };
  }

  const assessmentId = saved.data.id;
  const childError = await replaceChildRows(supabase, assessmentId, pathways, draft.followupAnswers || [], Boolean(draft.assessmentId));
  if (childError) return { ok: false, error: childError };

  upsertLocalHistory({ ...localRecord, id: assessmentId, source: "supabase" });
  return { ok: true, source: "supabase", updated: Boolean(draft.assessmentId), id: assessmentId };
}

async function replaceChildRows(supabase, assessmentId, pathways, followupAnswers, replacing) {
  if (replacing) {
    const { error: roleDeleteError } = await supabase.from("roles").delete().eq("assessment_id", assessmentId);
    if (roleDeleteError) return roleDeleteError.message;
    const { error: followDeleteError } = await supabase.from("followup_answers").delete().eq("assessment_id", assessmentId);
    if (followDeleteError) return followDeleteError.message;
  }

  const roleRows = pathways.map((pathway) => ({
    assessment_id: assessmentId,
    name: pathway.name,
    department: pathway.department,
    priority: pathway.priority,
    modules: pathway.modules,
  }));
  if (roleRows.length) {
    const { error } = await supabase.from("roles").insert(roleRows);
    if (error) return error.message;
  }

  const followupRows = followupAnswers
    .filter((item) => item.question)
    .map((item) => ({
      assessment_id: assessmentId,
      question_text: item.question,
      answer_text: item.answer || "",
    }));
  if (followupRows.length) {
    const { error } = await supabase.from("followup_answers").insert(followupRows);
    if (error) return error.message;
  }

  return "";
}

function renameDepartment(name) {
  return name === "Operations" ? "Administration/OPS" : name;
}

function restoreFollowupAnswers(draft, savedRows) {
  const saved = (savedRows || [])
    .map((row) => ({
      question: String(row.question_text || row.question || "").trim(),
      answer: row.answer_text ?? row.answer ?? "",
    }))
    .filter((row) => row.question);
  const lookup = new Map(saved.map((row) => [row.question, row.answer]));
  let followupAnswers = [];
  for (let pass = 0; pass < 3; pass += 1) {
    const questions = generateFollowups({ ...draft, followupAnswers });
    followupAnswers = questions
      .map((question) => ({
        id: question.id,
        question: question.question,
        answer: lookup.get(question.question.trim()) || "",
      }))
      .filter((item) => String(item.answer).trim());
  }
  const shown = new Set(followupAnswers.map((item) => item.question.trim()));
  saved.forEach((row, index) => {
    if (shown.has(row.question)) return;
    followupAnswers.push({
      id: `saved-${index}`,
      question: row.question,
      answer: row.answer || "",
    });
  });
  return followupAnswers;
}

export function draftFromAssessment(row) {
  const draft = emptyDraft();
  const departments = (Array.isArray(row.departments) ? row.departments : []).map(renameDepartment);
  const experience = {};
  for (const [name, level] of Object.entries(row.department_ai_experience || {})) {
    if (level) experience[renameDepartment(name)] = level;
  }
  if (row.ai_experience) {
    for (const department of departments) {
      if (!experience[department]) experience[department] = row.ai_experience;
    }
  }
  const knownTools = new Set(TOOLS);
  const tools = Array.isArray(row.tools) ? row.tools.filter(Boolean) : [];
  const selected = Array.isArray(row.selected_addons) ? row.selected_addons : [];
  const catalogIds = new Set(ADDON_CATALOG.map((addon) => addon.id));
  const selectedIds = new Set(selected.filter((item) => item?.id && catalogIds.has(item.id)).map((item) => item.id));
  const addonOverrides = {};
  for (const addon of ADDON_CATALOG) addonOverrides[addon.id] = selectedIds.has(addon.id);
  const customAddons = selected
    .filter((item) => item?.id && item?.name && !catalogIds.has(item.id))
    .map((item) => ({
      id: item.id,
      name: item.name,
      price: Number(item.price) || 0,
    }));
  const roles = (row.roles || []).map((role) => ({
    id: role.id || crypto.randomUUID(),
    name: role.name || "",
    department: renameDepartment(role.department || ""),
  }));
  const next = {
    ...draft,
    companyName: row.company_name || "",
    industry: row.industry || "",
    size: row.size || "",
    departments,
    departmentExperience: experience,
    painPoints: row.pain_points || "",
    desiredOutcomes: row.desired_outcomes || "",
    tools: tools.filter((tool) => knownTools.has(tool)),
    customTools: tools.filter((tool) => !knownTools.has(tool)).join(", "),
    roles,
    consultantNotes: row.consultant_notes || "",
    premiumOverride: row.tier === "premium",
    addonOverrides,
    customAddons,
    status: row.status || "draft",
    previousStatus: row.status || "",
    assessmentId: row.id,
    intakeStep: 1,
  };
  next.followupAnswers = restoreFollowupAnswers(next, row.followup_answers || []);
  return next;
}

export async function fetchAssessmentForEdit(id) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { ok: false, error: "Supabase is not configured, so this assessment cannot be opened." };
  }
  const { data, error } = await supabase
    .from("assessments")
    .select("*, roles(id, name, department), followup_answers(question_text, answer_text)")
    .eq("id", id)
    .single();
  if (error) return { ok: false, error: error.message };
  return { ok: true, draft: draftFromAssessment(data) };
}

export async function fetchAssessmentHistory() {
  if (!isSupabaseConfigured()) {
    return {
      rows: [],
      source: "supabase",
      warning: "Supabase is not configured, so history cannot be loaded.",
    };
  }

  const supabase = getSupabaseClient();
  let { data, error } = await supabase
    .from("assessments")
    .select("id, company_name, industry, tier, status, previous_status, created_at")
    .order("created_at", { ascending: false });

  if (error && /previous_status/.test(error.message || "")) {
    const fallback = await supabase
      .from("assessments")
      .select("id, company_name, industry, tier, status, created_at")
      .order("created_at", { ascending: false });
    data = fallback.data;
    error = fallback.error;
  }

  if (error) {
    return { rows: [], source: "supabase", warning: error.message };
  }

  return { rows: data || [], source: "supabase" };
}

export function tierLabel(tier) {
  const copy = TIER_COPY[tier];
  return copy ? `${copy.name} — ${copy.title}` : tier;
}

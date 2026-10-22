import { buildQuote, buildSelectedAddons, withCatalogPrices } from "./addons";
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

export async function fetchAddonCatalog() {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { ok: false, rows: [], error: "Supabase is not configured, so add-ons cannot be loaded." };
  }
  const { data, error } = await supabase
    .from("addons")
    .select("id, name, description, price")
    .eq("active", true)
    .order("name");
  if (error) return { ok: false, rows: [], error: error.message };
  return { ok: true, rows: data || [] };
}

function addonInsertRows(assessmentId, selectedAddons) {
  return selectedAddons.map((item) => ({
    assessment_id: assessmentId,
    addon_id: item.custom ? null : item.id,
    custom_name: item.custom ? item.name : null,
    price_at_selection: Number(item.price) || 0,
  }));
}

export async function saveAssessmentForReview({ draft, scoring, displayTier, pathways }) {
  const supabase = getSupabaseClient();
  let userId = null;
  if (supabase) {
    const { data: userResult, error: userError } = await supabase.auth.getUser();
    if (userError || !userResult?.user) {
      return { ok: false, error: "Sign in before sending for review." };
    }
    userId = userResult.user.id;
  }

  let catalog;
  if (supabase) {
    const catalogResult = await fetchAddonCatalog();
    if (!catalogResult.ok) return { ok: false, error: catalogResult.error };
    catalog = withCatalogPrices(catalogResult.rows);
  }
  const selectedAddons = buildSelectedAddons(draft, scoring.recommendedTier, catalog);
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
  };
  if (draft.assessmentId) payload.previous_status = draft.previousStatus || null;

  const localRecord = {
    id: draft.assessmentId || crypto.randomUUID(),
    created_at: new Date().toISOString(),
    ...payload,
    source: "local",
  };

  if (userId) {
    if (!draft.assessmentId) payload.consultant_id = userId;
    localRecord.consultant_id = userId;
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
  const childError = await replaceChildRows(
    supabase,
    assessmentId,
    pathways,
    draft.followupAnswers || [],
    Boolean(draft.assessmentId),
    addonInsertRows(assessmentId, selectedAddons),
  );
  if (childError) return { ok: false, error: childError };

  upsertLocalHistory({ ...localRecord, id: assessmentId, source: "supabase" });
  return { ok: true, source: "supabase", updated: Boolean(draft.assessmentId), id: assessmentId };
}

async function replaceChildRows(supabase, assessmentId, pathways, followupAnswers, replacing, addonRows = []) {
  let previousRoleIds = [];
  let previousFollowupIds = [];
  let previousAddonIds = [];
  if (replacing) {
    const { data: existingRoles, error: roleReadError } = await supabase
      .from("roles")
      .select("id")
      .eq("assessment_id", assessmentId);
    if (roleReadError) return roleReadError.message;
    const { data: existingFollowups, error: followReadError } = await supabase
      .from("followup_answers")
      .select("id")
      .eq("assessment_id", assessmentId);
    if (followReadError) return followReadError.message;
    const { data: existingAddons, error: addonReadError } = await supabase
      .from("assessment_addons")
      .select("id")
      .eq("assessment_id", assessmentId);
    if (addonReadError) return addonReadError.message;
    previousRoleIds = (existingRoles || []).map((row) => row.id);
    previousFollowupIds = (existingFollowups || []).map((row) => row.id);
    previousAddonIds = (existingAddons || []).map((row) => row.id);
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

  if (addonRows.length) {
    const { error } = await supabase.from("assessment_addons").insert(addonRows);
    if (error) return error.message;
  }

  if (previousRoleIds.length) {
    const { error } = await supabase.from("roles").delete().in("id", previousRoleIds);
    if (error) return error.message;
  }
  if (previousFollowupIds.length) {
    const { error } = await supabase.from("followup_answers").delete().in("id", previousFollowupIds);
    if (error) return error.message;
  }
  if (previousAddonIds.length) {
    const { error } = await supabase.from("assessment_addons").delete().in("id", previousAddonIds);
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

export function draftFromAssessment(row, catalog = []) {
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
  const links = Array.isArray(row.assessment_addons) ? row.assessment_addons : [];
  const selectedIds = new Set(links.map((item) => item.addon_id).filter(Boolean));
  const addonOverrides = {};
  for (const addon of catalog) addonOverrides[addon.id] = selectedIds.has(addon.id);
  const customAddons = links
    .filter((item) => !item.addon_id && String(item.custom_name || "").trim())
    .map((item) => ({
      id: `custom:${crypto.randomUUID()}`,
      name: String(item.custom_name).trim(),
      price: Number(item.price_at_selection) || 0,
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
  const [catalogResult, assessmentResult] = await Promise.all([
    fetchAddonCatalog(),
    supabase
      .from("assessments")
      .select(
        "*, roles(id, name, department), followup_answers(question_text, answer_text), assessment_addons(addon_id, custom_name, price_at_selection)",
      )
      .eq("id", id)
      .single(),
  ]);
  if (!catalogResult.ok) return { ok: false, error: catalogResult.error };
  if (assessmentResult.error) return { ok: false, error: assessmentResult.error.message };
  return { ok: true, draft: draftFromAssessment(assessmentResult.data, withCatalogPrices(catalogResult.rows)) };
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

const DRAFT_KEY = "mazbien-draft-v1";
const LOCAL_HISTORY_KEY = "mazbien-history-v1";

export function emptyDraft() {
  return {
    companyName: "",
    industry: "",
    size: "",
    departments: [],
    roles: [],
    tools: [],
    customTools: "",
    painPoints: "",
    departmentExperience: {},
    desiredOutcomes: "",
    followupAnswers: [],
    consultantNotes: "",
    premiumOverride: false,
    addonOverrides: {},
    customAddons: [],
    checklist: {},
    status: "draft",
    intakeStep: 1,
    assessmentId: null,
    previousStatus: "",
  };
}

function renameDepartment(name) {
  return name === "Operations" ? "Administration/OPS" : name;
}

export function wordCount(text) {
  const trimmed = String(text || "").trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export const PAIN_POINT_WORD_LIMIT = 200;
export const OUTCOME_WORD_LIMIT = 50;

function renameExperienceKeys(experience) {
  const next = {};
  for (const [name, level] of Object.entries(experience || {})) {
    if (level) next[renameDepartment(name)] = level;
  }
  return next;
}

export function loadDraft() {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return emptyDraft();
    const saved = { ...emptyDraft(), ...JSON.parse(raw) };
    const departments = (saved.departments || []).map(renameDepartment);
    const roles = (saved.roles || []).map((role) => ({
      ...role,
      department: renameDepartment(role.department),
    }));
    const departmentExperience = renameExperienceKeys(saved.departmentExperience);
    if (saved.aiExperience) {
      for (const department of departments) {
        if (!departmentExperience[department]) departmentExperience[department] = saved.aiExperience;
      }
    }
    const rest = { ...saved };
    delete rest.aiExperience;
    return { ...rest, departments, roles, departmentExperience };
  } catch {
    return emptyDraft();
  }
}

export function saveDraft(draft) {
  window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

export function clearDraft() {
  window.localStorage.removeItem(DRAFT_KEY);
}

export function loadLocalHistory() {
  try {
    return JSON.parse(window.localStorage.getItem(LOCAL_HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

export function pushLocalHistory(record) {
  const next = [record, ...loadLocalHistory()].slice(0, 40);
  window.localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(next));
}

export function upsertLocalHistory(record) {
  const next = [record, ...loadLocalHistory().filter((item) => item.id !== record.id)].slice(0, 40);
  window.localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(next));
}

export function intakeIsComplete(draft) {
  return Boolean(
    draft.companyName?.trim() &&
      draft.industry?.trim() &&
      draft.size &&
      draft.departments?.length > 0 &&
      draft.roles?.length > 0 &&
      draft.roles.every((role) => role.name?.trim() && role.department) &&
      draft.departments.every((department) => draft.departmentExperience?.[department]) &&
      draft.painPoints?.trim() &&
      wordCount(draft.painPoints) <= PAIN_POINT_WORD_LIMIT &&
      draft.desiredOutcomes?.trim() &&
      wordCount(draft.desiredOutcomes) <= OUTCOME_WORD_LIMIT,
  );
}

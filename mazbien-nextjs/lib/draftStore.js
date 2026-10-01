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
    aiExperience: "",
    desiredOutcomes: "",
    followupAnswers: [],
    consultantNotes: "",
    premiumOverride: false,
    addonOverrides: {},
    checklist: {},
    status: "draft",
  };
}

export function loadDraft() {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return emptyDraft();
    return { ...emptyDraft(), ...JSON.parse(raw) };
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

export function intakeIsComplete(draft) {
  return Boolean(
    draft.companyName?.trim() &&
      draft.industry &&
      draft.size &&
      draft.departments?.length > 0 &&
      draft.roles?.length > 0 &&
      draft.roles.every((role) => role.name?.trim() && role.department) &&
      draft.aiExperience &&
      draft.painPoints?.trim() &&
      draft.desiredOutcomes?.trim(),
  );
}

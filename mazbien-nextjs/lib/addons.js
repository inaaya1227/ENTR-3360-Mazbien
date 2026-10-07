export const ADDON_CATALOG = [
  {
    id: "change-office-hours",
    name: "Change-management office hours",
    detail: "Weekly working sessions for teams that are new to AI.",
    why: "AI experience is None — adoption risk is the binding constraint, not content volume.",
  },
  {
    id: "champion-network",
    name: "Department champion network",
    detail: "Local owners who keep the labs going after Mazbien leaves.",
    why: "Multiple departments need local owners so labs survive after Mazbien leaves.",
  },
  {
    id: "train-the-trainer",
    name: "Train-the-trainer cascade",
    detail: "Internal trainers who can teach the next cohort.",
    why: "Headcount tier is too large for a single consultant-led cohort.",
  },
  {
    id: "governance-lab",
    name: "AI governance & allowed-use lab",
    detail: "Policy, tool boundaries, and what staff may paste into a model.",
    why: "Engineering or Legal is in scope — policy and tool boundaries should be explicit.",
  },
  {
    id: "deflection-measurement",
    name: "Deflection measurement pack",
    detail: "Before-and-after ticket metrics for customer service.",
    why: "Customer Service is selected — leadership will ask for ticket-volume proof.",
  },
  {
    id: "executive-brief",
    name: "90-day executive impact brief",
    detail: "One measurable outcome for leadership after the labs.",
    why: "Keeps the engagement tied to one measurable outcome after the labs.",
  },
];

const ADDON_BY_ID = Object.fromEntries(ADDON_CATALOG.map((item) => [item.id, item]));

function pushId(ids, id) {
  if (!ids.includes(id)) ids.push(id);
}

export function suggestAddons(draft, recommendedTier) {
  const ids = [];
  const size = draft.size || "";
  const large = size === "501-2000" || size === "2000+";
  const departments = draft.departments || [];

  if (draft.aiExperience === "None") pushId(ids, "change-office-hours");
  if (departments.length >= 3 || recommendedTier === "gold") pushId(ids, "champion-network");
  if (large) pushId(ids, "train-the-trainer");
  if (departments.includes("Engineering") || departments.includes("Legal & Compliance")) pushId(ids, "governance-lab");
  if (departments.includes("Customer Service")) pushId(ids, "deflection-measurement");
  if (ids.length === 0) pushId(ids, "executive-brief");

  return ids.map((id) => ADDON_BY_ID[id]);
}

export function isCatalogAddonSelected(draft, addonId, suggestedIds) {
  const override = draft.addonOverrides?.[addonId];
  if (typeof override === "boolean") return override;
  return suggestedIds.has(addonId);
}

export function isCustomAddonSelected(draft, addonId) {
  return draft.addonOverrides?.[addonId] !== false;
}

export function buildSelectedAddons(draft, recommendedTier) {
  const suggestedIds = new Set(suggestAddons(draft, recommendedTier).map((item) => item.id));
  const catalog = ADDON_CATALOG.filter((item) => isCatalogAddonSelected(draft, item.id, suggestedIds)).map((item) => ({
    id: item.id,
    name: item.name,
    custom: false,
  }));
  const custom = (draft.customAddons || [])
    .filter((item) => item?.id && item?.name?.trim() && isCustomAddonSelected(draft, item.id))
    .map((item) => ({
      id: item.id,
      name: item.name.trim(),
      custom: true,
    }));
  return [...catalog, ...custom];
}

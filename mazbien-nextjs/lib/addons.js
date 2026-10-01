export function suggestAddons(draft, recommendedTier) {
  const addons = [];
  const size = draft.size || "";
  const large = size === "501-2000" || size === "2000+";

  if (draft.aiExperience === "None") {
    addons.push({
      id: "change-office-hours",
      name: "Change-management office hours",
      why: "AI experience is None — adoption risk is the binding constraint, not content volume.",
    });
  }

  if ((draft.departments || []).length >= 3 || recommendedTier === "gold") {
    addons.push({
      id: "champion-network",
      name: "Department champion network",
      why: "Multiple departments need local owners so labs survive after Mazbien leaves.",
    });
  }

  if (large) {
    addons.push({
      id: "train-the-trainer",
      name: "Train-the-trainer cascade",
      why: "Headcount tier is too large for a single consultant-led cohort.",
    });
  }

  if ((draft.departments || []).includes("Engineering") || (draft.departments || []).includes("Legal & Compliance")) {
    addons.push({
      id: "governance-lab",
      name: "AI governance & allowed-use lab",
      why: "Engineering or Legal is in scope — policy and tool boundaries should be explicit.",
    });
  }

  if ((draft.departments || []).includes("Customer Service")) {
    addons.push({
      id: "deflection-measurement",
      name: "Deflection measurement pack",
      why: "Customer Service is selected — leadership will ask for ticket-volume proof.",
    });
  }

  if (addons.length === 0) {
    addons.push({
      id: "executive-brief",
      name: "90-day executive impact brief",
      why: "Keeps the engagement tied to one measurable outcome after the labs.",
    });
  }

  return addons;
}

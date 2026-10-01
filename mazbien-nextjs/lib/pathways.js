const MODULES_BY_DEPT = {
  Sales: [
    "Prompt foundations for outreach",
    "CRM note and pipeline copilots",
    "Proposal drafting labs",
  ],
  "Customer Service": [
    "Tone-safe reply patterns",
    "Tier-1 deflection playbooks",
    "Knowledge-base prompting",
  ],
  Operations: [
    "SOP summarization",
    "Handoff and exception prompts",
    "Shift huddle copilots",
  ],
  Finance: [
    "Spreadsheet copilots with review gates",
    "Close-cycle narrative drafting",
    "Sensitive-data handling",
  ],
  "Human Resources": [
    "Policy Q&A with source citations",
    "Interview note structuring",
    "Manager coaching prompts",
  ],
  Marketing: [
    "Brand-safe generation",
    "Campaign brief acceleration",
    "Performance commentary drafts",
  ],
  Engineering: [
    "Approved coding assistants",
    "Secure prompt patterns",
    "PR and test generation labs",
  ],
  "Legal & Compliance": [
    "Clause comparison (human-in-loop)",
    "Intake triage prompts",
    "AI use-policy workshop",
  ],
  Logistics: [
    "Dispatch exception summaries",
    "Vendor email copilots",
    "Capacity planning notes",
  ],
};

function priorityForRole(role, draft) {
  const pain = (draft.painPoints || "").toLowerCase();
  const dept = role.department.toLowerCase();
  if (draft.aiExperience === "None") return "High";
  if (pain && (pain.includes(dept.split(" ")[0]) || pain.includes(role.name.toLowerCase().split(" ")[0]))) {
    return "High";
  }
  if (draft.aiExperience === "Advanced") return "Low";
  return "Medium";
}

export function buildPathways(draft) {
  return (draft.roles || []).map((role) => {
    const modules = MODULES_BY_DEPT[role.department] || [
      "Prompt foundations",
      "Role workflow lab",
      "Quality and citation habits",
    ];
    return {
      name: role.name,
      department: role.department,
      priority: priorityForRole(role, draft),
      modules,
    };
  });
}

export function buildChecklist(draft, displayTier) {
  const items = [
    "Confirm enterprise LLM licenses before Week 2 labs",
    "Name one departmental champion per assessed department",
    "Collect sanitized sample artifacts for role labs",
    "Align success metric and baseline with the stakeholder",
  ];
  if (draft.aiExperience === "None") {
    items.push("Schedule a change-management briefing before skills labs");
  }
  if (displayTier === "gold" || displayTier === "premium") {
    items.push("Draft AI use policy workshop agenda with Legal");
  }
  if ((draft.departments || []).includes("Customer Service")) {
    items.push("Pull 30 days of ticket-category mix for deflection labs");
  }
  return items;
}

export function buildProposalSummary(draft, scoring, displayTier, copy) {
  const roleNames = (draft.roles || []).map((role) => role.name).join(", ") || "selected roles";
  const depts = (draft.departments || []).join(", ") || "the assessed departments";
  return `${draft.companyName || "The client"} (${draft.industry || "unspecified industry"}, ${
    draft.size || "size TBD"
  }) is recommended for Mazbien ${copy.name} — ${copy.title}. The rule engine scored ${
    scoring.total
  } points from ${draft.roles?.length || 0} roles, ${draft.departments?.length || 0} departments, and ${
    draft.aiExperience || "unspecified"
  } AI experience. Training pathways cover ${roleNames} across ${depts}. This remains a consultant-controlled draft: Send For Review finalizes the file internally and does not bill or message the client.`;
}

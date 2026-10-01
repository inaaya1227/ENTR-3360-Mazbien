export function generateFollowups(draft) {
  const departments = draft.departments || [];
  const questions = [];

  if (departments.includes("Customer Service")) {
    questions.push({
      id: "ticket-volume",
      question:
        "What is typical weekly ticket or case volume, and what share is repetitive tier-1 work?",
    });
  }

  if (departments.includes("Sales")) {
    questions.push({
      id: "sales-cycle",
      question:
        "How many hours per week do sellers spend writing proposals, follow-ups, or CRM notes?",
    });
  }

  if (departments.includes("Engineering")) {
    questions.push({
      id: "code-privacy",
      question:
        "Does the client already have an approved AI coding policy, or is code privacy still unresolved?",
    });
  }

  if (departments.includes("Legal & Compliance") || departments.includes("Finance")) {
    questions.push({
      id: "regulated-data",
      question:
        "Which regulated or confidential data types must stay out of public LLM tools?",
    });
  }

  if (departments.includes("Logistics") || departments.includes("Operations")) {
    questions.push({
      id: "shift-coverage",
      question:
        "Are training sessions constrained by shift coverage, seasonality, or on-floor operations?",
    });
  }

  if (draft.aiExperience === "None") {
    questions.push({
      id: "change-mgmt",
      question:
        "What change-management concerns did leadership raise (job fear, quality control, union or culture issues)?",
    });
  }

  if (draft.aiExperience === "Advanced") {
    questions.push({
      id: "shadow-ai",
      question:
        "Where is unsanctioned AI already in use, and what should Mazbien standardize versus unwind?",
    });
  }

  if ((draft.painPoints || "").toLowerCase().includes("repetitive")) {
    questions.push({
      id: "task-samples",
      question:
        "Can the client share 2–3 anonymized examples of the most repetitive tasks for lab design?",
    });
  }

  if (questions.length === 0) {
    questions.push({
      id: "success-metric",
      question:
        "What single success metric should this engagement move in the first 90 days?",
    });
  }

  return questions;
}

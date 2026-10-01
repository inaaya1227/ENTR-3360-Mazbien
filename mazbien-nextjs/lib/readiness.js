import { RADAR_AXES } from "./catalog";

function clamp(value) {
  return Math.max(8, Math.min(96, Math.round(value)));
}

export function departmentReadiness(department, draft) {
  const experience = draft.aiExperience || "Some";
  const tools = draft.tools || [];
  const pain = (draft.painPoints || "").toLowerCase();
  const outcomes = (draft.desiredOutcomes || "").toLowerCase();

  const awarenessBase = { None: 28, Some: 58, Advanced: 82 }[experience] ?? 50;
  const changeBase = { None: 32, Some: 60, Advanced: 78 }[experience] ?? 50;
  const toolScore = 30 + Math.min(tools.length, 8) * 7;

  const repeatableHint =
    pain.includes("repetitive") ||
    pain.includes("ticket") ||
    pain.includes("proposal") ||
    department === "Customer Service" ||
    department === "Finance";

  const dataHint =
    department === "Finance" ||
    department === "Engineering" ||
    department === "Legal & Compliance" ||
    tools.includes("Excel / Google Sheets") ||
    tools.includes("SAP");

  const changeBoost = outcomes.includes("adopt") || outcomes.includes("champion") ? 8 : 0;

  const scores = {
    "AI Awareness": clamp(awarenessBase + (department === "Engineering" ? 6 : 0)),
    "Tool Fluency": clamp(toolScore - (department === "Logistics" ? 8 : 0)),
    "Process Repeatability": clamp(repeatableHint ? 74 : 48),
    "Data Literacy": clamp(dataHint ? 70 : 46),
    "Change Readiness": clamp(changeBase + changeBoost),
  };

  return RADAR_AXES.map((axis) => ({ axis, score: scores[axis] }));
}

export function allDepartmentReadiness(draft) {
  return (draft.departments || []).map((department) => ({
    department,
    axes: departmentReadiness(department, draft),
  }));
}

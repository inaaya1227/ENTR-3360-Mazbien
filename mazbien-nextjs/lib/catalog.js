export const INDUSTRIES = [
  "Technology",
  "Logistics & Transport",
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Professional Services",
  "Retail",
  "Education",
];

export const ORG_SIZES = [
  { value: "1-50", label: "1–50 staff" },
  { value: "51-150", label: "51–150 staff" },
  { value: "151-500", label: "151–500 staff" },
  { value: "501-2000", label: "501–2,000 staff" },
  { value: "2000+", label: "2,000+ staff" },
];

export const DEPARTMENTS = [
  "Sales",
  "Customer Service",
  "Operations",
  "Finance",
  "Human Resources",
  "Marketing",
  "Engineering",
  "Legal & Compliance",
  "Logistics",
];

export const SUGGESTED_ROLES = {
  Sales: ["Account Executive", "Sales Operations Analyst", "SDR / BDR"],
  "Customer Service": ["Support Specialist", "Team Lead", "QA / Knowledge Manager"],
  Operations: ["Operations Manager", "Process Analyst", "Coordinator"],
  Finance: ["Financial Analyst", "Controller", "AP / AR Specialist"],
  "Human Resources": ["HR Business Partner", "Recruiter", "People Ops"],
  Marketing: ["Content Manager", "Demand Gen", "Brand Specialist"],
  Engineering: ["Software Engineer", "Engineering Manager", "QA Engineer"],
  "Legal & Compliance": ["Counsel", "Compliance Analyst", "Contract Manager"],
  Logistics: ["Dispatcher", "Warehouse Supervisor", "Supply Planner"],
};

export const TOOLS = [
  "Excel / Google Sheets",
  "Salesforce",
  "HubSpot",
  "Slack",
  "Microsoft 365 / Teams",
  "ServiceNow",
  "Zendesk",
  "Jira",
  "SAP",
  "Notion",
  "ChatGPT",
  "Microsoft Copilot",
];

export const AI_LEVELS = ["None", "Some", "Advanced"];

export const TIER_COPY = {
  bronze: {
    name: "Bronze",
    title: "Foundational Sprint",
    tagline: "Focused prompt foundations and one-department workflow labs.",
    price: "$12,000 – $18,000",
    duration: "3–4 weeks • 16–24 hours",
  },
  silver: {
    name: "Silver",
    title: "Operational Acceleration",
    tagline: "Cross-team pathways, champions, and measurable adoption checkpoints.",
    price: "$28,000 – $42,000",
    duration: "6–8 weeks • 32–48 hours",
  },
  gold: {
    name: "Gold",
    title: "Enterprise Transformation",
    tagline: "Multi-department rollout with governance, labs, and executive briefing.",
    price: "$54,000 – $78,000",
    duration: "8–10 weeks • 56–72 hours",
  },
  premium: {
    name: "Premium",
    title: "Manual Enterprise Scoping",
    tagline: "Custom configuration — never auto-assigned. Consultant-flagged only.",
    price: "Custom scoped",
    duration: "By engagement design",
  },
};

export const RADAR_AXES = [
  "AI Awareness",
  "Tool Fluency",
  "Process Repeatability",
  "Data Literacy",
  "Change Readiness",
];

export const MAX_DEPARTMENTS = 5;
export const MAX_ROLES = 10;

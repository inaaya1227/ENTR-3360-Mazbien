function answerText(answer) {
  return String(answer || "").toLowerCase();
}

function hasAny(answer, phrases) {
  const value = answerText(answer);
  return phrases.some((phrase) => {
    if (phrase.includes(" ") || phrase.length >= 5) return value.includes(phrase);
    return new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(value);
  });
}

function quantities(answer) {
  const matches = String(answer || "").match(/\d[\d,]*(?:\.\d+)?(?!\s*%)/g) || [];
  return matches
    .map((token) => Number(token.replace(/,/g, "")))
    .filter((value) => Number.isFinite(value));
}

function atLeast(answer, threshold) {
  return quantities(answer).some((value) => value >= threshold);
}

function percentAtLeast(answer, threshold) {
  const matches = String(answer || "").match(/(\d+(?:\.\d+)?)\s*%/g) || [];
  return matches.some((token) => Number.parseFloat(token) >= threshold);
}

const DEPARTMENT_QUESTIONS = [
  {
    department: "Sales",
    id: "sales-cycle",
    question: "How many hours per week do sellers spend writing proposals, follow-ups, or CRM notes?",
    branches: [
      {
        id: "sales-where-hours",
        because: "Answer cites about 8 or more hours a week, or language like all day or most of the week.",
        question: "Where do those hours concentrate — first drafts, revision cycles, or CRM hygiene after the call?",
        when: (answer) =>
          atLeast(answer, 8) ||
          hasAny(answer, ["all day", "full day", "most of the week", "most of their week", "half the week", "hours a day", "entire day"]),
      },
      {
        id: "sales-crm-quality",
        because: "Answer mentions CRM, Salesforce, HubSpot, or pipeline notes.",
        question: "Is CRM data complete enough to draft from, or are reps reconstructing the deal from memory and email?",
        when: (answer) => hasAny(answer, ["crm", "salesforce", "hubspot", "pipeline notes", "pipeline"]),
      },
      {
        id: "sales-proposal-cycle",
        because: "Answer mentions proposals, RFPs, or rewriting documents.",
        question: "What is the typical sales-cycle length, and which proposal sections are rewritten from scratch each time?",
        when: (answer) => hasAny(answer, ["proposal", "rfp", "sow", "statement of work", "rewrite", "rewritten"]),
      },
    ],
  },
  {
    department: "Customer Service",
    id: "ticket-volume",
    question: "What is typical weekly ticket or case volume, and what share is repetitive tier-1 work?",
    branches: [
      {
        id: "cs-sla",
        because: "Answer cites weekly volume of 200 or more, or words like backlog, hundred, or overwhelmed.",
        question: "What are the current first-response and resolution SLAs, and who handles escalation when those are missed?",
        when: (answer) =>
          atLeast(answer, 200) ||
          hasAny(answer, ["high volume", "hundred", "thousand", "overwhelmed", "flood of", "backlog"]),
      },
      {
        id: "cs-tier1-script",
        because: "Answer cites a repetitive or tier-1 share of about 40% or more.",
        question: "Which ticket categories are repetitive enough to script, and which must stay with a person?",
        when: (answer) =>
          percentAtLeast(answer, 40) ||
          hasAny(answer, ["repetitive", "tier-1", "tier 1", "tier one", "majority", "most of them", "most tickets", "copy-paste", "copy and paste"]),
      },
      {
        id: "cs-channels",
        because: "Answer names a channel or after-hours coverage.",
        question: "Which channels carry the volume — phone, chat, email, or social — and is coverage 24/7 or business hours only?",
        when: (answer) =>
          hasAny(answer, ["chat", "phone", "email", "after hours", "after-hours", "weekend", "24/7", "24x7", "omnichannel", "social"]),
      },
    ],
  },
  {
    department: "Operations",
    id: "ops-handoffs",
    question: "Where do handoffs, status chasing, or recurring reports slow the operating cadence?",
    branches: [
      {
        id: "ops-slowest-handoff",
        because: "Answer mentions handoffs or chasing another team.",
        question: "Which handoff is the slowest, and what does the receiving team still retype?",
        when: (answer) => hasAny(answer, ["handoff", "hand-off", "hand off", "between teams", "chase", "chasing", "retype"]),
      },
      {
        id: "ops-status-hours",
        because: "Answer mentions reports, dashboards, or status updates.",
        question: "Who assembles the recurring status report, and how many hours does one cycle take?",
        when: (answer) => hasAny(answer, ["report", "dashboard", "status", "weekly update", "recurring"]),
      },
      {
        id: "ops-exceptions",
        because: "Answer mentions exceptions, SOPs, or workarounds.",
        question: "How often do exceptions break the standard process, and who decides the workaround?",
        when: (answer) => hasAny(answer, ["exception", "sop", "standard work", "workaround", "variance"]),
      },
    ],
  },
  {
    department: "Finance",
    id: "finance-data",
    question: "Which finance datasets — forecasts, payroll, invoices, or close files — would staff want AI to touch?",
    branches: [
      {
        id: "finance-payroll-access",
        because: "Answer mentions payroll, salary, or compensation.",
        question: "Who is allowed to see payroll or compensation outputs, and is there a review step before anything leaves finance?",
        when: (answer) => hasAny(answer, ["payroll", "salary", "compensation", "ssn", "w-2", "w2"]),
      },
      {
        id: "finance-close",
        because: "Answer mentions close, forecast, or board reporting.",
        question: "How many days does the monthly close take, and which variance notes are rewritten by hand?",
        when: (answer) => hasAny(answer, ["close", "forecast", "board", "month-end", "month end", "variance"]),
      },
      {
        id: "finance-controls",
        because: "Answer mentions audit, SOX, controls, or reconciliation.",
        question: "Which reconciliations or audit trails must stay human-reviewed even if AI drafts the first pass?",
        when: (answer) => hasAny(answer, ["audit", "sox", "control", "reconciliation", "reconcile"]),
      },
    ],
  },
  {
    department: "Human Resources",
    id: "hr-process",
    question: "Which people processes are the most repetitive: screening, onboarding, policy questions, or employee communications?",
    branches: [
      {
        id: "hr-screening-volume",
        because: "Answer mentions screening, resumes, or recruiting.",
        question: "What volume of applications does a recruiter touch in a typical week, and which screen is rules-based versus judgment?",
        when: (answer) => hasAny(answer, ["screen", "resume", "recruit", "candidate", "interview", "applicant"]),
      },
      {
        id: "hr-employee-data",
        because: "Answer mentions employee, performance, medical, or leave data.",
        question: "Which employee-data fields must never be pasted into a public AI tool?",
        when: (answer) => hasAny(answer, ["employee data", "personal", "performance", "medical", "leave", "payroll", "benefits"]),
      },
      {
        id: "hr-handbook",
        because: "Answer mentions the handbook, policy, or onboarding.",
        question: "Is the handbook current enough to ground answers, or do HR partners still rely on tribal knowledge?",
        when: (answer) => hasAny(answer, ["handbook", "policy", "onboarding", "faq", "employee question"]),
      },
    ],
  },
  {
    department: "Marketing",
    id: "marketing-reuse",
    question: "How much of content, campaign, or reporting work is rewritten from a previous asset?",
    branches: [
      {
        id: "marketing-asset-volume",
        because: "Answer cites about 10 or more assets, or words like dozens or every week.",
        question: "How many assets ship in a typical week, and which formats are variants of the same brief?",
        when: (answer) =>
          atLeast(answer, 10) ||
          hasAny(answer, ["dozens", "high volume", "every week", "per week", "a week", "weekly", "constant"]),
      },
      {
        id: "marketing-approval",
        because: "Answer mentions brand, voice, claims, or approval.",
        question: "Who must approve brand or claim language before anything AI-assisted can publish?",
        when: (answer) => hasAny(answer, ["brand", "voice", "approval", "legal review", "claim"]),
      },
      {
        id: "marketing-metrics",
        because: "Answer mentions campaigns, ROI, attribution, or reporting.",
        question: "Which campaign metrics are assembled by hand, and how fresh is that data when the team reviews it?",
        when: (answer) => hasAny(answer, ["campaign", "roi", "attribution", "reporting", "metrics", "analytics"]),
      },
    ],
  },
  {
    department: "Engineering",
    id: "code-privacy",
    question: "Does the client already have an approved AI coding policy, or is code privacy still unresolved?",
    branches: [
      {
        id: "eng-no-policy",
        because: "Answer says a coding policy is missing or still unresolved.",
        question: "Which repos or data classes are off-limits until a policy exists, and who must approve one?",
        when: (answer) =>
          hasAny(answer, [
            "no policy",
            "unresolved",
            "not approved",
            "don't have",
            "do not have",
            "doesn't have",
            "does not have",
            "no approved",
            "still open",
            "none yet",
            "without a policy",
          ]),
      },
      {
        id: "eng-approved-tools",
        because: "Answer says a policy or approved tool already exists.",
        question: "Which tools are already approved, and where do engineers still work around the policy?",
        when: (answer) => {
          if (
            hasAny(answer, [
              "don't have",
              "do not have",
              "doesn't have",
              "does not have",
              "no policy",
              "not approved",
              "without a policy",
              "unresolved",
            ])
          ) {
            return false;
          }
          return hasAny(answer, [
            "approved policy",
            "have a policy",
            "has a policy",
            "already approved",
            "sanctioned",
            "allowed to use",
            "copilot is approved",
          ]);
        },
      },
      {
        id: "eng-customer-code",
        because: "Answer mentions proprietary, customer, or production code.",
        question: "Is customer or production code in scope for labs, or should exercises use synthetic repos only?",
        when: (answer) =>
          hasAny(answer, ["proprietary", "customer code", "production code", "production", "intellectual property", "secrets", "source code"]) ||
          /\bip\b/.test(answerText(answer)),
      },
    ],
  },
  {
    department: "Legal & Compliance",
    id: "legal-scope",
    question: "Which contracts, matters, or regulatory filings are in scope for AI-assisted drafting?",
    branches: [
      {
        id: "legal-privilege",
        because: "Answer mentions privilege, confidentiality, or outside counsel.",
        question: "How should privileged or matter-specific content be kept out of shared prompts and lab examples?",
        when: (answer) => hasAny(answer, ["privilege", "privileged", "confidential", "outside counsel", "matter"]),
      },
      {
        id: "legal-signoff",
        because: "Answer names a regulation or a filing.",
        question: "Which regulations govern the work in scope, and is there a required human sign-off on AI-assisted drafts?",
        when: (answer) => hasAny(answer, ["gdpr", "hipaa", "sox", "regulation", "regulator", "filing", "compliance"]),
      },
      {
        id: "legal-playbook",
        because: "Answer mentions playbooks, clause libraries, templates, or redlines.",
        question: "Do they already have clause playbooks or fallback positions the labs should follow?",
        when: (answer) => hasAny(answer, ["playbook", "clause", "template", "redline", "fallback", "standard terms"]),
      },
    ],
  },
  {
    department: "Logistics",
    id: "shift-coverage",
    question: "Are dispatch, warehouse, or planning shifts too tight for classroom training, and where does the delay show up?",
    branches: [
      {
        id: "logistics-shift-block",
        because: "Answer mentions shifts, nights, weekends, or coverage.",
        question: "Which shifts can spare people for a lab, and what is the longest block that still keeps the floor covered?",
        when: (answer) => hasAny(answer, ["shift", "night", "weekend", "coverage", "overtime", "floor"]),
      },
      {
        id: "logistics-exceptions",
        because: "Answer mentions delays, exceptions, or missed loads.",
        question: "What share of loads or orders need an exception decision, and who makes that call today?",
        when: (answer) => hasAny(answer, ["delay", "exception", "missed", "dwell", "detention", "late"]),
      },
      {
        id: "logistics-system",
        because: "Answer names a planning system or a spreadsheet workaround.",
        question: "Which system is the source of truth, and do planners still export to spreadsheets?",
        when: (answer) => hasAny(answer, ["tms", "wms", "sap", "spreadsheet", "excel", "radio", "export"]),
      },
    ],
  },
];

const CHANGE_MGMT = {
  id: "change-mgmt",
  question: "What change-management concerns did leadership raise (job fear, quality control, union or culture issues)?",
  branches: [
    {
      id: "change-job-fear",
      because: "Answer mentions job loss, replacement fear, or a union.",
      question: "Which roles are most worried about replacement, and has leadership already said what AI will not take over?",
      when: (answer) => hasAny(answer, ["job", "jobs", "replace", "replacement", "fear", "layoff", "union", "redundant"]),
    },
    {
      id: "change-quality-bar",
      because: "Answer mentions quality, mistakes, or trust.",
      question: "What quality bar must a draft meet before a manager will let the team use it with a client or customer?",
      when: (answer) => hasAny(answer, ["quality", "mistake", "accuracy", "trust", "error", "hallucin"]),
    },
  ],
};

const SHADOW_AI = {
  id: "shadow-ai",
  question: "Where is unsanctioned AI already in use, and what should Mazbien standardize versus unwind?",
  branches: [
    {
      id: "shadow-personal-accounts",
      because: "Answer mentions personal accounts, ChatGPT, or unsanctioned tools.",
      question: "Which teams are on personal accounts, and what data have they already pasted in?",
      when: (answer) => hasAny(answer, ["chatgpt", "personal", "shadow", "unsanctioned", "free account", "own account"]),
    },
    {
      id: "shadow-standard",
      because: "Answer mentions standardizing or an approved license.",
      question: "Which of those tools should Mazbien adopt as the standard, and which should be turned off?",
      when: (answer) => hasAny(answer, ["standardize", "standard", "copilot", "license", "approved", "unwind"]),
    },
  ],
};

const TASK_SAMPLES = {
  id: "task-samples",
  question: "Can the client share 2–3 anonymized examples of the most repetitive tasks for lab design?",
  branches: [
    {
      id: "task-sample-source",
      because: "Answer says they can share examples.",
      question: "Which system do those examples live in, and can they be anonymized before the lab?",
        when: (answer) => {
          if (hasAny(answer, ["can't", "cannot", "can not", "not allowed", "no samples", "won't share", "will not share"])) {
            return false;
          }
          return hasAny(answer, ["yes", "can share", "happy to", "anonymized", "samples ready", "will share"]);
        },
    },
    {
      id: "task-sample-blocked",
      because: "Answer says examples cannot be shared.",
      question: "What can they describe instead — task names, tools, and a rough time cost — without sharing the files?",
      when: (answer) => hasAny(answer, ["can't", "cannot", "can not", "confidential", "not allowed", "no samples", "won't share", "will not share"]),
    },
  ],
};

const SUCCESS_METRIC = {
  id: "success-metric",
  question: "What single success metric should this engagement move in the first 90 days?",
  branches: [],
};

function visibleFrom(items, answers) {
  const visible = [];
  for (const item of items) {
    visible.push({ id: item.id, question: item.question, depth: 1 });
    const answer = answers.find((entry) => entry.id === item.id)?.answer || "";
    if (!String(answer).trim()) continue;
    for (const branch of item.branches || []) {
      if (!branch.when(answer)) continue;
      visible.push({
        id: branch.id,
        question: branch.question,
        depth: 2,
        parentId: item.id,
        because: branch.because,
      });
    }
  }
  return visible;
}

export function generateFollowups(draft) {
  const departments = draft.departments || [];
  const primary = DEPARTMENT_QUESTIONS.filter((item) => departments.includes(item.department));

  if (draft.aiExperience === "None") primary.push(CHANGE_MGMT);
  if (draft.aiExperience === "Advanced") primary.push(SHADOW_AI);
  if (answerText(draft.painPoints).includes("repetitive")) primary.push(TASK_SAMPLES);
  if (primary.length === 0) primary.push(SUCCESS_METRIC);

  return visibleFrom(primary, draft.followupAnswers || []);
}

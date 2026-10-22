"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AI_LEVELS,
  DEPARTMENTS,
  INDUSTRIES,
  MAX_ROLES,
  ORG_SIZES,
  SUGGESTED_ROLES,
  TOOLS,
} from "@/lib/catalog";
import { intakeIsComplete, OUTCOME_WORD_LIMIT, PAIN_POINT_WORD_LIMIT, wordCount } from "@/lib/draftStore";
import { useDraft } from "@/lib/draftContext";
import PreviousStatus from "./PreviousStatus";
import ui from "./ui.module.css";

const STEPS = [
  { n: 1, title: "Organization" },
  { n: 2, title: "Departments" },
  { n: 3, title: "Roles" },
  { n: 4, title: "Readiness" },
];

function stepFromParam(value) {
  const step = Number(value);
  return step >= 1 && step <= 4 ? step : null;
}

export default function IntakeForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramStep = stepFromParam(searchParams.get("step"));
  const { draft, setDraft, ready } = useDraft();
  const [step, setStep] = useState(paramStep || 1);
  const restoredStep = useRef(false);
  const [error, setError] = useState("");
  const [otherTouched, setOtherTouched] = useState(false);
  const [otherIndustry, setOtherIndustry] = useState(false);
  const loadedCustomIndustry = Boolean(draft.industry) && !INDUSTRIES.includes(draft.industry);
  const showOther = otherTouched ? otherIndustry : loadedCustomIndustry;
  const painWords = wordCount(draft.painPoints);
  const outcomeWords = wordCount(draft.desiredOutcomes);

  useEffect(() => {
    if (!ready) return;
    if (paramStep) {
      setStep(paramStep);
      setDraft((current) => (current.intakeStep === paramStep ? current : { ...current, intakeStep: paramStep }));
      return;
    }
    if (restoredStep.current) return;
    restoredStep.current = true;
    if (draft.intakeStep >= 1 && draft.intakeStep <= 4) setStep(draft.intakeStep);
  }, [ready, paramStep, setDraft]);

  const stepError = useMemo(() => {
    if (step === 1) {
      if (!draft.companyName.trim() || !draft.size) {
        return "Company, industry, and size are required.";
      }
      if (showOther && !draft.industry.trim()) {
        return "Enter the industry when Other is selected.";
      }
      if (!draft.industry.trim()) {
        return "Company, industry, and size are required.";
      }
    }
    if (step === 2 && draft.departments.length === 0) {
      return "Select at least one department.";
    }
    if (step === 3) {
      const incompleteRole =
        draft.roles.length === 0 || draft.roles.some((role) => !role.name.trim() || !role.department);
      const missingExperience = (draft.departments || []).some((department) => !draft.departmentExperience?.[department]);
      if (incompleteRole && missingExperience) {
        return "Add at least one complete role, and choose an AI experience level for each department.";
      }
      if (incompleteRole) return "Add at least one complete role (name and department).";
      if (missingExperience) return "Choose an AI experience level for each department.";
    }
    if (step === 4) {
      if (!draft.painPoints.trim() || !draft.desiredOutcomes.trim()) {
        return "Pain points and desired outcomes are required.";
      }
      if (painWords > PAIN_POINT_WORD_LIMIT) {
        return `Pain points must be ${PAIN_POINT_WORD_LIMIT} words or fewer.`;
      }
      if (outcomeWords > OUTCOME_WORD_LIMIT) {
        return `Desired outcomes must be ${OUTCOME_WORD_LIMIT} words or fewer.`;
      }
    }
    return "";
  }, [step, draft, showOther, painWords, outcomeWords]);

  function update(fields) {
    setDraft({ ...draft, ...fields });
    setError("");
  }

  function chooseIndustry(value) {
    if (value === "Other") {
      setOtherTouched(true);
      setOtherIndustry(true);
      const keep = draft.industry && !INDUSTRIES.includes(draft.industry) ? draft.industry : "";
      update({ industry: keep });
      return;
    }
    setOtherTouched(true);
    setOtherIndustry(false);
    update({ industry: value });
  }

  function toggleDepartment(name) {
    setError("");
    setDraft((current) => {
      const experience = { ...(current.departmentExperience || {}) };
      const exists = current.departments.includes(name);
      if (exists) {
        delete experience[name];
        return {
          ...current,
          departments: current.departments.filter((item) => item !== name),
          roles: current.roles.filter((role) => role.department !== name),
          departmentExperience: experience,
        };
      }
      return { ...current, departments: [...current.departments, name] };
    });
  }

  function setDepartmentExperience(department, level) {
    update({
      departmentExperience: {
        ...(draft.departmentExperience || {}),
        [department]: level,
      },
    });
  }

  function toggleTool(name) {
    setDraft((current) => ({
      ...current,
      tools: current.tools.includes(name)
        ? current.tools.filter((item) => item !== name)
        : [...current.tools, name],
    }));
  }

  function addRole(prefill = { name: "", department: draft.departments[0] || "" }) {
    if (draft.roles.length >= MAX_ROLES) return;
    update({ roles: [...draft.roles, { id: crypto.randomUUID(), ...prefill }] });
  }

  function patchRole(id, fields) {
    update({
      roles: draft.roles.map((role) => (role.id === id ? { ...role, ...fields } : role)),
    });
  }

  function removeRole(id) {
    update({ roles: draft.roles.filter((role) => role.id !== id) });
  }

  function rememberStep(nextStep) {
    setStep(nextStep);
    setError("");
    setDraft((current) => ({ ...current, intakeStep: nextStep }));
    router.replace(`/intake?step=${nextStep}`, { scroll: false });
  }

  function next() {
    if (stepError) {
      setError(stepError);
      return;
    }
    if (step < 4) {
      rememberStep(step + 1);
      return;
    }
    if (!intakeIsComplete(draft)) {
      setError("Complete every required intake field before follow-up.");
      return;
    }
    setDraft((current) => ({ ...current, intakeStep: 4 }));
    router.push("/followup");
  }

  const roleCount = draft.roles.length;
  if (!ready) return <p>Loading intake…</p>;

  return (
    <div className={ui.card}>
      <div className={ui.header}>
        <h3>Client discovery intake</h3>
        <span className={ui.badge}>Consultant workspace</span>
      </div>
      <div className={ui.body}>
        <PreviousStatus draft={draft} />
        <div className={ui.stepper}>
          {STEPS.map((item) => (
            <div key={item.n} className={item.n === step ? ui.stepOn : ui.step}>
              <strong>Step {item.n}</strong>
              {item.title}
            </div>
          ))}
        </div>

        {step === 1 ? (
          <div className={ui.grid2}>
            <div className={ui.field}>
              <label className={ui.label} htmlFor="company">
                Company name *
              </label>
              <input
                id="company"
                className={ui.input}
                value={draft.companyName}
                onChange={(event) => update({ companyName: event.target.value })}
                placeholder="Apex Supply Chain Logistics"
              />
            </div>
            <div className={ui.field}>
              <label className={ui.label} htmlFor="industry">
                Industry *
              </label>
              <select
                id="industry"
                className={ui.select}
                value={showOther ? "Other" : draft.industry}
                onChange={(event) => chooseIndustry(event.target.value)}
              >
                <option value="">Select industry...</option>
                {INDUSTRIES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
                <option value="Other">Other</option>
              </select>
              {showOther ? (
                <>
                  <label className={ui.label} htmlFor="industry-other" style={{ marginTop: "0.65rem" }}>
                    Industry name *
                  </label>
                  <input
                    id="industry-other"
                    className={ui.input}
                    value={draft.industry}
                    onChange={(event) => update({ industry: event.target.value })}
                    placeholder="Type the industry"
                  />
                </>
              ) : null}
            </div>
            <div className={ui.field}>
              <label className={ui.label} htmlFor="size">
                Organization size *
              </label>
              <select
                id="size"
                className={ui.select}
                value={draft.size}
                onChange={(event) => update({ size: event.target.value })}
              >
                <option value="">Select headcount...</option>
                {ORG_SIZES.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <fieldset className={ui.checkField}>
            <legend className={ui.label}>Departments *</legend>
            <p className={ui.hint}>Select all that apply.</p>
            <div className={ui.checkList}>
              {DEPARTMENTS.map((dept) => {
                const on = draft.departments.includes(dept);
                return (
                  <label key={dept} className={ui.check}>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggleDepartment(dept)}
                    />
                    <span>{dept}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        {step === 3 ? (
          <>
            <p className={ui.hint} style={{ marginBottom: "0.75rem" }}>
              {roleCount} / {MAX_ROLES} roles. Set each department’s AI experience, then add the roles you heard.
            </p>
            {draft.departments.map((dept) => (
              <section key={dept} className={ui.deptBlock}>
                <h4>{dept}</h4>
                <div className={ui.field}>
                  <span className={ui.label}>AI experience *</span>
                  <div className={ui.chips}>
                    {AI_LEVELS.map((level) => (
                      <button
                        key={level}
                        type="button"
                        className={draft.departmentExperience?.[dept] === level ? ui.chipOn : ui.chip}
                        onClick={() => setDepartmentExperience(dept, level)}
                        aria-pressed={draft.departmentExperience?.[dept] === level}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                {draft.roles
                  .filter((role) => role.department === dept)
                  .map((role) => (
                    <div key={role.id} className={ui.roleRow}>
                      <div className={ui.field}>
                        <label className={ui.label} htmlFor={`role-name-${role.id}`}>
                          Role name *
                        </label>
                        <input
                          id={`role-name-${role.id}`}
                          className={ui.input}
                          value={role.name}
                          onChange={(event) => patchRole(role.id, { name: event.target.value })}
                          placeholder="Account Executive"
                        />
                      </div>
                      <div className={ui.field}>
                        <label className={ui.label} htmlFor={`role-dept-${role.id}`}>
                          Department *
                        </label>
                        <select
                          id={`role-dept-${role.id}`}
                          className={ui.select}
                          value={role.department}
                          onChange={(event) => patchRole(role.id, { department: event.target.value })}
                        >
                          <option value="">Select...</option>
                          {draft.departments.map((item) => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                      <button
                        type="button"
                        className={ui.btnSecondary}
                        onClick={() => removeRole(role.id)}
                        aria-label={role.name.trim() ? `Delete ${role.name.trim()}` : "Delete role"}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                <div className={ui.chips}>
                  {(SUGGESTED_ROLES[dept] || []).map((name) => (
                    <button
                      key={`${dept}-${name}`}
                      type="button"
                      className={ui.chip}
                      onClick={() => addRole({ name, department: dept })}
                    >
                      + {name}
                    </button>
                  ))}
                </div>
              </section>
            ))}
            {draft.roles
              .filter((role) => !draft.departments.includes(role.department))
              .map((role) => (
                <div key={role.id} className={ui.roleRow}>
                  <div className={ui.field}>
                    <label className={ui.label} htmlFor={`role-name-${role.id}`}>
                      Role name *
                    </label>
                    <input
                      id={`role-name-${role.id}`}
                      className={ui.input}
                      value={role.name}
                      onChange={(event) => patchRole(role.id, { name: event.target.value })}
                      placeholder="Account Executive"
                    />
                  </div>
                  <div className={ui.field}>
                    <label className={ui.label} htmlFor={`role-dept-${role.id}`}>
                      Department *
                    </label>
                    <select
                      id={`role-dept-${role.id}`}
                      className={ui.select}
                      value={role.department}
                      onChange={(event) => patchRole(role.id, { department: event.target.value })}
                    >
                      <option value="">Select...</option>
                      {draft.departments.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="button"
                    className={ui.btnSecondary}
                    onClick={() => removeRole(role.id)}
                    aria-label={role.name.trim() ? `Delete ${role.name.trim()}` : "Delete role"}
                  >
                    Delete
                  </button>
                </div>
              ))}
            <button type="button" className={ui.btnSecondary} onClick={() => addRole()}>
              Add blank role
            </button>
          </>
        ) : null}

        {step === 4 ? (
          <>
            <div className={ui.field}>
              <span className={ui.label}>Current tools / workflows</span>
              <div className={ui.chips}>
                {TOOLS.map((tool) => {
                  const on = draft.tools.includes(tool);
                  return (
                    <button
                      key={tool}
                      type="button"
                      className={on ? ui.chipOn : ui.chip}
                      onClick={() => toggleTool(tool)}
                    >
                      {tool}
                    </button>
                  );
                })}
              </div>
              <input
                className={ui.input}
                style={{ marginTop: "0.65rem" }}
                placeholder="Other tools, comma-separated"
                value={draft.customTools}
                onChange={(event) => update({ customTools: event.target.value })}
              />
            </div>
            <div className={ui.field}>
              <label className={ui.label} htmlFor="pain">
                Pain points / repetitive tasks *
              </label>
              <textarea
                id="pain"
                className={ui.textarea}
                value={draft.painPoints}
                onChange={(event) => update({ painPoints: event.target.value })}
                placeholder="Sales spends 12 hours/week on custom proposals; support is flooded with tier-1 tickets..."
                aria-describedby="pain-count"
              />
              <p id="pain-count" className={painWords > PAIN_POINT_WORD_LIMIT ? ui.error : ui.hint}>
                {painWords}/{PAIN_POINT_WORD_LIMIT} words
              </p>
            </div>
            <div className={ui.field}>
              <label className={ui.label} htmlFor="outcomes">
                Desired outcomes *
              </label>
              <textarea
                id="outcomes"
                className={ui.textarea}
                value={draft.desiredOutcomes}
                onChange={(event) => update({ desiredOutcomes: event.target.value })}
                placeholder="Reduce proposal cycle time, deflect 30% of tier-1 tickets, establish an AI use policy..."
                aria-describedby="outcomes-count"
              />
              <p id="outcomes-count" className={outcomeWords > OUTCOME_WORD_LIMIT ? ui.error : ui.hint}>
                {outcomeWords}/{OUTCOME_WORD_LIMIT} words
              </p>
            </div>
          </>
        ) : null}

        {error ? <p className={ui.error}>{error}</p> : null}
      </div>
      <div className={ui.footer}>
        <button
          type="button"
          className={ui.btnSecondary}
          onClick={() => rememberStep(Math.max(1, step - 1))}
          disabled={step === 1}
        >
          Back
        </button>
        <button type="button" className={ui.btn} onClick={next}>
          {step === 4 ? "Continue to follow-up" : "Next step"}
        </button>
      </div>
    </div>
  );
}

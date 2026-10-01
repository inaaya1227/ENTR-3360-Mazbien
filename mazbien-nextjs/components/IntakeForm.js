"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AI_LEVELS,
  DEPARTMENTS,
  INDUSTRIES,
  MAX_DEPARTMENTS,
  MAX_ROLES,
  ORG_SIZES,
  SUGGESTED_ROLES,
  TOOLS,
} from "@/lib/catalog";
import { intakeIsComplete } from "@/lib/draftStore";
import { useDraft } from "@/lib/draftContext";
import ui from "./ui.module.css";

const STEPS = [
  { n: 1, title: "Organization" },
  { n: 2, title: "Departments" },
  { n: 3, title: "Roles" },
  { n: 4, title: "Readiness" },
];

export default function IntakeForm() {
  const router = useRouter();
  const { draft, setDraft, ready } = useDraft();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const stepError = useMemo(() => {
    if (step === 1 && (!draft.companyName.trim() || !draft.industry || !draft.size)) {
      return "Company, industry, and size are required.";
    }
    if (step === 2 && draft.departments.length === 0) {
      return "Select at least one department.";
    }
    if (step === 3 && (draft.roles.length === 0 || draft.roles.some((role) => !role.name.trim() || !role.department))) {
      return "Add at least one complete role (name and department).";
    }
    if (
      step === 4 &&
      (!draft.aiExperience || !draft.painPoints.trim() || !draft.desiredOutcomes.trim())
    ) {
      return "AI experience, pain points, and desired outcomes are required.";
    }
    return "";
  }, [step, draft]);

  function update(fields) {
    setDraft({ ...draft, ...fields });
    setError("");
  }

  function toggleDepartment(name) {
    setDraft((current) => {
      const exists = current.departments.includes(name);
      if (exists) {
        return {
          ...current,
          departments: current.departments.filter((item) => item !== name),
          roles: current.roles.filter((role) => role.department !== name),
        };
      }
      if (current.departments.length >= MAX_DEPARTMENTS) return current;
      return { ...current, departments: [...current.departments, name] };
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

  function next() {
    if (stepError) {
      setError(stepError);
      return;
    }
    if (step < 4) {
      setStep(step + 1);
      return;
    }
    if (!intakeIsComplete(draft)) {
      setError("Complete every required intake field before follow-up.");
      return;
    }
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
                value={draft.industry}
                onChange={(event) => update({ industry: event.target.value })}
              >
                <option value="">Select industry...</option>
                {INDUSTRIES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
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
          <>
            <p className={ui.hint} style={{ marginBottom: "0.75rem" }}>
              Select up to {MAX_DEPARTMENTS} departments. {draft.departments.length} selected.
            </p>
            <div className={ui.chips}>
              {DEPARTMENTS.map((dept) => {
                const on = draft.departments.includes(dept);
                return (
                  <button
                    key={dept}
                    type="button"
                    className={on ? ui.chipOn : ui.chip}
                    onClick={() => toggleDepartment(dept)}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <p className={ui.hint} style={{ marginBottom: "0.75rem" }}>
              {roleCount} / {MAX_ROLES} roles. Use suggested titles or type your own.
            </p>
            {draft.roles.map((role) => (
              <div key={role.id} className={ui.grid2}>
                <div className={ui.field}>
                  <label className={ui.label}>Role name *</label>
                  <input
                    className={ui.input}
                    value={role.name}
                    onChange={(event) => patchRole(role.id, { name: event.target.value })}
                    placeholder="Account Executive"
                  />
                </div>
                <div className={ui.field}>
                  <label className={ui.label}>Department *</label>
                  <select
                    className={ui.select}
                    value={role.department}
                    onChange={(event) => patchRole(role.id, { department: event.target.value })}
                  >
                    <option value="">Select...</option>
                    {draft.departments.map((dept) => (
                      <option key={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <div className={ui.chips} style={{ marginBottom: "0.75rem" }}>
              {draft.departments.flatMap((dept) =>
                (SUGGESTED_ROLES[dept] || []).map((name) => (
                  <button
                    key={`${dept}-${name}`}
                    type="button"
                    className={ui.chip}
                    onClick={() => addRole({ name, department: dept })}
                  >
                    + {name}
                  </button>
                )),
              )}
            </div>
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
              />
            </div>
            <div className={ui.field}>
              <span className={ui.label}>AI experience level *</span>
              <div className={ui.chips}>
                {AI_LEVELS.map((level) => (
                  <button
                    key={level}
                    type="button"
                    className={draft.aiExperience === level ? ui.chipOn : ui.chip}
                    onClick={() => update({ aiExperience: level })}
                  >
                    {level}
                  </button>
                ))}
              </div>
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
              />
            </div>
          </>
        ) : null}

        {error ? <p className={ui.error}>{error}</p> : null}
      </div>
      <div className={ui.footer}>
        <button
          type="button"
          className={ui.btnSecondary}
          onClick={() => setStep((current) => Math.max(1, current - 1))}
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

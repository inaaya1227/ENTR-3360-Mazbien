"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { TIER_COPY } from "@/lib/catalog";
import { suggestAddons } from "@/lib/addons";
import { saveAssessmentForReview } from "@/lib/assessments";
import { intakeIsComplete } from "@/lib/draftStore";
import { useDraft } from "@/lib/draftContext";
import { buildChecklist, buildPathways, buildProposalSummary } from "@/lib/pathways";
import { allDepartmentReadiness } from "@/lib/readiness";
import { resolveDisplayTier, scoreAssessment } from "@/lib/scoring";
import ReadinessRadar from "./ReadinessRadar";
import ui from "./ui.module.css";

export default function DashboardClient() {
  const router = useRouter();
  const { draft, setDraft, ready } = useDraft();
  const [tab, setTab] = useState("client");
  const [deptIndex, setDeptIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const scoring = useMemo(
    () =>
      scoreAssessment({
        roles: draft.roles,
        departments: draft.departments,
        aiExperience: draft.aiExperience,
      }),
    [draft],
  );
  const displayTier = resolveDisplayTier(scoring.recommendedTier, draft.premiumOverride);
  const copy = TIER_COPY[displayTier];
  const pathways = useMemo(() => buildPathways(draft), [draft]);
  const addons = useMemo(() => suggestAddons(draft, scoring.recommendedTier), [draft, scoring.recommendedTier]);
  const readiness = useMemo(() => allDepartmentReadiness(draft), [draft]);
  const selectedDept = readiness[deptIndex] || readiness[0];
  const checklist = useMemo(() => buildChecklist(draft, displayTier), [draft, displayTier]);
  const summary = useMemo(
    () => buildProposalSummary(draft, scoring, displayTier, copy),
    [draft, scoring, displayTier, copy],
  );

  function persist(next) {
    setDraft(next);
  }

  async function confirmSend() {
    setSaving(true);
    setMessage("");
    const result = await saveAssessmentForReview({ draft, scoring, displayTier, pathways });
    setSaving(false);
    if (!result.ok) {
      setMessage(result.error);
      return;
    }
    persist({ ...draft, status: "sent_for_review" });
    setModalOpen(false);
    setMessage(
      result.warning
        ? `Marked sent for review. ${result.warning}`
        : "Marked sent for review. Nothing was billed or sent to the client.",
    );
    router.push("/history");
  }

  if (!ready) {
    return <p>Loading dashboard…</p>;
  }

  if (!intakeIsComplete(draft)) {
    return (
      <div className={ui.card}>
        <div className={ui.body}>
          <p>No complete intake found. Start with discovery, then follow-up.</p>
          <button type="button" className={ui.btn} style={{ marginTop: "1rem" }} onClick={() => router.push("/")}>
            Go to intake
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={ui.tabs}>
        <button type="button" className={tab === "client" ? ui.tabOn : ui.tab} onClick={() => setTab("client")}>
          Client recommendation
        </button>
        <button type="button" className={tab === "delivery" ? ui.tabOn : ui.tab} onClick={() => setTab("delivery")}>
          Internal delivery plan
        </button>
      </div>

      {message ? <div className={ui.callout}>{message}</div> : null}

      {tab === "client" ? (
        <>
          <div className={ui.card} style={{ marginBottom: "1rem" }}>
            <div className={ui.header}>
              <div>
                <h3>
                  {copy.name} · {copy.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                  {draft.companyName} · score {scoring.total} · recommended {scoring.copy.name}
                  {draft.premiumOverride ? " · Premium override on" : ""}
                </p>
              </div>
              <span className={ui.badge}>{copy.price}</span>
            </div>
            <div className={ui.body}>
              <p>{copy.tagline}</p>
              <p className={ui.hint} style={{ marginTop: "0.4rem" }}>
                {copy.duration}
              </p>
            </div>
          </div>

          <div className={ui.grid2} style={{ marginBottom: "1rem" }}>
            <div className={ui.card}>
              <div className={ui.header}>
                <h3>AI readiness radar</h3>
                <select
                  className={ui.select}
                  style={{ width: "auto" }}
                  value={String(deptIndex)}
                  onChange={(event) => setDeptIndex(Number(event.target.value))}
                >
                  {readiness.map((item, index) => (
                    <option key={item.department} value={index}>
                      {item.department}
                    </option>
                  ))}
                </select>
              </div>
              <div className={ui.body}>
                {selectedDept ? <ReadinessRadar axes={selectedDept.axes} /> : <p>Select departments in intake.</p>}
              </div>
            </div>
            <div className={ui.card}>
              <div className={ui.header}>
                <h3>Why this tier?</h3>
              </div>
              <div className={ui.body} style={{ padding: 0 }}>
                <table className={ui.table}>
                  <thead>
                    <tr>
                      <th>Input</th>
                      <th>Value</th>
                      <th>Rule</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scoring.breakdown.map((row) => (
                      <tr key={row.input}>
                        <td>{row.input}</td>
                        <td>{row.value}</td>
                        <td>{row.rule}</td>
                        <td>{row.points}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={3}>
                        <strong>Total · Silver ≥ {scoring.thresholds.silver}, Gold ≥ {scoring.thresholds.gold}</strong>
                      </td>
                      <td>
                        <strong>{scoring.total}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={ui.hint} style={{ padding: "0.75rem 1rem" }}>
                  Premium is never auto-assigned. Use the override below for custom enterprise scoping.
                </p>
              </div>
            </div>
          </div>

          <div className={ui.card} style={{ marginBottom: "1rem" }}>
            <div className={ui.header}>
              <h3>Role-based training pathways</h3>
            </div>
            <div className={ui.body}>
              {pathways.map((pathway) => (
                <div key={`${pathway.department}-${pathway.name}`} style={{ marginBottom: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.35rem" }}>
                    <strong>{pathway.name}</strong>
                    <span className={ui.hint}>{pathway.department}</span>
                    <span className={`${ui.badge} ${ui[pathway.priority.toLowerCase()]}`}>{pathway.priority}</span>
                  </div>
                  <ul style={{ marginLeft: "1.1rem", fontSize: "0.88rem" }}>
                    {pathway.modules.map((moduleName) => (
                      <li key={moduleName}>{moduleName}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={ui.card} style={{ marginBottom: "1rem" }}>
            <div className={ui.header}>
              <h3>Suggested add-ons</h3>
            </div>
            <div className={ui.body}>
              {addons.map((addon) => (
                <label key={addon.id} style={{ display: "block", marginBottom: "0.85rem" }}>
                  <input
                    type="checkbox"
                    checked={draft.addonOverrides[addon.id] !== false}
                    onChange={(event) =>
                      persist({
                        ...draft,
                        addonOverrides: { ...draft.addonOverrides, [addon.id]: event.target.checked },
                      })
                    }
                  />{" "}
                  <strong>{addon.name}</strong>
                  <div className={ui.hint}>{addon.why}</div>
                </label>
              ))}
            </div>
          </div>

          <div className={ui.card}>
            <div className={ui.header}>
              <h3>Consultant notes and overrides</h3>
            </div>
            <div className={ui.body}>
              <label className={ui.field}>
                <span className={ui.label}>
                  <input
                    type="checkbox"
                    checked={draft.premiumOverride}
                    onChange={(event) => persist({ ...draft, premiumOverride: event.target.checked })}
                  />{" "}
                  Flag Premium (manual enterprise scoping)
                </span>
                <span className={ui.hint}>Does not change the explainable Bronze/Silver/Gold score.</span>
              </label>
              <div className={ui.field}>
                <label className={ui.label} htmlFor="notes">
                  Consultant notes
                </label>
                <textarea
                  id="notes"
                  className={ui.textarea}
                  value={draft.consultantNotes}
                  onChange={(event) => persist({ ...draft, consultantNotes: event.target.value })}
                  placeholder="Override rationale, client politics, or scope caveats..."
                />
              </div>
            </div>
            <div className={ui.footer}>
              <span className={ui.hint}>Workflow ends here. No billing. No client send.</span>
              <button type="button" className={ui.btnBrass} onClick={() => setModalOpen(true)}>
                Send For Review
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={ui.card} style={{ marginBottom: "1rem" }}>
            <div className={ui.header}>
              <h3>Module sequencing by priority</h3>
            </div>
            <div className={ui.body}>
              {["High", "Medium", "Low"].map((priority) => (
                <div key={priority} style={{ marginBottom: "1rem" }}>
                  <strong>{priority} priority</strong>
                  <ul style={{ marginLeft: "1.1rem", marginTop: "0.35rem" }}>
                    {pathways
                      .filter((item) => item.priority === priority)
                      .flatMap((item) =>
                        item.modules.map((moduleName) => (
                          <li key={`${item.name}-${moduleName}`}>
                            {item.name}: {moduleName}
                          </li>
                        )),
                      )}
                    {pathways.filter((item) => item.priority === priority).length === 0 ? (
                      <li className={ui.hint}>None</li>
                    ) : null}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={ui.card} style={{ marginBottom: "1rem" }}>
            <div className={ui.header}>
              <h3>Proposal summary</h3>
            </div>
            <div className={ui.body}>
              <p>{summary}</p>
            </div>
          </div>
          <div className={ui.card}>
            <div className={ui.header}>
              <h3>Implementation checklist</h3>
            </div>
            <div className={ui.body}>
              {checklist.map((item) => (
                <label key={item} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.65rem" }}>
                  <input
                    type="checkbox"
                    checked={Boolean(draft.checklist[item])}
                    onChange={(event) =>
                      persist({
                        ...draft,
                        checklist: { ...draft.checklist, [item]: event.target.checked },
                      })
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div className={ui.footer}>
              <button type="button" className={ui.btnSecondary} onClick={() => router.push("/followup")}>
                Re-edit follow-up
              </button>
              <button type="button" className={ui.btnBrass} onClick={() => setModalOpen(true)}>
                Send For Review
              </button>
            </div>
          </div>
        </>
      )}

      {modalOpen ? (
        <div className={ui.modalBack}>
          <div className={ui.modal}>
            <div className={ui.header}>
              <h3>Confirm Send For Review</h3>
              <button type="button" className={ui.btnSecondary} onClick={() => setModalOpen(false)}>
                Close
              </button>
            </div>
            <div className={ui.body}>
              <div className={ui.callout}>
                This finalizes the draft for senior partner review. It does not trigger billing or send anything to the
                client.
              </div>
              <p>
                <strong>Client:</strong> {draft.companyName}
              </p>
              <p>
                <strong>Tier:</strong> {copy.name} — {copy.title}
              </p>
              <p>
                <strong>Roles:</strong> {draft.roles.length}
              </p>
            </div>
            <div className={ui.footer}>
              <button type="button" className={ui.btnSecondary} onClick={() => setModalOpen(false)}>
                Cancel
              </button>
              <button type="button" className={ui.btn} disabled={saving} onClick={confirmSend}>
                {saving ? "Saving..." : "Mark sent for review"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

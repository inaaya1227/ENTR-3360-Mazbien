"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { TIER_COPY } from "@/lib/catalog";
import { ADDON_CATALOG, buildSelectedAddons, isCatalogAddonSelected, isCustomAddonSelected, suggestAddons } from "@/lib/addons";
import { saveAssessmentForReview } from "@/lib/assessments";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { intakeIsComplete } from "@/lib/draftStore";
import { useDraft } from "@/lib/draftContext";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { buildChecklist, buildPathways, buildProposalSummary } from "@/lib/pathways";
import { allDepartmentReadiness } from "@/lib/readiness";
import { resolveDisplayTier, scoreAssessment } from "@/lib/scoring";
import PreviousStatus from "./PreviousStatus";
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
  const [customName, setCustomName] = useState("");
  const [customPrice, setCustomPrice] = useState("");
  const [customError, setCustomError] = useState("");
  const [catalog, setCatalog] = useState(null);
  const [catalogError, setCatalogError] = useState("");
  const [aiDraft, setAiDraft] = useState(null);
  const [aiError, setAiError] = useState("");
  const [drafting, setDrafting] = useState(false);
  const [summaryDraft, setSummaryDraft] = useState("");
  const [summaryError, setSummaryError] = useState("");
  const [summarizing, setSummarizing] = useState(false);

  const scoring = useMemo(
    () =>
      scoreAssessment({
        roles: draft.roles,
        departments: draft.departments,
        departmentExperience: draft.departmentExperience || {},
      }),
    [draft],
  );
  const displayTier = resolveDisplayTier(scoring.recommendedTier, draft.premiumOverride);
  const copy = TIER_COPY[displayTier];
  const pathways = useMemo(() => buildPathways(draft), [draft]);
  const suggestedIds = useMemo(
    () => (catalog ? suggestedIdsFor(draft, scoring.recommendedTier, catalog) : new Set()),
    [catalog, draft, scoring.recommendedTier],
  );
  const orderedCatalog = useMemo(() => {
    return [...(catalog || [])].sort(
      (a, b) => Number(suggestedIds.has(b.id)) - Number(suggestedIds.has(a.id)),
    );
  }, [catalog, suggestedIds]);
  const selectedAddons = useMemo(
    () => (catalog ? buildSelectedAddons(draft, scoring.recommendedTier, catalog) : []),
    [catalog, draft, scoring.recommendedTier],
  );

  useEffect(() => {
    let cancelled = false;
    fetchAddonCatalog().then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setCatalogError(result.error);
        setCatalog([]);
        return;
      }
      setCatalogError("");
      setCatalog(withCatalogPrices(result.rows));
    });
    return () => {
      cancelled = true;
    };
  }, []);
  const quote = useMemo(() => buildQuote(displayTier, selectedAddons), [displayTier, selectedAddons]);
  const readiness = useMemo(() => allDepartmentReadiness(draft), [draft]);
  const selectedDept = readiness[deptIndex] || readiness[0];
  const checklist = useMemo(() => buildChecklist(draft, displayTier), [draft, displayTier]);
  const summary = useMemo(
    () => buildProposalSummary(draft, scoring, displayTier, copy, quote),
    [draft, scoring, displayTier, copy, quote],
  );

  useEffect(() => {
    if (!draft.assessmentId) {
      setPayment(null);
      return;
    }
    const supabase = getSupabaseClient();
    if (!supabase) return;
    let cancelled = false;
    supabase
      .from("payments")
      .select("status, paid_at, amount_cents, currency")
      .eq("assessment_id", draft.assessmentId)
      .order("created_at", { ascending: false })
      .limit(1)
      .then(({ data }) => {
        if (!cancelled) setPayment(data?.[0] || null);
      });
    return () => {
      cancelled = true;
    };
  }, [draft.assessmentId]);

  function persist(next) {
    setDraft(next);
  }

  function toggleAddon(id, checked) {
    persist({
      ...draft,
      addonOverrides: { ...draft.addonOverrides, [id]: checked },
    });
  }

  function addCustomAddon() {
    const name = customName.trim();
    const price = Number(String(customPrice).replace(/[$,\s]/g, ""));
    if (!name) {
      setCustomError("Type an add-on name first.");
      return;
    }
    if (!Number.isInteger(price) || price <= 0) {
      setCustomError("Enter a price in whole dollars.");
      return;
    }
    const duplicate = (draft.customAddons || []).some((item) => item.name.trim().toLowerCase() === name.toLowerCase());
    if (duplicate) {
      setCustomError("That add-on is already on the list.");
      return;
    }
    setCustomError("");
    persist({
      ...draft,
      customAddons: [...(draft.customAddons || []), { id: `custom:${crypto.randomUUID()}`, name, price }],
    });
    setCustomName("");
    setCustomPrice("");
  }

  function removeCustomAddon(id) {
    const nextOverrides = { ...draft.addonOverrides };
    delete nextOverrides[id];
    persist({
      ...draft,
      addonOverrides: nextOverrides,
      customAddons: (draft.customAddons || []).filter((item) => item.id !== id),
    });
  }

  async function draftWithOpenRouter() {
    setDrafting(true);
    setAiError("");
    const supabase = getSupabaseClient();
    const session = supabase ? (await supabase.auth.getSession()).data.session : null;
    if (!session?.access_token) {
      setDrafting(false);
      setAiError("Sign in again before drafting a proposal.");
      return;
    }

    try {
      const response = await fetch("/api/proposal", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: draft.companyName,
          industry: draft.industry,
          size: draft.size,
          departments: draft.departments,
          departmentExperience: draft.departmentExperience,
          roles: (draft.roles || []).map((role) => ({ name: role.name, department: role.department })),
          painPoints: draft.painPoints,
          desiredOutcomes: draft.desiredOutcomes,
          followupAnswers: (draft.followupAnswers || []).map((item) => ({
            question: item.question,
            answer: item.answer,
          })),
          tier: copy.name,
          score: scoring.total,
          quote: quote.totalLabel,
          pathways: pathways.map((item) => ({
            name: item.name,
            department: item.department,
            priority: item.priority,
            modules: item.modules,
          })),
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setAiError(data.error || "OpenRouter could not draft the proposal.");
        return;
      }
      setAiDraft({ source: summary, text: data.summary || "" });
    } catch {
      setAiError("OpenRouter could not be reached.");
    } finally {
      setDrafting(false);
    }
  }

  async function draftSummaryWithAi() {
    setSummarizing(true);
    setSummaryError("");
    try {
      if (!draft.assessmentId) {
        setSummaryError("Send For Review first. The summary is drafted from the saved assessment.");
        return;
      }
      const supabase = getSupabaseClient();
      const session = supabase ? (await supabase.auth.getSession()).data.session : null;
      if (!session?.access_token) {
        setSummaryError("Sign in again before drafting a summary.");
        return;
      }
      const response = await fetch("/api/summary", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ assessmentId: draft.assessmentId }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setSummaryError(data.error || "OpenRouter could not draft the summary.");
        return;
      }
      setSummaryDraft(data.summary || "");
    } catch {
      setSummaryError("OpenRouter could not be reached.");
    } finally {
      setSummarizing(false);
    }
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
    persist({
      ...draft,
      status: "sent_for_review",
      assessmentId: result.id || draft.assessmentId,
    });
    setModalOpen(false);
    const saved = result.updated ? "Updated the existing review record." : "Marked sent for review.";
    setMessage(result.warning ? `${saved} ${result.warning}` : `${saved} Nothing was billed or sent to the client.`);
    router.push("/history");
  }

  async function collectDeposit() {
    setDepositing(true);
    setDepositError("");
    try {
      const supabase = getSupabaseClient();
      const session = supabase ? (await supabase.auth.getSession()).data.session : null;
      if (!session?.access_token) {
        setDepositError("Sign in again before collecting a deposit.");
        return;
      }
      const response = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ assessmentId: draft.assessmentId }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.url) {
        setDepositError(data.error || "Stripe could not start the deposit.");
        return;
      }
      window.location.assign(data.url);
    } catch {
      setDepositError("Stripe could not be reached.");
    } finally {
      setDepositing(false);
    }
  }

  if (!ready) {
    return <p>Loading dashboard…</p>;
  }

  if (!intakeIsComplete(draft)) {
    return (
      <div className={ui.card}>
        <div className={ui.body}>
          <p>No complete intake found. Start with discovery, then follow-up.</p>
          <button type="button" className={ui.btn} style={{ marginTop: "1rem" }} onClick={() => router.push("/intake")}>
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

      <PreviousStatus draft={draft} />
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
              <span className={ui.badge}>{quote.totalLabel}</span>
            </div>
            <div className={ui.body}>
              <p>{copy.tagline}</p>
              <p className={ui.hint} style={{ marginTop: "0.4rem" }}>
                {copy.duration}
              </p>
              <div style={{ marginTop: "1rem", display: "grid", gap: "0.45rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  <span>
                    {copy.name} base{draft.premiumOverride ? " · Premium override" : ""}
                  </span>
                  <span>{quote.baseLabel}</span>
                </div>
                {quote.lines.map((line) => (
                  <div key={line.id} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <span>{line.name}</span>
                    <span>+ {formatAddonPrice(line.price)}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  <strong>Total</strong>
                  <strong>{quote.totalLabel}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className={ui.card} style={{ marginBottom: "1rem" }}>
            <div className={ui.header}>
              <h3>Recommendation summary</h3>
            </div>
            <div className={ui.body}>
              <p className={ui.hint}>The tier, score, and price above stay on the rule engine.</p>
              <label className={ui.label} style={{ display: "block", marginTop: "0.85rem" }}>
                AI-drafted, review before use.
                <textarea
                  className={ui.textarea}
                  style={{ marginTop: "0.4rem" }}
                  value={summaryDraft}
                  onChange={(event) => setSummaryDraft(event.target.value)}
                />
              </label>
              {summaryError ? (
                <p className={ui.error} style={{ marginTop: "0.75rem" }}>
                  {summaryError}
                </p>
              ) : null}
            </div>
            <div className={ui.footer}>
              <span className={ui.hint}>Uses the saved assessment. Editing this box does not change the quote.</span>
              <button type="button" className={ui.btnSecondary} disabled={summarizing} onClick={draftSummaryWithAi}>
                {summarizing ? "Drafting…" : "Draft summary with AI"}
              </button>
            </div>
          </div>

          {draft.status === "sent_for_review" && draft.assessmentId ? (
            <div className={ui.card} style={{ marginBottom: "1rem" }}>
              <div className={ui.header}>
                <h3>Deposit</h3>
              </div>
              <div className={ui.body}>
                <p className={ui.hint}>
                  Deposit status: {payment?.status || "none"}. The tier, score, and quote stay on the rule engine.
                </p>
                {depositError ? (
                  <p className={ui.error} style={{ marginTop: "0.75rem" }}>
                    {depositError}
                  </p>
                ) : null}
              </div>
              {payment?.status === "paid" ? null : (
                <div className={ui.footer}>
                  <span className={ui.hint}>Stripe test mode. Nothing is billed in live mode.</span>
                  <button type="button" className={ui.btnSecondary} disabled={depositing} onClick={collectDeposit}>
                    {depositing ? "Opening Stripe…" : "Collect deposit (test mode)"}
                  </button>
                </div>
              )}
            </div>
          ) : null}

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
              <h3>Add-ons</h3>
              <span className={ui.badge}>{selectedAddons.length} selected</span>
            </div>
            <div className={ui.body}>
              <p className={ui.hint} style={{ marginBottom: "0.9rem" }}>
                Suggested items start checked. Each selected add-on is added to the tier price. Premium replaces the tier
                range and still adds these prices. Send For Review saves the same total.
              </p>
              {catalogError ? <p className={ui.hint}>{catalogError}</p> : null}
              {catalog === null ? <p className={ui.hint}>Loading add-ons…</p> : null}
              {orderedCatalog.map((addon) => {
                const suggested = suggestedIds.has(addon.id);
                return (
                  <label key={addon.id} style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                    <input
                      type="checkbox"
                      checked={isCatalogAddonSelected(draft, addon.id, suggestedIds)}
                      onChange={(event) => toggleAddon(addon.id, event.target.checked)}
                      style={{ marginTop: "0.2rem" }}
                    />
                    <span>
                      <strong>{addon.name}</strong>{" "}
                      <span className={ui.badge}>{formatAddonPrice(addon.price)}</span>{" "}
                      {suggested ? <span className={ui.badge}>Suggested</span> : null}
                      <div className={ui.hint}>{addon.detail}</div>
                      {suggested ? <div className={ui.hint}>{addon.why}</div> : null}
                    </span>
                  </label>
                );
              })}
              {(draft.customAddons || []).map((addon) => (
                <div key={addon.id} style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                  <input
                    type="checkbox"
                    checked={isCustomAddonSelected(draft, addon.id)}
                    onChange={(event) => toggleAddon(addon.id, event.target.checked)}
                    style={{ marginTop: "0.2rem" }}
                  />
                  <span style={{ flex: 1 }}>
                    <strong>{addon.name}</strong> <span className={ui.badge}>{formatAddonPrice(addon.price)}</span>{" "}
                    <span className={ui.badge}>Custom</span>
                    <div className={ui.hint}>Added for this client.</div>
                  </span>
                  <button type="button" className={ui.btnSecondary} onClick={() => removeCustomAddon(addon.id)}>
                    Remove
                  </button>
                </div>
              ))}
              <div className={ui.field} style={{ marginBottom: 0, marginTop: "0.4rem" }}>
                <label className={ui.label} htmlFor="custom-addon">
                  Add custom add-on
                </label>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    id="custom-addon"
                    className={ui.input}
                    value={customName}
                    onChange={(event) => setCustomName(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        addCustomAddon();
                      }
                    }}
                    placeholder="On-site kickoff workshop"
                  />
                  <input
                    className={ui.input}
                    value={customPrice}
                    onChange={(event) => setCustomPrice(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        addCustomAddon();
                      }
                    }}
                    inputMode="numeric"
                    placeholder="Price"
                    aria-label="Custom add-on price"
                    style={{ maxWidth: "8rem" }}
                  />
                  <button type="button" className={ui.btnSecondary} onClick={addCustomAddon}>
                    Add
                  </button>
                </div>
                {customError ? <span className={ui.error}>{customError}</span> : null}
              </div>
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
              <button type="button" className={ui.btnBrass} disabled={catalog === null} onClick={() => setModalOpen(true)}>
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
              {aiDraft?.source === summary && aiDraft.text ? (
                <>
                  <p className={ui.hint} style={{ marginTop: "1rem" }}>
                    OpenRouter draft. The score and tier still come from the rule engine.
                  </p>
                  <p>{aiDraft.text}</p>
                </>
              ) : null}
              {aiError ? (
                <p className={ui.hint} style={{ marginTop: "0.75rem" }}>
                  {aiError}
                </p>
              ) : null}
            </div>
            <div className={ui.footer}>
              <span className={ui.hint}>Uses the current assessment. This draft is not stored on the review record.</span>
              <button type="button" className={ui.btnSecondary} disabled={drafting} onClick={draftWithOpenRouter}>
                {drafting ? "Drafting…" : "Draft with OpenRouter"}
              </button>
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
              <button type="button" className={ui.btnBrass} disabled={catalog === null} onClick={() => setModalOpen(true)}>
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
              <p>
                <strong>Quoted total:</strong> {quote.totalLabel}
              </p>
              {quote.lines.map((line) => (
                <p key={line.id}>
                  {line.name}: + {formatAddonPrice(line.price)}
                </p>
              ))}
              <p>
                <strong>Add-ons:</strong>{" "}
                {selectedAddons.length ? selectedAddons.map((item) => item.name).join(", ") : "None selected"}
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

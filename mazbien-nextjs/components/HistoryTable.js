"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchAssessmentForEdit, fetchAssessmentHistory, statusLabel, tierLabel } from "@/lib/assessments";
import { useDraft } from "@/lib/draftContext";
import ui from "./ui.module.css";

export default function HistoryTable() {
  const router = useRouter();
  const { setDraft } = useDraft();
  const [rows, setRows] = useState([]);
  const [warning, setWarning] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState("");
  const [editError, setEditError] = useState("");

  useEffect(() => {
    fetchAssessmentHistory().then((result) => {
      setRows(result.rows || []);
      setWarning(result.warning || "");
      setLoading(false);
    });
  }, []);

  async function editAssessment(id) {
    setEditingId(id);
    setEditError("");
    const result = await fetchAssessmentForEdit(id);
    setEditingId("");
    if (!result.ok) {
      setEditError(result.error);
      return;
    }
    setDraft(result.draft);
    router.push("/intake");
  }

  return (
    <div className={ui.card}>
      <div className={ui.header}>
        <h3>Your assessments</h3>
      </div>
      <div className={ui.body} style={{ padding: 0 }}>
        {warning ? (
          <div className={ui.callout} style={{ margin: "1rem" }}>
            {warning}
          </div>
        ) : null}
        {editError ? (
          <div className={ui.callout} style={{ margin: "1rem" }}>
            {editError}
          </div>
        ) : null}
        <table className={ui.table}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Industry</th>
              <th>Tier</th>
              <th>Status</th>
              <th>Previous status</th>
              <th>Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7}>Loading history…</td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={7}>No assessments yet. Send For Review from the dashboard to store one.</td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.company_name}</td>
                  <td>{row.industry}</td>
                  <td>{tierLabel(row.tier)}</td>
                  <td>{statusLabel(row.status)}</td>
                  <td>{statusLabel(row.previous_status)}</td>
                  <td>{row.created_at ? new Date(row.created_at).toLocaleDateString() : "—"}</td>
                  <td>
                    <button
                      type="button"
                      className={ui.btnSecondary}
                      disabled={editingId === row.id}
                      onClick={() => editAssessment(row.id)}
                    >
                      {editingId === row.id ? "Opening…" : "Edit"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

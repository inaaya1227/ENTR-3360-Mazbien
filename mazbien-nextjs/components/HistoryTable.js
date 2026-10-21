"use client";

import { useEffect, useState } from "react";
import { fetchAssessmentHistory, tierLabel } from "@/lib/assessments";
import ui from "./ui.module.css";

export default function HistoryTable() {
  const [rows, setRows] = useState([]);
  const [warning, setWarning] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssessmentHistory().then((result) => {
      setRows(result.rows || []);
      setWarning(result.warning || "");
      setLoading(false);
    });
  }, []);

  return (
    <div className={ui.card}>
      <div className={ui.header}>
        <h3>Your assessments</h3>
      </div>
      <div className={ui.body} style={{ padding: 0 }}>
        {warning ? <div className={ui.callout} style={{ margin: "1rem" }}>{warning}</div> : null}
        <table className={ui.table}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Industry</th>
              <th>Tier</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5}>Loading history…</td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={5}>No assessments yet. Send For Review from the dashboard to store one.</td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.company_name}</td>
                  <td>{row.industry}</td>
                  <td>{tierLabel(row.tier)}</td>
                  <td>{row.status}</td>
                  <td>{row.created_at ? new Date(row.created_at).toLocaleDateString() : "—"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

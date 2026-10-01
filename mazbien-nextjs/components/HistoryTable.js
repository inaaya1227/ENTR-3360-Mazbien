"use client";

import { useEffect, useState } from "react";
import { fetchAssessmentHistory, tierLabel } from "@/lib/assessments";
import ui from "./ui.module.css";

export default function HistoryTable() {
  const [rows, setRows] = useState([]);
  const [warning, setWarning] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchAssessmentHistory().then((result) => {
      setRows(result.rows || []);
      setWarning(result.warning || "");
    });
  }, []);

  const filtered = rows.filter((row) => {
    const haystack = `${row.company_name} ${row.industry} ${row.tier}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  return (
    <div className={ui.card}>
      <div className={ui.header}>
        <h3>Past assessments</h3>
        <input
          className={ui.input}
          style={{ width: 260 }}
          placeholder="Search client or industry"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className={ui.body} style={{ padding: 0 }}>
        {warning ? <div className={ui.callout} style={{ margin: "1rem" }}>{warning}</div> : null}
        <table className={ui.table}>
          <thead>
            <tr>
              <th>Client</th>
              <th>Industry</th>
              <th>Size</th>
              <th>Tier</th>
              <th>Score</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7}>No assessments yet. Send For Review from the dashboard to store a packet.</td>
              </tr>
            ) : (
              filtered.map((row) => (
                <tr key={row.id}>
                  <td>{row.company_name}</td>
                  <td>{row.industry}</td>
                  <td>{row.size}</td>
                  <td>{tierLabel(row.tier)}</td>
                  <td>{row.score}</td>
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

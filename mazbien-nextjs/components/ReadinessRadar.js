"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { RADAR_AXES } from "@/lib/catalog";

export default function ReadinessRadar({ axes }) {
  const data = RADAR_AXES.map((axis) => ({
    axis,
    score: axes.find((item) => item.axis === axis)?.score ?? 0,
  }));

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="var(--hairline)" />
          <PolarAngleAxis dataKey="axis" tick={{ fill: "var(--text)", fontSize: 11 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "var(--muted)", fontSize: 10 }} stroke="var(--hairline)" />
          <Radar name="Readiness" dataKey="score" stroke="var(--navy)" fill="var(--accent)" fillOpacity={0.45} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

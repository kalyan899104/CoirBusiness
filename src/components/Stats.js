import React from "react";

const stats = [
  { label: "Clients", value: "Starting Soon" },
  { label: "Production Capacity", value: "In Setup Phase" },
  { label: "Countries", value: "Launching Locally First" }
];

const Stats = () => (
  <section id="stats">
    <h2>Our Journey Begins</h2>
    <div className="stats-grid">
      {stats.map((s, i) => (
        <div key={i} className="stat-card">
          <h3>{s.value}</h3>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;

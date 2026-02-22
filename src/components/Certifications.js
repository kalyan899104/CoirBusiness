import React from "react";

const certifications = [
  { title: "ISO Certified", description: "Quality management certification." },
  { title: "Eco Label", description: "Recognized for eco‑friendly practices." }
];

const Certifications = () => (
  <section id="certifications">
    <h2>Certifications</h2>
    <div className="cert-grid">
      {certifications.map((c, i) => (
        <div key={i} className="cert-card">
          <h3>{c.title}</h3>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;

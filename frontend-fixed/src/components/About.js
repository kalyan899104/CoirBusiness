import React from "react";
import "./Certifications.css"; // keep using the styles

const certifications = [
  { title: "ISO Certified", description: "Quality management certification." },
  // add more certifications here if needed
];

const About = () => (
  <section id="about">
    <h2>About Us</h2>
    <p>
      We are a startup dedicated to natural coir products that are biodegradable
      and eco‑friendly. Our mission is to deliver sustainable solutions while
      maintaining authenticity and trust.
    </p>

    <h3>Certifications</h3>
    <div className="cert-grid">
      {certifications.map((c, i) => (
        <div key={i} className="cert-card">
          <h4>{c.title}</h4>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default About;
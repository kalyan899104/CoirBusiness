import React from "react";

const faqs = [
  { q: "Are coir products biodegradable?", a: "Yes, they are 100% natural and biodegradable." },
  { q: "Can coir improve soil quality?", a: "Absolutely, it enhances aeration and moisture retention." }
];

const FAQs = () => (
  <section id="faqs">
    <h2>FAQs</h2>
    <div className="faq-grid">
      {faqs.map((f, i) => (
        <div key={i} className="faq-item">
          <h4>{f.q}</h4>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQs;

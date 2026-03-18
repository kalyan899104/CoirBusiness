import React from "react";
import "./FAQ.css";           // keep FAQ styles
import "./Testimonials.css";  // keep Testimonials styles

const faqs = [
  { q: "Are coir products biodegradable?", a: "Yes, they are 100% natural and biodegradable." },
  { q: "Can coir improve soil quality?", a: "Absolutely, it enhances aeration and moisture retention." }
];

const testimonials = [
  { name: "Ravi", text: "The coir baskets are durable and eco‑friendly!" },
  { name: "Anita", text: "I love the coir poles for my plants." }
];

const Resources = () => (
  <section id="resources">
    <h2>Resources</h2>

    {/* FAQs Section */}
    <div className="faq-grid">
      {faqs.map((f, i) => (
        <div key={i} className="faq-item">
          <h4>{f.q}</h4>
          <p>{f.a}</p>
        </div>
      ))}
    </div>

    {/* Testimonials Section */}
    <div className="testimonial-grid">
      {testimonials.map((t, i) => (
        <div key={i} className="testimonial-card">
          <p>"{t.text}"</p>
          <strong>- {t.name}</strong>
        </div>
      ))}
    </div>
  </section>
);

export default Resources;
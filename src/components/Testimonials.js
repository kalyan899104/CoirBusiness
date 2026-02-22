import React from "react";

const testimonials = [
  { name: "Ravi", text: "The coir baskets are durable and eco‑friendly!" },
  { name: "Anita", text: "I love the coir poles for my plants." }
];

const Testimonials = () => (
  <section id="testimonials">
    <h2>What Our Customers Say</h2>
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

export default Testimonials;

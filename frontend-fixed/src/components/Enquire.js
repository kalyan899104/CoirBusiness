import React, { useState } from "react";

const Enquire = () => {
  const [status, setStatus] = useState(""); // track form status

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/xqeygpew", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // clear form after success
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="enquire" className="enquire-form">
      <h2>Enquire Now</h2>
      <div className="enquire-details">
        <p><strong>Email:</strong> ecoir@sriecovibe.com</p>
        <p><strong>Phone:</strong> +91 8807606963</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Show confirmation messages */}
      {status === "SUCCESS" && (
        <p style={{ color: "green" }}>Thanks! Your enquiry has been sent.</p>
      )}
      {status === "ERROR" && (
        <p style={{ color: "red" }}>Oops! Something went wrong. Please try again.</p>
      )}
    </section>
  );
};

export default Enquire;
import React from "react";

const ContactForm = () => (
  <section id="contact" className="contact-form">
    <h2>Contact Us</h2>
    <div className="contact-details">
      <p><strong>Email:</strong> ecoir@sriecovibe.com</p>
      <p><strong>Phone:</strong> +91 8807606963</p>
    </div>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default ContactForm;

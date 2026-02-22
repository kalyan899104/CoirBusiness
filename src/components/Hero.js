import React from "react";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Sri Ecovibe Substrates</h1>
      <p>
        Eco‑Friendly Coir Products — sustainable solutions for gardening,
        agriculture, and everyday living. Crafted from nature, built for the
        future.
      </p>
      <button
        onClick={() =>
          document.getElementById("products").scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore Our Products
      </button>
    </div>
  </section>
);

export default Hero;

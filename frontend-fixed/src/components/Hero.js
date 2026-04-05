import React from "react";
import "./Hero.css";

const Hero = () => (
  <section
    className="hero"
    style={{
      backgroundImage: 'url("/Images/Bags.jpg")',
      backgroundColor: "#3E2723",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top",
      backgroundSize: "contain"
    }}
  >
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

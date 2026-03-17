import React from "react";
import "./Hero.css"; // ✅ make sure you have this file

const Hero = () => (
  <section 
    className="hero"
    style={{ backgroundImage: 'url("/Images/Bags.jpg")' }}  // ✅ use your image here
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

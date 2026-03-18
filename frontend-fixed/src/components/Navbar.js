import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // ✅ Adjust offset to match header height
      const headerOffset = 65; // adjust this to your actual header height
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-top">
        <img src="/Images/logo.png" alt="Sri Ecovibe Logo" className="logo" />
      </div>

      {/* Hamburger (mobile only, hidden on desktop via CSS) */}
      <div className="navbar-toggle">
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation links */}
      <nav>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><button onClick={() => handleScroll("about")}>About</button></li>
          <li><button onClick={() => handleScroll("products")}>Products</button></li>
          <li><button onClick={() => handleScroll("benefits")}>Benefits</button></li>
          <li><button onClick={() => handleScroll("gallery")}>Gallery</button></li>
          <li><button onClick={() => handleScroll("resources")}>Resources</button></li>
          <li><button onClick={() => handleScroll("market")}>Market Insight</button></li>
          <li><button onClick={() => handleScroll("enquire")}>Enquire Now</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
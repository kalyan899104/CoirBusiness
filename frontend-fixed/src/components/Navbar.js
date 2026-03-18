import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu after clicking a link
    }
  };

  return (
    <header className="navbar">
      {/* Logo image */}
      <img src="/Images/logo.png" alt="Sri Ecovibe Logo" className="logo" />

      {/* Hamburger toggle button (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Navigation links */}
      <nav>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><button onClick={() => handleScroll("about")}>About</button></li>
          <li><button onClick={() => handleScroll("products")}>Products</button></li>
          <li><button onClick={() => handleScroll("benefits")}>Benefits</button></li>
          <li><button onClick={() => handleScroll("gallery")}>Gallery</button></li>
          <li><button onClick={() => handleScroll("resources")}>Resources</button></li>
          <li><button onClick={() => handleScroll("enquire")}>Enquire Now</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
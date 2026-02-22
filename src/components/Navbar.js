import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <h1 className="logo">Sri Ecovibe Substrates</h1>
      <nav>
        <ul>
          <li><button onClick={() => handleScroll("about")}>About</button></li>
          <li><button onClick={() => handleScroll("products")}>Products</button></li>
          <li><button onClick={() => handleScroll("benefits")}>Benefits</button></li>
          <li><button onClick={() => handleScroll("gallery")}>Gallery</button></li>
          <li><button onClick={() => handleScroll("stats")}>Stats</button></li>
          <li><button onClick={() => handleScroll("testimonials")}>Testimonials</button></li>
          <li><button onClick={() => handleScroll("faqs")}>FAQs</button></li>
          <li><button onClick={() => handleScroll("certifications")}>Certifications</button></li>
          <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

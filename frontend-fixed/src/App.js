import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Resources from "./components/Resources";   // ✅ merged FAQs + Testimonials
import Enquire from "./components/Enquire";       // ✅ replaces ContactForm
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Gallery />
      <Resources />   {/* ✅ combined FAQs + Testimonials */}
      <Enquire />     {/* ✅ renamed ContactForm */}
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
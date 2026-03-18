import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Resources from "./components/Resources";
import Market from "./components/Market";       // ✅ New
import Enquire from "./components/Enquire";
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
      <Resources />
      <Market />        {/* ✅ Market Insight Section */}
      <Enquire />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
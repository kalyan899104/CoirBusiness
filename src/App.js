import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
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
      <Stats />
      <Testimonials />
      <FAQs />
      <Certifications />
      <ContactForm />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./Products.css";

function Products() {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="product1.jpg" alt="Coir Substrate" />
          <h3>Coir Substrate</h3>
          <p>
            A natural, sustainable growing medium made from coconut husk. 
            Perfect for agriculture and horticulture.
          </p>
        </div>
        <div className="product-card">
          <img src="product2.jpg" alt="Eco Grow Bags" />
          <h3>Eco Grow Bags</h3>
          <p>
            Durable, eco-friendly bags designed for modern farming. 
            Ensures healthy root growth and easy handling.
          </p>
        </div>
        <div className="product-card">
          <img src="product3.jpg" alt="Support Services" />
          <h3>Support Services</h3>
          <p>
            Expert guidance and assistance for sustainable cultivation. 
            We help you achieve better yields with eco solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Products;

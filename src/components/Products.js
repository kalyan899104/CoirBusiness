import React from "react";
import "./Products.css";

function Products() {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {/* Existing product cards */}
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

        {/* New product cards using your images */}
        <div className="product-card">
          <img src="/Images/CoirProducts.jpg" alt="Coir Products" />
          <h3>Coir Products</h3>
          <p>
            Eco-friendly coir solutions crafted for gardening, agriculture, 
            and sustainable living.
          </p>
        </div>
        <div className="product-card">
          <img src="/Images/Bags.jpg" alt="Coir Basket" />
          <h3>Coir Basket</h3>
          <p>
            Strong and natural coir baskets, ideal for decorative and 
            functional gardening use.
          </p>
        </div>
        <div className="product-card">
          <img src="/Images/Pithblock.jpg" alt="Pith Block" />
          <h3>Pith Block</h3>
          <p>
            Compressed coir pith blocks that expand when hydrated, 
            improving soil aeration and water retention.
          </p>
        </div>
        <div className="product-card">
          <img src="/Images/Uses.jpg" alt="Product Applications" />
          <h3>Product Applications</h3>
          <p>
            Showcasing diverse uses of coir products in farming, 
            horticulture, and eco-friendly living.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Products;

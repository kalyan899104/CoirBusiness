import React from "react";
import "./Products.css";

function Products() {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {/* Existing product cards */}
        <div className="product-card">
          <img src="/Images/CoirSubstrate.jpg" alt="Coir Substrate" />
          <h3>Coir Substrate</h3>
          <p>
            A natural, sustainable growing medium made from coconut husk. 
            Perfect for agriculture and horticulture.
          </p>
        </div>
        <div className="product-card">
          <img src="/Images/Growbags.jpg" alt="Eco Grow Bags" />
          <h3>Eco Grow Bags</h3>
          <p>
            Durable, eco-friendly bags designed for modern farming. 
            Ensures healthy root growth and easy handling.
          </p>
        </div>
        <div className="product-card">
          <img src="/Images/SupportServices.jpg" alt="Support Services" />
          <h3>Support Services</h3>
          <p>
            Expert guidance and assistance for sustainable cultivation. 
            We help you achieve better yields with eco solutions.
          </p>
        </div>

        {/* New product cards */}
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
          <img src="/Images/Pithblock.jpg" alt="Coir Pith Block" />
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

        {/* Remaining images */}
        <div className="product-card">
          <img src="/Images/Coirbasket.jpg" alt="Coir Basket Product" />
          <h3>Coir Basket Product</h3>
          <p>
            Handcrafted coir baskets designed for durability and 
            eco-friendly gardening.
          </p>
        </div>
        <div className="product-card">
          <img src="/Images/Coirpoles.jpg" alt="Coir Poles" />
          <h3>Coir Poles</h3>
          <p>
            Natural coir poles that support plant growth and 
            encourage healthy climbing.
          </p>
        </div>
        <div className="product-card">
          <img src="/Images/Coirrope.jpg" alt="Coir Rope" />
          <h3>Coir Rope</h3>
          <p>
            Strong, biodegradable coir ropes suitable for 
            agriculture and packaging.
          </p>
        </div>
        <div className="product-card">
          <img src="/Images/husk.jpg" alt="Coconut Husk" />
          <h3>Coconut Husk</h3>
          <p>
            Raw coconut husk material, versatile for eco-friendly 
            applications and soil conditioning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Products;

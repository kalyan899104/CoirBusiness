import React from "react";

const products = [
  { name: "🌱 Coir Basket", description: "Durable baskets made from natural coir." },
  { name: "🍃 Coir Poles", description: "Plant support poles crafted from coir." },
  { name: "🪢 Coir Rope", description: "Strong ropes for gardening and crafts." },
  { name: "🍂 Coconut Husk", description: "Natural husk for soil conditioning." }
];

const Products = () => (
  <section id="products">
    <h2>Our Products</h2>
    <div className="product-grid">
      {products.map((p, i) => (
        <div key={i} className="product-card">
          <h3>{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Products;

import React from "react";
import "./Gallery.css";

const images = [
  { src: "/Images/Coirbasket.jpg", alt: "Coir Basket" },
  { src: "/Images/Coirpoles.jpg", alt: "Coir Poles" },
  { src: "/Images/Coirrope.jpg", alt: "Coir Rope" },
  { src: "/Images/husk.jpg", alt: "Coconut Husk" },
  { src: "/Images/Bags.jpg", alt: "Eco Grow Bags" },
  { src: "/Images/CoirProducts.jpg", alt: "Coir Products" }, 
  { src: "/Images/Pithblock.jpg", alt: "Coir Pith Block" },
  { src: "/Images/Uses.jpg", alt: "Applications of Coir Products" }
];

const Gallery = () => (
  <section id="gallery">
    <h2>Gallery</h2>
    <div className="gallery-grid">
      {images.map((img, i) => (
        <div key={i} className="gallery-item" data-alt={img.alt}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;

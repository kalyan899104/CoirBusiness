import React from "react";

const images = [
  "/Images/Coirbasket.jpg",
  "/Images/Coirpoles.jpg",
  "/Images/Coirrope.jpg",
  "/Images/husk.jpg"
];

const Gallery = () => (
  <section id="gallery">
    <h2>Gallery</h2>
    <div className="gallery-grid">
      {images.map((img, i) => (
        <div key={i} className="gallery-item">
          <img src={img} alt={`Gallery ${i}`} />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;

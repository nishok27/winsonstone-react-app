import React from "react";
import { Link } from "react-router-dom";
import "../Home/Gallery.css";

// Importing local images
import image1 from "../../assets/Gallery/granite.png";
import image2 from "../../assets/Gallery/Monuments.png";
import image3 from "../../assets/Gallery/Granite Tiles.png";
import image4 from "../../assets/Gallery/sand stone.png";
import image5 from "../../assets/Gallery/quartz stone.png";
import image6 from "../../assets/Gallery/marbles.png";

const Gallery = () => {
  const images = [
    { src: image1, name: "Granite" },
    { src: image2, name: "Monuments" },
    { src: image3, name: "Granite Tiles" },
    { src: image4, name: "Teakwood Sand Stone" },
    { src: image5, name: "Quartz Stone" },
    { src: image6, name: "Marble" },
  ];

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">PRODUCTS</h2>

      <div className="gallery-container">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <Link to={img.path}>
              <div className="image-wrapper">
                <img src={img.src} alt={`Gallery ${index + 1}`} />
              </div>
              <p className="gallery-name">{img.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

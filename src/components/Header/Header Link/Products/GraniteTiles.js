import React from "react";
import { Link } from "react-router-dom";
import "../Products/Granite.css";
import bgImage from "../../../../assets/bg.jpg";
import Footer from "../../../Home/Footer";

// Importing local images
import image1 from "../../../../assets/Header/Products/GraniteTiles/Granite-Tiles1.png";
import image2 from "../../../../assets/Header/Products/GraniteTiles/Granite-Tiles2.webp";
import image3 from "../../../../assets/Header/Products/GraniteTiles/Granite-Tiles3.png";
import image4 from "../../../../assets/Header/Products/GraniteTiles/Granite-Tiles4.png";
import image5 from "../../../../assets/Header/Products/GraniteTiles/Granite-Tiles5.png";

const GraniteTiles = () => {
  const images = [
    { src: image1, name: "Granite" },
    { src: image2, name: "Granite" },
    { src: image3, name: "Granite" },
    { src: image4, name: "Granite" },
    { src: image5, name: "Granite" },
  ];

  return (
    <div className="gallery-section">
      <div className="contact-banner">
        <img src={bgImage} alt="Contact Us" className="bg-image" />
        <div className="overlay-text">
          <h1>Product Listing</h1>
        </div>
      </div>

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
      <div className="contact-section">
        <Footer />
      </div>
    </div>
  );
};

export default GraniteTiles;

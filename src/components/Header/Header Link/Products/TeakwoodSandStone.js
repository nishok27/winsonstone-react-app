import React from "react";
import { Link } from "react-router-dom";
import "../Products/Granite.css";
import bgImage from "../../../../assets/bg.jpg";
import Footer from "../../../Home/Footer";

// Importing local images
import image1 from "../../../../assets/Header/Products/SandStone/SandStone1.png";
import image2 from "../../../../assets/Header/Products/SandStone/SandStone2.png";
import image3 from "../../../../assets/Header/Products/SandStone/SandStone3.png";
import image4 from "../../../../assets/Header/Products/SandStone/SandStone4.png";
import image5 from "../../../../assets/Header/Products/SandStone/SandStone5.png";
import image6 from "../../../../assets/Header/Products/SandStone/SandStone6.png";

const TeakwoodSandStone = () => {
  const images = [
    { src: image1, name: "SandStone" },
    { src: image2, name: "SandStone" },
    { src: image3, name: "SandStone" },
    { src: image4, name: "SandStone" },
    { src: image5, name: "SandStone" },
    { src: image6, name: "SandStone" },
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

export default TeakwoodSandStone;

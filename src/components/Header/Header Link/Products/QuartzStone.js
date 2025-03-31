import React from "react";
import { Link } from "react-router-dom";
import "../Products/Granite.css";
import bgImage from "../../../../assets/bg.jpg";
import Footer from "../../../Home/Footer";

// Importing local images
import image1 from "../../../../assets/Header/Products/Quartz/Quartz1.png";
import image2 from "../../../../assets/Header/Products/Quartz/Quartz2.png";
import image3 from "../../../../assets/Header/Products/Quartz/Quartz3.png";
import image4 from "../../../../assets/Header/Products/Quartz/Quartz4.png";
import image5 from "../../../../assets/Header/Products/Quartz/Quartz5.png";
import image6 from "../../../../assets/Header/Products/Quartz/Quartz6.png";
import image7 from "../../../../assets/Header/Products/Quartz/Quartz7.png";
import image8 from "../../../../assets/Header/Products/Quartz/Quartz8.png";
import image9 from "../../../../assets/Header/Products/Quartz/Quartz9.png";

const QuartzStone = () => {
  const images = [
    { src: image1, name: "Quartz Stone" },
    { src: image2, name: "Quartz Stone" },
    { src: image3, name: "Quartz Stone" },
    { src: image4, name: "Quartz Stone" },
    { src: image5, name: "Quartz Stone" },
    { src: image6, name: "Quartz Stone" },
    { src: image7, name: "Quartz Stone" },
    { src: image7, name: "Quartz Stone" },
    { src: image8, name: "Quartz Stone" },
    { src: image9, name: "Quartz Stone" },
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

export default QuartzStone;

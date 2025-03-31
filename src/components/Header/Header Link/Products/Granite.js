import React from "react";
import { Link } from "react-router-dom";
import "../Products/Granite.css";
import bgImage from "../../../../assets/bg.jpg";
import Footer from "../../../Home/Footer";

// Importing local images
import image1 from "../../../../assets/Header/Products/Granite/granite1.png";
import image2 from "../../../../assets/Header/Products/Granite/granite2.png";
import image3 from "../../../../assets/Header/Products/Granite/granite4.png";
import image4 from "../../../../assets/Header/Products/Granite/granite5.png";
import image5 from "../../../../assets/Header/Products/Granite/granite6.png";
import image6 from "../../../../assets/Header/Products/Granite/granite7.png";
import image7 from "../../../../assets/Header/Products/Granite/granite8.png";
import image8 from "../../../../assets/Header/Products/Granite/granite9.png";
import image9 from "../../../../assets/Header/Products/Granite/granite10.png";
import image10 from "../../../../assets/Header/Products/Granite/granite11.png";
import image11 from "../../../../assets/Header/Products/Granite/granite12.png";
import image12 from "../../../../assets/Header/Products/Granite/granite13.png";
import image13 from "../../../../assets/Header/Products/Granite/granite14.png";
import image14 from "../../../../assets/Header/Products/Granite/granite15.png";
import image15 from "../../../../assets/Header/Products/Granite/granite1.png";

const Granite = () => {
  const images = [
    { src: image1, name: "Granite" },
    { src: image2, name: "Granite" },
    { src: image3, name: "Granite" },
    { src: image4, name: "Granite" },
    { src: image5, name: "Granite" },
    { src: image6, name: "Granite" },
    { src: image7, name: "Granite" },
    { src: image7, name: "Granite" },
    { src: image8, name: "Granite" },
    { src: image9, name: "Granite" },
    { src: image10, name: "Granite" },
    { src: image11, name: "Granite" },
    { src: image12, name: "Granite" },
    { src: image13, name: "Granite" },
    { src: image14, name: "Granite" },
    { src: image15, name: "Granite" },
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

export default Granite;

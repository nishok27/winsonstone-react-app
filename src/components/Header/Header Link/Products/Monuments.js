import React from "react";
import { Link } from "react-router-dom";
import "../Products/Granite.css";
import bgImage from "../../../../assets/bg.jpg";
import Footer from "../../../Home/Footer";

// Importing local images
import image1 from "../../../../assets/Header/Products/Monuments/Monuments1.png";
import image2 from "../../../../assets/Header/Products/Monuments/Monuments2.png";
import image3 from "../../../../assets/Header/Products/Monuments/Monuments3.png";
import image4 from "../../../../assets/Header/Products/Monuments/Monuments4.png";
import image5 from "../../../../assets/Header/Products/Monuments/Monuments5.png";
import image6 from "../../../../assets/Header/Products/Monuments/Monuments6.png";
import image7 from "../../../../assets/Header/Products/Monuments/Monuments7.png";
import image8 from "../../../../assets/Header/Products/Monuments/Monuments8.png";
import image9 from "../../../../assets/Header/Products/Monuments/Monuments9.png";
import image10 from "../../../../assets/Header/Products/Monuments/Monuments10.png";
import image11 from "../../../../assets/Header/Products/Monuments/Monuments11.png";
import image12 from "../../../../assets/Header/Products/Monuments/Monuments12.png";
import image13 from "../../../../assets/Header/Products/Monuments/Monuments13.png";
import image14 from "../../../../assets/Header/Products/Monuments/Monuments14.png";
import image15 from "../../../../assets/Header/Products/Monuments/Monuments15.png";

const Monuments = () => {
  const images = [
    { src: image1, name: "Monuments" },
    { src: image2, name: "Monuments" },
    { src: image3, name: "Monuments" },
    { src: image4, name: "Monuments" },
    { src: image5, name: "Monuments" },
    { src: image6, name: "Monuments" },
    { src: image7, name: "Monuments" },
    { src: image7, name: "Monuments" },
    { src: image8, name: "Monuments" },
    { src: image9, name: "Monuments" },
    { src: image10, name: "Monuments" },
    { src: image11, name: "Monuments" },
    { src: image12, name: "Monuments" },
    { src: image13, name: "Monuments" },
    { src: image14, name: "Monuments" },
    { src: image15, name: "Monuments" },
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

export default Monuments;

import React from "react";
import "../Header Link/HeaderGallery.css";
import bgImage from "../../../assets/bg.jpg";
import Footer from "../../Home/Footer";
import Gallery from "../../Home/Gallery";

const HeaderGallery = () => {
  return (
    <div className="gallery-page">
      {/* 🔹 Top Image Section with Overlay Text */}
      <div className="contact-banner">
        <img src={bgImage} alt="Contact Us" className="bg-image" />
        <div className="overlay-text">
          <h1>Gallery</h1>
        </div>
      </div>

      {/* existing gallery page */}

      <div className="gallery-section">
        <div className="gallery-tittle">
          <h4>Products</h4>
        </div>
        <Gallery />
      </div>

      {/* 🔹 Footer Section */}
      <div className="contact-section">
        <Footer />
      </div>
    </div>
  );
};

export default HeaderGallery;

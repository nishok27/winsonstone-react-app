import React from "react";
import "../Home/Gallery.css";

// Importing local images
import image1 from "../../assets/Gallery/image1.png";
import image2 from "../../assets/Gallery/image2.png";
import image3 from "../../assets/Gallery/image3.png";
import image4 from "../../assets/Gallery/image4.png";
import image5 from "../../assets/Gallery/image5.png";
import image6 from "../../assets/Gallery/image6.png";


const Gallery = () => {
    const images = [image1, image2, image3, image4, image5, image6];
  
    return (
      <div className="gallery-section">
        {/* Title Above the Gallery */}
        <h2 className="gallery-title">Gallery</h2>
  
        {/* Gallery Grid */}
        <div className="gallery-container">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Gallery;

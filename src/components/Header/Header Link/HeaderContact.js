import React from "react";
import Footer from "../../Home/Footer";
import bgImage from "../../../assets/bg.jpg"; 
import "../Header Link/HeaderContact.css"
import { ReactComponent as PhoneIcon } from "../../../assets/Contact/phone.svg";
import { ReactComponent as EmailIcon } from "../../../assets/Contact/email.svg";
import { ReactComponent as AddressIcon } from "../../../assets/Contact/address.svg";

const HeaderContact = () => {
  return (
    <div className="contact-page">
      
      {/* 🔹 Top Image Section with Overlay Text */}
      <div className="contact-banner">
        <img src={bgImage} alt="Contact Us" className="bg-image" />
        <div className="overlay-text">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* 🔹 Existing Contact Section */}
      <div className="contact-container">
      
      <div className="contact-grid">
        {/* Telephone icon */}
        <div className="contact-item">
          <PhoneIcon className="contact-icon" />
          <h3>TELEPHONE</h3>
          <p>57879656</p>
        </div>

        {/* Email icon */}
        <div className="contact-item">
          <EmailIcon className="contact-icon" />
          <h3>E-MAIL</h3>
          <p>winsonstone@gmail.com</p>
        </div>

        {/* Address icon */}
        <div className="contact-item">
          <AddressIcon className="contact-icon" />
          <h3>ADDRESS</h3>
          <p>
            New York, <br /> 7899, United States, US.<br /> 
          </p>
        </div>
      </div>
    </div>
      

      {/* 🔹 Footer Section */}
      <div className="contact-section">
      <Footer />
      </div>
      
    </div>
  );
};

export default HeaderContact;

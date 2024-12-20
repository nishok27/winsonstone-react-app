import React from "react";
import "../Home/Contact.css";
import { ReactComponent as PhoneIcon } from "../../assets/Contact/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/Contact/email.svg";
import { ReactComponent as AddressIcon } from "../../assets/Contact/address.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">CONTACT US</h2>
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
  );
};

export default Contact;

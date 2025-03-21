import React from 'react';
import "../Home/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Follow Us */}
            <div className="column">
                <h2>FOLLOW US</h2>
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" > <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /> </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} /> </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} /></a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} /> </a>
                </div>
            </div>

            {/* Products */}
            <div className="column">
                <h2>PRODUCTS</h2>
                <ul>
                    <li><a href="#">Granite</a></li>
                    <li><a href="#">Monuments</a></li>
                    <li><a href="#">Granite Tiles</a></li>
                    <li><a href="#">Teakwood sand stone</a></li>
                    <li><a href="#">Quartz stone</a></li>
                    <li><a href="#">Marble</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div className="column">
                <h2>CONTACT</h2>
                <ul>
                    <li>winsonstone@gmail.com</li>
                    <li>Phone: +157879656</li>
                </ul>
            </div>

            {/* Office Address */}
            <div className="column">
                <h2>OFFICE ADDRESS</h2>
                <p className="address">
                New York,<br />
                7899, United States, US.<br />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
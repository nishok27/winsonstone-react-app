import React from 'react';
import "../Home/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Follow Us */}
            <div className="column">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" > <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /> </a>
                    <a href="https://www.youtube.com" target="_blank" ><FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} /> </a>
                    <a href="https://www.facebook.com" target="_blank" ><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} /></a>
                    <a href="https://www.whatsapp.com" target="_blank" ><FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} /> </a>
                </div>
            </div>

            {/* Products */}
            <div className="column">
                <h3>Products</h3>
                <ul>
                    <li><a href="#">Product 1</a></li>
                    <li><a href="#">Product 2</a></li>
                    <li><a href="#">Product 3</a></li>
                    <li><a href="#">Product 4</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div className="column">
                <h3>Contact</h3>
                <ul>
                    <li>winsonstone@gmail.com</li>
                    <li>Phone: +157879656</li>
                </ul>
            </div>

            {/* Office Address */}
            <div className="column">
                <h3>Office Address</h3>
                <p className="address">
                New York,<br />
                7899, United States, US.<br />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Logo/winsonLogo.jpeg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo"> <img src= {Logo} alt="Logo" /> </div>
      <nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/about-us">ABOUT</Link></li>
          <li><Link to="/contact-us">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

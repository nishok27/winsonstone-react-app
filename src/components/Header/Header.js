import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Logo/winsonLogo.jpeg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        {" "}
        <img src={Logo} alt="Logo" />{" "}
      </div>
      <nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="navLink">
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/">HOME</Link>
            </li>

            {/* Dropdown for Products */}
            <li
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="dropdown-btn">PRODUCTS▼</button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/granite">Granite</Link>
                  </li>
                  <li>
                    <Link to="/monuments">Monuments</Link>
                  </li>
                  <li>
                    <Link to="/granite-tiles">Granite Tiles</Link>
                  </li>
                  <li>
                    <Link to="/teakwood-sand-stone">Teakwood Sand Stone</Link>
                  </li>
                  <li>
                    <Link to="/quartz-stone">Quartz Stone</Link>
                  </li>
                  <li>
                    <Link to="/marbles">Marbles</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li>
              <Link to="/About-us">ABOUT</Link>
            </li>
            <li>
              <Link to="/HeaderContact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

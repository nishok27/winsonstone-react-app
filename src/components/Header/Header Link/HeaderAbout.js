import React from "react";
import Footer from "../../Home/Footer";
import bgImage from "../../../assets/bg.jpg";
import aboutImg from "../../../assets/Header/aboutus.jpg";
import "../Header Link/HeaderAbout.css";

const HeaderAbout = () => {
  return (
    <div className="about-page">
      <div className="contact-banner">
        <img src={bgImage} alt="Contact Us" className="bg-image" />
        <div className="overlay-text">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="about-section">
        <div className="section-image">
          <img src={aboutImg} alt="about colab" className="about-img" />
        </div>

        <div className="section-para">
          <h2>About Us</h2>
          <p>
            Our organization has been founded on the strong principles of
            quality, integrity and transparency. These inherent values have been
            our guiding lights on our road to excellence and global leadership.
            Our commitment to delivering the best has been reinforced by
            accolades from the industry. We are a direct importing and exporting
            company. We export from our own factory situated in India. We are
            proud as we are offering hundreds of various types of high-quality
            natural stone from quarries located around the world. Winson Stone
            has a wide variety of Granite, Marble, Quartz Stone, Sand Stone,
            Granite Tiles and Monuments. What’s more, we have a dedicated team
            of professionals with a rich and varied experience and industry
            expertise.
          </p>
          {/* <br /> */}
          <h2>Wholesale Solutions</h2>
          <p>
            Whatever your demand may be, please let us know we not just meet
            your expectation we will exceed your expectations. We do not just
            sell product we sell solution. We treat every customer as our
            business partner. Our dynamic multisite product system is built to
            for high volume customer needs. We take pride in providing custom
            solution.
          </p>
        </div>
      </div>

      {/* 🔹 Footer Section */}
      <div className="contact-section">
        <Footer />
      </div>
    </div>
  );
};

export default HeaderAbout;

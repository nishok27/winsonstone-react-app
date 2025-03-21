import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import HeaderGallery from "./components/Header/Header Link/HeaderGallery";
import Product from "./components/Home/Product";
import HeaderContact from "./components/Header/Header Link/HeaderContact";
import HeaderAbout from "./components/Header/Header Link/HeaderAbout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<HeaderGallery />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About-us" element={<HeaderAbout />} />
          <Route path="/HeaderContact" element={<HeaderContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

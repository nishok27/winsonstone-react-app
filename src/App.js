import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import HeaderGallery from "./components/Header/Header Link/HeaderGallery";
import Product from "./components/Home/Product";
import HeaderContact from "./components/Header/Header Link/HeaderContact";
import HeaderAbout from "./components/Header/Header Link/HeaderAbout";

// Import Product Components
import Granite from "./components/Header/Header Link/Products/Granite.js";
import Monuments from "./components/Header/Header Link/Products/Monuments";
import GraniteTiles from "./components/Header/Header Link/Products/GraniteTiles.js";
import TeakwoodSandStone from "./components/Header/Header Link/Products/TeakwoodSandStone.js";
import QuartzStone from "./components/Header/Header Link/Products/QuartzStone.js";
import Marbles from "./components/Header/Header Link/Products/Marbles.js";

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

          {/* Product Routes */}
          <Route path="/granite" element={<Granite />} />
          <Route path="/monuments" element={<Monuments />} />
          <Route path="/granite-tiles" element={<GraniteTiles />} />
          <Route path="/teakwood-sand-stone" element={<TeakwoodSandStone />} />
          <Route path="/quartz-stone" element={<QuartzStone />} />
          <Route path="/marbles" element={<Marbles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

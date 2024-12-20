import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header"
import Home from "../src/components/Home/Home"
import Gallery from "./components/Home/Gallery";
import Product from "./components/Home/Product";
import Contact from "./components/Home/Contact";


function App() {
  return (
   <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />  
      </Routes>
    </div>
   </Router>
    );
}

export default App;

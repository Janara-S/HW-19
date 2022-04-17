// import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Skills from './pages/Skills/Skills';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/skills" element={<Skills />} />
<Route path="/contact" element={<Contact />} />
</Routes>
      <Footer />
    </div>
  );
}

export default App;
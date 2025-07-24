import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sideba';

const App = () => {
  return (
    <div className="app_container">
      <Sidebar />

      <div className="main_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

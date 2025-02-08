import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Academics from './pages/Academics';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Facilities" element={<Facilities />} />
      </Routes>
    </Router>
  );
}

export default App;
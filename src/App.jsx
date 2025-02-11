import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Academics from './pages/Academics';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Calendar from './subpages/Calender';
import curriculum from './subpages/curriculum';
import Departments from './subpages/department';
import DirectorMessage from './subpages/director';
import Faculties from './subpages/faculties';
import Mission from './subpages/ourmission';
import PrincipalMessage from './subpages/principal';
import AdmissionProcess from './subpages/admission_process';
import FeeStructure from './subpages/fee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/academics/calendar" element={<Calendar/>} />
        <Route path="/academics/curriculum" element={<curriculum />} />
        <Route path="/academics/departments" element={<Departments />} />
        <Route path="/about/director-message" element={<DirectorMessage />} />
        <Route path="/about/faculties" element={<Faculties />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/principal-message" element={<PrincipalMessage />} />
        <Route path="/admission/process" element={<AdmissionProcess />} />
        <Route path="/admission/fees" element={<FeeStructure />} />
      </Routes>
    </Router>
  );
}

export default App;
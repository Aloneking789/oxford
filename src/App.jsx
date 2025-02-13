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
import Curriculum from './subpages/curriculum';
import Departments from './subpages/department';
import DirectorMessage from './subpages/director';
import Faculties from './subpages/faculties';
import Mission from './subpages/ourmission';
import PrincipalMessage from './subpages/principal';
import AdmissionProcess from './subpages/admission_process';
import FeeStructure from './subpages/fee';
import Testimonials from './topbarpages/Testimonials';
import Disclosure from './topbarpages/Disclosure';
import Gallery from './topbarpages/Gallery';
import OnlineRegisteration from './topbarpages/OnlineRegisteration';
import Results from './topbarpages/Results';

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
        <Route path="/academics/curriculum" element={<Curriculum />} />
        <Route path="/academics/departments" element={<Departments />} />
        <Route path="/about/director-message" element={<DirectorMessage />} />
        <Route path="/about/manager-message" element={<ManagerMessage />} />
        <Route path="/about/faculties" element={<Faculties />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/principal-message" element={<PrincipalMessage />} />
        <Route path="/admission/process" element={<AdmissionProcess />} />
        <Route path="/admission/fees" element={<FeeStructure />} />


        <Route path="/testimonials" element={<Testimonials />} />
        {/* <Route path="/disclosure" element={<Disclosure />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/registeration" element={<OnlineRegisteration />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
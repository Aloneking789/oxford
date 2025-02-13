import React from 'react';
import Navbar from '../components/Navbar';
import scholarshipImg from '../images/scholarshipImg.jpg';
import exam from '../images/exam.png';
import sports from '../images/sports.jpg';
import extracurricularImg from '../images/extracurricularImg.jpg';

const Prospectus = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">School Prospectus</h1>
        <p className="mt-4 text-lg">A glimpse into our institution, values, and offerings.</p>
      </div>
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-10 text-center">
          <img src={scholarshipImg} alt="Our School" className="w-full h-80 object-cover rounded-lg shadow-md" />
          <h2 className="text-3xl font-bold text-blue-600 mt-6">Welcome to Our School</h2>
          <p className="text-gray-700 mt-4">
            Our school is dedicated to academic excellence, character building, and holistic development of students. We
            provide a nurturing environment to help students reach their full potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src={exam} alt="Academics" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700">Academic Excellence</h3>
            <p className="text-gray-700 mt-2">
              Our curriculum is designed to foster intellectual curiosity and prepare students for future academic and career success.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src={sports} alt="Sports" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700">Sports & Physical Activities</h3>
            <p className="text-gray-700 mt-2">
              We offer a range of sports facilities and activities to encourage physical fitness, teamwork, and discipline.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src={extracurricularImg} alt="Extracurricular Activities" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700">Extracurricular Programs</h3>
            <p className="text-gray-700 mt-2">
              From music and arts to debate and coding, we offer a wide range of extracurricular activities for student enrichment.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700">Admissions & Scholarships</h3>
            <p className="text-gray-700 mt-2">
              We offer need-based and merit-based scholarships. Contact us for details on admission processes and financial aid options.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-blue-900 text-white py-8 text-center mt-10">
        <p>&copy; 2024 Excellence Academy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Prospectus;

import React from 'react';
import Navbar from '../components/Navbar';
import math from '../images/math.jpg';
import computer from '../images/computer.jpg';
import human from '../images/human.jpg';
import science from '../images/science.jpg';
import sports from '../images/sports.jpg';

import { motion } from "framer-motion";

const departments = [
  { name: 'Science Class', head: 'Dr. Alice Johnson', description: 'Focuses on Physics, Chemistry, and Biology with advanced lab facilities.', image: science },
  { name: 'Mathematics Class', head: 'Prof. Robert Smith', description: 'Dedicated to fostering analytical and problem-solving skills.', image: math },
  { name: 'Humanities Class', head: 'Dr. Susan Lee', description: 'Explores History, Geography, Political Science, and Sociology.', image: human },
  { name: 'Computer Science Class', head: 'Mr. David Brown', description: 'Equipped with modern computing labs and coding curriculum.', image: computer },
  { name: 'Sports Class', head: 'Coach Michael Green', description: 'Encourages physical fitness with top-notch sports infrastructure.', image: sports }
];

const Departments = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">School Department</h1>
      </div>

      <div className="max-w-7xl mx-auto p-8 bg-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-800 mb-10"
      >
     
      </motion.h2>

      {departments.map((dept, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 border-b border-gray-300 pb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src={dept.image} alt={dept.name} className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
              <p className="text-lg text-gray-700 mb-4"><strong>Head:</strong> {dept.head}</p>
              <p className="text-gray-600 leading-relaxed">{dept.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Education Street, Cityville, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@excellenceacademy.edu</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
                <li><a href="/admissions" className="hover:text-blue-300">Admissions</a></li>
                <li><a href="/academics" className="hover:text-blue-300">Academics</a></li>
                <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">Facebook</a>
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">Instagram</a>
                <a href="#" className="hover:text-blue-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>&copy; 2024 Excellence Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Departments;

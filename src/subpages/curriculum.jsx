import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const subjects = [
  { grade: "1st - 5th", subjects: ["English", "Mathematics", "Science", "Social Studies", "Arts", "Physical Education"] },
  { grade: "6th - 8th", subjects: ["English", "Mathematics", "Science", "History", "Geography", "Computer Science", "Physical Education"] },
  { grade: "9th - 10th", subjects: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "Computer Science", "Physical Education"] },
  { grade: "11th - 12th", subjects: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "Economics", "Business Studies", "Accountancy", "Computer Science", "Physical Education"] }
];

const guidelines = [
  {
    title: "Rules for Leave",
    points: [
      "A student should not remain absent without prior permission from the Principal.",
      "If a student is absent for even a single day, parents must fill out the 'Leave Record' in the school diary.",
      "For leave beyond three days, a formal application is required.",
      "Leave records must be signed by parents or guardians."
    ]
  },
  {
    title: "Important Guidelines for Parents",
    points: [
      "Students are not allowed to make phone calls during school hours.",
      "Parents should not contact teachers for private tuition.",
      "Medical and personal records must be submitted before the first working day.",
      "Parents must check their child's diary daily.",
      "No private bags are allowed without permission."
    ]
  },
  {
    title: "Guidelines for Students",
    points: [
      "Wear clean, ironed uniforms and polished shoes.",
      "Respect school property and keep surroundings clean.",
      "Always carry your school ID card.",
      "Follow classroom discipline and maintain decorum.",
      "Bullying and ragging are strictly prohibited."
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">School Curriculum</h1>
      </motion.div>

      {/* Curriculum Table */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-100 border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4 text-left">Grade Level</th>
                <th className="py-3 px-4 text-left">Subjects</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((item, index) => (
                <motion.tr key={index} variants={fadeIn} className="border-b border-gray-300 hover:bg-gray-200 transition duration-300">
                  <td className="py-3 px-4 font-semibold">{item.grade}</td>
                  <td className="py-3 px-4">{item.subjects.join(", ")}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Guidelines Sections */}
      {guidelines.map((section, index) => (
        <motion.section key={index} initial="hidden" animate="visible" variants={fadeIn} className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ul className="text-gray-700 space-y-2">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Education Street</p>
              <p>Cityville, State 12345</p>
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

export default Curriculum;
                                                
import React from 'react'
import Navbar from "../components/Navbar";
import { ClipboardList, Calendar, CreditCard, FileText,Users } from 'lucide-react';
import { motion } from 'framer-motion';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const admission_process = () => {
  // Admission Steps Data
const admissionSteps = [
  { title: "Submit Application", description: "Complete the online application form with all required documents.", icon: FileText },
  { title: "Entrance Test", description: "Appear for the entrance assessment test.", icon: ClipboardList },
  { title: "Interview", description: "Personal interview with the student and parents.", icon: Users },
  { title: "Confirmation", description: "Receipt of acceptance letter and fee payment.", icon: CreditCard },
];

// Important Dates Data
const importantDates = [
  { event: "Application Start Date", date: "January 15, 2024" },
  { event: "Application Deadline", date: "March 31, 2024" },
  { event: "Entrance Test", date: "April 15, 2024" },
  { event: "Results Declaration", date: "April 30, 2024" },
  { event: "Fee Payment Deadline", date: "May 15, 2024" },
];

// Fee Structure Data
const fees = [
  { level: "Primary (1-5)", tuition: "$8,000", development: "$1,000", total: "$9,000" },
  { level: "Middle (6-8)", tuition: "$10,000", development: "$1,200", total: "$11,200" },
  { level: "Secondary (9-10)", tuition: "$12,000", development: "$1,500", total: "$13,500" },
];

// StepCard Component
const StepCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// TableRow Component
const TableRow = ({ data }) => (
  <tr className="border-b hover:bg-gray-50">
    {data.map((item, index) => (
      <td key={index} className="px-6 py-4 text-sm text-gray-700">{item}</td>
    ))}
  </tr>
);

// InputField Component
const InputField = ({ label, name, type = "text" }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input id={name} name={name} type={type} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
  </div>
);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center">
      
      </div>


      <div className="py-16 max-w-7xl mx-auto px-6">
      {/* Admission Steps */}
      <motion.section
        initial="hidden" animate="visible" variants={fadeIn}
        className="text-center"
      >
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
          <ClipboardList className="h-8 w-8 text-blue-600" /> Admission Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {admissionSteps.map((step, index) => (
            <motion.div key={step.title} variants={fadeIn} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-blue-800">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Important Dates */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn} className="py-16 bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Calendar className="h-8 w-8 text-blue-600" /> Important Dates
          </h2>
          <table className="w-full bg-white rounded-lg shadow-md mt-6 overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {importantDates.map(({ event, date }, index) => (
                <motion.tr key={index} variants={fadeIn} className="border-b hover:bg-gray-100 transition">
                  <td className="px-6 py-4 text-gray-700">{event}</td>
                  <td className="px-6 py-4 text-gray-700">{date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Online Application */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" /> Online Application
          </h2>
          <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-md p-8 mt-6">
            <form className="space-y-6">
              {["Student's Full Name", "Date of Birth", "Parent's Email", "Previous School (if any)"].map((label) => (
                <div key={label} className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">{label}</label>
                  <input
                    type="text"
                    name={label.toLowerCase().replace(/\s/g, '_')}
                    className="border rounded-md p-3 focus:ring focus:ring-blue-300"
                  />
                </div>
              ))}
              <button type="submit" className="py-3 px-4 bg-blue-600 text-white rounded-md w-full hover:bg-blue-700 transition">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>


      <footer className="bg-blue-900 text-white py-8">
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
  )
}

export default admission_process

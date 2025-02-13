import React from 'react'
import Navbar from "../components/Navbar";
import scholarshipImg from '../images/scholarshipImg.jpg';
import paymentImg from '../images/paymentImg.jpg';
import extracurricularImg from '../images/extracurricularImg.jpg';

import { motion } from "framer-motion";

const FeeStructure = () => {
  const feeStructure = [
    { grade: 'Nursery - KG', tuition: '$500', admission: '$100', annual: '$200', total: '$800' },
    { grade: '1st - 5th', tuition: '$600', admission: '$150', annual: '$250', total: '$1000' },
    { grade: '6th - 8th', tuition: '$700', admission: '$200', annual: '$300', total: '$1200' },
    { grade: '9th - 10th', tuition: '$800', admission: '$250', annual: '$350', total: '$1400' },
    { grade: '11th - 12th', tuition: '$900', admission: '$300', annual: '$400', total: '$1600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />

    {/* Hero Section */}
    <div className="bg-blue-900 text-white py-16 text-center">
      <h1 className="text-4xl font-bold">School Fee Structure</h1>
    </div>

  
    
   <div className="max-w-6xl mx-auto p-8 ">
      
        <p className="text-gray-600 text-center mb-6">
          Below is the detailed fee structure for different grade levels. The fee covers tuition, admission, and annual charges. Additional costs for extracurricular activities and special programs may apply.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-100 border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4 text-left">Grade</th>
                <th className="py-3 px-4 text-left">Tuition Fee</th>
                <th className="py-3 px-4 text-left">Admission Fee</th>
                <th className="py-3 px-4 text-left">Annual Fee</th>
                <th className="py-3 px-4 text-left">Total Fee</th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-3 px-4 font-semibold">{item.grade}</td>
                  <td className="py-3 px-4">{item.tuition}</td>
                  <td className="py-3 px-4">{item.admission}</td>
                  <td className="py-3 px-4">{item.annual}</td>
                  <td className="py-3 px-4 font-bold">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
       

        {/* Additional Information Section */}
        <div className="mt-10 space-y-10">
          <div className="flex flex-col md:flex-row items-center bg-gray-200 p-6 rounded-lg shadow-md mx-20">
            <img src={scholarshipImg} alt="Scholarship" className="w-48 h-32 rounded-md shadow-md md:mr-6" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-700">Scholarships & Financial Aid</h3>
              <p className="text-gray-700 mt-2">We offer scholarships to deserving students based on academic excellence and extracurricular achievements. Apply now to avail financial assistance.</p>
            </div>
            </div>

          <div className="flex flex-col md:flex-row items-center bg-gray-200 p-6 rounded-lg shadow-md mx-20">
            <img src={paymentImg} alt="Payment" className="w-48 h-32 rounded-md shadow-md md:mr-6" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-700">Flexible Payment Plans</h3>
              <p className="text-gray-700 mt-2">We understand that managing finances can be challenging. We offer installment-based payment plans to ensure a stress-free payment process.</p>
            </div>
          </div>
         
          <div className="flex flex-col md:flex-row items-center bg-gray-200 p-6 rounded-lg shadow-md mx-20">
            <img src={extracurricularImg} alt="Extracurricular" className="w-48 h-32 rounded-md shadow-md md:mr-6" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-700">Extracurricular Charges</h3>
              <p className="text-gray-700 mt-2">Additional charges may apply for extracurricular activities such as field trips, sports coaching, and special programs. Contact us for more details.</p>
            </div>
          </div>
      
      
</div>

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
  )
}

export default FeeStructure

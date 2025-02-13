import React from 'react'
import Navbar from "../components/Navbar";
import facalities1 from '../images/facalities1.png'
import facalities2 from '../images/facalities2.png'
import { Users, Award, History, BookOpen } from 'lucide-react';

const Faculties = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Excellence Academy</h1>
          <p className="text-xl">Nurturing minds, building character, creating leaders since 1995</p>
        </div>
      </div>

    <div className="flex justify-center items-center gap-10 py-12">
  {/* <img src={facalities1} alt="Facility 1" className="max-w-xs rounded-lg shadow-md  h-[500px]  min-w-96" />
  <img src={facalities2} alt="Facility 2" className="max-w-xs rounded-lg shadow-md  h-[500px] min-w-96" /> */}
</div>


{/* History Section */}
<section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <History className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-3xl font-bold">Our History</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 1995, Excellence Academy began with a vision to provide world-class education
              that combines academic excellence with character development. Over the past decades,
              we have grown from a small institution to one of the most respected educational
              establishments in the region.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey has been marked by continuous innovation in teaching methodologies,
              expansion of facilities, and most importantly, the success of our students who
              have gone on to achieve remarkable feats in various fields.
            </p>
          </div>
        </div>
      </section>


      {/* Accreditations */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-3xl font-bold">Accreditations</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Academic Affiliations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Central Board of Secondary Education (CBSE)</li>
                  <li>• International Baccalaureate (IB) World School</li>
                  <li>• Cambridge Assessment International Education</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quality Certifications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• ISO 9001:2015 Certified</li>
                  <li>• National Accreditation Board for Education</li>
                  <li>• Green School Certification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


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

export default Faculties
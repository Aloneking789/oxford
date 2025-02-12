import React from 'react'
import Navbar from "../components/Navbar";
import { Users, Award, History, BookOpen } from 'lucide-react';
import playschool from '../images/playschool.png';
import kind from '../images/kind.png'
import primary from '../images/primary.png'



const ourmission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Mission</h1>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-3xl font-bold">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide holistic education that nurtures intellectual curiosity,
                promotes ethical values, and prepares students to be responsible
                global citizens.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a leading institution that sets new standards in educational
                excellence and character development, creating future leaders who
                make positive contributions to society.
              </p>
            </div>
          </div>
        </div>
      </section>

 <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8  my-8">
        
        {/* Text Content */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
          <p className="text-gray-700 leading-relaxed">
          U.S. Oxford Academy
U.S. Oxford Academy is more than just an educational institution—it is a center for excellence that nurtures young minds and shapes future leaders. The academy is dedicated to providing holistic education that focuses on academic brilliance, personal growth, and character development.<br/>

At U.S. Oxford Academy, students are encouraged to think critically, act responsibly, and contribute positively to society. The school follows a student-centric approach that blends modern teaching methodologies with traditional values, preparing learners for success in a globalized world.<br/>

The academy places strong emphasis on:<br/>
✅ Academic Rigor – A well-structured curriculum designed to enhance analytical and problem-solving skills.<br/>
✅ Character Building – Instilling moral values, integrity, and leadership qualities.<br/>
✅ Co-Curricular Excellence – Encouraging participation in arts, music, sports, and community service.<br/>
✅ Technology-Integrated Learning – Smart classrooms, AI-based assessments, and interactive digital tools.<br/>
✅ Cultural & Social Harmony – Promoting diversity, inclusivity, and global awareness.<br/>

Through a dynamic learning environment, U.S. Oxford Academy ensures that students are well-equipped to handle real-world challenges, fostering confidence, creativity, and collaboration. The institution strives to uphold a tradition of academic excellence while empowering students to become responsible global citizens.


          </p>
          
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={playschool} 
            alt="Play School Activity" 
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

      </div>


      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8  my-8">
        
        {/* Text Content */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
          <p className="text-gray-700 leading-relaxed">
          Our goal is to make world-class education accessible to every student, ensuring they receive the best learning opportunities regardless of their background. We are committed to fostering a culture of academic excellence and lifelong learning.<br/>

We firmly believe that “Knowledge is the foundation of innovation. A well-rounded education paves the way for wisdom and success.” Our goal is to nurture students, helping them realize their full potential and equipping them with the creativity and confidence needed to overcome future challenges.<br/>

At U.S. Oxford Academy, we recognize that education has the power to transform lives. That’s why we strive to provide quality education to underserved communities, empowering students to uplift themselves and contribute meaningfully to society.<br/>

By establishing robust systems, policies, and practices, we ensure smooth and efficient academic and administrative operations across New York, Los Angeles, and Chicago, fostering an environment where students and educators can thrive.<br/>

Our academic programs emphasize community engagement, critical thinking, and leadership development, shaping students into responsible global citizens committed to solving real-world problems and making a difference in their communities.<br/>

          </p>
          
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={kind} 
            alt="Play School Activity" 
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

      </div>


    {/* Hero Section */}
    <div className="bg-blue-900 text-white py-16 text-center">
      <h1 className="text-4xl font-bold">Activity</h1>
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

export default ourmission

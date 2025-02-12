import React from 'react';
import Navbar from "../components/Navbar";
import playschool from '../images/playschool.png';
import kind from '../images/kind.png'
import primary from '../images/primary.png'

import a1 from '../images/a1.jpg';
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';
import a4 from '../images/a4.jpg';
import a5 from '../images/a5.jpg';
import a6 from '../images/a6.jpg';

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";




const images = [a3, a2, a1,a4,a5,a6];


const Activities = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Activity</h1>
      </div>

      {/* Activity Section */}
      <motion.div
         
       
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8 ">
        
        {/* Text Content */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold  mb-4">Play School</h1>
          <p className="text-gray-700 leading-relaxed">
            A home away from home with a hygienic environment for the young ones, 
            U S Oxford Play School is a wonderful world of fun and learning. We plan and 
            create activities that help growing children develop their learning abilities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We provide an enlightening and safe environment where children enjoy playing and 
            learning. Through good storybooks, ample play materials, music, puppetry, outings, 
            and year-round events, we motivate children to learn joyfully and become confident, 
            independent, and well-mannered individuals.
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

      </motion.div>

      <motion.div
         
       
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8 ">
      <div className="md:w-1/2 flex justify-center">
          <img 
            src={kind} 
            alt="Play School Activity" 
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold  mb-4">KINDERGARTEN</h1>
          <p className="text-gray-700 leading-relaxed">
          The most important period of life is from birth to the age of 
six where most of the learning happens. U S Oxford initial tests his 
holistic journey which strives to have a profound effect on the 
child’s future by providing the right context of learning by doing in 
the new curriculum of N.E.P [National Education Policy 2020].
 Our kindergarten Scholars explore different streams by 
applying the N.E.P in their day to day learning which perfectly 
balances child initiated and teacher' s scaffolded  activities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We provide an enlightening and safe environment where children enjoy playing and 
            learning. Through good storybooks, ample play materials, music, puppetry, outings, 
            and year-round events, we motivate children to learn joyfully and become confident, 
            independent, and well-mannered individuals.
          </p>
        </div>

       
        

        </motion.div>

        <motion.div
         
       
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8 ">
        
        {/* Text Content */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold  mb-4">PRIMARY SCHOOL
          </h1>
          <p className="text-gray-700 leading-relaxed">
            A home away from home with a hygienic environment for the young ones, 
            U S Oxford Play School is a wonderful world of fun and learning. We plan and 
            create activities that help growing children develop their learning abilities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
          The contours of knowledge know no frontiers. U S Oxford 
recognizes this feature and extends each student rigorous 
exposure to group activities, visual learning and project works. The 
teaching process at U S Oxford  helps to garner and harness the 
varying potential within each student. The aim is to promote and 
intensify performance and encourage students to be fore-runners 
in all elds.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={primary} 
            alt="Play School Activity" 
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
        
        </motion.div>


      <div className=" mx-auto my-8 flex justify-center items-center px-20">
      <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={3} // Show one slide at a time for full-screen effect
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop
    className="w-full h-full"
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="w-full h-full flex justify-center items-center">
          <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      
      <div className=''>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
           
            <h2 className="ml-3 text-3xl font-bold">CO-CURRICULAR ACTIVITIES</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">FIELD
              TRIPS</h3>
              <p className="text-gray-700">
              It allows students to 
have a real world 
experience, which 
clearly illustrates and 
enhances the 
information taught 
in the curriculum. 
Field trips give a 
chance to 
experience hands on 
learning while being 
introduced to new 
environments.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">ART &
              CRAFT</h3>
              <p className="text-gray-700">
              In our Art & Craft 
classes our students 
are taught a variety 
of skills like- 
creativity, condence, 
casual learning, 
decision making, 
perseverance, 
collaboration and 
accountability.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4"> SPORTS</h3>
              <p className="text-gray-700">
              Inclusion of games 
in our curriculum of 
studies is, very 
important for the 
physical & mental 
well being of our 
students.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">MUSIC</h3>
              <p className="text-gray-700">
              The music classes in 
our school serves as 
a platform for 
creating tiny 
musician so fall 
genres and skill 
levels. It enables 
them to learn 
vocals, rhythm and 
pitch in singing and 
to use instruments 
like keyboard, drums 
and guitar. It also 
helps to showcase 
their talent at 
various events in 
inter school and 
intra school 
competitions.
              </p>
            </div>
          </div>
        </div>

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
  );
};

export default Activities;

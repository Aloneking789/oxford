import React from 'react';
import Navbar from "../components/Navbar";
import science from '../images/science.png';
import computer from '../images/computer.png';
import library from '../images/library.png';
import digitalboard from '../images/digitalboard.png';
import yoga from '../images/yoga.jpg';
import exam from '../images/yoga.jpg';

import a1 from '../images/a1.jpg';
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';
import a4 from '../images/a4.jpg';
import a5 from '../images/a5.jpg';
import a6 from '../images/a6.jpg';

import { motion } from "framer-motion";

const Facilities = () => {
  const facilities = [
    {
      title: "School Building",
      description: `School Building of U.S. Oxford Academy
The school building of U.S. Oxford Academy is designed to foster academic excellence, innovation, and holistic development. With modern architecture and state-of-the-art facilities, it provides a safe, engaging, and inspiring learning environment for students and staff.

Key Features:
✅ Spacious, well-ventilated classrooms with ergonomic seating
✅ Advanced Science & Computer Labs for hands-on learning
✅ Digital Smart Boards & E-learning tools in every classroom
✅ Library with a vast collection of books & digital resources
✅ Auditorium, sports complex, and multipurpose halls`,
      image:a1,
    },
    {
      title: "Sustainable Campus",
      description: `Sustainable Campus of U.S. Oxford Academy
At U.S. Oxford Academy, we are committed to environmental sustainability and fostering an eco-conscious mindset among students. Our campus integrates green initiatives and energy-efficient solutions to minimize our ecological footprint while providing a healthy and inspiring learning environment.

Key Sustainability Features:
✅ Solar Energy: Our campus is powered by solar panels, reducing reliance on conventional electricity and promoting renewable energy use.

✅ Rainwater Harvesting: We have an efficient rainwater collection system that helps conserve water and maintain greenery on campus.

✅ Energy-Efficient Infrastructure: The school is designed with LED lighting, insulated walls, and automated climate control to optimize energy consumption.

✅ Green Spaces & Plantation Drives: The campus features lush gardens, eco-parks, and tree-lined pathways, contributing to better air quality and biodiversity. Regular tree plantation drives are organized to instill environmental responsibility in students.

✅ Waste Management & Recycling: We implement a strict waste segregation policy, ensuring proper disposal and recycling of paper, plastic, and electronic waste. Composting units are also used to manage biodegradable waste efficiently.

✅ Eco-Friendly Transportation: We encourage carpooling, cycling, and electric vehicle usage among students and staff to reduce carbon emissions.

✅ Sustainability Education: Workshops, awareness programs, and eco-clubs are organized to educate students about environmental conservation, climate change, and sustainable living practices.

At U.S. Oxford Academy, sustainability is not just a concept—it’s a way of life! 🌍💚

Let me know if you need any refinements! 😊`,
      image: a2,
    },
    {
      title: "Classroom",
      description: `Sustainable Classrooms at U.S. Oxford Academy
At U.S. Oxford Academy, our classrooms are designed to provide a comfortable, energy-efficient, and eco-friendly learning environment. We believe that sustainable education starts with the spaces where students learn, grow, and innovate.

Key Features of Our Sustainable Classrooms:
✅ Natural Lighting & Ventilation: Large windows and skylights ensure maximum daylight, reducing the need for artificial lighting while improving student focus and well-being. Proper cross-ventilation keeps the air fresh and reduces dependency on air conditioning.

✅ Energy-Efficient Lighting & Smart Controls: Classrooms are equipped with LED lights and motion-sensor systems that adjust brightness based on occupancy and natural light levels, saving energy.

✅ Eco-Friendly Furniture & Materials: We use sustainably sourced wood, recycled materials, and non-toxic paints for furniture and interiors, ensuring a healthy learning space.

✅ Digital Learning & Paperless Education: Interactive smart boards, tablets, and e-learning platforms reduce paper waste, making learning more engaging and environmentally friendly.

✅ Indoor Air Quality Monitoring: Air-purifying plants and low-emission building materials help maintain high indoor air quality, promoting better concentration and health.

✅ Recycling & Waste Reduction Initiatives: Each classroom has recycling bins to encourage waste segregation. Students participate in upcycling projects and eco-friendly craft activities.

✅ Climate-Conscious Design: Walls and ceilings are insulated to regulate temperature naturally, reducing reliance on heating and cooling systems.

At U.S. Oxford Academy, our classrooms go beyond traditional learning spaces—they are sustainable, innovative, and designed for a greener future. 🌱📚♻️

Let me know if you'd like any modifications! 😊







`,
      image: a3,
    },
    {
      title: "Lab",
      description: `State-of-the-Art Labs at U.S. Oxford Academy
At U.S. Oxford Academy, we believe in hands-on learning and scientific exploration. Our modern, eco-friendly laboratories are designed to ignite curiosity, encourage innovation, and promote sustainability in scientific education.

Key Features of Our Labs:
✅ Well-Equipped Science Labs: We have dedicated Physics, Chemistry, and Biology labs, each furnished with advanced equipment, digital microscopes, and safety measures to ensure interactive and safe experimentation.

✅ Green Chemistry Practices: Our Chemistry lab follows sustainable practices, including non-toxic chemicals, minimal waste disposal, and energy-efficient fume hoods, reducing environmental impact.

✅ High-Tech Computer Labs: Equipped with modern PCs, high-speed internet, and coding platforms, our AI-integrated computer labs prepare students for the digital future.

✅ Renewable Energy Integration: The labs use solar-powered energy, reducing dependency on conventional electricity and promoting eco-friendly education.

✅ STEM & Robotics Lab: Our specialized STEM and Robotics lab encourages students to experiment with AI, automation, and coding, fostering innovation and critical thinking.

✅ Safety First Approach: Each lab is equipped with fire extinguishers, eyewash stations, and emergency protocols to ensure a secure learning environment.

✅ Eco-Friendly Waste Disposal: We implement safe chemical disposal systems and encourage recycling of electronic waste and lab materials to maintain a sustainable campus.

At U.S. Oxford Academy, our labs are more than just classrooms—they are centers for innovation, discovery, and sustainable learning! 🔬⚡🌱

Let me know if you need any changes! 😊







`,
      image:a4,
    },
    {
      title: "Fire Safety",
      description: `Fire Safety Measures at U.S. Oxford Academy
At U.S. Oxford Academy, the safety and well-being of our students, teachers, and staff are our top priority. We have implemented a comprehensive fire safety system to ensure a secure learning environment and preparedness in case of emergencies.

Key Fire Safety Features:
✅ Advanced Fire Detection & Alarm System: Our campus is equipped with state-of-the-art smoke detectors, fire alarms, and heat sensors that provide early warnings in case of fire hazards.

✅ Fire Extinguishers & Hydrants: Strategically placed fire extinguishers, hydrants, and fire hose reels are installed throughout the school to ensure quick response during emergencies.

✅ Emergency Exit Routes & Signage: Clearly marked fire exit routes and emergency signs guide students and staff to the nearest safe exit in case of an evacuation.

✅ Fire Drills & Training: Regular fire drills and safety training sessions are conducted to ensure that students, teachers, and staff know how to respond swiftly and effectively in an emergency.

✅ Automatic Sprinkler Systems: Key areas such as science labs, libraries, and high-risk zones are equipped with automatic fire suppression systems for immediate action in case of fire.

✅ Dedicated Fire Safety Team: A trained fire safety team is present on campus to monitor risks, implement safety protocols, and assist in emergency evacuations.

✅ Collaboration with Local Fire Department: We maintain a direct communication line with the local fire department, ensuring quick response times in case of emergencies.

At U.S. Oxford Academy, we are committed to safety, preparedness, and prevention, ensuring that every student learns in a secure and protected environment. 🔥🚒✅

Let me know if you need any refinements! 😊







`,
      image:a6,
    },
    {
      title: "Swachh Vidyalaya",
      description:`Swachh Vidyalaya Initiative at U.S. Oxford Academy
At U.S. Oxford Academy, we firmly believe that cleanliness and hygiene are essential for a healthy learning environment. Our Swachh Vidyalaya Initiative aligns with the vision of promoting sanitation, sustainability, and awareness among students and staff.

Key Features of Our Swachh Vidyalaya Initiative:
✅ Clean & Hygienic Campus: Our school ensures daily cleaning and maintenance of classrooms, corridors, playgrounds, and common areas to maintain a neat and sanitized environment.

✅ Well-Maintained Restrooms: We have separate, well-equipped washrooms for boys, girls, and staff with handwashing stations, liquid soap dispensers, and sanitary disposal bins to ensure proper hygiene practices.

✅ Safe Drinking Water Facilities: Purified RO drinking water stations are installed across the campus, ensuring clean and safe water for all students and staff.

✅ Waste Management System: A proper waste segregation system is in place, with separate bins for biodegradable, non-biodegradable, and recyclable waste, promoting eco-friendly disposal practices.

✅ Hand Hygiene & Sanitation Awareness: Regular workshops and awareness drives are conducted to educate students about proper handwashing techniques, personal hygiene, and sanitation.

✅ Eco-Friendly Initiatives: We encourage zero-waste policies, plastic-free zones, and plantation drives to create an environmentally responsible school culture.

✅ Student Participation & Cleanliness Drives: Students actively take part in cleanliness drives, poster-making competitions, and community outreach programs to spread awareness about hygiene and cleanliness beyond the school premises.

At U.S. Oxford Academy, cleanliness is a shared responsibility, and we strive to inculcate lifelong hygiene habits in our students for a healthier and greener future! 🌿🧼✨

Let me know if you need modifications! 😊







`,
      image: a5,
    },
  ];

  const facilitiesData = [
    {
      id: 1,
      image: library,
      heading: "Library",
      text: `The School library is the hub of intellectual 
      activities and is rich in reading material and 
      reference resources, providing information 
      fundamental to functioning successfully in today’s 
      knowledge-based society.`,
    },
    {
      id: 2,
      image: computer,
      heading: "Computer Lab",
      text: `Computer classes are crucial for a well-rounded education. 
      At U S Oxford, students are introduced to basic computer usage 
      as early as Class I, with engaging educational software to make 
      learning fun.`,
    },
    {
      id: 3,
      image: science,
      heading: "Science Lab",
      text: `U S Oxford has an extensive science lab where students conduct 
      experiments that reinforce theoretical concepts, enhancing 
      their understanding through hands-on learning and observation.`,
    },
    {
      id: 3,
      image: yoga,
      heading: "YOGA",
      text: `We would offer a complete sport and tness 
programme for our children from early childhood (Playgroup) 
to Class V.
 The curriculum offers students opportunities to learn 
practice and master a wide range of diverse skills and activities 
appropriate for children in the school environment`,
    },
    {
      id: 3,
      image: digitalboard,
      heading: "DIGITAL BOARDS ",
      text: `In today’s competitive world, 
children need the skill sets, which are 
beyond subject knowledge and require 
concentration assimilation and retention. 
In this regard the role of smart classes is 
quite important. At U S Oxford its 
importance is manifested with the 
installation of the Tata Class Edge Boards 
in every classroom.
 Our Smart classes comprise the use 
of all interactive modules like videos and 
presentations which are appealing to 
students.
 In fact our smart classes are almost 
like watching movies and sometimes, 
animated visuals are used to clear a 
concept. This kind of visual is eye-catching 
and our young students easily relate with 
them.
 Watching highly engaging visuals 
and animations makes learning enjoyable 
for students while improving their overall 
academic performance in school. `,
    },
    {
      id: 3,
      image: exam,
      heading: "COMPETITIVE EXAMS",
      text: ` With the aim of promoting English, Science, 
Mathematics & Computer Education, U S Oxford has 
been encouraging children to take up the
 • Eco Club Camp.
 • Olympiad
 • Essay Competition
 • Quiz Competition
  As - Science
    S.S.T
    Maths 
    English
 • Handwriting Competition
 • Art/ Craft competition.`,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center">
      <h2 className="text-4xl font-bold text-center  py-10">
        School Facilities
      </h2>
      </div>

      

    <div className="bg-gray-100">
    

      {facilities.map((facility, index) => (
        <motion.section
          key={index}
          className={`flex flex-col md:flex-row items-center py-12 px-6 md:px-20 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Facility Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
            />
          </div>

          {/* Facility Description */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
            <h3 className="text-3xl font-semibold text-gray-800">{facility.title}</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{facility.description}</p>
          </div>
        </motion.section>
      ))}
    </div>



      {/* Facilities Grid */}
    <div className="bg-gray-100">
     

      {facilitiesData.map(({ id, image, heading, text }, index) => (
        <motion.section
          key={id}
          className={`flex flex-col md:flex-row items-center py-12 px-6 md:px-20 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Facility Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={image}
              alt={heading}
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
            />
          </div>

          {/* Facility Description */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:px-10">
            <h3 className="text-3xl font-semibold text-gray-800">{heading}</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{text}</p>
          </div>
        </motion.section>
      ))}
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

export default Facilities;

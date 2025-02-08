import React from 'react';
import Navbar from "../components/Navbar";
import science from '../images/science.png';
import computer from '../images/computer.png';
import library from '../images/library.png';
import digitalboard from '../images/digitalboard.png';
import yoga from '../images/yoga.jpg';
import exam from '../images/yoga.jpg';

const Facilities = () => {
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
        <h1 className="text-4xl font-bold">Facilities</h1>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {facilitiesData.map(({ id, image, heading, text }) => (
          <div 
            key={id} 
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 hover:scale-110"
          >
            <img 
              src={image} 
              alt={heading} 
              className="w-80 h-80 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-blue-800">{heading}</h2>
            <p className="text-gray-700 mt-2">{text}</p>
          </div>
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

import React from 'react';
import Navbar from '../components/Navbar';
import principal from '../images/principal.png';

const HeroSection = ({ title }) => (
  <div className="bg-blue-900 text-white py-16 text-center">
    <h1 className="text-4xl font-bold">Principal's Message</h1>
  </div>
);

const FacultyCard = ({ member }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48 my-12 mx-4"
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-blue-600">{member.position}</p>
        <p className="mt-2 text-red-600 font-bold">{member.qualification}</p>
        <p>Experience: {member.experience}</p>
        <p className="text-gray-600">{member.title}</p>
      </div>
    </div>
  </div>
);

const LeadershipSection = ({ data }) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8">Principal's Message</h2>
      <div className="flex flex-col gap-8">
        {data.map((member) => (
          <FacultyCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
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
);

const PrincipalMessage = () => {
  const principalData = [
    {
      name: "Mrs. Namrata Tripathi",
      position: "Founder Principal",
      qualification: "In the Garden of Life, Education is the sunlight that helps children to blossom.",
      experience: "20+ years",
      image: principal,
      title: `I have great joy in welcoming you to this esteemed institution. Diversity implies growth; diversity has always been an inherent feature of our Academy. The U S Oxford Academy believes that the spark in every child’s mind must be transformed into brilliance. We provide an education that develops all aspects of each student, preparing them for life and the challenges of the competitive world. Our students are encouraged to participate in social, physical, and cultural activities so that they may emerge as self-disciplined, responsible, and well-adjusted citizens. Our school is strengthened by very supportive parents who are actively involved in all aspects of their children’s education. Wishing you all good luck, Regards`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection title="Our Mission" />
      <LeadershipSection data={principalData} />
      <HeroSection title="Facilities" />
      <Footer />
    </div>
  );
};

export default PrincipalMessage;

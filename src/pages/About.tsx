import React from 'react';
import { Users, Award, History, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';

const About = () => {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      qualification: "Ph.D. in Education",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Prof. Michael Chen",
      position: "Vice Principal",
      qualification: "M.Ed. in Educational Leadership",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

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

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100">
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

      {/* Faculty Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-3xl font-bold">Our Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faculty.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-blue-600">{member.position}</p>
                    <p className="mt-2 text-gray-600">{member.qualification}</p>
                    <p className="text-gray-600">Experience: {member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default About;
import React from 'react';
import { Users, Award, History, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import principal from '../images/principal.png';
import manager from '../images/manager.png';
import chairman from '../images/chairman.png';

const About = () => {
  const faculty = [
    {
      name: " Mrs. Dr. Sangeeta Singh",
      position: "Chairperson",
      qualification:`  fo|ka nnkfr fou;a]
 fou;kn~ ;kfr ik=krke~A
 ik=kRok)kuekIuksfr]
 èkkuk)eZa rr% lq[ke~AA`,
      experience: "20+ years",
      image: chairman,
      title: `It gives me immense pleasure to welcome you all to the U S Oxford Academy. This Academy has 
institutionalized ‘Seek, Share and Serve’, as its motto for a continuous search for knowledge and 
information, and share the received wisdom with the community to serve mankind selessly. Every marble 
piece has within, certain unwanted parts, needed to be chiseled out by its maker, before being sculpted into a 
beautiful statue. We have diligently developed our academic philosophy by laying great emphasis on the 
pursuit of knowledge, its application and skills to help in its dissemination. Our ideology is to create new 
benchmarks by incorporating new initiatives in the eld of education through modern and innovative 
teaching and learning methodologies. U S Oxford knows no bounds in knowledge and realizes that the 
margin fades forever and ever as it moves. But within its boundaries, the disseminated knowledge embodies 
the spirit of enquiry, research and quality. 
 Today we stand on the threshold of a new era-an era empowered by ‘knowledge economy’. Even as 
we prepare to ride the waves of change, our foundations are built on solid rock, rmly anchored on strong life 
principles. U S Oxford prides itself in not only being an institution imparting life’s latest know - how but also 
instilling human core values. May God bless you. May His mighty hand guide you in all your endeavors`,
 moral:`"In the Garden of Life,   
Education is the sunlight that
 help children to blossom."`
    },
    {
      name: " Mrs. Namrata Tripathi",
      position: "Founder Principal",
      qualification:` "In the Garden of Life,   
Education is the sunlight that
 help children to blossom."`,
      experience: "20+ years",
      image: principal,
      title: `I have great joy in welcoming you to this esteemed institution. Diversity
      implies growth; diversity has always been an inherent feature of our Academy.
      The U S Oxford Academy believes that the spark in every child’s mind must
      be transformed into brilliance. We provide an education that develops all aspects
      of each student, preparing them for life and the challenges of the competitive world.
       Our students are encouraged to 
participate to the fullest possible extent in 
the social, physical and cultural activities 
of the school so that they may emerge as 
self-disciplined, responsible and well 
adjusted citizens, capable of playing an 
active and positive role in modern society.
 Our school is strengthened by very 
supportive parents who are actively 
involved in all aspects of their children’s 
education.
 Wishing you all good luck,
 Regards`,
 moral:`"In the Garden of Life,   
Education is the sunlight that
 help children to blossom."`
    },
    {
      name: "Mrs. Pratibha Singh",
      position: "Manager",
      qualification: `The woods are lovely
 dark and deep,
 But I have promises
 to keep,
 And miles to go
 before I sleep,
 And miles to go
 before I sleep…
 Robert Frost`,
      experience: "15+ years",
      image: manager,
      title: `
      Education is not just preparation for life; it is life itself. At U S Oxford,
      we strive to provide positive and transformative learning experiences. We constantly
      adapt to new educational trends, ensuring holistic development in academics,
      emotions, creativity, and physical well-being. Our commitment to innovation
      helps create worthy leaders and responsible citizens.`,
      moral:`The woods are lovely
 dark and deep,
 But I have promises
 to keep,
 And miles to go
 before I sleep,
 And miles to go
 before I sleep…
 Robert Frost`
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
          <div className="flex flex-col gap-8">
            {faculty.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                    <p className="">Experience: {member.experience}</p>
                    <p className="text-gray-600"> {member.title}</p>
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

export default About;
import React from 'react'
import Navbar from "../components/Navbar";
import manager from '../images/manager.png';

const DirectorMessage = () => {
  const faculty = [
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
  ]

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />

    {/* Hero Section */}
    <div className="bg-blue-900 text-white py-16 text-center">
      <h1 className="text-4xl font-bold">Director's Message</h1>
    </div>

     {/* Faculty Section */}
     <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            
           
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

export default DirectorMessage;

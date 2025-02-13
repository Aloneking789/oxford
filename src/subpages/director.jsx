import React from 'react'
import Navbar from "../components/Navbar";
import chairman from '../images/chairman.png';

const DirectorMessage = () => {
  const faculty = [
    {
      name: " Mrs. Dr. Sangeeta Singh",
      position: "Chairperson",
      qualification:`  MA (English), B.Ed, Ph.D`,
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

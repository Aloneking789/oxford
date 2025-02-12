import React from 'react'
import Navbar from "../components/Navbar";

const Calender = () => {
  const events = [
    { date: "2025-01-10", title: "New Semester Begins", category: "Academic" },
    { date: "2025-01-26", title: "Republic Day", category: "Holiday" },
    { date: "2025-02-14", title: "Sports Day", category: "Sports" },
    { date: "2025-03-15", title: "Mid-Term Exams", category: "Exams" },
    { date: "2025-04-10", title: "Annual Cultural Fest", category: "Festival" },
    { date: "2025-05-20", title: "Annual Sports Meet", category: "Sports" },
    { date: "2025-06-10", title: "Final Exams Start", category: "Exams" },
    { date: "2025-07-25", title: "Summer Vacation Begins", category: "Vacation" },
    { date: "2025-01-01", title: "New Year's Day", category: "Holiday" },
    { date: "2025-03-17", title: "Holi", category: "Festival" },
    { date: "2025-04-14", title: "Ambedkar Jayanti", category: "Holiday" },
    { date: "2025-04-18", title: "Good Friday", category: "Holiday" },
    { date: "2025-05-01", title: "Labor Day", category: "Holiday" },
    { date: "2025-08-15", title: "Independence Day", category: "Holiday" },
    { date: "2025-10-02", title: "Gandhi Jayanti", category: "Holiday" },
    { date: "2025-10-20", title: "Dussehra", category: "Festival" },
    { date: "2025-10-31", title: "Diwali", category: "Festival" },
    { date: "2025-11-04", title: "Govardhan Puja", category: "Festival" },
    { date: "2025-11-07", title: "Bhai Dooj", category: "Festival" },
    { date: "2025-12-25", title: "Christmas Day", category: "Holiday" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Academic Calendar 2025</h1>
      </div>
    
       <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
     
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Event</th>
              <th className="py-3 px-4 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-3 px-4">{event.date}</td>
                <td className="py-3 px-4">{event.title}</td>
                <td className="py-3 px-4">{event.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      <footer className="bg-blue-900 text-white py-8 my-8">
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

export default Calender;

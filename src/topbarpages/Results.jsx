import React from 'react';
import Navbar from "../components/Navbar";
import { Trophy, Medal, Star } from 'lucide-react';
import Footer from '../components/Footer';
const Results = () => {
  const currentToppers = [
    {
      id: 1,
      name: "Aisha Patel",
      marks: "99.8%",
      rank: 1,
      image: "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0", // Replace with actual student image
      achievements: "All India Topper",
      year: "2024",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      marks: "99.6%",
      rank: 2,
      image: "https://media.istockphoto.com/id/1071546516/photo/indian-high-school-students-stock-image.jpg?s=612x612&w=0&k=20&c=uh3EdjSRME44155rzaxUTKc3jes2xLtTg7kqTEQjp0A=",
      achievements: "State Topper",
      year: "2024",
    },
    {
      id: 3,
      name: "Priya Singh",
      marks: "99.4%",
      rank: 3,
      image: "https://media.istockphoto.com/id/2164057693/photo/portrait-of-confident-indian-female-college-students-with-book-and-backpack-smiling-to-the.jpg?s=612x612&w=is&k=20&c=tFQaa-gLhNXm7PbWDcNP26rVrnoSbeTMrZGMa2ZCPdM=",
      achievements: "City Topper",
      year: "2024",
    },
  ];

  const previousYearToppers = {
    "2023": [
      { name: "Ankit Kumar", marks: "99.9%", rank: 1 },
      { name: "Meera Reddy", marks: "99.7%", rank: 2 },
      { name: "Zara Khan", marks: "99.5%", rank: 3 },
    ],
    "2022": [
      { name: "Rohan Gupta", marks: "99.8%", rank: 1 },
      { name: "Sanya Malhotra", marks: "99.6%", rank: 2 },
      { name: "Dev Patel", marks: "99.4%", rank: 3 },
    ],
    "2021": [
      { name: "Neha Singh", marks: "99.9%", rank: 1 },
      { name: "Arjun Kapoor", marks: "99.7%", rank: 2 },
      { name: "Riya Shah", marks: "99.5%", rank: 3 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Pride - CBSE Class X Toppers</h1>
          <p className="text-xl">Excellence is not an act, but a habit</p>
        </div>
      </div>

      {/* Current Year Toppers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Current Year Toppers - 2024</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentToppers.map((topper) => (
            <div key={topper.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="relative">
                <img src={topper.image} alt={topper.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4">
                  {topper.rank === 1 && <Trophy className="h-8 w-8 text-yellow-400" />}
                  {topper.rank === 2 && <Medal className="h-8 w-8 text-gray-400" />}
                  {topper.rank === 3 && <Medal className="h-8 w-8 text-yellow-700" />}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{topper.name}</h3>
                <p className="text-gray-600 mb-2">Marks: {topper.marks}</p>
                <p className="text-blue-600 font-semibold">{topper.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Years Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Previous Years' Toppers</h2>
          {Object.entries(previousYearToppers).reverse().map(([year, toppers]) => (
            <div key={year} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Year {year}</h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Rank</th>
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toppers.map((topper, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-2" />
                          {topper.rank}
                        </td>
                        <td className="py-4 px-4">{topper.name}</td>
                        <td className="py-4 px-4">{topper.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Results;
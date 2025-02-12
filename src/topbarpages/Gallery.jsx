import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'independence', name: 'Independence Day' },
    { id: 'republic', name: 'Republic Day' },
    { id: 'annual', name: 'Annual Function' },
    { id: 'sports', name: 'Sports Day' },
    { id: 'cultural', name: 'Cultural Events' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'independence',
      title: 'Independence Day Celebration 2023',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format',
      description: 'Flag hoisting ceremony with cultural performances'
    },
    {
      id: 5,
      category: 'independence',
      title: 'Independence Day Celebration 2023',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format',
      description: 'Flag hoisting ceremony with cultural performances'
    },
    {
      id: 2,
      category: 'republic',
      title: 'Republic Day Parade 2024',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format',
      description: 'Students participating in march past'
    },
    {
      id: 3,
      category: 'annual',
      title: 'Annual Day Function 2023',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format',
      description: 'Cultural performances by students'
    },
    {
      id: 4,
      category: 'sports',
      title: 'Annual Sports Meet 2024',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format',
      description: 'Track and field events'
    },
    // Add more gallery items as needed
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">School Gallery</h1>
          <p className="text-xl">Capturing Memories and Celebrating Achievements</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${selectedCategory === category.id
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 capitalize">
                  {categories.find(cat => cat.id === item.category)?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Gallery;

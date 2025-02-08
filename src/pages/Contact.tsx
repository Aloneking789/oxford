import React, { useState } from "react";
import Navbar from "../components/Navbar";
import QuickLinks from "../components/QuickLinks";

// Questioning Section Data
const questioningSection = [
  { id: 1, query: "General Query", details: "Mail us for any general inquiry", email: "abc@gmail.com" },
  { id: 2, query: "Admission Query", details: "Mail us for any Admission-related inquiry", email: "abc@gmail.com" },
  { id: 3, query: "Complaint", details: "Mail us for any complaints", email: "abc@gmail.com" },
];

// Reusable Question Card Component
const QuestionCard = ({ query, details, email }) => (
  <div className="border p-4 rounded-lg shadow bg-white">
    <h2 className="text-xl font-semibold text-blue-900">{query}</h2>
    <p className="text-gray-600">{details}</p>
    <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    contactNumber: "",
    grade: "",
    message: "",
    isHuman: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg space-y-4">
      {/* Input Fields */}
      {[
        { label: "Child's Name", name: "childName", type: "text" },
        { label: "Contact Number", name: "contactNumber", type: "tel" },
        { label: "Grade in which you are Applying for", name: "grade", type: "text" },
      ].map(({ label, name, type }) => (
        <div key={name}>
          <label className="block text-sm font-medium text-gray-700">{label} *</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
        </div>
      ))}

      {/* Message Box */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Questions or Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          rows={4}
        ></textarea>
      </div>

      {/* Captcha */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isHuman"
          checked={formData.isHuman}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="text-sm text-gray-700">I am human</label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

// Google Map Component
const GoogleMapEmbed = () => (
  <div className="w-full h-96">
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509355!2d144.955928315322!3d-37.81720997975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1a8b947%3A0x5045675218cee17!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1631465312345!5m2!1sen!2sin"
    ></iframe>
  </div>
);

// Main Contact Component
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Questions Section */}
        <div className="space-y-6">
          {questioningSection.map(({ id, query, details, email }) => (
            <QuestionCard key={id} query={query} details={details} email={email} />
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Map Section */}
      <GoogleMapEmbed />
      <QuickLinks/>
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

export default Contact;

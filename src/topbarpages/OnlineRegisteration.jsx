import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

const OnlineRegistration = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    classApplying: '',
    academicYear: '',
    nationality: '',
    guardianContact: '',
    emergencyContact: '',
    medicalConditions: '',
    additionalNotes: '',
  });

  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_2xft5wf', // Replace with your EmailJS service ID
        'template_76pv4tb', // Replace with your EmailJS template ID
        formData,
        'chFHkYDfxBEiqDaBu' // Replace with your EmailJS public key
      );
      setSubmitStatus({
        type: 'success',
        message: 'Registration submitted successfully! We will contact you soon.'
      });
      setFormData({
        studentName: '',
        dob: '',
        gender: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        previousSchool: '',
        classApplying: '',
        academicYear: '',
        nationality: '',
        guardianContact: '',
        emergencyContact: '',
        medicalConditions: '',
        additionalNotes: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting the form. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h1 className="text-3xl font-bold text-center mb-8">Online Registration</h1>
          
          {submitStatus.message && (
            <div className={`p-4 rounded-md mb-6 ${
              submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Student's Name</label>
                <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Parent's Name</label>
                <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Guardian Contact</label>
                <input type="tel" name="guardianContact" value={formData.guardianContact} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
                <input type="tel" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Medical Conditions (if any)</label>
                <textarea name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/> 
    </div>
  );
};

export default OnlineRegistration;

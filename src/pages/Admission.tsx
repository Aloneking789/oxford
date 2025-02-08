import React from 'react';
import { ClipboardList, Calendar, CreditCard, FileText,Users } from 'lucide-react';
import Navbar from '../components/Navbar';

const Admission = () => {
  const admissionSteps = [
    {
      title: "Submit Application",
      description: "Complete the online application form with all required documents.",
      icon: FileText
    },
    {
      title: "Entrance Test",
      description: "Appear for the entrance assessment test.",
      icon: ClipboardList
    },
    {
      title: "Interview",
      description: "Personal interview with the student and parents.",
      icon: Users
    },
    {
      title: "Confirmation",
      description: "Receipt of acceptance letter and fee payment.",
      icon: CreditCard
    }
  ];

  const importantDates = [
    {
      event: "Application Start Date",
      date: "January 15, 2024"
    },
    {
      event: "Application Deadline",
      date: "March 31, 2024"
    },
    {
      event: "Entrance Test",
      date: "April 15, 2024"
    },
    {
      event: "Results Declaration",
      date: "April 30, 2024"
    },
    {
      event: "Fee Payment Deadline",
      date: "May 15, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl">Join our community of learners and innovators</p>
        </div>
      </div>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <ClipboardList className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-3xl font-bold">Admission Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-white rounded-lg shadow-lg p-6">
                  <Icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-3xl font-bold">Important Dates</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {importantDates.map((item) => (
                  <tr key={item.event}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.event}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <CreditCard className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-3xl font-bold">Fee Structure</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuition Fee (Annual)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Development Fee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Primary (1-5)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$8,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$9,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Middle (6-8)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$10,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,200</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$11,200</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Secondary (9-10)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$12,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$13,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">* Additional fees may apply for optional activities and services</p>
        </div>
      </section>

      {/* Online Application */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <FileText className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-3xl font-bold">Online Application</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student's Full Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Grade Applying For</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Select Grade</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Parent's Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Previous School (if any)</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Comments</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
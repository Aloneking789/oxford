import React from "react";
import { ClipboardList, Calendar, CreditCard, FileText, Users } from "lucide-react";
import Navbar from "../components/Navbar";

// Admission Steps Data
const admissionSteps = [
  { title: "Submit Application", description: "Complete the online application form with all required documents.", icon: FileText },
  { title: "Entrance Test", description: "Appear for the entrance assessment test.", icon: ClipboardList },
  { title: "Interview", description: "Personal interview with the student and parents.", icon: Users },
  { title: "Confirmation", description: "Receipt of acceptance letter and fee payment.", icon: CreditCard },
];

// Important Dates Data
const importantDates = [
  { event: "Application Start Date", date: "January 15, 2024" },
  { event: "Application Deadline", date: "March 31, 2024" },
  { event: "Entrance Test", date: "April 15, 2024" },
  { event: "Results Declaration", date: "April 30, 2024" },
  { event: "Fee Payment Deadline", date: "May 15, 2024" },
];

// Fee Structure Data
const fees = [
  { level: "Primary (1-5)", tuition: "$8,000", development: "$1,000", total: "$9,000" },
  { level: "Middle (6-8)", tuition: "$10,000", development: "$1,200", total: "$11,200" },
  { level: "Secondary (9-10)", tuition: "$12,000", development: "$1,500", total: "$13,500" },
];

// StepCard Component
const StepCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// TableRow Component
const TableRow = ({ data }) => (
  <tr className="border-b hover:bg-gray-50">
    {data.map((item, index) => (
      <td key={index} className="px-6 py-4 text-sm text-gray-700">{item}</td>
    ))}
  </tr>
);

// InputField Component
const InputField = ({ label, name, type = "text" }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input id={name} name={name} type={type} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
  </div>
);

// Admission Component
const Admission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Admissions</h1>
        <p className="text-xl mt-2">Join our community of learners and innovators</p>
      </header>

      {/* Admission Steps */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <ClipboardList className="h-8 w-8 text-blue-600" /> Admission Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {admissionSteps.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Calendar className="h-8 w-8 text-blue-600" /> Important Dates
          </h2>
          <table className="w-full bg-white rounded-lg shadow-md mt-6">
            <thead className="bg-gray-50">
              <tr>
                {['Event', 'Date'].map(header => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {importantDates.map(({ event, date }) => (
                <TableRow key={event} data={[event, date]} />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <CreditCard className="h-8 w-8 text-blue-600" /> Fee Structure
          </h2>
          <table className="w-full bg-white rounded-lg shadow-md mt-6">
            <thead className="bg-gray-50">
              <tr>
                {['Grade Level', 'Tuition Fee (Annual)', 'Development Fee', 'Total'].map(header => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fees.map(({ level, tuition, development, total }) => (
                <TableRow key={level} data={[level, tuition, development, total]} />
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-gray-600">* Additional fees may apply for optional activities and services</p>
        </div>
      </section>

      {/* Online Application */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" /> Online Application
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 mt-6">
            <form className="space-y-6">
              {["Student's Full Name", "Date of Birth", "Parent's Email", "Previous School (if any)"].map(label => (
                <InputField key={label} label={label} name={label.toLowerCase().replace(/\s/g, '_')} />
              ))}
              <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-md w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;

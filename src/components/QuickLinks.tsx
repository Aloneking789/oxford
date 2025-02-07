import React from 'react';
import { BookOpen, Users, Calendar, FileText, Phone } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { icon: BookOpen, title: 'Curriculum', path: '/academics' },
    { icon: Users, title: 'Admission', path: '/admission' },
    { icon: Calendar, title: 'Events', path: '/events' },
    { icon: FileText, title: 'Notice Board', path: '/notices' },
    { icon: Phone, title: 'Contact', path: '/contact' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {links.map(({ icon: Icon, title, path }) => (
            <a
              key={title}
              href={path}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Icon className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-gray-900 font-medium text-center">{title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
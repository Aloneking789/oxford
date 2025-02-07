import React from 'react';
import { Bell } from 'lucide-react';
import type { Announcement } from '../types';

const announcements: Announcement[] = [
  {
    id: 1,
    title: 'New Academic Year Registration Open',
    date: '2024-03-15',
    content: 'Registration for the 2024-25 academic year is now open. Early bird discounts available.',
  },
  {
    id: 2,
    title: 'Annual Sports Day',
    date: '2024-03-20',
    content: 'Join us for our Annual Sports Day celebration featuring various athletic events.',
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting',
    date: '2024-03-25',
    content: 'Quarterly parent-teacher meeting scheduled for all grades.',
  },
];

const Announcements = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Bell className="h-6 w-6 text-blue-600" />
          <h2 className="ml-2 text-3xl font-bold text-gray-900">Latest Announcements</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-blue-600 mb-2">
                {new Date(announcement.date).toLocaleDateString()}
              </p>
              <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
              <p className="text-gray-600">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
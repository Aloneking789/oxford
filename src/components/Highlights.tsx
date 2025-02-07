import React from 'react';
import { Trophy, Calendar, Award } from 'lucide-react';
import type { Achievement, Event } from '../types';

const achievements: Achievement[] = [
  {
    id: 1,
    title: '100% Board Results',
    description: 'Our students achieved outstanding results in board examinations.',
  },
  {
    id: 2,
    title: 'Sports Excellence',
    description: 'State-level championships in basketball and athletics.',
  },
  {
    id: 3,
    title: 'STEM Recognition',
    description: 'National award for innovative science projects.',
  },
];

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Science Exhibition',
    date: '2024-03-30',
    location: 'School Auditorium',
    description: 'Annual science exhibition showcasing student projects.',
  },
  {
    id: 2,
    title: 'Cultural Fest',
    date: '2024-04-15',
    location: 'School Ground',
    description: 'Two-day cultural extravaganza with performances and competitions.',
  },
];

const Highlights = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Achievements */}
          <div>
            <div className="flex items-center mb-6">
              <Trophy className="h-6 w-6 text-blue-600" />
              <h2 className="ml-2 text-2xl font-bold text-gray-900">Recent Achievements</h2>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-start p-4 bg-white rounded-lg shadow-md"
                >
                  <Award className="h-5 w-5 text-yellow-500 mt-1" />
                  <div className="ml-3">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-blue-600" />
              <h2 className="ml-2 text-2xl font-bold text-gray-900">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{event.title}</h3>
                    <span className="text-sm text-blue-600">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{event.location}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, Award } from "lucide-react";
import type { Achievement, Event } from "../types";

const achievements: Achievement[] = [
  {
    id: 1,
    title: "100% Board Results",
    description: "Our students achieved outstanding results in board examinations.",
  },
  {
    id: 2,
    title: "Sports Excellence",
    description: "State-level championships in basketball and athletics.",
  },
  {
    id: 3,
    title: "STEM Recognition",
    description: "National award for innovative science projects.",
  },
];

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Science Exhibition",
    date: "2024-03-30",
    location: "School Auditorium",
    description: "Annual science exhibition showcasing student projects.",
  },
  {
    id: 2,
    title: "Cultural Fest",
    date: "2024-04-15",
    location: "School Ground",
    description: "Two-day cultural extravaganza with performances and competitions.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Highlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Achievements */}
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.3 }}>
            <div className="flex items-center mb-6">
              <Trophy className="h-7 w-7 text-blue-600" />
              <h2 className="ml-3 text-3xl font-bold text-gray-900">Recent Achievements</h2>
            </div>
            <div className="space-y-5">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  variants={cardVariants}
                  className="flex items-start p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Award className="h-6 w-6 text-yellow-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.3 }}>
            <div className="flex items-center mb-6">
              <Calendar className="h-7 w-7 text-blue-600" />
              <h2 className="ml-3 text-3xl font-bold text-gray-900">Upcoming Events</h2>
            </div>
            <div className="space-y-5">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  className="p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <span className="text-sm font-medium text-blue-600">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{event.location}</p>
                  <p className="text-gray-600">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  // Variantes d'animation pour Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const scheduleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const classVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  // Données des jours
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Données des cours
  const scheduleData = {
    Monday: [
      { time: '07:00 - 08:00', class: 'Hatha Yoga', instructor: 'Emma', level: 'All Levels', color: 'bg-blue-50' },
      { time: '09:30 - 10:45', class: 'Vinyasa Flow', instructor: 'Michael', level: 'Intermediate', color: 'bg-blue-100' },
      { time: '12:00 - 13:00', class: 'Gentle Yoga', instructor: 'Sophia', level: 'Beginner', color: 'bg-blue-50' },
      { time: '17:30 - 18:45', class: 'Ashtanga', instructor: 'David', level: 'Advanced', color: 'bg-blue-100' },
      { time: '19:00 - 20:15', class: 'Yin Yoga', instructor: 'Lisa', level: 'All Levels', color: 'bg-blue-50' }
    ],
    Tuesday: [
      { time: '07:30 - 08:30', class: 'Morning Flow', instructor: 'Michael', level: 'All Levels', color: 'bg-blue-50' },
      { time: '10:00 - 11:15', class: 'Prenatal Yoga', instructor: 'Sophia', level: 'All Levels', color: 'bg-blue-100' },
      { time: '12:30 - 13:30', class: 'Quick Lunch Yoga', instructor: 'David', level: 'Beginner', color: 'bg-blue-50' },
      { time: '17:00 - 18:15', class: 'Power Yoga', instructor: 'Emma', level: 'Intermediate', color: 'bg-blue-100' },
      { time: '19:30 - 20:45', class: 'Restorative Yoga', instructor: 'Lisa', level: 'All Levels', color: 'bg-blue-50' }
    ],
    Wednesday: [
      { time: '07:00 - 08:15', class: 'Ashtanga', instructor: 'David', level: 'Advanced', color: 'bg-blue-50' },
      { time: '09:30 - 10:45', class: 'Vinyasa Flow', instructor: 'Michael', level: 'Intermediate', color: 'bg-blue-100' },
      { time: '12:00 - 13:00', class: 'Office Yoga', instructor: 'Sophia', level: 'All Levels', color: 'bg-blue-50' },
      { time: '17:30 - 18:45', class: 'Hatha Yoga', instructor: 'Emma', level: 'All Levels', color: 'bg-blue-100' },
      { time: '19:00 - 20:00', class: 'Meditation', instructor: 'Lisa', level: 'All Levels', color: 'bg-blue-50' }
    ],
    Thursday: [
      { time: '07:30 - 08:30', class: 'Morning Flow', instructor: 'Michael', level: 'All Levels', color: 'bg-blue-50' },
      { time: '10:00 - 11:15', class: 'Yin Yang Yoga', instructor: 'Sophia', level: 'Intermediate', color: 'bg-blue-100' },
      { time: '12:30 - 13:30', class: 'Quick Lunch Yoga', instructor: 'David', level: 'Beginner', color: 'bg-blue-50' },
      { time: '17:00 - 18:15', class: 'Power Yoga', instructor: 'Emma', level: 'Intermediate', color: 'bg-blue-100' },
      { time: '19:30 - 20:45', class: 'Candlelight Yoga', instructor: 'Lisa', level: 'All Levels', color: 'bg-blue-50' }
    ],
    Friday: [
      { time: '07:00 - 08:00', class: 'Hatha Yoga', instructor: 'Emma', level: 'All Levels', color: 'bg-blue-50' },
      { time: '09:30 - 10:45', class: 'Vinyasa Flow', instructor: 'Michael', level: 'Intermediate', color: 'bg-blue-100' },
      { time: '12:00 - 13:00', class: 'Gentle Yoga', instructor: 'Sophia', level: 'Beginner', color: 'bg-blue-50' },
      { time: '17:30 - 18:45', class: 'Friday Flow', instructor: 'David', level: 'All Levels', color: 'bg-blue-100' }
    ],
    Saturday: [
      { time: '08:00 - 09:15', class: 'Weekend Vinyasa', instructor: 'Michael', level: 'All Levels', color: 'bg-blue-50' },
      { time: '10:00 - 11:30', class: 'Ashtanga', instructor: 'David', level: 'Advanced', color: 'bg-blue-100' },
      { time: '12:00 - 13:15', class: 'Family Yoga', instructor: 'Sophia', level: 'All Levels', color: 'bg-blue-50' },
      { time: '15:00 - 16:15', class: 'Yin Yoga', instructor: 'Lisa', level: 'All Levels', color: 'bg-blue-100' }
    ],
    Sunday: [
      { time: '09:00 - 10:15', class: 'Sunday Slow Flow', instructor: 'Emma', level: 'All Levels', color: 'bg-blue-50' },
      { time: '11:00 - 12:15', class: 'Restorative Yoga', instructor: 'Lisa', level: 'All Levels', color: 'bg-blue-100' },
      { time: '16:00 - 17:00', class: 'Meditation', instructor: 'David', level: 'All Levels', color: 'bg-blue-50' },
      { time: '17:30 - 18:45', class: 'Yin Yoga', instructor: 'Lisa', level: 'All Levels', color: 'bg-blue-100' }
    ]
  };

  return (
    <section id="schedule" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Class <span className='text-blue-900'>Schedule</span>
          </motion.h2>
          <motion.p 
            className="text-gray-500 max-w-2xl mx-auto text-md"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veniam autem aspernatur eveniet. Eaque facilis culpa hic, dolorem ratione nobis temporibus officiis fugiat quo, esse provident beatae distinctio perspiciatis totam.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {days.map(day => (
            <motion.button
              key={day}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeDay === day ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveDay(day)}
              variants={tabVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {day.slice(0, 3)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gray-50 rounded-xl p-6 shadow-sm"
          key={activeDay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeDay} Classes
          </motion.h3>

          {scheduleData[activeDay].length > 0 ? (
            <motion.div 
              className="grid gap-4"
              variants={scheduleVariants}
              initial="hidden"
              animate="visible"
            >
              {scheduleData[activeDay].map((classItem, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg ${classItem.color} border-l-4 border-blue-500`}
                  variants={classVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{classItem.class}</h4>
                      <p className="text-gray-600">{classItem.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700">
                        <span className="font-medium">Instructor:</span> {classItem.instructor}
                      </p>
                      <span className="inline-block px-2 py-1 bg-white text-blue-600 rounded text-sm font-medium mt-1">
                        {classItem.level}
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <motion.button 
                        className="border-blue-600 hover:border-blue-700 border text-blue-700 font-medium py-2 px-4 rounded-lg text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p 
              className="text-center text-gray-600 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              No classes scheduled for this day.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
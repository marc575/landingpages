import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // Variantes d'animation pour Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  // Données des services
  const yogaServices = [
    {
      id: 1,
      title: "Hatha Yoga",
      description: "A gentle introduction to the most basic yoga postures. Perfect for beginners to learn foundational poses and breathing techniques.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      ),
      features: ["Slow-paced", "Basic poses", "Breathing focus"]
    },
    {
      id: 2,
      title: "Vinyasa Flow",
      description: "A dynamic practice that links movement and breath together in a dance-like flow. Increases flexibility and strength.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      features: ["Movement with breath", "Energetic practice", "Builds heat"]
    },
    {
      id: 3,
      title: "Yin Yoga",
      description: "A slow-paced style with poses held for longer periods. Targets deep connective tissues and improves flexibility.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      features: ["Deep stretching", "Long holds", "Meditative"]
    },
    {
      id: 4,
      title: "Ashtanga Yoga",
      description: "A rigorous style following a specific sequence of postures. Ideal for those seeking a challenging practice.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
      features: ["Structured series", "Physically demanding", "Progressive practice"]
    },
    {
      id: 5,
      title: "Restorative Yoga",
      description: "A relaxing practice using props to support the body in passive poses. Calms the nervous system and reduces stress.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      ),
      features: ["Deep relaxation", "Fully supported", "Stress relief"]
    },
    {
      id: 6,
      title: "Prenatal Yoga",
      description: "Specially designed for expectant mothers. Helps prepare body and mind for childbirth while connecting with baby.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      ),
      features: ["Safe for pregnancy", "Pelvic floor focus", "Community support"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Our Yoga Classes
          </motion.h2>
          <motion.p 
            className="text-gray-500 max-w-2xl mx-auto text-md"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi saepe aliquam quae atque porro omnis ipsa fuga et obcaecati recusandae a exercitationem, praesentium quod ullam cum, nesciunt velit quibusdam.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {yogaServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm p-6 flex flex-col h-full border border-gray-50"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="mb-4 bg-gray-50 p-3 rounded-lg inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <ul className="mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button 
                className="mt-auto border bg-blue-50 border-blue-600 hover:border-blue-700 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
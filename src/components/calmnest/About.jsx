import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/calmnest/about.jpg';
import aboutImage2 from '../../assets/calmnest/about2.jpg';
import aboutImage3 from '../../assets/calmnest/about3.jpg';

const About = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10">
          {/* Content Section */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 
              className="text-lg uppercase mb-2 font-bold"
              variants={itemVariants}
            >
              About
            </h4>
            <motion.h2 
              className="text-4xl md:text-5xl mb-6 font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
              variants={itemVariants}
            >
              About Our Yoga <span className='text-blue-900'>Studio</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-500 mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officiis earum magnam possimus amet facere nostrum unde dolorum quae laudantium suscipit maiores sapiente tempora totam eos in adipisci animi dolor.
            </motion.p>
            
            <motion.p 
              className="text-gray-500 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus labore explicabo voluptatem quam nam incidunt, alias delectus! Modi facere, distinctio fugiat doloremque officiis cum accusantium at enim laboriosam porro repudiandae.
            </motion.p>
            
            <motion.p 
              className="text-gray-500 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus labore explicabo voluptatem quam nam incidunt, alias delectus! Modi facere, distinctio fugiat doloremque officiis cum accusantium at enim laboriosam porro repudiandae.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Certified Instructors</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Eco-Friendly Space</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Gallery Section */}
          <motion.div 
            className="w-full md:w-1/2 relative mt-10 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-90 md:h-120">
              {/* Main Image */}
              <motion.div 
                className="absolute w-3/5 left-1/5 top-0 z-10 rounded-2xl overflow-hidden shadow-lg"
                variants={imageVariants}
              >
                <img 
                  src={aboutImage3} 
                  alt="Group yoga session" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              {/* Top Left Image */}
              <motion.div 
                className="absolute w-2/5 right-0 top-1/8 z-20 rounded-2xl overflow-hidden shadow-lg"
                variants={imageVariants}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img 
                  src={aboutImage} 
                  alt="Yoga pose closeup" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              {/* Bottom Left Image */}
              <motion.div 
                className="absolute w-2/5 left-0 bottom-0 z-30 rounded-2xl overflow-hidden shadow-lg"
                variants={imageVariants}
                initial={{ x: -30, y: 30, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img 
                  src={aboutImage2} 
                  alt="Meditation session" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              {/* Decorative Element */}
              <motion.div 
                className="absolute -z-10 -left-6 -bottom-6 w-32 h-32 rounded-full bg-blue-900 opacity-50"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
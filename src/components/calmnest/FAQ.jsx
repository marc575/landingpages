import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Données des FAQs
  const faqs = [
    {
      question: "Do I need to have prior yoga experience to join?",
      answer: "Not at all! We welcome practitioners of all levels, from complete beginners to advanced yogis. Our instructors provide modifications for different poses to accommodate everyone's experience level and physical abilities."
    },
    {
      question: "How often should I practice yoga?",
      answer: "For beginners, we recommend starting with 2-3 classes per week to allow your body to adapt. As you become more comfortable, you can increase frequency. Even practicing once a week can provide benefits, but consistency is key to experiencing yoga's full transformative effects."
    },
    {
      question: "Are your classes suitable for people with injuries or health conditions?",
      answer: "Many of our classes can be adapted for various conditions, but we always recommend consulting with your healthcare provider first. Please inform your instructor about any injuries or health concerns before class begins. We also offer therapeutic yoga sessions specifically designed for rehabilitation."
    },
    {
      question: "What are your COVID-19 safety protocols?",
      answer: "We maintain enhanced cleaning procedures between classes, provide hand sanitizing stations throughout the studio, and have upgraded our ventilation system. Mats are spaced appropriately, and we offer contactless check-in. Masks are optional but welcomed for those who prefer them."
    },
    {
      question: "Can I drop in for a class, or do I need to sign up in advance?",
      answer: "We highly recommend signing up in advance through our website or app to guarantee your spot, as classes often fill up. However, we do accept drop-ins based on availability. Arrive at least 10 minutes early if dropping in to secure your place."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-gray-500 max-w-2xl mx-auto text-md"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit. At natus esse aspernatur officia unde non repellendus, ducimus veritatis magni eveniet voluptatibus dolores pariatur! Repudiandae.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden"
              variants={itemVariants}
            >
              <motion.button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                whileHover={{ backgroundColor: "#f8fafc" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-medium text-gray-800 pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg 
                    className="w-5 h-5 text-blue-600 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#contact"
              className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              Contact Us
            </motion.a>
            <motion.a 
              href="tel:+15551234567"
              className="bg-white text-blue-600 border-2 border-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
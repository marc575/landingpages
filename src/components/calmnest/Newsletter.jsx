import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  const formVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'abonnement réussi
    console.log('Email submitted:', email);
    setIsSubscribed(true);
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 5000);
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 relative overflow-hidden">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Contenu texte */}
            <div className="md:w-1/2">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                variants={itemVariants}
              >
                Stay Connected
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                Join our newsletter and be the first to know about new classes, special events, workshops, and exclusive offers. Receive yoga tips, mindfulness practices, and wellness inspiration directly in your inbox.
              </motion.p>

              <motion.ul 
                className="space-y-3 mb-8"
                variants={itemVariants}
              >
                <li className="flex items-center">
                  <div className="bg-blue-100 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Exclusive class updates</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-100 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Wellness tips & inspiration</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-100 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Special offers & discounts</span>
                </li>
              </motion.ul>
            </div>

            {/* Formulaire */}
            <div className="md:w-1/2 w-full">
              <motion.div
                variants={formVariants}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Welcome to Our Community!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for subscribing. Check your inbox for our welcome email.
                    </p>
                    <motion.button
                      onClick={() => setIsSubscribed(false)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      Subscribe another email
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Join Our Newsletter</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Subscribe Now
                      </motion.button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                      We respect your privacy. Unsubscribe at any time. View our{' '}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 border border-blue-500 bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">2,500+</div>
            <div className="text-gray-600">Happy Subscribers</div>
          </div>
          <div className="bg-blue-50 border border-blue-500 bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">Weekly</div>
            <div className="text-gray-600">Inspiration Delivered</div>
          </div>
          <div className="bg-blue-50 border border-blue-500 bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">0%</div>
            <div className="text-gray-600">Spam, 100% Value</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
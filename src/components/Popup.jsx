import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Popup = ({ show, onClose }) => {
  // Fermer la popup quand on clique n'importe où
  useEffect(() => {
    if (show) {
      const handleClick = () => onClose();
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-md">
          {/* Overlay semi-transparent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
          />
          
          {/* Popup animée */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                damping: 10,
                stiffness: 100,
                mass: 0.5
              }
            }}
            exit={{ 
              scale: 0.5, 
              opacity: 0,
              transition: { duration: 0.2 }
            }}
            className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-auto"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique dans la popup
          >
            {/* Bouton fermeture */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Contenu animé */}
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, -10, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2
                  }
                }}
                className="inline-block mb-4"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-16 h-16 text-yellow-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </motion.div>

              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.3 }
                }}
              >
                Toujours là ?
              </motion.h3>

              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.5 }
                }}
              >
                Nous avons constater que vous êtes inactif depuis plus de 10 secondes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7 }
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                    // Rediriger ou autre action
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Continuer à naviguer
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
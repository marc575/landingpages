import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';

const Sidebar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Liste des pages (à adapter à vos routes)
  const pages = [
    { number: 1, path: '/', name: 'Calmnest' },
    { number: 2, path: '/flowify', name: 'Flowify' },
    { number: 3, path: '/xpress', name: 'Xpress' },
    { number: 4, path: '/flame', name: 'Flame' },
    { number: 5, path: '/finory', name: 'Finory' },
    { number: 6, path: '/ibte', name: 'Ibte' },
    { number: 7, path: '/therapy', name: 'Therapy' },
    { number: 8, path: '/evergreen', name: 'Evergreen' },
    { number: 9, path: '/podcast', name: 'Podcast' },
  ];

  // Détection de la page active
  useEffect(() => {
    const currentPath = location.pathname;
    const active = pages.find(page => page.path === currentPath);
    if (active) setActivePage(active.number);
  }, [location.pathname]);

  return (
    <motion.div 
      className="fixed right-0 top-1/2 transform -translate-y-1/2 h-auto z-50"
      initial={{ x: -40 }}
      animate={{ x: isHovered ? 0 : -20 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-start space-y-4 p-3 bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl border border-blue-100">
        {pages.map((page) => (
          <motion.a
            key={page.number}
            href={page.path}
            className={`flex items-center justify-center w-6 h-6 rounded-full text-md font-medium relative overflow-hidden transition-all duration-300 ${
              activePage === page.number 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {page.number}
            {/* Tooltip visible au hover */}
            {isHovered && (
              <motion.span 
                className="absolute left-12 bg-blue-600 text-white text-sm font-normal px-3 py-1 rounded whitespace-nowrap"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                {page.name}
              </motion.span>
            )}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
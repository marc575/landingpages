import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/logo.png";
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('FR');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Price', href: '#price' },
    { name: 'Contact', href: '#contact' }
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'ES', name: 'Español' }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto py-2">
          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Logo - Centré */}
          <motion.div 
            className="flex-shrink-0 mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
          >
            <a href="#" className="flex items-center">
              <img src={logo} className='rounded-full border border-gray-100 w-12 hover:scale-105 transition-transform duration-300' alt="logo" />
            </a>
          </motion.div>

          {/* Menu desktop - Centré */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-200'}`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span 
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-black"
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Sélecteur de langue - Droite */}
          <div className="relative flex gap-4">
            <motion.button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className={`flex items-center gap-1 ${scrolled ? 'text-gray-800' : 'text-white'} p-2`}
              whileHover={{ scale: 1.1 }}
            >
              <FiGlobe />
              <span className="text-sm">{selectedLanguage}</span>
            </motion.button>

            {isLanguageOpen && (
              <motion.div
                className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${selectedLanguage === lang.code ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </motion.div>
            )}
            
            {/* Bouton CTA à droite */}
            <a
                href="/five"
                className={`hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-all duration-300 ${scrolled ? 'bg-yellow-500 text-white hover:bg-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-400'} shadow-sm hover:shadow-md`}
            >
                Subscribe
                <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`md:hidden ${scrolled ? 'bg-white' : 'bg-black/90'} transition-all`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
                <a
                    href="/five"
                    className="block w-full px-4 py-2 mt-2 rounded-md text-base font-medium text-white bg-yellow-500 hover:bg-yellow-400 transition-colors duration-300 text-center"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Subscribe
                    <FaArrowRight className="inline ml-2" />
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
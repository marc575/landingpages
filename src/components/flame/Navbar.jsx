import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGlobe, FiUser, FiShoppingCart } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Boutique', href: '#shop' },
    { name: 'Modèles', href: '#models' },
    { name: 'Contact', href: '#contact' }
  ];

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-8xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu gauche (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-orange-500 focus:outline-none`}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Menu gauche (desktop) */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span 
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500"
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
          </nav>


          {/* Logo au centre */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <a href="#" className="flex items-center">
                <img 
                    src={logo} 
                    className="rounded-xl border border-gray-100 w-10 hover:scale-105 transition-transform duration-300" 
                    alt="logo" 
                />
            </a>
          </motion.div>

          {/* Icônes droite */}
          <div className="flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
            >
              <button 
                onClick={() => setLanguageOpen(!languageOpen)}
                className={`flex items-center ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-orange-500`}
              >
                <FiGlobe className="mr-1" size={25} />
                <FaChevronDown className="text-xs" />
              </button>
              
              {languageOpen && (
                <motion.div 
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      onClick={() => setLanguageOpen(false)}
                    >
                      {lang.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Compte utilisateur */}
            <motion.a
              href="#account"
              className={`p-2 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-orange-500`}
              whileHover={{ scale: 1.1 }}
            >
              <FiUser size={25} />
            </motion.a>

            {/* Panier */}
            <motion.a
              href="#cart"
              className={`p-2 relative ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-orange-500`}
              whileHover={{ scale: 1.1 }}
            >
              <FiShoppingCart size={25} />
              <span className="absolute top-2 right-2 md:top-3 md:right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full">
                3
              </span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${scrolled ? 'bg-white' : 'bg-gray-900/95'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-gray-800'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
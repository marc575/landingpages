import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'À propos', href: '#about' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo à gauche */}
            <div className="flex-shrink-0">
                <a href="#" className="flex items-center">
                <img src={logo} className='rounded-full border border-gray-100 w-12 hover:scale-105 transition-transform duration-300' alt="logo" />
                </a>
            </div>

            <div className="hidden md:block">
                {/* Menu desktop (centré) */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`relative py-2 text-[16px] font-bold transition-colors duration-300 ${scrolled ? 'text-black hover:text-blue-600' : 'text-gray-50 hover:text-blue-600'}`}
                        >
                            {item.name}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>
            </div>
          
            <div className="hidden md:block">   
                {/* Bouton CTA à droite */}
                <a
                    href="#contact"
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-all duration-300 ${scrolled ? 'bg-gray-900 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-blue-700'} shadow-sm hover:shadow-md`}
                >
                    Contact Us
                    <FaArrowRight className="ml-2" />
                </a>
            </div> 

          {/* Menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 focus:outline-none transition duration-300`}
              aria-label="Menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile ouvert */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${scrolled ? 'bg-white' : 'bg-white'} transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full px-4 py-2 mt-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-blue-700 transition-colors duration-300 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
            <FaArrowRight className="inline ml-2" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useState } from 'react';
import logo from "../../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo} 
              className="rounded-full border border-gray-100 w-12 hover:scale-105 transition-transform duration-300" 
              alt="logo" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {['Accueil', 'Services', 'Projets', 'Tarif', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-purple-700 font-medium text-lg relative group transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#" 
              className="relative inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Découvrir
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 focus:outline-none transition duration-300"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {['Accueil', 'Services', 'Projets', 'Tarif', 'Blog'].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="block w-full px-4 py-2 mt-2 rounded-md text-lg font-medium text-purple-700 bg-purple-100 hover:bg-purple-200 transition-colors duration-300 text-center"
          >
            Découvrir
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
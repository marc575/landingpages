import React from 'react';

const Footer = ({title}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-900 py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} {title}. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms and Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Legal notices
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Designed with ❤️ by{" "}
              <a 
                href="https://www.linkedin.com/in/marc-tatchou-85891a243/" 
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
              >
                Tatchou Marc
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';

const Find = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8" id='discovery'>
      <div className="max-w-8xl mx-auto">
        <div className={`flex flex-col lg:flex-row rounded-xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Carte Google Maps intégrée */}
          <div className="w-full lg:w-1/2 h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457414809!2d2.276994458467656!3d48.8589465815324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1633951253114!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de localisation"
              className="filter grayscale(0.2) contrast(1.1)"
            ></iframe>
          </div>
          
          {/* Contenu à droite */}
          <div className="w-full lg:w-1/2 py-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Discovery Properties with the Best Value
            </h2>
            
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur quam hic sequi cum, voluptatum quisquam commodi veritatis iusto placeat possimus voluptate sapiente velit pariatur atque ex libero enim assumenda.
            </p>
            
            <div className="ùt-2">
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find More Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
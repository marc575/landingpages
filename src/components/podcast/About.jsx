import React, { useState, useEffect } from 'react';
import aboutImage from "../../assets/podcast/banniere3.jpg"
import aboutImage2 from "../../assets/podcast/banniere4.jpg"

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white py-32 px-4 sm:px-6 lg:px-20" id='about'>
      <div className="max-w-8xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Coté gauche - Blocs média */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-end gap-4">
              {/* Bloc vidéo vertical */}
              <div className="relative w-1/2 overflow-hidden rounded-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Image de fond */}
                <div className="absolute inset-0 -z-50">
                  <img
                    src={aboutImage}
                    alt="Belle maison à louer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 opacity-95 bg-gradient-to-l from-transparent to-black"></div>
                </div>
                
                <div className="bg-yellow-500/30 h-120 w-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <svg className="w-16 h-16 text-black mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <p className="text-white font-semibold">LATEST PODCAST</p>
                    <p className="text-white text-sm mt-2">Watch now</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-semibold">Exclusive interview with a renowned artist</p>
                  <p className="text-yellow-300 text-sm">45:32</p>
                </div>
              </div>
              
              {/* Bloc image moins haut */}
              <div className="relative w-1/2 overflow-hidden rounded-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Image de fond */}
                <div className="absolute inset-0 -z-50">
                  <img
                    src={aboutImage2}
                    alt="Belle maison à louer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 opacity-95 bg-gradient-to-l from-transparent to-black"></div>
                </div>

                <div className="bg-gray-800/30 h-90 w-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg className="w-12 h-12 text-yellow-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <p className="text-yellow-500 font-semibold">LIVE RECORDING</p>
                    <p className="text-white text-sm mt-1">Live session on November 15</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-yellow-500 text-black rounded-full p-3 transform hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coté droit - Contenu */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="text-black">
              <p className="text-yellow-500 font-semibold mb-4 tracking-wider">Claire Lejeune</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Leaving LA behind for Paris - Claire Lejeune's <span className="text-yellow-500">Photography Journey</span></h2>
              <p className="text-gray-700 text-md mb-8 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit totam provident consectetur soluta voluptate possimus, 
                ipsam eligendi iste velit, vitae minima dolorum incidunt natus dolore. Quia adipisci a reprehenderit sit.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-black">100+</p>
                    <p className="text-gray-600 text-sm">Episodes</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-black">50K+</p>
                    <p className="text-gray-600 text-sm">Auditors</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-black">1M+</p>
                    <p className="text-gray-600 text-sm">Views</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-black">20+</p>
                    <p className="text-gray-600 text-sm">Lives</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Listen now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import heroImage from '../../assets/xpress/banniere2.webp';

const Hero = () => {

  return (
    <section className="bg-white relative">
        <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center pb-6 md:pb-0 gap-12">
            {/* Texte et CTA */}
            <div className="lg:w-1/2 space-y-2 animate-fadeInUp lg:pl-10 px-4 sm:px-0">

                {/* Titre principal avec dégradé */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    Escape Reality and Step into Overpriced Mediocre <span className='text-red-700'>Destination</span>
                </h1>

                {/* Description */}
                <p className="text-md text-gray-600 max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae delectus esse quisquam facere. Eveniet, dolorem qui distinctio blanditiis suscipit vitae fugiat impedit earum, quia est sint et ullam exercitationem.
                </p>

                {/* Boutons */}
                <div className="flex flex-wrap gap-4 pt-2">
                    <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                        Découvrir
                    </button>
                    <button className="px-4 py-2 bg-gray-50 text-dark font-medium rounded-full hover:bg-gray-200 transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-3">
                        {/* Avatar client */}
                        <div className="relative">
                            <img 
                                src="https://randomuser.me/api/portraits/women/44.jpg" 
                                alt="Client satisfait"
                                className="w-8 h-8 rounded-full object-cover border border-gray-300"
                            />
                        </div>
                        
                        <span>Démo</span>
                        
                        {/* Flèche moderne */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 animate-fadeIn order-first lg:order-last">
                <div className="relative overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Hero illustration"
                        className="w-full h-screen object-contain transition-all duration-500 hover:scale-105"
                    />
                </div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
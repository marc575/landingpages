import React from 'react';
import heroImage from '../../assets/xpress/banniere2.webp';

const Hero = () => {

  // Données clients
  const clients = [
    { id: 1, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Sophie' },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Pierre' },
    { id: 3, avatar: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Emma' },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/men/12.jpg', name: 'Luc' },
    { id: 5, avatar: 'https://randomuser.me/api/portraits/women/43.jpg', name: 'Lea' },
  ];
  
  return (
    <section className="bg-white relative">
        <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center pb-6 md:pb-0 gap-12">
            {/* Texte et CTA */}
            <div className="lg:w-1/2 space-y-2 animate-fadeInUp lg:pl-10 px-4 sm:px-0">

                {/* Badge avis clients */}
                <div 
                    className="relative"
                    >
                    <div className="flex flex-row gap-2 md:gap-0 md:items-center mb-1">
                        <div className="flex -space-x-2">
                        {clients.map((client) => (
                            <img
                            key={client.id}
                            src={client.avatar}
                            alt={client.name}
                            className="w-8 h-8 rounded-full border-2 border-white"
                            />
                        ))}
                        </div>
                        <div className="ml-3">
                        <div className="flex items-center text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            ))}
                        </div>
                        <span className="text-xs text-gray-400">4.9/5 (248 avis)</span>
                        </div>
                    </div>
                </div>

                {/* Titre principal avec dégradé */}
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
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
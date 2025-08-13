import React from 'react';
import heroImage from '../../assets/calmnest/banniere1.jpg';
import Partners from './Parterns';

const Hero = () => {

  return (
    <section className="bg-white relative">
        <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Texte et CTA */}
            <div className="lg:w-1/2 space-y-2 animate-fadeInUp lg:pl-10 px-4 sm:px-0">

                {/* Titre principal avec dégradé */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                Find Your Calm <br /> <span className='italic'>Anytime</span>
                </h1>

                {/* Description */}
                <p className="text-md text-gray-600 max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae delectus esse quisquam facere. Eveniet, dolorem qui distinctio blanditiis suscipit vitae fugiat impedit earum, quia est sint et ullam exercitationem.
                </p>

                {/* Boutons */}
                <div className="flex flex-wrap gap-4 pt-6">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                    Découvrir
                </button>
                <button className="px-8 py-3 bg-transparent border border-dark text-dark font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 hover:translate-y-[-2px]">
                    Voir la démo
                </button>
                </div>

                {/* Statistiques */}
                <div className='flex flex-wrap gap-6 pt-6'>
                    <div className='space-y-2 animate-fadeInUp'>
                        <h3 className='text-2xl font-bold'>€500B+</h3>
                        <p className="text-md text-gray-600 max-w-2xl">Lorem ipsum dolor</p>
                    </div>
                    <div className='space-y-2 animate-fadeInUp'>
                        <h3 className='text-2xl font-bold'>170+</h3>
                        <p className="text-md text-gray-600 max-w-2xl">Lorem ipsum dolor</p>
                    </div>
                    <div className='space-y-2 animate-fadeInUp'>
                        <h3 className='text-2xl font-bold'>10%</h3>
                        <p className="text-md text-gray-600 max-w-2xl">Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 animate-fadeIn order-first lg:order-last">
                <div className="relative overflow-hidden">
                <img
                    src={heroImage}
                    alt="Hero illustration"
                    className="w-full h-screen object-cover transition-all duration-500 hover:scale-105"
                />
                </div>
            </div>
            </div>
        </div>
      
        <Partners />
    </section>
  );
};

export default Hero;
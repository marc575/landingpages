import React from 'react';
import heroImage from '../../assets/finory/banniere4.jpg';
import { motion } from "framer-motion"
import { 
  SiTesla,
  SiGoogle, 
  SiApple,
  SiAmazon,
} from 'react-icons/si';
import { 
    FaIdCard,
    FaPiggyBank
} from 'react-icons/fa';
import Video from './Video';

const Hero = () => {
  // Configuration des partenaires
  const partners = [
    { icon: <SiTesla className="w-full h-full" />, name: 'Tesla' },
    { icon: <SiGoogle className="w-full h-full" />, name: 'Google' },
    { icon: <SiApple className="w-full h-full" />, name: 'Apple' },
    { icon: <SiAmazon className="w-full h-full" />, name: 'Amazon' }
  ];
      
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-white relative">
        <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-2">
            {/* Texte et CTA */}
            <div className="lg:w-1/2 space-y-4 md:space-y-2 animate-fadeInUp pb-32 md:pb-16 lg:pl-10 px-4 sm:px-0">

                {/* Titre principal avec dégradé */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800 flex gap-2 items-center'>
                        Tailored  <FaIdCard className="w-8 h-8 text-gray-800" /><FaPiggyBank className="w-8 h-8 text-gray-800" />
                    </span>
                    Banking for a Life of Distinction
                </h1>

                {/* Description */}
                <p className="text-md text-gray-600 max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae delectus esse quisquam facere. Eveniet, dolorem qui distinctio blanditiis suscipit.
                </p>

                {/* Boutons */}
                <div className="flex flex-wrap gap-4 py-2">
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-900 to-purple-800 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                        Open Account
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 hover:translate-y-[-2px]">
                        Learn More
                    </button>
                </div>

                {/* Partenaires */}
                <motion.div 
                    className="w-full md:w-auto"
                    variants={item}
                >
                    <h3 className='text-md text-gray-600 font-bold pb-4'>OUR TRUSTED PARTNERS</h3>
                    <div className="flex flex-wrap justify-start gap-2">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="h-6 w-12 flex items-center justify-center text-gray-700 hover:text-current transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                variants={item}
                            >
                                {partner.icon}
                                <span className="sr-only">{partner.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 animate-fadeIn order-first lg:order-last mt-24 md:mt-0">
                <div className="relative overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Hero illustration"
                        className="w-full md:h-screen object-contain transition-all duration-500 hover:scale-105"
                    />
                </div>
            </div>
            </div>
        </div>

        <Video/>
    </section>
  );
};

export default Hero;
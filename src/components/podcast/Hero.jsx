import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from "../../assets/podcast/banniere1.jpg"
import HeroImage2 from "../../assets/podcast/banniere2.jpg"
import LivePodcastPlayer from './LivePodcastPlayer';
import PodcastPlayer from './PodcastPlayer';

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
    <section className="relative h-screen flex items-center justify-center">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Belle maison à louer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-95 bg-gradient-to-l from-transparent to-black"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-8xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">

        {/* Titre et description */}
        <div className="flex flex-col gap-6 mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300 border-l-4 border-yellow-400 pl-6"
          >
            The Best Place for Any Creative
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 text-md text-white/80"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi saepe dolorum labore eos, perferendis, illum possimus ea veritatis facilis rerum in soluta mollitia vel? Corporis soluta culpa doloremque a?
          </motion.p>

          <LivePodcastPlayer title="Live de BBC World Service" />
                          
            {/* Badge avis clients */}
            <motion.div 
                className="px-4 relative"
                whileHover={{ y: -5 }}
                >
                <div className="flex flex-row gap-2 md:gap-0 md:items-center mb-2">
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
                    <span className="text-xs text-gray-300">4.9/5 (248 avis)</span>
                    </div>
                </div>
            </motion.div>

            <PodcastPlayer 
                title="Live de BBC World Service" 
                image={HeroImage2} 
                duration="45:22"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
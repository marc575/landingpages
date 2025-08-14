import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import HeroImage from "../../assets/flame/banniere1.jpg"
import HeroImage2 from "../../assets/flame/banniere3.jpg"

const Hero = () => {
  // Données pour les avatars clients
  const clients = [
    { id: 1, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 3, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { id: 5, avatar: 'https://randomuser.me/api/portraits/women/90.jpg' },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Destination de rêve"
          className="w-full h-full object-cover"
        />
        {/* Dégradé orange du bas vers le haut */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent"></div>
        {/* Overlay sombre pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 lg:py-24 flex flex-col justify-between max-h-screen">
        {/* Première sous-section */}
        <div className="flex flex-col lg:flex-row items-start gap-6 mb-8 lg:mb-18">
          {/* Partie gauche - Titre, avatars et texte */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-2 text-white"
          >
            
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              MODEL <span className="text-orange-300">'2025</span>
            </h1>
            
            <div className="flex items-center pt-4">
              <div className="flex -space-x-2">
                {clients.map((client, index) => (
                  <img
                    key={client.id}
                    src={client.avatar}
                    alt={`Client ${client.id}`}
                    className={`w-10 h-10 rounded-full border-2 border-white/80 transition-all duration-300 hover:translate-y-[-4px]`}
                    style={{ zIndex: clients.length - index }}
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm opacity-80">4.9/5 sur 1,248 avis</p>
              </div>
            </div>
            
            <p className="text-md opacity-90 max-w-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </motion.div>

          {/* Partie droite - Grand titre */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl md:text-end font-bold text-white stroke-text">
              FROM FIRE AND HEAT TO HOME <span className='italic'>GROUNDS</span>
            </h1>
          </motion.div>
        </div>

        {/* Deuxième sous-section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Partie gauche - Texte et boutons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 space-y-10 lg:space-y-6 text-white"
          >
            <p className="text-lg md:text-xl max-w-lg opacity-90 text-white/90">
              Prêt à vivre l'aventure de votre vie ? Notre équipe d'experts est là pour créer un voyage sur mesure qui correspond à vos rêves.
            </p>
            
            <div className="flex flex-wrap gap-6 lg:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg shadow-md flex items-center gap-2"
              >
                Commencer maintenant <FiArrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent text-white border border-white/50 font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Voir les destinations
              </motion.button>
            </div>
          </motion.div>

          {/* Partie droite - Texte sur image (décalée à droite) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-1/2 hidden md:flex md:justify-end"
          >
            <div className="relative">
              <p className="text-md mb-1 opacity-90 text-white/90 md:text-end">
                Lorem ipsum, dolor sit amet consectetur.
              </p>
              <div className="overflow-hidden ml-auto">
                <img
                  src={HeroImage2}
                  alt="Voyageur"
                  className="h-48 w-46 object-cover lg:ml-86 rounded-xl transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
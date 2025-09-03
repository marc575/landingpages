import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiArrowRight, FiX } from 'react-icons/fi';
import { FaPlay, FaTimes, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import HeroImage1 from "../../assets/therapy/banniere1.jpg";
import HeroImage2 from "../../assets/therapy/banniere2.jpg";
import HeroImage3 from "../../assets/therapy/banniere3.jpg";
import HeroImage4 from "../../assets/therapy/banniere4.jpg";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  // Données clients
  const clients = [
    { id: 1, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Sophie' },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Pierre' },
    { id: 3, avatar: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Emma' },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/men/12.jpg', name: 'Luc' },
    { id: 5, avatar: 'https://randomuser.me/api/portraits/women/43.jpg', name: 'Lea' },
  ];

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
    if (!isVideoOpen && videoRef.current) {
      videoRef.current.play();
    }
  };
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.error("Erreur de lecture:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id='top' className="relative overflow-hidden bg-gradient-to-tl from-green-50 to-white pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Première sous-section : Titre + Description + Boutons */}
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 mb-8">
          {/* Partie gauche - Titre */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 ">
              Quand la Vie de Famille prend le dessus
            </h1>
          </motion.div>

          {/* Partie droite - Description + Boutons */}
          <motion.div 
            className="lg:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-md text-gray-600">
              Nos thérapeutes expérimentés vous accompagnent pour renouer le dialogue, surmonter les crises et construire une relation plus forte.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md flex items-center gap-2 transition-all"
              >
                Rendez-vous <FiArrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleVideo}
                className="px-4 py-2 bg-white text-green-600 border border-green-200 hover:border-green-300 font-medium rounded-lg shadow-sm flex items-center gap-2 transition-all"
              >
                <FiPlay className="text-green-600" /> Voir la vidéo
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Deuxième sous-section : Vidéo + Images + Avis */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Partie gauche - Vidéo */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div 
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group h-[330px]"
              onClick={toggleVideo}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 h-[330px]">
                <video
                  src={videoUrl}
                  className="inset-0 w-full h-full object-cover"
                  poster={HeroImage4}
                  muted
                  loop
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all group-hover:bg-black/40">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all">
                    <FiPlay className="text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partie droite - Images + Avis */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4">
              {/* Deux images superposées */}
              <div className="relative w-1/2 h-[320px]">
                <motion.img
                  src={HeroImage1}
                  alt="Couple heureux"
                  className="w-full h-[220px] rounded-lg shadow-md mb-4 object-cover aspect-square"
                  whileHover={{ scale: 1.03 }}
                />
                <motion.img
                  src={HeroImage2}
                  alt="Thérapeute en séance"
                  className="absolute -bottom-4 -right-3 w-3/4 h-[150px] rounded-lg shadow-md border-4 border-white object-cover aspect-square"
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              {/* Une image + badge avis */}
              <div className="w-1/2 flex flex-col h-[350px] md:h-[300px]">
                <motion.img
                  src={HeroImage3}
                  alt="Séance de thérapie"
                  className="w-full h-[270px] rounded-lg shadow-md object-cover aspect-square"
                  whileHover={{ scale: 1.03 }}
                />
                
                {/* Badge avis clients */}
                <motion.div 
                  className="mt-6 px-4  relative"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center mb-2">
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
                      <span className="text-xs text-gray-600">4.9/5 (248 avis)</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal vidéo plein écran */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-10 right-0 text-white text-2xl z-50 hover:text-orange-500 transition-colors"
                onClick={() => setIsVideoOpen(false)}
              >
                <FiX className="text-3xl" />
              </button>
              
              <div className="relative pt-[56.25%] w-full">
                <video
                  src={videoUrl}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                  autoPlay={true}
                  playsInline
                  ref={videoRef}
                  controls={false}
                  muted={isMuted}
                  loop
                />
              </div>
              
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-6">
                    <button 
                        className="bg-white bg-opacity-20 text-dark p-3 rounded-full hover:bg-opacity-30 transition-all"
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button 
                        className="bg-white bg-opacity-20 text-dark p-3 rounded-full hover:bg-opacity-30 transition-all"
                        onClick={toggleMute}
                    >
                        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
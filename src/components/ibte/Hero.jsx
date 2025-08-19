import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiBookOpen, FiAward, FiUserCheck, FiX } from 'react-icons/fi';
import { FaPlay, FaTimes, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const floatingIcons = [
    { icon: <FiBookOpen className="text-purple-600" />, position: 'top-1/4 left-1/8' },
    { icon: <FiAward className="text-purple-600" />, position: 'bottom-1/8 md:bottom-1/4 right-1/8' },
    { icon: <FiUserCheck className="text-purple-600" />, position: 'top-1/16 md:top-1/8 right-1/2' },
    { icon: <FiBookOpen className="text-purple-600" />, position: 'bottom-1 md:bottom-1/4 right-1/2 md:right-1/4' },
    { icon: <FiAward className="text-purple-600" />, position: 'top-1/4 left-3/4' },
    { icon: <FiUserCheck className="text-purple-600" />, position: 'bottom-1/8 md:bottom-1/4 left-1/8' },
  ];

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
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
    <section className="relative h-auto md:h-screen my-auto overflow-hidden bg-gradient-to-br from-white to-purple-100 py-28 px-4 sm:px-6 lg:px-8">
      {/* Icônes flottantes */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} text-4xl opacity-20`}
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-8xl mx-auto flex flex-col gap-4 md:gap-0 items-center text-center">
        {/* Titre et description */}
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-4">
          <span className="font-medium font-serif">Empowering Ambitions</span> <br /> Trough Innovative Education
        </motion.h1>
        
        <motion.p className="text-md sm:text-lg text-gray-600 max-w-3xl mb-6">
          Découvrez une nouvelle façon d'apprendre avec nos cours interactifs.
        </motion.p>

        {/* Boutons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md transition-all">
            Commencer
          </button>
          <button className="px-4 py-2 bg-white text-purple-600 border border-purple-200 font-medium rounded-lg shadow-sm transition-all">
            Programmes
          </button>
        </div>

        {/* Cadre tablette avec vidéo fonctionnelle */}
        <div className="relative w-full max-w-5xl">
          <div className="relative mx-auto w-4/5">
            {/* Cadre de tablette */}
            <div 
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-8 border-gray-800 cursor-pointer"
              onClick={toggleVideo}
            >
              {/* Placeholder vidéo */}
              <div className="md:aspect-w-16 md:aspect-h-9 max-w-4xl bg-gray-800">
                <video
                  src={videoUrl}
                  className="inset-0 w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 flex pt-[25%] md:pt-[15%] justify-center bg-black/20">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center">
                    <FiPlay className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ombre portée */}
            <div className="absolute -bottom-8 -left-8 w-full h-full bg-gray-100 rounded-2xl -z-10 rotate-3"></div>
          </div>
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
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiActivity, FiCalendar } from 'react-icons/fi';

const Video = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  
  // Changement de l'URL de la vidéo pour une source plus fiable
  const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const clients = [
    { id: 1, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 3, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { id: 5, avatar: 'https://randomuser.me/api/portraits/women/90.jpg' },
  ];

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
    if (!isVideoOpen) {
      setTimeout(() => {
        if (modalVideoRef.current) {
          modalVideoRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(e => console.error("Erreur de lecture:", e));
        }
      }, 300);
    } else {
      if (modalVideoRef.current) {
        modalVideoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const togglePlayPause = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.error("Erreur de lecture:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };


  return (
    <section className="absolute bottom-0 w-full bg-transparent py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between p-0">
            <div className='flex items-end gap-3 md:gap-6'>
              {/* Partie vidéo corrigée */}
              <motion.div 
                className="relative cursor-pointer group rounded-lg"
                whileHover={{ scale: 1.02 }}
                onClick={toggleVideo}
              >
                <div className="relative w-[160px] h-[90px] md:w-[200px] md:h-[100px] overflow-hidden rounded-lg bg-gray-800">
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 group-hover:bg-opacity-50 transition-all">
                    <FaPlay className="text-white text-3xl" />
                  </div>
                </div>
            </motion.div>

            {/* Partie centrale - Réseaux sociaux et avis */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4">
              <div className="hidden md:flex space-x-2 mb-2">
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-500 transition-colors border border-gray-300 p-2 rounded-full"
                  whileHover={{ y: -2 }}
                >
                  <FiFacebook size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors border border-gray-300 p-2 rounded-full"
                  whileHover={{ y: -2 }}
                >
                  <FiTwitter size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-pink-500 transition-colors border border-gray-300 p-2 rounded-full"
                  whileHover={{ y: -2 }}
                >
                  <FiInstagram size={20} />
                </motion.a>
              </div>

              <div className="flex flex-col md:flex-row md:items-center mb-2">
                <div className="flex -space-x-2">
                  {clients.map((client, index) => (
                    <motion.img
                      key={client.id}
                      src={client.avatar}
                      alt={`Client ${client.id}`}
                      className="w-8 h-8 rounded-full border-2 border-gray-100"
                      style={{ zIndex: clients.length - index }}
                      whileHover={{ zIndex: 50, scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  ))}
                </div>
                <div className="ml-3 order-first md:order-last">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-medium">4.9/5 (1,248 avis)</span>
                </div>
              </div>
            </div>
            </div>

            {/* Partie droite - Logo banque et carte */}
            <div className="hidden md:flex md:flex-row gap-4 items-center mb-2">
                <div className="bg-gray-900 text-white border border-gray-300 p-2 rounded-full">
                    <FiActivity size={20}  />
                </div>
                <div className="bg-gray-900 text-white border border-gray-300 p-2 rounded-full">
                    <FiCalendar size={20} />
                </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal vidéo */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && toggleVideo()}
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
                onClick={toggleVideo}
              >
                <FaTimes />
              </button>
              
              <div className="relative pt-[56.25%] w-full">
                <video
                  ref={modalVideoRef}
                  src={videoUrl}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                  controls={false}
                  autoPlay={false}
                  muted={isMuted}
                  loop
                  playsInline
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

export default Video;
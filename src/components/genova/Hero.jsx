import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import HeroImage from "../../assets/genova/banniere1.jpg";
import HeroImage2 from "../../assets/genova/banniere2.jpg";
import HeroImage3 from "../../assets/genova/banniere3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // 15 secondes par slide

  const slides = [
    {
      id: 1,
      image: "/src/assets/genova/banniere1.jpg",
      title: "BMW Série 3",
      subtitle: "Élégance et performance",
      description: "Découvrez la nouvelle série 3 avec ses lignes épurées et sa technologie de pointe."
    },
    {
      id: 2,
      image: "/src/assets/genova/banniere2.jpg",
      title: "Audi A4",
      subtitle: "Innovation allemande",
      description: "Conduisez l'excellence avec l'Audi A4 et son système quattro légendaire."
    },
    {
      id: 3,
      image: "/src/assets/genova/banniere3.jpg",
      title: "Mercedes Classe C",
      subtitle: "Luxe et confort",
      description: "Expérience de conduite premium avec la Classe C et son intérieur raffiné."
    }
  ];
  
  // Données clients
  const clients = [
    { id: 1, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Sophie' },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Pierre' },
    { id: 3, avatar: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Emma' },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/men/12.jpg', name: 'Luc' },
    { id: 5, avatar: 'https://randomuser.me/api/portraits/women/43.jpg', name: 'Lea' },
  ];

  // Décompte automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeLeft(15);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeLeft(15);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Carrousel d'images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Zone de texte fixe (haut gauche) */}
      <div className="relative z-10 pt-32 px-6 md:pt-32 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white max-w-xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Future of The Creation <span className='font-serif font-medium'>is Autonomus</span>
          </h1>
                                    
            {/* Badge avis clients */}
            <motion.div 
                className="relative"
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
        </motion.div>
      </div>

      {/* Zone de texte variable (bas droite) */}
      <div className="z-10 absolute bottom-1/8 right-8 md:bottom-24 md:right-16 text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-xs ml-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl font-serif text-gray-200 mb-3">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-sm md:text-base opacity-80">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contrôles de navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
        {/* Boutons précédent/suivant */}
        <button
          onClick={prevSlide}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>

        {/* Décompteur animé */}
        <motion.div
          className="relative w-12 h-12 flex items-center justify-center"
          key={timeLeft}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={100 - (timeLeft / 15) * 100}
              className="transition-all duration-1000"
            />
          </svg>
          <span className="absolute text-white font-bold text-sm">
            {timeLeft}
          </span>
        </motion.div>

        <button
          onClick={nextSlide}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicateurs de slides */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setTimeLeft(15);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
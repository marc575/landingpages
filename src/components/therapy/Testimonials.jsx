import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sophie et Marc",
      duration: "6 mois de thérapie",
      text: "Nous étions au bord de la séparation après 12 ans de mariage. Grâce à cette approche innovante, nous avons redécouvert notre connexion et appris à communiquer sans conflit.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      transformation: "Sauvetage relationnel"
    },
    {
      id: 2,
      name: "Thomas",
      duration: "3 mois de thérapie",
      text: "Je ne croyais plus aux thérapies de couple après deux échecs. Cette méthode a complètement changé ma perspective et m'a donné des outils concrets pour gérer nos désaccords.",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 4,
      transformation: "Transformation personnelle"
    },
    {
      id: 3,
      name: "Émilie et Lucas",
      duration: "4 mois de thérapie",
      text: "Les disputes constantes sur la gestion des enfants nous épuisaient. Aujourd'hui, nous avons un système qui fonctionne pour nous et une harmonie retrouvée.",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
      rating: 5,
      transformation: "Harmonie familiale"
    },
    {
      id: 4,
      name: "Caroline",
      duration: "5 mois de thérapie",
      text: "J'avais l'impression de parler une langue différente de mon conjoint. Maintenant, nous nous comprenons et nos désaccords deviennent des opportunités de croissance.",
      image: "https://randomuser.me/api/portraits/women/64.jpg",
      rating: 5,
      transformation: "Compréhension mutuelle"
    },
    {
      id: 5,
      name: "Philippe et Denise",
      duration: "8 mois de thérapie",
      text: "Après 25 ans de mariage, nous avions accumulé tant de rancœurs. Cette thérapie nous a aidés à nettoyer le passé et à reconstruire une nouvelle relation.",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      rating: 4,
      transformation: "Renaissance conjugale"
    },
    {
      id: 6,
      name: "Nathalie et Serge",
      duration: "3 mois de thérapie",
      text: "La thérapie nous a sauvés alors que nous envisagions le divorce. Aujourd'hui, notre relation est plus forte que jamais.",
      image: "https://randomuser.me/api/portraits/women/84.jpg",
      rating: 5,
      transformation: "Reconnexion profonde"
    }
  ];

  // Rotation automatique des témoignages
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const navigateTo = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setIsPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  // Calcul des positions sur le cercle
  const getTestimonialPosition = (index) => {
    const total = testimonials.length;
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const radius = 200; // Rayon du cercle

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      scale: index === activeIndex ? 1.2 : 0.9,
      zIndex: index === activeIndex ? 40 : 10 - Math.abs(index - activeIndex),
      opacity: index === activeIndex ? 1 : 0.7
    };
  };

  return (
    <div id='reviews' className="bg-gradient-to-br from-white to-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif leading-tight">Ils ont transformé leur relation</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Découvrez les témoignages de ceux qui ont retrouvé l'harmonie conjugale grâce à notre approche innovante
          </p>
        </motion.div>

        {/* Cercle de témoignages - Version Desktop */}
        <div className="hidden lg:block">
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Lignes de connexion */}
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400">
              {testimonials.map((_, index) => {
                const pos = getTestimonialPosition(index);
                const center = { x: 200, y: 200 };
                return (
                  <line
                    key={index}
                    x1={center.x}
                    y1={center.y}
                    x2={center.x + pos.x}
                    y2={center.y + pos.y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                )
              })}
            </svg>

            {/* Témoignages positionnés en cercle */}
            {testimonials.map((testimonial, index) => {
              const position = getTestimonialPosition(index);
              
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: position.opacity,
                    x: position.x,
                    y: position.y,
                    scale: position.scale
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className={`absolute cursor-pointer ${
                    index === activeIndex ? 'z-40' : 'z-10'
                  }`}
                  style={{ originX: 0.5, originY: 0.5 }}
                  onClick={() => navigateTo(index)}
                >
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center text-3xl
                    shadow-lg border-4 transition-all duration-300
                    ${index === activeIndex 
                      ? 'bg-green-100 border-green-400 scale-110' 
                      : 'bg-white border-gray-300 hover:border-green-300'
                    }
                  `}>
                    <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-white"
                        />
                  </div>
                </motion.div>
              );
            })}

            {/* Témoignage central détaillé */}
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 z-50"
            >
              <div className="text-center mb-4 flex flex-col items-center">
                <div className="text-5xl mb-2">
                    <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-16 h-16 rounded-full border-2 border-white"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h3>
                <p className="text-sm text-green-600 font-medium">{testimonials[activeIndex].transformation}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonials[activeIndex].duration}</p>
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-center italic mb-4">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navigateTo(index)}
                    className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-green-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:border-green-400 hover:text-green-600 transition-all duration-300 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:border-green-400 hover:text-green-600 transition-all duration-300 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Version Mobile */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-6 mb-6 border border-gray-100"
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">
                    <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-16 h-16 rounded-full border-2 border-white"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h3>
                <p className="text-sm text-green-600 font-medium">{testimonials[activeIndex].transformation}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonials[activeIndex].duration}</p>
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-center italic mb-4">
                "{testimonials[activeIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Mobile */}
          <div className="flex justify-between items-center">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:border-green-400 hover:text-green-600 transition-all duration-300 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigateTo(index)}
                  className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-green-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:border-green-400 hover:text-green-600 transition-all duration-300 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
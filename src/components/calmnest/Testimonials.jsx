import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Déterminer le nombre d'éléments à afficher selon la largeur de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Variantes d'animation pour Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  // Données des témoignages
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Yoga Practitioner",
      content: "Serenity Yoga has transformed my life. The instructors are knowledgeable and create a welcoming environment. My flexibility and mental clarity have improved tremendously since joining.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Developer",
      content: "As someone who sits at a desk all day, the classes here have helped alleviate my back pain. The teachers are attentive and offer modifications for all skill levels.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Teacher",
      content: "The prenatal yoga classes were a godsend during my pregnancy. The supportive community and expert guidance made me feel strong and prepared for childbirth.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Entrepreneur",
      content: "I've tried many studios, but none compare to the atmosphere here. The combination of challenging flows and mindful meditation is perfect for managing stress.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Retired Nurse",
      content: "At 65, I was hesitant to try yoga, but the gentle classes have improved my balance and flexibility. I feel years younger and more connected to my body.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Athlete",
      content: "The Ashtanga classes have taken my athletic performance to the next level. Improved focus, flexibility, and recovery - everything an athlete needs.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 7,
      name: "Olivia Martin",
      role: "Graphic Designer",
      content: "The restorative yoga sessions have been essential for my creative process. I leave each class feeling inspired and centered, ready to tackle new projects.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    },
    {
      id: 8,
      name: "Robert Zhang",
      role: "College Student",
      content: "Perfect escape from academic stress. The evening classes help me reset and sleep better. The student discount makes it affordable too!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    }
  ];

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  // Obtenir les témoignages à afficher
  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  // Aller à la page suivante
  const nextPage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  // Aller à la page précédente
  const prevPage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  // Aller à une page spécifique
  const goToPage = (index) => {
    setCurrentIndex(index);
  };

  // Générer les étoiles de notation
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            className="text-gray-500 max-w-2xl mx-auto text-md"
            variants={itemVariants}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam odio culpa corporis ullam aspernatur reprehenderit rerum quaerat, illum perspiciatis in error consectetur mollitia, tempore, quas eum quisquam voluptatem blanditiis corrupti?
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Boutons de navigation */}
          <button 
            onClick={prevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button 
            onClick={nextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Carousel des témoignages */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pb-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {visibleTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    className="bg-gray-50 rounded-xl p-6 shadow-md h-full flex flex-col"
                    variants={testimonialVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.content}"</p>
                    <div className="flex items-center mt-auto">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`mx-1 w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <button 
            onClick={prevPage}
            className="bg-white text-gray-700 rounded-lg p-3 shadow-sm mr-4 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextPage}
            className="bg-white text-gray-700 rounded-lg p-3 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
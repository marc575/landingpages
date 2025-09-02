import React, { useState, useRef, useEffect } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Propriétaire Audi e-tron",
      rating: 5,
      content: "L'expérience d'achat la plus transparente que j'ai vécue. Pas de pression, que des conseils avisés. Mon e-tron est parfaitement adaptée à mes besoins.",
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      purchase: "Audi e-tron GT",
      date: "Janvier 2024",
      rotation: -2
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Entrepreneur",
      rating: 5,
      content: "Service après-vente exceptionnel. Ils ont pris le temps de m'expliquer chaque détail. La reprise de mon ancien véhicule a été équitable et sans surprise.",
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      purchase: "BMW i7",
      date: "Décembre 2023",
      rotation: 1
    },
    {
      id: 3,
      name: "Camille Leroy",
      role: "Architecte",
      rating: 5,
      content: "Le processus de financement était clair et sans hidden fees. J'ai pu personnaliser ma Tesla exactement comme je le souhaitais. Livraison avant la date promise !",
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      purchase: "Tesla Model Y",
      date: "Novembre 2023",
      rotation: -1
    },
    {
      id: 4,
      name: "Marc Bernard",
      role: "Médecin",
      rating: 5,
      content: "Essai prolongé de 24h qui m'a vraiment permis de me projeter. L'expert-conseil connaissait parfaitement la technologie et mes besoins spécifiques.",
      image: 'https://randomuser.me/api/portraits/men/62.jpg',
      purchase: "Mercedes EQS",
      date: "Octobre 2023",
      rotation: 2
    },
    {
      id: 5,
      name: "Élodie Petit",
      role: "Photographe",
      rating: 5,
      content: "Showroom immersive avec réalité augmentée pour visualiser les options. Process ultra fluide du premier contact à la livraison.",
      image: 'https://randomuser.me/api/portraits/women/62.jpg',
      purchase: "Porsche Taycan",
      date: "Septembre 2023",
      rotation: -1
    }
  ];

  const stats = [
    { value: "98%", label: "Clients satisfaits" },
    { value: "4.9/5", label: "Note moyenne" },
    { value: "24h", label: "Réponse moyenne" },
    { value: "500+", label: "Avis vérifiés" }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section ref={containerRef} id='reviews' className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Éléments d'arrière-plan dynamiques */}
      <div className="absolute top-1/4 -left-24 w-48 h-48 bg-gray-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 -right-20 w-36 h-36 bg-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-black rounded-lg transform rotate-12 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold mb-6 text-black">
            Expériences <span className="text-gray-700 font-serif italic">Authentiques</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La voix de nos clients, sans filtre. Découvrez pourquoi ils ont choisi 
            une approche différente de l'automobile.
          </p>
        </div>

        {/* Statistiques */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white border border-gray-100 rounded-2xl transform hover:scale-105 transition-all duration-300"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
            >
              <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Gallery d'avis - Disposition spatiale innovante */}
        <div className="relative h-[400px]">
          {testimonials.map((testimonial, index) => {
            const position = index - activeTestimonial;
            const isActive = position === 0;
            const isNext = position === 1;
            const isPrev = position === -1;
            const isFarNext = position > 1;
            const isFarPrev = position < -1;

            if (isFarNext || isFarPrev) return null;

            return (
              <div
                key={testimonial.id}
                className={`absolute transition-all duration-700 ease-out ${
                  isActive
                    ? 'left-1/2 transform -translate-x-1/2 w-full md:w-2/3 z-30 opacity-100'
                    : isNext
                    ? 'left-3/4 transform -translate-x-1/2 w-1/2 md:w-1/3 z-20 opacity-70'
                    : isPrev
                    ? 'left-1/4 transform -translate-x-1/2 w-1/2 md:w-1/3 z-20 opacity-70'
                    : ''
                }`}
                style={{
                  transform: `rotate(${testimonial.rotation}deg) ${
                    isActive ? 'scale(1)' : 'scale(0.8)'
                  }`,
                  top: isActive ? '0%' : '20%'
                }}
              >
                <div
                  className={`bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100 transition-all duration-500 ${
                    isActive
                      ? 'cursor-grab active:cursor-grabbing hover:shadow-2xl'
                      : 'cursor-pointer hover:shadow-lg'
                  }`}
                  onClick={() => !isActive && setActiveTestimonial(index)}
                >
                  {/* En-tête avis */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-white"
                            />
                        </div>
                      <div>
                        <h4 className="font-bold text-black">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 text-lg">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-500 text-sm">{testimonial.date}</p>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {isActive || isExpanded
                        ? testimonial.content
                        : testimonial.content.substring(0, 100) + '...'}
                    </p>
                  </div>

                  {/* Véhicule acheté */}
                  <div className="bg-gray-50 p-4 rounded-xl mb-6">
                    <p className="text-sm text-gray-600">Véhicule acquis</p>
                    <p className="font-semibold text-black">{testimonial.purchase}</p>
                  </div>

                  {/* Actions */}
                  {isActive && (
                    <div className="flex space-x-4">
                      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                        Lire l'histoire complète
                      </button>
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        {isExpanded ? 'Réduire' : 'Développer'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className={`flex justify-center space-x-4 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => setActiveTestimonial(prev => Math.max(0, prev - 1))}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            ←
          </button>
          <div className="flex space-x-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-black scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveTestimonial(prev => Math.min(testimonials.length - 1, prev + 1))}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
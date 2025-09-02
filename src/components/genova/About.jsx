import React, { useState, useRef, useEffect } from 'react';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const historyTimeline = [
    {
      year: "2010",
      title: "Nos débuts",
      description: "Création du premier showroom avec une vision différente de l'automobile.",
      rotation: -1
    },
    {
      year: "2014",
      title: "Innovation technique",
      description: "Introduction des premiers véhicules électriques et hybrides dans notre gamme.",
      rotation: 2
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Ouverture de deux nouveaux centres spécialisés dans les véhicules premium.",
      rotation: -2
    },
    {
      year: "2023",
      title: "Révolution digitale",
      description: "Transformation complète de l'expérience client avec la réalité augmentée.",
      rotation: 1
    }
  ];

  const values = [
    {
      title: "Transparency Radicale",
      description: "Prix fixes, pas de négociation cachée. Tout est clair dès le premier regard.",
      icon: "👁️",
      rotation: -2
    },
    {
      title: "Expertise Authentique",
      description: "Notre équipe vit l'automobile comme une passion, pas comme un produit.",
      icon: "🎯",
      rotation: 1
    },
    {
      title: "Innovation Continue",
      description: "Nous repensons constamment l'expérience d'achat et d'entretien.",
      icon: "⚡",
      rotation: -1
    }
  ];

  return (
    <section id='about' ref={containerRef} className="relative py-24 bg-white overflow-hidden">
      {/* Éléments d'arrière-plan dynamiques */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 rounded-full transform translate-x-1/3 translate-y-1/3 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête asymétrique */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-6xl font-bold mb-6 text-black">
                Notre <span className="text-gray-700 font-serif italic">Histoire</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Depuis plus d'une décennie, nous transformons l'expérience automobile 
                avec une approche radicalement transparente et centrée sur l'humain.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-end">
              <div className="bg-black text-white p-6 rounded-2xl transform rotate-2">
                <p className="text-4xl font-bold">13+</p>
                <p className="text-gray-300">ans d'innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline interactive */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold mb-12 text-center text-black">Notre Évolution</h3>
          
          <div className="relative">
            {/* Ligne de timeline courbe */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-1 h-4/5 bg-gray-300">
              <div 
                className="h-full bg-black origin-top transition-all duration-1000 ease-out"
                style={{ height: isVisible ? '100%' : '0%' }}
              ></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              {historyTimeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-24'}`}
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                >
                  <div
                    className={`p-6 bg-gray-100 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeTimeline === index
                        ? 'bg-gray-950 text-white transform scale-105 shadow-2xl'
                        : 'hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTimeline(index)}
                  >
                    <div className="text-2xl font-bold text-gray-500 mb-2">{item.year}</div>
                    <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                    <p className={activeTimeline === index ? 'text-gray-500' : 'text-gray-600'}>
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Point sur la timeline */}
                  <div className={`absolute top-6 ${
                    index % 2 === 0 ? '-right-6' : '-left-6'
                  } w-4 h-4 rounded-full border-4 border-white ${
                    activeTimeline === index ? 'bg-black scale-125' : 'bg-gray-400'
                  } transition-all duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valeurs avec disposition hexagonale */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold mb-16 text-center text-black">Nos Valeurs Fondatrices</h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 300} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transform: `rotate(${value.rotation}deg)` }}
              >
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-4 text-black">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message du fondateur avec effet de superposition */}
        <div className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
          
          <div className="relative z-20 p-12 text-white">
            <div className="max-w-2xl">
              <blockquote className="text-lg italic mb-6">
                "Nous croyons que l'achat d'une voiture devrait être une expérience transparente et excitante, 
                pas un processus stressant. C'est pourquoi nous avons tout repensé depuis les fondamentaux."
              </blockquote>
              
              <div className="flex items-center">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Alexandre Martin"
                    className="w-12 h-12 rounded-full border-2 border-white mr-4"
                />
                <div>
                  <p className="font-semibold">Alexandre Martin</p>
                  <p className="text-gray-300">Fondateur & CEO</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
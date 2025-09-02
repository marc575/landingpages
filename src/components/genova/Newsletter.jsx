import React, { useState, useRef, useEffect } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeOffer, setActiveOffer] = useState(0);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'abonnement
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  const offers = [
    {
      id: 1,
      title: "Accès Early-Bird",
      description: "Soyez le premier informé des nouveaux modèles 48h avant tout le monde",
      icon: "🚀",
      rotation: -2
    },
    {
      id: 2,
      title: "Essais Privés",
      description: "Invitations exclusives aux événements de conduite privés",
      icon: "🎯",
      rotation: 1
    },
    {
      id: 3,
      title: "Contenu Expert",
      description: "Guides d'achat et comparatifs techniques exclusifs",
      icon: "📊",
      rotation: -1
    }
  ];

  const stats = [
    { number: "15K+", label: "Abonnés exclusifs" },
    { number: "2h", label: "Temps moyen d'accès anticipé" },
    { number: "92%", label: "Taux de satisfaction" }
  ];

  return (
    <section ref={containerRef} className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Éléments d'arrière-plan dynamiques */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 rounded-full transform translate-x-1/3 translate-y-1/3 opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-black rounded-lg transform rotate-12 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Partie gauche - Contenu principal */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-5xl font-bold mb-6 text-black">
              Restez <span className="text-gray-700 font-serif italic">Connecté</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Rejoignez notre cercle privilégié et accédez à des contenus exclusifs, 
              des offres anticipées et des expériences uniques réservées à nos abonnés.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white border border-gray-100 rounded-xl transform hover:scale-105 transition-all duration-300"
                  style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <div className="text-2xl font-bold text-black mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Formulaire innovant */}
            <div className="relative">
              {isSubscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Bienvenue à bord !</h3>
                  <p className="text-green-600">Votre première newsletter exclusive arrive dans quelques minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre.email@exemple.com"
                      className="w-full bg-gray-50 text-gray-800 px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-black focus:outline-none transition-all duration-300 pr-24"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-2 bg-black text-white px-6 py-2 rounded-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Accéder
                    </button>
                  </div>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      J'accepte de recevoir des communications personnalisées
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>

          {/* Partie droite - Offres interactives */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative h-96">
              {offers.map((offer, index) => {
                const position = index - activeOffer;
                const isActive = position === 0;
                const isNext = position === 1;
                const isPrev = position === -1;

                return (
                  <div
                    key={offer.id}
                    className={`absolute transition-all duration-700 ease-out ${
                      isActive
                        ? 'left-0 top-0 w-full z-30 opacity-100'
                        : isNext
                        ? 'left-1/2 top-12 w-2/3 z-20 opacity-70'
                        : isPrev
                        ? 'left-1/2 top-12 w-2/3 z-20 opacity-70'
                        : ''
                    }`}
                    style={{
                      transform: `rotate(${offer.rotation}deg) ${
                        isActive ? 'scale(1)' : 'scale(0.8)'
                      }`,
                      left: isActive ? '0%' : isNext ? '20%' : '-20%',
                      top: isActive ? '0%' : '10%'
                    }}
                  >
                    <div
                      className={`bg-gray-900 text-white p-8 rounded-3xl shadow-2xl cursor-pointer transition-all duration-500 ${
                        isActive
                          ? 'transform hover:-translate-y-2'
                          : 'hover:opacity-100'
                      }`}
                      onClick={() => setActiveOffer(index)}
                    >
                      <div className="text-4xl mb-4">{offer.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
                      <p className="text-gray-300">{offer.description}</p>
                      
                      {isActive && (
                        <div className="mt-6 pt-4 border-t border-gray-700">
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>⭐</span>
                            <span>Inclus dans votre abonnement</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation des offres */}
            <div className="flex justify-center space-x-4 mt-8">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveOffer(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeOffer === index
                      ? 'bg-black scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bénéfices additionnels */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-4xl font-bold text-black mb-8">Ce qui vous attend</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🎁",
                title: "Offres Flash",
                description: "Promotions exclusives réservées aux abonnés"
              },
              {
                icon: "📱",
                title: "Accès Mobile",
                description: "Application dédiée avec notifications personnalisées"
              },
              {
                icon: "🤝",
                title: "Community",
                description: "Événements et rencontres entre passionnés"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-100 rounded-2xl transform hover:scale-105 transition-all duration-300"
                style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h4 className="font-semibold text-black mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Garantie de confidentialité */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-500 text-sm">
            🔒 Données 100% sécurisées · Désabonnement instantané · Zero spam
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
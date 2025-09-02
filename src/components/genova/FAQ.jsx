import React, { useState, useRef, useEffect } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('achat');
  const [openItems, setOpenItems] = useState([]);
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

  const categories = [
    {
      id: 'achat',
      title: 'Processus Achat',
      icon: '🚗',
      rotation: -2,
      color: 'bg-gray-900'
    },
    {
      id: 'finance',
      title: 'Financement',
      icon: '💰',
      rotation: 1,
      color: 'bg-gray-900'
    },
    {
      id: 'entretien',
      title: 'Entretien',
      icon: '🔧',
      rotation: -1,
      color: 'bg-gray-900'
    },
    {
      id: 'livraison',
      title: 'Livraison',
      icon: '📦',
      rotation: 2,
      color: 'bg-gray-900'
    }
  ];

  const faqItems = {
    achat: [
      {
        id: 1,
        question: "Comment se déroule l'essai personnalisé ?",
        answer: "Nous proposons des essais de 2 à 24h sur rendez-vous, adaptés à votre usage quotidien. Vous êtes accompagné par un expert qui personnalise le parcours selon vos besoins.",
        rotation: -1
      },
      {
        id: 2,
        question: "Puis-je échanger mon véhicule actuel ?",
        answer: "Oui, notre service de reprise expert valorise votre véhicule en temps réel avec inspection complète et offre ferme valable 7 jours.",
        rotation: 1
      },
      {
        id: 3,
        question: "Quelle est votre politique de garantie ?",
        answer: "Tous nos véhicules bénéficient d'une garantie minimum de 24 mois, extensible jusqu'à 5 ans. Couverture complète sans franchise surprise.",
        rotation: -2
      }
    ],
    finance: [
      {
        id: 4,
        question: "Options de financement disponibles ?",
        answer: "LOA, LLD, crédit classique avec simulation transparente en temps réel. Taux fixes, pas de frais cachés.",
        rotation: 2
      },
      {
        id: 5,
        question: "Délai d'approbation du financement ?",
        answer: "Réponse de principe sous 2h, accord définitif sous 24h pour 95% des dossiers.",
        rotation: -1
      }
    ],
    entretien: [
      {
        id: 6,
        question: "Programme d'entretien sur-mesure ?",
        answer: "Suivi digital personnalisé avec rappels intelligents basés sur votre usage réel, pas seulement le kilométrage.",
        rotation: 1
      },
      {
        id: 7,
        question: "Disponibilité des créances d'entretien ?",
        answer: "Plages horaires étendues 7j/7 et service express pour les interventions courtes (<2h).",
        rotation: -2
      }
    ],
    livraison: [
      {
        id: 8,
        question: "Délai de livraison personnalisée ?",
        answer: "De 48h à 3 semaines selon personnalisation. Suivi en temps réel avec accès vidéo à l'atelier.",
        rotation: 2
      },
      {
        id: 9,
        question: "Cérémonie de livraison incluse ?",
        answer: "Formation complète d'1h à la prise en main, présentation sur tablette numérique et guide personnalisé.",
        rotation: -1
      }
    ]
  };

  const toggleItem = (itemId) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section id='faq' ref={containerRef} className="relative py-24 bg-white overflow-hidden">
      {/* Éléments d'arrière-plan dynamiques */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-gray-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 -right-16 w-48 h-48 bg-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-black rounded-lg transform rotate-12 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold mb-6 text-black">
            Questions <span className="text-gray-700 font-serif italic">Fréquentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nous avons repensé l'expérience FAQ pour vous offrir des réponses claires 
            et une navigation intuitive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Navigation par catégories */}
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative transition-all duration-500 cursor-pointer ${
                activeCategory === category.id
                  ? 'transform scale-105 z-10'
                  : 'opacity-80 hover:opacity-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
              style={{ transform: `rotate(${category.rotation}deg)` }}
            >
              <div
                className={`p-6 rounded-2xl text-white text-center h-48 flex flex-col justify-center items-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'shadow-2xl ' + category.color
                    : 'shadow-lg bg-gray-900'
                }`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <div className={`mt-4 w-8 h-1 bg-white transition-all duration-300 ${
                  activeCategory === category.id ? 'w-16' : 'w-8'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Items - Disposition spatiale innovante */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {faqItems[activeCategory].map((item, index) => {
            const isOpen = openItems.includes(item.id);
            const delay = index * 100;

            return (
              <div
                key={item.id}
                className={`transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${delay}ms`,
                  transform: `rotate(${item.rotation}deg)`
                }}
              >
                <div
                  className={`bg-gray-50 rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-gray-300 bg-white shadow-xl'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex items-start justify-between space-x-4"
                  >
                    <span className="text-lg font-semibold text-black flex-1">
                      {item.question}
                    </span>
                    <span className="text-2xl transform transition-transform duration-300">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
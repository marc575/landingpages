import React, { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      id: 1,
      title: "Entretien Sur Mesure",
      description: "Un programme d'entretien personnalisé selon votre véhicule et votre usage, avec traçabilité complète.",
      icon: "🔧",
      features: ["Suivi personnalisé", "Rappels automatiques", "Historique digital"],
      rotation: -2
    },
    {
      id: 2,
      title: "Essais Immersifs",
      description: "Vivez l'expérience réelle de conduite sur des parcours adaptés à vos besoins quotidiens.",
      icon: "🚗",
      features: ["Parcours personnalisés", "Accompagnement expert", "Essai prolongé"],
      rotation: 1
    },
    {
      id: 3,
      title: "Financement Transparent",
      description: "Simulateur de financement en temps réel avec toutes les options présentées clairement.",
      icon: "💰",
      features: ["Calcul instantané", "Comparaison options", "Sans engagement"],
      rotation: -1
    },
    {
      id: 4,
      title: "Reprise Expert",
      description: "Évaluation précise et juste de votre véhicule avec inspection détaillée et valorisation marché.",
      icon: "📊",
      features: ["Inspection complète", "Valorisation précise", "Offre ferme"],
      rotation: 2
    }
  ];

  return (
    <section id='services' className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Éléments d'arrière-plan décoratifs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gray-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/3 -right-24 w-48 h-48 bg-gray-200 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-black">
            Services <span className="text-gray-700 font-serif italic">Exclusifs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez une approche innovante de l'automobile avec des services sur-mesure 
            conçus autour de votre expérience.
          </p>
        </div>

        {/* Conteneur principal des services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carte du service actif - Positionnée de manière asymétrique */}
          <div 
            className="relative h-96 bg-gray-900 text-white p-8 rounded-2xl overflow-hidden"
            style={{ transform: `rotate(${services[activeService].rotation}deg)` }}
          >
            <div className="absolute -top-16 -right-16 text-8xl opacity-20">
              {services[activeService].icon}
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-4">{services[activeService].title}</h3>
              <p className="mb-6 text-gray-300">{services[activeService].description}</p>
              
              <ul className="space-y-2 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="self-start bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Découvrir ce service
              </button>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-90"></div>
          </div>

          {/* Liste des services - Disposition non linéaire */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ${
                  activeService === index
                    ? 'bg-black text-white transform -translate-y-2 shadow-2xl'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setActiveService(index)}
                style={{ 
                  transform: activeService === index ? 
                    `rotate(${service.rotation}deg) translateY(-8px)` : 
                    `rotate(${service.rotation * 0.3}deg)`,
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm opacity-80">
                  {service.description.substring(0, 60)}...
                </p>
                
                {/* Indicateur visuel */}
                <div className={`mt-4 h-1 w-10 transition-all duration-300 ${
                  activeService === index ? 'bg-white w-16' : 'bg-gray-400'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
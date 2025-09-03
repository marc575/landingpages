import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TherapyCubes = () => {
  const [activeCube, setActiveCube] = useState(null);
  const [hoveredCube, setHoveredCube] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const therapyMethods = [
    {
      id: 1,
      title: "Communication Non-Violente",
      icon: "🗣️",
      shortDesc: "Dialogue authentique",
      description: "Méthode structurée pour exprimer ses besoins sans accusation et écouter l'autre sans se sentir attaqué.",
      techniques: ["Observation sans jugement", "Expression des sentiments", "Formulation des besoins", "Demandes claires"],
      duration: "6-8 séances",
      effectiveness: "92%",
      color: "from-green-100 to-green-50",
      border: "border-green-200"
    },
    {
      id: 2,
      title: "Thérapie Narrative",
      icon: "📖",
      shortDesc: "Réécriture des histoires",
      description: "Approche qui permet de séparer la personne du problème et de réécrire l'histoire du couple de manière positive.",
      techniques: ["Externalisation du problème", "Cartographie de l'influence", "Histoire alternative", "Cérémonies de définition"],
      duration: "5-7 séances",
      effectiveness: "88%",
      color: "from-gray-100 to-gray-50",
      border: "border-gray-200"
    },
    {
      id: 3,
      title: "Thérapie par les Schémas",
      icon: "🧩",
      shortDesc: "Patterns relationnels",
      description: "Identification et modification des schémas relationnels dysfonctionnels hérités de l'histoire personnelle.",
      techniques: ["Identification des schémas", "Cartographie émotionnelle", "Exercices de réparentage", "Dialogues mode"],
      duration: "8-10 séances",
      effectiveness: "90%",
      color: "from-green-100 to-green-50",
      border: "border-green-200"
    },
    {
      id: 4,
      title: "Imago Thérapie",
      icon: "💞",
      shortDesc: "Guérison par le partenaire",
      description: "Méthode qui transforme les conflits en opportunités de guérison et de croissance mutuelle.",
      techniques: ["Dialogue Imago", "Validation mutuelle", "Empathie active", "Restructuration positive"],
      duration: "6-9 séances",
      effectiveness: "95%",
      color: "from-gray-100 to-gray-50",
      border: "border-gray-200"
    },
    {
      id: 5,
      title: "Thérapie Focus Solution",
      icon: "🎯",
      shortDesc: "Solutions orientées",
      description: "Approche centrée sur les solutions plutôt que sur les problèmes, mettant l'accent sur les ressources du couple.",
      techniques: ["Questions miracle", "Échelles de progression", "Exceptions positives", "Compliments authentiques"],
      duration: "4-6 séances",
      effectiveness: "85%",
      color: "from-green-100 to-green-50",
      border: "border-green-200"
    },
    {
      id: 6,
      title: "Pleine Conscience Conjugale",
      icon: "🧘",
      shortDesc: "Présence à l'autre",
      description: "Intégration de la méditation et de la pleine conscience dans la relation pour améliorer la présence et la connexion.",
      techniques: ["Méditation en couple", "Écoute mindful", "Pause consciente", "Gratitude partagée"],
      duration: "5-8 séances",
      effectiveness: "89%",
      color: "from-gray-100 to-gray-50",
      border: "border-gray-200"
    }
  ];

  const handleCubeClick = (cubeId) => {
    if (activeCube === cubeId) {
      setActiveCube(null);
    } else {
      setActiveCube(cubeId);
    }
  };

  const handleMouseMove = (e) => {
    if (hoveredCube) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      setRotation({
        x: ((y - centerY) / centerY) * 10,
        y: ((x - centerX) / centerX) * -10
      });
    }
  };

  return (
    <div id='therapy' className="bg-gradient-to-br from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif leading-tight">Méthodes Thérapeutiques Innovantes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos approches uniques pour transformer votre relation à travers des méthodes éprouvées et innovantes
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-xl transition-colors ${viewMode === 'grid' ? 'bg-white shadow-md text-green-600' : 'text-gray-600'}`}
            >
              Vue Grille
            </button>
            <button 
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-xl transition-colors ${viewMode === 'carousel' ? 'bg-white shadow-md text-green-600' : 'text-gray-600'}`}
            >
              Vue 3D
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {therapyMethods.map((method) => (
              <motion.div
                key={method.id}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${method.color} border ${method.border} rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeCube === method.id ? 'ring-2 ring-green-500 ring-opacity-50' : ''
                }`}
                onClick={() => handleCubeClick(method.id)}
              >
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{method.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-green-600 font-medium">{method.shortDesc}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{method.description}</p>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{method.duration}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {method.effectiveness} efficacité
                  </span>
                </div>

                <AnimatePresence>
                  {activeCube === method.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">Techniques clés:</h4>
                      <ul className="space-y-1">
                        {method.techniques.map((tech, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ) : (
          /* 3D Carousel View */
          <div className="relative h-52 mb-16 flex items-center justify-center">
            <div 
              className="relative w-full h-full max-w-sm mx-auto"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                setHoveredCube(null);
                setRotation({ x: 0, y: 0 });
              }}
            >
              {therapyMethods.map((method, index) => {
                const angle = (index * 2 * Math.PI) / therapyMethods.length;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={method.id}
                    className={`absolute w-48 h-48 cursor-pointer ${
                      activeCube === method.id ? 'z-50' : 'z-10'
                    }`}
                    style={{
                      x: x,
                      z: z,
                      rotateY: hoveredCube === method.id ? rotation.y : 0,
                      rotateX: hoveredCube === method.id ? rotation.x : 0
                    }}
                    animate={{
                      x: x,
                      z: z,
                      y: activeCube === method.id ? -20 : 0,
                      scale: activeCube === method.id ? 1.2 : 1
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    onClick={() => handleCubeClick(method.id)}
                    onMouseEnter={() => setHoveredCube(method.id)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${method.color} border ${method.border} rounded-xl shadow-lg p-4 transform-style-preserve-3d transition-all duration-300 ${
                      activeCube === method.id ? 'ring-2 ring-green-400' : ''
                    }`}>
                      <div className="text-center">
                        <div className="text-4xl mb-2">{method.icon}</div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{method.title}</h3>
                        <p className="text-green-600 text-xs">{method.shortDesc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Detailed View */}
        <AnimatePresence>
          {activeCube && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100"
            >
              {therapyMethods.filter(method => method.id === activeCube).map((method) => (
                <div key={method.id}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start">
                      <span className="text-4xl mr-4">{method.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                        <p className="text-green-600 font-medium">{method.shortDesc}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveCube(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Description</h4>
                      <p className="text-gray-700 mb-6">{method.description}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Techniques principales</h4>
                      <ul className="space-y-2">
                        {method.techniques.map((tech, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                            <span className="text-gray-700">{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Informations pratiques</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Durée moyenne:</span>
                            <span className="font-medium text-gray-900">{method.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Taux d'efficacité:</span>
                            <span className="font-medium text-green-600">{method.effectiveness}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Adapté pour:</span>
                            <span className="font-medium text-gray-900">Crises modérées à sévères</span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300 mb-3">
                        Choisir cette méthode
                      </button>
                      <button className="w-full border border-gray-300 hover:border-green-400 text-gray-700 hover:text-green-600 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                        Voir un exemple de séance
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TherapyCubes;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Conflict = () => {
  const [activeConflict, setActiveConflict] = useState(null);
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'list'

  const conflictTypes = [
    {
      id: 1,
      title: "Crise de Communication",
      icon: "💬",
      description: "Dialogues qui tournent en rond, incompréhensions mutuelles, sentiment de ne pas être écouté",
      causes: [
        "Écoute selective",
        "Interprétations erronées",
        "Langage non-verbal contradictoire"
      ],
      solutions: [
        "Techniques d'écoute active",
        "Reformulation des messages",
        "Pauses réflexives pendant les discussions"
      ],
      intensity: 75,
      frequency: "Quotidienne",
      position: { x: 15, y: 30 }
    },
    {
      id: 2,
      title: "Conflits Financiers",
      icon: "💰",
      description: "Désaccords sur la gestion du budget, différences de valeurs concernant l'argent",
      causes: [
        "Divergences sur les priorités financières",
        "Ressentiments sur les dépenses personnelles",
        "Dettes non communiquées"
      ],
      solutions: [
        "Budget commun transparent",
        "Séparation des comptes avec pool commun",
        "Consultation financière conjointe"
      ],
      intensity: 65,
      frequency: "Hebdomadaire",
      position: { x: 75, y: 20 }
    },
    {
      id: 3,
      title: "Déséquilibre Familial",
      icon: "👨‍👩‍👧‍👦",
      description: "Répartition inégale des tâches, gestion du temps, pression liée à l'éducation des enfants",
      causes: [
        "Attentes non exprimées",
        "Charge mentale inégale",
        "Rôles traditionnels non discutés"
      ],
      solutions: [
        "Tableau de répartition des tâches",
        "Temps dédié à la planification familiale",
        "Thérapie centrée sur l'équité"
      ],
      intensity: 70,
      frequency: "Quotidienne",
      position: { x: 40, y: 70 }
    },
    {
      id: 4,
      title: "Problèmes d'Intimité",
      icon: "❤️",
      description: "Désir sexuel inégal, manque de connexion physique, routine intime",
      causes: [
        "Fatigue et stress accumulés",
        "Manque de moments de qualité",
        "Souvenirs relationnels négatifs"
      ],
      solutions: [
        "Thérapie de réconnection émotionnelle",
        "Exercices d'intimité progressive",
        "Communication non-sexualisée sur les besoins"
      ],
      intensity: 85,
      frequency: "Variable",
      position: { x: 60, y: 50 }
    },
    {
      id: 5,
      title: "Conflits de Valeurs",
      icon: "⚖️",
      description: "Divergences profondes sur les croyances, principes éthiques ou projets de vie",
      causes: [
        "Éducation et background différents",
        "Évolution personnelle divergente",
        "Manque de dialogue sur les aspirations"
      ],
      solutions: [
        "Identification des valeurs fondamentales",
        "Recherche de terrains d'entente",
        "Négociation des compromis acceptables"
      ],
      intensity: 90,
      frequency: "Ponctuelle mais intense",
      position: { x: 25, y: 55 }
    }
  ];

  return (
    <div id='conflits' className="bg-gradient-to-br from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif leading-tight">Carte des Conflits Dynamique</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez les différents types de conflits conjugaux et découvrez les approches thérapeutiques adaptées à chaque situation
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-xl transition-colors ${viewMode === 'map' ? 'bg-white shadow-md text-green-600' : 'text-gray-600'}`}
            >
              Vue Carte
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-xl transition-colors ${viewMode === 'list' ? 'bg-white shadow-md text-green-600' : 'text-gray-600'}`}
            >
              Vue Liste
            </button>
          </div>
        </div>

        {viewMode === 'map' ? (
          <div className="relative bg-green-50 rounded-3xl shadow-md p-8 h-[600px] overflow-hidden">
            {/* Background Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {conflictTypes.map(conflict => (
                conflictTypes.map(target => {
                  if (conflict.id !== target.id) {
                    return (
                      <line 
                        key={`line-${conflict.id}-${target.id}`}
                        x1={conflict.position.x}
                        y1={conflict.position.y}
                        x2={target.position.x}
                        y2={target.position.y}
                        stroke="#61C953"
                        strokeWidth="0.5"
                      />
                    )
                  }
                  return null;
                })
              ))}
            </svg>

            {/* Conflict Nodes */}
            {conflictTypes.map(conflict => (
              <motion.div
                key={conflict.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: conflict.id * 0.1 }}
                className={`absolute cursor-pointer transition-all duration-300 ${activeConflict === conflict.id ? 'z-10' : 'z-0'}`}
                style={{ 
                  left: `${conflict.position.x}%`, 
                  top: `${conflict.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setActiveConflict(activeConflict === conflict.id ? null : conflict.id)}
              >
                <div className={`
                  relative flex flex-col items-center justify-center rounded-full shadow-lg
                  ${activeConflict === conflict.id ? 'w-24 h-24 bg-green-100' : 'w-20 h-20 bg-white hover:bg-gray-50'}
                  border-2 ${activeConflict === conflict.id ? 'border-green-500' : 'border-gray-200'}
                  transition-all duration-300
                `}>
                  <span className="text-2xl mb-1">{conflict.icon}</span>
                  <span className={`text-center ${activeConflict === conflict.id ? 'text-green-700 text-xs' : 'text-gray-700 text-xs'}`}>
                    {activeConflict === conflict.id ? conflict.title : conflict.title.split(' ')[0]}
                  </span>
                  
                  {/* Intensity indicator */}
                  <div className="absolute -bottom-2 w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500"
                      style={{ width: `${conflict.intensity}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Conflict Detail Panel */}
            <AnimatePresence>
              {activeConflict && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-6 left-1/2 z-50 transform -translate-x-1/2 w-11/12 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                >
                  {conflictTypes.filter(conflict => conflict.id === activeConflict).map(conflict => (
                    <div key={conflict.id}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                            <span className="mr-3">{conflict.icon}</span>
                            {conflict.title}
                          </h3>
                          <p className="text-gray-600 mt-1">{conflict.description}</p>
                        </div>
                        <button 
                          onClick={() => setActiveConflict(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Causes fréquentes
                          </h4>
                          <ul className="space-y-2">
                            {conflict.causes.map((cause, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span className="text-gray-700">{cause}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Solutions thérapeutiques
                          </h4>
                          <ul className="space-y-2">
                            {conflict.solutions.map((solution, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span className="text-gray-700">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex mt-6 pt-4 border-t border-gray-100">
                        <div className="mr-6">
                          <span className="text-sm text-gray-500">Intensité</span>
                          <div className="flex items-center">
                            <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                              <div 
                                className="h-full bg-green-500 rounded-full"
                                style={{ width: `${conflict.intensity}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{conflict.intensity}%</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Fréquence</span>
                          <div className="text-sm font-medium text-gray-700">{conflict.frequency}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conflictTypes.map(conflict => (
              <motion.div
                key={conflict.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: conflict.id * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{conflict.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{conflict.title}</h3>
                    <p className="text-gray-600 text-sm">{conflict.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Intensité</span>
                    <span>{conflict.intensity}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${conflict.intensity}%` }}
                    />
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">Fréquence:</span> {conflict.frequency}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => setActiveConflict(conflict.id)}
                    className="text-green-600 hover:text-green-700 font-medium flex items-center"
                  >
                    Voir les solutions détaillées
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Conflict;
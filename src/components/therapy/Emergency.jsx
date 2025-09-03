import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Emergency = () => {
  const [activeEmergency, setActiveEmergency] = useState(null);
  const [urgencyLevel, setUrgencyLevel] = useState(null);
  const [showHelpOptions, setShowHelpOptions] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  const emergencyTypes = [
    {
      id: 1,
      title: "Crise Immédiate",
      subtitle: "Conflit explosif en cours",
      icon: "🔥",
      description: "Vous êtes dans une situation de tension extrême où la communication est rompue et le conflit menace d'escalader dangereusement.",
      color: "red",
      actions: [
        { id: 1, text: "Technique de pause immédiate", time: "5 min", icon: "⏸️" },
        { id: 2, text: "Exercice de respiration synchronisée", time: "3 min", icon: "🌬️" },
        { id: 3, text: "Contact d'urgence avec thérapeute", time: "Immédiat", icon: "📞" }
      ]
    },
    {
      id: 2,
      title: "Tension Élevée",
      subtitle: "Situation tendue persistante",
      icon: "⚡",
      description: "La tension est palpable et montante, mais la communication n'est pas encore totalement rompue.",
      color: "orange",
      actions: [
        { id: 1, text: "Dialogue structuré en 3 points", time: "10 min", icon: "🗣️" },
        { id: 2, text: "Exercice d'écoute active", time: "7 min", icon: "👂" },
        { id: 3, text: "Journal des émotions partagé", time: "15 min", icon: "📝" }
      ]
    },
    {
      id: 3,
      title: "Distance Émotionnelle",
      subtitle: "Froid et retrait relationnel",
      icon: "❄️",
      description: "Vous traversez une période de distance et de froideur où le dialogue est minimal et superficiel.",
      color: "blue",
      actions: [
        { id: 1, text: "Retour aux bases de connexion", time: "20 min", icon: "🔗" },
        { id: 2, text: "Questionnaire d'évaluation mutuelle", time: "15 min", icon: "📊" },
        { id: 3, text: "Planification de retrouvailles", time: "30 min", icon: "📅" }
      ]
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Guide de Premiers Secours Émotionnels",
      type: "PDF",
      icon: "📄",
      duration: "12 pages"
    },
    {
      id: 2,
      title: "Méditation Guidée pour Couples",
      type: "Audio",
      icon: "🎧",
      duration: "18 min"
    },
    {
      id: 3,
      title: "Exercices de Communication Non-Violente",
      type: "Interactive",
      icon: "🔄",
      duration: "25 min"
    },
    {
      id: 4,
      title: "Contact avec un Thérapeute",
      type: "Urgent",
      icon: "📞",
      duration: "Immédiat"
    }
  ];

  useEffect(() => {
    if (urgencyLevel) {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [urgencyLevel]);

  const handleUrgencySelect = (level) => {
    setUrgencyLevel(level);
    setActiveEmergency(emergencyTypes.find(emergency => emergency.color === level));
    setShowHelpOptions(true);
  };

  const resetEmergency = () => {
    setActiveEmergency(null);
    setUrgencyLevel(null);
    setShowHelpOptions(false);
  };

  return (
    <div id='emergency' className="bg-gradient-to-br from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif leading-tight">Système d'Urgence Relationnelle</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Outils et ressources immédiates pour désamorcer les crises conjugales et rétablir le dialogue
          </p>
        </motion.div>

        {/* Emergency Assessment */}
        {!urgencyLevel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 rounded-3xl shadow-sm p-8 mb-12 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Quel type de crise traversez-vous?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyTypes.map((emergency) => (
                <motion.div
                  key={emergency.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 bg-white ${
                    urgencyLevel === emergency.color 
                      ? `border-${emergency.color}-500 bg-${emergency.color}-50` 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleUrgencySelect(emergency.color)}
                >
                  <div className="text-4xl mb-4">{emergency.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{emergency.title}</h4>
                  <p className="text-gray-600 text-sm">{emergency.subtitle}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Sélectionnez le type de situation que vous vivez pour obtenir une aide personnalisée
              </p>
            </div>
          </motion.div>
        )}

        {/* Emergency Assistance */}
        <AnimatePresence>
          {urgencyLevel && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className={`p-6 ${urgencyLevel === 'red' ? 'bg-red-50' : urgencyLevel === 'orange' ? 'bg-orange-50' : 'bg-blue-50'}`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <span className="text-4xl mr-4">{activeEmergency.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{activeEmergency.title}</h3>
                        <p className="text-gray-700">{activeEmergency.description}</p>
                      </div>
                    </div>
                    <button 
                      onClick={resetEmergency}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Actions Immédiates Recommandées</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {activeEmergency.actions.map((action) => (
                      <motion.div
                        key={action.id}
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-green-300 transition-all duration-300"
                      >
                        <div className="text-2xl mb-3">{action.icon}</div>
                        <h5 className="font-medium text-gray-900 mb-2">{action.text}</h5>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {action.time}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Conseil du thérapeute
                    </h5>
                    <p className="text-green-700">
                      Prenez 5 minutes pour respirer calmement avant d'engager toute conversation. 
                      Rappelez-vous que l'objectif n'est pas de gagner une dispute mais de retrouver la connexion.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Emergency Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 rounded-3xl shadow-sm p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Ressources d'Urgence</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <motion.div
                key={resource.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-5 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {resource.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                  {resource.title}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">{resource.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className={`p-6 rounded-3xl shadow-sm mb-8 transition-all duration-1000 ${
            isPulsing ? 'bg-red-50 border-2 border-red-200' : 'bg-gray-50 border border-gray-100'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'une aide immédiate?</h3>
            <p className="text-gray-600 mb-6">Contactez un thérapeute disponible 24h/24 pour les urgences relationnelles</p>
            <button className={`py-3 px-8 rounded-full font-medium transition-all duration-300 ${
              isPulsing 
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}>
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact d'urgence
              </span>
            </button>
          </div>

          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Notre équipe de thérapeutes est spécialement formée pour intervenir dans les situations de crise relationnelle. 
            Nous offrons une écoute immédiate et des conseils personnalisés pour désamorcer les tensions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Emergency;
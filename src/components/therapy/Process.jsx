import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState('right');

  const steps = [
    {
      id: 1,
      title: "Évaluation Initiale",
      subtitle: "Compréhension mutuelle",
      description: "Séance d'évaluation pour identifier les schémas conflictuels, les forces du couple et les défis spécifiques à surmonter.",
      duration: "1-2 séances",
      icon: "📋",
      color: "bg-green-100",
      borderColor: "border-green-300",
      textColor: "text-green-700",
      details: [
        "Analyse des dynamiques relationnelles",
        "Identification des déclencheurs de conflits",
        "Évaluation des attentes et objectifs"
      ]
    },
    {
      id: 2,
      title: "Désamorçage des Conflits",
      subtitle: "Apprentissage des techniques",
      description: "Acquisition d'outils pratiques pour interrompre les cycles conflictuels et établir une communication non-violente.",
      duration: "3-4 séances",
      icon: "🛡️",
      color: "bg-gray-100",
      borderColor: "border-gray-300",
      textColor: "text-gray-700",
      details: [
        "Techniques de régulation émotionnelle",
        "Communication non-violente",
        "Gestion des escalades conflictuelles"
      ]
    },
    {
      id: 3,
      title: "Reconstruction Émotionnelle",
      subtitle: "Rétablissement de la confiance",
      description: "Travail sur la réparation des blessures émotionnelles et le rétablissement de la sécurité affective dans le couple.",
      duration: "4-6 séances",
      icon: "❤️",
      color: "bg-green-100",
      borderColor: "border-green-300",
      textColor: "text-green-700",
      details: [
        "Exercices de vulnérabilité contrôlée",
        "Rituels de réconciliation",
        "Renforcement de l'empathie mutuelle"
      ]
    },
    {
      id: 4,
      title: "Nouvelles Dynamiques",
      subtitle: "Création de patterns sains",
      description: "Implémentation de nouvelles habitudes relationnelles et consolidation des comportements positifs.",
      duration: "3-5 séances",
      icon: "🔄",
      color: "bg-gray-100",
      borderColor: "border-gray-300",
      textColor: "text-gray-700",
      details: [
        "Création de routines relationnelles",
        "Négociation des besoins individuels",
        "Établissement de limites saines"
      ]
    },
    {
      id: 5,
      title: "Consolidation",
      subtitle: "Autonomie du couple",
      description: "Renforcement des acquis et préparation à l'autonomie pour maintenir une relation épanouissante à long terme.",
      duration: "2-3 séances",
      icon: "🌱",
      color: "bg-green-100",
      borderColor: "border-green-300",
      textColor: "text-green-700",
      details: [
        "Prévention des rechutes",
        "Stratégies de maintien des progrès",
        "Célébration des succès"
      ]
    }
  ];

  const navigateStep = (newStep) => {
    setDirection(newStep > activeStep ? 'right' : 'left');
    setActiveStep(newStep);
  };

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setDirection('right');
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setDirection('left');
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div id='process' className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif leading-tight">Processus de Reconstruction</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un parcours thérapeutique innovant en 5 phases pour transformer votre relation et restaurer l'harmonie conjugale
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-16 h-2/3 w-1 bg-gradient-to-b from-green-400 to-gray-300 rounded-full"></div>
            
            {/* Steps */}
            <div className="relative z-10 grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col items-center cursor-pointer ${index % 2 === 0 ? 'mt-0' : 'mt-24'}`}
                  onClick={() => navigateStep(index)}
                >
                  {/* Step connector */}
                  <div className={`h-8 w-1 ${index % 2 === 0 ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                  
                  {/* Step indicator */}
                  <div className={`
                    w-16 h-16 rounded-full border-4 flex items-center justify-center text-2xl transition-all duration-300
                    ${activeStep === index ? 'scale-110 ' + step.borderColor + ' bg-white shadow-lg' : 'border-gray-300 bg-white'}
                  `}>
                    {step.icon}
                  </div>
                  
                  {/* Step title */}
                  <div className={`text-center mt-4 font-medium ${activeStep === index ? 'text-green-600' : 'text-gray-600'}`}>
                    {step.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="mt-16 bg-gray-50 rounded-3xl shadow-xl p-8 border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: direction === 'right' ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -50 : 50 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-start mb-6">
                    <div className={`text-4xl mr-4 ${steps[activeStep].textColor}`}>
                      {steps[activeStep].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{steps[activeStep].title}</h3>
                      <p className="text-gray-600">{steps[activeStep].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{steps[activeStep].description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Focus thérapeutique:</h4>
                    <ul className="space-y-2">
                      {steps[activeStep].details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`w-2 h-2 rounded-full mt-2 mr-3 ${steps[activeStep].color}`}></span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500">Durée typique</div>
                    <div className="text-xl font-bold text-gray-900">{steps[activeStep].duration}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Progression</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 mb-3 w-full">
                      En savoir plus
                    </button>
                    <button className="border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 font-medium py-2 px-6 rounded-full transition-all duration-300 w-full">
                      Témoignages
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevStep}
                disabled={activeStep === 0}
                className={`flex items-center ${activeStep === 0 ? 'text-gray-400' : 'text-green-600 hover:text-green-700'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Étape précédente
              </button>
              
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navigateStep(index)}
                    className={`w-3 h-3 rounded-full ${activeStep === index ? 'bg-green-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextStep}
                disabled={activeStep === steps.length - 1}
                className={`flex items-center ${activeStep === steps.length - 1 ? 'text-gray-400' : 'text-green-600 hover:text-green-700'}`}
              >
                Étape suivante
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-1.5">
              <div 
                className="bg-green-600 h-1.5"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: direction === 'right' ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -50 : 50 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`text-3xl mr-3 ${steps[activeStep].textColor}`}>
                      {steps[activeStep].icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{steps[activeStep].title}</h3>
                      <p className="text-sm text-gray-600">{steps[activeStep].subtitle}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 py-1 px-3 rounded-full">
                    {steps[activeStep].duration}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{steps[activeStep].description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Focus thérapeutique:</h4>
                  <ul className="space-y-2">
                    {steps[activeStep].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`w-2 h-2 rounded-full mt-2 mr-3 ${steps[activeStep].color}`}></span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation */}
            <div className="flex justify-between px-6 pb-6">
              <button 
                onClick={prevStep}
                disabled={activeStep === 0}
                className={`py-2 px-4 rounded-lg ${activeStep === 0 ? 'text-gray-400' : 'text-green-600 hover:bg-green-50'}`}
              >
                Précédent
              </button>
              
              <div className="flex space-x-2 items-center">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navigateStep(index)}
                    className={`w-2 h-2 rounded-full ${activeStep === index ? 'bg-green-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextStep}
                disabled={activeStep === steps.length - 1}
                className={`py-2 px-4 rounded-lg ${activeStep === steps.length - 1 ? 'text-gray-400' : 'text-green-600 hover:bg-green-50'}`}
              >
                Suivant
              </button>
            </div>
            
            <div className="px-6 pb-6">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 w-full">
                Discuter de ce processus
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Process;
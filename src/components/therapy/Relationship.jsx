import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Relationship = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [relationshipScore, setRelationshipScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Comment décririez-vous la qualité de votre communication?",
      options: [
        { text: "Nous parlons ouvertement de tout", value: 4 },
        { text: "Nous communiquons bien sur certains sujets", value: 3 },
        { text: "Nous évitons souvent les sujets importants", value: 2 },
        { text: "Nous avons du mal à nous comprendre", value: 1 }
      ]
    },
    {
      id: 2,
      question: "Comment gérez-vous les désaccords?",
      options: [
        { text: "Nous trouvons toujours un terrain d'entente", value: 4 },
        { text: "Nous parvenons généralement à résoudre nos différends", value: 3 },
        { text: "Les désaccords dégénèrent souvent en disputes", value: 2 },
        { text: "Nous évitons complètement les conflits", value: 1 }
      ]
    },
    {
      id: 3,
      question: "Comment partagez-vous les responsabilités au quotidien?",
      options: [
        { text: "Équitablement et naturellement", value: 4 },
        { text: "Avec quelques ajustements nécessaires", value: 3 },
        { text: "De manière déséquilibrée, ce qui crée des tensions", value: 2 },
        { text: "C'est une source constante de conflit", value: 1 }
      ]
    },
    {
      id: 4,
      question: "Comment évaluez-vous votre intimité émotionnelle?",
      options: [
        { text: "Nous nous sentons profondément connectés", value: 4 },
        { text: "Nous partageons nos émotions régulièrement", value: 3 },
        { text: "Nous avons du mal à nous ouvrir", value: 2 },
        { text: "Nous nous sentons émotionnellement distants", value: 1 }
      ]
    },
    {
      id: 5,
      question: "Comment voyez-vous l'avenir de votre relation?",
      options: [
        { text: "Avec optimisme et enthousiasme", value: 4 },
        { text: "Avec espoir mais quelques inquiétudes", value: 3 },
        { text: "Avec incertitude et appréhension", value: 2 },
        { text: "Avec pessimisme et inquiétude", value: 1 }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 500);
    } else {
      calculateResults();
      setTimeout(() => setShowResults(true), 800);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const maxScore = questions.length * 4;
    const percentage = (totalScore / maxScore) * 100;
    setRelationshipScore(percentage);
  };

  const getDiagnosisMessage = () => {
    if (relationshipScore >= 80) return "Votre relation est solide et épanouissante";
    if (relationshipScore >= 60) return "Votre relation est bonne avec quelques points à améliorer";
    if (relationshipScore >= 40) return "Votre relation nécessite une attention particulière";
    return "Votre relation a besoin d'un soutien professionnel";
  };

  const restartDiagnostic = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setRelationshipScore(0);
  };

  if (showResults) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-bl from-white to-gray-50 flex items-center justify-center px-6 py-16 md:py-24"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Résultats de votre diagnostic</h2>
          
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-64 h-64 mb-6">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className="text-green-600 stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (relationshipScore / 100) * 251.2}
                  transform="rotate(-90 50 50)"
                />
                <text
                  x="50"
                  y="50"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-2xl font-bold fill-gray-800"
                >
                  {Math.round(relationshipScore)}%
                </text>
              </svg>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              {getDiagnosisMessage()}
            </h3>
            
            <p className="text-gray-600 text-center mb-6">
              Basé sur vos réponses, nous avons identifié les forces et les défis de votre relation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-4 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-2">Points forts</h4>
              <ul className="list-disc list-inside text-green-700 pl-2">
                <li>Communication ouverte</li>
                <li>Respect mutuel</li>
                <li>Confiance établie</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Axes d'amélioration</h4>
              <ul className="list-disc list-inside text-gray-700 pl-2">
                <li>Gestion des conflits</li>
                <li>Expression des besoins</li>
                <li>Équilibre vie commune</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={restartDiagnostic}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 mr-4"
            >
              Refaire le test
            </button>
            <button className="border-2 border-gray-800 hover:border-green-600 text-gray-800 hover:text-green-600 font-medium py-3 px-6 rounded-full transition-all duration-300">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      id='diagnostic'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-bl from-white to-gray-50 flex items-center justify-center px-6 py-16 md:py-24"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 font-serif leading-tight">Diagnostique Relationnel Personnalisé</h2>
          <p className="text-gray-600 text-center">Répondez à ces questions pour évaluer la santé de votre relation</p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm font-medium text-gray-700">{currentStep + 1}/{questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="bg-green-600 h-2.5 rounded-full"
            />
          </div>
        </div>
        
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            {questions[currentStep].question}
          </h3>
          
          <div className="space-y-4">
            {questions[currentStep].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                className="w-full p-4 text-left rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300 flex items-start"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-800 mr-3 flex-shrink-0">
                  {index + 1}
                </span>
                <span>{option.text}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button 
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Précédent
            </button>
          )}
          <div className="ml-auto"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Relationship;
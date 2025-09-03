import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationshipStatus: '',
    emotionalState: '',
    urgency: 'medium',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emotionalFeedback, setEmotionalFeedback] = useState('');

  const emotionalStates = [
    { id: 'frustrated', label: 'Frustré(e)', emoji: '😤', color: 'bg-orange-100' },
    { id: 'anxious', label: 'Anxieux(se)', emoji: '😰', color: 'bg-yellow-100' },
    { id: 'sad', label: 'Triste', emoji: '😢', color: 'bg-blue-100' },
    { id: 'hopeful', label: 'Optimiste', emoji: '😊', color: 'bg-green-100' },
    { id: 'confused', label: 'Perdu(e)', emoji: '😕', color: 'bg-purple-100' },
    { id: 'angry', label: 'En colère', emoji: '😠', color: 'bg-red-100' }
  ];

  const relationshipStatuses = [
    { id: 'married', label: 'Marié(e)', emoji: '💍' },
    { id: 'couple', label: 'En couple', emoji: '💑' },
    { id: 'separated', label: 'Séparé(e)', emoji: '💔' },
    { id: 'complicated', label: "C'est compliqué", emoji: '🔀' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Feedback émotionnel en temps réel
    if (name === 'emotionalState') {
      const selectedEmotion = emotionalStates.find(e => e.id === value);
      setEmotionalFeedback(selectedEmotion ? selectedEmotion.label : '');
    }
  };

  const handleEmotionSelect = (emotionId) => {
    setFormData(prev => ({ ...prev, emotionalState: emotionId }));
    const selectedEmotion = emotionalStates.find(e => e.id === emotionId);
    setEmotionalFeedback(selectedEmotion.label);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      relationshipStatus: '',
      emotionalState: '',
      urgency: 'medium',
      message: ''
    });
    setCurrentStep(1);
    setIsSubmitted(false);
    setEmotionalFeedback('');
  };

  return (
    <div id='contact' className="bg-gradient-to-br from-white to-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif leading-tight">Contact Émotionnel</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prenez contact avec nous de manière authentique. Partagez votre état émotionnel et nous vous répondrons avec empathie et compréhension.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="bg-green-600 h-2"
            />
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="p-8"
              >
                {/* Step 1: État Emotionnel */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Comment vous sentez-vous aujourd'hui ?</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {emotionalStates.map((emotion) => (
                        <motion.div
                          key={emotion.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            formData.emotionalState === emotion.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleEmotionSelect(emotion.id)}
                        >
                          <div className="text-3xl mb-2">{emotion.emoji}</div>
                          <div className="text-sm font-medium text-gray-700">{emotion.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {emotionalFeedback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6"
                      >
                        <p className="text-green-800 font-medium">
                          Nous comprenons que vous vous sentez {emotionalFeedback.toLowerCase()}. Nous sommes là pour vous écouter.
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Informations Personnelles */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Parlez-nous de vous</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Votre nom</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="Comment aimeriez-vous qu'on vous appelle ?"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Votre email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="Où pouvons-nous vous répondre ?"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Situation relationnelle</label>
                        <div className="grid grid-cols-2 gap-3">
                          {relationshipStatuses.map((status) => (
                            <motion.label
                              key={status.id}
                              whileHover={{ scale: 1.02 }}
                              className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                                formData.relationshipStatus === status.id
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="relationshipStatus"
                                value={status.id}
                                checked={formData.relationshipStatus === status.id}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <span className="text-lg mr-2">{status.emoji}</span>
                              <span className="text-sm">{status.label}</span>
                            </motion.label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Message et Urgence */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Votre message</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Niveau d'urgence</label>
                        <div className="flex space-x-4">
                          {['low', 'medium', 'high'].map((level) => (
                            <motion.label
                              key={level}
                              whileHover={{ scale: 1.05 }}
                              className={`flex-1 p-3 border-2 rounded-xl cursor-pointer text-center transition-all duration-200 ${
                                formData.urgency === level
                                  ? level === 'low' ? 'border-green-500 bg-green-50' :
                                    level === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                                    'border-red-500 bg-red-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="urgency"
                                value={level}
                                checked={formData.urgency === level}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <span className="text-sm font-medium">
                                {level === 'low' ? '🟢 Peu urgent' : 
                                 level === 'medium' ? '🟡 Moyennement urgent' : 
                                 '🔴 Très urgent'}
                              </span>
                            </motion.label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Votre message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="Décrivez ce que vous traversez, vos préoccupations, ou posez-nous vos questions..."
                          required
                        />
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Ce qui se passe ensuite:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Nous vous répondons sous 24h maximum</li>
                          <li>• Proposition de créneau pour un premier échange gratuit</li>
                          <li>• Analyse personnalisée de votre situation</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      currentStep === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    ← Précédent
                  </button>

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all duration-200"
                    >
                      Continuer →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl disabled:opacity-50 transition-all duration-200 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        'Envoyer mon message'
                      )}
                    </button>
                  )}
                </div>
              </motion.form>
            ) : (
              /* Confirmation Screen */
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé avec succès</h3>
                <p className="text-gray-600 mb-6">
                  Merci d'avoir partagé votre état émotionnel. Nous vous contacterons très rapidement 
                  pour échanger sur votre situation et vous proposer un accompagnement personnalisé.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-green-800 font-medium">
                    💡 En attendant notre réponse, nous vous recommandons de prendre un moment pour respirer profondément et pratiquer un exercice de pleine conscience.
                  </p>
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-3 border-2 border-gray-800 hover:border-green-600 text-gray-800 hover:text-green-600 font-medium rounded-xl transition-all duration-200"
                >
                  Envoyer un nouveau message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Support Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            📞 Besoin de parler immédiatement? Appelez notre ligne de soutien émotionnel: 
            <span className="font-semibold text-green-600 ml-2">01 23 45 67 89</span>
          </p>
          <p className="text-sm text-gray-500">
            Disponible 24h/24, 7j/7 • Confidentialité absolue • Écoutants formés
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
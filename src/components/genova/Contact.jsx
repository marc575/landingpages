import React, { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      type: 'phone',
      label: 'Appel direct',
      value: '+33 1 23 45 67 89',
      icon: '📞',
      description: 'Du lundi au samedi, 9h-19h'
    },
    {
      type: 'email',
      label: 'Email',
      value: 'contact@luxauto.fr',
      icon: '✉️',
      description: 'Réponse sous 24h'
    },
    {
      type: 'visit',
      label: 'Showroom',
      value: '45 Av. de l\'Automobile, Paris',
      icon: '📍',
      description: 'Visite sur rendez-vous'
    }
  ];

  return (
    <section id='contact' ref={containerRef} className="relative py-24 bg-white overflow-hidden">
      {/* Éléments d'arrière-plan dynamiques */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-gray-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-32 -right-16 w-48 h-48 bg-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-black rounded-lg transform rotate-12 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold mb-6 text-black">
            Contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nous avons repensé l'expérience contact pour qu'elle soit aussi exceptionnelle 
            que nos véhicules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Carte de contact interactive */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-8 text-black">Accès Direct</h3>
              
              {/* Méthodes de contact */}
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <div
                    key={method.type}
                    className={`p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 ${
                      index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <h4 className="font-semibold text-black mb-1">{method.label}</h4>
                        <p className="text-lg mb-1">{method.value}</p>
                        <p className="text-gray-500 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Élément décoratif */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-black rounded-full opacity-5"></div>
          </div>

          {/* Formulaire interactif */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-black text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Confirmation message */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center z-10">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold mb-2">Message envoyé!</h3>
                    <p className="text-gray-300">Nous vous recontacterons sous 24h</p>
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-8">Formulaire Dynamique</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                    formData.name ? 'rotate-1' : '-rotate-1'
                  }`}>
                    <label className="block text-gray-300 mb-2">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border-2 border-gray-700 focus:border-white focus:outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                    formData.email ? '-rotate-1' : 'rotate-1'
                  }`}>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border-2 border-gray-700 focus:border-white focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                  formData.subject ? 'rotate-1' : ''
                }`}>
                  <label className="block text-gray-300 mb-2">Sujet</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border-2 border-gray-700 focus:border-white focus:outline-none transition-all"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="essai">Demande d'essai</option>
                    <option value="info">Information véhicule</option>
                    <option value="finance">Financement</option>
                    <option value="reprise">Reprise véhicule</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                  formData.message ? '-rotate-1' : ''
                }`}>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border-2 border-gray-700 focus:border-white focus:outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-4 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-gray-100"
                >
                  Envoyer le message
                </button>
              </form>

              {/* Élément décoratif */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
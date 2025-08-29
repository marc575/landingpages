import React, { useState } from 'react';
import newsImage from "../../assets/podcast/banniere2.jpg"

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulation d'envoi d'email
      console.log('Email submitted:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Réinitialiser après 3 secondes
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden max-w-7xl mx-auto mb-16 rounded-xl" id='contact'>
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <img 
          src={newsImage}
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay sombre pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 ">
        <div className="text-center">
          {/* Icône ou logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Titre et description */}
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't Miss <span className="text-yellow-400">Any Podcasts</span>
          </h2>
          <p className="text-md text-gray-300 mb-10 max-w-xl mx-auto">
            Stay up to date with the latest episodes, exclusive live streams, and news. Join our community of enthusiasts.
          </p>

          {/* Formulaire de newsletter */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-green-500 text-white py-4 px-8 rounded-lg inline-flex items-center max-w-md mx-auto animate-pulse">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Thank you! You are now subscribed to our newsletter.</span>
            </div>
          )}

          {/* Note de confidentialité */}
          <p className="text-gray-400 text-sm mt-12">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
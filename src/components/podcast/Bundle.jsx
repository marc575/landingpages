import React, { useState, useEffect } from 'react';

const Bundle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // monthly or yearly

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Données des packs d'abonnement
  const subscriptionData = [
    {
      id: 'basic',
      title: 'Basic',
      description: 'Perfect for discovering the world of podcasts',
      monthlyPrice: '9.99',
      yearlyPrice: '99.99',
      period: 'per month',
      popular: false,
      features: [
        'Access to all standard podcasts',
        'Listen without ads',
        'Standard quality streaming',
        'Basic technical support',
        '3 downloads per month'
      ],
      buttonText: 'Get started',
      buttonColor: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      id: 'pro',
      title: 'Pro',
      description: 'The complete experience for regular listeners',
      monthlyPrice: '19.99',
      yearlyPrice: '199.99',
      period: 'per month',
      popular: true,
      features: [
        'All Basic benefits',
        'Access to exclusive content',
        'Streaming in HD quality',
        'Unlimited downloads',
        'Access to preview live streams',
        'Priority support'
      ],
      buttonText: 'Select this plan',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      id: 'premium',
      title: 'Premium',
      description: 'For true podcast enthusiasts',
      monthlyPrice: '29.99',
      yearlyPrice: '299.99',
      period: 'per month',
      popular: false,
      features: [
        'All the Pro benefits',
        'Access to all premium content',
        'Ultra HD audio quality',
        'Exclusive participation in live events',
        'Unpublished content and bonuses',
        'Support 24/7',
        'Cancellation at any time'
      ],
      buttonText: 'Become Premium',
      buttonColor: 'bg-gray-800 hover:bg-gray-900'
    }
  ];

  const calculateYearlySaving = (monthlyPrice, yearlyPrice) => {
    const monthlyTotal = parseFloat(monthlyPrice) * 12;
    const yearlyTotal = parseFloat(yearlyPrice);
    return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100);
  };

  return (
    <div className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8" id='price'>
      <div className="max-w-8xl mx-auto">
        {/* En-tête de section */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your <span className="text-yellow-500">Subscription</span></h2>
          <p className="text-gray-600 text-md max-w-xl mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, tenetur suscipit delectus accusantium, sapiente, repudiandae corporis aut possimus necessitatibus.
          </p>
          
          {/* Toggle de période de facturation */}
          <div className="flex justify-center items-center space-x-4">
            <span className={`font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Mensuel</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative rounded-full w-14 h-7 bg-gray-300 focus:outline-none"
            >
              <span
                className={`absolute top-0.5 left-0.5 bg-white rounded-full w-6 h-6 transition-transform duration-300 ${
                  billingPeriod === 'yearly' ? 'transform translate-x-7' : ''
                }`}
              ></span>
            </button>
            <div className="flex items-center">
              <span className={`font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>Annuel</span>
              {billingPeriod === 'yearly' && (
                <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                  -20%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Conteneur des packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {subscriptionData.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Badge "Populaire" */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-xs shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Économie annuelle */}
              {billingPeriod === 'yearly' && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    Save {calculateYearlySaving(plan.monthlyPrice, plan.yearlyPrice)}%
                  </span>
                </div>
              )}

              {/* Carte d'abonnement */}
              <div className={`bg-white rounded-xl shadow-lg overflow-hidden h-full ${
                selectedPlan === plan.id ? 'ring-2 ring-yellow-500 shadow-xl' : 'shadow-md'
              } transition-all duration-300 transform hover:scale-105`}>
                <div className="p-6 h-full flex flex-col">
                  {/* En-tête */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  {/* Prix */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2 text-sm">
                        /{billingPeriod === 'monthly' ? 'mois' : 'an'}
                      </span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className="text-gray-500 text-sm mt-1">
                        Either ${(parseFloat(plan.yearlyPrice) / 12).toFixed(2)}/month
                      </p>
                    )}
                  </div>

                  {/* Bouton */}
                  <button className={`${plan.buttonColor} text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mb-6`}>
                    {plan.buttonText}
                  </button>

                  {/* Liste des caractéristiques */}
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note de bas de page */}
        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-600 text-sm">
            <span className="text-yellow-500 font-semibold">Satisfaction guaranteed</span> - 
            All plans include a 30-day money-back guarantee. No commitment required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
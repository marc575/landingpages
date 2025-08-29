import React, { useState, useEffect } from 'react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Benefits data
  const benefitsData = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "Exclusive Content",
      description: "Access premium episodes and live sessions available only to our platform members."
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Access",
      description: "Listen to your favorite podcasts anytime, anywhere with our mobile-friendly platform."
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "Live Interactions",
      description: "Join live sessions and interact directly with hosts and other community members."
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Personalized Experience",
      description: "Get recommendations based on your listening habits and preferences."
    },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8" id='features'>
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className={`mb-6 transition-all flex flex-wrap gap-8 duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* <p className="text-yellow-500 font-semibold mb-4 tracking-wider">WHY CHOOSE US</p> */}
          <h2 className="text-4xl font-bold text-black mb-6 max-w-xl">We're here to Ensure you get the <span className="text-yellow-500">Best Possible.</span></h2>
          <p className="text-gray-600 text-md max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam exercitationem vel, sit voluptatibus numquam, neque in quas vitae enim voluptatem! Amet, veniam dolore quia veritatis aut fugiat architecto neque!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefitsData.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className={`bg-white rounded-xl p-8 transform transition-all duration-500 shadow-md hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <div className="text-black">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center md:text-start">{benefit.title}</h3>
              <p className="text-gray-600 text-center md:text-start">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
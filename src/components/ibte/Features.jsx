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
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#2563EB" fillOpacity="0.1" />
            <path d="M30 40L50 30L70 40L50 50L30 40Z" fill="#2563EB" stroke="#2563EB" strokeWidth="2"/>
            <path d="M30 40V60L50 70L70 60V40" stroke="#2563EB" strokeWidth="2" fill="none"/>
            <path d="M50 50V70" stroke="#2563EB" strokeWidth="2"/>
            <circle cx="50" cy="60" r="3" fill="#2563EB"/>
            <path d="M40 45L45 50L55 40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Empowering Future Leaders with Certified Education",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nobis."
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#374151" fillOpacity="0.1" />
            <path d="M50 30C40 30 30 40 30 50C30 60 40 70 50 70C60 70 70 60 70 50C70 40 60 30 50 30Z" 
                fill="#2563EB" stroke="#2563EB" strokeWidth="2"/>
            <rect x="45" y="45" width="10" height="10" fill="white"/>
            <path d="M40 35L35 40" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            <path d="M60 35L65 40" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            <path d="M40 65L35 60" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            <path d="M60 65L65 60" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="50" cy="50" r="5" fill="white" stroke="#374151" strokeWidth="1"/>
        </svg>
      ),
      title: "Tailored Education at an Affordable Cost",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nobis."
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#2563EB" fillOpacity="0.1" />
            <circle cx="35" cy="40" r="8" fill="#2563EB" stroke="#2563EB" strokeWidth="2"/>
            <circle cx="65" cy="40" r="8" fill="#2563EB" stroke="#2563EB" strokeWidth="2"/>
            <circle cx="50" cy="60" r="10" fill="#2563EB" stroke="#2563EB" strokeWidth="2"/>
            <path d="M35 48C35 53 40 58 50 58C60 58 65 53 65 48" stroke="white" strokeWidth="2" fill="none"/>
            <circle cx="33" cy="38" r="1.5" fill="white"/>
            <circle cx="37" cy="38" r="1.5" fill="white"/>
            <circle cx="63" cy="38" r="1.5" fill="white"/>
            <circle cx="67" cy="38" r="1.5" fill="white"/>
            <circle cx="47" cy="58" r="1.5" fill="white"/>
            <circle cx="53" cy="58" r="1.5" fill="white"/>
            <path d="M40 65C42 68 46 70 50 70C54 70 58 68 60 65" stroke="#374151" strokeWidth="2" fill="none"/>
        </svg>
    ) ,
      title: "Limities Flexibility and Ever-Evolving Experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nobis."
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8" id='features'>
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className={`mb-6 transition-all flex flex-wrap gap-8 duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* <p className="text-yellow-500 font-semibold mb-4 tracking-wider">WHY CHOOSE US</p> */}
          <h2 className="text-4xl font-semibold text-black mb-6 max-w-xl">Unlocking New Possibilities for Personalized <span className="text-blue-500">Education</span></h2>
          <p className="text-gray-600 text-md max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam exercitationem vel, sit voluptatibus numquam, neque in quas vitae enim voluptatem! Amet, veniam dolore quia veritatis aut fugiat architecto neque!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefitsData.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className={`bg-white rounded-xl p-8 transform transition-all duration-500 shadow-md hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <div className="h-16 w-16">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-black mb-4 text-center md:text-start">{benefit.title}</h3>
              <p className="text-gray-600 text-center md:text-start">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
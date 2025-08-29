import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  // Données statistiques
  const statsData = [
    {
      id: 1,
      value: 98,
      suffix: '%',
      label: 'Satisfaction clients',
      duration: 2000,
      easing: 'easeOutExpo'
    },
    {
      id: 2,
      value: 1250,
      prefix: '+',
      label: 'Properties',
      duration: 2500,
      easing: 'easeOutQuart'
    },
    {
      id: 3,
      value: 45,
      prefix: '+',
      label: 'Countries & Towns',
      duration: 1500,
      easing: 'easeOutCubic'
    },
    {
      id: 4,
      value: 2480,
      prefix: '+',
      label: 'Positives Reviews',
      duration: 3000,
      easing: 'easeOutQuint'
    }
  ];

  const [counters, setCounters] = useState(statsData.map(stat => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Fonctions d'easing pour des animations plus naturelles
  const easingFunctions = {
    linear: (t) => t,
    easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
    easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
    easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
    easeOutQuint: (t) => 1 - Math.pow(1 - t, 5)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounters = () => {
    statsData.forEach((stat, index) => {
      animateCounter(stat.value, index, stat.duration, stat.easing);
    });
  };

  const animateCounter = (target, index, duration, easingType) => {
    const startTime = performance.now();
    const startValue = 0;
    const easing = easingFunctions[easingType] || easingFunctions.linear;

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const easedProgress = easing(progress);
        const currentValue = Math.floor(easedProgress * target);
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });
        requestAnimationFrame(updateCounter);
      } else {
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = target;
          return newCounters;
        });
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div ref={sectionRef} className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center py-8 px-4 ${
                index > 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-gray-200" : ""
              }`}
            >
              <div className="text-5xl font-bold text-black mb-2 transition-all duration-300 transform hover:scale-105">
                {stat.prefix}{counters[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg font-medium text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
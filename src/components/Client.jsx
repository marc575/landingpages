import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { 
  SiApple, 
  SiGoogle, 
  SiAmazon, 
  SiFacebook, 
  SiTesla,
  SiNetflix,
  SiSpotify
} from 'react-icons/si';

const Client = () => {
  // Liste des icônes clients (taille et couleur personnalisables)
  const clients = [
    { id: 1, icon: <SiApple className="w-full h-full" />, name: 'Apple' },
    { id: 3, icon: <SiGoogle className="w-full h-full" />, name: 'Google' },
    { id: 4, icon: <SiAmazon className="w-full h-full" />, name: 'Amazon' },
    { id: 5, icon: <SiFacebook className="w-full h-full" />, name: 'Facebook' },
    { id: 6, icon: <SiTesla className="w-full h-full" />, name: 'Tesla' },
    { id: 7, icon: <SiNetflix className="w-full h-full" />, name: 'Netflix' },
    { id: 8, icon: <SiSpotify className="w-full h-full" />, name: 'Spotify' },
  ];

  // Dupliquez les logos pour un effet de boucle continu
  const duplicatedClients = [...clients, ...clients];
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 1;
    let animationId;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center py-4 animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`} 
                className="flex-shrink-0 px-8 md:px-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="h-10 w-24 md:h-12 md:w-32 flex items-center justify-center text-purple-700 hover:text-current transition-colors duration-500">
                  {client.icon}
                  <span className="sr-only">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Client;
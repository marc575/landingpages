import React, { useState, useEffect, useRef } from 'react';

const Reviews = () => {
  // Structure de données pour les avis
  const reviewsData = [
    {
      id: 1,
      propertyImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content: "Appartement exactement comme sur les photos. Emplacement parfait, propriétaire très arrangeant. Je recommande vivement !",
      author: "Marie L.",
      date: "2023-10-15",
      property: "Appartement Lumineux - Paris"
    },
    {
      id: 2,
      propertyImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4,
      content: "Très belle maison, bien équipée. Le jardin est un vrai plus. Seul bémol : la proximité avec la route parfois bruyante.",
      author: "Pierre M.",
      date: "2023-10-12",
      property: "Maison Moderne - Lyon"
    },
    {
      id: 3,
      propertyImage: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content: "Villa exceptionnelle, encore plus belle en vrai. Piscine entretenue quotidiennement. Service impeccable.",
      author: "Sophie D.",
      date: "2023-10-08",
      property: "Villa Prestige - Marseille"
    },
    {
      id: 4,
      propertyImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4,
      content: "Parfait pour un séjour en solo ou en couple. Bien situé, proche de tous commerces. Propriétaire réactif.",
      author: "Thomas B.",
      date: "2023-10-05",
      property: "Studio Centre-Ville - Toulouse"
    },
    {
      id: 5,
      propertyImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content: "Propriété de caractère, prestations haut de gamme. Le concierge est très attentionné. Expérience memorable.",
      author: "Julie P.",
      date: "2023-10-01",
      property: "Propriété Exceptionnelle - Bordeaux"
    },
    {
      id: 6,
      propertyImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4,
      content: "Appartement fidèle aux descriptions. Rénovation de qualité. Quartier calme et agréable. Bon rapport qualité-prix.",
      author: "Michel R.",
      date: "2023-09-28",
      property: "Appartement Rénové - Nantes"
    }
  ];

  const [reviews] = useState([...reviewsData, ...reviewsData]); // Duplication pour l'effet infini
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  // Animation de défilement horizontal infini
  useEffect(() => {
    const animate = () => {
      if (!isPaused && containerRef.current) {
        positionRef.current -= 0.5; // Vitesse de défilement
        
        // Réinitialiser la position lorsque tout le contenu a défilé
        if (-positionRef.current >= containerRef.current.scrollWidth / 2) {
          positionRef.current = 0;
        }
        
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Composant pour afficher les étoiles
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">What our customers say</h2>
          <p className="text-md text-gray-700 max-w-xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam, ratione ipsam alias voluptatibus quae odit fuga tempo.
          </p>
        </div>

        {/* Conteneur des avis avec défilement horizontal infini */}
        <div 
          className="relative overflow-hidden py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Indicateur de pause */}
          {isPaused && (
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md px-3 py-2 z-10 flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-sm text-gray-700">Scrolling paused</span>
            </div>
          )}

          <div 
            ref={containerRef}
            className="flex transition-transform duration-1000 ease-linear"
            style={{ width: 'max-content' }}
          >
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="w-80 mx-4 flex-shrink-0"
              >
                <div className="bg-white rounded-xl shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.propertyImage} 
                      alt={review.property} 
                      className="w-16 h-16 rounded-lg object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.property}</h4>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">"{review.content}"</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{review.author}</span>
                    <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
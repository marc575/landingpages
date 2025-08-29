import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(4); // Par défaut pour desktop

  // Données des avis
  const reviewsData = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      content: "This podcast platform has completely changed how I consume content. The exclusive episodes are worth every penny!",
      author: "Michael Chen",
      date: "2023-11-10",
      location: "New York, USA"
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 4,
      content: "I love the live interaction feature. Being able to ask questions during recordings makes me feel part of the conversation.",
      author: "Sarah Johnson",
      date: "2023-11-08",
      location: "London, UK"
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      content: "The audio quality is exceptional. It feels like the hosts are right in the room with me. Highly recommend!",
      author: "David Martinez",
      date: "2023-11-05",
      location: "Madrid, Spain"
    },
    {
      id: 4,
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      content: "The personalized recommendations are spot on. I've discovered so many great podcasts I wouldn't have found otherwise.",
      author: "Jennifer Kim",
      date: "2023-11-02",
      location: "Seoul, South Korea"
    },
    {
      id: 5,
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 4,
      content: "The community features are fantastic. I've connected with other listeners who share my interests.",
      author: "Alexandre Dubois",
      date: "2023-10-28",
      location: "Paris, France"
    },
    {
      id: 6,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      content: "The offline listening feature is a game-changer for my commute. No more worrying about data or connection issues.",
      author: "James Wilson",
      date: "2023-10-25",
      location: "Sydney, Australia"
    },
    {
      id: 7,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      content: "The content variety is impressive. From tech to true crime, there's something for every mood and interest.",
      author: "Emma Thompson",
      date: "2023-10-20",
      location: "Toronto, Canada"
    },
    {
      id: 8,
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      rating: 4,
      content: "User interface is intuitive and beautiful. Makes browsing and discovering new content a pleasure.",
      author: "Robert Garcia",
      date: "2023-10-18",
      location: "Los Angeles, USA"
    }
  ];

  // Gestion du responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4); // Desktop
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // Tablet
      } else {
        setVisibleCards(1); // Mobile
      }
    };

    // Initial call
    handleResize();

    // Event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Configuration du défilement automatique
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          if (prevIndex >= reviewsData.length - visibleCards) {
            return 0;
          }
          return prevIndex + 1;
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviewsData.length, visibleCards]);

  const nextReview = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex >= reviewsData.length - visibleCards) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevReview = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) {
        return reviewsData.length - visibleCards;
      }
      return prevIndex - 1;
    });
  };

  // Composant pour afficher les étoiles
  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
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
    <div className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8" id='reviews'>
      <div className="max-w-8xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-semibold mb-4 tracking-wider">LISTENER REVIEWS</p>
          <h2 className="text-4xl font-bold text-black mb-6">What Our <span className="text-yellow-500">Subscribers</span> Say</h2>
          <p className="text-gray-600 text-md max-w-xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio iusto culpa maiores? Veniam qui culpa, aperiam.
          </p>
        </div>

        {/* Conteneur du carrousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Boutons de navigation */}
          <button 
            onClick={prevReview}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 hidden md:block"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextReview}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 hidden md:block"
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicateur de pause */}
          {!isAutoPlaying && (
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md px-3 py-2 z-10 flex items-center">
              <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-sm text-gray-700">Scroll paused</span>
            </div>
          )}

          {/* Carrousel des avis */}
          <div className="flex transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}>
            {reviewsData.map((review) => (
              <div key={review.id} className={`flex-shrink-0 px-1 ${
                visibleCards === 4 ? 'w-1/4' : 
                visibleCards === 2 ? 'w-1/2' : 
                'w-full'
              }`}>
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="p-6 h-full flex flex-col">
                    {/* En-tête de l'avis */}
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.avatar} 
                        alt={review.author} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-white">{review.author}</h3>
                        <p className="text-gray-400 text-sm">{review.location}</p>
                      </div>
                    </div>

                    {/* Notation */}
                    <div className="mb-4">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Contenu de l'avis */}
                    <p className="text-gray-300 italic mb-6 flex-grow">"{review.content}"</p>

                    {/* Date */}
                    <p className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicateurs pour mobile */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: Math.ceil(reviewsData.length / visibleCards) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleCards)}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === Math.floor(currentIndex / visibleCards) ? 'bg-yellow-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to review group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
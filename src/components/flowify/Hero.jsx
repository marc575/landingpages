import React from 'react';
import heroImage from '../../assets/flowify/banniere1.jpg';
import { FiTrendingUp } from 'react-icons/fi';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Hero = () => {
  // Données pour les avatars utilisateurs
  const users = [
    { id: 1, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 3, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { id: 5, avatar: 'https://randomuser.me/api/portraits/women/90.jpg' },
  ];

  // Note sur 5 (4.7 dans cet exemple)
  const rating = 4.7;

  // Fonction pour générer les étoiles
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <section className="bg-white lg:pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texte et CTA */}
          <div className="lg:w-1/2 space-y-2 animate-fadeInUp">
            {/* Sous-titre avec icône */}
            <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2">
              <FiTrendingUp className="text-purple-700 mr-2" />
              <span className="text-purple-700 font-medium">Croissance exponentielle</span>
            </div>

            {/* Titre principal avec dégradé */}
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
              Transformez votre business avec notre <span className='italic font-semibold'>solution innovante</span>
            </h1>

            {/* Description */}
            <p className="text-md text-gray-600 max-w-2xl">
              Découvrez comment notre plateforme peut booster votre productivité et simplifier vos processus avec des outils puissants et intuitifs.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                Découvrir
              </button>
              <button className="px-8 py-3 bg-gray-100 text-purple-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 hover:translate-y-[-2px]">
                Voir la démo
              </button>
            </div>

            {/* Avis utilisateurs */}
            <div className="flex items-center pt-4">
              <div className="flex -space-x-2">
                {users.map((user, index) => (
                  <img
                    key={user.id}
                    src={user.avatar}
                    alt={`User ${user.id}`}
                    className={`w-10 h-10 rounded-full border-2 border-white transition-all duration-300 hover:translate-y-[-4px]`}
                    style={{ zIndex: users.length - index }}
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {renderStars()}
                  <span className="ml-2 text-gray-700 font-medium">{rating.toFixed(1)}/5</span>
                </div>
                <p className="text-sm text-gray-500">Basé sur <span className="text-purple-700 font-medium">1,248 avis</span></p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 animate-fadeIn order-first lg:order-last">
            <div className="relative rounded-xl overflow-hidden shadow-sm">
              <img
                src={heroImage}
                alt="Hero illustration"
                className="w-full max-h-[50vh] lg:max-h-[65vh]  object-contain transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-purple-600/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
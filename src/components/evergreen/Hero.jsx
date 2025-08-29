import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMapPin, FiHome, FiDollarSign, FiLayers } from 'react-icons/fi';
import HeroImage from "../../assets/evergreen/banniere2.jpg"

const Hero = () => {
  
  // Données clients
  const clients = [
    { id: 1, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Sophie' },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Pierre' },
    { id: 3, avatar: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Emma' },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/men/12.jpg', name: 'Luc' },
    { id: 5, avatar: 'https://randomuser.me/api/portraits/women/43.jpg', name: 'Lea' },
  ];
  
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState('');

  const propertyTypes = ['House', 'Apartment', 'Residential'];
  const roomOptions = ['Studio', '1', '2', '3', '4+'];

  return (
    <section className="relative md:h-screen flex items-center justify-center">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Belle maison à louer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-8xl mx-auto mt-32 px-4 sm:px-6 lg:px-8">
        {/* Badges types de propriété */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setPropertyType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${propertyType === type ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Titre et description */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 text-4xl sm:text-5xl lg:text-6xl text-white"
          >
            Build Your Future, One Property at a Time
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 text-md text-white/90"
          >
                                              
            {/* Badge avis clients */}
            <motion.div 
                className="relative"
                whileHover={{ y: -5 }}
                >
                <div className="flex flex-row gap-2 md:gap-0 md:items-center mb-2">
                    <div className="flex -space-x-2">
                    {clients.map((client) => (
                        <img
                        key={client.id}
                        src={client.avatar}
                        alt={client.name}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        />
                    ))}
                    </div>
                    <div className="ml-3">
                    <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-300">4.9/5 (248 avis)</span>
                    </div>
                </div>
            </motion.div>
            <p>Découvrez des milliers de propriétés à louer dans toute la région. Des maisons, appartements et résidences soigneusement sélectionnés pour répondre à tous vos besoins.</p>
          </motion.div>
        </div>

        {/* Formulaire de recherche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-2xl p-6 mb-4"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Rechercher une propriété</h2>
          
          {/* Champs de formulaire horizontaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiHome className="text-gray-400" />
              </div>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              >
                <option value="">Type de logement</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiDollarSign className="text-gray-400" />
              </div>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              >
                <option value="">Budget mensuel</option>
                <option value="500-1000">500€ - 1000€</option>
                <option value="1000-1500">1000€ - 1500€</option>
                <option value="1500-2000">1500€ - 2000€</option>
                <option value="2000+">2000€+</option>
              </select>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className="text-gray-400" />
              </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Localisation"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLayers className="text-gray-400" />
              </div>
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              >
                <option value="">Nombre de pièces</option>
                {roomOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between'>
            {/* Filtres supplémentaires */}
            <div className="flex flex-wrap gap-3 mb-2">
                <h5 className="text-md font-medium text-gray-900 px-4 py-1">Filtres:</h5>
                <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-all">
                    Jardin
                </button>
                <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-all">
                    Parking
                </button>
                <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-all">
                    Meublé
                </button>
                <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-all">
                    Balcon
                </button>
            </div>

            {/* Bouton de recherche */}
            <button className="w-full md:w-auto px-4 py-2 bg-black hover:bg-gray-900 text-white font-medium rounded-md shadow-md flex items-center justify-center gap-2 transition-all">
                <FiSearch /> Rechercher
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import axios from 'axios';

const TravelBooking = () => {
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState(1000);
  const [isLoading, setIsLoading] = useState(false);

  // Recherche des destinations (utilise l'API Nominatim gratuite)
  const searchDestinations = async (query) => {
    if (query.length < 3) return;
    
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1`
      );
      setSuggestions(response.data.map(item => ({
        display: `${item.name}${item.address.city ? `, ${item.address.city}` : ''}${item.address.country ? `, ${item.address.country}` : ''}`,
        value: item.display_name
      })));
    } catch (error) {
      console.error("Erreur de recherche:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation de traitement
    setTimeout(() => {
      alert(`Réservation en cours pour ${destination} du ${startDate} au ${endDate} avec un budget de ${budget}€`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-transparent w-full absolute bottom-2 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl md:rounded-full bg-white shadow-md"
        >
          <form onSubmit={handleSubmit} className="p-4 md:p-6">
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Destination */}
              <motion.div 
                whileHover={{ scale: 1.002 }}
                className="flex-1 relative"
              >
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
                  <input
                    id="destination"
                    type="text"
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value);
                      searchDestinations(e.target.value);
                    }}
                    placeholder="Ville, pays"
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  />
                  {suggestions.length > 0 && (
                    <ul className="absolute bottom-0 z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {suggestions.map((item, index) => (
                        <li 
                          key={index}
                          className="px-4 py-2 hover:bg-orange-50 cursor-pointer"
                          onClick={() => {
                            setDestination(item.display);
                            setSuggestions([]);
                          }}
                        >
                          {item.display}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>

              {/* Dates */}
              <motion.div 
                whileHover={{ scale: 1.002 }}
                className="flex-1"
              >
                <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">Période</label>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full pl-4 pr-4 py-2 rounded-full border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="Date de départ"
                    />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full pl-4 pr-4 py-2 rounded-full border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      placeholder="Date de retour"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Budget */}
              <motion.div 
                whileHover={{ scale: 1.002 }}
                className="flex-1"
              >
                <div className="grid grid-cols-2 gap-2 py-1">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget (€)</label>
                    <div className="text-right mt-1">
                        <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium">
                        {budget}€
                        </span>
                    </div>
                </div>
                <div className="relative">
                  <input
                    id="budget"
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full accent-orange-500"
                  />
                </div>
              </motion.div>

              {/* Bouton */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-end"
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <span>Recherche...</span>
                  ) : (
                    <>
                      <FiSearch className="text-lg" />
                      <span>Book Now</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelBooking;
import React, { useState } from 'react';

const Vehicles = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);

  const vehicles = [
    {
      id: 1,
      name: 'Audi e-tron GT',
      price: '112 000 €',
      description: 'Électrique. Silencieux. Puissant. L\'avenir de la conduite sportive.',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: ['100% électrique', '530 km d\'autonomie', '3,5s 0-100 km/h']
    },
    {
      id: 2,
      name: 'BMW i8 Roadster',
      price: '163 000 €',
      description: 'Hybride. Élégant. Innovant. Une expérience de conduite unique.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: ['Hybride rechargeable', '374 ch', '4,4s 0-100 km/h']
    },
    {
      id: 3,
      name: 'Tesla Model S Plaid',
      price: '138 000 €',
      description: 'Performance ultime. Autonomie exceptionnelle. Technologie de pointe.',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: ['1 020 ch', '637 km d\'autonomie', '2,1s 0-100 km/h']
    }
  ];

  return (
    <section id='vehicules' className="relative py-20 bg-white overflow-hidden">
      {/* Élément décoratif arrière-plan */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row">
          {/* Titre et navigation */}
          <div className="lg:w-2/5 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-5xl font-bold mb-6 text-black">
              Véhicules <span className="text-gray-700 font-serif italic">d'Exception</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Découvrez notre sélection exclusive de véhicules haut de gamme, 
              alliant performance, innovation et design.
            </p>
            
            {/* Navigation des véhicules */}
            <div className="space-y-4">
              {vehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className={`p-4 cursor-pointer transition-all duration-500 ${
                    activeVehicle === index 
                    ? 'bg-black text-white transform -translate-x-2' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveVehicle(index)}
                >
                  <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                  <p className={activeVehicle === index ? 'text-gray-300' : 'text-gray-600'}>
                    {vehicle.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Affichage du véhicule sélectionné */}
          <div className="lg:w-3/5 relative">
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              {vehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeVehicle === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center transform transition-transform duration-1000 scale-105 hover:scale-100"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  ></div>
                  
                  {/* Overlay d'informations */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-2">{vehicle.name}</h3>
                      <p className="text-xl mb-3">{vehicle.price}</p>
                      <p className="mb-4">{vehicle.description}</p>
                      
                      <div className="flex space-x-4">
                        {vehicle.specs.map((spec, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-white text-gray-900 bg-opacity-20 rounded-full text-sm"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicateurs de navigation */}
            <div className="flex justify-center mt-6 space-x-3">
              {vehicles.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeVehicle === index ? 'bg-black scale-125' : 'bg-gray-400'
                  }`}
                  onClick={() => setActiveVehicle(index)}
                  aria-label={`Voir véhicule ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Bouton CTA */}
            <div className="mt-8 text-center">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-black text-white font-semibold overflow-hidden">
                <span className="relative z-10">Réserver un essai</span>
                <div className="absolute inset-0 bg-gray-900 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
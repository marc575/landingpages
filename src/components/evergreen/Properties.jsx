import React, { useState } from 'react';

const Properties = () => {
  // Structure de données pour les propriétés
  const propertiesData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "À vendre",
      rooms: 4,
      bathrooms: 2,
      name: "Appartement Lumineux",
      price: 350000,
      address: "123 Avenue des Champs, Paris",
      area: 85,
      favorite: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Location",
      rooms: 3,
      bathrooms: 1,
      name: "Maison Moderne",
      price: 1800,
      address: "45 Rue de la Paix, Lyon",
      area: 75,
      favorite: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "À vendre",
      rooms: 5,
      bathrooms: 3,
      name: "Villa Prestige",
      price: 750000,
      address: "78 Boulevard Saint-Germain, Marseille",
      area: 150,
      favorite: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Location",
      rooms: 2,
      bathrooms: 1,
      name: "Studio Centre-Ville",
      price: 950,
      address: "22 Rue du Commerce, Toulouse",
      area: 45,
      favorite: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "À vendre",
      rooms: 6,
      bathrooms: 4,
      name: "Propriété Exceptionnelle",
      price: 1250000,
      address: "10 Avenue Montaigne, Bordeaux",
      area: 220,
      favorite: true
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Location",
      rooms: 3,
      bathrooms: 2,
      name: "Appartement Rénové",
      price: 1450,
      address: "56 Quai des Chartrons, Nantes",
      area: 70,
      favorite: false
    }
  ];

  const [properties, setProperties] = useState(propertiesData);
  const [activeFilter, setActiveFilter] = useState("Tous");

  // Fonction pour basculer l'état favori
  const toggleFavorite = (id) => {
    setProperties(properties.map(property => 
      property.id === id ? { ...property, favorite: !property.favorite } : property
    ));
  };

  // Filtrer les propriétés
  const filteredProperties = activeFilter === "Tous" 
    ? properties 
    : properties.filter(property => property.status === activeFilter);

  return (
    <div className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className='flex flex-wrap gap-4 items-center justify-between'>
            <div className="mb-12">
                <h2 className="text-4xl font-semibold text-gray-900 mb-4">Discover our selection of accommodations</h2>
                <p className="text-lg text-gray-700 max-w-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui blanditiis suscipit magni eius tenetur.
                </p>
            </div>

            {/* Filtres */}
            <div className="flex justify-center mb-10">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                        onClick={() => setActiveFilter("Tous")}
                        className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                            activeFilter === "Tous" 
                            ? "bg-blue-600 text-white" 
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                        >
                            All    
                    </button>
                    <button
                        onClick={() => setActiveFilter("À vendre")}
                        className={`px-6 py-3 text-sm font-medium ${
                            activeFilter === "À vendre" 
                            ? "bg-blue-600 text-white" 
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                        >
                            For sale
                    </button>
                    <button
                        onClick={() => setActiveFilter("Location")}
                        className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                            activeFilter === "Location" 
                            ? "bg-blue-600 text-white" 
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                        >
                            Rental
                    </button>
                </div>
            </div>

        </div>

        {/* Grille de propriétés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image avec badge de statut */}
              <div className="relative">
                <a href="#">
                    <img 
                    src={property.image} 
                    alt={property.name} 
                    className="w-full h-56 object-cover"
                    />
                </a>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    property.status === "À vendre" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {property.status}
                  </span>
                </div>
                
                {/* Bouton favori */}
                <button 
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <svg 
                    className={`w-6 h-6 ${property.favorite ? "text-red-500 fill-current" : "text-gray-400"}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                    />
                  </svg>
                </button>
              </div>

              {/* Détails de la propriété */}
              <div className="p-4">
                <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm text-gray-700">{property.rooms} rooms</span>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-700">{property.area} m²</span>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-sm text-gray-700">{property.bathrooms} bathrooms</span>
                  </div>
                </div>

                <a className="text-xl font-semibold text-gray-800" href='#'>{property.name}</a>

                <div className="flex justify-between items-center gap-2 mt-4">
                  <div className="text-lg font-bold text-blue-600">
                    {property.status === "À vendre" 
                      ? `${property.price.toLocaleString()} €` 
                      : `${property.price.toLocaleString()} €/mois`}
                  </div>

                  <p className="text-gray-600 flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
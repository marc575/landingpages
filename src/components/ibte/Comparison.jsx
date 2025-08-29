import React from 'react';

const Comparison = () => {
  // Données de comparaison
  const comparisonData = [
    {
      feature: "Personalized coaching",
      ourInstitution: true,
      others: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      feature: "Industrial partnerships",
      ourInstitution: true,
      others: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      feature: "International programs",
      ourInstitution: true,
      others: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      feature: "Research laboratories",
      ourInstitution: true,
      others: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      feature: "Dual degrees",
      ourInstitution: true,
      others: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      )
    },
    {
      feature: "Professional integration",
      ourInstitution: "95%",
      others: "78%",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      feature: "Individualized follow-up",
      ourInstitution: true,
      others: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      feature: "Digital campus",
      ourInstitution: true,
      others: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <div className="text-start mb-16 flex flex-wrap gap-8">
          <h2 className="text-4xl font-semibold text-gray-900 mx-auto max-w-xl">
            World-Class Education at an Affordable Price, <span className="text-blue-600">Recognized Globally</span>
          </h2>
          <p className="text-md text-gray-700 max-w-xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, omnis tenetur vitae id iste aut. Alias libero vero voluptates. Sunt enim nostrum exercitationem? Mollitia deleniti voluptate iure a fugit in?
          </p>
        </div>

        {/* Tableau comparatif */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* En-tête du tableau */}
          <div className="grid grid-cols-3 bg-blue-600 text-white">
            <div className="p-6 border-r border-blue-500">
              <h3 className="font-semibold">Comparison criteria</h3>
            </div>
            <div className="p-6 border-r border-blue-500 text-center">
              <h3 className="font-semibold text-2xl">Our Institute</h3>
              <p className="text-sm opacity-90">Academic Excellence</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-2xl">Other Establishments</h3>
              <p className="text-sm opacity-90">Industry average</p>
            </div>
          </div>

          {/* Corps du tableau */}
          <div className="divide-y divide-gray-200">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 hover:bg-gray-50 transition-colors duration-200">
                {/* Feature */}
                <div className="p-6 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  <span className="font-medium text-gray-900">{item.feature}</span>
                </div>

                {/* Notre institution */}
                <div className="p-6 border-l border-gray-200 flex items-center justify-center">
                  {typeof item.ourInstitution === 'boolean' ? (
                    item.ourInstitution ? (
                      <div className="bg-green-100 text-green-600 p-2 rounded-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="bg-red-100 text-red-600 p-2 rounded-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )
                  ) : (
                    <span className="text-2xl font-bold text-blue-600">{item.ourInstitution}</span>
                  )}
                </div>

                {/* Autres établissements */}
                <div className="p-6 border-l border-gray-200 flex items-center justify-center">
                  {typeof item.others === 'boolean' ? (
                    item.others ? (
                      <div className="bg-green-100 text-green-600 p-2 rounded-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="bg-red-100 text-red-600 p-2 rounded-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )
                  ) : (
                    <span className="text-lg font-medium text-gray-600">{item.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pied de tableau */}
          <div className="bg-gray-100 p-6 text-center">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">+12 exclusive benefits</span> that make the difference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
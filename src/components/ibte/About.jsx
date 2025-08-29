import React from 'react';
import aboutImage from '../../assets/ibte/banniere.jpg';

const About = () => {

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texte et CTA */}
          <div className="lg:w-1/2 space-y-6 md:space-y-2 animate-fadeInUp">

            {/* Titre principal avec dégradé */}
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight bg-clip-text text-transparent bg-black">
              Apply early and save big ! Get up to <span className='italic'>20% OFF</span> on tuition fees ! 
            </h2>

            {/* Description */}
            <p className="text-md text-gray-600 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quas quo excepturi sunt repellat libero perferendis magni repellendus? Rem ratione esse cumque tempore placeat dicta! Sunt iste aliquid atque molestiae.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                Apply Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 animate-fadeIn order-first">
            <div className="relative rounded-xl overflow-hidden shadow-xs">
              <img
                src={aboutImage}
                alt="Hero illustration"
                className="w-full max-h-[50vh] lg:max-h-[65vh] object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
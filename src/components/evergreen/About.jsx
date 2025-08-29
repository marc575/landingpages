import React from 'react'
import { motion } from 'framer-motion'
import aboutImage from "../../assets/evergreen/banniere3.jpg"
import aboutImage2 from "../../assets/evergreen/banniere4.jpg"

function About() {
  return (
    <section className="relative flex items-center justify-center py-16 md:py-24">
      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 mb-8">
          {/* Partie gauche - Titre */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 ">
              You Primary Home might begin to feel left out.
            </h2>
          </motion.div>

          {/* Partie droite - Description + Boutons */}
          <motion.div 
            className="lg:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-md text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum deleniti ad quam obcaecati, nobis eligendi impedit repudiandae assumenda similique laudantium maxime repellendus! Quaerat quisquam accusantium quas cupiditate vero voluptatum.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Texte et CTA */}
                <div className="lg:w-1/2 space-y-6 md:space-y-2 animate-fadeInUp">

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 bg-gray-50 py-8 rounded-md">
                        <div className='text-center space-y-4 px-4'>
                            {/* Titre principal avec dégradé */}
                            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-900">
                                Big Things can happen in small spaces.
                            </h4>

                            {/* Description */}
                            <p className="text-md text-gray-600 max-w-2xl">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit, adipisci provident non possimus unde. Iusto vero sapiente accusantium quod saepe nobis quia, delectus sunt, dicta reiciendis tempora assumenda repellendus.
                            </p>
                            
                            <button className="px-4 py-2 bg-transparent text-gray-900 border border-gray-400 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                                Détails
                            </button>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-xs">
                            <img
                                src={aboutImage2}
                                alt="Hero illustration"
                                className="w-full max-h-[50vh] lg:max-h-[65vh] object-cover transition-all duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-purple-100/10"></div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 flex flex-wrap gap-4 md:items-center md:justify-center">
                        {/* Description */}
                        <p className="text-md text-gray-600 max-w-md">
                            Découvrez comment notre plateforme peut booster votre productivité et simplifier vos processus avec des outils puissants et intuitifs.
                        </p>
                        <button className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                            Explore More
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
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-purple-100/10"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
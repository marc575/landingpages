import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { 
  SiTesla,
  SiGoogle, 
  SiApple,
  SiAmazon,
} from 'react-icons/si';
import { 
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';

const Partners = () => {
  // Configuration des partenaires
  const partners = [
    { icon: <SiTesla className="w-full h-full" />, name: 'Tesla' },
    { icon: <SiGoogle className="w-full h-full" />, name: 'Google' },
    { icon: <SiApple className="w-full h-full" />, name: 'Apple' },
    { icon: <SiAmazon className="w-full h-full" />, name: 'Amazon' }
  ];

  // Configuration des réseaux sociaux
  const socialNetworks = [
    { icon: <FaFacebook className="w-full h-full" />, name: 'Facebook', url: '#' },
    { icon: <FaTwitter className="w-full h-full" />, name: 'Twitter', url: '#' },
    { icon: <FaInstagram className="w-full h-full" />, name: 'Instagram', url: '#' },
    { icon: <FaLinkedin className="w-full h-full" />, name: 'LinkedIn', url: '#' },
    { icon: <FaYoutube className="w-full h-full" />, name: 'YouTube', url: '#' }
  ];

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="absolute bottom-1/2 md:bottom-5 w-full bg-transparent overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Partie Partenaires */}
          <motion.div 
            className="w-full md:w-auto"
            variants={item}
          >
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="h-8 w-16 flex items-center justify-center text-gray-400 hover:text-current transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  variants={item}
                >
                  {partner.icon}
                  <span className="sr-only">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Séparateur invisible sur mobile */}
          <motion.div 
            className="hidden md:block h-px w-8 bg-transparent"
            variants={item}
          />

          {/* Partie Réseaux sociaux */}
          <motion.div 
            className="w-full md:w-auto"
            variants={item}
          >
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {socialNetworks.map((network, index) => (
                <motion.a
                  key={index}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-6 flex items-center justify-center text-white hover:text-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                  variants={item}
                >
                  {network.icon}
                  <span className="sr-only">{network.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Effet de fond animé subtil */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 animate-pulse-slow" />
      </div>
    </div>
  );
};

export default Partners;
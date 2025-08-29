import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [currentPageGroup, setCurrentPageGroup] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerGroup = 10; // Nombre d'éléments par groupe

  // Liste des pages (à adapter à vos routes)
  const pages = [
    { number: 3, path: '/evergreen', name: 'Evergreen', icon: '🌲' },
    { number: 16, path: '/ecommerce', name: 'Ecommerce', icon: '🚛' },
    { number: 17, path: '/project', name: 'Project', icon: '🎯' },
    { number: 18, path: '/Analytics', name: 'Analytics', icon: '✨' },
    { number: 11, path: '/one', name: 'One', icon: '1️⃣' },
    { number: 12, path: '/two', name: 'Two', icon: '2️⃣' },
    { number: 13, path: '/three', name: 'Three', icon: '3️⃣' },
    { number: 14, path: '/fourth', name: 'Fourth', icon: '4️⃣' },
    { number: 15, path: '/five', name: 'Five', icon: '5️⃣' },
    { number: 1, path: '/', name: 'Calmnest', icon: '🧘' },
    { number: 2, path: '/podcast', name: 'Podcast', icon: '🎙️' },
    { number: 4, path: '/genova', name: 'Genova', icon: '🏙️' },
    { number: 5, path: '/therapy', name: 'Therapy', icon: '💬' },
    { number: 6, path: '/xpress', name: 'Xpress', icon: '⚡' },
    { number: 7, path: '/flowify', name: 'Flowify', icon: '🌊' },
    { number: 8, path: '/flame', name: 'Flame', icon: '🔥' },
    { number: 9, path: '/finory', name: 'Finory', icon: '💰' },
    { number: 10, path: '/ibte', name: 'Ibte', icon: '📊' },
  ];

  // Filtrer les pages selon le terme de recherche
  const filteredPages = useMemo(() => {
    if (!searchTerm) return pages;
    return pages.filter(page => 
      page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.number.toString().includes(searchTerm)
    );
  }, [pages, searchTerm]);

  // Grouper les pages pour la pagination - version simplifiée
  const groupedPages = useMemo(() => {
    const groups = [];
    for (let i = 0; i < filteredPages.length; i += itemsPerGroup) {
      groups.push(filteredPages.slice(i, i + itemsPerGroup));
    }
    return groups;
  }, [filteredPages, itemsPerGroup]);

  // Nombre total de groupes
  const totalGroups = groupedPages.length;

  // Pages actuelles à afficher
  const currentPages = groupedPages[currentPageGroup] || [];

  // Détection de la page active - version corrigée
  useEffect(() => {
    const currentPath = location.pathname;
    const activePage = pages.find(page => page.path === currentPath);
    
    if (activePage) {
      // Trouver l'index de la page active dans la liste complète
      const pageIndex = pages.findIndex(page => page.path === currentPath);
      
      // Calculer le groupe correspondant
      if (pageIndex !== -1) {
        const groupIndex = Math.floor(pageIndex / itemsPerGroup);
        setCurrentPageGroup(groupIndex);
      }
    }
  }, [location.pathname, itemsPerGroup]);

  // Navigation entre les groupes
  const nextGroup = () => {
    if (currentPageGroup < totalGroups - 1) {
      setCurrentPageGroup(prev => prev + 1);
    }
  };

  const prevGroup = () => {
    if (currentPageGroup > 0) {
      setCurrentPageGroup(prev => prev - 1);
    }
  };

  // Gestion du clic sur une page
  const handlePageClick = (path) => {
    navigate(path);
  };

  // Réinitialiser la pagination quand la recherche change
  useEffect(() => {
    setCurrentPageGroup(0);
  }, [searchTerm]);

  return (
    <motion.div 
      className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ x: expanded ? 0 : -20 }}
      animate={{ x: isHovered || expanded ? 0 : -20 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (expanded) setExpanded(false);
      }}
    >
      <div className="flex flex-col items-start space-y-2 p-3 bg-white bg-opacity-95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200">
        {/* Bouton d'expansion */}
        <motion.button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-2"
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {expanded ? '✕' : '≡'}
        </motion.button>

        {expanded && (
          <>
            {/* Barre de recherche */}
            <div className="w-full mb-2">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Indicateur de pagination */}
            {totalGroups > 1 && (
              <div className="flex justify-between items-center w-full mb-2">
                <motion.button
                  onClick={prevGroup}
                  disabled={currentPageGroup === 0}
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    currentPageGroup === 0 ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: currentPageGroup === 0 ? 1 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ‹
                </motion.button>
                <span className="text-xs text-gray-500">
                  {currentPageGroup + 1}/{totalGroups}
                </span>
                <motion.button
                  onClick={nextGroup}
                  disabled={currentPageGroup === totalGroups - 1}
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    currentPageGroup === totalGroups - 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: currentPageGroup === totalGroups - 1 ? 1 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ›
                </motion.button>
              </div>
            )}
          </>
        )}

        {/* Liste des pages */}
        <div className="space-y-2 w-full">
          <AnimatePresence mode="wait">
            {currentPages.map((page) => (
              <motion.div
                key={page.number}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  onClick={() => handlePageClick(page.path)}
                  className={`flex items-center w-full rounded-md text-md font-medium relative overflow-hidden transition-all duration-300 ${
                    location.pathname === page.path
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center w-8 h-8">
                    {expanded ? page.icon : page.number}
                  </span>
                  
                  {expanded && (
                    <span className="pr-2 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                      {page.name}
                    </span>
                  )}
                  
                  {/* Tooltip visible seulement quand non étendu */}
                  {!expanded && isHovered && (
                    <motion.span 
                      className="absolute left-full ml-2 bg-blue-600 text-white text-xs font-normal px-2 py-1 rounded whitespace-nowrap"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      {page.name}
                    </motion.span>
                  )}
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Indicateur visuel quand il y a plus de pages */}
        {!expanded && totalGroups > 1 && (
          <div className="flex justify-center w-full pt-2">
            <div className="flex space-x-1">
              {Array.from({ length: Math.min(totalGroups, 5) }, (_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === currentPageGroup ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
              {totalGroups > 5 && <span className="text-xs text-gray-400">...</span>}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;
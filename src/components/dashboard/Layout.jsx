import React, { useState } from 'react';

const Layout = ({ sidebarContent, headerContent, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-50 transform transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className=" px-4 flex-1 pt-3 h-16 bg-gray-100 border-b border-gray-900">
          <span className="font-bold text-2xl">Tatchou Marc</span>
        </div>
        <nav className="mt-5 px-4 flex-1">
          {sidebarContent}
        </nav>
        
        {/* Bouton d'aide en bas de la sidebar */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-900">
          <a href="#" className="flex items-center justify-center text-md font-medium">
            Deconnexion ?
          </a>
        </div>
      </aside>

      {/* Overlay pour mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <button 
            className="text-gray-500 focus:outline-none lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="flex items-center space-x-4">
            {headerContent}
          </div>
        </header>

        {/* Contenu */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
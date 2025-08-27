import React from 'react';
import Layout from '../../components/dashboard/Layout';

const DashboardEcommerce = () => {
  const sidebarContent = (
    <ul className="space-y-2">
      <li><a href="#" className="flex items-center px-4 py-2 text-white bg-blue-700 rounded-lg">Vue d'ensemble</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-lg">Produits</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-lg">Commandes</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-lg">Clients</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-lg">Promotions</a></li>
    </ul>
  );

  const headerContent = (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input type="text" className="w-64 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none" placeholder="Rechercher..." />
      </div>
      <button className="p-2 text-gray-500 hover:text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
      </button>
      <div className="relative">
        <button className="flex items-center focus:outline-none">
          <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">JD</span>
        </button>
      </div>
    </div>
  );

  return (
    <Layout sidebarContent={sidebarContent} headerContent={headerContent}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Cartes statistiques */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">Revenu total</h3>
              <p className="text-xl font-bold text-gray-900">$24,895</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">Nouveaux clients</h3>
              <p className="text-xl font-bold text-gray-900">356</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">Commandes</h3>
              <p className="text-xl font-bold text-gray-900">896</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">Croissance</h3>
              <p className="text-xl font-bold text-gray-900">12.5%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique des ventes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Ventes par catégorie</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            Graphique circulaire (intégrer Chart.js ou autre librairie)
          </div>
        </div>
        
        {/* Produits populaires */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Produits populaires</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded flex-shrink-0"></div>
              <div className="ml-3">
                <p className="text-sm font-medium">iPhone 13 Pro</p>
                <p className="text-xs text-gray-500">Électronique</p>
              </div>
              <div className="ml-auto">
                <p className="text-sm font-medium">$999</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded flex-shrink-0"></div>
              <div className="ml-3">
                <p className="text-sm font-medium">Samsung Galaxy</p>
                <p className="text-xs text-gray-500">Électronique</p>
              </div>
              <div className="ml-auto">
                <p className="text-sm font-medium">$899</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded flex-shrink-0"></div>
              <div className="ml-3">
                <p className="text-sm font-medium">Sneakers Nike</p>
                <p className="text-xs text-gray-500">Mode</p>
              </div>
              <div className="ml-auto">
                <p className="text-sm font-medium">$120</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardEcommerce;
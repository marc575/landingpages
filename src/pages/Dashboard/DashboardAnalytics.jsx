import React from 'react';
import Layout from '../../components/dashboard/Layout';

const DashboardAnalytics = () => {
  const sidebarContent = (
    <ul className="space-y-2">
      <li><a href="#" className="flex items-center px-4 py-2 text-white bg-blue-700 rounded-lg">Tableau de bord</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-lg">Analytics</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-lg">Rapports</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-lg">Paramètres</a></li>
    </ul>
  );

  const headerContent = (
    <div className="flex items-center">
      <div className="relative">
        <button className="flex items-center focus:outline-none">
          <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">JD</span>
        </button>
      </div>
    </div>
  );

  return (
    <Layout sidebarContent={sidebarContent} headerContent={headerContent}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cartes statistiques */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700">Ventes totales</h3>
          <p className="text-3xl font-bold text-gray-900">$45,241</p>
          <p className="text-sm text-green-500">+3.5% depuis le mois dernier</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700">Nouveaux clients</h3>
          <p className="text-3xl font-bold text-gray-900">1,254</p>
          <p className="text-sm text-green-500">+12.3% depuis le mois dernier</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700">Taux de conversion</h3>
          <p className="text-3xl font-bold text-gray-900">24.8%</p>
          <p className="text-sm text-red-500">-1.2% depuis le mois dernier</p>
        </div>
        
        {/* Graphique */}
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Ventes mensuelles</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            Graphique des ventes (intégrer Chart.js ou autre librairie)
          </div>
        </div>
        
        {/* Liste des activités récentes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Activité récente</h3>
          <ul className="space-y-4">
            <li>
              <p className="text-sm font-medium">Nouvelle commande #1234</p>
              <p className="text-xs text-gray-500">Il y a 2 minutes</p>
            </li>
            <li>
              <p className="text-sm font-medium">Utilisateur inscrit</p>
              <p className="text-xs text-gray-500">Il y a 10 minutes</p>
            </li>
            <li>
              <p className="text-sm font-medium">Paiement confirmé #1234</p>
              <p className="text-xs text-gray-500">Il y a 20 minutes</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardAnalytics;
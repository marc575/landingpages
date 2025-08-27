import React, { useState } from 'react';
import Layout from '../../components/dashboard/Layout';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Enregistrement des composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Données simulées (comme une réponse API)
const userData = {
  name: "Marie Lambert",
  email: "marie.lambert@example.com",
  avatar: "ML",
  role: "Analyste Marketing"
};

const salesData = {
  total: 45241,
  growth: 3.5,
  monthly: [12000, 19000, 15000, 28000, 22000, 30000, 35000, 40000, 38000, 42000, 45000, 48000]
};

const customersData = {
  total: 1254,
  growth: 12.3,
  newCustomers: 124,
  returningCustomers: 1130
};

const conversionData = {
  rate: 24.8,
  growth: -1.2,
  visits: 5058,
  conversions: 1254
};

const ordersData = [
  { id: 1, number: "#1234", amount: 245, status: "complété", time: "Il y a 2 minutes" },
  { id: 2, number: "#1235", amount: 512, status: "en traitement", time: "Il y a 10 minutes" },
  { id: 3, number: "#1236", amount: 89, status: "complété", time: "Il y a 20 minutes" },
  { id: 4, number: "#1237", amount: 1247, status: "complété", time: "Il y a 45 minutes" },
  { id: 5, number: "#1238", amount: 356, status: "en attente", time: "Il y a 1 heure" }
];

const activitiesData = [
  { id: 1, action: "Nouvelle commande", details: "#1234", time: "Il y a 2 minutes" },
  { id: 2, action: "Utilisateur inscrit", details: "Nouveau client", time: "Il y a 10 minutes" },
  { id: 3, action: "Paiement confirmé", details: "#1234", time: "Il y a 20 minutes" },
  { id: 4, action: "Produit ajouté", details: "Nouveau produit en stock", time: "Il y a 45 minutes" },
  { id: 5, action: "Rapport généré", details: "Rapport des ventes", time: "Il y a 1 heure" }
];

const DashboardAnalytics = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtrer les activités et commandes selon la recherche
  const filteredActivities = activitiesData.filter(activity => 
    activity.action.toLowerCase().includes(searchTerm.toLowerCase()) || 
    activity.details.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredOrders = ordersData.filter(order => 
    order.number.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Options et données pour le graphique en ligne (ventes mensuelles)
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
  };

  const lineData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Ventes mensuelles',
        data: salesData.monthly,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Options et données pour le graphique en barres (commandes par statut)
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const barData = {
    labels: ['Complétés', 'En traitement', 'En attente'],
    datasets: [
      {
        label: 'Commandes par statut',
        data: [
          ordersData.filter(order => order.status === 'complété').length,
          ordersData.filter(order => order.status === 'en traitement').length,
          ordersData.filter(order => order.status === 'en attente').length
        ],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(156, 163, 175, 0.8)'
        ],
      },
    ],
  };

  // Options et données pour le graphique en donut (types de clients)
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const doughnutData = {
    labels: ['Nouveaux clients', 'Clients de retour'],
    datasets: [
      {
        label: 'Répartition des clients',
        data: [customersData.newCustomers, customersData.returningCustomers],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const sidebarContent = (
    <ul className="space-y-2">
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-black bg-blue-100 rounded-lg">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          Tableau de bord
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-lg transition-colors">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          Analytics
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-lg transition-colors">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Rapports
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-lg transition-colors">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          Paramètres
        </a>
      </li>
    </ul>
  );

  const headerContent = (
    <div className="flex items-center justify-between w-full gap-4">
      <div className="relative w-64">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input 
          type="text" 
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600" 
          placeholder="Rechercher activités ou commandes..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            className="flex items-center focus:outline-none"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              {userData.avatar}
            </span>
          </button>
          
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                <p className="text-xs text-gray-500">{userData.email}</p>
              </div>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paramètres</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Déconnexion</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Layout sidebarContent={sidebarContent} headerContent={headerContent}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Cartes statistiques */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Ventes totales</h3>
              <p className="text-3xl font-bold text-gray-900">${salesData.total.toLocaleString()}</p>
              <p className={`text-sm ${salesData.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {salesData.growth >= 0 ? '+' : ''}{salesData.growth}% depuis le mois dernier
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Nouveaux clients</h3>
              <p className="text-3xl font-bold text-gray-900">{customersData.total.toLocaleString()}</p>
              <p className={`text-sm ${customersData.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {customersData.growth >= 0 ? '+' : ''}{customersData.growth}% depuis le mois dernier
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Taux de conversion</h3>
              <p className="text-3xl font-bold text-gray-900">{conversionData.rate}%</p>
              <p className={`text-sm ${conversionData.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {conversionData.growth >= 0 ? '+' : ''}{conversionData.growth}% depuis le mois dernier
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Graphique des ventes mensuelles */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Ventes mensuelles</h3>
          <div className="h-80">
            <Line options={lineOptions} data={lineData} />
          </div>
        </div>
        
        {/* Graphiques secondaires */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Répartition des clients</h3>
            <div className="h-64">
              <Doughnut options={doughnutOptions} data={doughnutData} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Commandes par statut</h3>
            <div className="h-64">
              <Bar options={barOptions} data={barData} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Liste des activités récentes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Activité récente</h3>
          <ul className="space-y-4">
            {filteredActivities.slice(0, 5).map(activity => (
              <li key={activity.id} className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action} <span className="text-blue-600">{activity.details}</span></p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Dernières commandes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Dernières commandes</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commande</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.slice(0, 5).map(order => (
                  <tr key={order.id}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.number}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${order.amount}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        order.status === "complété" ? "bg-green-100 text-green-800" :
                        order.status === "en traitement" ? "bg-yellow-100 text-yellow-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardAnalytics;
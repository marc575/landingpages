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
import { Doughnut, Bar, Line } from 'react-chartjs-2';

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
  name: "Pierre Martin",
  email: "pierre.martin@example.com",
  avatar: "PM",
  role: "Responsable E-commerce"
};

const revenueData = {
  total: 24895,
  growth: 3.5,
  monthly: [18000, 19500, 21000, 19800, 23400, 24895, 26200, 27500, 29000, 30500, 31200, 32500]
};

const customersData = {
  total: 356,
  growth: 12.3,
  newCustomers: 124,
  returningCustomers: 232
};

const ordersData = {
  total: 896,
  growth: 5.2,
  pending: 45,
  completed: 786,
  cancelled: 65
};

const growthData = {
  value: 12.5,
  trend: "up"
};

const productsData = [
  { id: 1, name: "iPhone 13 Pro", category: "Électronique", price: 999, sales: 145, image: "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Samsung Galaxy", category: "Électronique", price: 899, sales: 132, image: "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Sneakers Nike", category: "Mode", price: 120, sales: 98, image: "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "MacBook Air", category: "Électronique", price: 1299, sales: 76, image: "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Casque Sony", category: "Audio", price: 250, sales: 64, image: "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const categoriesData = [
  { name: "Électronique", value: 45, color: "rgba(54, 162, 235, 0.8)" },
  { name: "Mode", value: 25, color: "rgba(255, 99, 132, 0.8)" },
  { name: "Maison", value: 15, color: "rgba(75, 192, 192, 0.8)" },
  { name: "Audio", value: 10, color: "rgba(255, 159, 64, 0.8)" },
  { name: "Autre", value: 5, color: "rgba(153, 102, 255, 0.8)" }
];

const recentOrdersData = [
  { id: 1, product: "iPhone 13 Pro", customer: "Jean Dupont", date: "2023-06-15", amount: 999, status: "Livré" },
  { id: 2, product: "Samsung Galaxy", customer: "Marie Lambert", date: "2023-06-14", amount: 899, status: "Expédié" },
  { id: 3, product: "Sneakers Nike", customer: "Thomas Bernard", date: "2023-06-14", amount: 120, status: "Traitement" },
  { id: 4, product: "MacBook Air", customer: "Sophie Martin", date: "2023-06-13", amount: 1299, status: "Livré" },
  { id: 5, product: "Casque Sony", customer: "Lucie Petit", date: "2023-06-12", amount: 250, status: "Expédié" }
];

const DashboardEcommerce = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  
  // Filtrer les produits selon la recherche
  const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredOrders = recentOrdersData.filter(order => 
    order.product.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Options et données pour le graphique en donut (ventes par catégorie)
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    cutout: '70%',
  };

  const doughnutData = {
    labels: categoriesData.map(category => category.name),
    datasets: [
      {
        label: 'Ventes par catégorie',
        data: categoriesData.map(category => category.value),
        backgroundColor: categoriesData.map(category => category.color),
        borderWidth: 1,
      },
    ],
  };

  // Options et données pour le graphique en barres (produits populaires)
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
  };

  const barData = {
    labels: productsData.map(product => product.name),
    datasets: [
      {
        label: 'Ventes',
        data: productsData.map(product => product.sales),
        backgroundColor: 'rgba(79, 70, 229, 0.8)',
      },
    ],
  };

  // Options et données pour le graphique en ligne (revenu mensuel)
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
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
        label: 'Revenu mensuel',
        data: revenueData.monthly,
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        fill: true,
        tension: 0.4,
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
          Vue d'ensemble
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-lg transition-colors">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-16"></path>
          </svg>
          Produits
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-lg transition-colors">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
          Commandes
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-lg transition-colors">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          Clients
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-lg transition-colors">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          Promotions
        </a>
      </li>
    </ul>
  );

  const headerContent = (
    <div className="flex items-center justify-between w-full">
      <div className="relative w-64">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input 
          type="text" 
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600" 
          placeholder="Rechercher produits ou commandes..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            className="p-2 text-gray-500 hover:text-gray-700 relative"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
          </button>
          
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
              <div className="px-4 py-2 border-b">
                <h4 className="text-sm font-medium text-gray-900">Notifications</h4>
              </div>
              <div className="max-h-60 overflow-y-auto">
                <a href="#" className="block px-4 py-3 hover:bg-gray-100 border-b">
                  <p className="text-sm font-medium">Nouvelle commande #1234</p>
                  <p className="text-xs text-gray-500">Il y a 2 minutes</p>
                </a>
                <a href="#" className="block px-4 py-3 hover:bg-gray-100 border-b">
                  <p className="text-sm font-medium">Paiement confirmé #1235</p>
                  <p className="text-xs text-gray-500">Il y a 10 minutes</p>
                </a>
                <a href="#" className="block px-4 py-3 hover:bg-gray-100">
                  <p className="text-sm font-medium">Produit en rupture de stock</p>
                  <p className="text-xs text-gray-500">Il y a 1 heure</p>
                </a>
              </div>
              <a href="#" className="block px-4 py-2 text-sm text-center text-blue-600 hover:bg-gray-100">
                Voir toutes les notifications
              </a>
            </div>
          )}
        </div>
        
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
              <p className="text-xl font-bold text-gray-900">${revenueData.total.toLocaleString()}</p>
              <p className={`text-xs ${revenueData.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {revenueData.growth >= 0 ? '+' : ''}{revenueData.growth}% depuis le mois dernier
              </p>
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
              <p className="text-xl font-bold text-gray-900">{customersData.total}</p>
              <p className={`text-xs ${customersData.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {customersData.growth >= 0 ? '+' : ''}{customersData.growth}% depuis le mois dernier
              </p>
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
              <p className="text-xl font-bold text-gray-900">{ordersData.total}</p>
              <p className={`text-xs ${ordersData.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {ordersData.growth >= 0 ? '+' : ''}{ordersData.growth}% depuis le mois dernier
              </p>
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
              <p className="text-xl font-bold text-gray-900">{growthData.value}%</p>
              <p className={`text-xs ${growthData.trend === "up" ? 'text-green-500' : 'text-red-500'}`}>
                {growthData.trend === "up" ? '↑ Hausse' : '↓ Baisse'} sur la période
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Graphique des ventes par catégorie */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Ventes par catégorie</h3>
          <div className="h-80">
            <Doughnut options={doughnutOptions} data={doughnutData} />
          </div>
        </div>
        
        {/* Graphique des produits populaires */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Produits populaires</h3>
          <div className="h-80">
            <Bar options={barOptions} data={barData} />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenu mensuel */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Revenu mensuel</h3>
          <div className="h-80">
            <Line options={lineOptions} data={lineData} />
          </div>
        </div>
        
        {/* Produits populaires */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Produits populaires</h3>
          <div className="space-y-4">
            {filteredProducts.slice(0, 5).map(product => (
              <div key={product.id} className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm font-medium">${product.price}</p>
                  <p className="text-xs text-gray-500">{product.sales} ventes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Commandes récentes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.product}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${order.amount}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === "Livré" ? "bg-green-100 text-green-800" :
                      order.status === "Expédié" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
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
    </Layout>
  );
};

export default DashboardEcommerce;
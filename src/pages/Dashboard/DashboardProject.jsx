import React, { useState } from 'react';
import Layout from '../../components/dashboard/Layout';

// Données simulées (comme une réponse API)
const userData = {
  name: "Jean Dupont",
  email: "jean.dupont@example.com",
  avatar: "JD",
  role: "Chef de projet"
};

const projectsData = [
  {
    id: 1,
    title: "Refonte site web",
    description: "Refonte complète du site corporate avec nouvelle identité visuelle",
    progress: 65,
    status: "En cours",
    deadline: "12/06/2023",
    team: [
      { id: 1, name: "Marie", color: "bg-blue-500" },
      { id: 2, name: "Paul", color: "bg-green-500" },
      { id: 3, name: "Sophie", color: "bg-yellow-500" }
    ]
  },
  {
    id: 2,
    title: "Application mobile",
    description: "Développement d'une application mobile cross-platform",
    progress: 20,
    status: "En attente",
    deadline: "25/07/2023",
    team: [
      { id: 4, name: "Luc", color: "bg-purple-500" },
      { id: 5, name: "Émilie", color: "bg-pink-500" }
    ]
  },
  {
    id: 3,
    title: "Campagne marketing",
    description: "Lancement de la campagne print et digital pour le nouveau produit",
    progress: 100,
    status: "Terminé",
    deadline: "15/05/2023",
    team: [
      { id: 6, name: "Thomas", color: "bg-red-500" },
      { id: 7, name: "Laura", color: "bg-indigo-500" },
      { id: 8, name: "Marc", color: "bg-teal-500" }
    ]
  }
];

const tasksData = [
  {
    id: 1,
    title: "Intégration maquette accueil",
    project: "Refonte site web",
    priority: "Haute",
    deadline: "15/06/2023"
  },
  {
    id: 2,
    title: "Rédaction cahier des charges",
    project: "Application mobile",
    priority: "Moyenne",
    deadline: "20/06/2023"
  },
  {
    id: 3,
    title: "Réunion client",
    project: "Refonte site web",
    priority: "Basse",
    deadline: "10/06/2023"
  }
];

// Composant principal DashboardProject
const DashboardProject = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtrer les projets selon la recherche
  const filteredProjects = projectsData.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredTasks = tasksData.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    task.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sidebarContent = (
    <ul className="space-y-2">
      <li><a href="#" className="flex items-center px-4 py-2 font-medium hover:text-white bg-blue-100 rounded-lg">Mes projets</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 font-medium hover:text-white hover:bg-purple-700 rounded-lg">Tâches</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 font-medium hover:text-white hover:bg-purple-700 rounded-lg">Équipe</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 font-medium hover:text-white hover:bg-purple-700 rounded-lg">Calendrier</a></li>
      <li><a href="#" className="flex items-center px-4 py-2 font-medium hover:text-white hover:bg-purple-700 rounded-lg">Documents</a></li>
    </ul>
  );

  const headerContent = (
    <>
      <div className="relative w-64">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input 
          type="text" 
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600" 
          placeholder="Rechercher un projet..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          className="px-4 py-2 bg-purple-700 hidden md:block text-white rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-colors"
          onClick={() => setIsProjectModalOpen(true)}
        >
          Nouveau projet
        </button>
        
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
    </>
  );

  return (
    <Layout sidebarContent={sidebarContent} headerContent={headerContent}>
      {/* Modal pour nouveau projet */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Créer un nouveau projet</h3>
              <button 
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setIsProjectModalOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom du projet</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" 
                  placeholder="Nom du projet"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" 
                  rows="3"
                  placeholder="Description du projet"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date d'échéance</label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" 
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button 
                  type="button"
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={() => setIsProjectModalOpen(false)}
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-white bg-purple-700 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Mes projets</h2>
        <p className="text-gray-600">Gérez vos projets et suivez leur progression</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">{project.title}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                project.status === "En cours" ? "bg-blue-100 text-blue-800" :
                project.status === "En attente" ? "bg-yellow-100 text-yellow-800" :
                "bg-green-100 text-green-800"
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                <span>Progression</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    project.status === "En cours" ? "bg-blue-600" :
                    project.status === "En attente" ? "bg-yellow-500" :
                    "bg-green-500"
                  }`} 
                  style={{width: `${project.progress}%`}}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.team.map(member => (
                  <div 
                    key={member.id} 
                    className={`w-8 h-8 rounded-full border-2 border-white ${member.color} flex items-center justify-center text-white text-xs font-medium`}
                    title={member.name}
                  >
                    {member.name.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {project.status === "Terminé" ? `Terminé le: ${project.deadline}` : `Échéance: ${project.deadline}`}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Tâches à venir</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tâche</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projet</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priorité</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Échéance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTasks.map(task => (
                <tr key={task.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{task.project}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === "Haute" ? "bg-red-100 text-red-800" :
                      task.priority === "Moyenne" ? "bg-yellow-100 text-yellow-800" :
                      "bg-blue-100 text-blue-800"
                    }`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{task.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardProject;
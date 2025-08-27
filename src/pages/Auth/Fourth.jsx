import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const Fourth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    agreeToTerms: false
  });

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log(formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Connexion avec ${provider}`);
    // Logique de connexion sociale
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-500 p-4">
      <div className="w-full max-w-md">
        {/* Carte principale */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          {/* En-tête de la carte */}
          <div className="px-8 py-6 border-b border-gray-100">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    {isLogin ? 'Content de vous revoir !' : 'Créez votre compte'}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    {isLogin ? "Accédez à votre espace personnel" : "Rejoignez-nous en quelques secondes"}
                </p>
                
                <p className="mt-2 text-sm text-gray-600">
                    {isLogin ? "Ou " : "Déjà inscrit? "}
                    <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    onClick={toggleMode}
                    >
                    {isLogin ? 'créez un nouveau compte' : 'connectez-vous'}
                    </button>
                </p>
            </div>
          </div>
          
          {/* Contenu de la carte */}
          <div className="px-8 py-6">
            {/* Boutons de connexion sociale */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSocialLogin('google')}
                  className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2">Google</span>
                </button>

                <button
                  onClick={() => handleSocialLogin('linkedin')}
                  className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="ml-2">LinkedIn</span>
                </button>

                <button
                  onClick={() => handleSocialLogin('apple')}
                  className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
                  </svg>
                  <span className="ml-2">Apple</span>
                </button>

                <button
                  onClick={() => handleSocialLogin('facebook')}
                  className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>

              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Ou avec email
                  </span>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="adresse@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Votre mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required={!isLogin}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Confirmez votre mot de passe"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              )}

              {isLogin ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="rememberMe"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Se souvenir de moi
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Mot de passe oublié?
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <input
                    id="agree-to-terms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor="agree-to-terms" className="ml-2 block text-sm text-gray-700">
                    J'accepte les <a href="#" className="text-indigo-600 hover:text-indigo-500">conditions d'utilisation</a> et la <a href="#" className="text-indigo-600 hover:text-indigo-500">politique de confidentialité</a>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-colors"
              >
                {isLogin ? 'Se connecter' : "S'inscrire"}
              </button>
            </form>
          </div>
        </div>
        
        {/* Informations supplémentaires en bas de page */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-50">
            © 2025 Tatchou Marc. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
    
    <Sidebar />
    </>
  );
};

export default Fourth;
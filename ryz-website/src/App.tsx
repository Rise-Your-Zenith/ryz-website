import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero'; // <--- Importando a Hero

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-ryz-light dark:bg-ryz-dark transition-colors duration-300">
      
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main>
        {/* Seção Hero Real */}
        <Hero />

        {/* Espaços temporários para as próximas seções */}
        <section id="sobre" className="min-h-screen flex items-center justify-center border-t border-gray-200 dark:border-white/5">
          <h2 className="text-4xl font-clash dark:text-white">Em breve: Sobre Nós (Founders)</h2>
        </section>
        
        <section id="precos" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black/20">
          <h2 className="text-4xl font-clash dark:text-white">Em breve: Preços</h2>
        </section>

      </main>
    </div>
  );
}

export default App;
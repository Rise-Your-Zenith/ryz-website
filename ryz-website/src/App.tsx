import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Founders from './sections/Founders'; // <--- Importar aqui

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
        <Hero />
        
        {/* Seção Sobre Nós adicionada aqui */}
        <Founders />

        {/* Placeholder para a próxima seção */}
        <section id="processo" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black/20">
          <h2 className="text-4xl font-clash dark:text-white">Em breve: Processo & Timeline</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
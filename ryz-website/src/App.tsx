import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; // <--- Importar aqui

function App() {
  const [theme, setTheme] = useState(() => {
    // Verifica preferência do sistema ou salvo no localStorage (opcional)
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
    <div className="min-h-screen w-full relative overflow-x-hidden transition-colors duration-300">
      
      {/* Navbar Ativa */}
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="pt-20"> {/* Padding top para o conteúdo não ficar embaixo da navbar fixa */}
        
        {/* Placeholder Temporário da Hero Section */}
        <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-4">
           <h1 className="font-clash text-5xl md:text-7xl font-bold mb-4">
             O ÁPICE DO SEU <span className="text-ryz-blue">NEGÓCIO</span>
           </h1>
           <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
             Desenvolvimento Web, Sistemas e IA com a RYZ.
           </p>
        </section>

        {/* Secões Vazias para testar o Scroll */}
        <section id="sobre" className="h-screen bg-gray-100 dark:bg-black/20 flex items-center justify-center">
          <h2 className="text-4xl font-clash">Sobre Nós</h2>
        </section>
        
        <section id="processo" className="h-screen flex items-center justify-center">
          <h2 className="text-4xl font-clash">Processo</h2>
        </section>

      </main>
    </div>
  );
}

export default App;
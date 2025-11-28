import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits'; // <--- Importar aqui
import Founders from './sections/Founders';
import Process from './components/Process';
import Portfolio from './sections/Portfolio';
import Pricing from './components/Pricing';
import Contact from './sections/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
        
        {/* Inserido aqui: Primeiro conscientizamos o cliente */}
        <Benefits />
        
        <Founders />
        <Process />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
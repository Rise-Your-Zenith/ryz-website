import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Founders from './sections/Founders';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './sections/Contact'; // <--- Importação Final

function App() {
  const [theme, setTheme] = useState(() => {
    // Verifica preferência salva ou do sistema
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
        <Founders />
        <Process />
        <Pricing />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
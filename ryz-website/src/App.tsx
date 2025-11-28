import { useState, useEffect } from 'react';

// Aqui importaremos os componentes depois
// import Navbar from './components/Navbar';
// import Hero from './sections/Hero';

function App() {
  // Lógica do Tema (Dark/Light)
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
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Navbar vai aqui */}
      {/* <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} /> */}
      
      <main>
        {/* Seções vão aqui */}
        <div className="h-screen flex items-center justify-center">
           <h1 className="font-clash text-5xl font-bold">
             O ÁPICE DO SEU <span className="text-ryz-blue">NEGÓCIO</span>
           </h1>
        </div>
      </main>
    </div>
  );
}

export default App;
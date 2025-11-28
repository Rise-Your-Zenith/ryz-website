import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleTheme, isDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para detectar o scroll e ativar o modo "Glass"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Processo', href: '#processo' },
    { name: 'Preços', href: '#precos' },
    { name: 'Portfólio', href: '#portfolio' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
        ${isScrolled 
          ? 'bg-white/70 dark:bg-ryz-dark/70 backdrop-blur-md border-gray-200/20 dark:border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* LOGO */}
          <a href="#" className="font-clash text-3xl font-bold tracking-wider hover:scale-105 transition-transform">
             {isDarkMode ? (
               <span className="text-white">RYZ<span className="text-ryz-blue">.</span></span>
             ) : (
               <span className="text-ryz-dark">RYZ<span className="text-ryz-blue">.</span></span>
             )}
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="relative group text-gray-700 dark:text-gray-300 hover:text-ryz-blue dark:hover:text-white transition-colors text-sm uppercase tracking-wide"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ryz-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Divisor vertical */}
            <div className="h-6 w-px bg-gray-300 dark:bg-white/20"></div>

            {/* Botão de Tema */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Alternar Tema"
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-ryz-dark" />}
            </button>

            {/* CTA Button */}
            <a href="#contato">
              <button className="bg-ryz-blue hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-ryz-blue/20 transition-all hover:shadow-ryz-blue/40 transform hover:-translate-y-0.5 text-sm uppercase">
                Contato
              </button>
            </a>
          </div>

          {/* MOBILE TOGGLES */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="p-2">
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-ryz-dark" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1"
            >
              {isMobileMenuOpen 
                ? <X className="dark:text-white text-ryz-dark" size={28} /> 
                : <Menu className="dark:text-white text-ryz-dark" size={28} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-ryz-dark/95 backdrop-blur-xl pt-24 px-6 flex flex-col items-center space-y-8"
          >
             {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-clash font-bold dark:text-white text-ryz-dark hover:text-ryz-blue transition-colors"
                >
                  {item.name}
                </a>
             ))}
             <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs">
                <button className="w-full bg-ryz-blue text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-ryz-blue/30">
                  Entrar em Contato
                </button>
             </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
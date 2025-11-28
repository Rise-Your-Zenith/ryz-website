import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleTheme, isDarkMode }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Processo', href: '#processo' },
    { name: 'Preços', href: '#precos' },
  ];

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 
        bg-white/80 dark:bg-ryz-dark/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/20
        rounded-full px-6 py-3 transition-all duration-300"
      >
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <a href="#" className="font-clash text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity pl-2">
             {isDarkMode ? (
               <span className="text-white">RYZ<span className="text-ryz-blue">.</span></span>
             ) : (
               <span className="text-ryz-dark">RYZ<span className="text-ryz-blue">.</span></span>
             )}
          </a>

          {/* DESKTOP MENU - Centralizado */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-ryz-blue dark:hover:text-white transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE (Theme + CTA) */}
          <div className="hidden md:flex items-center gap-4 pr-1">
            
            {/* Botão de Tema */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-ryz-dark" />}
            </button>

            {/* CTA Button "Match IA" style */}
            <a href="#contato">
              <button className="bg-ryz-blue hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-ryz-blue/30 transition-all hover:scale-105 text-sm">
                Contato
              </button>
            </a>
          </div>

          {/* MOBILE TOGGLES */}
          <div className="md:hidden flex items-center gap-3">
             <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-ryz-dark" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen 
                ? <X className="dark:text-white text-ryz-dark" size={24} /> 
                : <Menu className="dark:text-white text-ryz-dark" size={24} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-white dark:bg-ryz-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col items-center space-y-4"
          >
             {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2 text-lg font-medium dark:text-white text-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
             ))}
             <div className="w-full h-px bg-gray-100 dark:bg-white/10 my-2"></div>
             <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                <button className="w-full bg-ryz-blue text-white py-3 rounded-xl font-bold shadow-lg shadow-ryz-blue/20">
                  Contato
                </button>
             </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
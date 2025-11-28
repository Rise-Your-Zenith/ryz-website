import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ryz-light dark:bg-ryz-dark transition-colors duration-300">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glow Azul Central (Aurora Effect) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ryz-blue/20 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge Tech */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-ryz-blue/20 backdrop-blur-sm mb-8"
        >
          <Sparkles size={16} className="text-ryz-blue" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Inovação em Web & IA
          </span>
        </motion.div>

        {/* Headline Principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-clash text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-gray-900 dark:text-white">ELEVE SUA EMPRESA</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ryz-blue to-purple-500">
            AO ÁPICE
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A <span className="font-bold text-ryz-blue">RYZ</span> cria sites de alta performance, sistemas complexos e soluções de Inteligência Artificial para colocar o seu negócio no topo do mercado.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contato">
            <button className="group relative px-8 py-4 bg-ryz-blue text-white rounded-xl font-bold text-lg overflow-hidden shadow-lg shadow-ryz-blue/30 transition-all hover:scale-105 hover:shadow-ryz-blue/50">
              <span className="relative z-10 flex items-center gap-2">
                Começar Projeto <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Efeito de brilho no botão */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </a>

          <a href="#portfolio">
            <button className="px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white rounded-xl font-medium text-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center gap-2">
              <Code2 size={20} />
              Ver Portfólio
            </button>
          </a>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-ryz-blue to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
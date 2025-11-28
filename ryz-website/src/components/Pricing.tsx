import { motion } from 'framer-motion';
import { Check, X, Server, Code2, Zap } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="precos" className="relative py-24 bg-ryz-light dark:bg-ryz-dark transition-colors duration-300 overflow-hidden">
      
      {/* Background Decorativo (Glow Central) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ryz-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-clash text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Investimento no seu <span className="text-ryz-blue">Sucesso</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Escolha o modelo ideal para o momento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* PLANO 1: HOSTINGER (BÁSICO) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md flex flex-col"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-200 dark:bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <Server className="text-gray-600 dark:text-gray-300" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Plano Essencial</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Para quem está começando e precisa de agilidade.</p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold font-clash text-gray-900 dark:text-white">R$ 1.000</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">/ projeto</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Check size={18} className="text-green-500" /> Site Profissional (Hostinger)
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Check size={18} className="text-green-500" /> Design Responsivo
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Check size={18} className="text-green-500" /> Entrega Rápida
              </li>
              {/* Pontos Negativos (Diferenciais) */}
              <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500 line-through decoration-red-500/50">
                <X size={18} className="text-red-500" /> Acesso ao Código Fonte
              </li>
              <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500 line-through decoration-red-500/50">
                <X size={18} className="text-red-500" /> Escalabilidade Total
              </li>
            </ul>

            <button className="w-full py-3 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              Selecionar Básico
            </button>
          </motion.div>

          {/* PLANO 2: CÓDIGO PRÓPRIO (PREMIUM) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-3xl bg-white/80 dark:bg-[#1a232e]/80 border-2 border-ryz-blue shadow-[0_0_40px_rgba(50,65,238,0.15)] backdrop-blur-xl flex flex-col transform md:-translate-y-4"
          >
            {/* Badge de Recomendado */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ryz-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-ryz-blue/40 flex items-center gap-2">
              <Zap size={14} fill="white" /> RECOMENDADO
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-ryz-blue/20 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="text-ryz-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Custom Code (Pro)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Propriedade total, performance máxima e sem limites.</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold font-clash text-gray-900 dark:text-white">R$ 2.000</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">/ projeto</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-700 dark:text-white font-medium">
                <div className="p-1 rounded-full bg-ryz-blue/20"><Check size={14} className="text-ryz-blue" /></div>
                Código Fonte 100% Seu
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-white font-medium">
                <div className="p-1 rounded-full bg-ryz-blue/20"><Check size={14} className="text-ryz-blue" /></div>
                Performance Extrema (React/Next)
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-white font-medium">
                <div className="p-1 rounded-full bg-ryz-blue/20"><Check size={14} className="text-ryz-blue" /></div>
                Integração com IA Personalizada
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-white font-medium">
                <div className="p-1 rounded-full bg-ryz-blue/20"><Check size={14} className="text-ryz-blue" /></div>
                Sem mensalidade de plataforma
              </li>
            </ul>

            <a href="#contato">
              <button className="w-full py-4 rounded-xl bg-ryz-blue text-white font-bold text-lg shadow-xl shadow-ryz-blue/30 hover:shadow-ryz-blue/50 hover:scale-[1.02] transition-all">
                Quero o Site Completo
              </button>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
import { motion } from 'framer-motion';
import { ClipboardList, Palette, Code2, Bot, Rocket } from 'lucide-react';

const steps = [
  { icon: <ClipboardList size={24} />, title: "1. Briefing & Estratégia", desc: "Entendemos profundamente seu modelo de negócio e objetivos." },
  { icon: <Palette size={24} />, title: "2. UI/UX Design", desc: "Prototipagem visual moderna focada na experiência do utilizador." },
  { icon: <Code2 size={24} />, title: "3. Desenvolvimento", desc: "Código limpo e performático (React + TS) para máxima velocidade." },
  { icon: <Bot size={24} />, title: "4. Integração IA", desc: "Implementação de inteligência artificial para automação do negócio." },
  { icon: <Rocket size={24} />, title: "5. Deploy", desc: "Configuração de servidores e lançamento oficial do projeto." }
];

const Process = () => {
  return (
    <section id="processo" className="relative py-24 overflow-hidden bg-ryz-light dark:bg-ryz-dark transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="font-clash text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Nosso <span className="text-ryz-blue">Processo</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Transformamos ideias em realidade digital.</p>
        </div>

        <div className="hidden md:block absolute left-1/2 top-32 bottom-10 w-1 bg-ryz-blue/20 dark:bg-white/10 -translate-x-1/2 rounded-full">
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-ryz-blue to-transparent opacity-50"></div>
        </div>

        <div className="space-y-12 md:space-y-0 relative">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`md:flex items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="md:w-[45%] mb-8 md:mb-0">
                  {/* CARD ATUALIZADO: Borda azulada leve no Light Mode */}
                  <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-ryz-blue/10 dark:border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:border-ryz-blue/30 transition-all duration-300">
                    <span className="absolute top-2 right-4 text-6xl font-clash font-bold text-gray-100 dark:text-white/5 pointer-events-none">
                      0{index + 1}
                    </span>
                    <div className="w-12 h-12 bg-ryz-blue/10 rounded-xl flex items-center justify-center text-ryz-blue mb-4 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold font-clash text-gray-800 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-ryz-light dark:bg-ryz-dark border-4 border-ryz-blue items-center justify-center shadow-[0_0_15px_rgba(50,65,238,0.5)] z-10">
                   <div className="w-2 h-2 bg-ryz-blue rounded-full"></div>
                </div>
                <div className="md:w-[45%]"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
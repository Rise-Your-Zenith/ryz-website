import { motion } from 'framer-motion';
import { ClipboardList, Palette, Code2, Bot, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={24} />,
    title: "1. Briefing & Estratégia",
    desc: "Entendemos profundamente seu modelo de negócio, público-alvo e objetivos para traçar a rota do sucesso."
  },
  {
    icon: <Palette size={24} />,
    title: "2. UI/UX Design",
    desc: "Criamos protótipos visuais modernos e intuitivos. Aqui a identidade da sua marca ganha vida na tela."
  },
  {
    icon: <Code2 size={24} />,
    title: "3. Desenvolvimento",
    desc: "Codificação limpa e performática usando tecnologias de ponta (React, TS) garantindo velocidade e segurança."
  },
  {
    icon: <Bot size={24} />,
    title: "4. Integração IA",
    desc: "O diferencial RYZ. Implementamos soluções de Inteligência Artificial para automatizar ou otimizar seu sistema."
  },
  {
    icon: <Rocket size={24} />,
    title: "5. Deploy & Lançamento",
    desc: "Configuração de servidores, otimização de SEO e colocação do seu projeto no ar para o mundo ver."
  }
];

const Process = () => {
  return (
    <section id="processo" className="relative py-24 overflow-hidden bg-ryz-light dark:bg-ryz-dark transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Título da Seção */}
        <div className="text-center mb-20">
          <h2 className="font-clash text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Nosso <span className="text-ryz-blue">Processo</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Como transformamos ideias em realidade digital.</p>
        </div>

        {/* Linha Central (Apenas Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-32 bottom-10 w-1 bg-gray-200 dark:bg-white/10 -translate-x-1/2 rounded-full">
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-ryz-blue to-transparent opacity-50"></div>
        </div>

        {/* Steps Container */}
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
                
                {/* Lado do Conteúdo (Card) */}
                <div className="md:w-[45%] mb-8 md:mb-0">
                  <div className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:border-ryz-blue/30 transition-all duration-300">
                    
                    {/* Número de fundo (marca d'água) */}
                    <span className="absolute top-2 right-4 text-6xl font-clash font-bold text-gray-200/50 dark:text-white/5 pointer-events-none">
                      0{index + 1}
                    </span>

                    <div className="w-12 h-12 bg-ryz-blue/10 rounded-xl flex items-center justify-center text-ryz-blue mb-4 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold font-clash dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Bolinha Central (Conector) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-ryz-light dark:bg-ryz-dark border-4 border-ryz-blue items-center justify-center shadow-[0_0_15px_rgba(50,65,238,0.5)] z-10">
                   <div className="w-2 h-2 bg-ryz-blue rounded-full"></div>
                </div>

                {/* Lado Vazio (para equilíbrio do grid) */}
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
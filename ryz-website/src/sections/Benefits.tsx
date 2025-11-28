import { motion } from 'framer-motion';
import { Globe, Clock, TrendingUp, ShieldCheck } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* --- BACKGROUND SEAMLESS (Fundo Contínuo) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* LIGHT MODE: Do Cinza (Hero) -> Branco (Destaque) -> Cinza (Founders) */}
        <div className="absolute inset-0 bg-gradient-to-b from-ryz-light via-white to-ryz-light dark:hidden"></div>
        
        {/* DARK MODE: Do Slate (Hero) -> Azul Noturno Suave -> Slate (Founders) */}
        {/* Usamos tons próximos ao #293542 (ryz-dark) para não criar contraste agressivo */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-ryz-dark via-[#1e2530] to-ryz-dark"></div>
        
        {/* Grid Decorativo (Bem suave) */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#3241EE 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-ryz-blue uppercase bg-ryz-blue/10 rounded-full"
          >
            Por que ter um site?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-clash text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Sua empresa não pode ser <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ryz-blue to-cyan-500">Invisível Digitalmente</span>
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Redes sociais são terreno alugado. Um site é sua sede própria, onde você tem controle total e passa autoridade real.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: Credibilidade */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // Ajuste no Background dos Cards para combinar com o novo fundo suave
            className="md:col-span-2 group relative overflow-hidden rounded-3xl p-8 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-ryz-blue/30 backdrop-blur-sm transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 dark:bg-ryz-blue/20 rounded-xl flex items-center justify-center text-ryz-blue mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-clash font-bold text-gray-900 dark:text-white mb-4">
                Credibilidade Instantânea
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                <span className="font-bold text-ryz-blue">75% dos consumidores</span> julgam a credibilidade de uma empresa pelo site. Sem um domínio próprio, seu negócio parece amador aos olhos do cliente premium.
              </p>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-ryz-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-ryz-blue/10 transition-colors duration-500"></div>
          </motion.div>

          {/* CARD 2: Vendas 24/7 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-ryz-blue to-blue-700 text-white shadow-xl shadow-ryz-blue/20"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                  <Clock size={28} />
                </div>
                <h3 className="text-2xl font-clash font-bold mb-4">Venda 24h</h3>
                <p className="text-blue-100 leading-relaxed">
                  Sua loja física fecha. O Instagram limita o alcance. Seu site coleta leads e apresenta seus serviços enquanto você dorme.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-1/2 translate-x-1/2"></div>
          </motion.div>

          {/* CARD 3: Alcance */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl p-8 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-ryz-blue/30 backdrop-blur-sm transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-clash font-bold text-gray-900 dark:text-white mb-4">
                Alcance Global
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Com um site otimizado (SEO), você aparece no Google exatamente quando o cliente está procurando sua solução.
              </p>
            </div>
          </motion.div>

          {/* CARD 4: Dados e Controle */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl p-8 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-ryz-blue/30 backdrop-blur-sm transition-all duration-300 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-clash font-bold text-gray-900 dark:text-white mb-4">
                Controle dos Dados
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                No Instagram, o algoritmo manda. No site, você manda. Capture e-mails, instale Pixel e entenda exatamente quem é seu público.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 h-32 bg-white/50 dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/5 p-4 flex items-end gap-2 justify-between">
              <div className="w-1/4 h-[40%] bg-ryz-blue/30 rounded-t-lg"></div>
              <div className="w-1/4 h-[60%] bg-ryz-blue/50 rounded-t-lg"></div>
              <div className="w-1/4 h-[30%] bg-ryz-blue/30 rounded-t-lg"></div>
              <div className="w-1/4 h-[85%] bg-ryz-blue rounded-t-lg relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-ryz-blue">+120%</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
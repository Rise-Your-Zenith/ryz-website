import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contato" className="relative bg-white dark:bg-[#0f1216] pt-24 pb-12 transition-colors duration-300">
      
      {/* Divisor Gradient Superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ryz-blue/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* LADO ESQUERDO: Informações e CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-clash text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Vamos construir o <br />
              <span className="text-ryz-blue">futuro</span> juntos?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-md leading-relaxed">
              Seu projeto merece a excelência técnica e a visão estratégica da RYZ. Entre em contato e receba uma proposta personalizada em até 24h.
            </p>

            <div className="space-y-6">
              <a href="mailto:contato@ryz.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-ryz-blue/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-ryz-blue/10 flex items-center justify-center text-ryz-blue group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Fale conosco via E-mail</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">contato@ryz.com</p>
                </div>
              </a>

              <a href="https://wa.me/" className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-ryz-blue/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">WhatsApp Comercial</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">+55 (11) 99999-9999</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* LADO DIREITO: Formulário Profissional */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-[#1a202c]/50 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/5 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Seu Nome</label>
                  <input type="text" placeholder="João Silva" className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ryz-blue/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Empresa</label>
                  <input type="text" placeholder="Sua Empresa Ltda" className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ryz-blue/50 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">E-mail Corporativo</label>
                <input type="email" placeholder="joao@empresa.com" className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ryz-blue/50 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Como podemos ajudar?</label>
                <textarea rows={4} placeholder="Descreva brevemente seu projeto..." className="w-full bg-white dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ryz-blue/50 transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-ryz-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-ryz-blue/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                Enviar Solicitação <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* FOOTER BASE */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} RYZ Agency. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ryz-blue transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-ryz-blue transition-colors">Política de Privacidade</a>
            <div className="flex items-center gap-1">
               <MapPin size={14} /> São Paulo, BR
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
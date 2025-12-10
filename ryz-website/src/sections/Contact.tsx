import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ArrowRight, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contato" className="relative pt-32 pb-10 overflow-hidden">
      
      {/* --- BACKGROUND GRADIENTE (A Mágica acontece aqui) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Light Mode: Do cinza claro (da seção anterior) para um azul muito suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-ryz-light via-white to-ryz-blue/10 dark:hidden"></div>
        
        {/* Dark Mode: Do cinza escuro (da seção anterior) para um preto azulado profundo */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-ryz-dark via-[#1a1f2e] to-[#050505]"></div>
        
        {/* Glow final no rodapé para dar profundidade */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-ryz-blue/20 dark:bg-ryz-blue/10 blur-[100px] rounded-t-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-clash text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Pronto para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-ryz-blue to-cyan-500">Próximo Nível?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Sem burocracia. Fale diretamente conosco e vamos tirar sua ideia do papel hoje mesmo.
          </p>
        </motion.div>

        {/* CARTÃO DE CTA WHATSAPP (Vidro Fosco Colorido) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group bg-gradient-to-br from-ryz-blue to-blue-700 rounded-3xl p-10 md:p-14 shadow-[0_20px_50px_-12px_rgba(50,65,238,0.5)] overflow-hidden mb-20 hover:scale-[1.02] transition-transform duration-300"
        >
          {/* Efeitos dentro do card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/30 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left text-white">
              <h3 className="text-3xl font-clash font-bold mb-2">WhatsApp Comercial</h3>
              <p className="text-blue-100 text-lg opacity-90">Resposta rápida e atendimento personalizado.</p>
            </div>
            
            <a 
              href="https://wa.me/5519983600437" // Coloque seu número aqui
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-ryz-blue px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <MessageCircle size={24} />
              Orçamento
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Links Secundários (Redes e Email) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-2 mb-12">
          
          <a href="mailto:ryzsuporte@outlook.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-ryz-blue dark:hover:text-white transition-colors group">
            <div className="p-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full group-hover:border-ryz-blue/50 transition-colors">
              <Mail size={20} />
            </div>
            <span className="font-medium"></span>
          </a>

          <div className="flex gap-2">
             <a href="#" className="p-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-400 hover:text-pink-600 hover:border-pink-600/30 transition-all">
               <Instagram size={20} />
             </a>

          </div>

        </div>

        {/* Footer Bottom (Discreto) */}
        <div className="border-t border-gray-200/50 dark:border-white/5 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} RYZ | Rise Your Zenith.</p>
          
          <div className="flex items-center gap-2">
             <MapPin size={14} />
             <span>São Paulo, Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
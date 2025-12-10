import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppBtn = () => {
  return (
    <motion.a
      href="https://wa.me/5519983600437" // SEU NUMERO AQUI
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }} // Aparece depois de 1 segundo
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip (Texto que aparece ao lado) */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco agora
        {/* Triangulozinho do tooltip */}
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-l-8 border-l-white dark:border-l-gray-800 border-y-8 border-y-transparent border-r-0"></span>
      </span>

      {/* Botão Principal */}
      <div className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 flex items-center justify-center">
        <MessageCircle size={28} fill="white" className="text-white" />
      </div>
      
      {/* Onda de pulso (Animação para chamar atenção) */}
      <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75 -z-10"></div>
    </motion.a>
  );
};

export default WhatsAppBtn;
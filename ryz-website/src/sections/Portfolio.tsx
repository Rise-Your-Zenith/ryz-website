import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

// DADOS DOS PROJETOS (Substitua depois pelos reais)
const projects = [
  {
    title: "E-commerce Ultra Rápido",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind"],
    description: "Loja virtual completa com checkout transparente e painel administrativo customizado.",
    links: { live: "#", repo: "#" }
  },
  {
    title: "Dashboard Financeiro AI",
    category: "SaaS & IA",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Python", "Machine Learning"],
    description: "Sistema que prevê tendências de gastos usando algoritmos de IA proprietários.",
    links: { live: "#", repo: "#" }
  },
  {
    title: "Landing Page Imobiliária",
    category: "Design & UX",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    tags: ["Framer Motion", "Vite", "SEO"],
    description: "Site de alta conversão para lançamentos imobiliários de luxo.",
    links: { live: "#", repo: "#" }
  },
  {
    title: "App de Agendamento",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop",
    tags: ["TypeScript", "Node.js", "Postgres"],
    description: "Solução para clínicas médicas gerenciarem pacientes e consultas.",
    links: { live: "#", repo: "#" }
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 bg-ryz-light dark:bg-ryz-dark transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-clash text-4xl md:text-5xl font-bold dark:text-white mb-2">
              Projetos em <span className="text-ryz-blue">Destaque</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Soluções reais que geram resultados reais.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-ryz-blue font-bold hover:gap-4 transition-all"
          >
            Ver Github da Agência <ArrowRightIcon />
          </motion.button>
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-ryz-blue/30 transition-all duration-300"
            >
              
              {/* Imagem com Zoom Effect */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-ryz-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[2px]">
                   <a href={project.links.live} className="px-6 py-3 bg-white text-ryz-blue rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                     <ExternalLink size={18} /> Visitar Site
                   </a>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-ryz-blue uppercase tracking-wider mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-clash font-bold text-gray-900 dark:text-white group-hover:text-ryz-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a href={project.links.repo} className="p-2 text-gray-400 hover:text-ryz-blue transition-colors">
                    <Github size={20} />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-lg flex items-center gap-1">
                      <Layers size={10} /> {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Ícone Auxiliar
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Portfolio;
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import HenriqueImg from '../assets/henrique.png';
import RaulImg from '../assets/raul.png'

const founders = [
  {
    name: 'Henrique Martins',
    role: 'Co-Founder & Tech Lead',
    description: 'Especialista em transformar visões de negócio em arquiteturas digitais escaláveis. Focado em inovação e estratégias de crescimento.',
    image: HenriqueImg, 
    tags: ['Business', 'Fullstack', 'Strategy'],
    social: { linkedin: '#', instagram: '#' }
  },
  {
    name: 'Raul Gomes',
    role: 'Co-Founder & AI Developer',
    description: 'Mente analítica por trás das nossas soluções de IA. Desenvolve sistemas inteligentes que automatizam e otimizam processos complexos.',
    image: RaulImg,
    tags: ['AI Solutions', 'Python', 'Backend'],
    social: { linkedin: '#', github: '#' }
  }
];

const Founders = () => {
  return (
    <section id="sobre" className="relative py-24 bg-ryz-light dark:bg-ryz-dark transition-colors duration-300">
      
      {/* Background Decorativo */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-ryz-blue/10 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-clash text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Mentes por trás da <span className="text-ryz-blue">RYZ</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Unimos visão de negócios com engenharia de software avançada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* CARD ATUALIZADO: Light Mode com tom azulado */}
              <div className="h-full bg-ryz-blue/5 dark:bg-white/5 backdrop-blur-xl border border-ryz-blue/10 dark:border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-ryz-blue/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                
                <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-ryz-blue/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    {founder.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-bold bg-white/90 dark:bg-black/80 backdrop-blur text-ryz-dark dark:text-white rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-clash font-bold text-gray-800 dark:text-white group-hover:text-ryz-blue transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-ryz-blue font-medium text-sm mt-1">{founder.role}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={founder.social.linkedin} className="text-gray-400 hover:text-ryz-blue transition-colors"><Linkedin size={20} /></a>
                    {founder.social.github && <a href={founder.social.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {founder.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
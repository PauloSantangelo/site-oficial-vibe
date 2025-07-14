'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const especialidades = [
  {
    titulo: 'Marketing Médico',
    descricao: 'Autoridade e crescimento orgânico para profissionais e clínicas de saúde.',
    icone: '/icons/medico.svg',
  },
  {
    titulo: 'Gestão de Redes Sociais',
    descricao: 'Criação de conteúdo estratégico, cronogramas, relatórios e copy de impacto.',
    icone: '/icons/social.svg',
  },
  {
    titulo: 'Captação Profissional de Conteúdo',
    descricao: 'Vídeos, fotos e bastidores que elevam a percepção da sua marca.',
    icone: '/icons/camera.svg',
  },
  {
    titulo: 'Growth e Posicionamento',
    descricao: 'Estrategicamente estruturado para atrair, engajar e converter.',
    icone: '/icons/growth.svg',
  },
  {
    titulo: 'Tráfego Pago',
    descricao: 'Campanhas otimizadas no Meta Ads e Google para gerar leads reais.',
    icone: '/icons/ads.svg',
  },
  {
    titulo: 'Criação de Sites',
    descricao: 'Sites e landing pages com foco em experiência, conversão e SEO.',
    icone: '/icons/website.svg',
  },
];

export default function EspecialidadesSection() {
  return (
    <section
      id="especialidades"
      aria-labelledby="especialidades-heading"
      className="w-full bg-white text-gray-900 py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="especialidades-heading"
          className="text-3xl md:text-4xl font-bold mb-16 text-purple-700"
        >
          Nossas Especialidades
        </h2>

        {/* Cards de especialidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {especialidades.map((item, index) => (
            <motion.article
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left focus-within:ring-2 focus-within:ring-violet-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              tabIndex={0}
            >
              <div className="mb-4" aria-hidden="true">
                <Image
                  src={item.icone}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.titulo}</h3>
              <p className="text-gray-600">{item.descricao}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA com foco e contraste acessível */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="#contato">
            <button
              className="group relative inline-flex items-center px-8 py-3 text-base font-semibold rounded-full border-2 border-violet-500 text-violet-700 overflow-hidden transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              aria-label="Quero ser atendido pela VIBE"
            >
              <span className="relative z-10">Quero ser atendido pela VIBE 🚀</span>
              <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-gradient-to-r from-violet-500 via-violet-600 to-violet-400 z-0 transition-transform duration-300 rounded-full"></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ServicoPrincipal {
  titulo: string;
  icone: string;
  descricao: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServicosPreviewSection() {
  const servicosPrincipais: ServicoPrincipal[] = [
    {
      titulo: 'Gerenciamento de Redes Sociais',
      icone: '/icons/social-media.svg',
      descricao: 'Criação de conteúdo, cronogramas, relatórios e roteiros para captação que engajam seu público.',
    },
    {
      titulo: 'Criação de Sites e Landing Pages',
      icone: '/icons/website.svg',
      descricao: 'Desenvolvemos sua presença digital com sites e landing pages que convertem.',
    },
    {
      titulo: 'Tráfego Pago (Meta & Google)',
      icone: '/icons/ads.svg',
      descricao: 'Aumentamos seu alcance e vendas com campanhas otimizadas nas principais plataformas.',
    },
  ];

  return (
    <section id="servicos-preview" className="py-20 px-6 bg-gray-950 text-white">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Nossos Serviços
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          Estratégia, criatividade e performance em cada entrega.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {servicosPrincipais.map((servico, index) => (
          <motion.div
            key={`${servico.titulo}-${index}`}
            className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            variants={itemVariants}
          >
            <Image
              src={servico.icone}
              alt={`Ícone de ${servico.titulo}`}
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-3">{servico.titulo}</h3>
            <p className="text-gray-300 text-base">{servico.descricao}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <Link href="/servicos" passHref>
          <button className="group relative inline-flex items-center px-8 py-3 text-base font-semibold rounded-full border-2 border-pink-500 text-white overflow-hidden transition-all duration-300 hover:text-white">
            <span className="relative z-10">Ver Todos os Serviços</span>
            <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-pink-500 z-0 transition-transform duration-300 rounded-full" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

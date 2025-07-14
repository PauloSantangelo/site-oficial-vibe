'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ServicoCompleto {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  cta: string;
  ctaLink: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const todosOsServicos: ServicoCompleto[] = [
  {
    id: 'gerenciamento-redes-sociais',
    titulo: 'Gerenciamento de Redes Sociais',
    subtitulo: 'Conecte-se e engaje seu público onde ele está.',
    descricao:
      'Nosso core business é impulsionar sua presença online. Oferecemos gerenciamento completo: criação de conteúdos estratégicos, cronogramas, relatórios de desempenho e roteiros para vídeos e fotos.',
    cta: 'Ver Planos',
    ctaLink: '/contato?servico=redes-sociais',
  },
  {
    id: 'filmaker',
    titulo: 'Filmaker e Produção de Vídeos',
    subtitulo: 'Vídeos estratégicos que conectam e encantam.',
    descricao:
      'Elaboramos vídeos para redes sociais, eventos e campanhas. Da criação à pós-produção, entregamos conteúdo visual profissional e alinhado à sua marca.',
    cta: 'Solicitar Vídeo',
    ctaLink: '/contato?servico=filmaker',
  },
  {
    id: 'branding-identidade',
    titulo: 'Branding e Identidade Visual',
    subtitulo: 'Sua marca com personalidade forte e coerente.',
    descricao:
      'Desenvolvemos a essência da sua marca: logo, paleta de cores, tipografia e manual de identidade visual para destacar seu negócio com clareza e consistência.',
    cta: 'Criar Identidade',
    ctaLink: '/contato?servico=branding',
  },
  {
    id: 'sites-landingpages',
    titulo: 'Criação de Sites e Landing Pages',
    subtitulo: 'Seu site como ponto forte de conversão.',
    descricao:
      'Criamos sites institucionais, e-commerces e landing pages com design moderno, boa experiência de usuário e foco em resultados (SEO e performance).',
    cta: 'Quero Meu Site',
    ctaLink: '/contato?servico=sites',
  },
  {
    id: 'pdfs-apresentacoes',
    titulo: 'PDFs e Apresentações Profissionais',
    subtitulo: 'Documentos visuais que impressionam.',
    descricao:
      'Elaboramos PDFs e apresentações institucionais impactantes, com design estratégico para empresas que valorizam comunicação clara e estética refinada.',
    cta: 'Solicitar Apresentação',
    ctaLink: '/contato?servico=pdf',
  },
  {
    id: 'trafego-pago',
    titulo: 'Tráfego Pago (Meta & Google)',
    subtitulo: 'Aumente seu alcance com anúncios eficientes.',
    descricao:
      'Gerenciamos campanhas de tráfego pago no Google Ads e Meta. Estratégias otimizadas com segmentação inteligente, copy criativa e análise contínua.',
    cta: 'Receber Proposta',
    ctaLink: '/contato?servico=trafego',
  },
];

export default function ServicosPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nossos Serviços Completos
        </motion.h1>

        {todosOsServicos.map((servico, index) => (
          <motion.section
            key={servico.id}
            id={servico.id}
            className={`flex flex-col md:flex-row items-center my-20 p-8 bg-gray-900 rounded-lg shadow-xl ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="md:w-1/2 md:px-10 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                {servico.titulo}
              </h2>
              <h3 className="text-xl text-gray-300 mb-6">{servico.subtitulo}</h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-8">{servico.descricao}</p>
              <Link href={servico.ctaLink}>
                <button className="group relative inline-flex items-center px-8 py-3 text-base font-semibold rounded-full border-2 border-orange-500 text-white overflow-hidden transition-all duration-300 hover:bg-orange-500">
                  <span className="relative z-10">{servico.cta}</span>
                  <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-orange-500 z-0 transition-transform duration-300 rounded-full" />
                </button>
              </Link>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <Image
                src={`/demos/${servico.id}.webp`}
                alt={`Imagem ilustrativa para ${servico.titulo}`}
                width={500}
                height={300}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </motion.section>
        ))}

        <motion.div
          className="text-center mt-24 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Pronto para Elevar sua Marca?
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
            <Link href="/contato">
              <button className="group relative inline-flex items-center px-10 py-4 text-lg font-semibold rounded-full border-2 border-violet-500 text-white overflow-hidden transition-all duration-300 hover:bg-violet-500 hover:text-white">
                <span className="relative z-10">Converse Conosco Agora</span>
                <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-violet-500 z-0 transition-transform duration-300 rounded-full" />
              </button>
            </Link>

            <Link href="/">
              <button className="group relative inline-flex items-center px-10 py-4 text-lg font-semibold rounded-full border-2 border-white text-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-gray-900">
                <span className="relative z-10">Voltar à Página Inicial</span>
                <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-white z-0 transition-transform duration-300 rounded-full" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { motion, circOut } from 'framer-motion';
import Link from 'next/link';

// Animações
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: circOut,
    },
  },
};

export default function InicioSection() {
  return (
    <section
      id="inicio"
      className="relative pt-32 px-6 min-h-screen text-white flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* 🔴 Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔴 Overlay escurecedor sutil */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* 🔴 Conteúdo principal */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center z-20"
      >
        {/* Logo com brilho */}
        <motion.img
          src="/logo2.webp"
          alt="Logo Vibe"
          className="w-28 md:w-36 mb-8 drop-shadow-[0_0_30px_rgba(255,0,180,0.35)]"
          variants={fadeUp}
        />

        {/* Título com gradiente parcial */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl"
          variants={fadeUp}
        >
          Conectamos{' '}
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            ideias criativas
          </span>{' '}
          à uma{' '}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            presença digital poderosa
          </span>
        </motion.h1>

        {/* Parágrafo de apoio */}
        <motion.p
          className="mt-6 text-base md:text-lg text-gray-200 max-w-lg"
          variants={fadeUp}
        >
          Sites, tráfego, branding e tudo o que sua marca precisa para crescer com autoridade e impacto.
        </motion.p>

        {/* Botão CTA */}
        <motion.div className="mt-10" variants={fadeUp}>
          <Link href="#contato">
            <button className="group relative inline-flex items-center px-8 py-3 text-base font-semibold rounded-full border-2 border-violet-500 text-white overflow-hidden transition-all duration-300 hover:bg-violet-500">
              <span className="relative z-10">Quero um site de impacto</span>
              <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-violet-500 z-0 transition-transform duration-300 rounded-full"></span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

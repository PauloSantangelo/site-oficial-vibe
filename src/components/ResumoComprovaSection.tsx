'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ResumoComprovaSection() {
  return (
    <section
      id="resumo-comprova"
      className="bg-[#111122] text-white px-6 py-24"
      aria-labelledby="resultados-heading"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="resultados-heading"
            className="text-3xl md:text-4xl font-bold text-pink-400 mb-6"
          >
            Muito além da estética. Entregamos resultado.
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            Nossos serviços já alavancaram perfis com mais de 2 milhões de visualizações,
            impulsionaram o crescimento orgânico de milhares de seguidores e consolidaram
            a autoridade digital de mais de 25 marcas — especialmente no segmento médico.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            Filmagens profissionais, estratégia de conteúdo, identidade visual, sites, tráfego
            e muito mais — tudo com foco em posicionamento. Nós cuidamos de tudo para sua
            marca crescer com consistência.
          </p>

          <a
            href="#contato"
            className="inline-block bg-pink-500 hover:bg-pink-600 transition px-8 py-3 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
            aria-label="Entrar em contato para alcançar resultados"
          >
            Quero esses resultados também
          </a>
        </motion.div>

        {/* Comprovação visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="relative w-full h-40 md:h-48">
            <Image
              src="/provas/relatorio-crescimento.png"
              alt="Gráfico de crescimento de perfil"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl object-cover shadow-lg"
              priority
            />
          </div>

          <div className="relative w-full h-40 md:h-48">
            <Image
              src="/provas/print-feed.png"
              alt="Print de post viral nas redes sociais"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl object-cover shadow-lg"
            />
          </div>

          <video
            src="/provas/reels-viral.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="rounded-xl shadow-lg w-full col-span-2"
            aria-label="Vídeo mostrando Reels que viralizou"
          />
        </motion.div>
      </div>
    </section>
  );
}

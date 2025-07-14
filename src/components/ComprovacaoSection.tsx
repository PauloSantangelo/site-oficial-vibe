'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ComprovacaoSection() {
  return (
    <section
      id="provas"
      className="w-full bg-[#121222] text-white py-24 px-4 sm:px-6"
      aria-labelledby="comprovacao-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="comprovacao-heading"
            className="text-3xl sm:text-4xl font-bold text-pink-500 mb-4"
          >
            Resultados que falam por si
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Nada melhor do que ver na prática o que entregamos: crescimento real, engajamento de verdade e posicionamento estratégico.
          </p>
        </div>

        {/* Grid de provas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Prova 1: Vídeo viral */}
          <motion.div
            className="bg-[#1c1c36] p-5 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            role="region"
            aria-label="Prova de vídeo viral"
          >
            <h3 className="text-lg font-semibold text-pink-400 mb-3">
              Reels com mais de 2M de views
            </h3>
            <video
              controls
              muted
              loop
              playsInline
              preload="none"
              className="rounded-md w-full h-auto"
              aria-label="Vídeo de reels viral com mais de 2 milhões de visualizações"
            >
              <source src="/provas/reels-viral.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </motion.div>

          {/* Prova 2: Gráfico de crescimento */}
          <motion.div
            className="bg-[#1c1c36] p-5 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            role="region"
            aria-label="Prova de crescimento orgânico"
          >
            <h3 className="text-lg font-semibold text-pink-400 mb-3">
              Crescimento de seguidores
            </h3>
            <Image
              src="/provas/relatorio-crescimento.png"
              alt="Relatório com gráfico de crescimento de seguidores reais"
              width={500}
              height={300}
              className="rounded-md w-full h-auto object-contain"
            />
          </motion.div>

          {/* Prova 3: Print de feed */}
          <motion.div
            className="bg-[#1c1c36] p-5 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            role="region"
            aria-label="Prova de engajamento em feed"
          >
            <h3 className="text-lg font-semibold text-pink-400 mb-3">
              Engajamento recorde em feed
            </h3>
            <Image
              src="/provas/print-feed.png"
              alt="Imagem mostrando engajamento alto em post no feed"
              width={500}
              height={300}
              className="rounded-md w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-block bg-pink-500 hover:bg-pink-600 transition px-6 py-3 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Quero resultados assim!
          </a>
        </div>
      </div>
    </section>
  );
}

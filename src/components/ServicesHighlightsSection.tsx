'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  {
    id: 'redes-sociais-highlight',
    title: 'Trabalho de Redes Sociais',
    texto:
      'Analisamos relatórios detalhados, criamos roteiros de Reels que viralizaram e entregamos resultados reais de engajamento e alcance para nossos clientes.',
    cta: 'Quero bombar nas redes',
    ctaLink: '/contato?servico=redes-sociais',
    media: [
      { type: 'image', src: '/demos/redes1.jpg', alt: 'Relatório 1' },
      { type: 'image', src: '/demos/redes2.jpg', alt: 'Relatório 2' },
      { type: 'video', src: '/demos/redes-video1.mp4', alt: 'Vídeo viral' },
      { type: 'image', src: '/demos/redes3.jpg', alt: 'Engajamento alto' },
    ],
  },
  {
    id: 'sites-highlight',
    title: 'Desenvolvimento de Sites',
    texto:
      'Criamos sites e landing pages com foco em performance, conversão e identidade visual. Nossos projetos são modernos, rápidos e pensados para seu cliente.',
    cta: 'Quero meu site profissional',
    ctaLink: '/contato?servico=sites',
    media: [
      { type: 'image', src: '/demos/site1.jpg', alt: 'Site Cliente A' },
      { type: 'image', src: '/demos/site2.jpg', alt: 'Site Cliente B' },
      { type: 'image', src: '/demos/site3.jpg', alt: 'Landing Page' },
    ],
  },
  {
    id: 'filmaker-highlight',
    title: 'Filmagem e Produção de Vídeos',
    texto:
      'Captações profissionais para redes sociais, institucionais ou eventos. Mostre seu trabalho com qualidade e storytelling visual.',
    cta: 'Quero produzir meus vídeos',
    ctaLink: '/contato?servico=filmaker',
    media: [
      { type: 'video', src: '/demos/filmaker1.mp4', alt: 'Captação em ação' },
    ],
  },
];

export default function ServicesHighlightsSection() {
  const [indices, setIndices] = useState<number[]>(highlights.map(() => 0));

  useEffect(() => {
    const timers = highlights.map((h, i) =>
      setInterval(() => {
        setIndices((prev) => {
          const next = [...prev];
          next[i] = (next[i] + 1) % h.media.length;
          return next;
        });
      }, 5000 + i * 500)
    );
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="w-full bg-gray-950 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-28">
        {highlights.map((h, i) => (
          <motion.div
            key={h.id}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
              i % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Texto */}
            <div className="md:w-1/2 text-center md:text-left space-y-5">
              <h3 className="text-3xl font-bold text-pink-400">{h.title}</h3>
              <p className="text-gray-300 leading-relaxed">{h.texto}</p>
              <Link href={h.ctaLink}>
                <button className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-6 py-2 rounded-full transition">
                  {h.cta}
                </button>
              </Link>
            </div>

            {/* Mídia */}
            <div className="md:w-1/2 w-full h-64 sm:h-72 md:h-80 relative rounded-xl overflow-hidden shadow-xl">
              {h.media.map((m, j) =>
                j === indices[i] ? (
                  m.type === 'image' ? (
                    <Image
                      key={j}
                      src={m.src}
                      alt={m.alt}
                      fill
                      className="object-cover transition-opacity duration-500"
                      priority={i === 0 && j === 0}
                    />
                  ) : (
                    <video
                      key={j}
                      src={m.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      aria-label={m.alt}
                    />
                  )
                ) : null
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

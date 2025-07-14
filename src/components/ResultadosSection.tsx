'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const depoimentos = [
  {
    texto: 'Com a Vibe, conseguimos escalar nosso negócio online e dobrar o faturamento em menos de 6 meses.',
    autor: 'Mariana Lopes • Loja de Cosméticos',
  },
  {
    texto: 'A gestão de tráfego foi decisiva para conquistar novos clientes com previsibilidade e consistência.',
    autor: 'Carlos Pereira • Coach Digital',
  },
  {
    texto: 'Ficamos impressionados com o posicionamento no Google e a identidade visual que criaram para nossa marca.',
    autor: 'Luciana Braga • Clínica de Estética',
  },
  {
    texto: 'As estratégias de conteúdo foram certeiras. Crescemos organicamente e ganhamos autoridade real nas redes.',
    autor: 'Dra. Fabiana • Ginecologista',
  },
];

export default function ResultadosSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % depoimentos.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="resultados"
      className="w-full bg-white text-[#0a0a23] py-28 px-4 sm:px-6"
      aria-labelledby="resultados-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="resultados-heading"
          className="text-3xl md:text-4xl font-bold mb-16 text-pink-500"
        >
          Nossos resultados falam por nós
        </h2>

        <div className="relative min-h-[200px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto"
              role="region"
              aria-label={`Depoimento de ${depoimentos[index].autor}`}
            >
              <blockquote className="text-lg italic mb-6 text-gray-800">
                “{depoimentos[index].texto}”
              </blockquote>
              <cite className="block font-semibold text-purple-700 not-italic">
                {depoimentos[index].autor}
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores de página com acessibilidade */}
        <div className="mt-8 flex justify-center gap-3" aria-label="Navegação de depoimentos">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                i === index ? 'bg-pink-500 scale-110' : 'bg-gray-300'
              }`}
              aria-label={`Ver depoimento ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

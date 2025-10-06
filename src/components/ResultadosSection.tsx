"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

/* ---------------------- Dados ---------------------- */
const depoimentos = [
  {
    texto: "Com a Vibe, conseguimos escalar nosso negócio online e dobrar o faturamento em menos de 6 meses.",
    autor: "Mariana Lopes • Loja de Cosméticos",
  },
  {
    texto: "A gestão de tráfego foi decisiva para conquistar novos clientes com previsibilidade e consistência.",
    autor: "Carlos Pereira • Coach Digital",
  },
  {
    texto: "Ficamos impressionados com o posicionamento no Google e a identidade visual criada para nossa marca.",
    autor: "Luciana Braga • Clínica de Estética",
  },
  {
    texto: "As estratégias de conteúdo foram certeiras. Crescemos organicamente e ganhamos autoridade real nas redes.",
    autor: "Dra. Fabiana • Ginecologista",
  },
] as const;

export default function ResultadosSection() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isHovering.current) setIndex((i) => (i + 1) % depoimentos.length);
    }, 6000);
  };
  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <section
      id="resultados"
      aria-labelledby="resultados-heading"
      className={`${sans.className} relative w-full bg-neutral-50 text-slate-900 py-28 px-4 sm:px-6`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          id="resultados-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className={`${display.className} mb-4 text-3xl md:text-4xl`}
        >
          Nossos resultados falam por nós
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="mx-auto mb-12 max-w-xl text-slate-600"
        >
          Cases reais, crescimento consistente e posicionamento sólido.
        </motion.p>

        <div
          className="relative min-h-[220px]"
          aria-live="polite"
          onMouseEnter={() => (isHovering.current = true)}
          onMouseLeave={() => (isHovering.current = false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 text-left shadow-md"
              role="region"
              aria-label={`Depoimento de ${depoimentos[index].autor}`}
            >
              {/* Ornamento/halo sutil */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] -z-10 rounded-3xl opacity-25 blur-md"
                style={{ background: "linear-gradient(90deg,#E9D8A6,#C8B273)" }}
              />

              <div className="mb-4 text-5xl leading-none text-[#9C8551]">“</div>
              <blockquote className="text-lg leading-relaxed text-slate-800">
                {depoimentos[index].texto}
              </blockquote>
              <figcaption className="mt-6 border-t border-neutral-200 pt-4 text-sm font-medium text-slate-700">
                {depoimentos[index].autor}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Indicadores */}
        <div className="mt-8 flex justify-center gap-3" aria-label="Navegação de depoimentos">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 ${
                i === index ? "bg-[#9C8551] scale-110" : "bg-neutral-300 hover:bg-neutral-400"
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
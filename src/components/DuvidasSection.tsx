"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants, easeInOut } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

interface Duvida { pergunta: string; resposta: string }

const duvidas: Duvida[] = [
  {
    pergunta: "Como funciona o gerenciamento de redes sociais?",
    resposta:
      "Cuidamos de ponta a ponta: estratégia, calendário editorial, criação (posts, Reels, stories), publicação e monitoramento. Acompanhamos métricas e iteramos semanalmente para otimizar o desempenho.",
  },
  {
    pergunta: "Vocês atendem todo tipo de negócio?",
    resposta:
      "Sim. Já atendemos clínicas, consultórios, restaurantes, e-commerces e profissionais liberais. Personalizamos a abordagem para o seu público e objetivo.",
  },
  {
    pergunta: "Quanto tempo demora para ver resultados?",
    resposta:
      "Depende do ponto de partida e da meta. Em tráfego pago, os primeiros aprendizados chegam nos primeiros dias; no orgânico, consistência de semanas gera curvas sólidas. O essencial é manter estratégia e constância.",
  },
  {
    pergunta: "Vocês fazem tráfego pago também?",
    resposta:
      "Sim. Operamos Meta Ads (Instagram/Facebook) e Google Ads, com foco em conversão, captação de leads ou posicionamento, sempre com mensuração clara.",
  },
];

/* ---------------------- Animações ---------------------- */
const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeInOut } },
};

export default function DuvidasSection() {
  const [aberta, setAberta] = useState<number | null>(0);

  const toggle = (i: number) => setAberta((prev) => (prev === i ? null : i));

  const chevronClass = useMemo(
    () => "h-5 w-5 text-[#9C8551] transition-transform duration-300",
    []
  );

  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-heading"
      className={`${sans.className} relative w-full bg-neutral-50 text-slate-900 py-24 px-6 overflow-hidden`}
    >
      {/* Ornamento claro sutil */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.25)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto max-w-4xl text-center mb-14">
        <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
          <HelpCircle className="h-4 w-4 text-[#9C8551]" />
          Perguntas frequentes
        </div>
        <h2 id="duvidas-heading" className={`${display.className} text-3xl md:text-5xl leading-tight`}>
          Dúvidas frequentes
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Reunimos as respostas mais pedidas. Precisa de algo específico? Fale com a gente.
        </p>
      </div>

      {/* Lista */}
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-3xl space-y-4"
      >
        {duvidas.map((d, i) => (
          <motion.li key={i} variants={item} className="list-none">
            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              {/* halo */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl opacity-0 blur-md transition duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg,#E9D8A6,#C8B273)" }}
              />

              <button
                className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left"
                aria-expanded={aberta === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="text-base font-semibold text-slate-900">{d.pergunta}</span>
                <motion.span
                  animate={{ rotate: aberta === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className={chevronClass} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {aberta === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: easeInOut }}
                    className="px-5 pb-5 text-slate-700"
                  >
                    {d.resposta}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* CTA final */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="mx-auto mt-10 flex max-w-3xl items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-sm"
      >
        <span>Não encontrou sua dúvida?</span>
        <a
          href="https://wa.me/5514999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center"
        >
          <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
          <span
            className="relative inline-flex items-center justify-center rounded-full px-4 py-1.5 font-semibold text-slate-900"
            style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
          >
            Fale no WhatsApp
          </span>
        </a>
      </motion.div>
    </section>
  );
}

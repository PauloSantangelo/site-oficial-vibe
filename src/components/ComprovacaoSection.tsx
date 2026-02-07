"use client";

import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

/* ---------------------- Configuração das Imagens ---------------------- */
const prints = [
  { src: "/organico/trafego.jpeg", alt: "Resultado Tráfego Pago 01", type: "Tráfego Pago" },
  { src: "/organico/trafego2.jpeg", alt: "Resultado Tráfego Pago 02", type: "Tráfego Pago" },
  { src: "/organico/organico7.jpeg", alt: "Alcance de 186k", type: "Orgânico" },
  { src: "/organico/organico10.jpeg", alt: "Alcance de 75k", type: "Orgânico" },
  { src: "/organico/organico12.jpeg", alt: "Alcance de 62k", type: "Orgânico" },
  { src: "/organico/organico2.jpeg", alt: "Visualizações de 55k", type: "Orgânico" },
  { src: "/organico/organico5.jpeg", alt: "Resultados 47k", type: "Orgânico" },
  { src: "/organico/organico4.jpeg", alt: "Crescimento 40k", type: "Orgânico" },
] as const;

export default function ComprovacaoSection() {
  return (
    <section
      id="provas"
      aria-labelledby="comprovacao-heading"
      className={`${sans.className} relative w-full bg-[#0B0D10] text-white py-24 px-4 sm:px-6 overflow-hidden`}
    >
      {/* Background decorativo */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_50%_10%,#12161D_0%,#0B0D10_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="text-center mb-16"
        >
          <h2 id="comprovacao-heading" className={`${display.className} text-4xl sm:text-5xl mb-4 text-white`}>
            Resultados que falam por si
          </h2>
          {/* ✅ Correção das aspas para o build da Vercel */}
          <p className="mx-auto max-w-2xl text-white/60 text-lg italic">
            &ldquo;Números não mentem. Nossa estratégia une o alcance exponencial do orgânico com a precisão cirúrgica do tráfego pago.&rdquo;
          </p>
        </motion.div>

        {/* Grid de Provas Sociais */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-4 space-y-5">
          {prints.map((print, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl group transition-all hover:border-[#C8B273]/40"
            >
              <Image
                src={print.src}
                alt={print.alt}
                width={500}
                height={800}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#E9D8A6] bg-[#E9D8A6]/10 px-2 py-1 rounded-md border border-[#E9D8A6]/20">
                  {print.type}
                </span>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Frase de autoridade final */}
        <div className="mt-16 text-center space-y-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C8B273] to-transparent mx-auto" />
          <p className={`${display.className} text-2xl text-white/90`}>
            Pronto para ser o próximo caso de sucesso?
          </p>

          <a
            href="https://wa.me/5514991042262?text=Olá,%20vi%20seus%20resultados%20e%20gostaria%20de%20conhecer%20os%20planos%20da%20VibeMed."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center"
          >
            <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
            <span
              className="relative inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-slate-900"
              style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
            >
              Quero esses resultados na minha clínica
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
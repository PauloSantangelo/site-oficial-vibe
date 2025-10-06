"use client";

import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

/* ---------------------- Animações ---------------------- */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

export default function ResumoComprovaSection() {
  return (
    <section
      id="resumo-comprova"
      aria-labelledby="resultados-heading"
      className={`${sans.className} relative overflow-hidden px-6 py-24 text-white`}
    >
      {/* Fundo sofisticado (gradient + textura sutil) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_10%,#1A1B2A_0%,#0E0F1C_55%,#0A0B15_100%)]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:44px_44px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Texto */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.h2
            id="resultados-heading"
            variants={fadeUp}
            className={`${display.className} mb-6 text-balance text-3xl md:text-4xl leading-tight`}
          >
            Muito além do visual. <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273]">Entregamos resultado.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mb-6 max-w-prose text-base md:text-lg text-white/85 leading-relaxed">
            Projetos que combinam direção de arte, estratégia e execução: crescimento orgânico expressivo, alcance milionário em vídeos e posicionamento sólido de marca.
          </motion.p>

          <motion.p variants={fadeUp} className="mb-8 max-w-prose text-base md:text-lg text-white/85 leading-relaxed">
            Filmagens profissionais, conteúdo, identidade visual, sites e tráfego — tudo alinhado à sua proposta de valor para crescer com consistência.
          </motion.p>

          {/* Métricas/selos de prova social */}
          <motion.ul variants={fadeUp} className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { kpi: "2M+", label: "visualizações em vídeos" },
              { kpi: "25+", label: "marcas atendidas" },
              { kpi: "↑ orgânico", label: "crescimento consistente" },
            ].map((item, i) => (
              <li key={i} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm">
                <div className={`${display.className} text-2xl`}>{item.kpi}</div>
                <div className="mt-1 text-xs text-white/70">{item.label}</div>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              aria-label="Entrar em contato"
              className="group relative inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
            >
              Quero evoluir meu visual
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Ver cases
            </a>
          </motion.div>
        </motion.div>

        {/* Comprovação visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          {/* Card 1 */}
          <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-sm">
            <Image
              src="/provas/relatorio-crescimento.png"
              alt="Gráfico de crescimento de perfil"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 text-xs text-white/85">
              Relatório de crescimento
            </figcaption>
          </figure>

          {/* Card 2 */}
          <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-sm">
            <Image
              src="/provas/print-feed.png"
              alt="Post com alto desempenho"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 text-xs text-white/85">
              Conteúdo de alta performance
            </figcaption>
          </figure>

          {/* Vídeo */}
          <figure className="col-span-2 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-sm">
            <video
              src="/provas/reels-viral.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="h-full w-full object-cover"
              aria-label="Vídeo de case com alto alcance"
            />
            <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-xs text-white/85">
              Reels com alcance milionário
            </figcaption>
          </figure>
        </motion.div>
      </div>

      {/* Linha luminosa decorativa */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}

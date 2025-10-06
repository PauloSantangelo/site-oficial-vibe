"use client";

import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

/* ---------------------- Prints (somente imagens) ---------------------- */
const prints = [
  { src: "/provas/prints-organico-01.png", alt: "Painel de resultados orgânicos 01", caption: "+15M views • 967k interações" },
  { src: "/provas/prints-organico-02.png", alt: "Painel de resultados orgânicos 02", caption: "+136k visualizações em 30 dias" },
  { src: "/provas/relatorio-crescimento.png", alt: "Relatório de crescimento", caption: "+52,5% contas alcançadas" },
  { src: "/provas/print-feed.png", alt: "Grade de conteúdos com alta performance", caption: "Posts e Reels em tração" },
  { src: "/provas/insights-reel.png", alt: "Insights detalhados de Reel", caption: "Retenção e engajamento" },
] as const;

export default function ComprovacaoSection() {
  return (
    <section
      id="provas"
      aria-labelledby="comprovacao-heading"
      className={`${sans.className} relative w-full bg-[#121418] text-white py-24 px-4 sm:px-6 overflow-hidden`}
    >
      {/* textura / vinheta sutil */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_50%_10%,#1B1E25_0%,#121418_60%,#101216_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="text-center mb-14"
        >
          <h2 id="comprovacao-heading" className={`${display.className} text-3xl sm:text-4xl mb-4`}>
            Marketing de resultado orgânico
          </h2>
          <p className="mx-auto max-w-2xl text-white/80">
            Prints reais de desempenho: alcance, visualizações, interações e evolução contínua.
          </p>
        </motion.div>

        {/* Collage responsivo (somente imagens) */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Hero 1 */}
          <figure className="relative md:col-span-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl">
            <Image
              src={prints[0].src}
              alt={prints[0].alt}
              width={1200}
              height={800}
              className="h-full w-full object-contain bg-black/20"
              priority
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-xs text-white/85">
              {prints[0].caption}
            </figcaption>
          </figure>

          {/* Hero 2 */}
          <figure className="relative md:col-span-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl">
            <Image
              src={prints[1].src}
              alt={prints[1].alt}
              width={1200}
              height={800}
              className="h-full w-full object-contain bg-black/20"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-xs text-white/85">
              {prints[1].caption}
            </figcaption>
          </figure>

          {/* Stack lateral */}
          <div className="md:col-span-3 grid grid-rows-2 gap-5">
            <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl">
              <Image
                src={prints[2].src}
                alt={prints[2].alt}
                width={900}
                height={600}
                className="h-full w-full object-contain bg-black/20"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-xs text-white/85">
                {prints[2].caption}
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl">
              <Image
                src={prints[3].src}
                alt={prints[3].alt}
                width={900}
                height={600}
                className="h-full w-full object-contain bg-black/20"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-xs text-white/85">
                {prints[3].caption}
              </figcaption>
            </figure>
          </div>

          {/* Wide bottom */}
          <figure className="relative md:col-span-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl">
            <Image
              src={prints[4].src}
              alt={prints[4].alt}
              width={1600}
              height={700}
              className="h-full w-full object-contain bg-black/20"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-xs text-white/85">
              {prints[4].caption}
            </figcaption>
          </figure>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="group relative inline-flex items-center"
            aria-label="Quero resultados assim"
          >
            <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
            <span
              className="relative inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold text-slate-900"
              style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
            >
              Quero resultados assim
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, easeInOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes elegantes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

/* ---------------------- Animações ---------------------- */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeInOut },
  },
};

/* ---------------------- Cor de destaque ---------------------- */
const GOLD = "#E1AD01";

/* ---------------------- Configuração do WhatsApp ---------------------- */
const WHATSAPP_NUMBER = "5514991042262";
const WHATSAPP_MESSAGE =
  "Olá, gostaria de saber mais sobre as estratégias de marketing digital para minha clínica/consultório.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function InicioSection() {
  return (
    <section
      id="inicio"
      aria-label="Abertura do site da Agência Vibe para marketing médico"
      className={`${sans.className} relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-slate-950 text-white`}
    >
      {/* Noise sutil */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-3"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "1px 1px",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(65%_55%_at_50%_30%,rgba(255,255,255,0.03),rgba(0,0,0,0)_60%)]" />

      {/* Grid decorativo */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 opacity-10
        [background-image:linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)]
        [background-size:48px_48px]"
      />

      {/* Conteúdo */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-20 mx-auto w-full max-w-6xl px-6 py-20 text-center"
      >
        {/* Logo */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <Image
            src="/logo.webp"
            alt="Logo da Agência Vibe"
            width={132}
            height={132}
            priority
            className="mb-8 drop-shadow-[0_0_24px_rgba(255,255,255,0.18)]"
          />
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={fadeUp}
          className={`${display.className} mx-auto max-w-5xl text-balance text-4xl md:text-6xl leading-[1.1] tracking-tight`}
        >
          Estratégia, estética e performance para
          <span className="block mt-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${GOLD}, #C99600)`,
            }}
          >
            sua presença digital
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/85"
        >
          Websites sob medida, posicionamento premium e campanhas éticas que
          ampliam autoridade médica e geram demanda qualificada.
        </motion.p>

        {/* Selo de confiança */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full
          border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm"
        >
          <span
            className="h-2 w-2 rounded-full shadow-[0_0_14px_rgba(225,173,1,0.9)]"
            style={{
              background: `linear-gradient(90deg, ${GOLD}, #C99600)`,
            }}
          />
          <span className="text-sm text-white/80">
            Compliance e boas práticas em marketing médico
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <span
              className="absolute -inset-[2px] rounded-full blur-md opacity-70 transition group-hover:opacity-100"
              style={{
                background: `linear-gradient(90deg, ${GOLD}, #C99600)`,
              }}
            />
            <button
              aria-label="Falar com a Agência Vibe pelo WhatsApp"
              className="relative inline-flex items-center justify-center rounded-full
              px-7 py-3 text-base font-semibold tracking-wide text-black
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              style={{
                background: `linear-gradient(180deg, #FFE08A, ${GOLD})`,
              }}
            >
              Conversar agora
            </button>
          </Link>

          <Link href="#portfolio">
            <button
              aria-label="Ver portfólio da Vibe"
              className="inline-flex items-center justify-center rounded-full
              border border-white/25 bg-white/5 px-7 py-3 text-base
              font-semibold text-white transition hover:bg-white/10
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Ver portfólio
            </button>
          </Link>
        </motion.div>

        {/* Microtexto */}
        <motion.p variants={fadeUp} className="mt-5 text-sm text-white/65">
          + Clínicas, consultórios e equipes médicas em Bauru, Botucatu e região
        </motion.p>
      </motion.div>

      {/* Linha decorativa */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-px w-[88%]
      -translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}

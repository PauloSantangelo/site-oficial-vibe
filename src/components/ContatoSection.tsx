"use client";

import { motion, Variants, easeInOut } from "framer-motion";
import { Phone, Instagram, MapPin } from "lucide-react";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

/* ---------------------- Animações ---------------------- */
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

export default function ContatoSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className={`${sans.className} relative w-full bg-neutral-50 text-slate-900 py-24 px-6 overflow-hidden`}
    >
      {/* Ornamento claro sutil */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.25)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="mx-auto mb-12 max-w-5xl text-center"
      >
        <h2 id="contato-heading" className={`${display.className} text-3xl md:text-5xl leading-tight mb-4`}>
          Entre em contato com a Vibe
        </h2>
        <p className="mx-auto max-w-xl text-slate-600">
          Clique em um dos botões abaixo e fale com a gente.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
      >
        {/* WhatsApp */}
        <motion.a
          variants={item}
          href="https://wa.me/5514999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10"
          aria-label="Falar no WhatsApp"
        >
          <span className="absolute -inset-[1px] -z-10 rounded-2xl opacity-0 blur-md transition duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(90deg,#E9D8A6,#C8B273)" }} />
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
            <Phone size={20} className="text-[#9C8551]" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-600">WhatsApp</p>
            <p className="text-lg font-semibold text-slate-900">(14) 99999-9999</p>
            <p className="mt-1 text-xs text-slate-600">Atendimento rápido</p>
          </div>
        </motion.a>

        {/* Instagram */}
        <motion.a
          variants={item}
          href="https://instagram.com/agenciavibe"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10"
          aria-label="Abrir Instagram da Vibe"
        >
          <span className="absolute -inset-[1px] -z-10 rounded-2xl opacity-0 blur-md transition duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(90deg,#E9D8A6,#C8B273)" }} />
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
            <Instagram size={20} className="text-[#9C8551]" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-600">Instagram</p>
            <p className="text-lg font-semibold text-slate-900">@agenciavibe</p>
            <p className="mt-1 text-xs text-slate-600">Conteúdo e bastidores</p>
          </div>
        </motion.a>

        {/* Endereço */}
        <motion.div
          variants={item}
          className="group relative flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10"
          role="region"
          aria-label="Endereço do escritório"
        >
          <span className="absolute -inset-[1px] -z-10 rounded-2xl opacity-0 blur-md transition duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(90deg,#E9D8A6,#C8B273)" }} />
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
            <MapPin size={20} className="text-[#9C8551]" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-600">Nosso Escritório</p>
            <p className="text-sm leading-snug text-slate-800">
              Rua Criatividade, 123
              <br />
              Centro – Botucatu, SP
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Barra de confiança */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="mx-auto mt-10 flex max-w-5xl items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs text-slate-700 shadow-sm"
      >
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#E9D8A6] to-[#C8B273]" />
        Atendimento humanizado e respostas rápidas.
      </motion.div>
    </section>
  );
}

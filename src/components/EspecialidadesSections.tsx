"use client";

import Link from "next/link";
import { motion, easeInOut } from "framer-motion";
import { DM_Serif_Display, Manrope } from "next/font/google";
import {
  Stethoscope,
  LayoutDashboard,
  Camera,
  TrendingUp,
  MousePointerClick,
  Globe,
} from "lucide-react";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

/* ---------------------- Conteúdo ---------------------- */
const especialidades = [
  { titulo: "Marketing Médico", descricao: "Autoridade e crescimento orgânico para profissionais e clínicas.", icone: Stethoscope },
  { titulo: "Gestão de Redes Sociais", descricao: "Conteúdo estratégico, cronograma, relatórios e copy que converte.", icone: LayoutDashboard },
  { titulo: "Captação Profissional", descricao: "Vídeos, fotos e bastidores que elevam a percepção da marca.", icone: Camera },
  { titulo: "Growth & Posicionamento", descricao: "Estratégia para atrair, engajar e transformar em demanda.", icone: TrendingUp },
  { titulo: "Tráfego Pago", descricao: "Campanhas otimizadas no Meta Ads e Google para leads reais.", icone: MousePointerClick },
  { titulo: "Criação de Sites", descricao: "Experiência, conversão e SEO em sites e landing pages sob medida.", icone: Globe },
] as const;

/* ---------------------- Animações ---------------------- */
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const card = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } } };

export default function EspecialidadesSection() {
  return (
    <section
      id="especialidades"
      aria-labelledby="especialidades-heading"
      className={`${sans.className} relative w-full bg-neutral-50 text-slate-900 py-24 px-4 sm:px-6`}
    >
      {/* Ornamento claro sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px -z-10 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          id="especialidades-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className={`${display.className} text-3xl md:text-4xl mb-4`}
        >
          Nossas Especialidades
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="mx-auto mb-14 max-w-2xl text-slate-600"
        >
          Soluções que integram estética, estratégia e performance para marcas que exigem excelência.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {especialidades.map((item) => {
            const Icon = item.icone;
            return (
              <motion.article
                key={item.titulo}
                variants={card}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm transition hover:shadow-lg focus-within:ring-2 focus-within:ring-[#C7B079]"
                tabIndex={0}
              >
                {/* halo dourado no hover */}
                <span
                  className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-md transition duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg,rgba(199,176,121,0.25),rgba(173,154,99,0.15))" }}
                />

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
                  <Icon size={22} className="text-[#9C8551]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.descricao}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeInOut }}
        >
          <Link href="#contato" className="group relative inline-flex items-center">
            <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
            <span
              aria-label="Quero ser atendido pela Vibe"
              className="relative inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
              style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
            >
              Quero ser atendido pela Vibe
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

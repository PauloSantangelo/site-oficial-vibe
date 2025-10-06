"use client";

import { motion, Variants, easeInOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

interface ServicoPrincipal {
  titulo: string;
  icone: string;
  descricao: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

export default function ServicosPreviewSection() {
  const servicosPrincipais: ServicoPrincipal[] = [
    {
      titulo: "Gerenciamento de Redes Sociais",
      icone: "/icons/social-media.svg",
      descricao:
        "Conteúdo estratégico, calendário editorial, relatórios e roteiros para captação que engajam de verdade.",
    },
    {
      titulo: "Criação de Sites e Landing Pages",
      icone: "/icons/website.svg",
      descricao:
        "Experiência, conversão e SEO em interfaces sob medida — do conceito ao publish.",
    },
    {
      titulo: "Tráfego Pago (Meta & Google)",
      icone: "/icons/ads.svg",
      descricao:
        "Campanhas otimizadas, segmentação precisa e mensuração clara para gerar leads reais.",
    },
  ];

  return (
    <section
      id="servicos-preview"
      className={`${sans.className} relative py-24 px-6 text-white overflow-hidden`}
      aria-labelledby="servicos-preview-heading"
    >
      {/* Fundo escuro sofisticado */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_10%,#1B1E25_0%,#111316_60%,#0D0F12_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Título */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        <h2 id="servicos-preview-heading" className={`${display.className} text-3xl md:text-5xl leading-tight`}>
          Nossos Serviços
        </h2>
        <p className="text-white/80 mt-4 max-w-xl mx-auto text-base md:text-lg">
          Estratégia, estética e performance em cada entrega.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {servicosPrincipais.map((servico) => (
          <motion.article
            key={servico.titulo}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-xl backdrop-blur-sm"
          >
            {/* halo dourado no hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl opacity-20 blur-md transition duration-300 group-hover:opacity-35"
              style={{ background: "linear-gradient(90deg,#E9D8A6,#C8B273)" }}
            />

            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Image
                src={servico.icone}
                alt=""
                width={26}
                height={26}
                className="opacity-90"
                aria-hidden
              />
            </div>
            <h3 className={`${display.className} text-xl text-white`}>{servico.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{servico.descricao}</p>

            {/* CTA secundário */}
            <div className="mt-6">
              <Link
                href="/servicos"
                className="text-sm font-semibold text-white/90 underline decoration-[#C8B273]/40 underline-offset-4 transition hover:text-white"
              >
                Ver detalhes
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA principal */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        <Link href="/servicos" className="group relative inline-flex items-center">
          <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
          <span
            className="relative inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold text-slate-900"
            style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
          >
            Ver todos os serviços
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

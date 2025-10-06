"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

/* ---------------------- Conteúdo ---------------------- */
const highlights = [
  {
    id: "redes-sociais-highlight",
    title: "Trabalho de Redes Sociais",
    texto:
      "Analisamos relatórios, roteirizamos Reels e entregamos engajamento real — com consistência.",
    cta: "Quero bombar nas redes",
    ctaLink: "/contato?servico=redes-sociais",
    media: [
      { type: "image" as const, src: "/demos/redes1.jpg", alt: "Relatório 1" },
      { type: "image" as const, src: "/demos/redes2.jpg", alt: "Relatório 2" },
      { type: "image" as const, src: "/demos/redes3.jpg", alt: "Engajamento alto" },
    ],
  },
  {
    id: "sites-highlight",
    title: "Desenvolvimento de Sites",
    texto:
      "Sites e landing pages de alta performance — rápidos, elegantes e pensados para conversão.",
    cta: "Quero meu site profissional",
    ctaLink: "/contato?servico=sites",
    media: [
      { type: "image" as const, src: "/demos/site1.jpg", alt: "Site Cliente A" },
      { type: "image" as const, src: "/demos/site2.jpg", alt: "Site Cliente B" },
      { type: "image" as const, src: "/demos/site3.jpg", alt: "Landing Page" },
    ],
  },
  {
    id: "filmaker-highlight",
    title: "Filmagem e Produção de Vídeos",
    texto:
      "Captações profissionais para redes, institucionais e eventos. Qualidade e storytelling visual.",
    cta: "Quero produzir meus vídeos",
    ctaLink: "/contato?servico=filmaker",
    media: [
      { type: "image" as const, src: "/demos/filmaker1.jpg", alt: "Captação em ação" },
    ],
  },
] as const;

/* ---------------------- Animações ---------------------- */
const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

const textStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const mediaEnter = {
  hidden: { opacity: 0, scale: 0.96, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: easeInOut } },
};

export default function ServicesHighlightsSection() {
  const [indices, setIndices] = useState<number[]>(highlights.map(() => 0));

  useEffect(() => {
    const timers = highlights.map((h, i) =>
      setInterval(() => {
        setIndices((prev) => {
          const next = [...prev];
          next[i] = (next[i] + 1) % h.media.length;
          return next;
        });
      }, 5200 + i * 400)
    );
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className={`${sans.className} relative w-full bg-[#0E1013] text-white py-28 px-6 overflow-hidden`}>
      {/* Fundo com textura e vinheta sutil */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_50%_10%,#181C22_0%,#0E1013_60%,#0B0D10_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto max-w-6xl space-y-28">
        {highlights.map((h, i) => (
          <motion.div
            key={h.id}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* Texto */}
            <motion.div className="md:w-1/2 text-center md:text-left space-y-5" variants={textStagger}>
              <motion.h3 variants={textItem} className={`${display.className} text-3xl text-white`}>
                {h.title}
              </motion.h3>
              <motion.p variants={textItem} className="text-white/80 leading-relaxed">
                {h.texto}
              </motion.p>
              <motion.div variants={textItem}>
                <Link href={h.ctaLink} className="group relative inline-flex items-center">
                  <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
                  <span
                    className="relative inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold text-slate-900"
                    style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
                  >
                    {h.cta}
                  </span>
                </Link>
              </motion.div>

              {/* linha animada decorativa */}
              <motion.div
                variants={textItem}
                className="h-px w-0 bg-gradient-to-r from-[#E9D8A6] to-[#C8B273]"
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeInOut, delay: 0.15 }}
              />
            </motion.div>

            {/* Mídia */}
            <motion.div className="md:w-1/2 w-full h-64 sm:h-72 md:h-80 relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-sm" variants={mediaEnter}>
              <AnimatePresence mode="wait" initial={false}>
                {h.media.map((m, j) =>
                  j === indices[i] ? (
                    m.type === "image" ? (
                      <motion.div
                        key={`${h.id}-${j}`}
                        initial={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
                        transition={{ duration: 0.6, ease: easeInOut }}
                        className="absolute inset-0"
                      >
                        <Image src={m.src} alt={m.alt} fill className="object-cover" priority={i === 0 && j === 0} />
                      </motion.div>
                    ) : (
                      <motion.video
                        key={`${h.id}-${j}`}
                        initial={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
                        transition={{ duration: 0.6, ease: easeInOut }}
                        src={m.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                        aria-label={m.alt}
                      />
                    )
                  ) : null
                )}
              </AnimatePresence>

              {/* Overlay/ornamento */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-20 blur-md"
                style={{ background: "linear-gradient(90deg,#E9D8A6,#C8B273)" }}
              />

              {/* Dots de progresso */}
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                {h.media.map((_, k) => (
                  <span
                    key={k}
                    className={`h-1.5 w-3 rounded-full transition ${k === indices[i] ? "bg-white" : "bg-white/40"}`}
                  />)
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

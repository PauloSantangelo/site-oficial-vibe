"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Link from "next/link";
import { 
  Instagram, 
  MessageCircle, 
  BarChart3, 
  Layout, 
  MousePointer2, 
  Smartphone,
  Video, 
  Film, 
  Camera,
  LucideIcon 
} from "lucide-react";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

/* ---------------------- Conteúdo ---------------------- */
interface Highlight {
  id: string;
  title: string;
  texto: string;
  cta: string;
  ctaLink: string;
  iconSet: LucideIcon[];
}

const highlights: Highlight[] = [
  {
    id: "redes-sociais-highlight",
    title: "Trabalho de Redes Sociais",
    texto: "Analisamos relatórios, roteirizamos Reels e entregamos engajamento real — com consistência e estratégia voltada para o público médico.",
    cta: "Quero bombar nas redes",
    ctaLink: "/contato?servico=redes-sociais",
    iconSet: [Instagram, MessageCircle, BarChart3],
  },
  {
    id: "sites-highlight",
    title: "Desenvolvimento de Sites",
    texto: "Sites e landing pages de alta performance — rápidos, elegantes e em total conformidade com as normas éticas do CFM.",
    cta: "Quero meu site profissional",
    ctaLink: "/contato?servico=sites",
    iconSet: [Layout, MousePointer2, Smartphone],
  },
  {
    id: "filmaker-highlight",
    title: "Filmagem e Produção de Vídeos",
    texto: "Captações profissionais para redes e institucionais. Qualidade cinematográfica para transmitir confiança aos seus pacientes.",
    cta: "Quero produzir meus vídeos",
    ctaLink: "/contato?servico=filmaker",
    iconSet: [Video, Film, Camera],
  },
];

/* ---------------------- Animações ---------------------- */
const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

const textStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

export default function ServicesHighlightsSection() {
  const [indices, setIndices] = useState<number[]>(highlights.map(() => 0));

  useEffect(() => {
    const timers = highlights.map((h, i) =>
      setInterval(() => {
        setIndices((prev) => {
          const next = [...prev];
          next[i] = (next[i] + 1) % h.iconSet.length;
          return next;
        });
      }, 3500 + i * 500)
    );
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className={`${sans.className} relative w-full bg-[#0E1013] text-white py-28 px-6 overflow-hidden`}>
      {/* Background Decorativo */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_50%_10%,#181C22_0%,#0E1013_60%,#0B0D10_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto max-w-6xl space-y-32">
        {highlights.map((h, i) => (
          <motion.div
            key={h.id}
            className={`flex flex-col-reverse md:flex-row items-center gap-12 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* Bloco de Texto */}
            <motion.div className="md:w-1/2 text-center md:text-left space-y-6" variants={textStagger}>
              <motion.h3 variants={textItem} className={`${display.className} text-4xl md:text-5xl text-white leading-tight`}>
                {h.title}
              </motion.h3>
              
              <motion.p variants={textItem} className="text-white/70 leading-relaxed text-lg max-w-lg">
                {h.texto}
              </motion.p>
              
              <motion.div variants={textItem} className="pt-2">
                <Link href={h.ctaLink} className="group relative inline-flex items-center">
                  <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
                  <span
                    className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold text-slate-900"
                    style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
                  >
                    {h.cta}
                  </span>
                </Link>
              </motion.div>

              {/* Linha decorativa inferior */}
              <motion.div
                variants={textItem}
                className="h-[2px] w-0 bg-gradient-to-r from-[#C8B273] to-transparent"
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Icon Showcase (Lado das imagens) */}
            <motion.div 
              className="md:w-1/2 w-full h-72 md:h-96 relative flex items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden group/card"
            >
              {/* Glow Centralizado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full bg-[#C8B273]/10 blur-[80px] transition-all group-hover/card:bg-[#C8B273]/20" />
              </div>

              <AnimatePresence mode="wait">
                {h.iconSet.map((Icon, j) =>
                  j === indices[i] ? (
                    <motion.div
                      key={`${h.id}-${j}`}
                      initial={{ opacity: 0, scale: 0.5, rotate: -15, filter: "blur(8px)" }}
                      animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.2, rotate: 15, filter: "blur(8px)" }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="relative z-10"
                    >
                      <Icon 
                        size={120} 
                        strokeWidth={1} 
                        className="text-[#E9D8A6] drop-shadow-[0_0_20px_rgba(233,216,166,0.2)]" 
                      />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>

              {/* Borda interna iluminada */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] rounded-[2.5rem] opacity-20 blur-sm transition duration-500 group-hover/card:opacity-40"
                style={{ background: "linear-gradient(135deg,#E9D8A6,transparent,#C8B273)" }}
              />

              {/* Dots de Navegação */}
              <div className="absolute bottom-8 flex gap-3">
                {h.iconSet.map((_, k) => (
                  <div
                    key={k}
                    className={`h-1.5 rounded-full transition-all duration-700 ${
                      k === indices[i] ? "w-8 bg-[#E9D8A6]" : "w-2 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
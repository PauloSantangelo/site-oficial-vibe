"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

/* ---------------------- Cor de destaque ---------------------- */
const GOLD = "#E1AD01";

/* ---------------------- Sites desenvolvidos ---------------------- */
const WEBSITES = Array.from({ length: 21 }, (_, i) => `/sites/${i + 1}.png`);

/* ---------------------- Linha animada reutilizável ---------------------- */
function MarqueeRow({
  images,
  direction = "left",
  duration = 60,
}: {
  images: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        }}
        className="flex gap-6 w-max"
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative h-[220px] w-[360px] flex-shrink-0
            overflow-hidden rounded-2xl border border-white/10
            bg-white/[0.04] shadow-xl"
          >
            <Image
              src={src}
              alt={`Site desenvolvido ${index + 1}`}
              fill
              className="object-cover"
              sizes="360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function WebsitesShowcaseSection() {
  return (
    <section
      id="sites"
      aria-label="Portfólio de sites e landing pages desenvolvidos"
      className={`${sans.className} relative overflow-hidden bg-[#0B1220] py-28 text-white`}
    >
      {/* Fundo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(30,55,100,0.35),transparent_70%)]" />

      {/* Cabeçalho */}
      <div className="mx-auto max-w-7xl px-6 mb-20">
        <div className="max-w-3xl">
          <h2
            className={`${display.className} text-balance text-3xl md:text-4xl leading-tight`}
          >
            Sites e landing pages que
            <span
              className="block mt-1 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${GOLD}, #C99600)`,
              }}
            >
              unem estética, performance e conversão.
            </span>
          </h2>

          <p className="mt-5 text-white/85 text-base md:text-lg">
            Um portfólio vivo de projetos desenvolvidos com foco em
            experiência do usuário, SEO técnico, velocidade e crescimento
            sustentável.
          </p>
        </div>
      </div>

      {/* GALERIAS */}
      <div className="space-y-10">
        <MarqueeRow images={WEBSITES.slice(0, 7)} duration={70} />
        <MarqueeRow images={WEBSITES.slice(7, 14)} direction="right" duration={55} />
        <MarqueeRow images={WEBSITES.slice(14, 21)} duration={80} />
      </div>

      {/* BENEFÍCIOS */}
      <div className="mx-auto mt-24 max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "100% responsivos",
            "SEO técnico otimizado",
            "Alta performance",
            "Arquitetura focada em conversão",
            "Código limpo e escalável",
            "Experiência premium",
            "Prontos para tráfego pago",
            "Pensados para crescimento",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.04]
              px-5 py-4 text-sm text-white/85 backdrop-blur-sm"
            >
              <span
                className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
                style={{ backgroundColor: GOLD }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Linha decorativa */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[88%]
      -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}

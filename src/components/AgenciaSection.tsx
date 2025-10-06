"use client";

import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes elegantes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export default function SobreSabrinaSection() {
  return (
    <section
      id="agencia"
      aria-labelledby="agencia-heading"
      className={`${sans.className} relative w-full bg-neutral-50 text-slate-900 px-4 sm:px-6 pt-24 pb-28 overflow-hidden`}
    >
      {/* Ornamento clarinho */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.15)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="agencia-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className={`${display.className} text-center text-3xl sm:text-4xl leading-tight mb-14`}
        >
          Sobre{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C8551] via-[#C7B079] to-[#AD9A63]">
            Sabrina Santangelo
          </span>
        </motion.h2>

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Duas fotos sobrepostas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="relative w-full"
          >
            {/* Foto 1 (maior) */}
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-neutral-200">
              <Image
                src="/sabrina8.jpg"
                alt="Retrato de Sabrina"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </figure>

            {/* Foto 2 (sobreposta) */}
            <figure className="absolute -right-6 bottom-[-10%] hidden w-[62%] translate-y-0 rounded-3xl bg-white shadow-xl ring-1 ring-neutral-200 md:block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/sabrina11.jpg"
                  alt="Sabrina em sessão de trabalho"
                  fill
                  sizes="(max-width: 768px) 50vw, 35vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </motion.div>

          {/* Texto resumido */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="md:pl-6"
          >
            <h3 className={`${display.className} text-2xl sm:text-3xl leading-snug mb-4`}>
              Fundadora da Vibe desde 2020
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Estrategista criativa que une direção de arte, conteúdo e performance para marcas que
              buscam sofisticação com resultado. Constrói presença digital com método e consistência.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm sm:text-base">
              <li>• Pós-graduação em Marketing & Growth</li>
              <li>• MBA em Marketing Estratégico Digital</li>
              <li>• Experiência com dezenas de marcas e segmentos</li>
              <li>• Mentorias de posicionamento e tráfego</li>
            </ul>

            {/* Faixa de credibilidade */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C7B079] to-[#9C8551]" />
              Desde 2020 refinando marcas com estética e estratégia
            </div>
          </motion.div>
        </div>

        {/* Frase de destaque (claro) */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <blockquote className="relative rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 text-center shadow-md">
            <div
              className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#C7B079] via-[#EADDB3] to-[#AD9A63] opacity-25 blur-md"
              aria-hidden
            />
            <span
              className={`${display.className} relative block text-lg sm:text-2xl leading-relaxed text-slate-900`}
            >
              &ldquo;Transformamos presença digital em estratégia. Não é sobre estar online, é sobre
              marcar presença.&rdquo;
            </span>
          </blockquote>
        </motion.figure>
      </div>
    </section>
  );
}

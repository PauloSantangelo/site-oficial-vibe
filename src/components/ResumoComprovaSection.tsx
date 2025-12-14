"use client";

import { motion, easeInOut } from "framer-motion";
import {
  ChartBarIcon,
  PlayCircleIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

/* ---------------------- Animações ---------------------- */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeInOut },
  },
};

/* ---------------------- Cor de destaque ---------------------- */
const GOLD = "#E1AD01";

/* ---------------------- Método 360 ---------------------- */
const metodo360 = [
  {
    icon: ChartBarIcon,
    title: "Diagnóstico estratégico",
    description:
      "Análise profunda de posicionamento, público, concorrência e oportunidades reais de crescimento.",
  },
  {
    icon: SparklesIcon,
    title: "Construção de marca",
    description:
      "Identidade visual, narrativa e proposta de valor alinhadas ao nível de autoridade desejado.",
  },
  {
    icon: PlayCircleIcon,
    title: "Conteúdo & distribuição",
    description:
      "Conteúdo estratégico, audiovisual e canais certos para gerar alcance, retenção e demanda.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Otimização & escala",
    description:
      "Leitura de dados, ajustes contínuos e aceleração do que realmente gera resultado.",
  },
];

/* ---------------------- Provas ---------------------- */
const proofs = [
  {
    icon: ChartBarIcon,
    title: "Crescimento real",
    description:
      "Evolução consistente baseada em métricas claras, não em promessas.",
  },
  {
    icon: PlayCircleIcon,
    title: "Conteúdo que escala",
    description:
      "Vídeos e campanhas com alto alcance, retenção e compartilhamento orgânico.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Autoridade digital",
    description:
      "Marcas mais fortes, confiáveis e desejadas no ambiente digital.",
  },
  {
    icon: SparklesIcon,
    title: "Posicionamento premium",
    description:
      "Percepção de valor alinhada ao nível do serviço entregue.",
  },
];

export default function ResumoComprovaSection() {
  return (
    <>
      {/* =====================================================
          SEÇÃO 1 — MÉTODO 360 (FUNDO BRANCO)
      ====================================================== */}
      <section
        className={`${sans.className} relative overflow-hidden bg-white px-6 py-24 text-slate-900`}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* Título */}
            <motion.h2
              variants={fadeUp}
              className={`${display.className} mb-6 text-balance text-3xl md:text-4xl leading-tight`}
            >
              Nosso método não é pontual.
              <span
                className="block mt-1 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${GOLD}, #C99600)`,
                }}
              >
                É uma estratégia 360°.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-14 max-w-2xl text-base md:text-lg text-slate-700 leading-relaxed"
            >
              Atuamos de forma integrada, conectando posicionamento, conteúdo,
              marca e crescimento. Nada isolado, nada aleatório.
            </motion.p>

            {/* Etapas do método */}
            <motion.div
              variants={fadeUp}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {metodo360.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-black/10 bg-white p-6 transition hover:shadow-md"
                  >
                    <Icon className="h-8 w-8" style={{ color: GOLD }} />

                    <h3 className={`${display.className} mt-4 text-lg`}>
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SEÇÃO 2 — PROVAS (FUNDO AZUL-MARINHO)
      ====================================================== */}
      <section
        id="resumo-comprova"
        aria-labelledby="resultados-heading"
        className={`${sans.className} relative overflow-hidden px-6 py-24 text-white`}
      >
        {/* Fundo */}
        <div className="absolute inset-0 -z-10 bg-[#0B1220]" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(30,55,100,0.35),transparent_70%)]"
        />

        <div className="mx-auto max-w-6xl">
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
              Método bem executado
              <span
                className="block mt-1 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${GOLD}, #C99600)`,
                }}
              >
                gera resultado previsível.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-2xl text-base md:text-lg text-white/90 leading-relaxed"
            >
              O crescimento não acontece por acaso. Ele é consequência direta
              de estratégia, execução e otimização contínua.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {proofs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:bg-white/[0.1]"
                  >
                    <Icon className="h-8 w-8" style={{ color: GOLD }} />

                    <h3 className={`${display.className} mt-4 text-lg`}>
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold text-black"
                style={{
                  background: `linear-gradient(180deg, #FFE08A, ${GOLD})`,
                }}
              >
                Quero aplicar esse método
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Ver resultados
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Linha decorativa */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>
    </>
  );
}

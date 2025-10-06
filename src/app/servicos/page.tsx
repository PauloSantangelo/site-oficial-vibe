"use client";

import { useEffect, useState } from "react";
import { motion, Variants, easeInOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

interface ServicoCompleto {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  cta: string;
  ctaLink: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const todosOsServicos: ServicoCompleto[] = [
  {
    id: "gerenciamento-redes-sociais",
    titulo: "Gerenciamento de Redes Sociais",
    subtitulo: "Conecte-se e engaje seu público onde ele está.",
    descricao:
      "Impulsionamos sua presença online com gestão completa: estratégia, calendário editorial, criação (posts, Reels e stories), relatórios e roteiros para captação.",
    cta: "Ver planos",
    ctaLink: "/contato?servico=redes-sociais",
  },
  {
    id: "filmaker",
    titulo: "Filmaker e Produção de Vídeos",
    subtitulo: "Vídeos estratégicos que conectam e encantam.",
    descricao:
      "Captações para redes, institucionais e eventos. Da direção à pós, entregamos conteúdo visual profissional, fiel à sua marca.",
    cta: "Solicitar vídeo",
    ctaLink: "/contato?servico=filmaker",
  },
  {
    id: "branding-identidade",
    titulo: "Branding e Identidade Visual",
    subtitulo: "Sua marca com personalidade forte e coerente.",
    descricao:
      "Logo, paleta, tipografia e manual — um sistema visual elegante e consistente para posicionar seu negócio com clareza.",
    cta: "Criar identidade",
    ctaLink: "/contato?servico=branding",
  },
  {
    id: "sites-landingpages",
    titulo: "Criação de Sites e Landing Pages",
    subtitulo: "Seu site como ponto forte de conversão.",
    descricao:
      "Sites institucionais, e-commerces e LPs com UX refinada, performance e SEO — do conceito ao publish.",
    cta: "Quero meu site",
    ctaLink: "/contato?servico=sites",
  },
  {
    id: "pdfs-apresentacoes",
    titulo: "PDFs e Apresentações Profissionais",
    subtitulo: "Documentos visuais que impressionam.",
    descricao:
      "Apresentações e materiais comerciais com storytelling e direção de arte para comunicar com clareza e impacto.",
    cta: "Solicitar apresentação",
    ctaLink: "/contato?servico=pdf",
  },
  {
    id: "trafego-pago",
    titulo: "Tráfego Pago (Meta & Google)",
    subtitulo: "Aumente seu alcance com anúncios eficientes.",
    descricao:
      "Campanhas com segmentação precisa, criativos que performam e mensuração transparente para gerar demanda real.",
    cta: "Receber proposta",
    ctaLink: "/contato?servico=trafego",
  },
];

/* ---------------------- Util: Scrollspy leve para TOC ---------------------- */
function useSectionSpy(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const onScroll = () => {
      let current = active;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

export default function ServicosPage() {
  const ids = todosOsServicos.map((s) => s.id);
  const active = useSectionSpy(ids);

  const smoothTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className={`${sans.className} relative min-h-screen bg-[#0E1013] text-white pt-32 pb-24 overflow-hidden`}>
      {/* Fundo elegante */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_5%,#1B1E25_0%,#0E1013_60%,#0B0D10_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header da página */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="text-center mb-12"
        >
          <h1 className={`${display.className} text-4xl md:text-6xl leading-tight`}>Nossos Serviços Completos</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Soluções integradas para elevar sua marca com estética, estratégia e performance.
          </p>
        </motion.header>

        {/* TOC (pílulas) */}
        <div className="sticky top-20 z-30 mb-10 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md">
          <nav className="flex min-w-max items-center gap-2 text-sm">
            {todosOsServicos.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => smoothTo(e, s.id)}
                className={`inline-flex items-center rounded-full px-4 py-2 transition ${
                  active === s.id
                    ? "bg-white text-slate-900"
                    : "text-white/85 hover:bg-white/10"
                }`}
              >
                {s.titulo}
              </a>
            ))}
          </nav>
        </div>

        {/* Lista de seções */}
        {todosOsServicos.map((servico, index) => (
          <motion.section
            key={servico.id}
            id={servico.id}
            aria-labelledby={`${servico.id}-title`}
            className={`relative my-16 grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-sm md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="md:px-6">
              <h2 id={`${servico.id}-title`} className={`${display.className} text-3xl md:text-4xl text-white`}>
                {servico.titulo}
              </h2>
              <h3 className="mt-2 text-base md:text-lg text-white/80">{servico.subtitulo}</h3>
              <p className="mt-4 text-white/85 leading-relaxed">{servico.descricao}</p>

              <div className="mt-6">
                <Link href={servico.ctaLink} className="group relative inline-flex items-center">
                  <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
                  <span
                    className="relative inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold text-slate-900"
                    style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6_45%,#C8B273)" }}
                  >
                    {servico.cta}
                  </span>
                </Link>
              </div>
            </div>

            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src={`/demos/${servico.id}.webp`}
                alt={`Imagem ilustrativa para ${servico.titulo}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0}
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-3 text-xs text-white/80">
                {servico.titulo}
              </figcaption>
              {/* halo sutil */}
              <span aria-hidden className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-20 blur-md" style={{ background: "linear-gradient(90deg,#E9D8A6,#C8B273)" }} />
            </figure>
          </motion.section>
        ))}

        {/* CTA final */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="mt-24 text-center"
        >
          <h2 className={`${display.className} text-3xl md:text-4xl`}>Pronto para elevar sua marca?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">Converse com a Vibe e desenhe um plano sob medida para o seu momento.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contato" className="group relative inline-flex items-center">
              <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
              <span
                className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-slate-900"
                style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6_45%,#C8B273)" }}
              >
                Converse conosco agora
              </span>
            </Link>
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10">
              Voltar à página inicial
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import { DM_Serif_Display, Manrope } from "next/font/google";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Clapperboard,
  FileText,
  Globe,
  Layers3,
  Megaphone,
  Palette,
  Sparkles,
} from "lucide-react";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

/* ---------------------- Cores ---------------------- */
const NAVY = "#07101E";
const GOLD = "#E1AD01";
const INK = "#0B1220";

/* ---------------------- Tipagem ---------------------- */
type Service = {
  id: string;
  title: string;
  subtitle: string;
  promise: string;
  points: string[];
  deliverables: string[];
  cta: { label: string; href: string };
  icon: React.ElementType;
  tone: "dark" | "light";
};

/* ---------------------- Serviços ---------------------- */
const services: Service[] = [
  {
    id: "gerenciamento-redes-sociais",
    title: "Gerenciamento de Redes Sociais",
    subtitle: "Presença diária, posicionamento claro e conteúdo que sustenta autoridade.",
    promise:
      "Você não precisa postar mais. Precisa postar com intenção, consistência e direção editorial.",
    points: [
      "Calendário com pauta estratégica (crescimento, autoridade e conversão).",
      "Criação de copies e criativos alinhados à sua marca.",
      "Roteiros prontos para captação e organização do perfil.",
    ],
    deliverables: [
      "Planejamento mensal",
      "Criação de posts + stories",
      "Relatórios e otimizações",
    ],
    cta: { label: "Ver planos", href: "/contato?servico=redes-sociais" },
    icon: Layers3,
    tone: "dark",
  },
  {
    id: "filmaker",
    title: "Filmaker e Produção de Vídeos",
    subtitle: "Vídeos que prendem atenção e transformam percepção de valor.",
    promise:
      "Vídeo bom não é o que fica bonito. É o que deixa claro por que você é a escolha certa.",
    points: [
      "Direção + captação com linguagem alinhada ao seu público.",
      "Edição pensada para retenção (gancho, ritmo, clareza).",
      "Conteúdo para Reels, institucionais e campanhas.",
    ],
    deliverables: ["Roteirização", "Captação", "Edição e versões por formato"],
    cta: { label: "Solicitar vídeo", href: "/contato?servico=filmaker" },
    icon: Clapperboard,
    tone: "light",
  },
  {
    id: "branding-identidade",
    title: "Branding e Identidade Visual",
    subtitle: "Uma marca coerente: reconhecível, sofisticada e memorável.",
    promise:
      "Marca forte não é enfeite. É sistema. E sistema reduz ruído e aumenta confiança.",
    points: [
      "Identidade visual com base estratégica.",
      "Paleta, tipografia e aplicações consistentes.",
      "Direção de arte para elevar o padrão do conteúdo.",
    ],
    deliverables: ["Logo", "Sistema visual", "Manual e aplicações"],
    cta: { label: "Criar identidade", href: "/contato?servico=branding" },
    icon: Palette,
    tone: "dark",
  },
  {
    id: "sites-landingpages",
    title: "Criação de Sites e Landing Pages",
    subtitle: "Design premium, performance e SEO.",
    promise:
      "Seu site não é um cartão de visitas. É um ativo de conversão trabalhando 24/7.",
    points: [
      "UX pensado para conversão sem poluir estética.",
      "Performance, SEO e responsividade real.",
      "Estrutura clara com CTA bem posicionado.",
    ],
    deliverables: ["Arquitetura", "UI moderna", "Deploy e acompanhamento"],
    cta: { label: "Quero meu site", href: "/contato?servico=sites" },
    icon: Globe,
    tone: "light",
  },
  {
    id: "pdfs-apresentacoes",
    title: "PDFs e Apresentações Profissionais",
    subtitle: "Materiais que vendem sem parecer venda.",
    promise:
      "Apresentação boa não tenta convencer. Ela deixa a escolha óbvia.",
    points: [
      "Storytelling claro e ritmo visual.",
      "Design editorial premium.",
      "Materiais para proposta, mídia kit e institucional.",
    ],
    deliverables: ["Copy", "Design", "Versões finais"],
    cta: { label: "Solicitar apresentação", href: "/contato?servico=pdf" },
    icon: FileText,
    tone: "dark",
  },
  {
    id: "trafego-pago",
    title: "Tráfego Pago (Meta & Google)",
    subtitle: "Anúncios com estratégia e mensuração limpa.",
    promise:
      "Tráfego não é botão de acelerar. É processo, leitura e otimização.",
    points: [
      "Campanhas por objetivo real.",
      "Criativos alinhados ao posicionamento.",
      "Acompanhamento transparente e focado em resultado.",
    ],
    deliverables: ["Setup", "Criativos", "Otimizações"],
    cta: { label: "Receber proposta", href: "/contato?servico=trafego" },
    icon: BarChart3,
    tone: "light",
  },
];

/* ---------------------- Scrollspy ---------------------- */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: 0.35 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function ServicosPage() {
  const ids = useMemo(() => services.map((s) => s.id), []);
  const active = useActiveSection(ids);

  const smoothTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`${sans.className}`} style={{ background: NAVY }}>
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.15]"
          style={{
            background:
              "radial-gradient(1200px 600px at 30% 10%, rgba(225,173,1,0.18), transparent 60%)",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Texto */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <Megaphone className="h-4 w-4" />
              Soluções completas com estética e estratégia
            </div>

            <h1 className={`${display.className} mt-6 text-5xl text-white`}>
              Serviços que elevam sua marca sem depender de sorte.
            </h1>

            <p className="mt-5 max-w-2xl text-white/80 text-lg">
              Estratégia, copy, design e performance trabalhando juntos para gerar
              posicionamento e conversão.
            </p>
          </div>

          {/* Navegação lateral */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-semibold mb-2">
                Navegar pelos serviços
              </div>

              <div className="grid gap-2">
                {services.map((s) => {
                  const Icon = s.icon;
                  const isActive = active === s.id;

                  return (
                    <button
                      key={s.id}
                      onClick={() => smoothTo(s.id)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                        isActive
                          ? "bg-white/10 border border-white/25"
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{
                          background: isActive
                            ? `linear-gradient(135deg, ${GOLD}, #C99600)`
                            : "rgba(255,255,255,0.08)",
                        }}
                      >
                        <Icon
                          className={`h-4 w-4 ${
                            isActive ? "text-[#07101E]" : "text-white"
                          }`}
                        />
                      </span>
                      <span className="text-sm font-medium text-white truncate">
                        {s.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SEÇÕES DETALHADAS */}
      {services.map((s) => {
        const Icon = s.icon;
        const isLight = s.tone === "light";

        return (
          <section
            key={s.id}
            id={s.id}
            className="py-20"
            style={{
              background: isLight ? "#FFFFFF" : NAVY,
              color: isLight ? INK : "#FFFFFF",
            }}
          >
            <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
              <div>
                <Icon className="h-8 w-8 mb-4" style={{ color: GOLD }} />
                <h2 className={`${display.className} text-4xl mb-3`}>
                  {s.title}
                </h2>
                <p className="opacity-80 mb-6">{s.subtitle}</p>

                <p className="text-lg mb-6">{s.promise}</p>

                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <BadgeCheck className="h-5 w-5" style={{ color: GOLD }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={s.cta.href}
                  className="inline-flex items-center gap-2 mt-8 rounded-full px-6 py-3 font-semibold"
                  style={{
                    background: `linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)`,
                    color: INK,
                  }}
                >
                  {s.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* O que entregamos */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="font-semibold mb-4">O que entregamos</div>
                <ul className="space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3">
                      <BadgeCheck className="h-5 w-5" style={{ color: GOLD }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl p-5 bg-white/5">
                  <div className="flex items-center gap-2 font-semibold">
                    <Sparkles className="h-4 w-4" style={{ color: GOLD }} />
                    Direção + execução
                  </div>
                  <p className="mt-2 text-sm opacity-80">
                    Do planejamento ao clique final, tudo conversa com a marca.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Link from "next/link";
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
const NAVY = "#07101E"; // azul marinho escuro
const GOLD = "#E1AD01";
const INK = "#0B1220";

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
    deliverables: ["Planejamento mensal", "Criação de posts + stories", "Relatórios e otimizações"],
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
      "Identidade visual com base estratégica, não só estética.",
      "Paleta, tipografia e aplicações consistentes.",
      "Direção de arte para elevar o padrão do seu conteúdo.",
    ],
    deliverables: ["Logo", "Sistema visual", "Manual e aplicações"],
    cta: { label: "Criar identidade", href: "/contato?servico=branding" },
    icon: Palette,
    tone: "dark",
  },
  {
    id: "sites-landingpages",
    title: "Criação de Sites e Landing Pages",
    subtitle: "Design premium, performance e SEO sem perder elegância.",
    promise:
      "Seu site não é um cartão de visitas. É um ativo de conversão trabalhando 24/7.",
    points: [
      "UX pensado para conversão sem poluir a estética.",
      "Performance, SEO e responsividade de verdade.",
      "Estrutura enxuta, clara e com CTA bem posicionado.",
    ],
    deliverables: ["Arquitetura", "UI moderna", "Deploy e acompanhamento"],
    cta: { label: "Quero meu site", href: "/contato?servico=sites" },
    icon: Globe,
    tone: "light",
  },
  {
    id: "pdfs-apresentacoes",
    title: "PDFs e Apresentações Profissionais",
    subtitle: "Materiais que vendem sem parecer ‘venda’.",
    promise:
      "Apresentação boa não tenta convencer. Ela deixa a escolha óbvia.",
    points: [
      "Storytelling com clareza e ritmo visual.",
      "Design editorial premium (sem cara de template).",
      "Materiais para proposta, mídia kit, institucional e pitch.",
    ],
    deliverables: ["Copy", "Design", "Versões para envio e impressão"],
    cta: { label: "Solicitar apresentação", href: "/contato?servico=pdf" },
    icon: FileText,
    tone: "dark",
  },
  {
    id: "trafego-pago",
    title: "Tráfego Pago (Meta & Google)",
    subtitle: "Anúncios com estratégia, criativos certos e mensuração limpa.",
    promise:
      "Tráfego não é botão de ‘acelerar’. É processo de teste, leitura e otimização.",
    points: [
      "Estrutura de campanha por objetivo (demanda, captação, remarketing).",
      "Criativos alinhados ao seu posicionamento, não genéricos.",
      "Acompanhamento com transparência e foco em resultado.",
    ],
    deliverables: ["Setup", "Criativos", "Otimizações e relatórios"],
    cta: { label: "Receber proposta", href: "/contato?servico=trafego" },
    icon: BarChart3,
    tone: "light",
  },
];

/* ---------------------- Scrollspy (sem perfumaria e sem bugs) ---------------------- */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.18, 0.28, 0.38], rootMargin: "-20% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
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
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className={`${sans.className} min-h-screen`} style={{ background: NAVY }}>
      {/* Header fixo */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#07101E]/80 backdrop-blur"
        style={{ backgroundColor: "rgba(7,16,30,0.82)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 select-none">
            <span
              aria-hidden
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${GOLD}, #C99600)`,
                boxShadow: "0 10px 30px rgba(225,173,1,0.18)",
              }}
            >
              <Sparkles className="h-5 w-5 text-[#07101E]" />
            </span>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-tight">VibeMed</div>
              <div className="text-white/65 text-xs">Serviços</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <button onClick={() => smoothTo("servicos")} className="hover:text-white transition">
              Serviços
            </button>
            <button onClick={() => smoothTo("como-funciona")} className="hover:text-white transition">
              Como funciona
            </button>
            <button onClick={() => smoothTo("cta")} className="hover:text-white transition">
              Contato
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition"
              style={{
                color: INK,
                background: `linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)`,
              }}
            >
              Falar com a Vibe <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Espaço do header */}
      <div className="h-[76px]" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14]"
          style={{
            background:
              "radial-gradient(1200px 600px at 30% 10%, rgba(225,173,1,0.18), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(255,255,255,0.06), transparent 55%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <Megaphone className="h-4 w-4" />
                Soluções completas, com estética e estratégia.
              </div>

              <h1
                className={`${display.className} mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-white`}
              >
                Serviços que elevam sua marca sem depender de “sorte” no orgânico.
              </h1>

              <p className="mt-5 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">
                A VibeMed une direção criativa, copy, design e performance para transformar presença digital
                em <span style={{ color: GOLD }}>posicionamento</span> e <span style={{ color: GOLD }}>conversão</span>.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => smoothTo("servicos")}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-sm sm:text-base border border-white/15 bg-white/5 text-white hover:bg-white/10 transition"
                >
                  Ver serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-sm sm:text-base"
                  style={{
                    color: INK,
                    background: `linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)`,
                  }}
                >
                  Quero uma proposta
                  <BadgeCheck className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                {[
                  { k: "Estratégia", v: "sem achismo" },
                  { k: "Copy", v: "com intenção" },
                  { k: "Design", v: "premium" },
                  { k: "Performance", v: "mensurável" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-white font-semibold text-sm">{item.k}</div>
                    <div className="text-white/70 text-xs mt-1">{item.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navegação mobile (sem overflow horizontal) */}
            <div className="lg:sticky lg:top-[100px]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-white font-semibold">Navegar pelos serviços</div>
                <p className="text-white/70 text-sm mt-1">
                  Selecione e vá direto ao ponto.
                </p>

                <div className="mt-4 md:hidden">
                  <label className="text-white/70 text-xs">Serviço</label>
                  <select
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-[#07101E] px-4 py-3 text-white outline-none"
                    value={active}
                    onChange={(e) => smoothTo(e.target.value)}
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4 hidden md:block">
                  <div className="grid gap-2">
                    {services.map((s) => {
                      const Icon = s.icon;
                      const isActive = active === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => smoothTo(s.id)}
                          className={`w-full flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                            isActive
                              ? "border-white/25 bg-white/10 text-white"
                              : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10"
                          }`}
                        >
                          <span
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{
                              background: isActive
                                ? `linear-gradient(135deg, ${GOLD}, #C99600)`
                                : "rgba(255,255,255,0.06)",
                            }}
                          >
                            <Icon className={`h-4 w-4 ${isActive ? "text-[#07101E]" : "text-white"}`} />
                          </span>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm truncate">{s.title}</div>
                            <div className="text-xs text-white/65 truncate">{s.subtitle}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resumo em cards (sem scroll horizontal) */}
      <section id="servicos" className="mx-auto max-w-7xl px-5 sm:px-6 pb-14 sm:pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => smoothTo(s.id)}
                className="group text-left rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${GOLD}, #C99600)` }}
                  >
                    <Icon className="h-5 w-5 text-[#07101E]" />
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-white transition">
                    Ver detalhes <ArrowRight className="inline h-4 w-4 ml-1" />
                  </span>
                </div>
                <div className="mt-4">
                  <div className="text-white font-semibold">{s.title}</div>
                  <div className="text-white/70 text-sm mt-1">{s.subtitle}</div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Seções detalhadas (alternando navy/white) */}
      <div className="space-y-0">
        {services.map((s, idx) => {
          const Icon = s.icon;
          const isLight = s.tone === "light";

          return (
            <section
              key={s.id}
              id={s.id}
              className="py-14 sm:py-20"
              style={{
                background: isLight ? "#FFFFFF" : NAVY,
                color: isLight ? INK : "#FFFFFF",
              }}
            >
              <div className="mx-auto max-w-7xl px-5 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: easeInOut }}
                  className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-start"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${GOLD}, #C99600)`,
                          boxShadow: "0 12px 28px rgba(225,173,1,0.14)",
                        }}
                      >
                        <Icon className="h-5 w-5 text-[#07101E]" />
                      </span>
                      <div>
                        <h2 className={`${display.className} text-3xl sm:text-4xl leading-tight`}>
                          {s.title}
                        </h2>
                        <p className="mt-1 text-sm sm:text-base opacity-80">{s.subtitle}</p>
                      </div>
                    </div>

                    <p className="mt-6 text-base sm:text-lg leading-relaxed opacity-90">
                      {s.promise}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {s.points.map((p) => (
                        <div
                          key={p}
                          className="flex gap-3 rounded-2xl border p-4"
                          style={{
                            borderColor: isLight ? "rgba(11,18,32,0.12)" : "rgba(255,255,255,0.12)",
                            backgroundColor: isLight ? "rgba(7,16,30,0.03)" : "rgba(255,255,255,0.06)",
                          }}
                        >
                          <span
                            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                            style={{ background: `linear-gradient(135deg, ${GOLD}, #C99600)` }}
                          >
                            <BadgeCheck className="h-4 w-4 text-[#07101E]" />
                          </span>
                          <p className="text-sm sm:text-base opacity-90">{p}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={s.cta.href}
                        className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-sm sm:text-base"
                        style={{
                          color: INK,
                          background: `linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)`,
                        }}
                      >
                        {s.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>

                      <button
                        onClick={() => smoothTo("cta")}
                        className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-sm sm:text-base border transition"
                        style={{
                          borderColor: isLight ? "rgba(11,18,32,0.18)" : "rgba(255,255,255,0.18)",
                          backgroundColor: isLight ? "rgba(7,16,30,0.04)" : "rgba(255,255,255,0.06)",
                        }}
                      >
                        Quero entender o melhor formato <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="rounded-3xl border p-6"
                    style={{
                      borderColor: isLight ? "rgba(11,18,32,0.12)" : "rgba(255,255,255,0.12)",
                      backgroundColor: isLight ? "rgba(7,16,30,0.03)" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">O que entregamos</div>
                      <span className="text-xs opacity-70">pacote completo</span>
                    </div>

                    <ul className="mt-4 grid gap-3">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span
                            className="inline-flex h-7 w-7 items-center justify-center rounded-lg"
                            style={{ background: `linear-gradient(135deg, ${GOLD}, #C99600)` }}
                          >
                            <BadgeCheck className="h-4 w-4 text-[#07101E]" />
                          </span>
                          <span className="text-sm sm:text-base opacity-90">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 rounded-2xl p-5"
                      style={{
                        background:
                          isLight
                            ? "linear-gradient(180deg, rgba(7,16,30,0.04), rgba(7,16,30,0.02))"
                            : "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
                        border: isLight ? "1px solid rgba(11,18,32,0.10)" : "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        <Sparkles className="h-4 w-4" style={{ color: GOLD }} />
                        Direção + execução
                      </div>
                      <p className="mt-2 text-sm opacity-80 leading-relaxed">
                        Aqui o foco é entregar uma experiência de marca consistente: do conteúdo ao clique final.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Como funciona */}
      <section id="como-funciona" className="py-14 sm:py-20" style={{ background: NAVY }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {[
              {
                title: "Diagnóstico",
                text: "A gente mapeia objetivo, momento e gargalos para evitar estratégia genérica.",
                icon: BadgeCheck,
              },
              {
                title: "Plano de execução",
                text: "Direção editorial + cronograma + entregáveis claros. Você sabe o que vai acontecer.",
                icon: Layers3,
              },
              {
                title: "Otimização",
                text: "Ajuste contínuo com base em dados: o que funciona fica. O resto evolui.",
                icon: BarChart3,
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${GOLD}, #C99600)` }}
                  >
                    <Icon className="h-5 w-5 text-[#07101E]" />
                  </div>
                  <div className="mt-4 text-white font-semibold">{step.title}</div>
                  <p className="mt-2 text-white/75 text-sm leading-relaxed">{step.text}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta" className="py-16 sm:py-20" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 text-center">
          <h2 className={`${display.className} text-3xl sm:text-4xl`} style={{ color: INK }}>
            Quer um plano sob medida (sem enrolação)?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base" style={{ color: "rgba(11,18,32,0.75)" }}>
            Você explica o objetivo. A gente desenha a rota e assume a execução com padrão premium.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-sm sm:text-base"
              style={{
                color: INK,
                background: `linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)`,
              }}
            >
              Falar com a Vibe agora <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-sm sm:text-base border"
              style={{ borderColor: "rgba(11,18,32,0.18)", color: INK, backgroundColor: "rgba(7,16,30,0.03)" }}
            >
              Voltar para o início
            </Link>
          </div>

          <p className="mt-6 text-xs" style={{ color: "rgba(11,18,32,0.60)" }}>
            Atendimento com estratégia, direção criativa e entrega consistente.
          </p>
        </div>
      </section>
    </div>
  );
}

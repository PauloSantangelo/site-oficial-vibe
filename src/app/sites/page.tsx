"use client";

import WebsitesShowcaseSection from "@/components/WebsitesShowcaseSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Serif_Display, Manrope } from "next/font/google";
// Ícones importados para modernizar o design
import { Smartphone, Code, Zap, CheckCircle, Gauge, User, RefreshCcw } from "lucide-react"; 

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

const GOLD = "#E1AD01";
const TEXT_COLOR = "text-slate-900"; // Cor do texto principal para fundo branco
const BACKGROUND_COLOR = "bg-white"; // Novo fundo branco

// ==========================================================
// Componente de Vantagens (Novo bloco de cards modernizado)
// ==========================================================

const VANTAGENS_DATA = [
    { text: "100% Responsivos", icon: Smartphone, description: "Perfeito em qualquer dispositivo." },
    { text: "SEO Técnico Otimizado", icon: Code, description: "Código limpo para melhor ranking." },
    // Ícone 'Gauge' para Alta Performance
    { text: "Alta Performance", icon: Gauge, description: "Carregamento ultra-rápido." }, 
    { text: "Arquitetura Conversão", icon: Zap, description: "Projetado para gerar leads e vendas." },
    { text: "Experiência Premium", icon: User, description: "Foco total na jornada do usuário." },
    { text: "Pensados para o Crescimento", icon: RefreshCcw, description: "Escalável e pronto para evoluir." },
];

function VantagensSection() {
    return (
        // Fundo agora é branco (BACKGROUND_COLOR)
        <div className={`${BACKGROUND_COLOR} py-20`}> 
            <div className="mx-auto max-w-6xl px-6">
                {/* Texto principal agora em TEXT_COLOR (slate-900) */}
                <h2 className={`${display.className} ${TEXT_COLOR} text-3xl md:text-4xl mb-12`}>
                    Sites e landing pages que unem <span style={{ color: GOLD }}>estética, performance e conversão.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {VANTAGENS_DATA.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                // Card com fundo branco, sombra e borda mais escura
                                className={`relative rounded-xl p-6 border border-neutral-200 bg-white shadow-md transition-all duration-300 hover:border-neutral-300 hover:shadow-lg`}
                            >
                                <Icon size={28} style={{ color: GOLD }} className="mb-3" />
                                <h3 className={`${TEXT_COLOR} text-lg font-semibold`}>{item.text}</h3>
                                {/* Descrição com cor mais suave */}
                                <p className="text-slate-600 text-sm mt-1">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function SitesPage() {
    // Selos de qualidade HERO atualizados com ícones
    const HERO_SEALS = [
        { text: "Design responsivo", icon: Smartphone },
        { text: "SEO técnico", icon: Code },
        { text: "Alta performance", icon: Zap },
        { text: "Arquitetura focada em conversão", icon: CheckCircle },
    ];

    return (
        <>
            <Header />

            <main className={sans.className}>
                {/* =====================================================
                    HERO PREMIUM DA PÁGINA (Mantido escuro para contraste)
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#0B1220] pt-40 pb-28 text-white">
                    {/* Luz de fundo */}
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_15%,rgba(30,55,100,0.45),transparent_70%)]" />

                    {/* Grid sutil */}
                    <div
                        aria-hidden
                        className="absolute inset-0 -z-10 opacity-[0.06]
                        [background-image:linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),
                        linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)]
                        [background-size:56px_56px]"
                    />

                    <div className="mx-auto max-w-6xl px-6">
                        <h1
                            className={`${display.className} max-w-4xl text-balance text-4xl md:text-5xl leading-tight`}
                        >
                            Sites e landing pages
                            <span
                                className="block mt-2 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(90deg, ${GOLD}, #C99600)`,
                                }}
                            >
                                criados para converter, escalar e posicionar.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-white/85 text-lg leading-relaxed">
                            Projetos desenvolvidos com foco em experiência do usuário,
                            autoridade de marca, SEO técnico e performance real.
                        </p>

                        {/* Selos de qualidade atualizados com ícones */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            {HERO_SEALS.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="inline-flex items-center gap-2 rounded-full
                                        border border-white/15 bg-white/5 px-5 py-2
                                        text-sm text-white/80 backdrop-blur-sm transition-colors duration-300 hover:border-white/30"
                                    >
                                        <Icon size={16} style={{ color: GOLD }} />
                                        {item.text}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Linha decorativa */}
                    <div
                        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[88%]
                        -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </section>
                
                {/* =====================================================
                    VANTAGENS (Agora com fundo branco)
                ====================================================== */}
                <VantagensSection />
                
                {/* =====================================================
                    PORTFÓLIO DE SITES (O componente WebsitesShowcaseSection 
                    precisará de bg-white/bg-neutral-50 internamente para ter fundo branco)
                ====================================================== */}
                <WebsitesShowcaseSection />
            </main>

            <Footer />
        </>
    );
}
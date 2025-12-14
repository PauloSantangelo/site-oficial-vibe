import WebsitesShowcaseSection from "@/components/WebsitesShowcaseSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

const GOLD = "#E1AD01";

export const metadata = {
  title: "Sites e Landing Pages | Agência Vibe",
  description:
    "Sites e landing pages desenvolvidos pela Agência Vibe com foco em performance, SEO técnico, conversão e design premium.",
};

export default function SitesPage() {
  return (
    <>
      <Header />

      <main className={sans.className}>
        {/* =====================================================
            HERO PREMIUM DA PÁGINA
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

            {/* Selos de qualidade */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                "Design responsivo",
                "SEO técnico",
                "Alta performance",
                "Arquitetura focada em conversão",
              ].map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full
                  border border-white/15 bg-white/5 px-5 py-2
                  text-sm text-white/80 backdrop-blur-sm"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Linha decorativa */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[88%]
            -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </section>

        {/* =====================================================
            PORTFÓLIO DE SITES
        ====================================================== */}
        <WebsitesShowcaseSection />
      </main>

      <Footer />
    </>
  );
}

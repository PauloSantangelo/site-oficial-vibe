"use client";

import Link from "next/link";
import Image from "next/image";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { Instagram, Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#agencia", label: "Agência" },
  { href: "#resultados", label: "Resultados" },
  { href: "/servicos", label: "Serviços" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smoothTo = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <footer className={`${sans.className} relative overflow-hidden bg-[#0D0D23] text-white`}
      aria-label="Rodapé da Agência Vibe"
    >
      {/* textura/vinheta */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_10%,#171731_0%,#0D0D23_60%,#0B0B1C_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-center">
          {/* Marca + texto */}
          <div className="text-center md:text-left">
            <Link href="/" aria-label="Página inicial" className="inline-flex items-center gap-3">
              <Image src="/logo-header.webp" alt="Logo Vibe" width={44} height={44} className="h-10 w-auto" />
              <span className={`${display.className} text-xl`}>Agência Vibe</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-white/80">
              Transformamos presença digital em autoridade e resultado — com estética, estratégia e performance.
            </p>
          </div>

          {/* Navegação rápida */}
          <nav className={`${display.className} text-center md:text-left`} aria-label="Navegação do rodapé">
            <h3 className="text-lg">Mapa do site</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => smoothTo(e, l.href)}
                    className="text-white/85 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + sociais */}
          <div className="text-center md:text-right">
            <a href="#contato" onClick={(e) => smoothTo(e, "#contato")} className="group relative inline-flex items-center">
              <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
              <span
                className="relative inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold text-slate-900"
                style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
              >
                Conversar agora
              </span>
            </a>
            <div className="mt-4 flex items-center justify-center md:justify-end gap-3">
              <a href="https://instagram.com/agenciavibe" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://wa.me/5514999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition hover:bg-white/10">
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha e legal */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="mt-4 flex flex-col items-center justify-between gap-2 text-center text-xs text-white/70 md:flex-row md:text-left">
          <p>© {year} Agência Vibe. Todos os direitos reservados.</p>
          <p className="opacity-90">Bauru • Botucatu • Região</p>
        </div>
      </div>

      {/* Botão back-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={`fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 p-2 text-white shadow-md backdrop-blur transition hover:bg-white/15 ${
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}

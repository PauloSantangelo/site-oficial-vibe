"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

/* ---------------------- Helpers ---------------------- */
const links = [
  { href: "#inicio", label: "Início" },
  { href: "#agencia", label: "Agência" },
  { href: "#resultados", label: "Resultados" },
  { href: "/servicos", label: "Serviços" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Suaviza a rolagem para âncoras internas
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
        setHash(href);
        setMenuOpen(false);
      }
    } else {
      setMenuOpen(false);
    }
  };

  const navLinkClass = useMemo(
    () =>
      "relative transition group inline-flex items-center text-sm font-medium tracking-wide",
    []
  );

  const navUnderline = (active: boolean) =>
    `after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-[#E9D8A6] after:to-[#C8B273] after:transition-all after:duration-300 ${
      active ? "after:w-8 text-slate-900" : "hover:after:w-8 text-slate-700 hover:text-slate-900"
    }`;

  return (
    <header
      className={`${sans.className} fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/10 shadow-sm"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="rounded-xl p-1.5 transition hover:shadow-sm hover:ring-1 hover:ring-[#C7B079]/40"
          aria-label="Página inicial"
        >
          <Image
            src="/logo-header.webp"
            alt="Logo Vibe"
            width={44}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className={`${display.className} flex items-center gap-7`}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className={`${navLinkClass} ${navUnderline(hash === l.href)}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contato"
            onClick={(e) => handleAnchorClick(e, "#contato")}
            className="group relative inline-flex items-center"
          >
            <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
            <span
              className="relative inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-slate-900"
              style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
            >
              Converse conosco
            </span>
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden rounded-full p-2 text-slate-800 hover:bg-black/5"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className={`${display.className} text-center py-3 space-y-2 text-slate-800`}>
          {links.map((l) => (
            <div key={l.href}>
              <Link
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className={`${navLinkClass} ${navUnderline(hash === l.href)} px-2 py-1`}
              >
                {l.label}
              </Link>
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="#contato"
              onClick={(e) => handleAnchorClick(e, "#contato")}
              className="group relative inline-flex items-center"
            >
              <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E9D8A6] via-[#F1E4BD] to-[#C8B273] opacity-70 blur-md transition group-hover:opacity-100" />
              <span
                className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-900"
                style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
              >
                Converse conosco
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

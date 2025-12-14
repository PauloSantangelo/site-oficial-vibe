"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- WhatsApp ---------------------- */
const WHATSAPP_NUMBER = "5514991042262";
const WHATSAPP_MESSAGE =
  "Olá, gostaria de saber mais sobre as estratégias de marketing digital para minha clínica/consultório.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

/* ---------------------- Links ---------------------- */
const links = [
  { href: "#inicio", label: "Início" },
  { href: "#agencia", label: "Agência" },
  { href: "/sites", label: "Sites & LPs" },
  { href: "#resultados", label: "Resultados" },
  { href: "/servicos", label: "Serviços" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState<string>("");

  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  /* Atualiza hash apenas na home */
  useEffect(() => {
    if (!isHome) return;

    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [isHome]);

  /* Clique inteligente */
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      setMenuOpen(false);
      return;
    }

    e.preventDefault();

    if (!isHome) {
      router.push(`/${href}`);
      setMenuOpen(false);
      return;
    }

    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    history.replaceState(null, "", `/${id}`);
    setHash(href);
    setMenuOpen(false);
  };

  /* Estilos */
  const navLinkClass = useMemo(
    () =>
      "relative transition inline-flex items-center text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900",
    []
  );

  const navUnderline = (active: boolean) =>
    `after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full
     after:bg-gradient-to-r after:from-[#E1AD01] after:to-[#C99600]
     after:transition-all after:duration-300
     ${active ? "after:w-8 text-slate-900" : "hover:after:w-8"}`;

  return (
    <header
      className={`${sans.className} fixed inset-x-0 top-0 z-50 bg-white border-b border-black/10 shadow-sm`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleAnchorClick(e, "#inicio")}
          className="rounded-xl p-1.5 transition hover:ring-1 hover:ring-[#E1AD01]/40"
          aria-label="Página inicial"
        >
          <Image
            src="/simbolo2.webp"
            alt="Logo Vibe"
            width={60}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className={`${display.className} flex items-center gap-7`}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={isHome || !l.href.startsWith("#") ? l.href : `/${l.href}`}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className={`${navLinkClass} ${navUnderline(hash === l.href)}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA WhatsApp */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center"
          >
            <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#E1AD01] to-[#C99600] opacity-70 blur-md transition group-hover:opacity-100" />
            <span
              className="relative inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-black"
              style={{
                background: "linear-gradient(180deg,#FFE08A,#E1AD01)",
              }}
            >
              Conversar agora
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden rounded-full p-2 text-slate-800 hover:bg-black/5"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

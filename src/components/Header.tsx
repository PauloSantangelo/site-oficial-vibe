"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react"; // ✅ useMemo removido para corrigir erro de build
import { usePathname, useRouter } from "next/navigation";
import { DM_Serif_Display, Manrope } from "next/font/google";

/* ---------------------- WhatsApp ---------------------- */
const WHATSAPP_LINK = `https://wa.me/5514991042262?text=${encodeURIComponent("Olá, gostaria de saber mais sobre as estratégias de marketing digital para minha clínica/consultório.")}`;

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
  const [activeHash, setActiveHash] = useState<string>("");

  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Sincroniza o destaque do menu
  useEffect(() => {
    if (isHome) {
      const h = typeof window !== "undefined" ? window.location.hash || "#inicio" : "#inicio";
      setActiveHash(h);
    } else {
      setActiveHash(pathname);
    }
  }, [pathname, isHome]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      
      const newPath = href === "#inicio" ? "/" : `/${id}`;
      window.history.pushState(null, "", newPath);
      
      setActiveHash(href);
      setMenuOpen(false);
    }
  };

  const navUnderline = (active: boolean) =>
    `relative transition text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 
     after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full
     after:bg-gradient-to-r after:from-[#E1AD01] after:to-[#C99600] after:transition-all after:duration-300
     ${active ? "after:w-8 text-slate-900 font-bold" : "hover:after:w-8"}`;

  return (
    <header className={`${sans.className} fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        
        <Link href="/" onClick={(e) => handleAnchorClick(e, "#inicio")} className="transition hover:opacity-80">
          <Image src="/simbolo2.webp" alt="Logo VibeMed" width={50} height={50} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className={`${display.className} flex items-center gap-7`}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className={navUnderline(activeHash === l.href || activeHash === l.href.replace("#", "/"))}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center">
            <span className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#E1AD01] to-[#C99600] opacity-50 blur-sm" />
            <span className="relative rounded-full px-5 py-2 text-sm font-bold text-white bg-[#07101E]">
              Conversar agora
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-2xl" aria-label="Toggle Menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-b border-black/5 p-6 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchorClick(e, l.href)}
              className={`${display.className} text-xl ${activeHash === l.href ? "text-[#E1AD01]" : "text-slate-800"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
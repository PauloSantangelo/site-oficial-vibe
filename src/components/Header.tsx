'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* ✅ Logo */}
        <Link
          href="/"
          className="p-1.5 rounded-xl transition hover:shadow-md hover:ring-1 hover:ring-purple-300"
        >
          <Image
            src="/logo-header.webp"
            alt="Logo Vibe"
            width={48}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* ✅ Menu desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-zinc-800">
            <Link href="#inicio">Início</Link>
            <Link href="#agencia">Agência</Link>
            <Link href="#resultados">Resultados</Link> {/* ✅ fix: rolagem interna */}
            <Link href="/servicos">Serviços</Link>
            <Link href="#duvidas">Dúvidas</Link>
          </nav>

          <Link
            href="#contato"
            className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white rounded-full
                       bg-gradient-to-r from-purple-600 to-pink-500
                       border border-white/20
                       ring-1 ring-white/10
                       shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
                       hover:brightness-110 transition-all duration-300"
          >
            Converse conosco
          </Link>
        </div>

        {/* ✅ Botão mobile (hamburguer) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-700"
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ✅ Menu mobile (aberto) */}
      {menuOpen && (
        <div className="md:hidden bg-white text-center py-4 space-y-3 shadow-sm font-medium text-purple-700">
          <Link href="#inicio" onClick={() => setMenuOpen(false)}>Início</Link><br />
          <Link href="#agencia" onClick={() => setMenuOpen(false)}>Agência</Link><br />
          <Link href="#resultados" onClick={() => setMenuOpen(false)}>Resultados</Link><br /> {/* ✅ fix aqui também */}
          <Link href="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link><br />
          <Link href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</Link><br />
          <Link
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-white text-sm font-semibold shadow-md border border-white/20"
          >
            Converse conosco
          </Link>
        </div>
      )}
    </header>
  );
}

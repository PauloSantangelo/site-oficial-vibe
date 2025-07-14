'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d23] text-white px-6 pt-10 pb-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold">Agência VIBE</h3>
          <p className="text-sm text-gray-400 mt-1">
            Transformamos presença digital em autoridade e resultados reais.
          </p>
        </div>

        <Link href="/contato">
          <button className="bg-pink-500 hover:bg-pink-600 transition text-white font-medium px-6 py-3 rounded-full">
            Conversar Agora
          </button>
        </Link>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-500">
        © {year} Agência VIBE. Todos os direitos reservados.
      </div>
    </footer>
  );
}

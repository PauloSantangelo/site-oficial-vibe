import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

/* ------------------------------
   FONTES
------------------------------- */

/* Serif moderna (similar ao estilo do seu logo) */
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* Sans moderna para textos e UI */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

/* ------------------------------
   METADADOS
------------------------------- */

export const metadata: Metadata = {
  title: "VibeMed | Marketing Médico Estratégico",
  description:
    "Especialistas em marketing médico: posicionamento premium, websites modernos e campanhas éticas que ampliam autoridade médica.",
  keywords: [
    "marketing médico",
    "marketing para médicos",
    "sites para médicos",
    "posicionamento médico",
    "vibemed",
  ],
  robots: "index, follow",
  authors: [{ name: "VibeMed" }],
};

/* ------------------------------
   LAYOUT PRINCIPAL
------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased 
        bg-[#0d1b2a] text-[#e0e5eb] transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}

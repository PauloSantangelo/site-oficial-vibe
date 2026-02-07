"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ easeInOut removido
import { DM_Serif_Display, Manrope } from "next/font/google";
import Image from "next/image";
import { Quote } from "lucide-react";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

/* ---------------------- Dados ---------------------- */
const medicosParceiros = [
  { src: "/clientes/josepinotti.jpeg", nome: "Dr. José Pinotti", especialidade: "Otorrino" },
  { src: "/clientes/mariele.jpeg", nome: "Dra. Mariele Storniolo", especialidade: "Ginecologista" },
  { src: "/clientes/marcelopacheco.jpeg", nome: "Dr. Marcelo Pacheco", especialidade: "Cirurgião Plástico" },
  { src: "/clientes/rafaelle.jpeg", nome: "Dra. Rafaelle", especialidade: "Pediatra" },
  { src: "/clientes/andreagamarra.jpeg", nome: "Dra. Andrea Gamarra", especialidade: "Gastropediatra" },
];

const depoimentosReais = [
  {
    texto:
      "O Paulo desenvolveu um site lindo, bem construído, intuitivo e extremamente acolhedor. Ele cuida com muita seriedade dos resultados: mensalmente apresenta os dados e propõe caminhos claros, o que me transmite muita confiança e segurança. A Sabrina lapida os conteúdos do Instagram com um olhar sensível e preciso, para que a comunicação seja profissional, artística e sofisticada, sem perder a autenticidade.",
    autor: "Sarah Leite",
    cargo: "Psicóloga",
  },
  {
    texto:
      "Sabrina e Paulo são excelentes profissionais! A Sabrina é super criativa e inteligente, sempre com ideias para criar e auxílio na captação de vídeos. O Paulo é excepcional para criação de sites; me surpreendi tanto com a estética quanto com a funcionalidade, com links que facilitam muito para quem está visitando. Confio nos dois de olhos fechados e já os indiquei para vários amigos.",
    autor: "Gabriela Sodré",
    cargo: "Odontologia",
  },
] as const;

export default function ResultadosSection() {
  const [index, setIndex] = useState(0);
  const isHovering = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isHovering.current) {
        setIndex((i) => (i + 1) % depoimentosReais.length);
      }
    }, 12000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="resultados"
      className={`${sans.className} relative w-full bg-white text-slate-900 py-16 md:py-24 px-4 sm:px-6 overflow-hidden`}
    >
      <div className="mx-auto max-w-6xl">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${display.className} mb-4 text-3xl md:text-5xl text-[#07101E] px-2`}
          >
            A confiança de quem cuida de pessoas.
          </motion.h2>
          <p className="mx-auto max-w-2xl text-slate-500 text-base md:text-lg">
            Parceiros estratégicos na construção da sua autoridade médica.
          </p>
        </div>

        {/* GRID DE MÉDICOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-24">
          {medicosParceiros.map((medico, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative aspect-[3/4] mb-3 overflow-hidden rounded-2xl border border-neutral-100 shadow-sm transition-all group-hover:shadow-md md:group-hover:shadow-xl active:scale-95 md:active:scale-100">
                <Image
                  src={medico.src}
                  alt={medico.nome}
                  fill
                  className="object-cover grayscale-[40%] md:grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="font-bold text-slate-800 text-xs md:text-base leading-tight">{medico.nome}</h4>
              <p className="text-[10px] md:text-xs text-[#C8B273] uppercase tracking-wider mt-1">{medico.especialidade}</p>
            </motion.div>
          ))}
        </div>

        {/* ÁREA DE DEPOIMENTOS */}
        <div 
          className="relative max-w-4xl mx-auto" 
          onMouseEnter={() => (isHovering.current = true)} 
          onMouseLeave={() => (isHovering.current = false)}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 z-10 text-[#C8B273]">
            <Quote 
              className="w-8 h-8 md:w-10 md:h-10" 
              fill="currentColor" 
              opacity={0.2} 
            />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-neutral-100 text-center relative shadow-sm"
            >
              {/* ✅ Correção das aspas para o build da Vercel */}
              <blockquote className="text-base md:text-xl leading-relaxed text-slate-700 font-medium italic mb-8 md:mb-10">
                &ldquo;{depoimentosReais[index].texto}&rdquo;
              </blockquote>
              
              <div className="flex flex-col items-center">
                <div className="h-px w-12 md:w-16 bg-[#C8B273] mb-4 md:mb-6" />
                <figcaption>
                  <div className="text-slate-900 font-bold text-lg md:text-xl">{depoimentosReais[index].autor}</div>
                  <div className="text-[#C8B273] font-semibold text-xs md:text-sm uppercase tracking-widest mt-1">
                    {depoimentosReais[index].cargo}
                  </div>
                </figcaption>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* INDICADORES */}
          <div className="mt-8 md:mt-12 flex justify-center gap-3">
            {depoimentosReais.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === index ? "w-10 md:w-16 bg-[#C8B273]" : "w-3 md:w-4 bg-neutral-200"
                }`}
                aria-label={`Ver depoimento de ${depoimentosReais[i].autor}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
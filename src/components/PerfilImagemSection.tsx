"use client";

import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { Sparkles, UserCheck, Target } from "lucide-react";

/* ---------------------- Fontes ---------------------- */
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sans = Manrope({ subsets: ["latin"], weight: ["300","400","600","700"] });

/* ---------------------- Configuração dos Perfis ---------------------- */
// Ajustado para lidar com espaços e parênteses nos nomes dos arquivos
const perfis = [
  { src: "/perfis/perfil%20(1).jpeg", alt: "Design de Perfil Médico 01" },
  { src: "/perfis/perfil%20(2).jpeg", alt: "Design de Perfil Médico 02" },
  { src: "/perfis/perfil%20(3).jpeg", alt: "Design de Perfil Médico 03" },
  { src: "/perfis/perfil%20(4).jpeg", alt: "Design de Perfil Médico 04" },
  { src: "/perfis/perfil%20(5).jpeg", alt: "Design de Perfil Médico 05" },
  { src: "/perfis/perfil%20(6).jpeg", alt: "Design de Perfil Médico 06" },
  { src: "/perfis/perfil%20(7).jpeg", alt: "Design de Perfil Médico 07" },
  { src: "/perfis/perfil%20(8).jpeg", alt: "Design de Perfil Médico 08" },
  { src: "/perfis/perfil%20(9).jpeg", alt: "Design de Perfil Médico 09" },
  { src: "/perfis/perfil%20(10).jpeg", alt: "Design de Perfil Médico 10" },
  { src: "/perfis/perfil%20(11).jpeg", alt: "Design de Perfil Médico 11" },
  { src: "/perfis/perfil%20(12).jpeg", alt: "Design de Perfil Médico 12" },
  { src: "/perfis/perfil%20(13).jpeg", alt: "Design de Perfil Médico 13" },
];

export default function PerfilImagemSection() {
  return (
    <section className={`${sans.className} relative w-full bg-[#07101E] text-white py-24 px-6 overflow-hidden`}>
      
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#E1AD01]/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna de Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeInOut }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-tight`}>
                Tenha um perfil que represente a sua <span className="text-[#E1AD01]">imagem.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Não basta estar no digital; é preciso ter um posicionamento que transmita confiança imediata. Adaptamos cada detalhe para que sua vitrine converse com seu cliente ideal.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E1AD01]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Arquétipos de Marca</h4>
                  <p className="text-white/60">Sua personalidade traduzida em elementos visuais que conectam emocionalmente.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E1AD01]">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Foco no Cliente Ideal</h4>
                  <p className="text-white/60">Toda a jornada do perfil é desenhada para atrair quem realmente valoriza seu trabalho.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E1AD01]">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Autoridade Instantânea</h4>
                  <p className="text-white/60">Organização de bio, destaques e feed que transformam seguidores em pacientes.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/5514991042262?text=Olá,%20quero%20um%20perfil%20que%20represente%20minha%20imagem.%20Podemos%20conversar?"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-[#07101E] transition-all hover:scale-105"
                style={{ background: "linear-gradient(180deg,#F5EFD8,#E9D8A6 45%,#C8B273)" }}
              >
                Quero meu perfil profissional
              </a>
            </div>
          </motion.div>

          {/* Galeria de Imagens Corrigida */}
          <div className="relative h-[600px] w-full">
            <div className="h-full w-full overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-2 gap-4">
                {perfis.map((perfil, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 3) * 0.1 }}
                    className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5"
                  >
                    <Image
                      src={perfil.src}
                      alt={perfil.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                      unoptimized // Tente isso se o Next/Image estiver barrando o carregamento local
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Gradientes de fade */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#07101E] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#07101E] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C8B273;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
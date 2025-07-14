'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Duvida {
  pergunta: string;
  resposta: string;
}

const duvidas: Duvida[] = [
  {
    pergunta: 'Como funciona o gerenciamento de redes sociais?',
    resposta:
      'Cuidamos de tudo: criação de conteúdo, cronograma, legendas, stories e monitoramento. Nossa equipe acompanha os resultados e ajusta a estratégia constantemente.',
  },
  {
    pergunta: 'Vocês atendem todo tipo de negócio?',
    resposta:
      'Sim! Já atendemos clínicas, restaurantes, profissionais autônomos, marcas de produtos e muito mais. Personalizamos tudo para o seu público.',
  },
  {
    pergunta: 'Quanto tempo demora para ver resultados?',
    resposta:
      'Depende do objetivo e do ponto de partida. Algumas campanhas têm retorno em dias, outras em semanas. O mais importante é a constância e a estratégia.',
  },
  {
    pergunta: 'Vocês fazem tráfego pago também?',
    resposta:
      'Sim! Trabalhamos com Meta Ads (Instagram e Facebook) e Google Ads. Fazemos campanhas com foco em conversão, posicionamento ou autoridade.',
  },
];

export default function DuvidasSection() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section id="duvidas" className="w-full bg-gray-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4">Dúvidas Frequentes</h2>
        <p className="text-gray-400 text-lg">
          Reunimos aqui as perguntas que mais recebemos. Se ainda tiver dúvidas, fale com a gente!
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {duvidas.map((duvida, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              onClick={() => setAberta(aberta === index ? null : index)}
            >
              <span className="font-semibold text-white text-lg">{duvida.pergunta}</span>
              <motion.div
                animate={{ rotate: aberta === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-pink-500" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {aberta === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="px-6 pb-4 text-gray-300">{duvida.resposta}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

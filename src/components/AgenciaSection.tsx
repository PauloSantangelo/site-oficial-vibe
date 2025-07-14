'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AgenciaSection() {
  return (
    <section
      id="agencia"
      className="w-full bg-[#0d0d23] text-white pt-24 pb-32 px-4 sm:px-6"
      aria-labelledby="agencia-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="agencia-heading"
          className="text-3xl sm:text-4xl font-bold text-center mb-20 text-pink-400"
        >
          A trajetória por trás da Agência Vibe
        </h2>

        {/* BLOCO 1 */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-bold mb-4">Um notebook, um celular e um sonho</h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Sabrina começou sua jornada atendendo empresas do varejo com poucos recursos,
              mas com muita determinação. Sozinha, foi criando conteúdo, testando estratégias
              e conquistando seus primeiros resultados.
            </p>
          </div>

          <div className="md:w-1/2 w-full relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/sabrina-inicio.jpg"
              alt="Foto da Sabrina no início da carreira, usando notebook e celular"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* BLOCO 2 */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-10 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-bold mb-4">Especialização e crescimento orgânico</h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Com estudo e prática, Sabrina se tornou especialista em Marketing e Growth.
              Começou a crescer com perfis que alcançaram milhões de visualizações em Reels,
              gerando seguidores reais e autoridade para seus clientes.
            </p>
          </div>

          <div className="md:w-1/2 w-full relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/sabrina-transicao.jpg"
              alt="Sabrina trabalhando com estratégias de marketing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* BLOCO 3 */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-bold mb-4">Mais de 25 empresas atendidas com autoridade</h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Hoje, a Agência Vibe entrega um serviço completo – da captação profissional de conteúdo à estratégia de
              posicionamento. A maioria dos clientes está no nicho médico, e os resultados são reais: mais autoridade, mais
              seguidores e mais conversão.
            </p>
          </div>

          <div className="md:w-1/2 w-full relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/sabrina-hoje.jpg"
              alt="Sabrina liderando a Agência Vibe atualmente"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

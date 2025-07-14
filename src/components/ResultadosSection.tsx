'use client';

export default function ResultadosSection() {
  return (
    <section id="resultados" className="w-full bg-white text-[#0a0a23] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-pink-500">
          Nossos resultados falam por nós
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-sm italic mb-4">
              “Com a Vibe, conseguimos escalar nosso negócio online e dobrar o faturamento em menos de 6 meses.”
            </p>
            <span className="block font-semibold text-sm text-purple-700">Mariana Lopes • Loja de Cosméticos</span>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-sm italic mb-4">
              “A gestão de tráfego foi decisiva para conquistar novos clientes com previsibilidade e consistência.”
            </p>
            <span className="block font-semibold text-sm text-purple-700">Carlos Pereira • Coach Digital</span>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-sm italic mb-4">
              “Ficamos impressionados com o posicionamento no Google e a identidade visual que criaram para nossa marca.”
            </p>
            <span className="block font-semibold text-sm text-purple-700">Luciana Braga • Clínica de Estética</span>
          </div>
        </div>
      </div>
    </section>
  );
}

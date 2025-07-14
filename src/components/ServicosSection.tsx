'use client';

import { Megaphone, Palette, Search, TrendingUp } from 'lucide-react';

export default function ServicosSection() {
  return (
    <section id="servicos" className="w-full bg-[#f5f5f5] text-[#0a0a23] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-700">
          O que podemos fazer pela sua marca
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Serviço 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <Megaphone className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Gestão de Mídias Sociais</h3>
            <p className="text-sm text-gray-700">
              Estratégia, conteúdo e performance para transformar suas redes em vendas.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <Palette className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Identidade Visual</h3>
            <p className="text-sm text-gray-700">
              Criação de marcas com propósito e estética profissional para todos os pontos de contato.
            </p>
          </div>

          {/* Serviço 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <Search className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Posicionamento no Google</h3>
            <p className="text-sm text-gray-700">
              Otimização para mecanismos de busca e presença digital nos lugares certos.
            </p>
          </div>

          {/* Serviço 4 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <TrendingUp className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Tráfego Pago</h3>
            <p className="text-sm text-gray-700">
              Estratégias de anúncios que convertem, com foco em ROI e crescimento previsível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

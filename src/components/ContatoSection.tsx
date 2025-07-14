'use client';

import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin } from 'lucide-react';

export default function ContatoSection() {
  return (
    <section id="contato" className="w-full bg-gray-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4">
          Entre em contato com a VIBE
        </h2>
        <p className="text-gray-400 text-lg">Clique em um dos botões abaixo e fale com a gente!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/5514999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-pink-300 transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <div className="bg-pink-500 p-3 rounded-full text-white">
            <Phone size={24} />
          </div>
          <div>
            <p className="font-semibold text-sm">WhatsApp</p>
            <p className="text-lg font-bold">(14) 99999-9999</p>
          </div>
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com/agenciavibe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-pink-300 transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <div className="bg-pink-500 p-3 rounded-full text-white">
            <Instagram size={24} />
          </div>
          <div>
            <p className="font-semibold text-sm">Instagram</p>
            <p className="text-lg font-bold">@agenciavibe</p>
          </div>
        </motion.a>

        {/* Endereço */}
        <motion.div
          className="flex items-start gap-4 bg-white text-gray-900 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.03 }}
        >
          <div className="bg-pink-500 p-3 rounded-full text-white">
            <MapPin size={24} />
          </div>
          <div>
            <p className="font-semibold text-sm">Nosso Escritório</p>
            <p className="text-base leading-snug">
              Rua Criatividade, 123<br />
              Centro – Botucatu, SP
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

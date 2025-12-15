"use client";

import { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

/* ---------------------- Cor de destaque ---------------------- */
const GOLD = "#E1AD01";

/* ---------------------- Captações (VÍDEOS) ---------------------- */
const CAPTACAO_VIDEOS = [
  "/captacoes/captacao1.mp4",
  "/captacoes/captacao2.mp4",
  "/captacoes/captacao3.mp4",
  "/captacoes/captacao4.mp4",
  "/captacoes/captacao5.mp4",
  "/captacoes/captacao6.mp4",
  "/captacoes/captacao7.mp4",
];

/* ---------------------- Resultado Orgânico (IMAGENS) ---------------------- */
const ORGANICO_IMAGES = [
  "/organico/organico1.jpeg",
  "/organico/organico2.jpeg",
  "/organico/organico3.jpeg",
  "/organico/organico4.jpeg",
  "/organico/organico5.jpeg",
];

/* ---------------------- Tráfego Pago (IMAGENS) ---------------------- */
const TRAFEGO_IMAGES = [
  "/trafego/trafego1.jpeg",
  "/trafego/trafego2.jpeg",
  "/trafego/trafego3.jpeg",
  "/trafego/trafego4.jpeg",
  "/trafego/trafego5.jpeg",
  "/trafego/trafego6.jpeg",
  "/trafego/trafego7.jpeg",
  "/trafego/trafego8.jpeg",
  "/trafego/trafego9.jpeg",
];

/* ---------------------- Websites (IMAGENS) ---------------------- */
const SITES_IMAGES = [
  "/sites-stories/site1.jpeg",
  "/sites-stories/site2.jpeg",
  "/sites-stories/site3.jpeg",
  "/sites-stories/site4.jpeg",
  "/sites-stories/site5.jpeg",
  "/sites-stories/site6.jpeg",
  "/sites-stories/site7.jpeg",
];

/* ---------------------- Stories ---------------------- */
const stories = [
  {
    id: 1,
    title: "Captações",
    thumb: "/stories1.jpg",
    media: CAPTACAO_VIDEOS,
    isLocalSequence: true,
  },
  {
    id: 2,
    title: "Resultado Orgânico",
    thumb: ORGANICO_IMAGES[0],
    media: ORGANICO_IMAGES,
    isLocalSequence: true,
  },
  {
    id: 3,
    title: "Tráfego Pago",
    thumb: TRAFEGO_IMAGES[0],
    media: TRAFEGO_IMAGES,
    isLocalSequence: true,
  },
  {
    id: 4,
    title: "Websites",
    thumb: SITES_IMAGES[0],
    media: SITES_IMAGES,
    isLocalSequence: true,
  },
];

interface ActiveStoryState {
  media: string[];
  isSequence: boolean;
  currentIndex: number;
}

export default function BannerStories() {
  const [activeStoryState, setActiveStoryState] =
    useState<ActiveStoryState | null>(null);

  const handleClose = () => setActiveStoryState(null);

  const handleNext = () => {
    if (!activeStoryState) return;
    if (activeStoryState.currentIndex < activeStoryState.media.length - 1) {
      setActiveStoryState({
        ...activeStoryState,
        currentIndex: activeStoryState.currentIndex + 1,
      });
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (!activeStoryState) return;
    if (activeStoryState.currentIndex > 0) {
      setActiveStoryState({
        ...activeStoryState,
        currentIndex: activeStoryState.currentIndex - 1,
      });
    }
  };

  const handleStoryClick = (story: typeof stories[number]) => {
    setActiveStoryState({
      media: story.media,
      isSequence: story.isLocalSequence,
      currentIndex: 0,
    });
  };

  return (
    <section className="relative w-full bg-neutral-50 py-20 px-4 sm:px-10 overflow-hidden">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className={`${display.className} text-center text-3xl sm:text-4xl mb-14 text-slate-900`}
      >
        Destaques da{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(90deg, ${GOLD}, #C99600)`,
          }}
        >
          VibeMed
        </span>
      </motion.h2>

      {/* Thumbs */}
      <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleStoryClick(story)}
          >
            <div
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${GOLD}, #C99600)`,
              }}
            >
              <div className="relative w-full h-full rounded-full bg-white p-[3px]">
                <Image
                  src={story.thumb}
                  alt={story.title}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 768px) 90px, 110px"
                />
              </div>
            </div>
            <span className="mt-3 text-sm sm:text-base font-medium text-slate-700 text-center">
              {story.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {activeStoryState && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
          onClick={handleClose}
        >
          <div
            className="relative w-[90%] max-w-[400px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progresso */}
            <div className="absolute top-0 left-0 right-0 z-10 flex p-1 gap-1">
              {activeStoryState.media.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i <= activeStoryState.currentIndex
                      ? "bg-white"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Conteúdo */}
            {activeStoryState.media[
              activeStoryState.currentIndex
            ].endsWith(".mp4") ? (
              <video
                src={activeStoryState.media[activeStoryState.currentIndex]}
                autoPlay
                onEnded={handleNext}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={activeStoryState.media[activeStoryState.currentIndex]}
                alt="Story"
                fill
                className="object-cover"
              />
            )}

            {/* Voltar */}
            {activeStoryState.currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-0 bottom-0 z-10 w-1/3 flex items-center justify-start pl-2"
              >
                <div className="bg-black/40 p-2 rounded-full rotate-180 text-white">
                  &#x27A4;
                </div>
              </button>
            )}

            {/* Avançar */}
            {activeStoryState.currentIndex <
              activeStoryState.media.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-0 bottom-0 z-10 w-1/3 flex items-center justify-end pr-2"
              >
                <div className="bg-black/40 p-2 rounded-full text-white">
                  &#x27A4;
                </div>
              </button>
            )}

            {/* Fechar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 text-white bg-black/40 p-2 rounded-full"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

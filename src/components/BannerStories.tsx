"use client";

import { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

const display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

/* ---------------------- Cor de destaque ---------------------- */
const GOLD = "#E1AD01";

/* ---------------------- Vídeos de captação ---------------------- */
const CAPTACAO_VIDEOS = [
  "/captacoes/captacao1.mp4",
  "/captacoes/captacao2.mp4",
  "/captacoes/captacao3.mp4",
  "/captacoes/captacao4.mp4",
  "/captacoes/captacao5.mp4",
  "/captacoes/captacao6.mp4",
  "/captacoes/captacao7.mp4",
];

/* ---------------------- Stories ---------------------- */
const stories = [
  {
    id: 1,
    title: "Captações",
    thumb: "/stories1.jpg",
    video: CAPTACAO_VIDEOS,
    isLocalSequence: true,
  },
  { id: 2, title: "Websites", thumb: "/stories2.jpg", video: "def456QWE" },
  { id: 3, title: "Resultado Orgânico", thumb: "/stories3.jpg", video: "ghi789RTY" },
  { id: 4, title: "Tráfego Pago", thumb: "/stories4.jpg", video: "jkl101MNO" },
];

interface ActiveStoryState {
  videos: string[];
  isSequence: boolean;
  currentIndex: number;
}

export default function BannerStories() {
  const [activeStoryState, setActiveStoryState] =
    useState<ActiveStoryState | null>(null);

  const handleClose = () => setActiveStoryState(null);

  const handleNextVideo = () => {
    if (activeStoryState && activeStoryState.isSequence) {
      const { currentIndex, videos } = activeStoryState;
      if (currentIndex < videos.length - 1) {
        setActiveStoryState({
          ...activeStoryState,
          currentIndex: currentIndex + 1,
        });
      } else {
        handleClose();
      }
    }
  };

  const handlePrevVideo = () => {
    if (activeStoryState && activeStoryState.isSequence) {
      if (activeStoryState.currentIndex > 0) {
        setActiveStoryState({
          ...activeStoryState,
          currentIndex: activeStoryState.currentIndex - 1,
        });
      }
    }
  };

  const handleStoryClick = (story: typeof stories[number]) => {
    if (story.isLocalSequence) {
      setActiveStoryState({
        videos: story.video as string[],
        isSequence: true,
        currentIndex: 0,
      });
    } else {
      setActiveStoryState({
        videos: [story.video as string],
        isSequence: false,
        currentIndex: 0,
      });
    }
  };

  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="relative w-full bg-neutral-50 py-20 px-4 sm:px-10 overflow-hidden"
    >
      {/* Grid sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]
        [background-image:linear-gradient(to_right,rgba(0,0,0,.12)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(0,0,0,.12)_1px,transparent_1px)]
        [background-size:52px_52px]"
      />

      {/* Título */}
      <motion.h2
        id="stories-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className={`${display.className} relative text-center text-3xl sm:text-4xl leading-tight mb-14 text-slate-900`}
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

      {/* Stories */}
      <div className="relative flex justify-center gap-8 sm:gap-12 flex-wrap">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center cursor-pointer select-none"
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
                  className="rounded-full object-cover opacity-95 hover:opacity-100 transition"
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
            className="relative w-[90%] max-w-[400px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progresso */}
            {activeStoryState.isSequence && (
              <div className="absolute top-0 left-0 right-0 z-10 flex p-1 gap-1">
                {activeStoryState.videos.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full ${
                      index <= activeStoryState.currentIndex
                        ? "bg-white"
                        : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}

            {activeStoryState.isSequence ? (
              <video
                key={activeStoryState.currentIndex}
                src={activeStoryState.videos[activeStoryState.currentIndex]}
                autoPlay
                onEnded={handleNextVideo}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${activeStoryState.videos[0]}?autoplay=1&modestbranding=1&rel=0`}
                title="Vibe Stories"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}

            {/* Voltar */}
            {activeStoryState.isSequence &&
              activeStoryState.currentIndex > 0 && (
                <button
                  onClick={handlePrevVideo}
                  className="absolute left-0 top-0 bottom-0 z-10 w-1/3 flex items-center justify-start pl-2 text-white opacity-0 hover:opacity-100 transition-opacity"
                >
                  <div className="bg-black/40 p-2 rounded-full rotate-180">
                    &#x27A4;
                  </div>
                </button>
              )}

            {/* Avançar */}
            {activeStoryState.isSequence &&
              activeStoryState.currentIndex <
                activeStoryState.videos.length - 1 && (
                <button
                  onClick={handleNextVideo}
                  className="absolute right-0 top-0 bottom-0 z-10 w-1/3 flex items-center justify-end pr-2 text-white opacity-0 hover:opacity-100 transition-opacity"
                >
                  <div className="bg-black/40 p-2 rounded-full">
                    &#x27A4;
                  </div>
                </button>
              )}

            {/* Fechar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

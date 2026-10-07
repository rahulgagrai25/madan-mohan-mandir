"use client";

import { useState } from "react";
import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const timings = [
  {
    name: "Mangala Aarti",
    time: "5:00 AM – 5:30 AM",
    description: "The first ritual of the day, awakening the deity with Vedic hymns and the gentle glow of dawn.",
    image: "/timing/mangala.png",
  },
  {
    name: "Morning Darshan",
    time: "5:30 AM – 12:00 PM",
    description: "The main darshan hours when the temple is bathed in natural light, offering serene views of the sanctum.",
    image: "/timing/morning.png",
  },
  {
    name: "Bhog Aarti",
    time: "12:00 PM – 12:30 PM",
    description: "A midday offering of food and prayers, symbolizing gratitude and the sharing of divine prasad.",
    image: "/timing/bhog.png",
  },
  {
    name: "Afternoon Darshan",
    time: "12:30 PM – 4:30 PM",
    description: "A quiet, contemplative period for devotees to sit in silence and absorb the temple's peaceful energy.",
    image: "/timing/afternoon.png",
  },
  {
    name: "Sandhya Aarti",
    time: "6:30 PM – 7:00 PM",
    description: "The evening aarti, where lamps are waved in a rhythmic dance of light, filling the air with devotion.",
    image: "/timing/sandhya.png",
  },
  {
    name: "Shayan Aarti",
    time: "8:30 PM – 9:00 PM",
    description: "The final ritual of the day, gently lulling the deity to rest with soft bhajans and closing prayers.",
    image: "/timing/shayan.png",
  },
];

export default function Timing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = timings[activeIndex];

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + timings.length) % timings.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % timings.length);

  return (
    <section
      id="darshan"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-[#0a0503]`}
    >
      {/* =====================================================
          FULL BLEED BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0">
        <Image
          key={active.image}
          src={active.image}
          alt={active.name}
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />
        {/* Dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0503]/20 via-[#0a0503]/30 to-[#0a0503]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503]/90 via-transparent to-[#0a0503]/60" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-28">
        {/* =================================================
            SECTION HEADING
        ================================================== */}
        <div className="mb-8 text-center md:mb-12">
          <p
            className="mb-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] sm:text-xs md:mb-3 md:text-base md:tracking-[0.4em]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Daily Schedule
          </p>

          <h2
            className="text-3xl font-bold leading-tight text-amber-50 sm:text-4xl md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Darshan <span className="text-[#C2A95B]">Timings</span>
          </h2>

          {/* Decorative divider */}
          <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
            <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
            <span className="text-sm text-[#C2A95B] md:text-base">✦</span>
            <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
          </div>
        </div>

        {/* =================================================
            70 / 30 SPLIT
        ================================================== */}
        <div className="grid items-stretch gap-5 lg:grid-cols-10 lg:gap-8">
          {/* =================================================
              LEFT — 70% ACTIVE DETAILS (over full bg)
          ================================================== */}
          <div className="relative flex min-h-[320px] flex-col justify-end sm:min-h-[380px] lg:col-span-7 lg:min-h-[560px]">
            <div className="mb-2 flex items-center gap-3 md:mb-3 ">
              <span className="h-px w-6 bg-[#C2A95B] md:w-8" />
              <span
                className="text-xs uppercase tracking-[0.25em] text-[#C2A95B] sm:text-sm md:text-base md:tracking-[0.3em] bg-red-900/60 max-sm:bg-red-900/60 p-2 max-sm:p-2"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {active.time}
              </span>
            </div>

            <h3
              className="mb-2 text-2xl font-bold text-white sm:text-3xl md:mb-4 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              {active.name}
            </h3>

            <p
              className="max-w-xl text-sm font-light leading-relaxed text-white/85 sm:text-base md:text-lg"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {active.description}
            </p>

            {/* Mobile arrows */}
            <div className="mt-5 flex items-center gap-3 sm:mt-6 lg:hidden">
              <button
                onClick={goPrev}
                aria-label="Previous timing"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C2A95B]/60 bg-white/10 text-lg text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C2A95B] hover:bg-white/20 active:scale-95 sm:h-11 sm:w-11 sm:text-xl"
              >
                ←
              </button>

              <span
                className="text-xs font-medium tracking-widest text-[#C2A95B] sm:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {activeIndex + 1} / {timings.length}
              </span>

              <button
                onClick={goNext}
                aria-label="Next timing"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C2A95B]/60 bg-white/10 text-lg text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C2A95B] hover:bg-white/20 active:scale-95 sm:h-11 sm:w-11 sm:text-xl"
              >
                →
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT — 30% TEXT-ONLY SELECTION
          ================================================== */}
          <div className="hidden lg:col-span-3 lg:flex lg:flex-col lg:justify-center lg:gap-6">
            {timings.map((t, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={t.name}
                  onClick={() => setActiveIndex(i)}
                  className="group relative flex items-center gap-4 text-left transition-all duration-300"
                >
                  {/* Left indicator bar */}
                  <span
                    className={`h-10 w-[2px] shrink-0 transition-all duration-300 ${
                      isActive ? "bg-[#C2A95B]" : "bg-transparent"
                    }`}
                  />

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-xl font-bold leading-tight transition-colors duration-300 md:text-2xl ${
                        isActive
                          ? "text-[#C2A95B]"
                          : "text-white/60 group-hover:text-white/90"
                      }`}
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${
                        isActive
                          ? "text-white/80"
                          : "text-white/40 group-hover:text-white/60"
                      }`}
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {t.time}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            NOTE
        ================================================== */}
        <p
          className="mt-6 text-center text-[11px] font-light italic text-amber-100/60 sm:text-xs md:mt-10 md:text-base"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          * Timings may vary during festivals and special occasions.
        </p>

        {/* =================================================
            BOTTOM DECORATION
        ================================================== */}
        <div className="mt-8 flex items-center justify-center gap-3 md:mt-16">
          <span className="h-px w-14 bg-[#C2A95B]/40 md:w-20" />
          <span className="text-sm text-[#C2A95B] md:text-base">✦</span>
          <span className="h-px w-14 bg-[#C2A95B]/40 md:w-20" />
        </div>
      </div>
    </section>
  );
}
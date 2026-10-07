"use client";

import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";
import { useState, useEffect } from "react";

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

// 🖼️ Add or replace hero background images here — they'll cross-fade automatically
const heroImages = [
  "images/g3.jpg",
  "images/g2.jpg",
  "images/g1.jpg",
  "images/g4.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the background slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${cinzel.variable} ${jakarta.variable} relative flex min-h-screen w-full items-center justify-center overflow-hidden`}
    >
      {/* =====================================================
          BACKGROUND IMAGE SLIDESHOW (FADE)
      ====================================================== */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Subtle Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.15),_transparent_60%)]" />

      {/* Decorative Top Border */}
      <div className="absolute top-[80px] left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
        {/* Sacred Symbol */}
        <div className="mb-6 flex justify-center">
          {/* <span className="text-4xl text-amber-300/90 md:text-5xl"><img className="h-20" src="/elements/head_feather.png"></img></span> */}
        </div>

        {/* Small Tagline */}
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90 md:text-sm"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Since Time Immemorial
        </p>

        {/* Main Heading */}
        <h1
  className="mb-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl pb-30"
  style={{
    fontFamily: "var(--font-cinzel)",
    backgroundImage:
      "linear-gradient(180deg, #FFF8DC 0%, #F5D76E 20%, #C2A95B 45%, #8B6914 60%, #F5D76E 80%, #FFF8DC 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.55)) drop-shadow(0 0 24px rgba(245,215,110,0.35))",
  }}
>
  Madan Mohan
  <span className="block">Mandir</span>
</h1>

        {/* Hindi Subheading */}
        {/* <p
          className="mb-8 text-lg font-light text-amber-100/90 md:text-2xl"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          श्री मदन मोहन मंदिर
        </p> */}

        {/* Divider */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
          <span className="text-amber-400">✦</span>
          <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>

        {/* Description */}
        {/* <p
          className="mx-auto mb-10 max-w-2xl text-sm font-light leading-relaxed text-amber-50/80 md:text-base"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          A sacred abode of devotion, where the divine presence of Lord Krishna
          fills every heart with peace, love, and eternal bliss. Step into a
          space of timeless spirituality and surrender.
        </p> */}

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* <a
            href="#darshan"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <span className="relative z-10">Book Darshan</span>
          </a> */}

          <a
            href="#about"
            className="rounded-full border border-amber-300/60 bg-white/5 px-8 py-3 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Explore Temple
          </a>
        </div>
      </div>

      {/* =====================================================
          SLIDESHOW DOT INDICATORS
      ====================================================== */}
      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:bottom-24">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-6 bg-amber-400"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
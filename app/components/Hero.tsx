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

const heroImages = [
  "images/g3.jpg",
  "images/g2.jpg",
  "images/g1.jpg",
  "gallery/deity-1.png",
  "gallery/devotees-1.png"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${cinzel.variable} ${jakarta.variable} relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#800000] lg:min-h-screen lg:flex-row`}
    >
      {/* =====================================================
          LEFT PANEL — MAROON WITH TEXT
      ====================================================== */}
      <div className="relative z-20 flex flex-1 flex-col justify-center px-5 py-10 sm:px-10 sm:py-16 lg:max-w-[55%] lg:px-12 lg:py-20 xl:px-16">
        {/* Dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage: "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Glow */}
        <div className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#C2A95B]/15 blur-[100px] lg:h-[500px] lg:w-[500px] lg:bg-[#C2A95B]/20 lg:blur-[120px]" />

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
          {/* Tagline */}
          <div className="mb-3 flex items-center gap-2.5 sm:mb-6 sm:gap-3">
            <span className="h-px w-6 shrink-0 bg-[#C2A95B] sm:w-10" />
            <p
              className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#C2A95B] sm:text-xs sm:tracking-[0.4em]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Since Time Immemorial
            </p>
          </div>

          {/* Heading */}
          <h1
          className="mb-3 text-[2rem] font-bold leading-[1.08] text-[#FFF8E7] sm:mb-6 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          <span className="whitespace-nowrap text-shadow-2xl">
            Madan Mohan
          </span>
          <span className="mt-0.5 block text-[#C2A95B] sm:mt-1 text-shadow-2xl">
            Mandir
          </span>
        </h1>

          {/* Description */}
          <p
            className="mb-6 max-w-md text-[13px] font-light leading-relaxed text-[#FFF8E7]/80 sm:mb-10 sm:mt-15 sm:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            A sacred abode of devotion, where the divine presence of Lord
            Krishna fills every heart with peace, love, and eternal bliss.
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-2.5 sm:gap-4 md:mt-25">
            <a
              href="#darshan"
              className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-semibold tracking-wide text-[#800000] shadow-lg shadow-[#C2A95B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#C2A95B]/40 sm:flex-none sm:gap-2 sm:px-7 sm:py-3.5 sm:text-sm"
              style={{
                fontFamily: "var(--font-jakarta)",
                background: "linear-gradient(to right, #C2A95B, #d4bd72)",
              }}
            >
              Book Darshan
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[#C2A95B]/50 px-4 py-2.5 text-[13px] font-semibold tracking-wide text-[#FFF8E7] transition-all duration-300 hover:border-[#C2A95B] hover:bg-[#C2A95B]/10 sm:flex-none sm:gap-2 sm:px-7 sm:py-3.5 sm:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT PANEL — IMAGE
          Mobile: compact 38vh image below text
          Desktop: full-height image with clip-path diagonal
      ====================================================== */}
      <div
        className="relative h-[38vh] min-h-[240px] w-full sm:h-[42vh] sm:min-h-[300px] lg:absolute lg:right-0 lg:top-0 lg:h-screen lg:w-[55%]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        {/* On desktop, apply diagonal clip */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#800000]/40" />
        </div>

        {/* On mobile, standard image with soft rounded top */}
        <div className="absolute inset-0 overflow-hidden rounded-t-[2rem] lg:hidden">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          {/* Soft fade at top to blend with maroon */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#800000] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#800000]/70 to-transparent" />
        </div>

        {/* Golden diagonal divider line (desktop only) */}
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            clipPath: "polygon(15% 0, 15.6% 0, 0.6% 100%, 0 100%)",
            background:
              "linear-gradient(to bottom, rgba(194,169,91,0.6), rgba(194,169,91,0.2))",
          }}
        />
      </div>

      {/* =====================================================
          DOT NAVIGATION
      ====================================================== */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 lg:bottom-10 lg:left-auto lg:right-10 lg:translate-x-0 lg:gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1 rounded-full transition-all duration-500 lg:h-1.5 ${
              index === currentIndex
                ? "w-6 bg-[#C2A95B] lg:w-8"
                : "w-1 bg-white/50 hover:bg-white/80 lg:w-1.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
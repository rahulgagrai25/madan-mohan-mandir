"use client";

import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
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

// 🖼️ Add or replace images here — they'll cross-fade automatically
const slideshowImages = [
  {
    src: "/hero/hero2.png",
    alt: "Madan Mohan Mandir",
  },
  {
    src: "/gallery/devotees-1.png",
    alt: "Temple Architecture",
  },
  {
    src: "/gallery/festival-1.png",
    alt: "Devotees in Prayer",
  },
  {
    src: "/gallery/aarti-1.png",
    alt: "Evening Aarti",
  },
];

export default function About2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🪔",
      label: "Daily Aarti",
      description: "Begin each day with divine blessings",
    },
    {
      icon: "📿",
      label: "Bhajan Sandhya",
      description: "Evenings filled with devotion",
    },
    {
      icon: "🛕",
      label: "Ancient Architecture",
      description: "A timeless spiritual heritage",
    },
    {
      icon: "🌺",
      label: "Festival Celebrations",
      description: "Celebrate traditions together",
    },
  ];

  return (
    <section
      id="about"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-white py-20 md:py-28`}
    >
      {/* =====================================================
          MANDIR BACKGROUND PATTERN
      ====================================================== */}

      {/* Main subtle geometric / mandala pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at center,
              #C2A95B 1px,
              transparent 1.5px
            ),
            linear-gradient(
              45deg,
              transparent 48%,
              #C2A95B 49%,
              #C2A95B 51%,
              transparent 52%
            ),
            linear-gradient(
              -45deg,
              transparent 48%,
              #C2A95B 49%,
              #C2A95B 51%,
              transparent 52%
            )
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Large subtle mandala circles - left */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full border border-[#C2A95B]/10" />

      <div className="pointer-events-none absolute -left-24 top-28 h-[340px] w-[340px] rounded-full border border-[#C2A95B]/10" />

      <div className="pointer-events-none absolute -left-16 top-36 h-[260px] w-[260px] rounded-full border border-[#C2A95B]/10" />

      {/* Large subtle mandala circles - right */}
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full border border-[#C2A95B]/10" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-[340px] w-[340px] rounded-full border border-[#C2A95B]/10" />

      <div className="pointer-events-none absolute -right-16 bottom-28 h-[260px] w-[260px] rounded-full border border-[#C2A95B]/10" />

      {/* Soft golden glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#800000]/5 blur-3xl" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <div className="mb-14 text-center">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            About the Temple
          </p>

          <h2
            className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            A Sacred Abode of{" "}
            <span className="text-[#C2A95B]">Divine Love</span>
          </h2>

          {/* Decorative divider */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C2A95B]" />

            <span className="text-[#C2A95B]">✦</span>

            <span className="h-px w-12 bg-[#C2A95B]" />
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT GRID
        ================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* =================================================
              LEFT - TEMPLE IMAGE SLIDESHOW (FADE)
          ================================================== */}

          <div className="relative">
            {/* Decorative outer frame */}
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C2A95B]/30" />

            {/* Second decorative frame */}
            <div className="absolute -inset-6 rounded-[2.5rem] border border-[#C2A95B]/10" />

            {/* Slideshow container */}
            <div className="relative h-[480px] w-full overflow-hidden rounded-[1.75rem] bg-[#800000] md:h-[600px]">
              {/* Fading images */}
              {slideshowImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}

              {/* Image gradient overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#800000]/75 via-transparent to-transparent" />

              {/* Image content (static over slideshow) */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C2A95B]" />

                  <span
                    className="text-xs uppercase tracking-[0.3em] text-[#C2A95B]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Sacred Heritage
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-white md:text-3xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Madan Mohan Mandir
                </h3>

                <p
                  className="mt-2 max-w-md text-xs leading-relaxed text-white/80 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  A place where faith, devotion and tradition come together.
                </p>

                {/* Dots indicator */}
                <div className="mt-5 flex items-center gap-2">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === currentIndex
                          ? "w-6 bg-[#C2A95B]"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                YEARS BADGE
            ================================================== */}

            <div className="absolute -bottom-6 -right-4 z-30 rounded-2xl border border-[#C2A95B]/40 bg-white px-5 py-4 shadow-xl md:-right-8 md:px-7 md:py-5">
              <p
                className="text-2xl font-bold text-[#800000] md:text-3xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                360+
              </p>

              <p
                className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#C2A95B] md:text-[10px]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Years of Devotion
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT - CONTENT
          ================================================== */}

          <div className="pt-4 lg:pt-0">
            {/* Small heading */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C2A95B]" />

              <span
                className="text-[10px] uppercase tracking-[0.3em] text-[#C2A95B]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Our Sacred Heritage
              </span>
            </div>

            {/* Paragraph 1 */}
            <p
              className="mb-5 text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              <span className="font-medium text-[#C2A95B]">
                Madan Mohan Mandir
              </span>{" "}
              is a cherished place of worship dedicated to <span className="font-medium text-[#C2A95B]">
                Lord Krishna
              </span>{" "}, where devotees come together to seek blessings, find peace, and experience a deeper connection with the divine.
            </p>

            {/* Paragraph 2 */}
            <p
              className="mb-8 text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Located in <span className="font-medium text-[#C2A95B]">
                Boreya, Ranchi
              </span>{" "}, the temple holds a special place in the hearts of devotees and the local community. The peaceful atmosphere, devotional prayers, aarti, and celebrations create a sacred space where faith and tradition come together.
            </p>

            {/* =================================================
                QUOTE BOX
            ================================================== */}

            <div className="relative mb-9 overflow-hidden rounded-2xl border border-[#C2A95B]/20 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
              {/* Decorative corner */}
              <div className="absolute right-0 top-0 h-16 w-16 border-l border-b border-[#C2A95B]/20" />

              <div className="flex gap-4">
                <span className="text-3xl leading-none text-[#C2A95B]">
                  “
                </span>

                <p
                  className="text-sm italic leading-relaxed text-[#800000]/80 md:text-base"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Every prayer carries faith, every visit brings peace, and every heart finds a moment closer to the divine
                </p>
                
              </div>
            </div>

            {/* =================================================
                FEATURE GRID
            ================================================== */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-[#C2A95B]/25 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C2A95B]/25 bg-[#C2A95B]/5 text-xl transition-all duration-300 group-hover:bg-[#C2A95B]/10">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <p
                        className="mb-1 text-sm font-semibold text-[#800000]"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {item.label}
                      </p>

                      <p
                        className="text-[11px] leading-relaxed text-[#800000]/60"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM DECORATION
        ================================================== */}

        <div className="mt-20 flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-[#C2A95B]/30" />

          <span className="text-sm text-[#C2A95B]">✦</span>

          <span className="h-px w-20 bg-[#C2A95B]/30" />
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";

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

export default function SplashScreen({
  imageSrc = "/hero/hero.png",
  duration = 3200,
  fadeInMs = 900,
  fadeOutMs = 700,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<"hidden" | "fadeIn" | "hold" | "fadeOut">(
    "hidden"
  );

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenSplash");
    if (hasSeen) return;

    setIsVisible(true);
    setPhase("fadeIn");
    sessionStorage.setItem("hasSeenSplash", "true");
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    document.body.style.overflow = "hidden";

    const holdTimer = setTimeout(() => setPhase("hold"), fadeInMs);
    const fadeOutTimer = setTimeout(
      () => setPhase("fadeOut"),
      duration - fadeOutMs
    );
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, duration);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "unset";
    };
  }, [isVisible, duration, fadeInMs, fadeOutMs]);

  if (!isVisible) return null;

  const imageOpacity =
    phase === "fadeIn"
      ? "opacity-0"
      : phase === "hold"
        ? "opacity-100"
        : phase === "fadeOut"
          ? "opacity-0"
          : "opacity-0";

  const imageScale =
    phase === "fadeIn"
      ? "scale-105"
      : phase === "hold"
        ? "scale-100"
        : "scale-105";

  const transitionMs = phase === "fadeIn" ? fadeInMs : fadeOutMs;

  return (
    <div
      className={`${cinzel.variable} ${jakarta.variable} fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#FFF8E7] transition-opacity duration-700 ${
        phase === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background image */}
      {/* <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all ease-out ${imageOpacity} ${imageScale}`}
        style={{
          backgroundImage: `url(${imageSrc})`,
          transitionDuration: `${transitionMs}ms`,
        }}
      >
        <div className="absolute inset-0 bg-[#FFF8E7]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8E7]/70 via-[#FFF8E7]/40 to-[#FFF8E7]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(194,169,91,0.28),_transparent_65%)]" />
      </div> */}

      

      {/* Soft golden glows */}
      {/* <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C2A95B]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C2A95B]/15 blur-[120px]" /> */}

      {/* Top & bottom golden lines */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C2A95B]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C2A95B]/70 to-transparent" /> */}

      {/* Center content */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 text-center transition-opacity ease-out ${imageOpacity}`}
        style={{ transitionDuration: `${transitionMs}ms` }}
      >
        {/* ॐ badge */}
        <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-full border border-[#C2A95B]/50 bg-[#C2A95B]/10 backdrop-blur-sm md:h-40 md:w-40">
          <img src="/elements/om.png" alt="" />
        </div>

        {/* Title */}
        <h1
          className="text-3xl font-bold tracking-wide text-[#800000] md:text-5xl"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Madan Mohan Mandir
        </h1>

        {/* Hindi subtitle */}
        <p
          className="mt-3 text-sm tracking-[0.3em] text-[#C2A95B] md:text-base"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          श्री मदन मोहन मंदिर
        </p>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C2A95B]/80" />
          <span className="text-xs text-[#C2A95B]">✦</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C2A95B]/80" />
        </div>

        {/* Tagline */}
        {/* <p
          className="mt-6 max-w-md text-xs font-light leading-relaxed text-[#800000]/70 md:text-sm"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          A sacred abode of devotion, where the divine presence of Lord
          Krishna fills every heart with peace and eternal bliss.
        </p> */}

        {/* Loading dots */}
        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C2A95B]"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
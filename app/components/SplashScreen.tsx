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
      className={`${cinzel.variable} ${jakarta.variable} fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black transition-opacity duration-700 ${
        phase === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Fading background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all ease-out ${imageOpacity} ${imageScale}`}
        style={{
          backgroundImage: `url(${imageSrc})`,
          transitionDuration: `${transitionMs}ms`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.18),_transparent_65%)]" />
      </div>

      {/* Center content */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 text-center transition-opacity ease-out ${imageOpacity}`}
        style={{ transitionDuration: `${transitionMs}ms` }}
      >
        {/* ॐ symbol */}
        <span
          className="mb-4 text-5xl text-amber-300 md:text-6xl"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          ॐ
        </span>

        {/* Main title */}
        <h1
          className="text-3xl font-bold tracking-wide text-amber-50 md:text-5xl"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Madan Mohan Mandir
        </h1>

        {/* Hindi subtitle */}
        <p
          className="mt-3 text-sm tracking-[0.3em] text-amber-200/80 md:text-base"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          श्री मदन मोहन मंदिर
        </p>

        {/* Decorative divider */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-400/70" />
          <span className="text-xs text-amber-400">✦</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>

        {/* Loading dots */}
        <div className="mt-6 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300/70"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
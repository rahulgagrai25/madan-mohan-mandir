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

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        // Trigger when the About section's top reaches the navbar (80px tall)
        const triggerPoint = aboutSection.offsetTop - 80;
        setScrolled(window.scrollY >= triggerPoint);
      } else {
        // Fallback: trigger after scrolling past the hero (viewport height)
        setScrolled(window.scrollY >= window.innerHeight - 80);
      }
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${cinzel.variable} ${jakarta.variable} fixed top-0 left-0 z-50 h-[80px] w-full backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-white/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo / Temple Name */}
        <a href="/" className="flex flex-col items-start">
          <h1
            className={`text-xl font-bold tracking-wide transition-colors duration-500 md:text-2xl ${
              scrolled ? "text-[#800000]" : "text-amber-100"
            }`}
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Madan Mohan Mandir
          </h1>
          <span
            className={`text-[10px] tracking-[0.3em] transition-colors duration-500 md:text-xs ${
              scrolled ? "text-[#C2A95B]" : "text-amber-300/80"
            }`}
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            श्री मदन मोहन मंदिर
          </span>
        </a>

        {/* Navigation Links */}
        <ul
          className="hidden items-center gap-8 md:flex"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          <li>
            <a
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[#800000]/80 hover:text-[#C2A95B]"
                  : "text-amber-50/90 hover:text-amber-300"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[#800000]/80 hover:text-[#C2A95B]"
                  : "text-amber-50/90 hover:text-amber-300"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/history"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[#800000]/80 hover:text-[#C2A95B]"
                  : "text-amber-50/90 hover:text-amber-300"
              }`}
            >
              History
            </a>
          </li>
          <li>
            <a
              href="/darshan"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[#800000]/80 hover:text-[#C2A95B]"
                  : "text-amber-50/90 hover:text-amber-300"
              }`}
            >
              Darshan
            </a>
          </li>
          <li>
            <a
              href="/events"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[#800000]/80 hover:text-[#C2A95B]"
                  : "text-amber-50/90 hover:text-amber-300"
              }`}
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[#800000]/80 hover:text-[#C2A95B]"
                  : "text-amber-50/90 hover:text-amber-300"
              }`}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[#800000]/80 hover:text-[#C2A95B]"
                  : "text-amber-50/90 hover:text-amber-300"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Donate Button */}
        <a
          href="/donate"
          className={`rounded-full border px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur-sm transition-all duration-300 md:px-6 ${
            scrolled
              ? "border-[#800000]/40 bg-[#800000]/10 text-[#800000] hover:bg-[#800000] hover:text-white"
              : "border-amber-400/60 bg-amber-500/10 text-amber-200 hover:bg-amber-400 hover:text-black"
          }`}
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Donate
        </a>
      </div>
    </nav>
  );
}
"use client";

import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

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

/* ============================================================
   📰 EDIT YOUR NEWS ITEMS HERE
   Add / remove / reorder — the ticker adapts automatically.
============================================================ */
const newsItems = [
  {
    tag: "Festival",
    text: "Janmashtami Mahotsav — 16 Aug 2025 · Midnight Abhishek & Bhajan Sandhya",
    href: "/events",
  },
  {
    tag: "Darshan",
    text: "Mangala Aarti now begins at 5:00 AM daily",
    href: "/darshan",
  },
  {
    tag: "Notice",
    text: "Temple remains closed from 12:30 PM to 4:30 PM",
    href: "/contact",
  },
  {
    tag: "Seva",
    text: "Annadan Seva every Sunday — contribute or volunteer",
    href: "/donate",
  },
  {
    tag: "New",
    text: "Gallery updated with last week's Aarti & Shringar photographs",
    href: "/gallery",
  },
];

/* ============================================================
   ONE SCROLLING TRACK
============================================================ */
function TickerTrack({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="animate-marquee flex shrink-0 items-center gap-8 pr-8 group-hover:[animation-play-state:paused] md:gap-14 md:pr-14"
      style={{ animationDuration: "55s" }}
    >
      {newsItems.map((item, i) => (
        <Link
          key={`${item.tag}-${i}`}
          href={item.href}
          className="group/item flex shrink-0 items-center gap-2.5 whitespace-nowrap md:gap-3"
        >
          {/* Tag chip */}
          <span
            className="rounded-full border border-[#C2A95B]/50 bg-[#C2A95B]/15 px-2 py-[3px] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#C2A95B] md:px-3 md:py-1 md:text-[10px]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {item.tag}
          </span>

          {/* News text */}
          <span
            className="text-[11px] font-light tracking-wide text-[#FFF8E7]/85 transition-colors duration-300 group-hover/item:text-[#C2A95B] md:text-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {item.text}
          </span>

          {/* Separator */}
          <span className="text-[10px] text-[#C2A95B]/70 md:text-xs">✦</span>
        </Link>
      ))}
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function NewsTicker() {
  return (
    <section
      aria-label="Latest temple news"
      className={`${cinzel.variable} ${jakarta.variable} group relative z-20 w-full overflow-hidden bg-[#800000]`}
    >
      {/* ---------- Subtle golden dot pattern ---------- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "radial-gradient(#C2A95B 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ---------- Soft golden glows ---------- */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#C2A95B]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#C2A95B]/15 blur-3xl" />

      {/* ---------- Top & bottom golden borders ---------- */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C2A95B]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C2A95B]/60 to-transparent" />

      {/* ---------- ROW ---------- */}
      <div className="relative z-10 flex items-stretch">
        {/* ===== LEFT: fixed "LATEST NEWS" label ===== */}
        <div className="relative z-20 flex shrink-0 items-center gap-2 bg-gradient-to-r from-[#C2A95B] to-[#a88f45] px-3 py-2.5 sm:px-4 md:gap-3 md:px-6 md:py-3.5">
          {/* Pulsing live dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#800000]/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#800000]" />
          </span>

          <span
            className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.22em] text-[#3D2A00] sm:text-[10px] md:text-xs md:tracking-[0.28em]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Latest News
          </span>
        </div>

        {/* ===== RIGHT: scrolling marquee ===== */}
        <div className="relative flex-1 overflow-hidden">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#800000] to-transparent md:w-14" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#800000] to-transparent md:w-14" />

          <div className="flex h-full items-center py-2.5 md:py-3.5">
            {/* Two identical tracks = seamless infinite loop */}
            <TickerTrack />
            <TickerTrack duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
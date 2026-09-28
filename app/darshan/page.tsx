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

/* ---------------- Data ---------------- */

const darshanTimings = [
  {
    name: "Mangala Aarti",
    time: "5:00 AM – 5:30 AM",
    desc: "The first awakening of the Lord — the most auspicious darshan of the day.",
    icon: "🌅",
    highlight: true,
  },
  {
    name: "Morning Darshan",
    time: "5:30 AM – 12:00 PM",
    desc: "Open darshan for all devotees. Ideal time for a peaceful, unhurried visit.",
    icon: "☀️",
  },
  {
    name: "Bhog Aarti",
    time: "12:00 PM – 12:30 PM",
    desc: "Midday offering of food to the Lord, followed by distribution of prasad.",
    icon: "🍛",
  },
  {
    name: "Afternoon Darshan",
    time: "12:30 PM – 4:30 PM",
    desc: "Quiet afternoon hours — perfect for meditation and personal prayer.",
    icon: "🕉️",
  },
  {
    name: "Sandhya Aarti",
    time: "6:30 PM – 7:00 PM",
    desc: "The grand evening aarti with lamps, bells, and devotional singing.",
    icon: "🌆",
    highlight: true,
  },
  {
    name: "Shayan Aarti",
    time: "8:30 PM – 9:00 PM",
    desc: "The final aarti as the Lord retires for the night. Temple closes at 9:30 PM.",
    icon: "🌙",
  },
];

const aartiSchedule = [
  { name: "Mangala Aarti", time: "5:00 AM", duration: "30 min" },
  { name: "Bhog Aarti", time: "12:00 PM", duration: "30 min" },
  { name: "Sandhya Aarti", time: "6:30 PM", duration: "30 min" },
  { name: "Shayan Aarti", time: "8:30 PM", duration: "30 min" },
];

const guidelines = [
  {
    icon: "👕",
    title: "Dress Modestly",
    desc: "Traditional and modest attire is appreciated. Please avoid shorts, sleeveless tops, and revealing clothing.",
  },
  {
    icon: "📵",
    title: "No Mobile Phones",
    desc: "Mobile phones and cameras are not permitted inside the sanctum. Lockers are available at the entrance.",
  },
  {
    icon: "👞",
    title: "Remove Footwear",
    desc: "Footwear must be removed at the shoe stands before entering the temple premises.",
  },
  {
    icon: "🕊️",
    title: "Maintain Silence",
    desc: "Keep conversations low and maintain a peaceful atmosphere for fellow devotees.",
  },
  {
    icon: "🚫",
    title: "No Outside Prasad",
    desc: "Outside food and prasad are not allowed. Prasad can be purchased at the temple counter.",
  },
  {
    icon: "🙏",
    title: "Respect Rituals",
    desc: "Follow the instructions of temple priests and sevaks. Do not cross the sanctum railing.",
  },
];

const facilities = [
  { icon: "🅿️", label: "Free Parking" },
  { icon: "🔒", label: "Cloak Room" },
  { icon: "🚻", label: "Clean Washrooms" },
  { icon: "💧", label: "Drinking Water" },
  { icon: "🍛", label: "Prasad Counter" },
  { icon: "♿", label: "Wheelchair Access" },
  { icon: "🏥", label: "First Aid" },
  { icon: "📚", label: "Book Stall" },
];

const darshanTypes = [
  {
    name: "General Darshan",
    price: "Free",
    features: [
      "Entry from main gate",
      "Standard queue",
      "Approx. 30–45 min wait",
      "Available all day",
    ],
    highlight: false,
  },
  {
    name: "Quick Darshan",
    price: "₹ 200",
    features: [
      "Priority entry",
      "Shorter queue",
      "Approx. 10–15 min wait",
      "Available 6 AM – 8 PM",
    ],
    highlight: true,
  },
  {
    name: "VIP Darshan",
    price: "₹ 500",
    features: [
      "Dedicated entrance",
      "No queue",
      "Prasad included",
      "Advance booking recommended",
    ],
    highlight: false,
  },
];

/* ---------------- Component ---------------- */

export default function DarshanPage() {
  const [activeTab, setActiveTab] = useState("timings");

  return (
    <main className={`${cinzel.variable} ${jakarta.variable} min-h-screen bg-black`}>


      {/* ============ PAGE HEADER ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0503] to-black pt-[140px] pb-16 md:pt-[180px] md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.12),_transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Behold the Divine
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-tight text-amber-50 md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Darshan <span className="text-amber-300">& Timings</span>
          </h1>

          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-400">✦</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          <p
            className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Every glance at the Lord is a blessing. Plan your visit to Madan
            Mohan Mandir and receive the darshan of the Divine in all His grace
            and glory.
          </p>
        </div>
      </section>

      {/* ============ QUICK INFO BAR ============ */}
      <section className="relative w-full border-y border-amber-400/15 bg-[#0a0503] py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-12">
          {[
            { icon: "🕐", label: "Open Today", value: "5:00 AM – 9:30 PM" },
            { icon: "⏱️", label: "Avg. Wait", value: "30–45 mins" },
            { icon: "🎟️", label: "Entry", value: "Free for all" },
            { icon: "📍", label: "Location", value: "Mandir Marg" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.25em] text-amber-300/70"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-xs font-semibold text-amber-100 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ LIVE DARSHAN ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Live stream preview */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-amber-400/30" />
              <div className="absolute -inset-6 rounded-3xl border border-amber-400/10" />

              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/10">
                <Image
                  src="/darshan/live-preview.jpg"
                  alt="Live Darshan"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* LIVE badge */}
                <span
                  className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-red-400/60 bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-red-300 backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  Live
                </span>

                {/* Play button */}
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/60 bg-black/50 text-2xl text-amber-200 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-amber-400 hover:text-black">
                    ▶
                  </span>
                </button>
              </div>
            </div>

            {/* Text */}
            <div>
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Live from the Sanctum
              </p>
              <h2
                className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Live <span className="text-amber-300">Darshan</span>
              </h2>

              <div className="mb-6 flex items-center gap-3">
                <span className="h-[1px] w-12 bg-amber-400/70" />
                <span className="text-amber-400">✦</span>
              </div>

              <p
                className="mb-5 text-sm font-light leading-relaxed text-amber-50/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Cannot visit in person today? The Lord's grace knows no
                distance. Watch the live stream of the sanctum and join the
                aarti from wherever you are — the darshan is equally potent when
                received with love.
              </p>

              <p
                className="mb-8 text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Live streaming is available daily during all four aartis, and
                throughout the day from 5:00 AM to 9:30 PM.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#watch"
                  className="rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  ▶ Watch Live
                </a>
                <a
                  href="#subscribe"
                  className="rounded-full border border-amber-300/60 bg-white/5 px-7 py-3 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DARSHAN TIMINGS ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        {/* Background dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(251,191,36,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Daily Schedule
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Darshan <span className="text-amber-300">Timings</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Timings grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {darshanTimings.map((t) => (
              <div
                key={t.name}
                className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
                  t.highlight
                    ? "border-amber-400/50 bg-gradient-to-br from-amber-400/[0.08] to-transparent hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/25"
                    : "border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/15"
                }`}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {t.highlight && (
                  <span
                    className="absolute right-4 top-4 rounded-full border border-amber-400/50 bg-amber-400/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-amber-200"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Special
                  </span>
                )}

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-2xl">
                    {t.icon}
                  </div>
                  <div>
                    <h3
                      className="mb-1 text-lg font-semibold text-amber-100"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {t.name}
                    </h3>
                    <p
                      className="mb-3 text-sm font-medium text-amber-300"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {t.time}
                    </p>
                    <p
                      className="text-xs font-light leading-relaxed text-amber-100/60 md:text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {t.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-10 text-center text-xs font-light italic text-amber-200/50 md:text-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            * Timings may vary during festivals and special occasions. Please
            check the Events page for updates.
          </p>
        </div>
      </section>

      {/* ============ AARTI SCHEDULE ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The Four Aartis
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Aarti <span className="text-amber-300">Schedule</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Aarti cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aartiSchedule.map((a, i) => (
              <div
                key={a.name}
                className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-b from-amber-400/[0.04] to-transparent p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60"
              >
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

                <p
                  className="mb-3 text-4xl font-bold text-amber-300/90 md:text-5xl"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="mb-2 text-base font-semibold text-amber-50 md:text-lg"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {a.name}
                </h3>
                <div className="mx-auto mb-3 h-[1px] w-10 bg-amber-400/50" />
                <p
                  className="mb-1 text-lg font-bold text-amber-300"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {a.time}
                </p>
                <p
                  className="text-[10px] uppercase tracking-widest text-amber-200/50"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {a.duration}
                </p>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.06] to-transparent p-6 backdrop-blur-sm md:p-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
              <span className="text-3xl">🪔</span>
              <div>
                <h3
                  className="mb-2 text-lg font-bold text-amber-100"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Sponser an Aarti
                </h3>
                <p
                  className="text-sm font-light leading-relaxed text-amber-100/70"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Devotees may sponsor an aarti as an offering of gratitude.
                  Sponsorship includes sankalp in your name, prasad, and a
                  blessed memento.
                </p>
              </div>
              <a
                href="#sponsor"
                className="flex-shrink-0 rounded-full border border-amber-400/50 bg-amber-400/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-amber-200 transition-all duration-300 hover:bg-amber-400 hover:text-black"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Sponsor →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DARSHAN TYPES / TICKETS ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Choose Your Experience
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Darshan <span className="text-amber-300">Options</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Tiers */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {darshanTypes.map((t) => (
              <div
                key={t.name}
                className={`group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                  t.highlight
                    ? "border-amber-400/60 bg-gradient-to-b from-amber-400/[0.1] to-transparent shadow-xl shadow-amber-500/15"
                    : "border-amber-400/20 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-amber-400/50"
                }`}
              >
                {t.highlight && (
                  <span
                    className="absolute right-6 top-6 rounded-full border border-amber-400/50 bg-amber-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-200"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Popular
                  </span>
                )}

                <h3
                  className="mb-3 text-xl font-bold text-amber-50 md:text-2xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {t.name}
                </h3>

                <p
                  className="mb-6 text-3xl font-bold text-amber-300 md:text-4xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {t.price}
                </p>

                <div className="mb-6 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

                <ul className="mb-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-amber-400/50 text-[8px] text-amber-300">
                        ✓
                      </span>
                      <span
                        className="text-sm font-light text-amber-100/80"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={`block w-full rounded-full px-6 py-3 text-center text-sm font-semibold tracking-wide transition-all duration-300 ${
                    t.highlight
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 hover:brightness-110"
                      : "border border-amber-300/60 bg-white/5 text-amber-100 hover:border-amber-300 hover:bg-white/10"
                  }`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>

          <p
            className="mt-10 text-center text-xs font-light italic text-amber-200/50 md:text-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            * General darshan is always free. Paid options are for convenience
            only and are not a substitute for devotion.
          </p>
        </div>
      </section>

      {/* ============ GUIDELINES ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Before You Visit
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Temple <span className="text-amber-300">Guidelines</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
            <p
              className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              To preserve the sanctity of the temple and ensure a peaceful
              experience for all, we request devotees to observe the following.
            </p>
          </div>

          {/* Guidelines grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guidelines.map((g) => (
              <div
                key={g.title}
                className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/15"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-2xl">
                    {g.icon}
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-base font-semibold text-amber-100 md:text-lg"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {g.title}
                    </h3>
                    <p
                      className="text-sm font-light leading-relaxed text-amber-100/70"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {g.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FACILITIES ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              For Your Comfort
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Temple <span className="text-amber-300">Facilities</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Facilities grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {facilities.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-amber-400/20 bg-white/[0.03] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-amber-400/50 hover:bg-white/[0.06]"
              >
                <span className="text-3xl">{f.icon}</span>
                <span
                  className="text-xs font-medium tracking-wide text-amber-100/85 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative w-full overflow-hidden bg-[#0a0503] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.1),_transparent_60%)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <div className="mb-6 flex justify-center">
            <span className="text-4xl text-amber-300/90 md:text-5xl">🙏</span>
          </div>

          <h2
            className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            The Lord <span className="text-amber-300">Awaits You</span>
          </h2>

          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-400">✦</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          <p
            className="mx-auto mb-10 max-w-xl text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Plan your visit, book a quick darshan, or simply walk in — the doors
            of Madan Mohan Mandir are always open for the seeker. Come, receive
            the blessing.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book"
              className="rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Book Darshan
            </a>
            <a
              href="/contact"
              className="rounded-full border border-amber-300/60 bg-white/5 px-8 py-3 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
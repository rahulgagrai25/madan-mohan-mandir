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

const featuredEvent = {
  name: "Janmashtami Mahotsav",
  date: "16 August 2025",
  time: "6:00 PM – 12:30 AM",
  venue: "Main Temple Courtyard",
  desc: "The grandest celebration of the year — the midnight appearance of Lord Krishna. Join thousands of devotees for continuous kirtan, abhishek of the deity, cultural performances, and the sacred midnight aarti followed by mahaprasad.",
  image: "/events/featured-janmashtami.jpg",
  tag: "Featured Festival",
};

const upcomingEvents = [
  {
    name: "Radhashtami Utsav",
    date: "1 September 2025",
    time: "5:00 AM – 11:00 PM",
    venue: "Main Sanctum",
    desc: "Celebrating the appearance day of Radha Rani with special shringar darshan, kirtan, and a grand abhishek ceremony.",
    image: "/events/radhashtami.jpg",
    tag: "Festival",
    icon: "🌺",
  },
  {
    name: "Sharad Purnima Raas",
    date: "6 October 2025",
    time: "7:00 PM – 1:00 AM",
    venue: "Natya Mandap",
    desc: "The divine Raas Leela of Radha and Krishna under the full moon, performed by temple artists and local devotees.",
    image: "/events/sharad-purnima.jpg",
    tag: "Cultural",
    icon: "🌕",
  },
  {
    name: "Diwali Annakut",
    date: "20 October 2025",
    time: "5:30 PM – 10:00 PM",
    venue: "Temple Courtyard",
    desc: "Hundreds of food offerings to the Lord arranged in a grand mountain, followed by lamp lighting and fireworks.",
    image: "/events/diwali.jpg",
    tag: "Festival",
    icon: "🪔",
  },
  {
    name: "Govardhan Puja",
    date: "22 October 2025",
    time: "7:00 AM – 12:00 PM",
    venue: "Temple Gardens",
    desc: "Commemorating Lord Krishna lifting Govardhan Hill, with a mini Govardhan built from prasad and worshipped.",
    image: "/events/govardhan.jpg",
    tag: "Puja",
    icon: "⛰️",
  },
  {
    name: "Kartik Purnima Deepotsav",
    date: "5 November 2025",
    time: "5:00 PM – 9:00 PM",
    venue: "Ghat & Courtyard",
    desc: "Thousands of lamps illuminate the temple and riverbank in a breathtaking festival of light.",
    image: "/events/kartik.jpg",
    tag: "Festival",
    icon: "🪔",
  },
  {
    name: "Holi Utsav",
    date: "14 March 2026",
    time: "8:00 AM – 2:00 PM",
    venue: "Temple Grounds",
    desc: "The joyous festival of colours celebrated with devotional songs, abeer, and special sweets.",
    image: "/events/holi.jpg",
    tag: "Utsav",
    icon: "🎨",
  },
];

const weeklySchedule = [
  { day: "Monday", event: "Rudrabhishek", time: "6:00 AM" },
  { day: "Tuesday", event: "Hanuman Chalisa Path", time: "7:00 AM" },
  { day: "Wednesday", event: "Gau Seva & Bhog", time: "11:00 AM" },
  { day: "Thursday", event: "Bhagavat Katha", time: "6:00 PM" },
  { day: "Friday", event: "Kirtan Sandhya", time: "7:00 PM" },
  { day: "Saturday", event: "Cultural Program", time: "6:30 PM" },
  { day: "Sunday", event: "Bal Sabha & Satsang", time: "10:00 AM" },
];

const pastEvents = [
  { src: "/events/past-1.jpg", title: "Janmashtami 2024" },
  { src: "/events/past-2.jpg", title: "Radhashtami 2024" },
  { src: "/events/past-3.jpg", title: "Diwali Annakut 2024" },
  { src: "/events/past-4.jpg", title: "Kartik Deepotsav 2024" },
  { src: "/events/past-5.jpg", title: "Holi Utsav 2024" },
  { src: "/events/past-6.jpg", title: "Gau Puja 2024" },
];

/* ---------------- Component ---------------- */

export default function EventsPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Festival", "Cultural", "Puja", "Utsav"];

  const filteredEvents =
    filter === "All"
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.tag === filter);

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
            Celebrations & Utsavs
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-tight text-amber-50 md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Temple <span className="text-amber-300">Events</span>
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
            From the midnight joy of Janmashtami to the thousand lamps of
            Kartik, every festival at Madan Mohan Mandir is a doorway to the
            Divine. Come, celebrate with us.
          </p>
        </div>
      </section>

      {/* ============ FEATURED EVENT ============ */}
      <section className="relative w-full bg-[#0a0503] pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="group relative overflow-hidden rounded-3xl border border-amber-400/25 bg-white/[0.02]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[500px]">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/80" />

                {/* Featured badge */}
                <span
                  className="absolute top-5 left-5 rounded-full border border-amber-400/60 bg-black/70 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-amber-200 backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  ✦ {featuredEvent.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-center p-8 md:p-12">
                <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

                <p
                  className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-amber-300/90"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {featuredEvent.date}
                </p>

                <h2
                  className="mb-5 text-3xl font-bold leading-tight text-amber-50 md:text-4xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {featuredEvent.name}
                </h2>

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-[1px] w-12 bg-amber-400/70" />
                  <span className="text-amber-400">✦</span>
                </div>

                <p
                  className="mb-8 text-sm font-light leading-relaxed text-amber-50/75 md:text-base"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {featuredEvent.desc}
                </p>

                {/* Meta info */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-amber-400/20 bg-white/[0.03] p-3">
                    <p
                      className="mb-1 text-[10px] uppercase tracking-widest text-amber-300/70"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Time
                    </p>
                    <p
                      className="text-xs font-medium text-amber-100"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {featuredEvent.time}
                    </p>
                  </div>
                  <div className="rounded-xl border border-amber-400/20 bg-white/[0.03] p-3">
                    <p
                      className="mb-1 text-[10px] uppercase tracking-widest text-amber-300/70"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Venue
                    </p>
                    <p
                      className="text-xs font-medium text-amber-100"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {featuredEvent.venue}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#register"
                    className="rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Register Now
                  </a>
                  <a
                    href="#details"
                    className="rounded-full border border-amber-300/60 bg-white/5 px-7 py-3 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UPCOMING EVENTS ============ */}
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
          <div className="mb-12 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Mark Your Calendar
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Upcoming <span className="text-amber-300">Festivals</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 md:text-sm ${
                  filter === f
                    ? "border-amber-400 bg-amber-400 text-black shadow-lg shadow-amber-500/30"
                    : "border-amber-400/30 bg-white/[0.02] text-amber-200/80 hover:border-amber-400/60 hover:bg-white/[0.05]"
                }`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((e) => (
              <article
                key={e.name}
                className="group relative overflow-hidden rounded-2xl border border-amber-400/15 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/15"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Tag */}
                  <span
                    className="absolute top-4 left-4 rounded-full border border-amber-400/50 bg-black/70 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-amber-200 backdrop-blur-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {e.tag}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 bg-black/70 text-xl backdrop-blur-sm">
                    {e.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <p
                    className="mb-2 text-xs font-medium uppercase tracking-widest text-amber-300/80"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {e.date}
                  </p>
                  <h3
                    className="mb-3 text-xl font-bold text-amber-50"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {e.name}
                  </h3>
                  <p
                    className="mb-4 text-sm font-light leading-relaxed text-amber-100/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {e.desc}
                  </p>

                  {/* Time + Venue */}
                  <div className="mb-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-amber-200/60">
                    <span style={{ fontFamily: "var(--font-jakarta)" }}>
                      🕐 {e.time}
                    </span>
                    <span style={{ fontFamily: "var(--font-jakarta)" }}>
                      📍 {e.venue}
                    </span>
                  </div>

                  <a
                    href={`#event-${e.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition-colors hover:text-amber-200"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Event Details
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <p
              className="py-16 text-center text-sm text-amber-200/60"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              No events in this category right now.
            </p>
          )}
        </div>
      </section>

      {/* ============ WEEKLY SCHEDULE ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Every Week
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Weekly <span className="text-amber-300">Programs</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Schedule list */}
          <div className="overflow-hidden rounded-2xl border border-amber-400/20 bg-white/[0.02] backdrop-blur-sm">
            {weeklySchedule.map((item, i) => (
              <div
                key={item.day}
                className={`group flex flex-col items-start justify-between gap-2 px-6 py-5 transition-colors duration-300 hover:bg-amber-400/[0.04] sm:flex-row sm:items-center md:px-8 ${
                  i !== weeklySchedule.length - 1 ? "border-b border-amber-400/10" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/5 text-xs font-bold text-amber-300"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {item.day.slice(0, 3)}
                  </span>
                  <div>
                    <h3
                      className="text-base font-semibold text-amber-50 md:text-lg"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {item.event}
                    </h3>
                    <p
                      className="text-xs text-amber-200/50"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.day}
                    </p>
                  </div>
                </div>
                <span
                  className="text-sm font-medium tracking-wider text-amber-300/90"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAST EVENTS GALLERY ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Memories
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Past <span className="text-amber-300">Celebrations</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {pastEvents.map((p) => (
              <div
                key={p.title}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-amber-400/15"
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p
                    className="text-sm font-semibold text-amber-50 md:text-base"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {p.title}
                  </p>
                  <div className="mt-1 h-[1px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-12" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-7 py-3 text-sm font-medium text-amber-200 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/10"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative w-full overflow-hidden bg-[#0a0503] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.1),_transparent_60%)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <div className="mb-6 flex justify-center">
            <span className="text-4xl text-amber-300/90 md:text-5xl">🎉</span>
          </div>

          <h2
            className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Celebrate with <span className="text-amber-300">the Lord</span>
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
            Whether you wish to sponsor a festival, volunteer for seva, or
            simply join in the celebration — there is a place for you at Madan
            Mohan Mandir.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#register"
              className="rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Register for Event
            </a>
            <a
              href="#contact"
              className="rounded-full border border-amber-300/60 bg-white/5 px-8 py-3 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
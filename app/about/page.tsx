"use client";

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

const stats = [
  { value: "500+", label: "Years of Legacy" },
  { value: "10K+", label: "Daily Devotees" },
  { value: "365", label: "Days of Aarti" },
  { value: "50+", label: "Festivals Yearly" },
];

const timeline = [
  {
    year: "1520 CE",
    title: "Divine Manifestation",
    desc: "The self-manifested deity of Madan Mohan appeared to a devoted sage in a dream, marking the sacred origin of the temple.",
  },
  {
    year: "1640 CE",
    title: "Temple Construction",
    desc: "Under royal patronage, the grand stone temple was built, adorned with intricate carvings and a golden spire.",
  },
  {
    year: "1785 CE",
    title: "Renovation & Expansion",
    desc: "The temple courtyard, natya mandap, and surrounding ghats were expanded to accommodate growing pilgrim footfall.",
  },
  {
    year: "1923 CE",
    title: "Seva Trust Established",
    desc: "A dedicated trust was formed to manage daily worship, annadan (food service), and temple preservation.",
  },
  {
    year: "Present Day",
    title: "Living Heritage",
    desc: "Madan Mohan Mandir continues to be a vibrant center of bhakti, culture, and selfless service for thousands daily.",
  },
];

const architectureFeatures = [
  {
    icon: "🛕",
    title: "Nagara Style Shikhara",
    desc: "The towering spire follows classical Nagara architecture, rising 108 feet with intricate stone carvings of deities and motifs.",
  },
  {
    icon: "🏛️",
    title: "Carved Sandstone Pillars",
    desc: "Forty-eight hand-carved pillars depict scenes from the Bhagavata Purana, each telling a story of devotion.",
  },
  {
    icon: "🌟",
    title: "Golden Kalash",
    desc: "The pinnacle is crowned with a gold-plated kalash, visible for miles, symbolizing the temple's spiritual radiance.",
  },
  {
    icon: "🪷",
    title: "Sacred Courtyard",
    desc: "A marble-paved parikrama path encircles the sanctum, allowing devotees to circumambulate in quiet prayer.",
  },
];

const philosophyPoints = [
  {
    title: "Bhakti",
    sanskrit: "भक्ति",
    desc: "Pure devotion as the path to the Divine — where every ritual, every offering, and every glance at the Lord becomes an act of love.",
  },
  {
    title: "Seva",
    sanskrit: "सेवा",
    desc: "Selfless service to all beings. Daily annadan, medical camps, and educational support flow from the temple's heart.",
  },
  {
    title: "Satsang",
    sanskrit: "सत्संग",
    desc: "The company of the truthful. Daily kirtans, scriptural discourses, and gatherings nurture the soul's journey.",
  },
];

const sevas = [
  { name: "Annadan Seva", desc: "Free meals served to 5,000+ devotees daily", icon: "🍛" },
  { name: "Gau Seva", desc: "Shelter and care for 200+ cows", icon: "🐄" },
  { name: "Vidya Daan", desc: "Free education for underprivileged children", icon: "📚" },
  { name: "Medical Camp", desc: "Weekly free health checkups & medicines", icon: "🩺" },
];

/* ---------------- Component ---------------- */

export default function AboutPage() {
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
            Our Sacred Story
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-tight text-amber-50 md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            About <span className="text-amber-300">Madan Mohan Mandir</span>
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
            A living sanctuary of devotion where the Divine play of Lord Krishna
            meets the timeless longing of the human heart. For five centuries,
            this sacred ground has whispered the secrets of love, surrender, and
            grace.
          </p>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative w-full border-y border-amber-400/15 bg-[#0a0503] py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="mb-1 text-3xl font-bold text-amber-300 md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] font-medium uppercase tracking-[0.25em] text-amber-100/60 md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ HISTORY ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12">
          {/* Image side */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl border border-amber-400/30" />
            <div className="absolute -inset-6 rounded-3xl border border-amber-400/10" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/10">
              <Image
                src="/about/temple-history.jpg"
                alt="Madan Mohan Mandir History"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-amber-400/40 bg-black/80 px-6 py-4 backdrop-blur-md md:block">
              <p
                className="text-3xl font-bold text-amber-300"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                1520
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.25em] text-amber-100/70"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Divine Origin
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our History
            </p>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Five Centuries of <span className="text-amber-300">Unbroken Bhakti</span>
            </h2>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-amber-400/70" />
              <span className="text-amber-400">✦</span>
            </div>

            <p
              className="mb-5 text-sm font-light leading-relaxed text-amber-50/80 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The story of Madan Mohan Mandir begins not with stone, but with a
              dream. In the early 16th century, a devoted sage named Shri
              Haridas received a divine vision — the self-manifested form of
              Lord Krishna, smiling with the sweetness of a thousand moons,
              asking to be worshipped in this sacred land.
            </p>

            <p
              className="mb-5 text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              What began as a humble thatched shrine grew, over generations,
              into the grand temple you see today. Kings, saints, poets, and
              common folk — all contributed their devotion, their art, and their
              love to shape this abode of the Divine.
            </p>

            <p
              className="text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Today, Madan Mohan Mandir stands not as a monument of the past,
              but as a <span className="text-amber-200">living heartbeat of devotion</span> — where
              the lamp still burns, the bells still ring, and the Lord still
              smiles upon all who come seeking.
            </p>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        {/* Background dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(251,191,36,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Through the Ages
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              A <span className="text-amber-300">Timeline</span> of Devotion
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Timeline items */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-amber-400/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div
                      className={`rounded-2xl border border-amber-400/20 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-amber-400/50 hover:bg-white/[0.06] ${
                        i % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <p
                        className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-amber-300/90"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {item.year}
                      </p>
                      <h3
                        className="mb-2 text-lg font-bold text-amber-50 md:text-xl"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm font-light leading-relaxed text-amber-100/70"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 top-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-amber-400/40" />
                    <span className="relative h-2 w-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/60" />
                  </div>

                  {/* Empty spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ DEITY SIGNIFICANCE ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Text */}
            <div>
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The Presiding Deity
              </p>
              <h2
                className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Lord <span className="text-amber-300">Madan Mohan</span>
              </h2>

              <div className="mb-6 flex items-center gap-3">
                <span className="h-[1px] w-12 bg-amber-400/70" />
                <span className="text-amber-400">✦</span>
              </div>

              <p
                className="mb-5 text-sm font-light leading-relaxed text-amber-50/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                <span className="text-amber-200">"Madan Mohan"</span> — the
                enchanter of the god of love himself. The name speaks of a form
                so beautiful that even Kamadeva, the god of desire, bows in
                awe. Here, Lord Krishna is worshipped in His most intimate,
                loving aspect — as the beloved of Radha, the flute-player of
                Vrindavan, the friend of every soul.
              </p>

              <p
                className="mb-8 text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The deity is adorned daily with fresh flowers, sandalwood
                paste, and exquisite silk garments. Devotees believe that a
                single sincere glance at the Lord's smiling face grants
                liberation from the cycle of birth and death.
              </p>

              {/* Shloka card */}
              <div className="rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.06] to-transparent p-6 backdrop-blur-sm">
                <p
                  className="mb-3 text-center text-lg font-medium leading-relaxed text-amber-200 md:text-xl"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  मदन मोहन मुरलीधर, राधा माधव रंग।
                </p>
                <p
                  className="mb-3 text-center text-sm font-light italic text-amber-100/70"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Madana Mohana Murālīdhara, Rādhā Mādhava Raṅga
                </p>
                <div className="mx-auto mb-3 h-[1px] w-12 bg-amber-400/50" />
                <p
                  className="text-center text-xs font-light text-amber-100/60"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  "The enchanter of love, the holder of the flute, the divine
                  play of Radha and Madhava."
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-amber-400/30" />
              <div className="absolute -inset-6 rounded-3xl border border-amber-400/10" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/10">
                <Image
                  src="/about/deity.jpg"
                  alt="Lord Madan Mohan"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ARCHITECTURE ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Sacred Architecture
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Built to <span className="text-amber-300">Honour the Divine</span>
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
              Every stone, every carving, every spire is an offering. The temple
              is not just a structure — it is a prayer in architecture.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {architectureFeatures.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/20"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-2xl">
                    {f.icon}
                  </div>
                  <h3
                    className="mb-3 text-base font-bold text-amber-50 md:text-lg"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed text-amber-100/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our Guiding Light
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Three <span className="text-amber-300">Pillars</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {philosophyPoints.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.04] to-transparent p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60"
              >
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

                <p
                  className="mb-4 text-5xl font-bold text-amber-300/90 md:text-6xl"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {p.sanskrit}
                </p>
                <h3
                  className="mb-4 text-xl font-bold text-amber-50 md:text-2xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {p.title}
                </h3>
                <div className="mx-auto mb-4 h-[1px] w-12 bg-amber-400/50" />
                <p
                  className="text-sm font-light leading-relaxed text-amber-100/70"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SEVA ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Text */}
            <div>
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Serving with Love
              </p>
              <h2
                className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Seva — The <span className="text-amber-300">Heartbeat</span> of the Mandir
              </h2>

              <div className="mb-6 flex items-center gap-3">
                <span className="h-[1px] w-12 bg-amber-400/70" />
                <span className="text-amber-400">✦</span>
              </div>

              <p
                className="mb-8 text-sm font-light leading-relaxed text-amber-50/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                At Madan Mohan Mandir, devotion is not confined to the sanctum.
                It flows out into the world as selfless service — feeding the
                hungry, caring for the cow, educating the young, and healing the
                sick. Every act of seva is an offering at the Lord's feet.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {sevas.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-start gap-4 rounded-xl border border-amber-400/20 bg-white/[0.03] p-4 backdrop-blur-sm transition-colors duration-300 hover:border-amber-400/50 hover:bg-white/[0.06]"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <h3
                        className="mb-1 text-sm font-semibold text-amber-100 md:text-base"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {s.name}
                      </h3>
                      <p
                        className="text-xs font-light text-amber-100/60"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-amber-400/30" />
              <div className="absolute -inset-6 rounded-3xl border border-amber-400/10" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/10">
                <Image
                  src="/about/seva.jpg"
                  alt="Seva at Madan Mohan Mandir"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative w-full overflow-hidden bg-[#0a0503] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.1),_transparent_60%)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <div className="mb-6 flex justify-center">
            <span className="text-4xl text-amber-300/90 md:text-5xl">ॐ</span>
          </div>

          <h2
            className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Come, Experience the <span className="text-amber-300">Divine</span>
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
            The doors of Madan Mohan Mandir are open to all — the seeker, the
            skeptic, the devotee, and the wanderer. Come, sit in the courtyard.
            Let the bells ring. Let the heart soften. The Lord is waiting.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/gallery"
              className="rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              View Gallery
            </a>
            <a
              href="/#darshan"
              className="rounded-full border border-amber-300/60 bg-white/5 px-8 py-3 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Darshan Timings
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
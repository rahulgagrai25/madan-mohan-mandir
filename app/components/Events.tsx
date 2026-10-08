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

const events = [
  {
    name: "Janmashtami",
    date: "Aug 16, 2025",
    desc: "Grand midnight celebration of Lord Krishna's birth with bhajans, abhishek, and prasad distribution.",
    image: "/events/janmashtami.png",
    tag: "Major Festival",
  },
  {
    name: "Radhashtami",
    date: "Sep 1, 2025",
    desc: "Auspicious appearance day of Radha Rani, celebrated with kirtan and special shringar darshan.",
    image: "/events/radhashtami.png",
    tag: "Festival",
  },
  {
    name: "Holi Utsav",
    date: "Mar 14, 2025",
    desc: "Joyous celebration of colours in the temple courtyard with devotional songs and sweets.",
    image: "/events/holi.png",
    tag: "Utsav",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-28`}
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

      {/* Soft golden glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#800000]/5 blur-3xl" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
        {/* =================================================
            HEADING
        ================================================== */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:mb-10 md:mb-14 md:flex-row md:items-end md:gap-6">
          <div className="text-center md:text-left">
            <p
              className="mb-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] sm:text-xs md:mb-3 md:text-xs md:tracking-[0.4em]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Celebrations
            </p>

            <h2
              className="mb-3 text-3xl font-bold text-[#800000] sm:text-3xl md:mb-4 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Upcoming <span className="text-[#C2A95B]">Festivals</span>
            </h2>

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
              <span className="text-sm text-[#C2A95B] md:text-base">✦</span>
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
            </div>
          </div>

          <a
            href="#all-events"
            className="rounded-full border border-[#C2A95B]/40 px-5 py-2 text-[10px] font-medium uppercase tracking-widest text-[#800000] transition-colors duration-300 hover:border-[#C2A95B] hover:bg-[#C2A95B]/10 sm:px-6 sm:text-xs"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            View All →
          </a>
        </div>

        {/* =================================================
            CARDS — horizontal scroll on mobile, grid on desktop
        ================================================== */}
        <div
          className="
            -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            sm:-mx-6 sm:gap-5 sm:px-6
            md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0
          "
        >
          {events.map((e) => (
            <article
              key={e.name}
              className="group relative w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#C2A95B]/25 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C2A95B] hover:shadow-md sm:w-[70vw] md:w-auto md:shrink"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/50 via-transparent to-transparent" />

                {/* Tag */}
                <span
                  className="absolute left-3 top-3 rounded-full border border-[#C2A95B]/50 bg-white/90 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-widest text-[#800000] backdrop-blur-sm md:left-4 md:top-4 md:px-3 md:py-1 md:text-[10px]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {e.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-4 md:p-6">
                <p
                  className="mb-1.5 text-[10px] font-medium uppercase tracking-widest text-[#C2A95B] md:mb-2 md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {e.date}
                </p>

                <h3
                  className="mb-2 text-lg font-bold text-[#800000] md:mb-3 md:text-xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {e.name}
                </h3>

                <p
                  className="mb-3 text-xs font-light leading-relaxed text-[#800000]/70 md:mb-4 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {e.desc}
                </p>

                <a
                  href={`#event-${e.name.toLowerCase()}`}
                  className="group/link inline-flex items-center gap-2 text-xs font-medium text-[#C2A95B] transition-colors hover:text-[#800000] md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Learn More
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
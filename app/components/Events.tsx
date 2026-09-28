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
      className={`${cinzel.variable} ${jakarta.variable} relative w-full bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Celebrations
            </p>
            <h2
              className="mb-4 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Upcoming <span className="text-amber-300">Festivals</span>
            </h2>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="h-[1px] w-12 bg-amber-400/70" />
              <span className="text-amber-400">✦</span>
            </div>
          </div>

          <a
            href="#all-events"
            className="rounded-full border border-amber-400/40 px-6 py-2 text-xs font-medium uppercase tracking-widest text-amber-200 transition-colors duration-300 hover:border-amber-400 hover:bg-amber-400/10"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            View All →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.name}
              className="group relative overflow-hidden rounded-2xl border border-amber-400/15 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40  to-transparent" />

                {/* Tag */}
                <span
                  className="absolute top-4 left-4 rounded-full border border-amber-400/50 bg-black/70 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-amber-200 backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {e.tag}
                </span>
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

                <a
                  href={`#event-${e.name.toLowerCase()}`}
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition-colors hover:text-amber-200"
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
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

const quote =
  "Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth ✦ For the protection of the good, for the destruction of the wicked, and for the establishment of dharma, I come into being age after age ✦";

export default function KrishnaQuoteMarquee() {
  return (
    <section
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-[#800000] py-4 md:py-5`}
    >
      {/* Subtle golden pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft golden glow */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#C2A95B]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#C2A95B]/10 blur-3xl" />

      {/* Top & bottom golden borders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C2A95B]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C2A95B]/60 to-transparent" />

      {/* Marquee track */}
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap">
          {/* Quote repeated twice for seamless loop */}
          <span
            className="text-xs font-light tracking-wide text-[#C2A95B] md:text-xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {quote}
          </span>
          <span
            className="text-xs font-light tracking-wide text-[#C2A95B] md:text-xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {quote}
          </span>
        </div>

        <div
          aria-hidden="true"
          className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap"
        >
          <span
            className="text-xs font-light tracking-wide text-[#C2A95B] md:text-xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {quote}
          </span>
          <span
            className="text-xs font-light tracking-wide text-[#C2A95B] md:text-xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {quote}
          </span>
        </div>
      </div>
    </section>
  );
}
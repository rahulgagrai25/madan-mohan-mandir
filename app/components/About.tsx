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

export default function About() {
  return (
    <section
      id="about"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full bg-gradient-to-b from-black via-[#0a0503] to-black py-24 md:py-32`}
    >
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.08),_transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12">
        {/* Left – Image */}
        <div className="relative">
          {/* Decorative frame */}
          <div className="absolute -inset-3 rounded-3xl border border-amber-400/30" />
          <div className="absolute -inset-6 rounded-3xl border border-amber-400/10" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/10">
            <Image
              src="/hero/image.png"
              alt="Madan Mohan Mandir"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-amber-400/40 bg-black/80 px-6 py-4 backdrop-blur-md md:block">
            <p
              className="text-3xl font-bold text-amber-300"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              500+
            </p>
            <p
              className="text-[10px] uppercase tracking-[0.25em] text-amber-100/70"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Years of Devotion
            </p>
          </div>
        </div>

        {/* Right – Text */}
        <div>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            About the Temple
          </p>

          <h2
            className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            A Sacred Abode of <span className="text-amber-300">Divine Love</span>
          </h2>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-12 bg-amber-400/70" />
            <span className="text-amber-400">✦</span>
            <span className="h-[1px] w-24 bg-gradient-to-r from-amber-400/70 to-transparent" />
          </div>

          <p
            className="mb-5 text-sm font-light leading-relaxed text-amber-50/80 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Nestled in the heart of the holy land, <span className="text-amber-200">Madan Mohan Mandir</span> stands
            as a timeless testament to devotion. For centuries, devotees have
            thronged here to seek the blessings of Lord Krishna, whose divine
            smile is said to melt the heaviest of hearts.
          </p>

          <p
            className="mb-8 text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            The temple's architecture, adorned with intricate carvings and
            golden spires, reflects the deep reverence of its founders. Every
            morning aarti, every evening bhajan, and every whispered prayer
            carries the fragrance of an unbroken tradition of love and
            surrender.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🪔", label: "Daily Aarti" },
              { icon: "📿", label: "Bhajan Sandhya" },
              { icon: "🛕", label: "Ancient Architecture" },
              { icon: "🌺", label: "Festival Celebrations" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-amber-400/20 bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-amber-400/50 hover:bg-white/[0.06]"
              >
                <span className="text-xl">{item.icon}</span>
                <span
                  className="text-xs font-medium tracking-wide text-amber-100/90 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
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

export default function Hero() {
  return (
    <section
      className={`${cinzel.variable} ${jakarta.variable} relative flex min-h-screen w-full items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Subtle Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.15),_transparent_60%)]" />

      {/* Decorative Top Border */}
      <div className="absolute top-[80px] left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
        {/* Sacred Symbol */}
        <div className="mb-6 flex justify-center">
          <span className="text-4xl text-amber-300/90 md:text-5xl">ॐ</span>
        </div>

        {/* Small Tagline */}
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90 md:text-sm"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Since Time Immemorial
        </p>

        {/* Main Heading */}
        <h1
          className="mb-4 text-4xl font-bold leading-tight text-amber-50 md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Madan Mohan
          <span className="block text-amber-300">Mandir</span>
        </h1>

        {/* Hindi Subheading */}
        <p
          className="mb-8 text-lg font-light text-amber-100/90 md:text-2xl"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          श्री मदन मोहन मंदिर
        </p>

        {/* Divider */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
          <span className="text-amber-400">✦</span>
          <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>

        {/* Description */}
        <p
          className="mx-auto mb-10 max-w-2xl text-sm font-light leading-relaxed text-amber-50/80 md:text-base"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          A sacred abode of devotion, where the divine presence of Lord Krishna
          fills every heart with peace, love, and eternal bliss. Step into a
          space of timeless spirituality and surrender.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#darshan"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <span className="relative z-10">Book Darshan</span>
          </a>

          <a
            href="#about"
            className="rounded-full border border-amber-300/60 bg-white/5 px-8 py-3 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Explore Temple
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-amber-200/70"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Scroll
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-amber-300/50 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-amber-300" />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
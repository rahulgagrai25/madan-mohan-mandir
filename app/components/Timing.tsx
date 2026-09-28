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

const timings = [
  { name: "Mangala Aarti", time: "5:00 AM – 5:30 AM", icon: "🌅" },
  { name: "Morning Darshan", time: "5:30 AM – 12:00 PM", icon: "☀️" },
  { name: "Bhog Aarti", time: "12:00 PM – 12:30 PM", icon: "🍛" },
  { name: "Afternoon Darshan", time: "12:30 PM – 4:30 PM", icon: "🕉️" },
  { name: "Sandhya Aarti", time: "6:30 PM – 7:00 PM", icon: "🌆" },
  { name: "Shayan Aarti", time: "8:30 PM – 9:00 PM", icon: "🌙" },
];

export default function Timing() {
  return (
    <section
      id="darshan"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-[#0a0503] py-24 md:py-32`}
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, rgba(251,191,36,1) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
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

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {timings.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/20"
            >
              {/* Hover glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

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
                    className="text-sm font-light text-amber-200/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {t.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="mt-10 text-center text-xs font-light italic text-amber-200/50 md:text-sm"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          * Timings may vary during festivals and special occasions.
        </p>
      </div>
    </section>
  );
}
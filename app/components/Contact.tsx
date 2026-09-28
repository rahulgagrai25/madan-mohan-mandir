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

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["Mandir Marg, Near River Ghat", "Vrindavan, UP 281121"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91 98765 43210", "Mon–Sat · 9 AM – 6 PM"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["info@madanmohanmandir.org", "Replies within 24–48 hrs"],
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32`}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(251,191,36,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            We'd Love to Hear From You
          </p>
          <h2
            className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Get in <span className="text-amber-300">Touch</span>
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
            Planning a visit, offering seva, or just curious? Reach out — the
            Madan Mohan Mandir family is always here to welcome you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          {/* LEFT: Contact info cards */}
          <div className="space-y-4">
            {contactInfo.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/15"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-2xl">
                    {c.icon}
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-base font-bold text-amber-50 md:text-lg"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {c.title}
                    </h3>
                    {c.lines.map((line) => (
                      <p
                        key={line}
                        className="text-xs font-light leading-relaxed text-amber-100/70 md:text-sm"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick action */}
            <a
              href="/contact"
              className="group flex items-center justify-between rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-400/[0.08] to-transparent p-6 backdrop-blur-sm transition-all duration-500 hover:border-amber-400/70 hover:from-amber-400/[0.15]"
            >
              <div>
                <p
                  className="mb-1 text-xs font-medium uppercase tracking-widest text-amber-300/80"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Full Contact Page
                </p>
                <p
                  className="text-sm font-semibold text-amber-100 md:text-base"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Departments, FAQs & Map
                </p>
              </div>
              <span className="text-2xl text-amber-300 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* RIGHT: Quick form */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.05] to-transparent p-6 backdrop-blur-sm md:p-8">
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative">
              <h3
                className="mb-2 text-xl font-bold text-amber-50"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Send a Quick Message
              </h3>
              <p
                className="mb-6 text-xs font-light text-amber-100/60 md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                We'll respond within 24–48 hours.
              </p>

              <form className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-amber-400/25 bg-white/[0.03] px-4 py-3 text-sm text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-amber-400/25 bg-white/[0.03] px-4 py-3 text-sm text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-amber-400/25 bg-white/[0.03] px-4 py-3 text-sm text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-amber-400/25 bg-white/[0.03] px-4 py-3 text-sm text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
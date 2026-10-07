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
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-white py-24 md:py-32`}
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
          TOP-LEFT DECORATIVE IMAGE SLOT
      ====================================================== */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-40 w-40 md:block lg:h-56 lg:w-56">
        {/* Replace src with your decorative PNG */}
        <Image
          src="/elements/feather.png"
          alt=""
          fill
          sizes="224px"
          className="object-contain object-left-top opacity-90"
          priority
        />
      </div>

      {/* =====================================================
          TOP-RIGHT DECORATIVE IMAGE SLOT
      ====================================================== */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 hidden h-40 w-40 md:block lg:h-56 lg:w-56">
        {/* Replace src with your decorative PNG */}
        <Image
          src="/elements/feather.png"
          alt=""
          fill
          sizes="224px"
          className="object-contain object-right-top opacity-90 scale-x-[-1]"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            We'd Love to Hear From You
          </p>
          <h2
            className="mb-6 text-3xl font-bold text-[#800000] md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Get in <span className="text-[#C2A95B]">Touch</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C2A95B]/70" />
            <span className="text-[#C2A95B]">✦</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C2A95B]/70" />
          </div>
          <p
            className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
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
                className="group relative overflow-hidden rounded-2xl border border-[#C2A95B]/25 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-md"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C2A95B]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#C2A95B]/30 bg-[#C2A95B]/5 text-2xl">
                    {c.icon}
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-base font-bold text-[#800000] md:text-lg"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {c.title}
                    </h3>
                    {c.lines.map((line) => (
                      <p
                        key={line}
                        className="text-xs font-light leading-relaxed text-[#800000]/70 md:text-sm"
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
              className="group flex items-center justify-between rounded-2xl border border-[#C2A95B]/30 bg-gradient-to-r from-[#C2A95B]/[0.08] to-transparent p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#C2A95B] hover:from-[#C2A95B]/[0.15]"
            >
              <div>
                <p
                  className="mb-1 text-xs font-medium uppercase tracking-widest text-[#C2A95B]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Full Contact Page
                </p>
                <p
                  className="text-sm font-semibold text-[#800000] md:text-base"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Departments, FAQs & Map
                </p>
              </div>
              <span className="text-2xl text-[#C2A95B] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* RIGHT: Quick form */}
          <div className="relative overflow-hidden rounded-2xl border border-[#C2A95B]/25 bg-gradient-to-br from-[#C2A95B]/[0.05] to-transparent p-6 backdrop-blur-sm md:p-8">
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#C2A95B]/10 blur-3xl" />

            <div className="relative">
              <h3
                className="mb-2 text-xl font-bold text-[#800000]"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Send a Quick Message
              </h3>
              <p
                className="mb-6 text-xs font-light text-[#800000]/60 md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                We'll respond within 24–48 hours.
              </p>

              <form className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-[#C2A95B]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#C2A95B]/25 bg-white/60 px-4 py-3 text-sm text-[#800000] placeholder-[#800000]/30 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:bg-white"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-[#C2A95B]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#C2A95B]/25 bg-white/60 px-4 py-3 text-sm text-[#800000] placeholder-[#800000]/30 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:bg-white"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-[#C2A95B]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-[#C2A95B]/25 bg-white/60 px-4 py-3 text-sm text-[#800000] placeholder-[#800000]/30 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:bg-white"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-[#C2A95B]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-[#C2A95B]/25 bg-white/60 px-4 py-3 text-sm text-[#800000] placeholder-[#800000]/30 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:bg-white"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#C2A95B] to-[#a88f45] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#C2A95B]/30 transition-all duration-300 hover:shadow-[#C2A95B]/50 hover:brightness-110"
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
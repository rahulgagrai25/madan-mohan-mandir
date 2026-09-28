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

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Darshan", href: "#darshan" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const sevas = [
  { name: "Donate", href: "#donate" },
  { name: "Annadan Seva", href: "#annadan" },
  { name: "Gau Seva", href: "#gau-seva" },
  { name: "Book Aarti", href: "#aarti" },
  { name: "Volunteer", href: "#volunteer" },
];

const socials = [
  {
    name: "Facebook",
    href: "#facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#youtube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-black`}
    >
      {/* Top gold divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(251,191,36,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:px-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 – Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/5">
                <span className="text-2xl text-amber-300">ॐ</span>
              </div>
              <div>
                <h3
                  className="text-lg font-bold leading-tight text-amber-50"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Madan Mohan
                </h3>
                <p
                  className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Mandir
                </p>
              </div>
            </div>

            <p
              className="mb-6 text-sm font-light leading-relaxed text-amber-100/60"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              A sacred abode of devotion, where the divine presence of Lord
              Krishna fills every heart with peace and eternal bliss.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-white/[0.03] text-amber-200 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-light text-amber-100/70 transition-colors duration-300 hover:text-amber-300"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    <span className="h-[1px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Seva */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Seva & Offerings
            </h4>
            <ul className="space-y-3">
              {sevas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-light text-amber-100/70 transition-colors duration-300 hover:text-amber-300"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    <span className="h-[1px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Visit Us
            </h4>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 text-amber-400">📍</span>
                <p
                  className="text-sm font-light leading-relaxed text-amber-100/70"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Madan Mohan Mandir,
                  <br />
                  Vrindavan, Uttar Pradesh
                  <br />
                  India – 281121
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-0.5 text-amber-400">📞</span>
                <a
                  href="tel:+919999999999"
                  className="text-sm font-light text-amber-100/70 transition-colors hover:text-amber-300"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  +91 99999 99999
                </a>
              </li>

              <li className="flex gap-3">
                <span className="mt-0.5 text-amber-400">✉️</span>
                <a
                  href="mailto:info@madanmohanmandir.org"
                  className="text-sm font-light text-amber-100/70 transition-colors hover:text-amber-300"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  info@madanmohanmandir.org
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p
                className="mb-2 text-xs font-medium uppercase tracking-widest text-amber-200/70"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Get Blessings in Your Inbox
              </p>
              <form className="flex overflow-hidden rounded-full border border-amber-400/30 bg-white/[0.03] focus-within:border-amber-400/70">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-amber-50 placeholder-amber-200/40 focus:outline-none"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-400 to-amber-500 px-4 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:brightness-110"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 flex items-center justify-center gap-3">
          <span className="h-[1px] w-full max-w-[180px] bg-gradient-to-r from-transparent to-amber-400/40" />
          <span className="text-amber-400/80">✦</span>
          <span className="h-[1px] w-full max-w-[180px] bg-gradient-to-l from-transparent to-amber-400/40" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p
            className="text-center text-xs font-light text-amber-100/50 md:text-left"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            © {new Date().getFullYear()} Madan Mohan Mandir. All rights
            reserved. Made with <span className="text-amber-400">❤</span> for
            devotees.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-xs font-light text-amber-100/50 transition-colors hover:text-amber-300"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-xs font-light text-amber-100/50 transition-colors hover:text-amber-300"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Terms of Use
            </a>
          </div>
        </div>

        {/* Sanskrit blessing */}
        <p
          className="mt-8 text-center text-xs font-light italic tracking-wide text-amber-300/60"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          "सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः"
          <span className="mx-2 text-amber-400/50">•</span>
          May all be happy, may all be free from illness.
        </p>
      </div>
    </footer>
  );
}
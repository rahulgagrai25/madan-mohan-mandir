import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

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

/* ============================================================
   LINKS — aligned with NavBar
============================================================ */

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "History", href: "/history" },
  { name: "Darshan", href: "/darshan" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "Facebook",
    href: "#facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#youtube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden`}
    >
      {/* =====================================================
          BACKGROUND IMAGE LAYER
      ====================================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero/hero2.png')",
        }}
      />

      {/* Fade overlay: transparent at top → gold at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C2A95B]/30 via-[#b39a4f]/60 to-[#800000]" />

      {/* Subtle top divider */}
      <div className="relative z-20 h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-10 pb-6 md:px-12 md:pt-20 md:pb-10">
        {/* BRAND HERO — centered logo + name + tagline */}
        <div className="mb-8 flex flex-col items-center text-center md:mb-14">
          <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-full border border-[#C2A95B]/50 bg-[#C2A95B]/10 backdrop-blur-sm md:h-40 md:w-40">
            <img src="/elements/om.png" alt="" />
          </div>

          <h3
            className="mb-1 text-lg font-bold leading-tight text-white md:mb-2 md:text-3xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Madan Mohan Mandir
          </h3>

          <p
            className="mb-3 rounded bg-[#C2A95B]/40 p-2 text-[9px] uppercase tracking-[0.3em] text-white/80 md:mb-6 md:text-xs md:tracking-[0.4em]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Boreya · Kanke, Ranchi - Jharkhand - 834006
          </p>

          <p
            className="mx-auto max-w-xl text-xs font-light leading-relaxed text-white/80 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            A sacred abode of devotion, where the divine presence of Lord
            Krishna fills every heart with peace and eternal bliss.
          </p>

          {/* Socials row */}
          <div className="mt-4 flex items-center gap-2 md:mt-7 md:gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#800000] md:h-11 md:w-11"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS + DONATE CTA */}
        <div className="mx-auto mb-8 max-w-3xl border-t border-white/20 pt-6 md:mb-14 md:pt-12">
          {/* Quick Links — matches NavBar routes, centered */}
          <div className="text-center">
            <h4
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:mb-6 md:text-sm md:tracking-[0.25em]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Quick Links
            </h4>

            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 md:gap-x-8 md:gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs font-light text-white/80 transition-colors duration-300 hover:text-white md:gap-2 md:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    <span className="h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate CTA */}
          <div className="mt-8 flex justify-center md:mt-10">
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C2A95B] via-[#D4BC72] to-[#C2A95B] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#3D2A00] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:px-9 md:py-3.5 md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              <span>Donate</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            VISIT US — refined contact card (mobile only)
        ====================================================== */}
        <div className="mx-auto mb-8 max-w-md rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-sm md:hidden">
          {/* Header */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#C2A95B]" />
            <h4
              className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Visit Us
            </h4>
            <span className="h-px w-6 bg-[#C2A95B]" />
          </div>

          {/* Contact items */}
          <ul className="space-y-3">
            {/* Address */}
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C2A95B]/40 bg-[#C2A95B]/10 text-sm">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#C2A95B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </span>
              <div className="min-w-0">
                <p
                  className="text-[10px] uppercase tracking-[0.15em] text-white/60"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Address
                </p>
                <p
                  className="text-[12px] font-light leading-snug text-white/90"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Madan Mohan Mandir, Boreya, Kanke, Ranchi – 834006
                </p>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C2A95B]/40 bg-[#C2A95B]/10 text-sm">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#C2A95B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </span>
              <div className="min-w-0">
                <p
                  className="text-[10px] uppercase tracking-[0.15em] text-white/60"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Phone
                </p>
                <a
                  href="tel:+917488395587"
                  className="text-[12px] font-light text-white/90 transition-colors hover:text-[#C2A95B]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  +91 74883 95587
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C2A95B]/40 bg-[#C2A95B]/10 text-sm">
                <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="mail"> <g> <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#C2A95B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <rect fill="none" height="14" rx="2" ry="2" stroke="#C2A95B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"></rect> </g> </g> </g> </g></svg>
              </span>
              <div className="min-w-0">
                <p
                  className="text-[10px] uppercase tracking-[0.15em] text-white/60"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:madanmohanmandir1665@gmail.com"
                  className="break-all text-[12px] font-light text-white/90 transition-colors hover:text-[#C2A95B]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  madanmohanmandir1665@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="mb-5 flex items-center justify-center gap-3 md:mb-8">
          <span className="h-[1px] w-full max-w-[120px] bg-gradient-to-r from-transparent to-white/50 md:max-w-[180px]" />
          <span className="text-sm text-white/80 md:text-base">✦</span>
          <span className="h-[1px] w-full max-w-[120px] bg-gradient-to-l from-transparent to-white/50 md:max-w-[180px]" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <p
            className="text-center text-[10px] font-medium leading-relaxed text-white/70 md:text-left md:text-xs"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            © {new Date().getFullYear()} Madan Mohan Mandir. All rights
            reserved. Crafted with Devotion from Ranchi &nbsp;
            <span className="text-white">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
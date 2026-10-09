"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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

const NAV_HEIGHT = 80;

/** Routes where the navbar should always be maroon */
const MAROON_ROUTES = [
  "/about",
  "/history",
  "/events",
  "/gallery",
  "/contact",
  "/donate",
];

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "History", href: "/history" },
  { label: "Darshan", href: "/darshan" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [pastAbout, setPastAbout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMaroonRoute = MAROON_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  /* ---------- Scroll detection (unchanged) ---------- */
  useEffect(() => {
    if (isMaroonRoute) {
      setPastAbout(false);
      return;
    }

    const onScroll = () => {
      const about = document.getElementById("about");

      if (!about) {
        setPastAbout(false);
        return;
      }

      setPastAbout(about.getBoundingClientRect().top <= NAV_HEIGHT);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMaroonRoute, pathname]);

  /* ---------- Close mobile menu on route change ---------- */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* ---------- Lock body scroll when mobile menu is open ---------- */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ---------- Close on Escape key ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const dark = isMaroonRoute || pastAbout;

  const t = dark
    ? {
        nav: "bg-[#FFFBF5]/85 shadow-[0_1px_0_rgba(128,0,0,0.08)] backdrop-blur-sm",
        logo: "text-[#800000]",
        sub: "text-[#C2A95B]",
        link: "text-[#800000]/80 hover:text-[#800000]",
        donate:
          "border-[#800000]/60 bg-[#800000]/5 text-[#800000] hover:bg-[#800000]/30 hover:text-white",
        burger: "text-[#800000]",
        burgerBorder: "border-[#800000]/30",
      }
    : {
        nav: "bg-transparent backdrop-blur-sm",
        logo: "text-amber-100",
        sub: "text-amber-300/80",
        link: "text-amber-50/90 hover:text-amber-300",
        donate:
          "border-amber-400/60 bg-amber-500/10 text-amber-200 hover:bg-amber-400 hover:text-black",
        burger: "text-amber-100",
        burgerBorder: "border-amber-300/40",
      };

  return (
    <>
      <nav
        className={`${cinzel.variable} ${jakarta.variable} fixed top-0 left-0 z-50 h-[80px] w-full transition-colors duration-500 ${t.nav}`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12">
          {/* Logo / Temple Name */}
          <Link href="/" className="flex flex-col items-start">
            <h1
              className={`text-base font-bold tracking-wide transition-colors duration-500 sm:text-xl md:text-2xl ${t.logo}`}
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Madan Mohan Mandir
            </h1>
            <span
              className={`text-[8px] tracking-[0.25em] transition-colors duration-500 sm:text-[10px] md:text-xs md:tracking-[0.3em] ${t.sub}`}
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              श्री मदन मोहन मंदिर
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul
            className="hidden items-center gap-8 md:flex"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${t.link}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: Donate + Burger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/donate"
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm md:px-6 ${t.donate}`}
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Donate
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 md:hidden ${t.burgerBorder} ${t.burger}`}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ============================================================
          MOBILE MENU — backdrop + slide-in panel
      ============================================================ */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[80vw] max-w-[340px] flex-col bg-[#FFFBF5] shadow-2xl transition-transform duration-400 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {/* Decorative top gold bar */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C2A95B] to-transparent" />

        {/* Header of the panel */}
        <div className="flex items-center justify-between border-b border-[#C2A95B]/25 px-5 py-5">
          <div className="flex flex-col items-start">
            <h2
              className="text-base font-bold text-[#800000]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Madan Mohan Mandir
            </h2>
            <span
              className="text-[9px] tracking-[0.25em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              श्री मदन मोहन मंदिर
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#800000]/30 text-[#800000] transition-colors hover:bg-[#800000] hover:text-white"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item, i) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
              return (
                <li
                  key={item.href}
                  style={{
                    transitionDelay: menuOpen ? `${60 + i * 40}ms` : "0ms",
                  }}
                  className={`transform transition-all duration-300 ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-[#800000] text-[#FFF8E7] shadow-sm"
                        : "text-[#800000]/85 hover:bg-[#C2A95B]/10 hover:text-[#800000]"
                    }`}
                  >
                    <span
                      className="flex items-center gap-3"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive
                            ? "w-5 bg-[#C2A95B]"
                            : "w-3 bg-[#C2A95B]/50 group-hover:w-5"
                        }`}
                      />
                      {item.label}
                    </span>

                    {isActive && (
                      <span className="text-xs text-[#C2A95B]">✦</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="border-t border-[#C2A95B]/25 p-4">
          <Link
            href="/donate"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C2A95B] via-[#D4BC72] to-[#C2A95B] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#3D2A00] shadow-md transition-all duration-300 hover:shadow-lg"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <span>Donate</span>
            <span className="text-sm">→</span>
          </Link>

          <p
            className="mt-3 text-center text-[9px] uppercase tracking-[0.25em] text-[#800000]/50"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Shri Madan Mohan Mandir · Boreya
          </p>
        </div>
      </aside>
    </>
  );
}
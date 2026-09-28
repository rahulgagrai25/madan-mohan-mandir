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

export default function NavBar() {
  return (
    <nav className={`${cinzel.variable} ${jakarta.variable} fixed top-0 left-0 z-50 h-[80px] w-full bg-transparent backdrop-blur-md`}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo / Temple Name */}
        <a href="/" className="flex flex-col items-start">
          <h1
            className="text-xl font-bold tracking-wide text-amber-100 md:text-2xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Madan Mohan Mandir
          </h1>
          <span
            className="text-[10px] tracking-[0.3em] text-amber-300/80 md:text-xs"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            श्री मदन मोहन मंदिर
          </span>
        </a>

        {/* Navigation Links */}
        <ul
          className="hidden items-center gap-8 md:flex"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          <li>
            <a href="/" className="text-sm font-medium tracking-wide text-amber-50/90 transition-colors duration-300 hover:text-amber-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-sm font-medium tracking-wide text-amber-50/90 transition-colors duration-300 hover:text-amber-300">
              About
            </a>
          </li>
          <li>
            <a href="/darshan" className="text-sm font-medium tracking-wide text-amber-50/90 transition-colors duration-300 hover:text-amber-300">
              Darshan
            </a>
          </li>
          <li>
            <a href="/events" className="text-sm font-medium tracking-wide text-amber-50/90 transition-colors duration-300 hover:text-amber-300">
              Events
            </a>
          </li>
          <li>
            <a href="/gallery" className="text-sm font-medium tracking-wide text-amber-50/90 transition-colors duration-300 hover:text-amber-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="/contact" className="text-sm font-medium tracking-wide text-amber-50/90 transition-colors duration-300 hover:text-amber-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Donate Button */}
        <a
          href="/donate"
          className="rounded-full border border-amber-400/60 bg-amber-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-amber-200 backdrop-blur-sm transition-all duration-300 hover:bg-amber-400 hover:text-black md:px-6"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Donate
        </a>
      </div>
    </nav>
  );
}
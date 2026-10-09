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

/* ============================================================
   DATA
============================================================ */

const upcomingFestivals = [
  {
    name: "Sharad Purnima",
    tag: "Autumn Full Moon",
    date: "October 2026",
    lunar: "Ashwin Purnima",
    text: "The night of the autumn full moon, when Krishna performed the Rasa Lila with the gopis of Vrindavan. The temple stays open late with kirtan and a moonlit aarti.",
    image: "/gallery/festival-1.png",
    highlight: true,
  },
  {
    name: "Annakut & Govardhan Puja",
    tag: "The Mountain of Food",
    date: "November 2026",
    lunar: "Kartik Shukla Pratipada",
    text: "Hundreds of food offerings are arranged in a great mountain before the Lord, remembering Krishna lifting Govardhan hill to shelter the people of Braj.",
    image: "/events/govardhan.png",
  },
  {
    name: "Kartik Purnima",
    tag: "The Holiest Month Ends",
    date: "November 2026",
    lunar: "Kartik Purnima",
    text: "The closing of the sacred month of Kartik. Devotees gather for a full day of bathing, lamp offering and evening kirtan on the temple steps.",
    image: "/gallery/aarti-1.png",
  },
  {
    name: "Vaikuntha Ekadashi",
    tag: "The Gate to Heaven",
    date: "December 2026",
    lunar: "Margashirsha Shukla Ekadashi",
    text: "The day the gates of Vaikuntha are said to open. A special darshan is offered and devotees keep a fast and stay awake in kirtan through the night.",
    image: "/events/ekadashi.png",
  },
];

const calendar = [
  {
    month: "January",
    events: [
      { date: "14 Jan", name: "Makar Sankranti", note: "Sun enters Capricorn — special aarti" },
      { date: "26 Jan", name: "Republic Day Kirtan", note: "Morning bhajan & flag offering" },
    ],
  },
  {
    month: "February",
    events: [
      { date: "02 Feb", name: "Vasant Panchami", note: "Saraswati puja and yellow shringar" },
      { date: "12 Feb", name: "Magha Purnima", note: "Full-moon lamp offering" },
    ],
  },
  {
    month: "March",
    events: [
      { date: "04 Mar", name: "Holi", note: "Festival of colours — temple courtyard celebration" },
      { date: "26 Mar", name: "Ram Navami", note: "Birth of Lord Rama — day-long kirtan" },
    ],
  },
  {
    month: "April",
    events: [
      { date: "08 Apr", name: "Chaitra Navratri", note: "Nine nights of Devi bhajan" },
      { date: "16 Apr", name: "Ram Navami Aarti", note: "Special evening aarti" },
    ],
  },
  {
    month: "May",
    events: [
      { date: "10 May", name: "Akshaya Tritiya", note: "Auspicious day of eternal prosperity" },
      { date: "21 May", name: "Narasimha Jayanti", note: "Evening kirtan" },
    ],
  },
  {
    month: "June",
    events: [
      { date: "05 Jun", name: "Ganga Dussehra", note: "River offering ceremony" },
      { date: "28 Jun", name: "Snan Yatra", note: "The Lord's ceremonial bath" },
    ],
  },
  {
    month: "July",
    events: [
      { date: "10 Jul", name: "Guru Purnima", note: "Honouring the spiritual lineage" },
      { date: "16 Jul", name: "Rath Yatra", note: "Chariot procession through Boreya" },
    ],
  },
  {
    month: "August",
    events: [
      { date: "05 Aug", name: "Jhulan Yatra", note: "The Lord swings on a flower-decorated swing" },
      { date: "09 Aug", name: "Raksha Bandhan", note: "Sacred thread offering" },
    ],
  },
  {
    month: "September",
    events: [
      { date: "04 Sep", name: "Janmashtami", note: "Krishna's birth — night-long celebration" },
      { date: "16 Sep", name: "Radhashtami", note: "Appearance of Shri Radha" },
    ],
  },
  {
    month: "October",
    events: [
      { date: "25 Oct", name: "Sharad Purnima", note: "Rasa Lila night under the full moon" },
      { date: "29 Oct", name: "Karwa Chauth", note: "Evening aarti for married couples" },
    ],
  },
  {
    month: "November",
    events: [
      { date: "08 Nov", name: "Annakut", note: "The great mountain of food offering" },
      { date: "09 Nov", name: "Govardhan Puja", note: "Remembrance of the lifting of the hill" },
      { date: "11 Nov", name: "Bhai Dooj", note: "Sisters offer prayers for brothers" },
    ],
  },
  {
    month: "December",
    events: [
      { date: "20 Dec", name: "Vaikuntha Ekadashi", note: "Night-long kirtan and fast" },
      { date: "30 Dec", name: "Gita Jayanti", note: "Reading of the Bhagavad Gita" },
    ],
  },
];

const weeklySchedule = [
  {
    day: "Every Morning",
    name: "Mangala Aarti & Shringar",
    time: "5:00 AM — 7:00 AM",
    text: "The Lord is awakened and adorned. Devotees may join the early darshan.",
  },
  {
    day: "Every Evening",
    name: "Sandhya Aarti & Kirtan",
    time: "6:30 PM — 7:30 PM",
    text: "The evening lamp offering followed by bhajan and kirtan in the temple hall.",
  },
  {
    day: "Every Saturday",
    name: "Bhajan Sandhya",
    time: "7:00 PM — 8:30 PM",
    text: "An extended evening of devotional singing open to all — visiting singers and local devotees.",
  },
  {
    day: "Every Ekadashi",
    name: "Ekadashi Vrat & Kirtan",
    time: "All Day",
    text: "A day of fasting and remembrance. The temple stays open late for night kirtan.",
  },
  {
    day: "Every Purnima",
    name: "Full Moon Lamp Offering",
    time: "6:30 PM",
    text: "On every full moon night, devotees offer ghee lamps on the temple steps.",
  },
  {
    day: "Every Amavasya",
    name: "New Moon Prayer",
    time: "6:30 PM",
    text: "A quiet evening of prayer and remembrance for ancestors and loved ones.",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function EventsPage() {
  return (
    <main className={`${cinzel.variable} ${jakarta.variable} w-full`}>
      {/* ============================================================
          SECTION 1 — HERO
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28 max-sm:pt-30">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px),
              linear-gradient(45deg, transparent 48%, #C2A95B 49%, #C2A95B 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, #C2A95B 49%, #C2A95B 51%, transparent 52%)
            `,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#800000]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Celebrations at Boreya
            </p>

            <h1
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Festivals &amp; <span className="text-[#C2A95B]">Events</span>
            </h1>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              For over three centuries, the Madan Mohan Mandir has kept time
              not by the calendar of the world, but by the rhythm of devotion —
              the songs, lamps and offerings that mark the year.
            </p>
          </div>

          {/* ---------- Featured image ---------- */}
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C2A95B]/30" />
            <div className="absolute -inset-6 rounded-[2.5rem] border border-[#C2A95B]/10" />

            <div className="relative h-[320px] w-full overflow-hidden rounded-[1.75rem] bg-[#800000] md:h-[460px]">
              <Image
                src="/gallery/festival-1.png"
                alt="Festival celebration at Madan Mohan Temple"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-center md:p-10">
                <p
                  className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#C2A95B] md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  A Living Calendar of Devotion
                </p>
                <h2
                  className="text-2xl font-bold text-white md:text-4xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  The Year in Celebration
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — UPCOMING FESTIVALS
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E7] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 text-center">
              <p
                className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Coming Soon
              </p>

              <h2
                className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Upcoming <span className="text-[#C2A95B]">Festivals</span>
              </h2>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-[#C2A95B]" />
                <span className="text-[#C2A95B]">✦</span>
                <span className="h-px w-12 bg-[#C2A95B]" />
              </div>

              <p
                className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The four great celebrations of the coming season. Dates follow
                the Hindu lunar calendar and may shift by a day or two — please
                confirm with the temple before travelling.
              </p>
            </div>
          </div>

          {/* MOBILE: horizontal snap scroll with smaller cards */}
          <div className="md:hidden">
            <div
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {upcomingFestivals.map((festival) => (
                <div
                  key={festival.name}
                  className={`group relative h-[340px] w-[72vw] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-xl border shadow-sm ${
                    festival.highlight
                      ? "border-[#C2A95B]"
                      : "border-[#C2A95B]/30"
                  }`}
                >
                  <Image
                    src={festival.image}
                    alt={festival.name}
                    fill
                    sizes="72vw"
                    className="object-cover"
                  />

                  {/* Base dark gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Top badges */}
                  <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
                    <span
                      className="rounded-full border border-[#C2A95B]/60 bg-black/40 px-2 py-[3px] text-[7px] uppercase tracking-[0.15em] text-[#C2A95B] backdrop-blur-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {festival.tag}
                    </span>

                    {festival.highlight && (
                      <span
                        className="rounded-full bg-[#C2A95B] px-2 py-[3px] text-[7px] font-bold uppercase tracking-[0.15em] text-[#800000]"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span
                        className="text-[8px] uppercase tracking-[0.2em] text-[#C2A95B]"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {festival.date}
                      </span>
                      <span className="h-2.5 w-px bg-[#C2A95B]/50" />
                      <span
                        className="text-[8px] uppercase tracking-[0.2em] text-white/60"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {festival.lunar}
                      </span>
                    </div>

                    <div className="mb-2 h-px w-8 bg-[#C2A95B]" />

                    <h3
                      className="mb-2 text-base font-bold leading-tight text-white"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {festival.name}
                    </h3>

                    <p
                      className="text-[10px] leading-snug text-white/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {festival.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="mt-1 flex items-center justify-center gap-2 px-6">
              <span
                className="text-[9px] uppercase tracking-[0.25em] text-[#C2A95B]/80"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Swipe →
              </span>
            </div>
          </div>

          {/* DESKTOP: 2-col grid (unchanged) */}
          <div className="mx-auto hidden max-w-7xl px-10 md:grid md:grid-cols-2 md:gap-6">
            {upcomingFestivals.map((festival) => (
              <div
                key={festival.name}
                className={`group relative h-[480px] overflow-hidden rounded-2xl border shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
                  festival.highlight
                    ? "border-[#C2A95B]"
                    : "border-[#C2A95B]/30 hover:border-[#C2A95B]"
                }`}
              >
                <Image
                  src={festival.image}
                  alt={festival.name}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/85 via-[#800000]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-3">
                  <span
                    className="rounded-full border border-[#C2A95B]/60 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#C2A95B] backdrop-blur-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {festival.tag}
                  </span>

                  {festival.highlight && (
                    <span
                      className="rounded-full bg-[#C2A95B] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#800000]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className="text-xs uppercase tracking-[0.3em] text-[#C2A95B]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {festival.date}
                    </span>
                    <span className="h-3 w-px bg-[#C2A95B]/50" />
                    <span
                      className="text-xs uppercase tracking-[0.3em] text-white/60"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {festival.lunar}
                    </span>
                  </div>

                  <div className="mb-4 h-px w-12 bg-[#C2A95B] transition-all duration-500 group-hover:w-20" />

                  <h3
                    className="mb-3 text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {festival.name}
                  </h3>

                  <p
                    className="text-sm leading-relaxed text-white/80"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {festival.text}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#C2A95B]/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — ANNUAL CALENDAR (2-col on mobile)
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C2A95B]/20 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Through the Year
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#FFF8E7] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Annual <span className="text-[#C2A95B]">Calendar</span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The temple follows the traditional Hindu lunar calendar. Below
              are the major observances of each month with their dates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {calendar.map((month, i) => (
              <div
                key={month.month}
                className="group rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] sm:rounded-2xl sm:p-5 md:p-6"
              >
                <div className="mb-3 flex items-center justify-between gap-2 sm:mb-5">
                  <h3
                    className="text-sm font-bold leading-tight text-[#FFF8E7] sm:text-lg md:text-2xl"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {month.month}
                  </h3>
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C2A95B]/50 text-[9px] font-bold text-[#C2A95B] sm:h-8 sm:w-8 sm:text-xs md:h-9 md:w-9 md:text-sm"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="h-px w-full bg-[#C2A95B]/20" />

                <ul className="mt-3 space-y-3 sm:mt-5 sm:space-y-4">
                  {month.events.map((event) => (
                    <li key={event.name}>
                      <div className="mb-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span
                          className="inline-flex shrink-0 items-center rounded-md border border-[#C2A95B]/40 bg-[#C2A95B]/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.05em] text-[#C2A95B] sm:px-2 sm:text-[10px] sm:tracking-[0.1em] md:text-[11px]"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          {event.date}
                        </span>
                      </div>
                      <p
                        className="text-[11px] font-bold leading-tight text-[#FFF8E7] sm:text-sm"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {event.name}
                      </p>
                      <p
                        className="mt-0.5 text-[9px] leading-snug text-[#FFF8E7]/60 sm:text-[11px] md:text-xs"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {event.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            className="mx-auto mt-10 max-w-2xl text-center text-xs text-[#FFF8E7]/50 md:text-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            * Festival dates follow the lunar calendar and shift each year.
            Please contact the temple for confirmed dates and timings.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — WEEKLY SCHEDULE (2-col on mobile)
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px),
              linear-gradient(45deg, transparent 48%, #C2A95B 49%, #C2A95B 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, #C2A95B 49%, #C2A95B 51%, transparent 52%)
            `,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              A Living Rhythm
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Regular <span className="text-[#C2A95B]">Satsang</span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Beyond the great festivals, the temple keeps a weekly rhythm of
              prayer and song that anyone may join.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {weeklySchedule.map((item) => (
              <div
                key={item.name}
                className="group rounded-xl border border-[#C2A95B]/30 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-lg sm:rounded-2xl sm:p-5 md:p-7"
              >
                <p
                  className="mb-1.5 text-[8px] uppercase tracking-[0.2em] text-[#C2A95B] sm:mb-2 sm:text-[10px] sm:tracking-[0.3em] md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.day}
                </p>

                <h3
                  className="mb-2 text-[13px] font-bold leading-snug text-[#800000] sm:mb-3 sm:text-base md:text-xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {item.name}
                </h3>

                <div className="mb-2 flex items-center gap-1.5 sm:mb-3 sm:gap-2">
                  <span className="text-[10px] text-[#C2A95B] sm:text-xs md:text-base">
                    ✦
                  </span>
                  <span
                    className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#800000]/70 sm:text-[10px] sm:tracking-[0.15em] md:text-xs"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.time}
                  </span>
                </div>

                <div className="mb-2.5 h-px w-8 bg-[#C2A95B]/50 transition-all duration-300 group-hover:w-14 sm:mb-4 sm:w-12 sm:group-hover:w-20" />

                <p
                  className="text-[10px] leading-snug text-[#800000]/70 sm:text-xs sm:leading-relaxed md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — CTA / CLOSING
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2A95B]/15 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
          <span className="text-lg text-[#C2A95B]">✦</span>

          <h2
            className="mt-6 text-2xl font-bold leading-tight text-[#FFF8E7] md:text-4xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Join Us at a{" "}
            <span className="text-[#C2A95B]">Celebration</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Whether you come for the great festivals or the quiet evening
            aarti, you are always welcome at the Madan Mohan Mandir. To offer
            seva, receive updates, or ask about a specific festival, please
            write to us.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:madanmohanmandir1665@gmail.com"
              className="rounded-full bg-[#C2A95B] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#800000] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4bc74] hover:shadow-lg md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Contact for Seva
            </a>

            <a
              href="/darshan"
              className="rounded-full border border-[#C2A95B] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#FFF8E7] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C2A95B] hover:text-[#800000] md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Plan a Darshan
            </a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#C2A95B]/40" />
            <span className="text-[#C2A95B]">✦</span>
            <span className="h-px w-16 bg-[#C2A95B]/40" />
          </div>
        </div>
      </section>
    </main>
  );
}
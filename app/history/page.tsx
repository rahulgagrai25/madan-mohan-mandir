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

const heroFacts = [
  { value: "1665", label: "Foundation Laid" },
  { value: "1682", label: "Completed" },
  { value: "17", label: "Years of Building" },
  { value: "₹14,001", label: "Recorded Cost" },
];

const keyFigures = [
  {
    role: "The Patron",
    name: "Pandit Lakshmi Narayan Tiwari",
    text: "Traditionally associated with the construction of the temple. He took the initiative to build the Madan Mohan Mandir at Boreya.",
  },
  {
    role: "The Ruler",
    name: "Raja Raghunath Shah",
    text: "The Nagvanshi ruler during whose period the temple was built. Historical accounts state that he was present when the foundation was laid.",
  },
  {
    role: "The Dynasty",
    name: "The Nagvanshi Line",
    text: "A ruling house with a long association with the Chotanagpur region, linking the temple to the political history of the 17th century.",
  },
];

const timeline = [
  {
    year: "1665",
    tag: "The Beginning",
    title: "The Foundation Is Laid",
    text: "In 1665 the foundation of the main temple was laid at Boreya. This marked the official beginning of the construction — and the starting point of the temple's recorded history.",
  },
  {
    year: "1668",
    tag: "The Complex Grows",
    title: "Boundary Wall & Entrance Gate",
    text: "Three years later, work on the boundary wall and the entrance gate was begun. The addition created a defined space around the temple and formed an important part of the overall complex.",
  },
  {
    year: "1682",
    tag: "After 17 Years",
    title: "The Temple Is Completed",
    text: "After years of sustained effort, the temple was finally completed in 1682. From the laying of the foundation to completion, the work had taken approximately seventeen years.",
  },
];

const laterHistory = [
  {
    date: "5 September 1953",
    title: "The Ashtadhatu Idol Theft",
    text: "On 5 September 1953, the Ashtadhatu idol of Lord Krishna was reported to have been stolen from the temple. The original idol was made of Ashtadhatu — a traditional combination of eight metals used for religious idols.",
    note: "A brass idol was installed in its place.",
  },
  {
    date: "In Later Years",
    title: "The Loss of the Radha Idol",
    text: "The Ashtadhatu idol associated with Radha was also stolen at a later time. These incidents resulted in changes to the original idols that had been associated with the temple.",
    note: "Another brass idol was installed.",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function HistoryPage() {
  return (
    <main className={`${cinzel.variable} ${jakarta.variable} w-full`}>
      {/* ============================================================
          SECTION 1 — HERO
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28 max-sm:pt-30">
        {/* Mandala dot pattern */}
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

        {/* Soft golden glows */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#800000]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Boreya · Chotanagpur · Since 1665
            </p>

            <h1
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The History of{" "}
              <span className="text-[#C2A95B]">Madan Mohan</span>
            </h1>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-6 max-w-3xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The history of Madan Mohan Temple at Boreya reaches back to the
              17th century — a period of important political and cultural
              development in the Chotanagpur region. Its story is closely
              connected with the Nagvanshi dynasty, Raja Raghunath Shah, and
              Pandit Lakshmi Narayan Tiwari, who is traditionally associated
              with the construction of the temple.
            </p>
          </div>

          {/* ---------- Fact strip ---------- */}
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#C2A95B]/25 bg-[#C2A95B]/25 md:grid-cols-4">
            {heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-white px-5 py-6 text-center md:py-7"
              >
                <p
                  className="text-xl font-bold text-[#800000] md:text-2xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {fact.value}
                </p>
                <p
                  className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#800000]/60 md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — 01 · THE BEGINNING OF THE TEMPLE
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* ---------- Heading ---------- */}
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C2A95B]" />
              <span
                className="text-[10px] uppercase tracking-[0.4em] text-[#C2A95B] md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                01 — The Beginning
              </span>
              <span className="h-px w-10 bg-[#C2A95B]" />
            </div>

            <h2
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Foundation at{" "}
              <span className="text-[#C2A95B]">Boreya</span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>
          </div>

          {/* ---------- Story grid ---------- */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="order-1">
              <p
                className="mb-5 text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The story begins in{" "}
                <span className="font-medium text-[#C2A95B]">1665</span>, when
                the foundation of the temple was laid at Boreya. According to
                the historical records associated with the temple,{" "}
                <span className="font-medium text-[#C2A95B]">
                  Pandit Lakshmi Narayan Tiwari
                </span>{" "}
                took the initiative to construct it.
              </p>

              <p
                className="mb-5 text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The construction took place during the period of{" "}
                <span className="font-medium text-[#C2A95B]">
                  Raja Raghunath Shah
                </span>
                , a ruler of the Nagvanshi dynasty, which had a long
                association with the Chotanagpur region. Historical accounts
                state that the Raja was present when the foundation was laid —
                connecting the beginning of the construction with the ruling
                house of that period.
              </p>

              <p
                className="text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The year 1665 is particularly important because it marks the
                starting point of the temple&apos;s recorded history. What
                began as a foundation project would take many years to
                complete.
              </p>

              {/* 17th century note */}
              <div className="mt-8 rounded-2xl border border-[#C2A95B]/30 bg-white/70 p-5 backdrop-blur-sm md:p-6">
                <p
                  className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#C2A95B] md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  A Beginning in the 17th Century
                </p>
                <p
                  className="text-xs leading-relaxed text-[#800000]/75 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  The 17th century was a period when religious and cultural
                  traditions were developing across the region. The
                  construction of the temple at Boreya became part of this
                  wider historical setting, forming an important link between
                  the temple and the political and social history of
                  17th-century Chotanagpur.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-2">
              {/* <div className="absolute -inset-3 rounded-[2rem] border border-[#C2A95B]/30" />
              <div className="absolute -inset-6 rounded-[2.5rem] border border-[#C2A95B]/10" /> */}

              <div className="relative h-[420px] w-full overflow-hidden  md:h-[540px]">
                <Image
                  src="/images/history/blueprint.png"
                  alt="Boreya Madan Mohan Mandir"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 " />

                <div className="absolute top  -0 left-0 right-0 p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#C2A95B]" />
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] text-[#C2A95B] md:text-xs bg-[#800000]/80 p-2"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Boreya · 1665 CE
                    </span>
                  </div>
                  {/* <h3
                    className="text-2xl font-bold text-[#8000]] md:text-3xl text-shadow-2xs"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Where It All Began
                  </h3> */}
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Key figures ---------- */}
          <div className="mt-24">
            <div className="mb-10 text-center">
              <h3
                className="text-xl font-bold text-[#800000] md:text-3xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                The People Behind the{" "}
                <span className="text-[#C2A95B]">Temple</span>
              </h3>
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]" />
                <span className="text-[#C2A95B]">✦</span>
                <span className="h-px w-10 bg-[#C2A95B]" />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {keyFigures.map((figure) => (
                <div
                  key={figure.name}
                  className="group rounded-2xl border border-[#C2A95B]/30 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-lg md:p-7"
                >
                  <p
                    className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#C2A95B] md:text-xs"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {figure.role}
                  </p>

                  <h4
                    className="mb-3 text-lg font-bold leading-snug text-[#800000] md:text-xl"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {figure.name}
                  </h4>

                  <div className="mb-3 h-px w-12 bg-[#C2A95B]/50 transition-all duration-300 group-hover:w-20" />

                  <p
                    className="text-xs leading-relaxed text-[#800000]/70 md:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {figure.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — 02 · THE LONG CONSTRUCTION JOURNEY
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-20 md:py-28">
        {/* Golden dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Soft golden glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C2A95B]/20 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* ---------- Heading ---------- */}
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C2A95B]" />
              <span
                className="text-[10px] uppercase tracking-[0.4em] text-[#C2A95B] md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                02 — The Construction Journey
              </span>
              <span className="h-px w-10 bg-[#C2A95B]" />
            </div>

            <h2
              className="text-3xl font-bold leading-tight text-[#FFF8E7] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Seventeen Years of{" "}
              <span className="text-[#C2A95B]">Devotion</span>
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
              The construction of the temple was a long process rather than a
              single event. Work continued for approximately seventeen years,
              with different parts of the temple complex being developed over
              time.
            </p>
          </div>

          {/* ---------- Timeline ---------- */}
          <div className="relative mx-auto max-w-5xl">
            {/* Vertical line */}
            <span className="pointer-events-none absolute bottom-3 left-[19px] top-3 w-px bg-gradient-to-b from-[#C2A95B]/70 via-[#C2A95B]/35 to-[#C2A95B]/5 md:left-1/2 md:-translate-x-1/2" />

            <div>
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className="relative md:grid md:grid-cols-2 md:gap-14 md:pb-16 md:last:pb-0"
                >
                  {/* Node */}
                  <span className="absolute left-[19px] top-4 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#C2A95B] ring-4 ring-[#800000] md:left-1/2" />

                  {/* Card */}
                  <div
                    className={`relative pb-10 pl-12 md:pb-0 md:pl-0 ${
                      i % 2 === 0
                        ? "md:col-start-1 md:pr-14 md:text-right"
                        : "md:col-start-2 md:pl-14"
                    }`}
                  >
                    <div className="group rounded-2xl border border-[#C2A95B]/25 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#C2A95B] md:p-7">
                      <div
                        className={`mb-3 flex flex-wrap items-center gap-3 ${
                          i % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span
                          className="text-2xl font-bold text-[#C2A95B] md:text-3xl"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          {item.year}
                        </span>
                        <span
                          className="rounded-full border border-[#C2A95B]/40 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#C2A95B] md:text-[10px]"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <h3
                        className="mb-3 text-lg font-bold text-[#FFF8E7] md:text-2xl"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-xs leading-relaxed text-[#FFF8E7]/70 md:text-sm"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Recorded cost ---------- */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-[#C2A95B]/40 bg-[#C2A95B]/10 p-6 text-center backdrop-blur-sm md:mt-20 md:p-10">
            <p
              className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[#C2A95B] md:text-xs"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The Recorded Cost
            </p>

            <p
              className="text-4xl font-bold text-[#FFF8E7] md:text-6xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              ₹14,001
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C2A95B]/50" />
              <span className="text-xs text-[#C2A95B]">✦</span>
              <span className="h-px w-10 bg-[#C2A95B]/50" />
            </div>

            <p
              className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-[#FFF8E7]/70 md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The historical inscription associated with the temple records the
              construction cost as ₹14,001. Although the amount may appear
              small when compared with modern currency, money had a very
              different value in the 17th century. The figure is important
              because it gives us a rare record of the estimated expenditure
              connected with the construction.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — 03 · LATER HISTORY
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
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* ---------- Heading ---------- */}
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C2A95B]" />
              <span
                className="text-[10px] uppercase tracking-[0.4em] text-[#C2A95B] md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                03 — Later History
              </span>
              <span className="h-px w-10 bg-[#C2A95B]" />
            </div>

            <h2
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              After <span className="text-[#C2A95B]">1682</span>
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
              After the completion of construction in 1682, the temple
              continued through successive generations. Over the centuries it
              became part of the continuing history of Boreya — its story did
              not end with the completion of the building.
            </p>
          </div>

          {/* ---------- Later events ---------- */}
          <div className="grid gap-6 md:grid-cols-2">
            {laterHistory.map((event) => (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-2xl border border-[#C2A95B]/30 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl md:p-8"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C2A95B]/50 text-sm text-[#C2A95B]">
                    ✦
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.25em] text-[#C2A95B] md:text-xs"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {event.date}
                  </span>
                </div>

                <h3
                  className="mb-3 text-xl font-bold leading-snug text-[#800000] md:text-2xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {event.title}
                </h3>

                <div className="mb-4 h-px w-12 bg-[#C2A95B] transition-all duration-500 group-hover:w-20" />

                <p
                  className="text-xs leading-relaxed text-[#800000]/75 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {event.text}
                </p>

                <div className="mt-5 rounded-xl border border-[#C2A95B]/25 bg-[#C2A95B]/10 px-4 py-3">
                  <p
                    className="text-[11px] leading-relaxed text-[#800000]/80 md:text-xs"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {event.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- Through generations ---------- */}
          {/* <div className="mt-16 rounded-2xl border border-[#C2A95B]/30 bg-[#FFF8E7] p-6 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p
                className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[#C2A95B] md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                History Through Generations
              </p>

              <h3
                className="mb-5 text-xl font-bold text-[#800000] md:text-3xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                The Story Continues
              </h3>

              <p
                className="text-xs leading-relaxed text-[#800000]/75 md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The centuries following the temple&apos;s construction brought
                many changes, but the historical story of the site continued to
                be passed from one generation to another. The dates recorded in
                the historical inscription, the connection with the Nagvanshi
                period, the long construction process, and the events recorded
                in the 20th century together form an important timeline of its
                past.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — CLOSING
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-16 md:py-24">
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

          <p
            className="mx-auto mt-6 text-base font-light leading-relaxed text-[#FFF8E7]/90 md:text-2xl md:leading-relaxed"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            From the laying of its foundation in{" "}
            <span className="text-[#C2A95B]">1665</span> to its completion in{" "}
            <span className="text-[#C2A95B]">1682</span>, and through the
            significant events of its later history, the story of Madan Mohan
            Temple reflects more than three centuries of recorded history at
            Boreya.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#C2A95B]/40" />
            <span className="text-[#C2A95B]">✦</span>
            <span className="h-px w-16 bg-[#C2A95B]/40" />
          </div>
        </div>
      </section>
    </main>
  );
}
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

const threeForms = [
  {
    
    title: "The Yogi",
    subtitle: "Dharmatma · Gyan Roop",
    text: "The wise teacher and philosopher. This form reaches its peak in the Bhagavad Gita, where Krishna guides Arjuna on the path of duty and knowledge.",
    image: "/images/about/yogi.png",
  },
  {
    
    title: "The Beloved",
    subtitle: "Lalit · Madhur · Madan Mohan",
    text: "The playful, sweet and enchanting Krishna of Vrindavan. This form shines in the Shrimad Bhagavat, Padma Purana and Brahmavaivarta Purana — the face of love and longing.",
    image: "/images/about/beloved.png",
  },
  {
   
    title: "The Statesman",
    subtitle: "Rajanitik · Karma Roop",
    text: "The king, diplomat and guide of the Mahabharata. This form represents action, duty and the ordering of the world.",
    image: "/images/about/statesman.png",
  },
];

const fiveTemples = [
  {
    place: "Melok",
    region: "Near Samta, West Bengal",
    builder: "Mukand Prasad Raichaudhuri (Pahalwan)",
    year: "1651 CE",
  },
  {
    place: "Boreya",
    region: "Kanke, Ranchi, Jharkhand",
    builder: "Lakshmi Narayan Tiwari",
    year: "1665 CE",
    highlight: true,
  },
  {
    place: "Vishnupur",
    region: "Bankura, West Bengal",
    builder: "Raja Durjan Malldev",
    year: "1694 CE",
  },
  {
    place: "Vrindavan",
    region: "Mathura, Uttar Pradesh",
    builder: "Maharaja Vajranabh",
    year: "1819 CE",
  },
  {
    place: "Kuch Bihar",
    region: "West Bengal",
    builder: "Maharaja Nripendra Narayan",
    year: "1885–1889 CE",
  },
];

const chotanagpurTemples = [
  {
    name: "Madan Mohan",
    place: "Boreya",
    year: "1665 CE",
    text: "The sweet, enchanting form of Krishna — the abode of love and devotion.",
  },
  {
    name: "Radhavallabh",
    place: "Chutiya",
    year: "1685 CE",
    text: "Established with the support of Raja Raghunath Shah in the ancestral fort.",
  },
  {
    name: "Jagannath",
    place: "Jagannathpur",
    year: "1691 CE",
    text: "Built by Thakur Ani Shah on a 250 ft hill, 10 km south of Ranchi.",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function AboutPage() {
  return (
    <main className={`${cinzel.variable} ${jakarta.variable} w-full`}>
      {/* ============================================================
          SECTION 1 — THE NAME & THE DIVINE FORM
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
          {/* ---------- Heading ---------- */}
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              About the Temple
            </p>

            <h1
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Name —{" "}
              <span className="text-[#C2A95B]">Madan Mohan</span>
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
              Madan Mohan is one of the most beloved names of Lord Krishna — a
              name that speaks of beauty, love and the power to enchant every
              heart.
            </p>
          </div>

          {/* ---------- Meaning grid ---------- */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#C2A95B]/30" />
              <div className="absolute -inset-6 rounded-[2.5rem] border border-[#C2A95B]/10" />

              <div className="relative h-[420px] w-full overflow-hidden rounded-[1.75rem] bg-[#800000] md:h-[520px]">
                <Image
                  src="/images/g2.jpg"
                  alt="Madan Mohan Shringar"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#C2A95B]" />
                    <span
                      className="text-xs uppercase tracking-[0.3em] text-[#C2A95B]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      The Divine Form
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-white md:text-3xl"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Madan Mohan
                  </h3>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p
                className="mb-6 text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The name{" "}
                <span className="font-medium text-[#C2A95B]">
                  Madan Mohan
                </span>{" "}
                is made of two beautiful words. Together they describe Krishna
                as the one whose charm is so great that even the god of love is
                moved by it.
              </p>

              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#C2A95B]/25 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <p
                    className="mb-1 text-lg font-bold text-[#800000]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    मदन · Madan
                  </p>
                  <p
                    className="text-xs leading-relaxed text-[#800000]/70 md:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Kamadeva — the god of love and desire.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#C2A95B]/25 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <p
                    className="mb-1 text-lg font-bold text-[#800000]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    मोहन · Mohan
                  </p>
                  <p
                    className="text-xs leading-relaxed text-[#800000]/70 md:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    The one who enchants, delights and captivates.
                  </p>
                </div>
              </div>

              <p
                className="text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                So{" "}
                <span className="font-medium text-[#C2A95B]">
                  Madan Mohan
                </span>{" "}
                means the Lord who enchants even Kamadeva himself. He is also
                revered as{" "}
                <span className="font-medium text-[#C2A95B]">Pradumna</span>,
                the father of Kamadeva — the very source of love in the
                universe.
              </p>
            </div>
          </div>

          {/* ---------- Three forms ---------- */}
          <div className="mt-24">
            <div className="mb-10 text-center">
              <h2
                className="text-2xl font-bold text-[#800000] md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Three Forms of{" "}
                <span className="text-[#C2A95B]">Krishna</span>
              </h2>
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]" />
                <span className="text-[#C2A95B]">✦</span>
                <span className="h-px w-10 bg-[#C2A95B]" />
              </div>
              <p
                className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Across the scriptures, Krishna appears in three great forms.
                Poets and saints, however, chose only one — the sweet, loving
                Madan Mohan — as the heart of their songs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {threeForms.map((form) => (
                <div
                  key={form.title}
                  className="group relative h-[460px] overflow-hidden rounded-2xl border border-[#C2A95B]/30 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C2A95B] hover:shadow-xl md:h-[520px]"
                >
                  {/* Background image */}
                  <Image
                    src={form.image}
                    alt={form.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />

                  {/* Base dark gradient so text is always readable */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  {/* Maroon + gold wash on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-[#800000]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content pinned to bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    {/* Gold divider */}
                    <div className="mb-4 h-px w-12 bg-[#C2A95B] transition-all duration-500 group-hover:w-20" />

                    <p
                      className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#C2A95B] md:text-xs"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {form.subtitle}
                    </p>

                    <h3
                      className="mb-3 text-2xl font-bold text-white md:text-3xl"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {form.title}
                    </h3>

                    <p
                      className="text-xs leading-relaxed text-white/80 md:text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {form.text}
                    </p>
                  </div>

                  {/* Gold inner ring on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#C2A95B]/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — THE TEMPLE, THE ERA & THE LIVING TRADITION
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
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The Temple &amp; Its Time
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#FFF8E7] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              A Sacred{" "}
              <span className="text-[#C2A95B]">Heritage</span>
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
              In the heart of Mughal India, when Aurangzeb sat on the throne of
              Delhi, three Krishna temples quietly rose in Chotanagpur. Boreya
              was one of them — a lamp of devotion that has never gone out.
            </p>
          </div>

          {/* ---------- Five temples ---------- */}
          <div className="mb-24">
            <div className="mb-8 flex flex-col items-center gap-3 text-center">
              <h3
                className="text-xl font-bold text-[#FFF8E7] md:text-3xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                The Five{" "}
                <span className="text-[#C2A95B]">Madan Mohan Temples</span>{" "}
                of India
              </h3>
              <p
                className="max-w-2xl text-xs font-light leading-relaxed text-[#FFF8E7]/60 md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                While Radha–Krishna temples are found across India, the name
                "Madan Mohan" is rare. Only five temples are known to carry
                this sacred name.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {fiveTemples.map((temple, i) => (
                <div
                  key={temple.place}
                  className={`group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:p-6 ${
                    temple.highlight
                      ? "border-[#C2A95B] bg-[#C2A95B]/15"
                      : "border-[#C2A95B]/25 bg-white/[0.04] hover:border-[#C2A95B]"
                  }`}
                >
                  {/* Number */}
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C2A95B]/50 text-xs font-bold text-[#C2A95B] md:text-sm"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-[0.25em] text-[#C2A95B] md:text-xs"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {temple.year}
                    </span>
                  </div>

                  <h4
                    className="mb-1 text-lg font-bold text-[#FFF8E7] md:text-xl"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {temple.place}
                  </h4>

                  <p
                    className="mb-3 text-[11px] leading-relaxed text-[#FFF8E7]/70 md:text-xs"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {temple.region}
                  </p>

                  <div className="h-px w-full bg-[#C2A95B]/20" />

                  <p
                    className="mt-3 text-[11px] leading-relaxed text-[#FFF8E7]/60 md:text-xs"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Built by{" "}
                    <span className="text-[#FFF8E7]/90">
                      {temple.builder}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Boreya story ---------- */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]" />
                <span
                  className="text-[10px] uppercase tracking-[0.3em] text-[#C2A95B]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Boreya · 1665 CE
                </span>
              </div>

              <h3
                className="mb-5 text-2xl font-bold leading-tight text-[#FFF8E7] md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                A Temple Born in{" "}
                <span className="text-[#C2A95B]">Troubled Times</span>
              </h3>

              <p
                className="mb-4 text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                The years 1200–1857 CE were among the most difficult in Indian
                history. After the fall of Hindu power in the north, the
                Mughal rule spread across the land. Under Aurangzeb, temples
                were at risk and devotion had to be practised quietly.
              </p>

              <p
                className="mb-4 text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                It was in this very era that{" "}
                <span className="font-medium text-[#C2A95B]">
                  Lakshmi Narayan Tiwari
                </span>{" "}
                built the Madan Mohan Mandir at Boreya in 1665 CE. He did not
                build it for fame. He built it as a quiet act of faith — a
                centre where people could come together and remember their
                eternal values.
              </p>

              <p
                className="text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                This was the age of the Bhakti movement. Through devotion,
                saints and householders alike kept alive the spirit of love,
                dignity and community. The Boreya temple became one such
                living centre — and it still is.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#C2A95B]/30" />
              <div className="absolute -inset-6 rounded-[2.5rem] border border-[#C2A95B]/10" />

              <div className="relative h-[420px] w-full overflow-hidden rounded-[1.75rem] bg-[#660000] md:h-[560px]">
                <Image
                  src="/gallery/temple-1.png"
                  alt="Boreya Madan Mohan Mandir"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/85 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p
                    className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#C2A95B]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Since 1665 CE
                  </p>
                  <h4
                    className="text-xl font-bold text-white md:text-2xl"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    360+ Years of Devotion
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Three Chotanagpur temples ---------- */}
          <div className="mt-24">
            <div className="mb-10 text-center">
              <h3
                className="text-xl font-bold text-[#FFF8E7] md:text-3xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Three Krishna Temples of{" "}
                <span className="text-[#C2A95B]">Chotanagpur</span>
              </h3>
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]" />
                <span className="text-[#C2A95B]">✦</span>
                <span className="h-px w-10 bg-[#C2A95B]" />
              </div>
              <p
                className="mx-auto mt-5 max-w-2xl text-xs font-light leading-relaxed text-[#FFF8E7]/60 md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Within a span of only 26 years, three great Krishna temples
                rose near Ranchi — each in a different divine form.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {chotanagpurTemples.map((t) => (
                <div
                  key={t.name}
                  className="group rounded-2xl border border-[#C2A95B]/25 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B]"
                >
                  <p
                    className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[#C2A95B]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {t.place} · {t.year}
                  </p>

                  <h4
                    className="mb-3 text-xl font-bold text-[#FFF8E7] md:text-2xl"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {t.name}
                  </h4>

                  <div className="mb-3 h-px w-12 bg-[#C2A95B]/50 transition-all duration-300 group-hover:w-20" />

                  <p
                    className="text-xs leading-relaxed text-[#FFF8E7]/70 md:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Bottom decoration ---------- */}
          <div className="mt-20 flex items-center justify-center gap-3">
            <span className="h-px w-20 bg-[#C2A95B]/30" />
            <span className="text-sm text-[#C2A95B]">✦</span>
            <span className="h-px w-20 bg-[#C2A95B]/30" />
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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

type Category =
  | "All"
  | "Temple"
  | "Deity"
  | "Festivals"
  | "Architecture"
  | "Aarti";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, "All">;
  tall?: boolean;
};

const categories: Category[] = [
  "All",
  "Temple",
  "Deity",
  "Festivals",
  "Architecture",
  "Aarti",
];

const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/temple-1.png",
    alt: "Madan Mohan Temple exterior",
    caption: "The temple facade at golden hour",
    category: "Temple",
    tall: true,
  },
  {
    src: "/events/ekadashi.png",
    alt: "Shri Madan Mohan deity",
    caption: "Shri Madan Mohan — the enchanting form",
    category: "Deity",
  },
  {
    src: "/gallery/temple-2.png",
    alt: "Temple courtyard",
    caption: "The quiet courtyard within the boundary wall",
    category: "Architecture",
  },
  {
    src: "/gallery/aarti-1.png",
    alt: "Evening aarti",
    caption: "Sandhya Aarti — the evening lamp offering",
    category: "Aarti",
    tall: true,
  },
  {
    src: "/gallery/festival-1.png",
    alt: "Janmashtami celebration",
    caption: "Janmashtami — the celebration of Krishna's birth",
    category: "Festivals",
  },
  {
    src: "/gallery/deity-1.png",
    alt: "Temple shikhara",
    caption: "The shikhara rising above Boreya",
    category: "Architecture",
  },
  {
    src: "/images/10.png",
    alt: "Radha Krishna shrine",
    caption: "Radha and Krishna together in the sanctum",
    category: "Deity",
  },
  {
    src: "/events/radhashtami.png",
    alt: "Radhashtami",
    caption: "Radhashtami — the appearance of Shri Radha",
    category: "Festivals",
    tall: true,
  },
  {
    src: "/gallery/devotees-1.png",
    alt: "Mangala aarti",
    caption: "Mangala Aarti — the first awakening of the Lord",
    category: "Aarti",
  },
  {
    src: "/images/5.png",
    alt: "Temple entrance gate",
    caption: "The entrance gate, founded in 1668",
    category: "Architecture",
  },
  {
    src: "/events/holi.png",
    alt: "Holi celebration",
    caption: "Holi — the festival of colours and joy",
    category: "Festivals",
  },
  {
    src: "/events/janmashtami.png",
    alt: "Deity shringar",
    caption: "Shringar — the deity adorned with fresh flowers",
    category: "Deity",
  },
];

const featuredCollections = [
  {
    title: "The Living Temple",
    subtitle: "Temple & Architecture",
    text: "Walls, courtyards and shikharas that have stood for over three centuries — the physical home of an unbroken devotion.",
    image: "/gallery/temple-2.png",
  },
  {
    title: "The Enchanting Form",
    subtitle: "Deity Darshan",
    text: "Glimpses of the beloved — adorned, offered and loved by generations of devotees who come to behold Madan Mohan.",
    image: "/events/ekadashi.png",
  },
  {
    title: "Celebrations of Joy",
    subtitle: "Festivals & Aarti",
    text: "The rhythm of the year — lamps, colours, songs and sweets offered in loving remembrance of the Lord.",
    image: "/gallery/festival-1.png",
  },
];

/* ============================================================
   LIGHTBOX
============================================================ */

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const image = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#C2A95B]/50 text-2xl text-[#C2A95B] transition-colors hover:bg-[#C2A95B] hover:text-[#800000] md:right-8 md:top-8"
      >
        ×
      </button>

      {/* Counter */}
      <div
        className="absolute left-5 top-6 text-xs uppercase tracking-[0.3em] text-[#C2A95B] md:left-8 md:top-8"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#C2A95B]/40 text-xl text-[#C2A95B] transition-colors hover:bg-[#C2A95B] hover:text-[#800000] md:left-8 max-sm:left-25 max-sm:top-155"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#C2A95B]/40 text-xl text-[#C2A95B] transition-colors hover:bg-[#C2A95B] hover:text-[#800000] md:right-8 max-sm:right-25 max-sm:top-155"
      >
        ›
      </button>

      {/* Image */}
      <div
        className="relative mx-4 w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#C2A95B]/30">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-5 text-center">
          <p
            className="text-[10px] uppercase tracking-[0.3em] text-[#C2A95B]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {image.category}
          </p>
          <p
            className="mt-2 text-base text-[#FFF8E7] md:text-lg"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {image.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return galleryImages;
    return galleryImages.filter((img) => img.category === active);
  }, [active]);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );

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
          <div className="text-center">
            <h1
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Temple in <span className="text-[#C2A95B]">Pictures</span>
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
              A quiet collection of moments from the Madan Mohan Mandir — its
              stone, its light, its festivals and the daily offerings of love
              made to the Lord.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — FILTERS + GRID
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E7] py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* ---------- Filters ---------- */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActive(cat);
                    setLightboxIndex(null);
                  }}
                  className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 md:px-5 md:text-xs ${
                    isActive
                      ? "border-[#C2A95B] bg-[#800000] text-[#FFF8E7] shadow-md"
                      : "border-[#C2A95B]/40 bg-white/60 text-[#800000]/70 hover:border-[#C2A95B] hover:text-[#800000]"
                  }`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* ---------- Grid ---------- */}
          {filtered.length === 0 ? (
            <p
              className="py-20 text-center text-sm text-[#800000]/60"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              No images in this collection yet.
            </p>
          ) : (
            <div className="columns-2 gap-3 sm:gap-5 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-5">
              {filtered.map((image, i) => (
                <button
                  key={`${image.src}-${i}`}
                  onClick={() => openLightbox(i)}
                  className="group relative block w-full break-inside-avoid overflow-hidden rounded-xl border border-[#C2A95B]/30 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl sm:rounded-2xl"
                >
                  <div
                    className={`relative w-full ${
                      image.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Base gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Maroon + gold wash on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/85 via-[#800000]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <div className="mb-1.5 h-px w-6 bg-[#C2A95B] transition-all duration-500 group-hover:w-16 md:mb-3 md:w-10 md:group-hover:w-20" />

                    <p
                      className="mb-0.5 text-[7px] uppercase tracking-[0.2em] text-[#C2A95B] md:mb-1 md:text-[10px] md:tracking-[0.3em]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {image.category}
                    </p>

                    <p
                      className="text-[10px] font-bold leading-tight text-white md:text-base md:leading-snug"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {image.caption}
                    </p>
                  </div>

                  {/* Gold ring on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#C2A95B]/60 sm:rounded-2xl" />

                  {/* Expand hint — hidden on mobile to avoid clutter */}
                  <div className="pointer-events-none absolute right-2 top-2 hidden h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 md:flex md:right-4 md:top-4">
                    <span className="text-sm">⤢</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — FEATURED COLLECTIONS
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
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C2A95B]/20 blur-[130px]" />

        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-10 text-center md:mb-14">
              <p
                className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Collections
              </p>

              <h2
                className="text-3xl font-bold leading-tight text-[#FFF8E7] md:text-5xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Featured <span className="text-[#C2A95B]">Stories</span>
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
                Every photograph holds a story. Here are three threads that run
                through the life of the temple.
              </p>
            </div>
          </div>

          {/* MOBILE: horizontal snap scroll */}
          <div className="md:hidden">
            <div
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {featuredCollections.map((item) => (
                <div
                  key={item.title}
                  className="group relative h-[340px] w-[72vw] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-xl border border-[#C2A95B]/30 shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="72vw"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="mb-2.5 h-px w-8 bg-[#C2A95B]" />

                    <p
                      className="mb-1.5 text-[9px] uppercase tracking-[0.2em] text-[#C2A95B]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.subtitle}
                    </p>

                    <h3
                      className="mb-2 text-lg font-bold leading-tight text-white"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-[11px] leading-relaxed text-white/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.text}
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

          {/* DESKTOP: compact grid */}
          <div className="mx-auto hidden max-w-7xl px-10 md:block">
            <div className="grid gap-5 md:grid-cols-3">
              {featuredCollections.map((item) => (
                <div
                  key={item.title}
                  className="group relative h-[400px] overflow-hidden rounded-2xl border border-[#C2A95B]/30 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C2A95B] hover:shadow-xl lg:h-[440px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-[#800000]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="mb-3 h-px w-10 bg-[#C2A95B] transition-all duration-500 group-hover:w-20" />

                    <p
                      className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#C2A95B] md:text-xs"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.subtitle}
                    </p>

                    <h3
                      className="mb-2.5 text-xl font-bold text-white md:text-2xl"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-[11px] leading-relaxed text-white/80 md:text-xs"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.text}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#C2A95B]/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — SUBMIT / CLOSING
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
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
          <span className="text-lg text-[#C2A95B]">✦</span>

          <h2
            className="mt-6 text-2xl font-bold leading-tight text-[#800000] md:text-4xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Share a <span className="text-[#C2A95B]">Memory</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Have you visited the Madan Mohan Mandir and captured a moment of
            beauty, devotion or celebration? We would be honoured to include
            your photograph in this living archive of the temple.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:gallery@madanmohanboreya.org"
              className="rounded-full bg-[#800000] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#FFF8E7] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#660000] hover:shadow-lg md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Send Your Photos
            </a>

            <a
              href="/darshan"
              className="rounded-full border border-[#C2A95B] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#800000] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C2A95B] hover:text-white md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Plan a Darshan
            </a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#C2A95B]/30" />
            <span className="text-[#C2A95B]">✦</span>
            <span className="h-px w-16 bg-[#C2A95B]/30" />
          </div>
        </div>
      </section>

      {/* ============================================================
          LIGHTBOX
      ============================================================ */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </main>
  );
}
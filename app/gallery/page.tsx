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
  },
  {
    src: "/gallery/ekadashi.png",
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
    src: "/gallery/10.png",
    alt: "Radha Krishna shrine",
    caption: "Radha and Krishna together in the sanctum",
    category: "Deity",
  },
  {
    src: "/gallery/radhashtami.png",
    alt: "Radhashtami",
    caption: "Radhashtami — the appearance of Shri Radha",
    category: "Festivals",
  },
  {
    src: "/gallery/devotees-1.png",
    alt: "Mangala aarti",
    caption: "Mangala Aarti — the first awakening of the Lord",
    category: "Aarti",
  },
  {
    src: "/gallery/5.png",
    alt: "Temple entrance gate",
    caption: "The entrance gate, founded in 1668",
    category: "Architecture",
  },
  {
    src: "/gallery/holi.png",
    alt: "Holi celebration",
    caption: "Holi — the festival of colours and joy",
    category: "Festivals",
  },
  {
    src: "/gallery/janmashtami.png",
    alt: "Deity shringar",
    caption: "Shringar — the deity adorned with fresh flowers",
    category: "Deity",
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#C2A95B]/50 text-2xl leading-none text-[#C2A95B] transition-colors hover:bg-[#C2A95B] hover:text-[#800000] md:right-8 md:top-8 md:h-11 md:w-11"
      >
        ×
      </button>

      {/* Counter */}
      <div
        className="absolute left-4 top-5 z-10 text-[10px] uppercase tracking-[0.3em] text-[#C2A95B] md:left-8 md:top-8 md:text-xs"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {index + 1} / {images.length}
      </div>

      {/* Image */}
      <div
        className="relative mx-4 w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-4 text-center md:mt-5">
          <p
            className="text-[10px] uppercase tracking-[0.3em] text-[#C2A95B]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {image.category}
          </p>
          <p
            className="mt-2 text-sm text-[#FFF8E7] md:text-lg"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {image.caption}
          </p>
        </div>
      </div>

      {/* Prev / Next — sit under the image on mobile, flank it on desktop */}
      <div
        className="mt-6 flex items-center justify-center gap-6 md:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onPrev}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C2A95B]/40 text-xl text-[#C2A95B] transition-colors hover:bg-[#C2A95B] hover:text-[#800000] md:absolute md:left-8 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2"
        >
          ‹
        </button>

        <button
          onClick={onNext}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C2A95B]/40 text-xl text-[#C2A95B] transition-colors hover:bg-[#C2A95B] hover:text-[#800000] md:absolute md:right-8 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2"
        >
          ›
        </button>
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
          HERO
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
          FILTERS + GRID
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

          {/* ---------- Grid of 4 ---------- */}
          {filtered.length === 0 ? (
            <p
              className="py-20 text-center text-sm text-[#800000]/60"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              No images in this collection yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
              {filtered.map((image, i) => (
                <button
                  key={`${image.src}-${i}`}
                  onClick={() => openLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-xl border border-[#C2A95B]/30 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl sm:rounded-2xl"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Base gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Maroon + gold wash on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/85 via-[#800000]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <div className="mb-1.5 h-px w-6 bg-[#C2A95B] transition-all duration-500 group-hover:w-14 md:mb-2 md:w-8 md:group-hover:w-16" />

                    <p
                      className="mb-0.5 text-[7px] uppercase tracking-[0.2em] text-[#C2A95B] md:text-[9px] md:tracking-[0.25em]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {image.category}
                    </p>

                    <p
                      className="text-[10px] font-bold leading-tight text-white md:text-sm md:leading-snug"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {image.caption}
                    </p>
                  </div>

                  {/* Gold ring on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#C2A95B]/60 sm:rounded-2xl" />

                </button>
              ))}
            </div>
          )}
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
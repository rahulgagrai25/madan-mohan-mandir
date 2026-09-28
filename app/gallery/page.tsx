"use client";

import { useState } from "react";
import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";

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

const categories = ["All", "Temple", "Deity", "Festivals", "Aarti", "Devotees"];

const galleryItems = [
  { id: 1, src: "/gallery/image.png", category: "Temple", title: "Temple Exterior", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/gallery/image.png", category: "Deity", title: "Madan Mohan Shringar", span: "" },
  { id: 3, src: "/gallery/image.png", category: "Aarti", title: "Evening Aarti", span: "" },
  { id: 4, src: "/gallery/image.png", category: "Festivals", title: "Janmashtami Utsav", span: "md:col-span-2" },
  { id: 5, src: "/gallery/image.png", category: "Devotees", title: "Devotees in Prayer", span: "" },
  { id: 6, src: "/gallery/image.png", category: "Temple", title: "Golden Spire", span: "" },
  { id: 7, src: "/gallery/image.png", category: "Festivals", title: "Radhashtami Celebration", span: "md:col-span-2 md:row-span-2" },
  { id: 8, src: "/gallery/image.png", category: "Deity", title: "Divine Darshan", span: "" },
  { id: 9, src: "/gallery/image.png", category: "Aarti", title: "Mangala Aarti", span: "" },
  { id: 10, src: "/gallery/image.png", category: "Temple", title: "Temple Courtyard", span: "" },
  { id: 11, src: "/gallery/image.png", category: "Devotees", title: "Kirtan Sandhya", span: "" },
  { id: 12, src: "/gallery/image.png", category: "Festivals", title: "Holi Utsav", span: "md:col-span-2" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  const showNext = () => {
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const showPrev = () => {
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <main className={`${cinzel.variable} ${jakarta.variable} min-h-screen bg-black`}>
     <NavBar></NavBar>

      {/* Page Header */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0503] to-black pt-[140px] pb-16 md:pt-[180px] md:pb-24">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.12),_transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Darshan of the Divine
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-tight text-amber-50 md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Temple <span className="text-amber-300">Gallery</span>
          </h1>

          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-400">✦</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          <p
            className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Glimpses of devotion, celebration, and divine grace captured at
            Madan Mohan Mandir. Each frame carries the fragrance of bhakti and
            the blessings of the Lord.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative w-full bg-[#0a0503] pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 md:text-sm ${
                  activeCategory === cat
                    ? "border-amber-400 bg-amber-400 text-black shadow-lg shadow-amber-500/30"
                    : "border-amber-400/30 bg-white/[0.02] text-amber-200/80 hover:border-amber-400/60 hover:bg-white/[0.05]"
                }`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="relative w-full bg-[#0a0503] pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => openLightbox(item)}
                className={`group relative overflow-hidden rounded-2xl border  hover:cursor-pointer border-amber-400/15 bg-white/[0.02] text-left transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/20 ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Category tag */}
                <span
                  className="absolute top-4 left-4 rounded-full border border-amber-400/40 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-amber-200 backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.category}
                </span>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3
                    className="text-base font-semibold text-amber-50 md:text-lg"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="h-[1px] w-6 bg-amber-400" />
                    <span
                      className="text-[10px] uppercase tracking-[0.25em] text-amber-300"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      View
                    </span>
                  </div>
                </div>

                {/* Corner ornament */}
                {/* <div className="absolute right-3 top-3 h-5 w-5 border-t border-r border-amber-400/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-amber-400/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p
              className="py-20 text-center text-sm text-amber-200/60"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 text-amber-200 transition-colors hover:border-amber-400 hover:bg-amber-400/10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 text-xl text-amber-200 transition-colors hover:border-amber-400 hover:bg-amber-400/10 md:left-8"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 text-xl text-amber-200 transition-colors hover:border-amber-400 hover:bg-amber-400/10 md:right-8"
            aria-label="Next"
          >
            ›
          </button>

          {/* Image */}
          <div
            className="relative mx-4 max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-amber-400/30 shadow-2xl shadow-amber-500/20">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                sizes="90vw"
                className="object-contain bg-black"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p
                className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300/80"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {selectedImage.category}
              </p>
              <h3
                className="mt-1 text-lg font-semibold text-amber-50 md:text-xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Bottom ornament */}
      <div className="flex justify-center bg-[#0a0503] pb-16">
        <span className="text-2xl text-amber-400/60">✦</span>
      </div>
    </main>
  );
}
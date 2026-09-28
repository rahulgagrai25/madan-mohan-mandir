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

const previewImages = [
  { src: "/gallery/temple-1.jpg", title: "Temple Exterior", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/deity-1.jpg", title: "Madan Mohan Shringar", span: "" },
  { src: "/gallery/aarti-1.jpg", title: "Evening Aarti", span: "" },
  { src: "/gallery/festival-1.jpg", title: "Janmashtami Utsav", span: "md:col-span-2" },
  { src: "/gallery/devotees-1.jpg", title: "Devotees in Prayer", span: "" },
  { src: "/gallery/temple-2.jpg", title: "Golden Spire", span: "" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-[#0a0503] py-24 md:py-32`}
    >
      {/* Background dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(251,191,36,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Glimpses of Grace
          </p>
          <h2
            className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Temple <span className="text-amber-300">Gallery</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-400">✦</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>
          <p
            className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            A few precious frames from the daily life of the temple — the
            aarti, the shringar, the festivals, and the devotees who make it
            all alive.
          </p>
        </div>

        {/* Preview grid */}
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:grid-cols-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
          {previewImages.map((img) => (
            <a
              key={img.title}
              href="/gallery"
              className={`group relative overflow-hidden rounded-2xl border border-amber-400/15 transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/20 ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p
                  className="text-xs font-semibold text-amber-50 md:text-sm"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {img.title}
                </p>
                <div className="mt-1 h-[1px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-10" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-7 py-3 text-sm font-medium text-amber-200 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/10"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            View Full Gallery →
          </a>
        </div>
      </div>
    </section>
  );
}
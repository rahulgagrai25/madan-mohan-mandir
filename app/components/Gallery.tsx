
import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: [
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  variable: "--font-jakarta",
});

const previewImages = [
  {
    src: "/gallery/temple-2.png",
    title: "Temple Exterior",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery/deity-1.png",
    title: "Madan Mohan Shringar",
    span: "",
  },
  {
    src: "/gallery/festival-1.png",
    title: "Janmashtami Utsav",
    span: "",
  },
  {
    src: "/gallery/aarti-1.png",
    title: "Evening Aarti",
    span: "md:col-span-2",
  },
  {
    src: "/gallery/devotees-1.png",
    title: "Devotees in Prayer",
    span: "",
  },
  {
    src: "/gallery/temple-1.png",
    title: "Golden Spire",
    span: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-[#800000] py-24 md:py-32`}
    >

      {/* ========================================================= */}
      {/* GOLDEN DOT BACKGROUND */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft Golden Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{
          backgroundColor: "#C2A95B",
          opacity: 0.3,
        }}
      />

      {/* ========================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* ========================================================= */}
        {/* HEADING */}
        {/* ========================================================= */}

        <div className="mb-14 text-center">

          {/* Small Heading */}
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em]"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: "#C2A95B",
            }}
          >
            Glimpses of Grace
          </p>

          {/* Main Heading */}
          <h2
            className="mb-6 text-3xl font-bold md:text-5xl"
            style={{
              fontFamily: "var(--font-cinzel)",
              color: "#FFF8E7",
            }}
          >
            Temple{" "}
            <span style={{ color: "#C2A95B" }}>
              Gallery
            </span>
          </h2>

          {/* ========================================================= */}
          {/* GOLDEN DIVIDER */}
          {/* ========================================================= */}

          <div className="mx-auto flex items-center justify-center gap-3">

            <span
              className="h-[1px] w-16"
              style={{
                background:
                  "linear-gradient(to right, transparent, #C2A95B)",
              }}
            />

            <span
              className="text-lg"
              style={{
                color: "#C2A95B",
              }}
            >
              ✦
            </span>

            <span
              className="h-[1px] w-16"
              style={{
                background:
                  "linear-gradient(to left, transparent, #C2A95B)",
              }}
            />

          </div>

          {/* Description */}
          <p
            className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed md:text-base"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: "rgba(255,248,231,0.80)",
            }}
          >
            A few precious frames from the daily life of the temple —
            the aarti, the shringar, the festivals, and the devotees
            who make it all alive.
          </p>

        </div>

        {/* ========================================================= */}
        {/* GALLERY GRID */}
        {/* ========================================================= */}

        <div
          className="
            grid
            auto-rows-[160px]
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:auto-rows-[180px]
            md:grid-cols-4
            md:gap-4
          "
        >

          {previewImages.map((img) => (

            <a
              key={img.title}
              href="/gallery"
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                transition-all
                duration-500
                hover:-translate-y-1
                ${img.span}
              `}
              style={{
                borderColor: "rgba(194,169,91,0.35)",
                backgroundColor: "#660000",
              }}
            >

              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="
                  (max-width: 640px) 50vw,
                  (max-width: 1024px) 33vw,
                  25vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* ================================================= */}
              {/* IMAGE OVERLAY */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-75
                  transition-opacity
                  duration-500
                  group-hover:opacity-95
                "
                style={{
                  background:
                    "linear-gradient(to top, rgba(45,0,0,0.95), rgba(128,0,0,0.15), transparent)",
                }}
              />

              {/* ================================================= */}
              {/* IMAGE TITLE */}
              {/* ================================================= */}

              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">

                <p
                  className="text-xs font-semibold md:text-sm"
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    color: "#FFF8E7",
                  }}
                >
                  {img.title}
                </p>

                {/* Golden Hover Line */}
                <div
                  className="
                    mt-1
                    h-[2px]
                    w-0
                    transition-all
                    duration-500
                    group-hover:w-10
                  "
                  style={{
                    backgroundColor: "#C2A95B",
                  }}
                />

              </div>

            </a>

          ))}

        </div>

        {/* ========================================================= */}
        {/* CTA */}
        {/* ========================================================= */}

        <div className="mt-12 text-center">

          <a
            href="/gallery"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              px-7
              py-3
              text-sm
              font-medium
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
            style={{
              fontFamily: "var(--font-jakarta)",
              color: "#C2A95B",
              border: "1px solid rgba(194,169,91,0.60)",
              backgroundColor: "rgba(102,0,0,0.40)",
            }}
          >
            View Full Gallery →
          </a>

        </div>

      </div>
    </section>
  );
}

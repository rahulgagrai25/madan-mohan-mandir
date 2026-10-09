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

const darshanTimings = [
  {
    name: "Mangala Aarti",
    time: "5:00 AM",
    description: "The first awakening of the Lord. The temple opens and the deity is gently awakened with bells and conch.",
    icon: "🌅",
  },
  {
    name: "Shringar Darshan",
    time: "7:00 AM",
    description: "The deity is adorned with fresh flowers, sandalwood paste and ornaments. Devotees can behold the beautiful form.",
    icon: "🌸",
  },
  {
    name: "Bhog Aarti",
    time: "12:00 PM",
    description: "A midday offering of food is made to the Lord. After the offering, prasad is distributed to devotees.",
    icon: "🍛",
  },
  {
    name: "Sandhya Aarti",
    time: "6:30 PM",
    description: "The evening lamp offering. The temple glows with oil lamps and the air fills with the sound of bhajans.",
    icon: "🪔",
  },
  {
    name: "Shayan Aarti",
    time: "8:30 PM",
    description: "The final ritual of the day. The Lord is gently put to rest and the temple closes for the night.",
    icon: "🌙",
  },
];

const offerings = [
  {
    title: "Pushpa (Flowers)",
    text: "Offer fresh flowers — especially tulsi, lotus and marigold — to the Lord. Flowers represent purity and devotion.",
    icon: "🌺",
  },
  {
    title: "Deepa (Lamp)",
    text: "Light a ghee lamp in the temple. The flame symbolises the light of knowledge that dispels the darkness of ignorance.",
    icon: "🪔",
  },
  {
    title: "Naivedya (Food Offering)",
    text: "Offer simple sattvic food such as kheer, fruits or sweets. The Lord accepts the love with which it is offered.",
    icon: "🍎",
  },
  {
    title: "Bhajan & Kirtan",
    text: "Sing the names of the Lord. In the Bhakti tradition, the sweet remembrance of Krishna is the highest offering.",
    icon: "🎶",
  },
];

const guidelines = [
  {
    title: "Dress Modestly",
    text: "Please wear clean, traditional and modest clothing. Avoid leather items inside the temple premises.",
  },
  {
    title: "Remove Footwear",
    text: "Footwear must be removed before entering the temple. There are racks available near the entrance.",
  },
  {
    title: "Maintain Silence",
    text: "Keep the temple atmosphere peaceful. Avoid loud conversations and mobile phone usage inside the sanctum.",
  },
  {
    title: "Photography",
    text: "Photography of the deity is not permitted. You may take pictures of the temple exterior and premises.",
  },
  {
    title: "Prasad",
    text: "Prasad is offered after the Bhog Aarti. Please accept it with respect and do not throw it away.",
  },
  {
    title: "Respect the Rituals",
    text: "Follow the instructions of the priests and temple staff. Do not disturb the rituals in progress.",
  },
];

const galleryImages = [
  { src: "/gallery/temple-1.png", alt: "Madan Mohan Temple exterior" },
  { src: "/gallery/temple-2.png", alt: "Temple courtyard" },
  { src: "/gallery/temple-3.png", alt: "Evening aarti" },
  { src: "/gallery/temple-4.png", alt: "Festival celebration" },
];

/* ============================================================
   PAGE
============================================================ */

export default function DarshanPage() {
  return (
    <main className={`${cinzel.variable} ${jakarta.variable} w-full`}>
      
      {/* ============================================================
          SECTION 2 — THE DEITY
      ============================================================ */}
      
      {/* ============================================================
          SECTION 3 — DARSHAN TIMINGS
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-20 md:py-28 max-sm:pt-30">
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
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Daily Schedule
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#FFF8E7] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Darshan <span className="text-[#C2A95B]">Timings</span>
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
              The temple follows a traditional daily schedule of aartis and
              darshan. Timings may vary on festivals and special occasions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {darshanTimings.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl border border-[#C2A95B]/25 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] md:p-7"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-2xl md:text-3xl">{item.icon}</span>
                  <span
                    className="rounded-full border border-[#C2A95B]/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#C2A95B] md:text-xs"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.time}
                  </span>
                </div>

                <h3
                  className="mb-3 text-lg font-bold text-[#FFF8E7] md:text-xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {item.name}
                </h3>

                <div className="mb-3 h-px w-12 bg-[#C2A95B]/50 transition-all duration-300 group-hover:w-20" />

                <p
                  className="text-xs leading-relaxed text-[#FFF8E7]/70 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mx-auto mt-10 max-w-2xl text-center text-xs text-[#FFF8E7]/50 md:text-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            * Timings may change during festivals like Janmashtami, Radhashtami
            and Holi. Please contact the temple for updated schedules.
          </p>
        </div>
      </section>


      {/* ============================================================
          SECTION 5 — GUIDELINES
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
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Before You Visit
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Temple <span className="text-[#C2A95B]">Guidelines</span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guidelines.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#C2A95B]/30 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#C2A95B] hover:shadow-md"
              >
                <h3
                  className="mb-3 text-base font-bold text-[#800000] md:text-lg"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {item.title}
                </h3>

                <div className="mb-3 h-px w-10 bg-[#C2A95B]/50" />

                <p
                  className="text-xs leading-relaxed text-[#800000]/70 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
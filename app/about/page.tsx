import { Tiro_Devanagari_Hindi, Noto_Sans_Devanagari } from "next/font/google";
import Image from "next/image";

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-tiro",
});

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-noto",
});

/* ============================================================
   DATA
============================================================ */

const threeForms = [
  {
    title: "योगी",
    subtitle: "धर्मात्मा · ज्ञान रूप",
    text: "बुद्धिमान शिक्षक और दार्शनिक। यह रूप भगवद गीता में अपने चरम पर पहुँचता है, जहाँ कृष्ण अर्जुन को कर्तव्य और ज्ञान के मार्ग पर मार्गदर्शन करते हैं।",
    image: "/images/about/yogi.png",
  },
  {
    title: "प्रियतम",
    subtitle: "ललित · मधुर · मदन मोहन",
    text: "वृंदावन के चंचल, मधुर और मंत्रमुग्ध करने वाले कृष्ण। यह रूप श्रीमद्भागवत, पद्म पुराण और ब्रह्मवैवर्त पुराण में चमकता है — प्रेम और विरह का चेहरा।",
    image: "/images/about/beloved.png",
  },
  {
    title: "राजनेता",
    subtitle: "राजनीतिक · कर्म रूप",
    text: "महाभारत के राजा, कूटनीतिज्ञ और मार्गदर्शक। यह रूप कर्म, कर्तव्य और दुनिया के क्रम का प्रतिनिधित्व करता है।",
    image: "/images/about/statesman.png",
  },
];

const fiveTemples = [
  {
    place: "मेलोक",
    region: "सामता के निकट, पश्चिम बंगाल",
    builder: "मुकंद प्रसाद रायचौधरी (पहलवान)",
    year: "1651 ई.",
  },
  {
    place: "बोड़ेया",
    region: "कांके, राँची, झारखण्ड",
    builder: "लक्ष्मी नारायण तिवारी",
    year: "1665 ई.",
    highlight: true,
  },
  {
    place: "विष्णुपुर",
    region: "बाँकुड़ा, पश्चिम बंगाल",
    builder: "राजा दुर्जन मल्लदेव",
    year: "1694 ई.",
  },
  {
    place: "वृंदावन",
    region: "मथुरा, उत्तर प्रदेश",
    builder: "महाराजा वज्रनाभ",
    year: "1748 · 1819 ई.",
    note: "1748 में स्थापना; मंदिर का निर्माण 1819 ई. में हुआ।",
  },
  {
    place: "कूच विहार",
    region: "पश्चिम बंगाल",
    builder: "महाराजा नृपेन्द्र नारायण",
    year: "1885–1889 ई.",
  },
];

const chotanagpurTemples = [
  {
    name: "मदन मोहन",
    place: "बोड़ेया",
    year: "1665 ई.",
    text: "कृष्ण का मधुर, मंत्रमुग्ध करने वाला रूप — प्रेम और भक्ति का निवास।",
  },
  {
    name: "राधावल्लभ",
    place: "चुटिया",
    year: "1685 ई.",
    text: "राजा रघुनाथ शाह के समर्थन से पैतृक किले में स्थापित।",
  },
  {
    name: "जगन्नाथ",
    place: "जगन्नाथपुर",
    year: "1691 ई.",
    text: "राँची से 10 किमी दक्षिण में 250 फीट की पहाड़ी पर ठाकुर अनि शाह द्वारा निर्मित।",
  },
];

const committee = [
  {
    name: "सुधांशु नारायण तिवारी",
    nameEn: "Sudhanshu Narayan Tiwari",
    role: "अध्यक्ष",
    roleEn: "President",
    phone: "7488395587",
  },
  {
    name: "मनोज नारायण तिवारी",
    nameEn: "Manoj Narayan Tiwari",
    role: "सचिव",
    roleEn: "Secretary",
    phone: "7488540905",
  },
  {
    name: "गोपाल नारायण तिवारी",
    nameEn: "Gopal Narayan Tiwari",
    role: "कोषाध्यक्ष",
    roleEn: "Treasurer",
    phone: "7858091885",
  },
  {
    name: "प्रमोहित पांडेय",
    nameEn: "Pramohit Pandey",
    role: "मुख्य पुजारी",
    roleEn: "Head Priest",
    phone: "",
  },
  {
    name: "गोविन्द नारायण तिवारी",
    nameEn: "Govind Narayan Tiwari",
    role: "संरक्षक",
    roleEn: "Patron",
    phone: "9835917623",
  },
  {
    name: "डॉ. रविभूषण तिवारी",
    nameEn: "Dr. Ravibhushan Tiwari",
    role: "संरक्षक",
    roleEn: "Patron",
    phone: "9931500930",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function AboutPage() {
  return (
    <main className={`${tiro.variable} ${noto.variable} w-full`}>
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
              style={{ fontFamily: "var(--font-noto)" }}
            >
              About the temple
            </p>

            <h1
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-tiro)" }}
            >
              नाम —{" "}
              <span className="text-[#C2A95B]">मदन मोहन</span>
            </h1>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              मदन मोहन भगवान श्री कृष्ण का एक अत्यंत प्रिय नाम है — एक ऐसा नाम
              जो सौंदर्य, प्रेम और हर हृदय को मोहित करने की शक्ति की बात करता है।
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
                      style={{ fontFamily: "var(--font-noto)" }}
                    >
                      दिव्य स्वरूप
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-white md:text-3xl"
                    style={{ fontFamily: "var(--font-tiro)" }}
                  >
                    मदन मोहन
                  </h3>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p
                className="mb-6 text-sm font-light leading-relaxed text-[#800000]/80 md:text-lg"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                नाम{" "}
                <span className="font-medium text-[#C2A95B]">
                  मदन मोहन
                </span>{" "}
                दो सुंदर शब्दों से मिलकर बना है। ये दोनों मिलकर कृष्ण को उस रूप
                में वर्णित करते हैं जिनका आकर्षण इतना महान है कि स्वयं प्रेम के
                देवता भी उनसे प्रभावित होते हैं।
              </p>

              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#C2A95B]/25 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <p
                    className="mb-1 text-lg font-bold text-[#800000]"
                    style={{ fontFamily: "var(--font-tiro)" }}
                  >
                    मदन
                  </p>
                  <p
                    className="text-xs leading-relaxed text-[#800000]/70 md:text-sm"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    कामदेव — प्रेम और इच्छा के देवता।
                  </p>
                </div>

                <div className="rounded-2xl border border-[#C2A95B]/25 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <p
                    className="mb-1 text-lg font-bold text-[#800000]"
                    style={{ fontFamily: "var(--font-tiro)" }}
                  >
                    मोहन
                  </p>
                  <p
                    className="text-xs leading-relaxed text-[#800000]/70 md:text-sm"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    जो मोहित करता है, आनंदित करता है और मंत्रमुग्ध करता है।
                  </p>
                </div>
              </div>

              <p
                className="mb-6 text-sm font-light leading-relaxed text-[#800000]/80 md:text-lg"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                इसलिए{" "}
                <span className="font-medium text-[#C2A95B]">
                  मदन मोहन
                </span>{" "}
                का अर्थ है वह भगवान जो स्वयं कामदेव को भी मोहित करते हैं। उन्हें{" "}
                <span className="font-medium text-[#C2A95B]">प्रदुम्न</span> के
                रूप में कामदेव के पिता के रूप में भी जाना जाता है — ब्रह्मांड
                में प्रेम के मूल स्रोत।
              </p>

              {/* Hindi verse */}
              <div className="rounded-2xl border border-[#C2A95B]/25 bg-[#C2A95B]/5 p-5 md:p-6">
                <p
                  className="text-sm leading-loose text-[#800000]/90 md:text-base"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  मदन मोहन श्री कृष्ण का ही एक नाम है। इसका शाब्दिक अर्थ है मदन
                  अर्थात् कामदेव और मोहन अर्थात मोहित करने वाला। श्री कृष्ण
                  कामदेव को भी मोहित करने वाले गुणों से आपूरित हैं। इन्हें
                  प्रदुम्न के रूप में कामदेव के पिता के रूप में भी जाना जाता
                  है।
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Three forms ---------- */}
          <div className="mt-24">
            <div className="mb-10 text-center">
              <h2
                className="text-2xl font-bold text-[#800000] md:text-4xl"
                style={{ fontFamily: "var(--font-tiro)" }}
              >
                कृष्ण के{" "}
                <span className="text-[#C2A95B]">तीन रूप</span>
              </h2>
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]" />
                <span className="text-[#C2A95B]">✦</span>
                <span className="h-px w-10 bg-[#C2A95B]" />
              </div>
              <p
                className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-lg"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                शास्त्रों में कृष्ण तीन महान रूपों में प्रकट होते हैं। कवियों
                और संतों ने, हालाँकि, केवल एक को चुना — मधुर, प्रेममय मदन मोहन
                — अपने गीतों के हृदय के रूप में।
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
                      className="mb-2 text-[10px] uppercase text-[#C2A95B] md:text-lg bg-[#800000]/40 p-1"
                      style={{ fontFamily: "var(--font-noto)" }}
                    >
                      {form.subtitle}
                    </p>

                    <h3
                      className="mb-3 text-2xl font-bold text-white md:text-3xl"
                      style={{ fontFamily: "var(--font-tiro)" }}
                    >
                      {form.title}
                    </h3>

                    <p
                      className="text-xs leading-relaxed text-white/80 md:text-sm"
                      style={{ fontFamily: "var(--font-noto)" }}
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
              className="mb-3 text-xs font-medium uppercase text-[#C2A95B] md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              मंदिर और उसका समय
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#FFF8E7] md:text-5xl"
              style={{ fontFamily: "var(--font-tiro)" }}
            >
              एक पवित्र{" "}
              <span className="text-[#C2A95B]">विरासत</span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              मुगल भारत के हृदय में, जब औरंगज़ेब दिल्ली के सिंहासन पर बैठा था,
              छोटानागपुर में तीन कृष्ण मंदिर चुपचाप उभरे। बोड़ेया उनमें से एक
              था — भक्ति का एक दीप जो कभी बुझा नहीं।
            </p>
          </div>

          {/* ---------- Five temples ---------- */}
          <div className="mb-24">
            <div className="mb-8 flex flex-col items-center gap-3 text-center">
              <h3
                className="text-xl font-bold text-[#FFF8E7] md:text-3xl"
                style={{ fontFamily: "var(--font-tiro)" }}
              >
                भारत के{" "}
                <span className="text-[#C2A95B]">पाँच मदन मोहन मंदिर</span>
              </h3>
              <p
                className="max-w-3xl text-xs font-light leading-relaxed text-[#FFF8E7]/60 md:text-lg"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                जबकि राधा-कृष्ण मंदिर पूरे भारत में पाए जाते हैं, &ldquo;मदन
                मोहन&rdquo; नाम दुर्लभ है। केवल पाँच मंदिर ही इस पवित्र नाम को
                धारण करते हैं।
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
                      style={{ fontFamily: "var(--font-tiro)" }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-[0.25em] text-[#C2A95B] md:text-xs"
                      style={{ fontFamily: "var(--font-noto)" }}
                    >
                      {temple.year}
                    </span>
                  </div>

                  <h4
                    className="mb-1 text-lg font-bold text-[#FFF8E7] md:text-3xl"
                    style={{ fontFamily: "var(--font-tiro)" }}
                  >
                    {temple.place}
                  </h4>

                  <p
                    className="mb-3 text-[11px] leading-relaxed text-[#FFF8E7]/70 md:text-lg"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    {temple.region}
                  </p>

                  <div className="h-px w-full bg-[#C2A95B]/20" />

                  <p
                    className="mt-3 text-[11px] leading-relaxed text-[#FFF8E7]/60 md:text-xs"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    निर्माता:{" "}
                    <span className="text-[#FFF8E7]/90">
                      {temple.builder}
                    </span>
                  </p>

                  {temple.note && (
                    <p
                      className="mt-2 text-[10px] italic leading-relaxed text-[#C2A95B]/80 md:text-[11px]"
                      style={{ fontFamily: "var(--font-noto)" }}
                    >
                      {temple.note}
                    </p>
                  )}
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
                {/* <span
                  className="text-[10px] uppercase tracking-[0.3em] text-[#C2A95B]"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  बोड़ेया · 1665 ई.
                </span> */}
              </div>

              <h3
                className="mb-5 text-2xl font-bold leading-tight text-[#FFF8E7] md:text-4xl"
                style={{ fontFamily: "var(--font-tiro)" }}
              >
                संकट के समय में{" "}
                <span className="text-[#C2A95B]">जन्मा मंदिर</span>
              </h3>

              <p
                className="mb-4 text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-lg"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                1200–1857 ई. के वर्ष भारतीय इतिहास के सबसे कठिन वर्षों में से
                थे। उत्तर में हिंदू शक्ति के पतन के बाद, मुगल शासन पूरे देश में
                फैल गया। औरंगज़ेब के अधीन, मंदिर खतरे में थे और भक्ति को चुपचाप
                करना पड़ता था।
              </p>

              <p
                className="mb-4 text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-lg"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                यह इसी युग में था कि{" "}
                <span className="font-medium text-[#C2A95B]">
                  लक्ष्मी नारायण तिवारी
                </span>{" "}
                ने 1665 ई. में बोड़ेया में मदन मोहन मंदिर बनवाया। उन्होंने इसे
                प्रसिद्धि के लिए नहीं बनवाया। उन्होंने इसे विश्वास के एक शांत
                कार्य के रूप में बनवाया — एक ऐसा केंद्र जहाँ लोग एक साथ आ सकें
                और अपने शाश्वत मूल्यों को याद कर सकें।
              </p>

              <p
                className="text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-lg"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                यह भक्ति आंदोलन का युग था। भक्ति के माध्यम से, संतों और
                गृहस्थों ने समान रूप से प्रेम, गरिमा और समुदाय की भावना को जीवित
                रखा। बोड़ेया मंदिर ऐसा ही एक जीवित केंद्र बन गया — और आज भी है।
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
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    1665 ई. से
                  </p>
                  <h4
                    className="text-xl font-bold text-white md:text-2xl"
                    style={{ fontFamily: "var(--font-tiro)" }}
                  >
                    360+ वर्षों की भक्ति
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Three Chotanagpur temples ---------- */}
          <div className="mt-24">
            <div className="mb-10 text-center">
              <h3
                className="text-xl font-bold text-[#FFF8E7] md:text-4xl"
                style={{ fontFamily: "var(--font-tiro)" }}
              >
                छोटानागपुर के{" "}
                <span className="text-[#C2A95B]">तीन कृष्ण मंदिर</span>
              </h3>
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]" />
                <span className="text-[#C2A95B]">✦</span>
                <span className="h-px w-10 bg-[#C2A95B]" />
              </div>
              <p
                className="mx-auto mt-5 max-w-2xl text-xs font-light leading-relaxed text-[#FFF8E7]/60 md:text-lg"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                केवल 26 वर्षों की अवधि में, राँची के पास तीन महान कृष्ण मंदिर
                उभरे — प्रत्येक एक अलग दिव्य रूप में।
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {chotanagpurTemples.map((t) => (
                <div
                  key={t.name}
                  className="group rounded-2xl border border-[#C2A95B]/25 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B]"
                >
                  <p
                    className="mb-1 text-[10px] uppercase text-[#C2A95B] md:text-lg"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    {t.place} · {t.year}
                  </p>

                  <h4
                    className="mb-3 text-xl font-bold text-[#FFF8E7] md:text-3xl"
                    style={{ fontFamily: "var(--font-tiro)" }}
                  >
                    {t.name}
                  </h4>

                  <div className="mb-3 h-px w-12 bg-[#C2A95B]/50 transition-all duration-300 group-hover:w-20" />

                  <p
                    className="text-xs leading-relaxed text-[#FFF8E7]/70 md:text-lg"
                    style={{ fontFamily: "var(--font-noto)" }}
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

      {/* ============================================================
          SECTION 3 — TEMPLE MANAGEMENT COMMITTEE
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E7] py-20 md:py-28">
        {/* Mandala dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #800000 1px, transparent 1.5px),
              linear-gradient(45deg, transparent 48%, #C2A95B 49%, #C2A95B 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, #C2A95B 49%, #C2A95B 51%, transparent 52%)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Soft glows */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#800000]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* ---------- Heading ---------- */}
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase text-[#C2A95B] md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              सेवा और ट्रस्टी
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-tiro)" }}
            >
              मंदिर प्रबंधन{" "}
              <span className="text-[#C2A95B]">समिति</span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              मंदिर की देखभाल बोड़ेया के तिवारी परिवार द्वारा की जाती है, जो
              पीढ़ियों से इसके संरक्षक के रूप में सेवा कर रहे हैं।
            </p>
            <p
              className="mx-auto mt-3 text-sm font-normal leading-relaxed text-[#800000]/80 md:text-xl"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              श्री मदन मोहन मंदिर प्रबंध समिति
            </p>
          </div>

          {/* ---------- Committee cards ---------- */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {committee.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-[#C2A95B]/30 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl"
              >
                {/* Gold corner accent */}
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rotate-45 bg-[#C2A95B]/10 transition-colors duration-300 group-hover:bg-[#C2A95B]/20" />

                <p
                  className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#C2A95B]"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  {member.roleEn}
                </p>

                <h3
                  className="text-lg font-bold leading-snug text-[#800000] md:text-xl"
                  style={{ fontFamily: "var(--font-tiro)" }}
                >
                  {member.name}
                </h3>

                <p
                  className="mt-1 text-xs font-light text-[#800000]/60"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  {member.nameEn}
                </p>

                <div className="my-4 h-px w-12 bg-[#C2A95B]/50 transition-all duration-300 group-hover:w-20" />

                <p
                  className="mb-2 text-sm font-medium text-[#800000]/80 md:text-lg"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  {member.role}
                </p>

                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 text-xs font-light text-[#800000]/70 transition-colors hover:text-[#C2A95B] md:text-sm"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    <span className="text-[#C2A95B]">☎</span>
                    {member.phone}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* ---------- Bottom decoration ---------- */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <span className="h-px w-20 bg-[#C2A95B]/40" />
            <span className="text-sm text-[#C2A95B]">✦</span>
            <span className="h-px w-20 bg-[#C2A95B]/40" />
          </div>
        </div>
      </section>
    </main>
  );
}
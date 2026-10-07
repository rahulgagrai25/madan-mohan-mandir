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

const timeline = [
  {
    year: "1665 ई.",
    samvat: "संवत 1722",
    title: "नींव का शुभारंभ",
    desc: "वैशाख शुक्ल पक्ष दशमी को राजा रघुनाथ शाही की उपस्थिति में लक्ष्मी नारायण तिवारी ने मंदिर की नींव रखी।",
  },
  {
    year: "1668 ई.",
    samvat: "संवत 1725",
    title: "चारदीवारी एवं द्वार",
    desc: "श्रावण शुक्ल पक्ष दशमी को चारदीवारी एवं दरवाजों की नींव रखी गई — नींव से तीन वर्ष तीन माह पश्चात्।",
  },
  {
    year: "1682 ई.",
    samvat: "संवत 1739",
    title: "मंदिर निर्माण पूर्ण",
    desc: "कुल 17 वर्षों में मंदिर बनकर तैयार हुआ। कुल लागत ₹14,001 (चौदह हज़ार एक रुपये) रही।",
  },
];

const inscriptions = [
  {
    label: "प्रथम शिलालेख (लघु)",
    lines: [
      "श्री राम राज्य।",
      "संवत सत्रह सइ बाइस।",
      "बैशाख सुदि दशमी रजनीश।।",
      "श्री रघुनाथ नरेश विराज ।",
      "लक्ष्मी नारायण ईश्वर माठसाज।",
    ],
  },
  {
    label: "द्वितीय शिलालेख (विस्तृत)",
    lines: [
      "श्री मदन मोहन जी",
      "शुभ संवत 1722 समय वैसाख सुदी दशमी 10 के श्री श्री मदन मोहनक शुभा दावा देयाल...",
      "श्री संवत 1725 समय सावन सुदी दशमी 10 के दरवाजा और छरदेवाली दावा देल तैयार भेल...",
      "संवत 1739 तेकर लगीत भेल रूपैया 14001 चौदह हजार एक रूपैया।",
      "कारीगर अनिरूद्ध विनती साँच हय।",
    ],
  },
];

const sources = [
  "डिस्ट्रिक्ट गजेटियर",
  "रांची मुण्डाज एण्ड देयर कन्ट्री",
  "बिहार थ्रू एजेज",
  "छोटानागपुर का इतिहास",
  "लिस्ट ऑफ मोनुमेंटस इन द छोटानागपुर",
  "छोटानागपुर के प्राचीन स्मारक",
  "झारखण्ड की रूपरेखा",
  "झारखण्ड का भूगोल",
];

const kings = [
  { name: "दुर्जनशाल (45वें राजा)", period: "1550 – 1590 ई.", note: "डोइसा में राजधानी बसाई" },
  { name: "रामशाह (48वें राजा)", period: "1646 – 1670 ई.", note: "मंदिर निर्माण आरम्भ (1665 ई.)" },
  { name: "रघुनाथ शाही (49वें राजा)", period: "1671 – 1706 ई.", note: "मंदिर निर्माण पूर्ण (1682 ई.)" },
];

export default function TempleHistory() {
  return (
    <main
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-[#FAF7F2]`}
    >
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative z-10 px-5 pt-20 pb-12 md:px-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs md:tracking-[0.4em]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            इतिहास एवं विरासत
          </p>

          <h1
            className="mb-5 text-3xl font-bold leading-tight text-[#800000] sm:text-4xl md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            मदन मोहन मंदिर
          </h1>

          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C2A95B] md:w-16" />
            <span className="text-[#C2A95B]">✦</span>
            <span className="h-px w-12 bg-[#C2A95B] md:w-16" />
          </div>

          <p
            className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            बोड़ेया, कांके, राँची (झारखंड) में स्थित यह मंदिर 17वीं शताब्दी की
            भक्ति, संकल्प और स्थापत्य का जीवंत साक्ष्य है।
          </p>
        </div>

        {/* HERO IMAGE SPACE */}
        <div className="mx-auto mt-12 max-w-5xl md:mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#C2A95B]/25 bg-gradient-to-br from-[#C2A95B]/10 via-white to-[#800000]/5 shadow-sm">
            <Image
              src="/gallery/temple-1.png"
              alt="मदन मोहन मंदिर"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="text-5xl text-[#C2A95B] md:text-6xl">🛕</span>
              <p
                className="text-xs uppercase tracking-[0.3em] text-[#800000]/50 md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Temple Hero Image
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO — स्थापना काल
      ====================================================== */}
      <section className="relative z-10 px-5 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            {/* Text */}
            <div>
              <h2
                className="mb-5 text-2xl font-bold text-[#800000] md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                स्थापना काल एवं{" "}
                <span className="text-[#C2A95B]">निर्माण अवधि</span>
              </h2>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]" />
                <span className="text-sm text-[#C2A95B]">✦</span>
                <span className="h-px w-10 bg-[#C2A95B]" />
              </div>

              <div
                className="space-y-4 text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                <p>
                  <span className="mr-2 text-[#C2A95B]">•</span>
                  मदन मोहन मंदिर की स्थापना काल तथा निर्माण अवधि की जानकारी मंदिर
                  में रखे <strong className="font-medium text-[#800000]">शिलापट</strong> पर
                  उत्कीर्ण शिलालेख से मिलती है।
                </p>
                <p>
                  <span className="mr-2 text-[#C2A95B]">•</span>
                  यह शिलालेख प्रवेश द्वार के ठीक सामने, मंदिर के चबूतरे पर, गर्भगृह की दीवाल के दक्षिणी भाग में
                  स्थित है।
                </p>
                <p>
                  <span className="mr-2 text-[#C2A95B]">•</span>
                  दो शिलालेखों के अतिरिक्त, गर्भ-गृह के दरवाजे पर उत्कीर्ण
                  दिन-तारीख तथा राजा द्वारा प्रदत्त{" "}
                  <strong className="font-medium text-[#800000]">ताम्रपत्र</strong> भी
                  साक्ष्य के रूप में उपलब्ध हैं।
                </p>
                <p>
                  <span className="mr-2 text-[#C2A95B]">•</span>
                  यह ताम्रपत्र लक्ष्मीनारायण तिवारी को प्राप्त हुआ था।
                </p>
              </div>
            </div>

            {/* IMAGE SPACE — Shilalekh / inscription */}
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#C2A95B]/25 bg-gradient-to-br from-[#800000]/5 via-white to-[#C2A95B]/10 shadow-sm">
                <Image
                  src="/history/shilalekh.jpg"
                  alt="शिलालेख"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <span className="text-4xl text-[#C2A95B]">📜</span>
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] text-[#800000]/50"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Shilalekh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE — 3 key dates
      ====================================================== */}
      <section className="relative z-10 px-5 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p
              className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              निर्माण यात्रा
            </p>
            <h2
              className="text-2xl font-bold text-[#800000] md:text-4xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              17 वर्षों का <span className="text-[#C2A95B]">संकल्प</span>
            </h2>
          </div>

          <div className="relative">
            {/* connecting line (desktop) */}
            <div className="pointer-events-none absolute left-0 right-0 top-[68px] hidden h-px bg-gradient-to-r from-transparent via-[#C2A95B]/40 to-transparent md:block" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className="group relative overflow-hidden rounded-2xl border border-[#C2A95B]/25 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-md"
                >
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C2A95B]/40 bg-[#C2A95B]/10 text-sm font-bold text-[#800000]">
                        {i + 1}
                      </span>
                      <div>
                        <p
                          className="text-[10px] font-medium uppercase tracking-widest text-[#C2A95B]"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          {t.samvat}
                        </p>
                        <p
                          className="text-base font-bold text-[#800000]"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          {t.year}
                        </p>
                      </div>
                    </div>

                    <h3
                      className="mb-2 text-lg font-bold text-[#800000]"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {t.title}
                    </h3>

                    <p
                      className="text-xs font-light leading-relaxed text-[#800000]/70 md:text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost highlight */}
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[#C2A95B]/30 bg-gradient-to-r from-[#C2A95B]/10 via-transparent to-[#800000]/5 p-5 text-center">
            <p
              className="mb-1 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              कुल निर्माण लागत
            </p>
            <p
              className="text-2xl font-bold text-[#800000] md:text-3xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              ₹14,001
            </p>
            <p
              className="text-xs font-light text-[#800000]/60"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              चौदह हज़ार एक रुपये
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INSCRIPTIONS — two shilalekh texts
      ====================================================== */}
      <section className="relative z-10 px-5 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p
              className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              शिलालेख
            </p>
            <h2
              className="text-2xl font-bold text-[#800000] md:text-4xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              प्रमाण एवं <span className="text-[#C2A95B]">अभिलेख</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {inscriptions.map((ins) => (
              <div
                key={ins.label}
                className="group relative overflow-hidden rounded-2xl border border-[#C2A95B]/25 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#C2A95B] hover:shadow-md md:p-8"
              >
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C2A95B]/40 bg-[#C2A95B]/10 text-lg text-[#800000]">
                      📜
                    </span>
                    <h3
                      className="text-base font-bold text-[#800000] md:text-lg"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {ins.label}
                    </h3>
                  </div>

                  <div className="space-y-2 border-l-2 border-[#C2A95B]/40 pl-4">
                    {ins.lines.map((line, idx) => (
                      <p
                        key={idx}
                        className="text-xs font-light italic leading-relaxed text-[#800000]/80 md:text-sm"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE GALLERY STRIP — 3 spaces
      ====================================================== */}
      <section className="relative z-10 px-5 py-8 md:px-12 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {[
              { label: "गर्भगृह", src: "/history/garbhagriha.jpg", icon: "🛕" },
              { label: "प्रवेश द्वार", src: "/history/entrance.jpg", icon: "🚪" },
              { label: "चारदीवारी", src: "/history/wall.jpg", icon: "🧱" },
            ].map((img, i) => (
              <div
                key={img.label}
                className={`relative aspect-square overflow-hidden rounded-2xl border border-[#C2A95B]/25 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md ${
                  i === 2 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <span className="text-3xl text-[#C2A95B] md:text-4xl">
                    {img.icon}
                  </span>
                  <p
                    className="text-[10px] uppercase tracking-[0.25em] text-[#800000]/50 md:text-xs"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HISTORICAL CONTEXT — Aurangzeb era & oath
      ====================================================== */}
      <section className="relative z-10 px-5 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-[#C2A95B]/25 bg-white p-6 shadow-sm md:p-10">
            <div className="mb-6 text-center">
              <p
                className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                ऐतिहासिक पृष्ठभूमि
              </p>
              <h2
                className="text-2xl font-bold text-[#800000] md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                औरंगजेब काल में <span className="text-[#C2A95B]">निर्माण</span>
              </h2>
            </div>

            <div
              className="space-y-4 text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              <p>
                <span className="mr-2 text-[#C2A95B]">•</span>
                शिलालेख में <strong className="font-medium text-[#800000]">"श्री राम राज्य"</strong>{" "}
                लिखने का तात्पर्य आरंभिक संबोधन तो माना जा सकता है, लेकिन यह
                संकेत भी मिलता है कि मंदिर का निर्माण औरंगजेब काल में भी निर्विघ्न
                संपन्न हुआ।
              </p>
              <p>
                <span className="mr-2 text-[#C2A95B]">•</span>
                निश्चय ही बोड़ेया और आस-पास का वातावरण शांतिपूर्ण रहा होगा।
              </p>
              <p>
                <span className="mr-2 text-[#C2A95B]">•</span>
                नागवंशी राजा का काल मुगल सल्तनत के आतंक से दूर रहा होगा और यहाँ
                मंदिर निर्माण में पंडित श्री लक्ष्मी नारायण तिवारी जी को
                निष्कलंक, निष्कंटक, निश्शंक व विमल परिवेश मिला होगा।
              </p>
            </div>

            {/* Oath callout */}
            <div className="mt-8 rounded-2xl border-l-4 border-[#C2A95B] bg-[#C2A95B]/[0.08] p-5 md:p-6">
              <p
                className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C2A95B]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                शिलालेख में अंकित शपथ
              </p>
              <p
                className="text-sm font-light italic leading-relaxed text-[#800000]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                जो कोई हिंदू मंदिर के दरवाजे और चारदीवारी को किसी भी प्रकार से
                ढाहने का प्रयत्न करेगा, उसे गाय के रक्त पान का, ब्राह्मण हत्या
                का और गुरू की हत्या का पाप लगेगा। जो कोई मुसलमान नुकसान पहुँचाने
                का प्रयास करेगा, उसे सूअर खाने का, आखुर मारने का और किसी पीर की
                थाली में सूअर माँस परोसने का घोर पाप लगेगा।
              </p>
              <p
                className="mt-3 text-xs font-light text-[#800000]/60"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                — लक्ष्मीनारायण तिवारी द्वारा लिखवाया गया। कारीगर अनिरुद्ध ने
                इसे सत्य कहा।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TAMRAPATRA — copper plate grant
      ====================================================== */}
      <section className="relative z-10 px-5 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
            {/* IMAGE SPACE — Tamrapatra */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#C2A95B]/25 bg-white shadow-sm">
                <Image
                  src="/history/tamrapatra.jpg"
                  alt="ताम्रपत्र"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <span className="text-4xl text-[#C2A95B]">🪙</span>
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] text-[#800000]/50"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Tamrapatra
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p
                className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                राजकीय दान
              </p>

              <h2
                className="mb-5 text-2xl font-bold text-[#800000] md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                ताम्रपत्र <span className="text-[#C2A95B]">(संवत 1733)</span>
              </h2>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]" />
                <span className="text-sm text-[#C2A95B]">✦</span>
                <span className="h-px w-10 bg-[#C2A95B]" />
              </div>

              <div
                className="space-y-4 text-sm font-light leading-relaxed text-[#800000]/80 md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                <p>
                  <span className="mr-2 text-[#C2A95B]">•</span>
                  लक्ष्मीनारायण तिवारी को राजा द्वारा प्रदत्त ताम्रपत्र अभी भी
                  बोड़ेया के तिवारी परिवार में सुरक्षित है — दो टुकड़ों में।
                </p>
                <p>
                  <span className="mr-2 text-[#C2A95B]">•</span>
                  संवत 1733 (1682 ई.) के माघ शुक्ल पक्ष त्रयोदशी को महाराजा
                  श्री रघुनाथ शाही ने लक्ष्मीनारायण तिवारी को बोड़ेया ग्राम
                  देवोत्तर रूप में प्रदान किया — जल, वृक्ष, प्रजा सहित चारों
                  सीमाओं तक।
                </p>
                <p className="text-xs text-[#800000]/60 md:text-sm">
                  <span className="mr-2 text-[#C2A95B]">•</span>
                  यह ताम्रपत्र उस समय सौंपा गया जब मंदिर निर्माण चल रहा था —
                  प्राप्ति के छह वर्ष पश्चात्, 1682 ई. में मंदिर पूर्ण हुआ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NAGVANSHI KINGS TIMELINE
      ====================================================== */}
      <section className="relative z-10 px-5 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p
              className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              नागवंशी राजवंश
            </p>
            <h2
              className="text-2xl font-bold text-[#800000] md:text-4xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              राजाओं का <span className="text-[#C2A95B]">कालक्रम</span>
            </h2>
          </div>

          <div className="space-y-4">
            {kings.map((k, i) => (
              <div
                key={k.name}
                className="group flex flex-col gap-3 rounded-2xl border border-[#C2A95B]/25 bg-white p-5 shadow-sm transition-all duration-500 hover:border-[#C2A95B] hover:shadow-md sm:flex-row sm:items-center sm:gap-6 md:p-6"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#C2A95B]/40 bg-[#C2A95B]/10 text-lg font-bold text-[#800000]">
                  {i + 1}
                </span>

                <div className="flex-1">
                  <h3
                    className="mb-1 text-base font-bold text-[#800000] md:text-lg"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {k.name}
                  </h3>
                  <p
                    className="text-xs font-light text-[#800000]/70 md:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {k.note}
                  </p>
                </div>

                <span
                  className="self-start rounded-full border border-[#C2A95B]/40 bg-[#C2A95B]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#800000] sm:self-center md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {k.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOURCES / REFERENCES
      ====================================================== */}
      <section className="relative z-10 px-5 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-[#C2A95B]/25 bg-white p-6 md:p-10">
            <div className="mb-6 text-center">
              <h2
                className="text-xl font-bold text-[#800000] md:text-3xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                संदर्भ <span className="text-[#C2A95B]">ग्रंथ</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {sources.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[#C2A95B]/30 bg-white px-4 py-2 text-xs font-light text-[#800000]/80 transition-all duration-300 hover:border-[#C2A95B] hover:bg-[#C2A95B]/10 hover:text-[#800000] md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING BANNER
      ====================================================== */}
      <section className="relative z-10 px-5 pb-20 pt-8 md:px-12 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#C2A95B]/60" />
            <span className="text-[#C2A95B]">✦</span>
            <span className="h-px w-16 bg-[#C2A95B]/60" />
          </div>

          <p
            className="text-sm font-light italic leading-relaxed text-[#800000]/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            17वीं शताब्दी में औरंगजेब के शासनकाल में, छोटानागपुर के नागवंशी
            राजाओं के संरक्षण में, लक्ष्मीनारायण तिवारी के संकल्प से यह मंदिर
            बना — आज भी भक्तों को श्री मदन मोहन जी के दर्शन का पुण्य प्रदान करता
            है।
          </p>

          <p
            className="mt-6 text-lg font-bold text-[#800000] md:text-2xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            श्री मदन मोहन जी
          </p>
        </div>
      </section>
    </main>
  );
}
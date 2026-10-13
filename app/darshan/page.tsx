import {
  Cinzel_Decorative,
  Plus_Jakarta_Sans,
  Tiro_Devanagari_Hindi,
  Noto_Sans_Devanagari,
} from "next/font/google";

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

const tiroHindi = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-tiro-hindi",
});

const notoHindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-hindi",
});

/* ============================================================
   DATA
============================================================ */

const darshanTimings = [
  {
    name: "Baal Bhog (Morning)",
    hindiName: "बाल भोग (प्रातःकाल)",
    time: "9:00 AM",
    hindiDescription:
      "विधिपूर्वक पूजन के पश्चात सूखे मेवे, मूँगफली, मिश्री, इलाइची दाना, फल, मिष्ठान्न एवं दूध निर्मित वस्तुएँ भोग के रूप में चढ़ाई जाती हैं। आरती एवं प्रार्थना के बाद भक्तों के बीच प्रसाद वितरित किया जाता है।",
    icon: "🌅",
  },
  {
    name: "Mahabhog (Afternoon)",
    hindiName: "महाभोग (दोपहर)",
    time: "1:00 PM",
    hindiDescription:
      "पुजारी परिवार द्वारा पवित्र एवं प्रसन्न भाव से नैवेद्य तैयार किया जाता है — अरवा चावल का भात, दाल, सब्जियाँ और खीर आदि का नैवेध मदन मोहन स्वामी को अर्पित किया जाता है।",
    icon: "🍛",
  },
  {
    name: "Baal Bhog (Evening)",
    hindiName: "बाल भोग (सायंकाल)",
    time: "7:00 PM",
    hindiDescription:
      "सायंकालीन भोग में सूखे मेवे, मूँगफली, मिश्री, इलाइची दाना, फल, मिष्ठान्न एवं दूध निर्मित वस्तुएँ विधिपूर्वक पूजन के पश्चात अर्पित की जाती हैं और प्रसाद रूप में वितरित की जाती हैं।",
    icon: "🌸",
  },
  {
    name: "Mahabhog (Night)",
    hindiName: "महाभोग (रात्रि)",
    time: "9:00 PM",
    hindiDescription:
      "भगवान के शयन काल के पूर्व विविध प्रकार के पकवान — पुआ-पूड़ी, दूध-रोटी, खीर-रोटी आदि — अंतिम भोग के रूप में अर्पित किए जाते हैं।",
    icon: "🌙",
  },
];

const bhogTypes = [
  {
    title: "Baal Bhog",
    hindi: "बाल भोग",
    time: "9:00 AM & 7:00 PM",
    hindiDescription:
      "सूखे मेवे, मूँगफली, मिश्री, इलाइची दाना, फल, मिष्ठान्न एवं दूध निर्मित वस्तुओं का हल्का सात्विक भोग। विधिपूर्वक पूजन के पश्चात अर्पित किया जाता है और आरती के बाद भक्तों में वितरित किया जाता है।",
    hindiItems: ["सूखे मेवे", "मिश्री-इलाइची", "ताज़े फल", "दुग्ध मिष्ठान्न"],
  },
  {
    title: "Mahabhog",
    hindi: "महाभोग",
    time: "1:00 PM & 9:00 PM",
    hindiDescription:
      "पुजारी परिवार द्वारा श्रद्धा से तैयार पूर्ण नैवेद्य — दोपहर में अरवा चावल का भात, दाल, सब्जियाँ एवं खीर; रात्रि में भगवान के शयन काल से पूर्व पुआ-पूड़ी, दूध-रोटी एवं खीर-रोटी अर्पित की जाती है।",
    hindiItems: ["अरवा चावल-दाल", "मौसमी सब्जी", "खीर", "पुआ-पूड़ी"],
  },
];

const vyavasthaPoints = [
  {
    hindiTitle: "वंश परंपरा से सेवा",
    hindiText:
      "मंदिर में पूजन व्यवस्था लक्ष्मी नारायण तिवारी के वंशजों द्वारा की जाती है, जो पीढ़ियों से मदन मोहन स्वामी की सेवा करते आ रहे हैं।",
  },
  {
    hindiTitle: "पारी / बारी व्यवस्था",
    hindiText:
      "प्रत्येक परिवार पारी/बारी व्यवस्था से प्रतिबद्ध एवं आबद्ध है। भोग के लिए सभी की तिथि निश्चित है, जिस दिन उक्त परिवार द्वारा नकद राशि या कच्ची सामग्री मंदिर के पुजारी तक पहुँचा दी जाती है।",
  },
  {
    hindiTitle: "नवान्न का प्रथम अर्पण",
    hindiText:
      "किसी भी प्रकार का नवान्न एवं नई सब्जी मंदिर को प्रथमतः अर्पित कर ही स्वयं उपयोग किया जाता है।",
  },
  {
    hindiTitle: "पर्व एवं संस्कार सेवा",
    hindiText:
      "त्योहारों या विशिष्ट संस्कारों के अवसर पर प्रत्येक परिवार मंदिर के लिए पकवान बनाकर नैवेद्य रूप में पहुँचाता है, जिसका विधिवत मदन मोहन स्वामी को भोग अर्पित किया जाता है।",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function DarshanPage() {
  return (
    <main
      className={`${cinzel.variable} ${jakarta.variable} ${tiroHindi.variable} ${notoHindi.variable} w-full`}
    >
      {/* ============================================================
          SECTION 3 — DARSHAN TIMINGS
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-20 md:py-28 max-sm:pt-30">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

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

            {/* Hindi heading */}
            <p
              className="mt-3 text-xl text-[#C2A95B] md:text-3xl"
              style={{ fontFamily: "var(--font-tiro-hindi)" }}
            >
              दर्शन एवं भोग समय
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            {/* Pandit Name */}
            <p
              className="mx-auto mt-4 max-w-2xl text-center text-md font-light leading-relaxed text-[#C2A95B] md:text-xl"
              style={{ fontFamily: "var(--font-noto-hindi)" }}
            >
              वर्तमान में इस मंदिर में पूजा अर्चना करने वाले ब्राह्मण हैं{" "}
              <span className="font-semibold">पंडित प्रमोहित पाण्डेय</span>
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {darshanTimings.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl border border-[#C2A95B]/25 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] md:p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="text-2xl md:text-3xl">{item.icon}</span>
                  <span
                    className="rounded-full font-bold px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[#800000] bg-[#C2A95B] md:text-[10px]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.time} - Daily
                  </span>
                </div>

                <h3
                  className="mb-1 text-base font-bold leading-snug text-[#FFF8E7] md:text-lg"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {item.hindiName}
                </h3>

                <div className="mb-3 h-px w-12 bg-[#C2A95B]/50 transition-all duration-300 group-hover:w-20" />

                {/* Hindi description */}
                <p
                  className="border-t border-[#C2A95B]/15 pt-3 text-md leading-relaxed text-[#FFF8E7]/60"
                  style={{ fontFamily: "var(--font-noto-hindi)" }}
                >
                  {item.hindiDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — POOJAN PARAMPARA
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

        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#800000]/5 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* ---------- Heading ---------- */}
          <div className="mb-16 text-center">
            <h2
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Sacred <span className="text-[#C2A95B]">Tradition</span> of Bhog
            </h2>

            {/* Hindi heading */}
            <p
              className="mt-3 text-xl text-[#800000]/80 md:text-3xl"
              style={{ fontFamily: "var(--font-tiro-hindi)" }}
            >
              भोग की पवित्र परंपरा
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            {/* Hindi intro line */}
            <p
              className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#800000]/70 md:text-xl"
              style={{ fontFamily: "var(--font-noto-hindi)" }}
            >
              मदन मोहन मंदिर में प्रतिदिन{" "}
              <span className="font-semibold text-[#C2A95B]">चार बार</span>{" "}
              विधिपूर्वक भोग लगाने की प्रथा है — यह एक जीवित परंपरा है, जिसे
              पुजारी परिवार एवं आस-पड़ोस के ग्रामवासी पीढ़ियों से निभाते आ रहे हैं।
            </p>
          </div>

          {/* ---------- Bhog Types: two large cards ---------- */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 md:gap-8">
            {bhogTypes.map((b) => (
              <div
                key={b.title}
                className="group relative overflow-hidden rounded-3xl border border-[#C2A95B]/30 bg-white/80 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl md:p-9"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#C2A95B]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:-right-16 md:-top-16 md:h-40 md:w-40" />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-center">
                    <span
                      className="rounded-full border border-[#C2A95B]/40 bg-[#C2A95B]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C2A95B] md:px-4 md:text-xs"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {b.time}
                    </span>
                  </div>

                  {/* Hindi label */}
                  <p
                    className="mb-4 text-2xl font-bold text-[#C2A95B] md:text-3xl"
                    style={{ fontFamily: "var(--font-tiro-hindi)" }}
                  >
                    {b.hindi}
                  </p>

                  <div className="mb-5 h-px w-16 bg-[#C2A95B]/50 transition-all duration-500 group-hover:w-24" />

                  {/* Hindi description */}
                  <p
                    className="mb-6 border-t border-[#C2A95B]/15 pt-4 text-sm leading-relaxed text-[#800000]/70 md:text-base"
                    style={{ fontFamily: "var(--font-noto-hindi)" }}
                  >
                    {b.hindiDescription}
                  </p>

                  {/* Items chips — Hindi */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {b.hindiItems.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-[#C2A95B]/25 bg-[#C2A95B]/[0.08] px-3 py-1 text-[10px] font-medium tracking-wide text-[#800000]/80 md:text-xs"
                        style={{ fontFamily: "var(--font-noto-hindi)" }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- Poojan Vyavastha: divider heading ---------- */}
          <div className="mb-10 text-center">
            <h3
              className="text-4xl font-bold text-[#800000] md:text-6xl"
              style={{ fontFamily: "var(--font-tiro-hindi)" }}
            >
              पूजन <span className="text-[#C2A95B]">व्यवस्था</span>
            </h3>

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C2A95B]" />
              <span className="text-sm text-[#C2A95B]">✦</span>
              <span className="h-px w-10 bg-[#C2A95B]" />
            </div>
          </div>

          {/* ---------- Vyavastha Grid ---------- */}
          <div className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {vyavasthaPoints.map((p) => (
              <div
                key={p.hindiTitle}
                className="group relative overflow-hidden rounded-2xl border border-[#C2A95B]/25 bg-white/70 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C2A95B] hover:bg-white hover:shadow-lg"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#C2A95B] to-[#a88f45] transition-all duration-500 group-hover:w-full" />

                <h4
                  className="mb-3 text-base font-bold text-[#800000] md:text-lg text-center"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {p.hindiTitle}
                </h4>

                {/* Hindi description */}
                <p
                  className="border-t border-[#C2A95B]/15 pt-3 text-xs leading-relaxed text-[#800000]/60 md:text-sm"
                  style={{ fontFamily: "var(--font-noto-hindi)" }}
                >
                  {p.hindiText}
                </p>
              </div>
            ))}
          </div>

          {/* ---------- Akhanda Aastha — closing devotional block ---------- */}
          <div className="relative overflow-hidden rounded-3xl border border-[#C2A95B]/35 bg-gradient-to-br from-[#800000] to-[#5c0000] p-8 md:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
                backgroundSize: "26px 26px",
              }}
            />

            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#C2A95B]/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#C2A95B]/15 blur-[100px]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block text-3xl text-[#C2A95B] md:text-4xl">
                ✦
              </span>

              <h3
                className="mb-3 text-2xl font-bold leading-tight text-[#FFF8E7] md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Akhanda <span className="text-[#C2A95B]">Aastha</span>
              </h3>

              <p
                className="mb-5 text-xl text-[#C2A95B] md:text-2xl"
                style={{ fontFamily: "var(--font-tiro-hindi)" }}
              >
                अखण्ड आस्था
              </p>

              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C2A95B]/70" />
                <span className="text-sm text-[#C2A95B]">✦</span>
                <span className="h-px w-10 bg-[#C2A95B]/70" />
              </div>

              <p
                className="mb-5 border-t border-[#C2A95B]/25 pt-5 text-sm leading-relaxed text-[#FFF8E7]/85 md:text-2xl"
                style={{ fontFamily: "var(--font-noto-hindi)" }}
              >
                बोड़ेया एवं आस-पड़ोस के ग्रामवासी मदन मोहन के अटूट भक्त हैं।
                इनके प्रति सबकी अखण्ड आस्था है और सभी लोग मदन मोहन को अपने
                हृदय में बसाये रखते हैं।
              </p>

              <p
                className="text-base font-light italic leading-relaxed text-[#C2A95B] md:text-lg"
                style={{ fontFamily: "var(--font-tiro-hindi)" }}
              >
                “मदन मोहन केवल मंदिर में नहीं, बल्कि बोड़ेया के प्रत्येक भक्त
                के हृदय में विराजमान हैं।”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
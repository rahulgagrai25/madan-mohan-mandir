import {
  Cinzel_Decorative,
  Plus_Jakarta_Sans,
  Tiro_Devanagari_Hindi,
  Noto_Sans_Devanagari,
} from "next/font/google";
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

const upcomingFestivals = [
  {
    name: "होली",
    nameEn: "Holi",
    tag: "रंगों का उत्सव",
    text: "मदन मोहन मंदिर में भगवान को अबीर घुले जल से अभिषेक कराया जाता है। लक्ष्मी नारायण तिवारी के वंशज पहले मंदिर परिसर के भीतर मदन मोहन स्वामी पर अबीर चढ़ाते हैं, तत्पश्चात सिंहासन सहित भगवान को डोल चबूतरे पर ले जाया जाता है, जहाँ समस्त ग्रामवासी एवं अन्य श्रद्धालुगण सबसे पहले मदन मोहन पर अबीर अर्पित करते हैं। इसके बाद ही अपने मित्रों एवं परिजनों को अबीर लगाते हैं। इस दिन मदन मोहन परिसर बोड़ेया का प्रमुख सांस्कृतिक केन्द्र बन जाता है।",
    image: "/events/holi.png",
    highlight: true,
  },
  {
    name: "जन्माष्टमी",
    nameEn: "Janmashtami",
    tag: "श्री कृष्ण का जन्म",
    text: "श्री कृष्ण अर्थात मदन मोहन स्वामी का जन्म भाद्रपद कृष्णपक्ष अष्टमी, बुधवार, रोहिणी नक्षत्र, वृष के चन्द्रमा में आधी रात को हुआ था। यह जन्म हुआ था मथुरा में, लेकिन सम्पूर्ण देश इस जन्माष्टमी को मनाता है। बोड़ेया मदन मोहन मंदिर में प्रत्येक भादो कृष्ण अष्टमी की रात्रि में भगवान की विशेष पूजा-अर्चना की जाती है। यह त्योहार प्रतिवर्ष सम्पन्न होता है।",
    image: "/events/janmashtami.png",
  },
  {
    name: "दीवाली",
    nameEn: "Diwali",
    tag: "दीपों का पर्व",
    text: "सम्पूर्ण भारत में कार्तिक अमावश्या को दीवाली मनायी जाती है। यह लक्ष्मी पूजन का दिन होता है। इसमें दीप दान किया जाता है, अतः इसे दियेवाली अमावश्या भी कहते हैं। यह लक्ष्मी के आगमन का सूचक होता है। इस रात्रि में बोड़ेया के मदन मोहन मंदिर को दीपों से पूरी तरह सजाया जाता है। यह मंदिर देखने योग्य हो उठता है। इसकी भव्यता निखर आती है और लोग हर्षित हो उठते हैं।",
    image: "/events/diwali.png",
  },
  {
    name: "देवोत्थान",
    nameEn: "Devotthan",
    tag: "प्रबोधिनी एकादशी",
    text: "कहा गया है कार्तिक शुक्ल एकादशी के दिन विष्णु अपनी शेष शय्या पर से उठते हैं। इस दिन मंदिर प्रांगन में अनेक व्रती पूजा-पाठ के लिए आते हैं। इसी पूजा के बाद समस्त शुभ कार्यों की शुरूआत हो जाती है।",
    image: "/events/ekadashi.png",
  },
  {
    name: "रास",
    nameEn: "Raas",
    tag: "रासलीला",
    text: "अगहन मास की पूर्णिमा तिथि के दिन रास मनाया जाता है। रास का तात्पर्य है रस का बहुवचन। दूसरा अर्थ है 'ब्रह्म'। तीसरे अर्थ के रूप में गोपिकाओं और कृष्ण के सम्मिलित रूप को रास कहा जाता है। सोलहवीं शती में बल्लभाचार्य तथा हित हरिवंश ने इसी श्रंगार मूलक रास में धर्म के अंग के साथ नृत्य की पुनःस्थापना की तथा उसका नेता रासरसिक शिरोमणी श्री कृष्ण को बनाया। बोड़ेया में इस दिन मंदिर परिसर कृष्ण प्रधान लोक गीतों एवं वाद्यों से गूंज उठता है।",
    image: "/events/raas.png",
  },
  {
    name: "सत्यनारायण कथा",
    nameEn: "Satyanarayan Katha",
    tag: "प्रत्येक पूर्णिमा",
    text: "मंदिर परिसर में प्रत्येक पूर्णिमा को सत्यनारायण कथा का आयोजन किया जाता है। श्रद्धालु, भक्त एवं प्रेमी लोग आरती प्रसाद के लिए पूरी कथा का श्रवण करते हैं, तत्पश्चात स्तुति कर ही प्रस्थान करते हैं। इसमें कोई भी व्यक्ति शामिल हो सकता है तथा व्यक्तिगत पूजा का आयोजन भी कर सकता है।",
    image: "/events/satya.png",
  },
  {
    name: "अन्नप्राशन",
    nameEn: "Annaprashan",
    tag: "संस्कार",
    text: "मनुस्मृति के अनुसार मनुष्य के सोलह संस्कारों में एक यह भी है जिसमें बच्चे को सर्वप्रथम अन्न चटाया जाता है। यह संस्कार लड़के का छठे या आठवें महीने में तथा लड़की का पाँचवें या सातवें महीने में किया जाता है। लक्ष्मी नारायण तिवारी के वंशजों का अन्नप्राशन संस्कार इसी प्रांगण में सम्पन्न होता है। इसी परिसर में मुण्डन एवं विवाह संस्कार भी सम्पन्न होता रहा है।",
    image: "/events/ann.png",
  },
];

const calendar = [
  {
    month: "January",
    events: [
      { date: "14 Jan", name: "Makar Sankranti", note: "Sun enters Capricorn — special aarti" },
      { date: "26 Jan", name: "Republic Day Kirtan", note: "Morning bhajan & flag offering" },
    ],
  },
  {
    month: "February",
    events: [
      { date: "02 Feb", name: "Vasant Panchami", note: "Saraswati puja and yellow shringar" },
      { date: "12 Feb", name: "Magha Purnima", note: "Full-moon lamp offering" },
    ],
  },
  {
    month: "March",
    events: [
      { date: "04 Mar", name: "Holi", note: "Festival of colours — temple courtyard celebration" },
      { date: "26 Mar", name: "Ram Navami", note: "Birth of Lord Rama — day-long kirtan" },
    ],
  },
  {
    month: "April",
    events: [
      { date: "08 Apr", name: "Chaitra Navratri", note: "Nine nights of Devi bhajan" },
      { date: "16 Apr", name: "Ram Navami Aarti", note: "Special evening aarti" },
    ],
  },
  {
    month: "May",
    events: [
      { date: "10 May", name: "Akshaya Tritiya", note: "Auspicious day of eternal prosperity" },
      { date: "21 May", name: "Narasimha Jayanti", note: "Evening kirtan" },
    ],
  },
  {
    month: "June",
    events: [
      { date: "05 Jun", name: "Ganga Dussehra", note: "River offering ceremony" },
      { date: "28 Jun", name: "Snan Yatra", note: "The Lord's ceremonial bath" },
    ],
  },
  {
    month: "July",
    events: [
      { date: "10 Jul", name: "Guru Purnima", note: "Honouring the spiritual lineage" },
      { date: "16 Jul", name: "Rath Yatra", note: "Chariot procession through Boreya" },
    ],
  },
  {
    month: "August",
    events: [
      { date: "05 Aug", name: "Jhulan Yatra", note: "The Lord swings on a flower-decorated swing" },
      { date: "09 Aug", name: "Raksha Bandhan", note: "Sacred thread offering" },
    ],
  },
  {
    month: "September",
    events: [
      { date: "04 Sep", name: "Janmashtami", note: "Krishna's birth — night-long celebration" },
      { date: "16 Sep", name: "Radhashtami", note: "Appearance of Shri Radha" },
    ],
  },
  {
    month: "October",
    events: [
      { date: "25 Oct", name: "Sharad Purnima", note: "Rasa Lila night under the full moon" },
      { date: "29 Oct", name: "Karwa Chauth", note: "Evening aarti for married couples" },
    ],
  },
  {
    month: "November",
    events: [
      { date: "08 Nov", name: "Annakut", note: "The great mountain of food offering" },
      { date: "09 Nov", name: "Govardhan Puja", note: "Remembrance of the lifting of the hill" },
      { date: "11 Nov", name: "Bhai Dooj", note: "Sisters offer prayers for brothers" },
    ],
  },
  {
    month: "December",
    events: [
      { date: "20 Dec", name: "Vaikuntha Ekadashi", note: "Night-long kirtan and fast" },
      { date: "30 Dec", name: "Gita Jayanti", note: "Reading of the Bhagavad Gita" },
    ],
  },
];

const garbhagrihaRules = [
  {
    title: "कन्या विवाह पर",
    tag: "विदाई के पूर्व",
    text: "परिवार में किसी कन्या के विवाह होने पर विदाई के पूर्व गर्भगृह में नव दम्पत्ति प्रवेश कर पूजन करते हैं जिसमें कन्या राधा रानी को सिंदूर अर्पित करती है। इसके बाद प्रवेश की मनाही है।",
  },
  {
    title: "वर विवाह पर",
    tag: "कुलदेवी पूजन के दिन",
    text: "जब परिवार में किसी लड़के का विवाह होता है तो बारात लौटने पर कुलदेवी पूजन के दिन पूजा के पश्चात नवदम्पति गर्भ गृह प्रवेश कर पूजा करते हैं तथा राधारानी को सिंदूर अर्पित करते हैं। इसके बाद वह बहू फिर कभी गर्भगृह में कदम नहीं रखती है।",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function EventsPage() {
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
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Celebrations at Boreya
            </p>

            <h1
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Festivals &amp; <span className="text-[#C2A95B]">Events</span>
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
              For over three centuries, the Madan Mohan Mandir has kept time
              not by the calendar of the world, but by the rhythm of devotion —
              the songs, lamps and offerings that mark the year.
            </p>
          </div>

          {/* ---------- Featured image ---------- */}
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C2A95B]/30" />
            <div className="absolute -inset-6 rounded-[2.5rem] border border-[#C2A95B]/10" />

            <div className="relative h-[320px] w-full overflow-hidden rounded-[1.75rem] bg-[#800000] md:h-[460px]">
              <Image
                src="/gallery/festival-1.png"
                alt="Festival celebration at Madan Mohan Temple"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-center md:p-10">
                <p
                  className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#C2A95B] md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  A Living Calendar of Devotion
                </p>
                <h2
                  className="text-2xl font-bold text-white md:text-4xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  The Year in Celebration
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — FESTIVALS & SANSKARS (Devanagari fonts)
      ============================================================ */}
      <section
        className={`${tiro.variable} ${noto.variable} relative w-full overflow-hidden bg-[#FFF8E7] py-16 md:py-28`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
          <div className="mb-10 text-center md:mb-14">
            <p
              className="mb-2 text-xs font-medium text-[#C2A95B] md:mb-3 md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              मंदिर से जुड़े त्योहार / संस्कार
            </p>

            <h2
              className="text-2xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-tiro)" }}
            >
              आगामी <span className="text-[#C2A95B]">त्योहार</span>
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
            </div>

            <p
              className="mx-auto mt-4 max-w-2xl text-xs font-light leading-relaxed text-[#800000]/70 md:mt-6 md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              बोड़ेया मदन मोहन मंदिर में वर्षभर अनेक त्योहार एवं संस्कार
              सम्पन्न होते हैं। यहाँ प्रत्येक पर्व भक्ति, परंपरा और समुदाय की
              भावना से जुड़ा हुआ है।
            </p>
          </div>

          {/* ---------- Responsive grid: 2 cols mobile → 2 cols sm → 3 cols lg ---------- */}
          <div className="grid grid-cols-2 gap-2 sm:gap-5 lg:grid-cols-3 md:gap-6">
            {upcomingFestivals.map((festival) => (
              <div
                key={festival.name}
                className={`group relative h-[270px] overflow-hidden rounded-xl border shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl sm:h-[460px] sm:rounded-2xl ${
                  festival.highlight
                    ? "border-[#C2A95B]"
                    : "border-[#C2A95B]/30 hover:border-[#C2A95B]"
                }`}
              >
                <Image
                  src={festival.image}
                  alt={festival.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/85 via-[#800000]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-2 right-2 top-2 flex items-start justify-between gap-1 sm:left-4 sm:right-4 sm:top-4">
                  <span
                    className="rounded-full border border-[#C2A95B]/60 bg-black/40 px-2 py-[3px] text-[8px] tracking-[0.05em] text-[#C2A95B] backdrop-blur-sm sm:px-3 sm:py-1 sm:text-[11px] md:text-[12px]"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    {festival.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-5 md:p-6">
                  <div className="mb-1.5 h-px w-8 bg-[#C2A95B] transition-all duration-500 group-hover:w-16 sm:mb-3 sm:w-10" />

                  <h3
                    className="mb-0.5 text-sm font-bold leading-tight text-white sm:mb-1 sm:text-2xl md:text-3xl"
                    style={{ fontFamily: "var(--font-tiro)" }}
                  >
                    {festival.name}
                  </h3>

                  <p
                    className="mb-1 inline-block bg-[#800000]/60 px-1 py-[2px] text-[7px] tracking-[0.1em] text-[#C2A95B]/90 sm:mb-2 sm:px-1 sm:py-1 sm:text-[10px]"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    {festival.nameEn}
                  </p>

                  <p
                    className="line-clamp-3 text-[9px] leading-snug text-white/85 sm:line-clamp-none sm:text-[13px] sm:leading-relaxed md:text-sm"
                    style={{ fontFamily: "var(--font-noto)" }}
                  >
                    {festival.text}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#C2A95B]/60 sm:rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — ANNUAL CALENDAR
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C2A95B]/20 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#C2A95B]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Through the Year
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#FFF8E7] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Annual <span className="text-[#C2A95B]">Calendar</span>
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
              The temple follows the traditional Hindu lunar calendar. Below
              are the major observances of each month with their dates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {calendar.map((month, i) => (
              <div
                key={month.month}
                className="group rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] sm:rounded-2xl sm:p-5 md:p-6"
              >
                <div className="mb-3 flex items-center justify-between gap-2 sm:mb-5">
                  <h3
                    className="text-sm font-bold leading-tight text-[#FFF8E7] sm:text-lg md:text-2xl"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {month.month}
                  </h3>
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C2A95B]/50 text-[9px] font-bold text-[#C2A95B] sm:h-8 sm:w-8 sm:text-xs md:h-9 md:w-9 md:text-sm"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="h-px w-full bg-[#C2A95B]/20" />

                <ul className="mt-3 space-y-3 sm:mt-5 sm:space-y-4">
                  {month.events.map((event) => (
                    <li key={event.name}>
                      <div className="mb-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span
                          className="inline-flex shrink-0 items-center rounded-md border border-[#C2A95B]/40 bg-[#C2A95B]/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.05em] text-[#C2A95B] sm:px-2 sm:text-[10px] sm:tracking-[0.1em] md:text-[11px]"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          {event.date}
                        </span>
                      </div>
                      <p
                        className="text-[11px] font-bold leading-tight text-[#FFF8E7] sm:text-sm"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {event.name}
                      </p>
                      <p
                        className="mt-0.5 text-[9px] leading-snug text-[#FFF8E7]/60 sm:text-[11px] md:text-xs"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {event.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — प्रवेश-निषेध (Garbhagriha Rules)
      ============================================================ */}
      <section
        className={`${tiro.variable} ${noto.variable} relative w-full overflow-hidden bg-white py-20 md:py-28`}
      >
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
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-10">
          <div className="mb-10 text-center md:mb-14">
            <p
              className="mb-2 text-xs font-medium text-[#C2A95B] md:mb-3 md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              परंपरा एवं नियम
            </p>

            <h2
              className="text-2xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-tiro)" }}
            >
              प्रवेश-<span className="text-[#C2A95B]">निषेध</span>
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
            </div>

            <p
              className="mx-auto mt-4 max-w-3xl text-sm font-light leading-relaxed text-[#800000]/75 md:mt-6 md:text-lg"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              मंदिर के गर्भगृह में पुजारी के अतिरिक्त किसी का भी प्रवेश निषेध
              है। विशेषकर महिलाओं के लिए (लक्ष्मी नारायण तिवारी के वंशजों में)
              गर्भगृह में प्रवेश पूर्णतः निषिद्ध है।
            </p>
          </div>

          {/* ---------- Two scenario cards ---------- */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {garbhagrihaRules.map((rule) => (
              <div
                key={rule.title}
                className="group relative overflow-hidden rounded-2xl border border-[#C2A95B]/30 bg-[#FFF8E7]/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-lg md:p-8"
              >
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rotate-45 bg-[#C2A95B]/10 transition-colors duration-300 group-hover:bg-[#C2A95B]/20" />

                <p
                  className="mb-2 text-[11px] tracking-[0.1em] text-[#C2A95B] md:text-sm"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  {rule.tag}
                </p>

                <h3
                  className="mb-3 text-xl font-bold leading-tight text-[#800000] md:text-3xl"
                  style={{ fontFamily: "var(--font-tiro)" }}
                >
                  {rule.title}
                </h3>

                <div className="mb-4 h-px w-12 bg-[#C2A95B]/60 transition-all duration-300 group-hover:w-20" />

                <p
                  className="text-sm leading-relaxed text-[#800000]/85 md:text-base"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  {rule.text}
                </p>
              </div>
            ))}
          </div>

          {/* ---------- Closing note ---------- */}
          <div className="mt-8 rounded-2xl border border-[#C2A95B]/30 bg-[#800000]/[0.03] p-5 md:mt-10 md:p-8">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-8 bg-[#C2A95B]" />
            </div>

            <p
              className="text-center text-sm leading-relaxed text-[#800000]/85 md:text-base"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              यह प्रथा तिवारी परिवार के लिए आदि काल से चली आ रही है। अन्य
              ग्रामीणों के बीच भी यह प्रचलित है कि कोई भी नववधू का प्रवेश घर में
              मदन मोहन स्वामी के दर्शन के पश्चात ही होता है। मदन मोहन स्वामी के
              प्रति ग्रामीणों के हृदय की यह श्रद्धा आह्लादकारी है।
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — CTA / CLOSING
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2A95B]/15 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
          <span className="text-lg text-[#C2A95B]">✦</span>

          <h2
            className="mt-6 text-2xl font-bold leading-tight text-[#FFF8E7] md:text-4xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Join Us at a{" "}
            <span className="text-[#C2A95B]">Celebration</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Whether you come for the great festivals or the quiet evening
            aarti, you are always welcome at the Madan Mohan Mandir. To offer
            seva, receive updates, or ask about a specific festival, please
            write to us.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:madanmohanmandir1665@gmail.com"
              className="rounded-full bg-[#C2A95B] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#800000] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4bc74] hover:shadow-lg md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Contact for Seva
            </a>

            <a
              href="/darshan"
              className="rounded-full border border-[#C2A95B] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#FFF8E7] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C2A95B] hover:text-[#800000] md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Plan a Darshan
            </a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#C2A95B]/40" />
            <span className="text-[#C2A95B]">✦</span>
            <span className="h-px w-16 bg-[#C2A95B]/40" />
          </div>
        </div>
      </section>
    </main>
  );
}
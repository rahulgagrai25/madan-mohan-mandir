"use client";

import { useState } from "react";
import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";

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

const donationTiers = [
  {
    amount: "501",
    label: "Deepa Seva",
    text: "Sponsor a day of ghee lamps offered at the evening aarti.",
    popular: false,
  },
  {
    amount: "1100",
    label: "Pushpa Seva",
    text: "Offer fresh flowers and garlands for the daily shringar of the deity.",
    popular: false,
  },
  {
    amount: "2501",
    label: "Bhog Seva",
    text: "Provide a full day's sattvic bhog offering to the Lord.",
    popular: false,
  },
  {
    amount: "5100",
    label: "Gau Seva",
    text: "Support the temple gaushala — fodder and care for the cows.",
    popular: false,
  },
  {
    amount: "11000",
    label: "Festival Seva",
    text: "Contribute to the celebration of a major festival like Janmashtami.",
    popular: false,
  },
  {
    amount: "25000",
    label: "Mandir Seva",
    text: "Support the upkeep, repairs and daily running of the temple.",
    popular: false,
  },
];

const sevaPurposes = [
  {
    icon: "🪔",
    title: "Daily Puja & Aarti",
    text: "Oil, ghee, wicks, camphor and flowers for the five daily aartis offered at the temple.",
  },
  {
    icon: "🌸",
    title: "Deity Shringar",
    text: "Fresh flowers, sandalwood paste and ornaments for the daily adornment of the Lord.",
  },
  {
    icon: "🍛",
    title: "Bhog & Prasad",
    text: "Sattvic food offerings prepared in the temple kitchen and distributed to devotees as prasad.",
  },
  {
    icon: "🛕",
    title: "Temple Upkeep",
    text: "Maintenance of the 17th-century structure, the courtyard and the boundary wall built in 1668.",
  },
  {
    icon: "🎉",
    title: "Festival Celebrations",
    text: "Support for Janmashtami, Radhashtami, Annakut and the other great festivals of the year.",
  },
  {
    icon: "🐄",
    title: "Gau Seva",
    text: "Fodder, shelter and medical care for the cows kept in the temple gaushala.",
  },
  {
    icon: "📚",
    title: "Scriptures & Study",
    text: "Preservation of temple texts, archival work and support for the study of the Bhakti tradition.",
  },
  {
    icon: "🍲",
    title: "Annadaan",
    text: "Free meals offered to pilgrims, visitors and those in need in the spirit of the temple's founding.",
  },
];

const paymentMethods = [
  {
    icon: "🏦",
    title: "Bank Transfer",
    lines: [
      "Account Name: Madan Mohan Mandir Trust",
      "Account No: 0000 1111 2222 3333",
      "IFSC: SBIN0001234",
      "Bank: State Bank of India, Kanke Branch",
    ],
  },
  {
    icon: "📱",
    title: "UPI",
    lines: [
      "UPI ID: madanmohan@upi",
      "Or scan the QR code at the temple counter",
      "Accepted apps: GPay, PhonePe, Paytm, BHIM",
    ],
  },
  {
    icon: "💳",
    title: "Online Payment",
    lines: [
      "Debit & Credit Cards accepted",
      "Net Banking available",
      "A receipt is issued for every donation",
    ],
  },
  {
    icon: "🙏",
    title: "In Person",
    lines: [
      "Visit the temple counter during darshan hours",
      "Cash and cheque accepted",
      "All offerings are recorded in the temple register",
    ],
  },
];

const transparency = [
  {
    title: "Every Rupee Accounted For",
    text: "All donations are recorded and used solely for the purposes of the temple and its seva activities.",
  },
  {
    title: "Annual Records",
    text: "The temple maintains annual records of income and expenditure, which are available to trustees and auditors.",
  },
  {
    title: "No Middlemen",
    text: "Your offering reaches the temple directly. There is no third party involved in the donation process.",
  },
  {
    title: "Tax Exemption",
    text: "The trust is registered under Section 80G. Please write to us for a certificate and further details.",
  },
];

const faqs = [
  {
    q: "Is my donation tax exempt?",
    a: "Yes, the Madan Mohan Mandir Trust is registered under Section 80G of the Income Tax Act. To receive a donation receipt and 80G certificate, please share your PAN and address after making your donation.",
  },
  {
    q: "Can I donate for a specific purpose?",
    a: "Absolutely. You can offer for a specific seva — daily puja, bhog, gau seva, festival celebration, or temple upkeep. Just mention your chosen purpose when making the donation.",
  },
  {
    q: "Will I receive a receipt?",
    a: "Yes. A receipt is issued for every donation, whether made online, by bank transfer, or in person at the temple counter. Please provide your details so we can send the receipt to you.",
  },
  {
    q: "Can I donate in memory of a loved one?",
    a: "Yes. Many devotees make offerings in memory of a departed family member or in honour of a special occasion. Please write to us and we will arrange the seva accordingly.",
  },
  {
    q: "How do I know my donation is being used well?",
    a: "The temple trust maintains records of all income and expenditure, and the accounts are reviewed annually. If you would like to know how your offering was used, please write to us.",
  },
  {
    q: "Can I donate from outside India?",
    a: "Currently, the temple accepts domestic donations within India. For foreign contributions, please contact us directly before making a transfer.",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>("2501");
  const [customAmount, setCustomAmount] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeAmount = customAmount || selectedTier || "";

  const handleTierClick = (amount: string) => {
    setSelectedTier(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value.replace(/[^0-9]/g, ""));
    setSelectedTier(null);
  };

  return (
    <main
      className={`${cinzel.variable} ${jakarta.variable} w-full pb-20 md:pb-0`}
    >
      {/* ============================================================
          SECTION 1 — HERO
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-24 max-sm:pt-30">
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
        <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#C2A95B]/5 blur-3xl md:h-[500px] md:w-[500px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#800000]/5 blur-3xl md:h-[500px] md:w-[500px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
          <div className="text-center">
            <p
              className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C2A95B] md:mb-3 md:text-xs md:tracking-[0.4em]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Dakshina · Seva · Offering
            </p>

            <h1
              className="text-2xl font-bold leading-tight text-[#800000] sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Support the <span className="text-[#C2A95B]">Temple</span>
            </h1>

            <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
              <span className="text-sm text-[#C2A95B] md:text-base">✦</span>
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
            </div>

            <p
              className="mx-auto mt-4 max-w-2xl text-xs font-light leading-relaxed text-[#800000]/70 md:mt-6 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              For over three centuries, the Madan Mohan Mandir has been kept
              alive by the love of ordinary devotees. Every lamp lit, every
              flower offered, every meal shared — is made possible by offerings
              like yours.
            </p>

            {/* Sanskrit blessing */}
            <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-[#C2A95B]/30 bg-[#FFF8E7] p-5 md:mt-10 md:p-8">
              <p
                className="text-xl font-bold leading-relaxed text-[#800000] md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                दानं परमं धर्मः
              </p>
              <div className="mx-auto my-3 flex items-center justify-center gap-3 md:my-4">
                <span className="h-px w-8 bg-[#C2A95B]/50" />
                <span className="text-xs text-[#C2A95B]">✦</span>
                <span className="h-px w-8 bg-[#C2A95B]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — DONATION TIERS
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E7] py-12 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
          <div className="mb-8 text-center md:mb-14">
            <p
              className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C2A95B] md:mb-3 md:text-xs md:tracking-[0.4em]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Choose Your Offering
            </p>

            <h2
              className="text-2xl font-bold leading-tight text-[#800000] sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Any Amount Is <span className="text-[#C2A95B]">Welcome</span>
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
              <span className="text-sm text-[#C2A95B] md:text-base">✦</span>
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
            </div>

            <p
              className="mx-auto mt-4 max-w-2xl text-xs font-light leading-relaxed text-[#800000]/70 md:mt-6 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Every offering, large or small, is received with equal gratitude.
            </p>
          </div>

          {/* ---------- Tiers ---------- */}
          {/* Mobile: 2-col grid (kept tight) | Tablet+: 3-col grid, smaller card sizes */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
            {donationTiers.map((tier) => {
              const isSelected = selectedTier === tier.amount;
              return (
                <button
                  key={tier.amount}
                  onClick={() => handleTierClick(tier.amount)}
                  className={`group relative flex flex-col overflow-hidden rounded-xl border p-3 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 md:p-4 md:hover:-translate-y-1 lg:p-5 ${
                    isSelected
                      ? "border-[#C2A95B] bg-[#800000] shadow-lg"
                      : "border-[#C2A95B]/30 bg-white/80 hover:border-[#C2A95B] hover:shadow-md"
                  }`}
                >
                  {tier.popular && (
                    <span
                      className={`absolute right-1.5 top-1.5 rounded-full px-1.5 py-[2px] text-[6.5px] font-bold uppercase tracking-[0.08em] md:right-2.5 md:top-2.5 md:px-2 md:py-[3px] md:text-[7.5px] md:tracking-[0.15em] ${
                        isSelected
                          ? "bg-[#C2A95B] text-[#800000]"
                          : "bg-[#C2A95B]/20 text-[#C2A95B]"
                      }`}
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Popular
                    </span>
                  )}

                  <p
                    className={`text-lg font-bold leading-none sm:text-xl md:text-2xl lg:text-3xl ${
                      isSelected ? "text-[#C2A95B]" : "text-[#800000]"
                    }`}
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    ₹{tier.amount}
                  </p>

                  <p
                    className={`mt-1.5 text-[8px] uppercase tracking-[0.12em] md:mt-1 md:text-[9px] md:tracking-[0.18em] lg:text-[10px] ${
                      isSelected ? "text-[#FFF8E7]/70" : "text-[#C2A95B]"
                    }`}
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {tier.label}
                  </p>

                  <div
                    className={`my-2 h-px w-7 transition-all duration-500 group-hover:w-12 md:w-8 md:group-hover:w-14 lg:w-10 lg:group-hover:w-16 ${
                      isSelected ? "bg-[#C2A95B]" : "bg-[#C2A95B]/50"
                    }`}
                  />

                  <p
                    className={`text-[10px] leading-snug md:text-[11px] lg:text-xs ${
                      isSelected ? "text-[#FFF8E7]/80" : "text-[#800000]/70"
                    }`}
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {tier.text}
                  </p>

                  {/* Selection tick */}
                  {isSelected && (
                    <span className="absolute bottom-2 right-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#C2A95B] text-[9px] text-[#800000] md:bottom-2.5 md:right-2.5 md:h-5 md:w-5 md:text-[11px]">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ---------- Custom amount ---------- */}
          <div className="mx-auto mt-6 max-w-2xl md:mt-10">
            <div className="rounded-xl border border-[#C2A95B]/30 bg-white/80 p-4 backdrop-blur-sm md:rounded-2xl md:p-8">
              <label
                htmlFor="custom"
                className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#C2A95B] md:mb-3 md:text-xs md:tracking-[0.3em]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Or Enter Your Desired Amount
              </label>

              <div className="flex items-center gap-2 md:gap-3">
                <span
                  className="text-xl font-bold text-[#800000] md:text-3xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  ₹
                </span>
                <input
                  id="custom"
                  type="text"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="Enter amount"
                  className="w-full rounded-lg border border-[#C2A95B]/30 bg-white px-3 py-2.5 text-base font-bold text-[#800000] placeholder-[#800000]/25 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:ring-2 focus:ring-[#C2A95B]/20 md:rounded-xl md:px-4 md:py-3 md:text-xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                />
              </div>

              <p
                className="mt-2 text-[9px] text-[#800000]/50 md:mt-3 md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Any amount is welcome. All donations are eligible for a receipt.
              </p>
            </div>
          </div>

          {/* ---------- Selected amount + CTA (desktop / tablet) ---------- */}
          {activeAmount && (
            <div className="mx-auto mt-6 hidden max-w-2xl md:mt-8 md:block">
              <div className="rounded-2xl border border-[#C2A95B] bg-[#800000] p-6 text-center md:p-8">
                <p
                  className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#C2A95B] md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Your Offering
                </p>

                <p
                  className="mb-5 text-4xl font-bold text-[#FFF8E7] md:text-5xl"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  ₹{activeAmount}
                </p>

                <div className="mx-auto mb-6 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#C2A95B]/50" />
                  <span className="text-xs text-[#C2A95B]">✦</span>
                  <span className="h-px w-10 bg-[#C2A95B]/50" />
                </div>

                <a
                  href="#payment-methods"
                  className="inline-block w-full rounded-full bg-[#C2A95B] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#800000] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4bc74] hover:shadow-lg md:w-auto md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Proceed to Payment
                </a>

                <p
                  className="mt-4 text-[10px] text-[#FFF8E7]/60 md:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  You will receive a receipt within 3–5 working days.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — TRANSPARENCY (horizontal scroll on mobile)
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E7] py-12 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10">
          {/* Header (still contained) */}
          <div className="mx-auto max-w-7xl px-4 md:px-10">
            <div className="mb-8 text-center md:mb-14">
              <p
                className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C2A95B] md:mb-3 md:text-xs md:tracking-[0.4em]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Trust &amp; Transparency
              </p>

              <h2
                className="text-2xl font-bold leading-tight text-[#800000] sm:text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Your Offering, <span className="text-[#C2A95B]">Honoured</span>
              </h2>

              <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
                <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
                <span className="text-sm text-[#C2A95B] md:text-base">✦</span>
                <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
              </div>
            </div>
          </div>

          {/* MOBILE: horizontal snap scroll */}
          <div className="md:hidden">
            <div
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {transparency.map((item) => (
                <div
                  key={item.title}
                  className="w-[72vw] max-w-[260px] shrink-0 snap-start rounded-xl border border-[#C2A95B]/30 bg-white/80 p-4 backdrop-blur-sm"
                >
                  <div className="mb-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-[#C2A95B]/50 text-xs text-[#C2A95B]">
                    ✦
                  </div>

                  <h3
                    className="mb-2 text-sm font-bold leading-snug text-[#800000]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {item.title}
                  </h3>

                  <div className="mb-2 h-px w-8 bg-[#C2A95B]/50" />

                  <p
                    className="text-[10px] leading-snug text-[#800000]/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="mt-1 flex items-center justify-center gap-2 px-4">
              <span
                className="text-[9px] uppercase tracking-[0.25em] text-[#C2A95B]/80"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Swipe →
              </span>
            </div>
          </div>

          {/* DESKTOP: grid (smaller cards) */}
          <div className="mx-auto hidden max-w-7xl px-10 md:block">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {transparency.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#C2A95B]/30 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#C2A95B] hover:shadow-md"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#C2A95B]/50 text-sm text-[#C2A95B]">
                    ✦
                  </div>

                  <h3
                    className="mb-2.5 text-base font-bold leading-snug text-[#800000]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {item.title}
                  </h3>

                  <div className="mb-2.5 h-px w-8 bg-[#C2A95B]/50" />

                  <p
                    className="text-xs leading-relaxed text-[#800000]/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — FAQ
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-24">
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
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C2A95B]/5 blur-3xl md:h-[500px] md:w-[500px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-10">
          <div className="mb-8 text-center md:mb-14">
            <p
              className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C2A95B] md:mb-3 md:text-xs md:tracking-[0.4em]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Questions About Donating
            </p>

            <h2
              className="text-2xl font-bold leading-tight text-[#800000] sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Donation <span className="text-[#C2A95B]">FAQ</span>
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
              <span className="text-sm text-[#C2A95B] md:text-base">✦</span>
              <span className="h-px w-10 bg-[#C2A95B] md:w-12" />
            </div>
          </div>

          <div className="space-y-2.5 md:space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-xl border bg-white/80 backdrop-blur-sm transition-all duration-300 md:rounded-2xl ${
                    isOpen
                      ? "border-[#C2A95B] shadow-md"
                      : "border-[#C2A95B]/30 hover:border-[#C2A95B]/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left md:gap-4 md:px-7 md:py-5"
                  >
                    <h3
                      className="text-sm font-bold leading-snug text-[#800000] md:text-lg"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {faq.q}
                    </h3>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-300 md:h-8 md:w-8 md:text-lg ${
                        isOpen
                          ? "rotate-45 border-[#C2A95B] bg-[#C2A95B] text-white"
                          : "border-[#C2A95B]/50 text-[#C2A95B]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 md:px-7 md:pb-6">
                        <div className="mb-3 h-px w-full bg-[#C2A95B]/20 md:mb-4" />
                        <p
                          className="text-[11px] leading-relaxed text-[#800000]/75 md:text-sm"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          STICKY MOBILE CTA BAR
      ============================================================ */}
      {activeAmount && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#C2A95B]/40 bg-[#800000] px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p
                className="text-[8px] uppercase tracking-[0.25em] text-[#C2A95B]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Your Offering
              </p>
              <p
                className="truncate text-xl font-bold leading-tight text-[#FFF8E7]"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                ₹{activeAmount}
              </p>
            </div>

            <a
              href="#payment-methods"
              className="shrink-0 rounded-full bg-[#C2A95B] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#800000] shadow-sm transition-colors active:bg-[#d4bc74]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Proceed
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
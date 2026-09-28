"use client";

import { useState } from "react";
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

/* ---------------- Data ---------------- */

const sevaOptions = [
  {
    id: "annadan",
    icon: "🍛",
    name: "Annadan Seva",
    tagline: "Feed a Devotee",
    desc: "Sponsor a day of free meals for pilgrims and the underprivileged. Over 5,000 plates are served daily at the temple kitchen.",
    amounts: [501, 1100, 2100, 5100],
    impact: "1 plate = ₹50 · 100 plates = ₹5,000",
    highlight: false,
  },
  {
    id: "gau",
    icon: "🐄",
    name: "Gau Seva",
    tagline: "Care for the Sacred Cow",
    desc: "Support the temple gaushala — shelter, fodder, and medical care for over 200 cows and calves.",
    amounts: [501, 1100, 2100, 5100],
    impact: "A month of fodder for one cow = ₹1,100",
    highlight: false,
  },
  {
    id: "vidya",
    icon: "📚",
    name: "Vidya Daan",
    tagline: "Educate a Child",
    desc: "Provide free education, books, and school supplies to underprivileged children in the temple's pathshala.",
    amounts: [1001, 2500, 5001, 11000],
    impact: "One year of schooling = ₹5,001",
    highlight: true,
  },
  {
    id: "aarti",
    icon: "🪔",
    name: "Aarti Seva",
    tagline: "Sponsor a Daily Aarti",
    desc: "Sponsor one of the four daily aartis as an offering of gratitude. Includes sankalp in your name and prasad delivery.",
    amounts: [251, 501, 1100, 2501],
    impact: "One aarti sponsorship = ₹501",
    highlight: false,
  },
  {
    id: "medical",
    icon: "🩺",
    name: "Medical Seva",
    tagline: "Heal the Needy",
    desc: "Support the weekly free medical camp — doctor consultations, medicines, and health checkups for the poor.",
    amounts: [501, 1100, 2501, 5001],
    impact: "One patient's treatment = ₹250",
    highlight: false,
  },
  {
    id: "temple",
    icon: "🛕",
    name: "Temple Preservation",
    tagline: "Preserve the Heritage",
    desc: "Contribute to the upkeep, renovation, and beautification of the temple — flowers, lighting, and restoration.",
    amounts: [1100, 2501, 5001, 11000],
    impact: "Daily flower offering = ₹1,100",
    highlight: false,
  },
];

const presetAmounts = [251, 501, 1100, 2501, 5001, 11000];

const impactStats = [
  { value: "5,000+", label: "Meals Served Daily" },
  { value: "200+", label: "Cows Cared For" },
  { value: "450+", label: "Children Educated" },
  { value: "10,000+", label: "Patients Treated/Year" },
];

const paymentMethods = [
  { icon: "💳", label: "Credit / Debit Card", sub: "Visa, Mastercard, RuPay, Amex" },
  { icon: "🏦", label: "Net Banking", sub: "All major Indian banks" },
  { icon: "📱", label: "UPI", sub: "GPay, PhonePe, Paytm, BHIM" },
  { icon: "🌐", label: "International", sub: "For overseas devotees" },
];

const trustPoints = [
  { icon: "🔒", title: "Secure Payments", desc: "256-bit SSL encryption via Razorpay / Stripe" },
  { icon: "📜", title: "80G Tax Exemption", desc: "All donations are eligible for tax deduction" },
  { icon: "🧾", title: "Instant Receipt", desc: "Digital receipt emailed immediately" },
  { icon: "🙏", title: "100% to Seva", desc: "Zero admin fees — every rupee serves the Lord" },
];

const faqs = [
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. Madan Mohan Mandir Trust is registered under Section 80G of the Income Tax Act. You will receive an 80G certificate via email within 24 hours of your donation.",
  },
  {
    q: "Can I donate from outside India?",
    a: "Yes. We accept international donations via credit card, PayPal, and wire transfer. For FCRA-compliant foreign donations, please contact seva@madanmohanmandir.org.",
  },
  {
    q: "How is my donation used?",
    a: "100% of your donation goes directly to the seva you choose. Our administrative costs are covered separately by trustee contributions. You will receive a detailed impact report annually.",
  },
  {
    q: "Can I set up a recurring monthly donation?",
    a: "Yes. Toggle 'Monthly' above any seva card to set up an automatic recurring donation. You can pause or cancel anytime from your donor dashboard.",
  },
  {
    q: "Will I receive a receipt?",
    a: "Absolutely. An instant digital receipt is emailed to you, and a physical receipt is posted within 7 working days for donations above ₹5,000.",
  },
  {
    q: "Can I dedicate my donation in someone's name?",
    a: "Yes. During checkout, you can add a dedication note — 'In memory of', 'In honour of', or a special prayer intention — which will be read during the next aarti.",
  },
];

/* ---------------- Component ---------------- */

export default function DonatePage() {
  const [frequency, setFrequency] = useState("once"); // "once" | "monthly"
  const [selectedSeva, setSelectedSeva] = useState("vidya");
  const [amount, setAmount] = useState(2501);
  const [customAmount, setCustomAmount] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleAmountSelect = (val) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
    setAmount(val ? parseInt(val) : 0);
  };

  const finalAmount = customAmount ? parseInt(customAmount) : amount;

  return (
    <main className={`${cinzel.variable} ${jakarta.variable} min-h-screen bg-black`}>


      {/* ============ PAGE HEADER ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0503] to-black pt-[140px] pb-16 md:pt-[180px] md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.14),_transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Offer Your Seva
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-tight text-amber-50 md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Donate & <span className="text-amber-300">Serve</span>
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
            Every offering at Madan Mohan Mandir is an act of love. Your
            generosity feeds the hungry, cares for the sacred cow, educates the
            young, and keeps the lamp of devotion burning.
          </p>

          {/* Sanskrit line */}
          <p
            className="mt-8 text-lg font-light text-amber-200/90 md:text-xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            दानं परमं धर्मः
          </p>
          <p
            className="mt-1 text-xs italic text-amber-100/50"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            "Giving is the highest dharma."
          </p>
        </div>
      </section>

      {/* ============ IMPACT STATS ============ */}
      <section className="relative w-full border-y border-amber-400/15 bg-[#0a0503] py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-12">
          {impactStats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="mb-1 text-3xl font-bold text-amber-300 md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] font-medium uppercase tracking-[0.25em] text-amber-100/60 md:text-xs"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DONATION WIDGET ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        {/* Background dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(251,191,36,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* LEFT: Seva Selection */}
            <div>
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Step 1 · Choose Your Seva
              </p>
              <h2
                className="mb-8 text-3xl font-bold leading-tight text-amber-50 md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Where Shall Your <span className="text-amber-300">Offering Go?</span>
              </h2>

              {/* Seva cards grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {sevaOptions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedSeva(s.id);
                      handleAmountSelect(s.amounts[1]);
                    }}
                    className={`group relative overflow-hidden rounded-2xl border p-5 text-left backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
                      selectedSeva === s.id
                        ? "border-amber-400/70 bg-gradient-to-br from-amber-400/[0.12] to-transparent shadow-lg shadow-amber-500/20"
                        : "border-amber-400/20 bg-white/[0.03] hover:border-amber-400/50"
                    }`}
                  >
                    {s.highlight && (
                      <span
                        className="absolute right-3 top-3 rounded-full border border-amber-400/50 bg-amber-400/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-amber-200"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Popular
                      </span>
                    )}

                    {/* Selection ring */}
                    <span
                      className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 ${
                        selectedSeva === s.id
                          ? "border-amber-400 bg-amber-400"
                          : "border-amber-400/40"
                      } ${s.highlight ? "top-10" : ""}`}
                    >
                      {selectedSeva === s.id && (
                        <span className="text-[10px] font-bold text-black">✓</span>
                      )}
                    </span>

                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-2xl">
                      {s.icon}
                    </div>
                    <h3
                      className="mb-1 text-base font-bold text-amber-50"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="mb-3 text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {s.tagline}
                    </p>
                    <p
                      className="mb-3 text-xs font-light leading-relaxed text-amber-100/60"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {s.desc}
                    </p>
                    <p
                      className="text-[10px] italic text-amber-300/70"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {s.impact}
                    </p>
                  </button>
                ))}
              </div>

              {/* Amount Selection */}
              <div className="mt-12">
                <p
                  className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Step 2 · Choose Amount
                </p>

                {/* Frequency toggle */}
                <div className="mb-6 inline-flex rounded-full border border-amber-400/30 bg-white/[0.03] p-1 backdrop-blur-sm">
                  {[
                    { key: "once", label: "One-Time" },
                    { key: "monthly", label: "Monthly" },
                  ].map((f) => (
                    <button
                      key={f.key}
                      onClick={() => setFrequency(f.key)}
                      className={`rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 md:text-sm ${
                        frequency === f.key
                          ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-md shadow-amber-500/30"
                          : "text-amber-200/80 hover:text-amber-100"
                      }`}
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Preset amounts */}
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {presetAmounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => handleAmountSelect(a)}
                      className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-300 ${
                        amount === a && !customAmount
                          ? "border-amber-400 bg-amber-400/15 text-amber-100 shadow-md shadow-amber-500/20"
                          : "border-amber-400/25 bg-white/[0.03] text-amber-100/80 hover:border-amber-400/60 hover:bg-white/[0.06]"
                      }`}
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      ₹{a.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="mt-4">
                  <label
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-amber-300"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      ₹
                    </span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomChange}
                      placeholder="Enter amount"
                      className="w-full rounded-xl border border-amber-400/25 bg-white/[0.03] py-3.5 pl-10 pr-4 text-sm font-semibold text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Sticky Summary */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="relative overflow-hidden rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/[0.08] via-white/[0.02] to-transparent p-6 backdrop-blur-sm md:p-8">
                <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl" />

                <div className="relative">
                  <h3
                    className="mb-6 text-xl font-bold text-amber-50"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Your Offering
                  </h3>

                  <div className="space-y-4 border-b border-amber-400/20 pb-6">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="text-xs font-medium uppercase tracking-widest text-amber-300/70"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Seva
                      </span>
                      <span
                        className="text-right text-sm font-semibold text-amber-100"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {sevaOptions.find((s) => s.id === selectedSeva)?.name}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="text-xs font-medium uppercase tracking-widest text-amber-300/70"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Frequency
                      </span>
                      <span
                        className="text-right text-sm font-semibold text-amber-100"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {frequency === "once" ? "One-Time" : "Monthly"}
                      </span>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="py-6">
                    <p
                      className="mb-2 text-xs font-medium uppercase tracking-widest text-amber-300/70"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Amount
                    </p>
                    <p
                      className="text-4xl font-bold text-amber-300 md:text-5xl"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      ₹{finalAmount.toLocaleString("en-IN")}
                    </p>
                    {frequency === "monthly" && (
                      <p
                        className="mt-1 text-xs text-amber-200/60"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        billed every month · cancel anytime
                      </p>
                    )}
                  </div>

                  {/* Donate button */}
                  <a
                    href={`#checkout?seva=${selectedSeva}&amount=${finalAmount}&freq=${frequency}`}
                    className="mb-4 block w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-center text-sm font-bold tracking-wider text-black shadow-lg shadow-amber-500/40 transition-all duration-300 hover:shadow-amber-400/60 hover:brightness-110"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    🙏 Proceed to Donate
                  </a>

                  <p
                    className="text-center text-[10px] font-light italic text-amber-100/50"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Secure payment · 80G eligible · Instant receipt
                  </p>

                  {/* Trust mini row */}
                  <div className="mt-6 flex items-center justify-center gap-4 border-t border-amber-400/15 pt-5">
                    {["🔒", "📜", "🧾"].map((icon) => (
                      <span key={icon} className="text-lg opacity-70">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAYMENT METHODS ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Multiple Ways to Give
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Payment <span className="text-amber-300">Methods</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Payment cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paymentMethods.map((p) => (
              <div
                key={p.label}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/15"
              >
                <span className="text-4xl">{p.icon}</span>
                <div>
                  <h3
                    className="mb-1 text-base font-bold text-amber-50"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {p.label}
                  </h3>
                  <p
                    className="text-xs font-light text-amber-100/60"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {p.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bank details */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.06] to-transparent p-6 backdrop-blur-sm md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3
                  className="mb-4 flex items-center gap-3 text-lg font-bold text-amber-100"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  🏦 Bank Transfer
                </h3>
                <ul className="space-y-2.5">
                  {[
                    ["Account Name", "Madan Mohan Mandir Trust"],
                    ["Account Number", "1234 5678 9012 3456"],
                    ["IFSC Code", "MMMT0001234"],
                    ["Bank", "State Bank of India, Vrindavan"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3">
                      <span
                        className="w-32 flex-shrink-0 text-[10px] font-medium uppercase tracking-widest text-amber-300/70"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {k}
                      </span>
                      <span
                        className="text-sm font-light text-amber-100/85"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className="mb-4 flex items-center gap-3 text-lg font-bold text-amber-100"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  📱 UPI ID
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <code
                    className="rounded-xl border border-amber-400/30 bg-black/50 px-4 py-2.5 text-sm font-semibold text-amber-200"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    madanmohan@upi
                  </code>
                  <button
                    className="rounded-full border border-amber-400/40 px-4 py-2 text-xs font-medium text-amber-200 transition-all hover:bg-amber-400/10"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Copy
                  </button>
                </div>
                <p
                  className="mt-4 text-xs font-light leading-relaxed text-amber-100/60"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Scan the QR code or pay directly using any UPI app. After
                  payment, please email the transaction ID to{" "}
                  <span className="text-amber-200">seva@madanmohanmandir.org</span>{" "}
                  for your receipt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST / TRANSPARENCY ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Transparency You Can Trust
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Your Trust, <span className="text-amber-300">Our Promise</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((t) => (
              <div
                key={t.title}
                className="group rounded-2xl border border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-2xl">
                  {t.icon}
                </div>
                <h3
                  className="mb-2 text-base font-bold text-amber-50"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {t.title}
                </h3>
                <p
                  className="text-xs font-light leading-relaxed text-amber-100/70 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEDICATION / QUOTE ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <span className="mb-6 inline-block text-5xl text-amber-400/60">❝</span>

          <p
            className="mb-6 text-xl font-light leading-relaxed text-amber-100/90 md:text-2xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Whatever you give with a pure heart, the Lord receives a thousandfold.
            The hand that gives is holier than the hand that receives.
          </p>

          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-400">✦</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          <p
            className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300/80"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            — Temple Wisdom
          </p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Before You Donate
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Common <span className="text-amber-300">Questions</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                  openFaq === i
                    ? "border-amber-400/60 bg-gradient-to-br from-amber-400/[0.06] to-transparent"
                    : "border-amber-400/20 bg-white/[0.02] hover:border-amber-400/40"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
                >
                  <h3
                    className="text-sm font-semibold text-amber-50 md:text-base"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-amber-400/40 text-amber-300 transition-transform duration-500 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-6 pb-5 text-sm font-light leading-relaxed text-amber-100/75 md:px-8 md:pb-6"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative w-full overflow-hidden bg-[#0a0503] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.12),_transparent_60%)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <div className="mb-6 flex justify-center">
            <span className="text-5xl text-amber-300/90">🙏</span>
          </div>

          <h2
            className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Become a Part of <span className="text-amber-300">the Seva</span>
          </h2>

          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-400">✦</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          <p
            className="mx-auto mb-10 max-w-xl text-sm font-light leading-relaxed text-amber-50/70 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Every rupee you give flows into a life touched, a soul nourished, a
            heart healed. Join thousands of devotees worldwide in keeping the
            light of Madan Mohan Mandir burning bright.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#checkout"
              className="rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3.5 text-sm font-bold tracking-wider text-black shadow-lg shadow-amber-500/40 transition-all duration-300 hover:shadow-amber-400/60 hover:brightness-110"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              🙏 Donate Now
            </a>
            <a
              href="#contact"
              className="rounded-full border border-amber-300/60 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Contact Seva Desk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
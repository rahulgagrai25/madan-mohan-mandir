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

/* ---------------- Data ---------------- */

const contactCards = [
  {
    icon: "📍",
    title: "Temple Address",
    lines: [
      "Madan Mohan Mandir",
      "Kanke, Boreya, Ranchi",
      "Jharkhand - India",
    ],
    action: { label: "Get Directions", href: "#map" },
  },
  {
    icon: "📞",
    title: "Phone",
    lines: [
      "Temple Office: +91 98765 43210",
      "Seva Helpline: +91 98765 43211",
      "Emergency: +91 98765 43212",
    ],
    action: { label: "Call Now", href: "tel:+919876543210" },
  },
  {
    icon: "✉️",
    title: "Email",
    lines: [
      "General: info@madanmohanmandir.org",
      "Donations: seva@madanmohanmandir.org",
      "Press: media@madanmohanmandir.org",
    ],
    action: { label: "Send Email", href: "mailto:info@madanmohanmandir.org" },
  },
  {
    icon: "🕐",
    title: "Office Hours",
    lines: [
      "Mon – Sat: 9:00 AM – 6:00 PM",
      "Sunday: 10:00 AM – 4:00 PM",
      "Temple open: 5:00 AM – 9:30 PM",
    ],
    action: { label: "View Timings", href: "/darshan" },
  },
];

const departments = [
  {
    icon: "🛕",
    name: "Temple Priest",
    person: "Pandit Ramesh Shastri",
    phone: "+91 98765 43213",
    email: "priest@madanmohanmandir.org",
  },
  {
    icon: "🤝",
    name: "Seva & Donations",
    person: "Shri Mohan Verma",
    phone: "+91 98765 43214",
    email: "seva@madanmohanmandir.org",
  },
  {
    icon: "🎉",
    name: "Events & Festivals",
    person: "Smt. Radha Sharma",
    phone: "+91 98765 43215",
    email: "events@madanmohanmandir.org",
  },
  {
    icon: "📚",
    name: "Education & Youth",
    person: "Shri Arjun Das",
    phone: "+91 98765 43216",
    email: "education@madanmohanmandir.org",
  },
  {
    icon: "📰",
    name: "Media & Press",
    person: "Shri Krishna Iyer",
    phone: "+91 98765 43217",
    email: "media@madanmohanmandir.org",
  },
  {
    icon: "🚨",
    name: "Emergency / Security",
    person: "Security Desk",
    phone: "+91 98765 43212",
    email: "security@madanmohanmandir.org",
  },
];

const faqs = [
  {
    q: "Is entry to the temple free?",
    a: "Yes, general darshan is completely free for all devotees. We also offer optional Quick Darshan (₹200) and VIP Darshan (₹500) for those seeking a shorter wait time.",
  },
  {
    q: "Can I bring my camera or mobile phone?",
    a: "Mobile phones and cameras are not permitted inside the sanctum. Free lockers are available at the temple entrance for safekeeping your belongings.",
  },
  {
    q: "Are there facilities for the elderly and differently-abled?",
    a: "Yes, the temple has wheelchair access, ramps, and dedicated seating. Wheelchairs are available at the entrance free of charge. Please ask any sevak for assistance.",
  },
  {
    q: "How can I sponsor a seva or aarti?",
    a: "You can sponsor a seva or aarti by contacting our Seva department at seva@madanmohanmandir.org or +91 98765 43214. Sponsorships include sankalp in your name and prasad.",
  },
  {
    q: "Is there parking available at the temple?",
    a: "Yes, free parking is available for cars, buses, and two-wheelers within the temple premises. Volunteers will guide you to the appropriate parking area.",
  },
  {
    q: "Can I stay overnight at the temple?",
    a: "The temple offers dharamshala accommodation for pilgrims at nominal charges. Please book in advance by contacting the office at +91 98765 43210.",
  },
];

/* ---------------- Component ---------------- */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className={`${cinzel.variable} ${jakarta.variable} min-h-screen bg-black`}>
   

      {/* ============ PAGE HEADER ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0503] to-black pt-[140px] pb-16 md:pt-[180px] md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.12),_transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            We're Here to Help
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-tight text-amber-50 md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Get in <span className="text-amber-300">Touch</span>
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
            Whether you wish to plan a visit, offer seva, or simply have a
            question — we would love to hear from you. Reach out to the Madan
            Mohan Mandir family.
          </p>
        </div>
      </section>

      {/* ============ CONTACT INFO CARDS ============ */}
      <section className="relative w-full bg-[#0a0503] pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 md:px-12 lg:grid-cols-4">
          {contactCards.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/15"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-2xl">
                  {c.icon}
                </div>

                <h3
                  className="mb-4 text-lg font-bold text-amber-50"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {c.title}
                </h3>

                <ul className="mb-5 space-y-1.5">
                  {c.lines.map((line) => (
                    <li
                      key={line}
                      className="text-xs font-light leading-relaxed text-amber-100/70 md:text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>

                <a
                  href={c.action.href}
                  className="group/link inline-flex items-center gap-2 text-xs font-medium text-amber-300 transition-colors hover:text-amber-200 md:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {c.action.label}
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FORM + MAP ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        {/* Background dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(251,191,36,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* FORM */}
            <div>
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Send a Message
              </p>
              <h2
                className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Write to <span className="text-amber-300">Us</span>
              </h2>

              <div className="mb-8 flex items-center gap-3">
                <span className="h-[1px] w-12 bg-amber-400/70" />
                <span className="text-amber-400">✦</span>
              </div>

              <p
                className="mb-8 text-sm font-light leading-relaxed text-amber-50/70"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Fill in the form below and our team will get back to you within
                24–48 hours. For urgent matters, please call the temple office
                directly.
              </p>

              {submitted && (
                <div className="mb-6 rounded-2xl border border-emerald-400/40 bg-emerald-400/[0.08] p-4 backdrop-blur-sm">
                  <p
                    className="text-sm font-medium text-emerald-200"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    🙏 Thank you! Your message has been received. We will get
                    back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-amber-400/25 bg-white/[0.03] px-4 py-3 text-sm text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                      placeholder="Your full name"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-amber-400/25 bg-white/[0.03] px-4 py-3 text-sm text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                      placeholder="you@example.com"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-amber-400/25 bg-white/[0.03] px-4 py-3 text-sm text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                      placeholder="+91 98765 43210"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-amber-400/25 bg-[#0a0503] px-4 py-3 text-sm text-amber-50 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-[#0a0503]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      <option value="">Select a subject</option>
                      <option value="visit">Planning a Visit</option>
                      <option value="seva">Seva / Donation</option>
                      <option value="event">Event Enquiry</option>
                      <option value="priest">Priest Consultation</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-amber-300/80"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-amber-400/25 bg-white/[0.03] px-4 py-3 text-sm text-amber-50 placeholder-amber-200/30 outline-none transition-all duration-300 focus:border-amber-400/70 focus:bg-white/[0.06]"
                    placeholder="How can we help you?"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110 sm:w-auto sm:px-10"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Send Message →
                </button>
              </form>
            </div>

            {/* MAP */}
            <div id="map" className="relative">
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Find Us
              </p>
              <h2
                className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-4xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                On the <span className="text-amber-300">Map</span>
              </h2>

              <div className="mb-8 flex items-center gap-3">
                <span className="h-[1px] w-12 bg-amber-400/70" />
                <span className="text-amber-400">✦</span>
              </div>

              <p
                className="mb-8 text-sm font-light leading-relaxed text-amber-50/70"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Madan Mohan Mandir is located on Mandir Marg, near the river
                ghat in Vrindavan. It is easily accessible by road, rail, and
                air.
              </p>

              {/* Map frame */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl border border-amber-400/30" />
                <div className="absolute -inset-6 rounded-3xl border border-amber-400/10" />

                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-amber-400/20 bg-white/[0.03] shadow-2xl shadow-amber-500/10 sm:aspect-video lg:aspect-square">
                  {/* Replace with real iframe */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.7501623669477!2d85.35013547510474!3d23.428418378891397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e7b25481fe85%3A0xc14d9638b0ae0bee!2sMadan%20Mohan%20Mandir!5e1!3m2!1sen!2sin!4v1790585428525!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0,}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Madan Mohan Mandir Location"
                  />
                </div>
              </div>

              {/* Directions info */}
              <div className="mt-10 space-y-3">
                {[
                  { icon: "🚗", label: "By Road", value: "NH-19 → Vrindavan Exit → Mandir Marg" },
                  { icon: "🚆", label: "By Rail", value: "Mathura Junction (12 km) → Auto/Rickshaw" },
                  { icon: "✈️", label: "By Air", value: "Agra Airport (70 km) / Delhi IGI (160 km)" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center gap-4 rounded-xl border border-amber-400/20 bg-white/[0.03] p-4 backdrop-blur-sm transition-colors duration-300 hover:border-amber-400/50"
                  >
                    <span className="text-2xl">{r.icon}</span>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest text-amber-300/80"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {r.label}
                      </p>
                      <p
                        className="text-sm font-light text-amber-100/80"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {r.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DEPARTMENT CONTACTS ============ */}
      <section className="relative w-full bg-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Reach the Right Person
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Department <span className="text-amber-300">Contacts</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <div
                key={d.name}
                className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/15"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-2xl">
                      {d.icon}
                    </div>
                    <h3
                      className="text-base font-bold text-amber-50 md:text-lg"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {d.name}
                    </h3>
                  </div>

                  <p
                    className="mb-4 text-sm font-medium text-amber-200/90"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {d.person}
                  </p>

                  <div className="space-y-2">
                    <a
                      href={`tel:${d.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-xs font-light text-amber-100/70 transition-colors hover:text-amber-300 md:text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      <span>📞</span> {d.phone}
                    </a>
                    <a
                      href={`mailto:${d.email}`}
                      className="flex items-center gap-2 break-all text-xs font-light text-amber-100/70 transition-colors hover:text-amber-300 md:text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      <span>✉️</span> {d.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0503] via-black to-[#0a0503] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-300/90"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Frequently Asked
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-amber-50 md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Your <span className="text-amber-300">Questions</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-400">✦</span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </div>

          {/* FAQ list */}
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

          {/* Still have questions */}
          <div className="mt-12 text-center">
            <p
              className="mb-4 text-sm font-light text-amber-100/70"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Still have questions?
            </p>
            <a
              href="mailto:info@madanmohanmandir.org"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-7 py-3 text-sm font-medium text-amber-200 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/10"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Email us directly →
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative w-full overflow-hidden bg-[#0a0503] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.1),_transparent_60%)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <div className="mb-6 flex justify-center">
            <span className="text-4xl text-amber-300/90 md:text-5xl">📿</span>
          </div>

          <h2
            className="mb-6 text-3xl font-bold leading-tight text-amber-50 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            We Look Forward to <span className="text-amber-300">Welcoming You</span>
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
            Whether you come as a pilgrim, a seeker, or a curious visitor — you
            will always find a warm welcome at Madan Mohan Mandir. Reach out,
            and let us be of service.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/darshan"
              className="rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold tracking-wide text-black shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-amber-400/50 hover:brightness-110"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Plan Your Visit
            </a>
            <a
              href="/events"
              className="rounded-full border border-amber-300/60 bg-white/5 px-8 py-3 text-sm font-semibold tracking-wide text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              See Upcoming Events
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
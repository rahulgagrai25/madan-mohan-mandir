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

const committeeMembers = [
  {
    name: "Sudhanshu Narayan Tiwari",
    role: "President",
    roleHi: "अध्यक्ष",
    phone: "7488395587",
  },
  {
    name: "Manoj Narayan Tiwari",
    role: "Secretary",
    roleHi: "सचिव",
    phone: "7488540905",
  },
  {
    name: "Gopal Narayan Tiwari",
    role: "Treasurer",
    roleHi: "कोषाध्यक्ष",
    phone: "7858091885",
  },
  {
    name: "Govind Narayan Tiwari",
    role: "Patron",
    roleHi: "संरक्षक",
    phone: "9835917623",
  },
  {
    name: "Dr. Ravibhushan Tiwari",
    role: "Patron",
    roleHi: "संरक्षक",
    phone: "9931500930",
  },
];

const faqs = [
  {
    q: "What are the temple timings?",
    a: "The temple is open every day. Morning darshan runs from 5:00 AM to 12:00 PM and evening darshan from 4:00 PM to 8:30 PM. On festival days, the temple often stays open longer.",
  },
  {
    q: "Is there a dress code?",
    a: "We ask visitors to dress modestly and traditionally. Please avoid leather items inside the temple premises and remove footwear before entering.",
  },
  {
    q: "Can I take photographs of the deity?",
    a: "Photography of the deity is not permitted. You may, however, photograph the temple exterior and premises. Please ask before photographing any rituals.",
  },
  {
    q: "How do I reach the temple from Ranchi?",
    a: "The temple is located at Boreya in Kanke, about 10–12 km from Ranchi city centre. Auto-rickshaws, taxis and app-based cabs are all easily available from the city.",
  },
  {
    q: "Can I offer prasad or sponsor a puja?",
    a: "Yes. Simple offerings such as flowers, fruits and sweets are always welcome. For sponsoring a specific puja or festival seva, please contact us using the details on this page.",
  },
  {
    q: "Are there parking facilities?",
    a: "Yes, there is space for two-wheelers and cars near the temple entrance, though it can fill up quickly on festival days.",
  },
];

/* Show only the 1st, 4th, 5th, and 6th accordions */
const visibleFaqIndices = [0, 3, 4, 5];

const formatPhone = (p: string) => `${p.slice(0, 5)} ${p.slice(5)}`;

/* ============================================================
   PAGE
============================================================ */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your form handler / API call.
    setSubmitted(true);
  };

  return (
    <main className={`${cinzel.variable} ${jakarta.variable} w-full`}>
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
        <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#C2A95B]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#800000]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p
              className="mb-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              We Would Love to Hear From You
            </p>

            <h1
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Contact &amp; <span className="text-[#C2A95B]">Visit</span>
            </h1>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#800000]/70 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Whether you are planning a visit, seeking to offer seva, or wish
              to know more about the temple — the Madan Mohan Mandir family
              welcomes you. Please reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — CONTACT DETAILS
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E7] py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* Row 1 — 4 compact cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Visit Us */}
            <div className="group flex h-full flex-col rounded-2xl border border-[#C2A95B]/30 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl">
              <div className="mb-3 flex items-center gap-2">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#C2A95B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <h3
                  className="text-base font-bold text-[#800000] md:text-lg"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Visit Us
                </h3>
              </div>
              <div className="mb-3 h-px w-10 bg-[#C2A95B] transition-all duration-500 group-hover:w-16" />
              <p
                className="text-[13px] font-medium text-[#800000] md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Madan Mohan Mandir
              </p>
              <p
                className="mt-1 text-[12px] leading-relaxed text-[#800000]/70 md:text-[13px]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Boreya, Kanke
                <br />
                Ranchi, Jharkhand – 834006
                <br />
                India
              </p>
            </div>

            {/* Write to Us */}
            <div className="group flex h-full flex-col rounded-2xl border border-[#C2A95B]/30 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl">
              <div className="mb-3 flex items-center gap-2">
                <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="mail"> <g> <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#C2A95B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <rect fill="none" height="14" rx="2" ry="2" stroke="#C2A95B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"></rect> </g> </g> </g> </g></svg>
                <h3
                  className="text-base font-bold text-[#800000] md:text-lg"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Write to Us
                </h3>
              </div>
              <div className="mb-3 h-px w-10 bg-[#C2A95B] transition-all duration-500 group-hover:w-16" />
              <p
                className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-[#C2A95B] md:text-[11px]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Official Email
              </p>
              <a
                href="mailto:madanmohanmandir1665@gmail.com"
                className="break-all text-[12px] text-[#800000]/80 underline-offset-4 transition-colors hover:text-[#C2A95B] hover:underline md:text-[13px]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                madanmohanmandir1665@gmail.com
              </a>
            </div>

            {/* Temple Hours */}
            <div className="group flex h-full flex-col rounded-2xl border border-[#C2A95B]/30 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl">
              <div className="mb-3 flex items-center gap-2">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#C2A95B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <h3
                  className="text-base font-bold text-[#800000] md:text-lg"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Temple Hours
                </h3>
              </div>
              <div className="mb-3 h-px w-10 bg-[#C2A95B] transition-all duration-500 group-hover:w-16" />
              <p
                className="text-[12px] leading-relaxed text-[#800000]/70 md:text-[13px]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Morning: 5:00 AM
              </p>
              <p
                className="mt-2 text-[12px] leading-relaxed text-[#800000]/70 md:text-[13px]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Evening: 8:30 PM
              </p>
              <p
                className="mt-2 text-[11px] italic leading-relaxed text-[#800000]/55"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Open all days
              </p>
            </div>

            {/* Call Us (official contact only) */}
            <div className="group flex h-full flex-col rounded-2xl border border-[#C2A95B]/40 bg-white/85 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-xl">
              <div className="mb-3 flex items-center gap-2">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#C2A95B"></path> </g></svg>
                <h3
                  className="text-base font-bold text-[#800000] md:text-lg"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Call Us
                </h3>
              </div>
              <div className="mb-3 h-px w-10 bg-[#C2A95B] transition-all duration-500 group-hover:w-16" />
              <p
                className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-[#C2A95B] md:text-[11px]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Official Temple Contact
              </p>
              <a
                href="tel:+917488395587"
                className="text-sm font-medium text-[#800000] transition-colors hover:text-[#C2A95B] md:text-base"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                +91 74883 95587
              </a>
              <p
                className="mt-2 text-[11px] leading-relaxed text-[#800000]/60 md:text-[12px]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Available for darshan queries, seva and general enquiries.
              </p>
            </div>
          </div>

          {/* Row 2 — Committee contacts (compact grid) */}
          <div className="mt-4 rounded-2xl border border-[#C2A95B]/30 bg-white/80 p-5 shadow-sm backdrop-blur-sm md:p-6">
            <div className="mb-4 flex items-center gap-3">
              <h3
                className="text-base font-bold text-[#800000] md:text-lg"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Temple Committee Contacts
              </h3>
              <span className="hidden h-px flex-1 bg-[#C2A95B]/30 sm:block" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {committeeMembers.map((member) => (
                <div
                  key={member.phone}
                  className="rounded-xl border border-[#C2A95B]/20 bg-[#FFF8E7]/60 p-4 transition-colors duration-300 hover:border-[#C2A95B]/60"
                >
                  <p
                    className="text-[13px] font-medium leading-snug text-[#800000] md:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="mt-0.5 text-[11px] leading-snug text-[#C2A95B]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {member.role}{" "}
                    <span className="text-[#800000]/50">({member.roleHi})</span>
                  </p>

                  <a
                    href={`tel:+91${member.phone}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-[12px] text-[#800000]/80 transition-colors hover:text-[#C2A95B] md:text-[13px]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    <span className="text-[#C2A95B]">☎</span>
                    +91 {formatPhone(member.phone)}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — GET IN TOUCH (FORM + IMAGE, JOINED)
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-20">
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
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#C2A95B]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-10">
          {/* ---------- SINGLE JOINED CARD ---------- */}
          <div className="relative overflow-hidden rounded-3xl border border-[#C2A95B]/45 shadow-[0_20px_60px_-20px_rgba(194,169,91,0.55)]">
            {/* Top gold accent bar — spans the whole card */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-transparent via-[#C2A95B] to-transparent" />

            <div className="grid items-stretch lg:grid-cols-2">
              {/* ============================================================
                  LEFT — FORM PANEL (compact on mobile)
              ============================================================ */}
              <div className="relative order-2 overflow-hidden bg-gradient-to-br from-[#FFFDF5] via-[#FDF6E3] to-[#F5E6B8] p-4 md:p-8 lg:order-1 lg:p-10">
                {/* Decorative dot pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                {/* Soft glow accents */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C2A95B]/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#800000]/10 blur-3xl" />

                {/* Corner ornaments */}
                <span className="pointer-events-none absolute right-3 top-3 text-[10px] text-[#C2A95B]/60 md:right-5 md:top-5 md:text-xs">
                  ✦
                </span>
                <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] text-[#C2A95B]/60 md:bottom-5 md:left-5 md:text-xs">
                  ✦
                </span>

                <div className="relative z-10">
                  <h2
                    className="mb-2 text-xl font-bold leading-tight text-[#800000] md:mb-3 md:text-3xl"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Get in <span className="text-[#C2A95B]">Touch</span>
                  </h2>

                  <p
                    className="mb-4 text-[12px] font-light leading-relaxed text-[#800000]/75 md:mb-6 md:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Fill in the form below and we will get back to you as soon
                    as possible. For urgent matters, please call the temple
                    directly.
                  </p>

                  {submitted ? (
                    <div className="rounded-2xl border border-[#C2A95B] bg-white/70 p-5 text-center backdrop-blur-sm md:p-8">
                      <span className="mb-2 inline-block text-2xl text-[#C2A95B] md:mb-3 md:text-4xl">
                        ✦
                      </span>
                      <h3
                        className="mb-2 text-lg font-bold text-[#800000] md:text-2xl"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        Thank You, {form.name || "Devotee"}
                      </h3>
                      <p
                        className="mx-auto max-w-md text-[11px] leading-relaxed text-[#800000]/75 md:text-sm"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Your message has been received. We will respond to you
                        at{" "}
                        <span className="font-medium text-[#C2A95B]">
                          {form.email || "your email"}
                        </span>{" "}
                        as soon as possible. Hare Krishna.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            email: "",
                            phone: "",
                            subject: "General Enquiry",
                            message: "",
                          });
                        }}
                        className="mt-4 rounded-full border border-[#C2A95B] px-5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#800000] transition-all duration-300 hover:bg-[#C2A95B] hover:text-white md:mt-5 md:px-6 md:py-2.5 md:text-xs"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-3 md:space-y-4"
                    >
                      {/* Name + Email */}
                      <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-1 block text-[9px] uppercase tracking-[0.18em] text-[#800000]/70 md:mb-1.5 md:text-xs md:tracking-[0.2em]"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          >
                            Your Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className="w-full rounded-lg border border-[#C2A95B]/40 bg-white px-3 py-2 text-[13px] text-[#800000] placeholder-[#800000]/30 shadow-sm outline-none transition-all duration-300 focus:border-[#C2A95B] focus:ring-2 focus:ring-[#C2A95B]/25 md:rounded-xl md:px-4 md:py-2.5 md:text-sm"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1 block text-[9px] uppercase tracking-[0.18em] text-[#800000]/70 md:mb-1.5 md:text-xs md:tracking-[0.2em]"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-[#C2A95B]/40 bg-white px-3 py-2 text-[13px] text-[#800000] placeholder-[#800000]/30 shadow-sm outline-none transition-all duration-300 focus:border-[#C2A95B] focus:ring-2 focus:ring-[#C2A95B]/25 md:rounded-xl md:px-4 md:py-2.5 md:text-sm"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          />
                        </div>
                      </div>

                      {/* Phone + Subject */}
                      <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-1 block text-[9px] uppercase tracking-[0.18em] text-[#800000]/70 md:mb-1.5 md:text-xs md:tracking-[0.2em]"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          >
                            Phone (optional)
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000"
                            className="w-full rounded-lg border border-[#C2A95B]/40 bg-white px-3 py-2 text-[13px] text-[#800000] placeholder-[#800000]/30 shadow-sm outline-none transition-all duration-300 focus:border-[#C2A95B] focus:ring-2 focus:ring-[#C2A95B]/25 md:rounded-xl md:px-4 md:py-2.5 md:text-sm"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="mb-1 block text-[9px] uppercase tracking-[0.18em] text-[#800000]/70 md:mb-1.5 md:text-xs md:tracking-[0.2em]"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          >
                            Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#C2A95B]/40 bg-white px-3 py-2 text-[13px] text-[#800000] shadow-sm outline-none transition-all duration-300 focus:border-[#C2A95B] focus:ring-2 focus:ring-[#C2A95B]/25 md:rounded-xl md:px-4 md:py-2.5 md:text-sm"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          >
                            <option>General Enquiry</option>
                            <option>Darshan &amp; Timings</option>
                            <option>Festivals &amp; Events</option>
                            <option>Seva &amp; Donations</option>
                            <option>Gallery &amp; Media</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1 block text-[9px] uppercase tracking-[0.18em] text-[#800000]/70 md:mb-1.5 md:text-xs md:tracking-[0.2em]"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={3}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Write your message here…"
                          className="w-full resize-none rounded-lg border border-[#C2A95B]/40 bg-white px-3 py-2 text-[13px] text-[#800000] placeholder-[#800000]/30 shadow-sm outline-none transition-all duration-300 focus:border-[#C2A95B] focus:ring-2 focus:ring-[#C2A95B]/25 md:rounded-xl md:px-4 md:py-2.5 md:text-sm"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-gradient-to-r from-[#C2A95B] via-[#D4BC72] to-[#C2A95B] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3D2A00] shadow-lg shadow-[#C2A95B]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C2A95B]/50 md:px-8 md:py-3 md:text-sm"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Send Message
                      </button>

                      <p
                        className="text-center text-[9px] text-[#800000]/50 md:text-xs"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Fields marked * are required.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* ============================================================
                  RIGHT — TEMPLE IMAGE (joined to the form)
              ============================================================ */}
              <div className="relative order-1 h-48 border-b border-[#C2A95B]/40 sm:h-72 lg:order-2 lg:h-full lg:min-h-full lg:border-b-0 lg:border-l">
                <img
                  src="/background/bg3.png"
                  alt="Madan Mohan Mandir, Boreya, Kanke, Ranchi"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Warm gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800000]/75 via-[#800000]/15 to-transparent lg:from-[#800000]/70 lg:via-[#800000]/10" />
              </div>
            </div>
          </div>
          {/* ---------- END JOINED CARD ---------- */}
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — LOCATION & DIRECTIONS
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#800000] py-12 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(#C2A95B 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#C2A95B]/20 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-9 text-center md:mb-11">
            <p
              className="mb-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Find Us
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#FFF8E7] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Location &amp; <span className="text-[#C2A95B]">Directions</span>
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>

            <p
              className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#FFF8E7]/80 md:text-base"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The temple sits in the quiet village of Boreya, in the Kanke area
              of Ranchi — about 10–12 km from the city centre.
            </p>
          </div>

          {/* Map */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-2xl border border-[#C2A95B]/40 md:h-[360px]">
            <iframe
              title="Madan Mohan Mandir Boreya location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.8878420517935!2d85.35013547510472!3d23.42841837889141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e7b25481fe85%3A0xc14d9638b0ae0bee!2sMadan%20Mohan%20Mandir!5e0!3m2!1sen!2sin!4v1791523864689!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 contrast-[1.05]"
            />
          </div>

          {/* Direction Cards — MOBILE: horizontal scroll | DESKTOP: compact grid */}
          <div className="mt-4">
            {/* Mobile horizontal scroll */}
            <div className="-mx-6 md:hidden">
              <div
                className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {/* By Road */}
                <div className="w-[68vw] max-w-[240px] shrink-0 snap-start rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-3.5 backdrop-blur-sm">
                  <h3
                    className="mb-1.5 text-sm font-bold text-[#FFF8E7]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    By Road
                  </h3>
                  <div className="mb-2 h-px w-10 bg-[#C2A95B]/50" />
                  <p
                    className="text-[11px] leading-relaxed text-[#FFF8E7]/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    From Ranchi city, head north-west toward Kanke. Autos,
                    taxis and app-based cabs are all easily available. The
                    journey takes roughly 30–40 minutes depending on traffic.
                  </p>
                </div>

                {/* By Rail */}
                <div className="w-[68vw] max-w-[240px] shrink-0 snap-start rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-3.5 backdrop-blur-sm">
                  <h3
                    className="mb-1.5 text-sm font-bold text-[#FFF8E7]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    By Rail
                  </h3>
                  <div className="mb-2 h-px w-10 bg-[#C2A95B]/50" />
                  <p
                    className="text-[11px] leading-relaxed text-[#FFF8E7]/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    The nearest railway station is Ranchi Junction (~15 km from
                    the temple). Cabs and autos are readily available at the
                    station for the onward journey.
                  </p>
                </div>

                {/* By Air */}
                <div className="w-[68vw] max-w-[240px] shrink-0 snap-start rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-3.5 backdrop-blur-sm">
                  <h3
                    className="mb-1.5 text-sm font-bold text-[#FFF8E7]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    By Air
                  </h3>
                  <div className="mb-2 h-px w-10 bg-[#C2A95B]/50" />
                  <p
                    className="text-[11px] leading-relaxed text-[#FFF8E7]/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    The nearest airport is Birsa Munda Airport, Ranchi (~20
                    km). Prepaid taxis and app-based cabs are available at the
                    airport throughout the day.
                  </p>
                </div>

                {/* By Car */}
                <div className="w-[68vw] max-w-[240px] shrink-0 snap-start rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-3.5 backdrop-blur-sm">
                  <h3
                    className="mb-1.5 text-sm font-bold text-[#FFF8E7]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    By Car
                  </h3>
                  <div className="mb-2 h-px w-10 bg-[#C2A95B]/50" />
                  <p
                    className="text-[11px] leading-relaxed text-[#FFF8E7]/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Drive north-west from Ranchi city centre toward
                    Kanke/Boreya. Parking is available near the temple entrance
                    for cars and two-wheelers, though it can fill up on
                    festival days.
                  </p>
                </div>
              </div>

              {/* Scroll hint */}
              <div className="mt-1 flex items-center justify-center gap-2 px-6">
                <span
                  className="text-[9px] uppercase tracking-[0.25em] text-[#C2A95B]/80"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Swipe →
                </span>
              </div>
            </div>

            {/* Desktop grid (compact) */}
            <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
              {/* By Road */}
              <div className="rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-4 backdrop-blur-sm">
                <h3
                  className="mb-1.5 text-sm font-bold text-[#FFF8E7] md:text-base"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  By Road
                </h3>
                <div className="mb-2.5 h-px w-10 bg-[#C2A95B]/50" />
                <p
                  className="text-[11px] leading-relaxed text-[#FFF8E7]/70 md:text-[12px]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  From Ranchi city, head north-west toward Kanke. Autos, taxis
                  and app-based cabs are all easily available. The journey
                  takes roughly 30–40 minutes depending on traffic.
                </p>
              </div>

              {/* By Rail */}
              <div className="rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-4 backdrop-blur-sm">
                <h3
                  className="mb-1.5 text-sm font-bold text-[#FFF8E7] md:text-base"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  By Rail
                </h3>
                <div className="mb-2.5 h-px w-10 bg-[#C2A95B]/50" />
                <p
                  className="text-[11px] leading-relaxed text-[#FFF8E7]/70 md:text-[12px]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  The nearest railway station is Ranchi Junction (~15 km from
                  the temple). Cabs and autos are readily available at the
                  station for the onward journey.
                </p>
              </div>

              {/* By Air */}
              <div className="rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-4 backdrop-blur-sm">
                <h3
                  className="mb-1.5 text-sm font-bold text-[#FFF8E7] md:text-base"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  By Air
                </h3>
                <div className="mb-2.5 h-px w-10 bg-[#C2A95B]/50" />
                <p
                  className="text-[11px] leading-relaxed text-[#FFF8E7]/70 md:text-[12px]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  The nearest airport is Birsa Munda Airport, Ranchi (~20 km).
                  Prepaid taxis and app-based cabs are available at the airport
                  throughout the day.
                </p>
              </div>

              {/* By Car */}
              <div className="rounded-xl border border-[#C2A95B]/25 bg-white/[0.04] p-4 backdrop-blur-sm">
                <h3
                  className="mb-1.5 text-sm font-bold text-[#FFF8E7] md:text-base"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  By Car
                </h3>
                <div className="mb-2.5 h-px w-10 bg-[#C2A95B]/50" />
                <p
                  className="text-[11px] leading-relaxed text-[#FFF8E7]/70 md:text-[12px]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Drive north-west from Ranchi city centre toward
                  Kanke/Boreya. Parking is available near the temple entrance
                  for cars and two-wheelers, though it can fill up on festival
                  days.
                </p>
              </div>
            </div>
          </div>

          {/* Open in Google Maps CTA */}
          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/yrRVedJvH8AAGELq8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[#C2A95B] bg-[#C2A95B]/15 px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C2A95B]/25"
            >
              <span
                className="text-xs font-medium uppercase tracking-[0.2em] text-[#C2A95B] md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Open in Google Maps
              </span>
              <span className="text-lg text-[#C2A95B] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — FAQ
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E7] py-12 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #C2A95B 1px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10">
          <div className="mb-9 text-center md:mb-11">
            <p
              className="mb-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] md:text-xs"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Before You Ask
            </p>

            <h2
              className="text-3xl font-bold leading-tight text-[#800000] md:text-5xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Frequently Asked <span className="text-[#C2A95B]">Questions</span>
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C2A95B]" />
              <span className="text-[#C2A95B]">✦</span>
              <span className="h-px w-12 bg-[#C2A95B]" />
            </div>
          </div>

          <div className="space-y-3">
            {visibleFaqIndices.map((idx) => {
              const faq = faqs[idx];
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-sm transition-all duration-300 ${
                    isOpen
                      ? "border-[#C2A95B] shadow-md"
                      : "border-[#C2A95B]/30 hover:border-[#C2A95B]/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                  >
                    <h3
                      className="text-sm font-bold leading-snug text-[#800000] md:text-base"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {faq.q}
                    </h3>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-base transition-all duration-300 ${
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
                      <div className="px-5 pb-5 md:px-6">
                        <div className="mb-3 h-px w-full bg-[#C2A95B]/20" />
                        <p
                          className="text-[12px] leading-relaxed text-[#800000]/75 md:text-[13px]"
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
          SECTION 6 — CTA / CLOSING
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-20">
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
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C2A95B]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2
            className="mt-5 flex justify-center whitespace-nowrap text-2xl font-bold leading-tight text-[#800000] md:text-8xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            We Hope to See You <span className="text-[#C2A95B]">&nbsp;Soon</span>
          </h2>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/darshan"
              className="rounded-full bg-[#800000] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#FFF8E7] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#660000] hover:shadow-lg md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Plan a Darshan
            </a>

            <a
              href="/events"
              className="rounded-full border border-[#C2A95B] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#800000] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C2A95B] hover:text-white md:text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              View Events
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#C2A95B]/30" />
            <span className="text-[#C2A95B]">✦</span>
            <span className="h-px w-16 bg-[#C2A95B]/30" />
          </div>
        </div>
      </section>
    </main>
  );
}
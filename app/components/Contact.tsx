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

const contactInfo = [
  {
    icon: <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#C2A95B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
    title: "Visit Us",
    lines: ["Madan Mohan Mandir, Boreya, Kanke", "Ranchi, Jharkhand – 834006 (India)"],
  },
  {
    icon: <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#C2A95B"></path> </g></svg>,
    title: "Call Us",
    lines: ["+91 74883 95587", "Mon–Sat : 5 AM – 9 PM"],
  },
  {
    icon:  <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="mail"> <g> <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#C2A95B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <rect fill="none" height="14" rx="2" ry="2" stroke="#C2A95B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"></rect> </g> </g> </g> </g></svg>,
    title: "Email Us",
    lines: ["madanmohanmandir1665@gmail.com", "Replies within 24–48 hrs"],
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${cinzel.variable} ${jakarta.variable} relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-24 lg:py-32`}
    >
      {/* =====================================================
          MANDIR BACKGROUND PATTERN
      ====================================================== */}

      {/* Main subtle geometric / mandala pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at center,
              #C2A95B 1px,
              transparent 1.5px
            ),
            linear-gradient(
              45deg,
              transparent 48%,
              #C2A95B 49%,
              #C2A95B 51%,
              transparent 52%
            ),
            linear-gradient(
              -45deg,
              transparent 48%,
              #C2A95B 49%,
              #C2A95B 51%,
              transparent 52%
            )
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Soft golden glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C2A95B]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#800000]/5 blur-3xl" />

      {/* =====================================================
          TOP-LEFT DECORATIVE IMAGE SLOT
      ====================================================== */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-28 w-28 sm:h-32 sm:w-32 md:block md:h-40 md:w-40 lg:h-56 lg:w-56">
        {/* Replace src with your decorative PNG */}
        <Image
          src="/elements/feather.png"
          alt=""
          fill
          sizes="224px"
          className="object-contain object-left-top opacity-90"
          priority
        />
      </div>

      {/* =====================================================
          TOP-RIGHT DECORATIVE IMAGE SLOT
      ====================================================== */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 hidden h-28 w-28 sm:h-32 sm:w-32 md:block md:h-40 md:w-40 lg:h-56 lg:w-56">
        {/* Replace src with your decorative PNG */}
        <Image
          src="/elements/feather.png"
          alt=""
          fill
          sizes="224px"
          className="object-contain object-right-top opacity-90 scale-x-[-1]"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10 md:mb-14">
          <p
            className="mb-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C2A95B] sm:mb-3 sm:text-xs sm:tracking-[0.4em]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            We'd Love to Hear From You
          </p>
          <h2
            className="mb-3 text-2xl font-bold text-[#800000] sm:mb-4 sm:text-3xl md:mb-6 md:text-5xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Get in <span className="text-[#C2A95B]">Touch</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-2 sm:gap-3">
            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#C2A95B]/70 sm:w-16" />
            <span className="text-sm text-[#C2A95B] sm:text-base">✦</span>
            <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#C2A95B]/70 sm:w-16" />
          </div>
          <p
            className="mx-auto mt-3 max-w-2xl text-xs font-light leading-relaxed text-[#800000]/70 sm:mt-4 sm:text-sm md:mt-6 md:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Planning a visit, offering seva, or just curious? Reach out — the
            Madan Mohan Mandir family is always here to welcome you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          {/* LEFT: Contact info cards */}
          <div className="space-y-3 sm:space-y-4">
            {contactInfo.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-xl border border-[#C2A95B]/25 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C2A95B] hover:shadow-md sm:rounded-2xl sm:p-6"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C2A95B]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#C2A95B]/30 bg-[#C2A95B]/5 text-xl sm:h-12 sm:w-12 sm:rounded-xl sm:text-2xl">
                    {c.icon}
                  </div>
                  <div>
                    <h3
                      className="mb-1 text-sm font-bold text-[#800000] sm:mb-2 sm:text-base md:text-lg"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {c.title}
                    </h3>
                    {c.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[11px] font-light leading-relaxed text-[#800000]/70 sm:text-xs md:text-sm"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick action */}
            <a
              href="/contact"
              className="group flex items-center justify-between rounded-xl border border-[#C2A95B]/30 bg-gradient-to-r from-[#C2A95B]/[0.08] to-transparent p-4 backdrop-blur-sm transition-all duration-500 hover:border-[#C2A95B] hover:from-[#C2A95B]/[0.15] sm:rounded-2xl sm:p-6"
            >
              <div>
                <p
                  className="mb-1 text-[10px] font-medium uppercase tracking-widest text-[#C2A95B] sm:text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Full Contact Page
                </p>
                <p
                  className="text-xs font-semibold text-[#800000] sm:text-sm md:text-base"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Departments & Map
                </p>
              </div>
              <span className="text-xl text-[#C2A95B] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                →
              </span>
            </a>
          </div>

          {/* RIGHT: Quick form */}
          <div className="relative overflow-hidden rounded-xl border border-[#C2A95B]/25 bg-gradient-to-br from-[#C2A95B]/[0.30] to-transparent p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8">
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#C2A95B]/10 blur-3xl" />

            <div className="relative">
              <h3
                className="mb-1 text-lg font-bold text-[#800000] sm:mb-2 sm:text-xl"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Send a Quick Message
              </h3>
              <p
                className="mb-4 text-[11px] font-light text-[#800000]/60 sm:mb-6 sm:text-xs md:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                We'll respond within 24–48 hours.
              </p>

              <form className="space-y-3 sm:space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label
                      className="mb-1 block text-[9px] font-medium uppercase tracking-widest text-[#C2A95B] sm:mb-2 sm:text-[10px]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-[#C2A95B]/25 bg-white/60 px-3 py-2.5 text-xs text-[#800000] placeholder-[#800000]/30 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:bg-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-[9px] font-medium uppercase tracking-widest text-[#C2A95B] sm:mb-2 sm:text-[10px]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-[#C2A95B]/25 bg-white/60 px-3 py-2.5 text-xs text-[#800000] placeholder-[#800000]/30 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:bg-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="mb-1 block text-[9px] font-medium uppercase tracking-widest text-[#C2A95B] sm:mb-2 sm:text-[10px]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-[#C2A95B]/25 bg-white/60 px-3 py-2.5 text-xs text-[#800000] placeholder-[#800000]/30 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:bg-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="mb-1 block text-[9px] font-medium uppercase tracking-widest text-[#C2A95B] sm:mb-2 sm:text-[10px]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-lg border border-[#C2A95B]/25 bg-white/60 px-3 py-2.5 text-xs text-[#800000] placeholder-[#800000]/30 outline-none transition-all duration-300 focus:border-[#C2A95B] focus:bg-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#C2A95B] to-[#a88f45] px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-lg shadow-[#C2A95B]/30 transition-all duration-300 hover:shadow-[#C2A95B]/50 hover:brightness-110 sm:px-8 sm:py-3.5 sm:text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
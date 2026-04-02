const TEAM = [
  {
    name: "Ganga Karki",
    role: "Beauty Specialist",
    bio: "Passionate about helping every client look and feel their best. Ganga brings warmth, skill, and years of experience to every service — making each visit feel truly personal.",
    initials: "GK",
  },
  {
    name: "Reema Gurung",
    role: "Beauty Specialist",
    bio: "Dedicated to delivering personalized care with a gentle touch. Reema\u2019s attention to detail and commitment to craft ensures a beautiful, memorable experience every visit.",
    initials: "RG",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#F9F7F4] py-16 sm:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-7 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12 sm:mb-16 lg:mb-20 pb-6 sm:pb-8 border-b border-[#E8E3DB]">
          <div>
            <p
              className="text-[#C4714A] uppercase tracking-[0.5em] mb-2 sm:mb-3"
              style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 400 }}
            >
              Our Professionals
            </p>
            <h2
              className="text-[#1A1A1A] leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 5.5vw, 58px)",
                fontWeight: 400,
              }}
            >
              Meet the Team
            </h2>
          </div>
          <a
            href="https://book.squareup.com/appointments/rpad4r74waczrj/location/LQ5APZMWFKHYR/services"
            className="group hidden sm:inline-flex items-center gap-3 px-7 py-3.5 bg-[#1A1A1A] text-white hover:bg-[#C4714A] transition-all duration-300 uppercase tracking-[0.2em] shrink-0"
            style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600 }}
          >
            Book with Us
            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 12 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M1 5h10M7 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E3DB]">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group bg-[#F9F7F4] hover:bg-white transition-colors duration-300 p-8 sm:p-10 lg:p-12 flex flex-col gap-6"
            >
              {/* Top: initials + role */}
              <div className="flex items-start justify-between">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#C4714A] transition-colors duration-300"
                >
                  <span
                    className="text-white/80 select-none"
                    style={{ fontFamily: "var(--font-great-vibes)", fontSize: "clamp(22px, 3.5vw, 28px)" }}
                  >
                    {m.initials}
                  </span>
                </div>
                <span
                  className="text-[#C4714A] uppercase tracking-[0.3em] pt-1"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "9.5px", fontWeight: 400 }}
                >
                  {m.role}
                </span>
              </div>

              {/* Name */}
              <h3
                className="text-[#1A1A1A] leading-[1.1]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(26px, 4vw, 42px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                {m.name}
              </h3>

              {/* Divider */}
              <div className="w-10 h-px bg-[#E8E3DB]" aria-hidden="true" />

              {/* Bio */}
              <p
                className="text-[#888078] leading-[1.85]"
                style={{ fontFamily: "var(--font-inter)", fontSize: "13.5px", fontWeight: 300 }}
              >
                {m.bio}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden flex justify-center">
          <a
            href="https://book.squareup.com/appointments/rpad4r74waczrj/location/LQ5APZMWFKHYR/services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#C4714A] transition-all duration-300 uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600 }}
          >
            Book with Us
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M1 5h10M7 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Pull quote */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#E8E3DB] text-center">
          <p
            className="text-[#C8C3BB]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(18px, 3.5vw, 28px)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            &ldquo;Your comfort is our craft.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

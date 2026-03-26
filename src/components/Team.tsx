const TEAM = [
  {
    name: "Ganga Karki",
    role: "Beauty Specialist",
    bio: "Passionate about helping every client look and feel their best. Ganga brings warmth, skill, and years of experience to every service.",
    initials: "GK",
  },
  {
    name: "Reema Gurung",
    role: "Beauty Specialist",
    bio: "Dedicated to delivering personalized care with a gentle touch. Reema\u2019s attention to detail ensures a beautiful experience every visit.",
    initials: "RG",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#FAF6F1] py-16 sm:py-24 lg:py-32 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p
            className="text-[#C9A87C] uppercase tracking-[0.4em] mb-3 sm:mb-4"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 400,
            }}
          >
            Our Professionals
          </p>
          <h2
            className="text-[#3A2519] leading-tight mb-4 sm:mb-5"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(26px, 4.5vw, 44px)",
              fontWeight: 400,
            }}
          >
            Meet the Team
          </h2>
          <p
            className="text-[#8A7268] mx-auto leading-relaxed max-w-md px-2"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 2.5vw, 14px)",
              fontWeight: 300,
            }}
          >
            Passionate, licensed professionals who take the time to understand
            your unique style and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-2xl mx-auto">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#1C1210] flex items-center justify-center mb-5 sm:mb-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(201,168,124,0.05) 15px, rgba(201,168,124,0.05) 16px)",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="text-[#C9A87C]/70 select-none relative z-10"
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    fontSize: "clamp(28px, 6vw, 36px)",
                  }}
                >
                  {m.initials}
                </span>
              </div>
              <h3
                className="text-[#3A2519] mb-1"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(17px, 3vw, 19px)",
                  fontWeight: 500,
                }}
              >
                {m.name}
              </h3>
              <p
                className="text-[#C17E68] uppercase tracking-[0.22em] mb-3 sm:mb-4"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "10px",
                }}
              >
                {m.role}
              </p>
              <div
                className="w-6 h-px bg-[#E2D0C6] mb-3 sm:mb-4"
                aria-hidden="true"
              />
              <p
                className="text-[#8A7268] leading-[1.75] max-w-[280px]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 300,
                }}
              >
                {m.bio}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-[#E2D0C6] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <p
            className="text-[#8A7268] text-center sm:text-left"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(16px, 3vw, 18px)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            &ldquo;Your comfort is our craft.&rdquo;
          </p>
          <a
            href="https://square.site/book/YOUR-SQUARE-SITE-ID"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 bg-[#1C1210] text-white hover:bg-[#C17E68] active:bg-[#C17E68] transition-colors duration-400 uppercase tracking-[0.2em] shrink-0"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 500,
            }}
          >
            Book with Our Team
            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 12 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M1 5h10M7 1l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

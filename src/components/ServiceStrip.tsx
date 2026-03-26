const SERVICES = [
  {
    title: "Hair",
    desc: "Cuts, color, balayage, keratin treatments, and blowouts by expert stylists.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M14 34c0-10 4-15 6-17s4-1 6 1 2 6 0 8-4 2-5 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 17V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M18 8l2-3 2 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Nails",
    desc: "Manicures, pedicures, gel, acrylics, and nail art for every occasion.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M15 34V18a5 5 0 0 1 10 0v16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="20" cy="14" rx="3.5" ry="2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Lashes",
    desc: "Extensions, lifts, and tinting for effortless, everyday beauty.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M8 22c4-6 10-10 12-10s8 4 12 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14 18l-2-6M18 15l-1-7M22 15l1-7M26 18l2-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Facials",
    desc: "Custom facials, deep cleansing, and anti-aging treatments for glowing skin.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M20 34c8 0 11-6 11-12S28 8 20 8 9 16 9 22s3 12 11 12z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M15 23c2-2 4-3 5-3s3 1 5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Wax & Threading",
    desc: "Gentle, precise hair removal for brows, face, and body areas.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M20 6c-4 8-10 10-10 18a10 10 0 0 0 20 0c0-8-6-10-10-18z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M16 28c2 3 5 3 7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Beauty Care",
    desc: "Full beauty treatments, bridal packages, and personalized wellness.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M20 8v12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14 14l6-6 6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 30c0-5 5-8 12-8s12 3 12 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServiceStrip() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24 lg:py-32 px-5 sm:px-6">
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
            What We Offer
          </p>
          <h2
            className="text-[#3A2519] leading-tight mb-4 sm:mb-5"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(26px, 4.5vw, 44px)",
              fontWeight: 400,
            }}
          >
            Our Services
          </h2>
          <p
            className="text-[#8A7268] mx-auto leading-relaxed max-w-lg px-2"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 2.5vw, 14px)",
              fontWeight: 300,
            }}
          >
            Every service is designed to make you feel your best &mdash; with
            expert care, premium products, and personal attention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2D0C6]/40">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white group p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 hover:bg-[#FAF6F1] active:bg-[#FAF6F1] transition-all duration-400 relative"
            >
              <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 lg:left-10 lg:right-10 h-[2px] bg-transparent group-hover:bg-[#C9A87C]/25 transition-all duration-400" />
              <div className="text-[#C17E68] group-hover:text-[#C9A87C] transition-colors duration-300">
                {s.icon}
              </div>
              <h3
                className="text-[#3A2519]"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(17px, 3vw, 20px)",
                  fontWeight: 500,
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-[#8A7268] leading-[1.8]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 300,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

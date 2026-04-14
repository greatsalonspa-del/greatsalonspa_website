const SQUARE_URL =
  "https://book.squareup.com/appointments/rpad4r74waczrj/location/LQ5APZMWFKHYR/services";

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="5" />
      <circle cx="10" cy="30" r="5" />
      <line x1="14.5" y1="12.5" x2="36" y2="27" />
      <line x1="14.5" y1="27.5" x2="36" y2="13" />
    </svg>
  );
}

function WaxIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="17" width="22" height="8" rx="1.5" />
      <path d="M27 17 L37 21 L27 25" />
      <path d="M11 14 C11 14 10 10 12 7 C13 10 14 10 15 7 C16 10 17 10 18 7 C19 10 18 14 18 14" />
    </svg>
  );
}

function LashesIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 20 C8 13 14 10 20 10 C26 10 32 13 35 20 C32 27 26 30 20 30 C14 30 8 27 5 20Z" />
      <circle cx="20" cy="20" r="5" />
      <line x1="14" y1="11" x2="12" y2="6" />
      <line x1="20" y1="9.5" x2="20" y2="4.5" />
      <line x1="26" y1="11" x2="28" y2="6" />
      <line x1="10" y1="15" x2="7.5" y2="11" />
      <line x1="30" y1="15" x2="32.5" y2="11" />
    </svg>
  );
}

function FacialIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="20" cy="20" r="13" />
      <path d="M15 24 C16 26.5 18 27.5 20 27.5 C22 27.5 24 26.5 25 24" />
      <path d="M14 16.5 C15 14.5 17 14.5 18 16.5" />
      <path d="M22 16.5 C23 14.5 25 14.5 26 16.5" />
    </svg>
  );
}

function ThreadingIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 16 C9 9 14 7 20 7 C26 7 31 9 34 16" />
      <path d="M6 27 C9 20 14 18 20 18 C26 18 31 20 34 27" />
      <circle cx="6" cy="27" r="2.5" />
      <circle cx="34" cy="27" r="2.5" />
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="20" cy="20" r="3.5" />
      <ellipse cx="20" cy="12" rx="3" ry="6" />
      <ellipse cx="20" cy="28" rx="3" ry="6" />
      <ellipse cx="12" cy="20" rx="6" ry="3" />
      <ellipse cx="28" cy="20" rx="6" ry="3" />
      <path d="M15.5 15.5 C13 11 10 9 8 8 C9 10 11 13 15.5 15.5Z" />
      <path d="M24.5 24.5 C27 29 30 31 32 32 C31 30 29 27 24.5 24.5Z" />
      <path d="M24.5 15.5 C29 13 31 10 32 8 C30 9 27 11 24.5 15.5Z" />
      <path d="M15.5 24.5 C11 27 9 30 8 32 C10 31 13 29 15.5 24.5Z" />
    </svg>
  );
}

const SERVICES = [
  {
    num: "01",
    title: "Threading",
    desc: "Precise brow shaping and facial threading — clean lines, defined arches, lasting results.",
    Icon: ThreadingIcon,
  },
  {
    num: "02",
    title: "Waxing",
    desc: "Full-body and facial waxing — smooth, long-lasting results with a gentle touch.",
    Icon: WaxIcon,
  },
  {
    num: "03",
    title: "Lashes",
    desc: "Extensions, lifts, and tinting that open up your eyes and simplify your routine.",
    Icon: LashesIcon,
  },
  {
    num: "04",
    title: "Facials",
    desc: "Custom facials, deep cleansing, and anti-aging treatments for skin that genuinely glows.",
    Icon: FacialIcon,
  },
  {
    num: "05",
    title: "Hair",
    desc: "Precision cuts, bold color, balayage, keratin treatments, and blowouts — by stylists who listen.",
    Icon: ScissorsIcon,
  },
  {
    num: "06",
    title: "Beauty Care",
    desc: "Full beauty packages and personalized wellness treatments — your day, entirely your way.",
    Icon: LotusIcon,
  },
];

export default function ServiceStrip() {
  return (
    <section id="services" className="bg-[#0D0D0D] py-14 sm:py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-7 sm:px-10 lg:px-16">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-14 lg:mb-16">
          <div>
            <p
              className="text-[#C4714A] uppercase tracking-[0.45em] mb-2 sm:mb-3"
              style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 400 }}
            >
              What We Offer
            </p>
            <h2
              className="text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 5.5vw, 56px)", fontWeight: 400 }}
            >
              Our Services
            </h2>
          </div>

          <a
            href={SQUARE_URL}
            className="group hidden sm:inline-flex items-center gap-3 px-7 py-3.5
                       border border-white/15 text-white/50
                       hover:border-[#C4714A] hover:text-[#C4714A]
                       transition-all duration-300 uppercase tracking-[0.22em] shrink-0 self-end"
            style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 500 }}
          >
            Book Any Service
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 12 10"
                 fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M1 5h10M7 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Icon + text grid — gap-px with background creates hairline dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
          {SERVICES.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.title}
                className="group bg-[#0D0D0D] hover:bg-[#191919] transition-colors duration-300 cursor-pointer
                           p-5 sm:p-8 lg:p-10 flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                {/* Icon */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 text-[#C4714A] mb-3 sm:mb-5">
                  <Icon />
                </div>

                {/* Number */}
                <span
                  className="text-white/20 mb-1.5 sm:mb-2"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 400, letterSpacing: "0.18em" }}
                >
                  {s.num}
                </span>

                {/* Name */}
                <h3
                  className="text-white mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(17px, 2.8vw, 26px)", fontWeight: 500 }}
                >
                  {s.title}
                </h3>

                {/* Terracotta separator */}
                <div className="w-6 sm:w-8 h-px bg-[#C4714A]/40 mb-3 sm:mb-4" aria-hidden="true" />

                {/* Description */}
                <p
                  className="text-white/60 leading-relaxed flex-1 line-clamp-3 sm:line-clamp-none"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(12px, 1.5vw, 14px)", fontWeight: 300 }}
                >
                  {s.desc}
                </p>

                {/* Book link */}
                <a
                  href={SQUARE_URL}
                  className="inline-flex items-center gap-2 mt-4 sm:mt-6
                             text-[#C4714A]/80 hover:text-[#C4714A]
                             transition-colors duration-200 uppercase tracking-[0.15em]"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
                >
                  Book
                  <svg className="w-3 h-3" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M1 5h10M7 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-7 sm:hidden flex justify-center">
          <a
            href={SQUARE_URL}
            className="inline-flex items-center gap-3 px-8 py-4
                       border border-white/15 text-white/55
                       active:border-[#C4714A] active:text-[#C4714A]
                       transition-all duration-300 uppercase tracking-[0.22em]"
            style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
          >
            Book Any Service
            <svg className="w-3 h-3" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M1 5h10M7 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

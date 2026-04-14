export default function BrandStatement() {
  return (
    <section className="bg-[#1A1A1A] py-20 sm:py-28 lg:py-36 px-7 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          {/* Left: big italic statement */}
          <blockquote className="flex-1">
            <p
              className="text-white leading-[1.12]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(38px, 6.5vw, 80px)",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Every detail,
              <br />
              <span className="text-[#C4714A]">intentionally</span>
              <br />
              personal.
            </p>
          </blockquote>

          {/* Right: supporting text + link */}
          <div className="lg:max-w-sm lg:pb-3 shrink-0">
            <div className="w-10 h-px bg-white/15 mb-6 sm:mb-7" aria-hidden="true" />
            <p
              className="text-white/60 leading-[1.85] mb-8 sm:mb-10"
              style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 300 }}
            >
              At Great Salon &amp; Spa, beauty isn&apos;t a transaction — it&apos;s
              an experience. We take the time to understand what makes you feel your
              best, and we deliver it, every single visit.
            </p>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 text-white/60 hover:text-[#C4714A] transition-colors duration-300 uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 500 }}
            >
              Our Story
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

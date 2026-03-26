export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-5 sm:px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, #F5EDE6 0%, #FAF6F1 60%, #FAF6F1 100%)",
      }}
    >
      {/* Faint watermark */}
      <span
        className="absolute select-none pointer-events-none leading-none opacity-[0.025]"
        style={{
          fontFamily: "var(--font-great-vibes)",
          fontSize: "min(60vw, 700px)",
          color: "#C17E68",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
        }}
        aria-hidden="true"
      >
        G
      </span>

      {/* Subtle gold corner accents */}
      <div
        className="absolute top-28 left-8 sm:left-14 lg:left-20 hidden sm:block"
        aria-hidden="true"
      >
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A87C]/20 to-transparent" />
        <div className="w-px h-16 bg-gradient-to-b from-[#C9A87C]/20 to-transparent" />
      </div>
      <div
        className="absolute bottom-12 right-8 sm:right-14 lg:right-20 hidden sm:block"
        aria-hidden="true"
      >
        <div className="w-16 h-px bg-gradient-to-l from-[#C9A87C]/20 to-transparent translate-y-[64px]" />
        <div className="w-px h-16 bg-gradient-to-t from-[#C9A87C]/20 to-transparent translate-y-[64px] translate-x-[64px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl">
        <h1
          className="leading-[0.8] mb-4 sm:mb-5 animate-fade-in-up anim-delay-100 select-none"
          style={{
            fontFamily: "var(--font-great-vibes)",
            fontSize: "clamp(80px, 18vw, 200px)",
            color: "#C17E68",
          }}
        >
          Great
        </h1>

        <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-10 animate-fade-in-up anim-delay-200">
          <div className="h-px w-8 sm:w-14 bg-[#C9A87C]/30" />
          <p
            className="text-[#3A2519] uppercase whitespace-nowrap"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(11px, 1.6vw, 18px)",
              fontWeight: 400,
              letterSpacing: "0.55em",
            }}
          >
            Salon &amp; Spa
          </p>
          <div className="h-px w-8 sm:w-14 bg-[#C9A87C]/30" />
        </div>

        <p
          className="text-[#8A7268] uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-10 sm:mb-14 animate-fade-in-up anim-delay-300 max-w-[340px] sm:max-w-none leading-relaxed sm:leading-normal"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(9px, 2.5vw, 11px)",
            fontWeight: 300,
          }}
        >
          Hair &nbsp;&middot;&nbsp; Nails &nbsp;&middot;&nbsp; Lashes
          &nbsp;&middot;&nbsp; Facials &nbsp;&middot;&nbsp; Wax
          &nbsp;&middot;&nbsp; Threading
        </p>

        <a
          href="https://square.site/book/YOUR-SQUARE-SITE-ID"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-[18px] bg-[#1C1210] text-white hover:bg-[#C17E68] active:bg-[#C17E68] transition-all duration-500 uppercase tracking-[0.2em] sm:tracking-[0.25em] animate-fade-in-up anim-delay-400"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(10px, 2.5vw, 11px)",
            fontWeight: 400,
          }}
        >
          Book Appointment
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            aria-hidden="true"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div className="flex items-center gap-4 sm:gap-5 mt-10 sm:mt-14 animate-fade-in-up anim-delay-500">
          <a
            href="tel:+15716709838"
            className="text-[#8A7268] hover:text-[#C17E68] active:text-[#C17E68] transition-colors"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 300,
            }}
          >
            (571) 670-9838
          </a>
          <span className="w-px h-3 bg-[#C9A87C]/20" aria-hidden="true" />
          <span
            className="text-[#8A7268]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 300,
            }}
          >
            Walk-ins Welcome
          </span>
        </div>
      </div>
    </section>
  );
}

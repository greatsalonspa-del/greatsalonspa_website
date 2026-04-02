import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2400&auto=format&fit=crop"
        alt="Great Salon and Spa Vienna Virginia"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center animate-ken-burns"
        style={{ filter: "saturate(0.85)" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/25 to-[#0D0D0D]/75" />
      <div className="absolute inset-0 bg-[#2A1008]/30 mix-blend-multiply" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(13,13,13,0.28) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Corner frame brackets — desktop only */}
      <div className="absolute top-[88px] sm:top-[96px] left-6 sm:left-10 lg:left-14 hidden sm:block" aria-hidden="true">
        <div className="w-10 sm:w-14 lg:w-16 h-px bg-white/22" />
        <div className="w-px h-10 sm:h-14 lg:h-16 bg-white/22" />
      </div>
      <div className="absolute top-[88px] sm:top-[96px] right-6 sm:right-10 lg:right-14 hidden sm:flex flex-col items-end" aria-hidden="true">
        <div className="w-10 sm:w-14 lg:w-16 h-px bg-white/22" />
        <div className="w-px h-10 sm:h-14 lg:h-16 bg-white/22 ml-auto" />
      </div>
      <div className="absolute bottom-14 sm:bottom-18 left-6 sm:left-10 lg:left-14 hidden sm:flex flex-col" aria-hidden="true">
        <div className="w-px h-10 sm:h-14 lg:h-16 bg-white/22" />
        <div className="w-10 sm:w-14 lg:w-16 h-px bg-white/22" />
      </div>
      <div className="absolute bottom-14 sm:bottom-18 right-6 sm:right-10 lg:right-14 hidden sm:flex flex-col items-end" aria-hidden="true">
        <div className="w-px h-10 sm:h-14 lg:h-16 bg-white/22 ml-auto" />
        <div className="w-10 sm:w-14 lg:w-16 h-px bg-white/22" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-6 sm:px-10
                      py-12 sm:py-28 md:py-32 max-w-5xl mx-auto">

        {/* Location eyebrow */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-9 lg:mb-14 animate-fade-in anim-delay-100 ml-32 sm:ml-32 lg:ml-48">
          <div className="h-px w-6 sm:w-10 bg-white/22" />
          <span
            className="text-white/45 uppercase tracking-[0.45em] sm:tracking-[0.65em]"
            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(9px, 2vw, 11px)", fontWeight: 300 }}
          >
            Vienna, Virginia
          </span>
          <div className="h-px w-6 sm:w-10 bg-white/22" />
        </div>

        {/* "Great" script */}
        <h1
          className="leading-[0.82] select-none animate-fade-in-up anim-delay-200"
          style={{
            fontFamily: "var(--font-great-vibes)",
            fontSize: "clamp(140px, 35vw, 300px)",
            color: "#FFFFFF",
            textShadow: "0 4px 48px rgba(0,0,0,0.35)",
          }}
        >
          Great
        </h1>

        {/* SALON & SPA */}
        <div className="flex items-center gap-3 sm:gap-7 lg:gap-10 mt-6 sm:mt-4 lg:mt-10 mb-5 sm:mb-9 animate-fade-in-up anim-delay-300">
          <div className="h-px w-8 sm:w-16 lg:w-24 bg-white/28" />
          <h2
            className="text-white/80 uppercase whitespace-nowrap"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(14px, 2.6vw, 28px)",
              fontWeight: 400,
              letterSpacing: "0.6em",
              textIndent: "0.6em",
            }}
          >
            Salon &amp; Spa
          </h2>
          <div className="h-px w-8 sm:w-16 lg:w-24 bg-white/28" />
        </div>

        {/* Tagline — word-by-word reveal */}
        <p
          className="text-white/48 mb-5 sm:mb-12 px-2 flex flex-wrap justify-center gap-x-[0.32em]"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {[
            { word: "Crafted", delay: 700 },
            { word: "beauty.", delay: 900 },
            { word: "Personal", delay: 1150 },
            { word: "care.", delay: 1350 },
          ].map(({ word, delay }) => (
            <span
              key={word}
              className="animate-word-reveal inline-block"
              style={{ animationDelay: `${delay}ms` }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Services strip */}
        <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-1.5
                        mb-6 sm:mb-14 animate-fade-in anim-delay-400 px-2 max-w-[320px] sm:max-w-none">
          {["Hair", "Nails", "Lashes", "Facials", "Wax", "Threading"].map((s, i, arr) => (
            <span key={s} className="flex items-center gap-3 sm:gap-4">
              <span
                className="text-white/35 uppercase tracking-[0.25em] sm:tracking-[0.4em]"
                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(10px, 2vw, 11px)", fontWeight: 300 }}
              >
                {s}
              </span>
              {i < arr.length - 1 && (
                <span className="text-white/18 text-[6px]" aria-hidden="true">&#9679;</span>
              )}
            </span>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href="https://book.squareup.com/appointments/rpad4r74waczrj/location/LQ5APZMWFKHYR/services"
          className="group inline-flex items-center gap-3 sm:gap-4
                     px-9 sm:px-14 py-4 sm:py-5
                     bg-white text-[#0D0D0D] hover:bg-[#C4714A] hover:text-white
                     active:bg-[#C4714A] active:text-white
                     transition-all duration-350 uppercase tracking-[0.25em]
                     animate-fade-in-up anim-delay-500"
          style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(11px, 1.8vw, 12px)", fontWeight: 700 }}
        >
          Book Appointment
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M2 8h12M9 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Secondary info */}
        <div className="flex items-center gap-4 sm:gap-5 mt-5 sm:mt-8 animate-fade-in anim-delay-600">
          <a
            href="tel:+15716709838"
            className="text-white/32 hover:text-white/65 transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(12px, 2.5vw, 13px)", fontWeight: 300 }}
          >
            (571) 670-9838
          </a>
          <span className="w-px h-3.5 bg-white/15" aria-hidden="true" />
          <span
            className="text-white/32"
            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(12px, 2.5vw, 13px)", fontWeight: 300 }}
          >
            Walk-ins Welcome
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in anim-delay-700" aria-hidden="true">
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}

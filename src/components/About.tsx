import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#EEDDD3] py-14 sm:py-24 lg:py-32 px-5 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 lg:gap-20 items-center">
        {/* Left: text */}
        <div className="flex flex-col order-1 lg:order-1">
          <p
            className="text-[#C17E68] uppercase tracking-[0.4em] mb-3 sm:mb-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 400,
            }}
          >
            About Us
          </p>
          <h2
            className="text-[#3A2519] leading-[1.12] mb-4 sm:mb-7"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(26px, 4.5vw, 46px)",
              fontWeight: 400,
            }}
          >
            Where Beauty Meets
            <br />
            <em>Personal Care</em>
          </h2>
          <div
            className="w-12 h-px bg-[#C9A87C]/30 mb-5 sm:mb-8"
            aria-hidden="true"
          />
          <p
            className="text-[#6B5349] leading-[1.75] sm:leading-[1.9] mb-3 sm:mb-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 2.5vw, 14.5px)",
              fontWeight: 300,
            }}
          >
            Great Salon &amp; Spa is more than a beauty destination &mdash;
            it&apos;s a space where every service is personal, every detail is
            intentional, and every visit leaves you feeling your absolute best.
          </p>
          <p
            className="text-[#6B5349] leading-[1.75] sm:leading-[1.9] mb-7 sm:mb-10"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 2.5vw, 14.5px)",
              fontWeight: 300,
            }}
          >
            Located in Vienna, Virginia, our licensed professionals specialize
            in hair, nails, lashes, facials, waxing, threading, and full beauty
            care &mdash; using premium products and personalized attention every
            single visit.
          </p>

          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4">
            {[
              "Licensed professionals",
              "Premium products",
              "Warm & welcoming",
              "Personalized care",
              "Walk-ins welcome",
              "Bridal services",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9A87C]/50 rotate-45 shrink-0" />
                <span
                  className="text-[#6B5349]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(11px, 2.5vw, 12.5px)",
                    fontWeight: 300,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: spa image */}
        <div className="relative order-2 lg:order-2">
          <div className="relative aspect-[5/4] sm:aspect-[4/5] lg:aspect-[4/5] w-full max-w-[440px] mx-auto overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
              alt="Woman receiving a relaxing spa facial treatment"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 440px"
              className="object-cover"
              style={{
                filter: "saturate(0.85) brightness(0.95) contrast(0.97)",
              }}
            />
            <div
              className="absolute inset-0 bg-[#C17E68]/[0.06] pointer-events-none mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          {/* Offset frame — hidden on small phones */}
          <div
            className="absolute top-3 left-3 sm:top-4 sm:left-4 w-full h-full border border-[#C9A87C]/15 -z-10 max-w-[440px] mx-auto hidden sm:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

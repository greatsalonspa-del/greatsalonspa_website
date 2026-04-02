import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden"
      style={{ background: "radial-gradient(ellipse 90% 70% at 15% 50%, #1E1510 0%, #111111 45%, #0D0D0D 100%)" }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] min-h-[560px] sm:min-h-[640px] lg:min-h-[720px]">

          {/* Left: text */}
          <div className="flex flex-col justify-center px-7 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-24 order-2 lg:order-1">
            <p
              className="text-[#C4714A] uppercase tracking-[0.5em] mb-5 sm:mb-7"
              style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 400 }}
            >
              About Us
            </p>

            {/* Pull quote */}
            <h2
              className="text-white leading-[1.1] mb-8 sm:mb-10"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(28px, 4.5vw, 52px)",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              More than a salon —<br />
              a space that&apos;s<br />
              <em className="not-italic font-[500]" style={{ color: "#C4714A" }}>entirely yours.</em>
            </h2>

            <div className="w-12 h-px bg-[#C4714A]/25 mb-7 sm:mb-9" aria-hidden="true" />

            <p
              className="text-white/50 leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(13.5px, 2.3vw, 15px)", fontWeight: 300 }}
            >
              Great Salon &amp; Spa is a beauty destination built on intention. Every service is
              personal, every detail considered, every client treated like a regular — whether
              it&apos;s your first visit or your fiftieth.
            </p>
            <p
              className="text-white/50 leading-[1.9] mb-10 sm:mb-12"
              style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(13.5px, 2.3vw, 15px)", fontWeight: 300 }}
            >
              Located in Vienna, Virginia, our licensed professionals bring years of expertise
              across hair, nails, lashes, facials, waxing, and threading — using premium
              products with a personal touch.
            </p>

            {/* Feature list — two columns */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              {[
                "Licensed professionals",
                "Premium products",
                "Warm & welcoming",
                "Personalized care",
                "Walk-ins welcome",
                "Bridal services",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#C4714A] shrink-0" />
                  <span
                    className="text-white/45"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(13px, 2vw, 13.5px)", fontWeight: 300 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: full-bleed image */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-auto order-1 lg:order-2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
              alt="Spa treatment at Great Salon and Spa"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-center"
              style={{ filter: "saturate(0.8) brightness(0.75)" }}
            />
            {/* Dark edge fade to blend with section background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/40 via-transparent to-transparent lg:block hidden" />
          </div>

        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

const GIFT_CARD_URL = "https://app.squareup.com/gift/MLA369GDZAYHQ/order";

export default function GiftCard() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, #1E1208 0%, #0D0D0D 70%)",
      }}
    >
      {/* Decorative lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4714A]/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4714A]/20 to-transparent" />

      <div className="max-w-screen-md mx-auto px-7 sm:px-10 text-center flex flex-col items-center">
        <Reveal className="flex flex-col items-center w-full">

        {/* Eyebrow */}
        <p
          className="text-[#C4714A] uppercase tracking-[0.5em] mb-5 sm:mb-7"
          style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 400 }}
        >
          Gift Cards
        </p>

        {/* Headline */}
        <h2
          className="text-white leading-[1.1] mb-5 sm:mb-7"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(34px, 6vw, 72px)",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Give the gift of <em className="not-italic" style={{ color: "#C4714A" }}>beauty.</em>
        </h2>

        {/* Divider */}
        <div className="w-10 h-px bg-[#C4714A]/30 mb-5 sm:mb-7" aria-hidden="true" />

        {/* Subtext */}
        <p
          className="text-white/65 leading-[1.85] mb-10 sm:mb-12 max-w-sm"
          style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(13px, 1.8vw, 15px)", fontWeight: 300 }}
        >
          Treat someone to a Great Salon &amp; Spa experience. eGift cards are delivered instantly by email and redeemable for any service.
        </p>

        {/* CTA */}
        <a
          href={GIFT_CARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 sm:gap-4
                     px-10 sm:px-14 py-4 sm:py-5
                     bg-[#C4714A] text-white hover:bg-white hover:text-[#0D0D0D]
                     transition-all duration-300 uppercase tracking-[0.25em]"
          style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(11px, 1.5vw, 12px)", fontWeight: 700 }}
        >
          Buy Gift Card
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

        {/* Fine print */}
        <p
          className="text-white/50 mt-6"
          style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 300 }}
        >
          Delivered instantly · Valid for all services
        </p>

        </Reveal>
      </div>
    </section>
  );
}

const ITEMS = [
  "Hair Styling",
  "Nail Art",
  "Lash Extensions",
  "Custom Facials",
  "Waxing",
  "Threading",
  "Beauty Care",
  "Bridal",
];

export default function ServiceMarquee() {
  return (
    <div className="bg-[#C4714A] py-3.5 sm:py-4 overflow-hidden select-none">
      <div className="animate-marquee flex whitespace-nowrap">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {ITEMS.map((s) => (
              <span key={`${i}-${s}`} className="flex items-center">
                <span
                  className="text-white/85 uppercase tracking-[0.38em] mx-5 sm:mx-7"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(11px, 1.8vw, 13px)",
                    fontWeight: 400,
                  }}
                >
                  {s}
                </span>
                <span className="text-white/35 text-[7px] sm:text-[8px]">&#9679;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

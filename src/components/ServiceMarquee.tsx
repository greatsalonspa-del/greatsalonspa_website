const ITEMS = [
  "Hair",
  "Nails",
  "Lashes",
  "Facials",
  "Waxing",
  "Threading",
  "Beauty Care",
  "Bridal",
];

export default function ServiceMarquee() {
  return (
    <div className="bg-[#1C1210] py-3 sm:py-4 overflow-hidden select-none">
      <div className="animate-marquee flex whitespace-nowrap">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {ITEMS.map((s) => (
              <span key={`${i}-${s}`} className="flex items-center">
                <span
                  className="text-[#C9A87C]/40 uppercase tracking-[0.3em] sm:tracking-[0.35em] mx-4 sm:mx-6"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(9px, 2vw, 11px)",
                    fontWeight: 300,
                  }}
                >
                  {s}
                </span>
                <span className="text-[#C9A87C]/15 text-[7px] sm:text-[8px]">
                  &#10022;
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

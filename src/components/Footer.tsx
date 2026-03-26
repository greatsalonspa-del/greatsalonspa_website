export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1210] text-[#C6AEA4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-10 sm:pb-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
          <div className="flex flex-col leading-none">
            <span
              className="text-[#C17E68] leading-none"
              style={{
                fontFamily: "var(--font-great-vibes)",
                fontSize: "32px",
              }}
            >
              Great
            </span>
            <span
              className="text-[#C9A87C]/40 uppercase tracking-[0.3em]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "8px",
                fontWeight: 400,
              }}
            >
              Salon &amp; Spa
            </span>
          </div>
          <p
            className="text-[#6A4A3E] leading-[1.8] max-w-[220px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            Premium beauty services in the heart of Vienna, Virginia.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h4
            className="text-[#C9A87C]/50 uppercase tracking-[0.25em] mb-1"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              fontWeight: 500,
            }}
          >
            Explore
          </h4>
          {[
            { label: "Services", href: "#services" },
            { label: "Our Team", href: "#team" },
            { label: "Book Now", href: "#booking" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#6A4A3E] hover:text-[#C17E68] active:text-[#C17E68] transition-colors py-0.5"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                fontWeight: 300,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4
            className="text-[#C9A87C]/50 uppercase tracking-[0.25em] mb-1"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              fontWeight: 500,
            }}
          >
            Contact
          </h4>
          <a
            href="tel:+15716709838"
            className="text-[#6A4A3E] hover:text-[#C17E68] active:text-[#C17E68] transition-colors py-0.5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            (571) 670-9838
          </a>
          <a
            href="mailto:greatsalonspa@gmail.com"
            className="text-[#6A4A3E] hover:text-[#C17E68] active:text-[#C17E68] transition-colors py-0.5 break-all sm:break-normal"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            greatsalonspa@gmail.com
          </a>
          <p
            className="text-[#6A4A3E] leading-[1.6]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            2104B Gallows Rd, Ste 2,
            <br />
            Vienna, VA 22182
          </p>
        </div>

        {/* Hours */}
        <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
          <h4
            className="text-[#C9A87C]/50 uppercase tracking-[0.25em] mb-1"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              fontWeight: 500,
            }}
          >
            Hours
          </h4>
          {[
            { days: "Mon \u2013 Fri", hrs: "9 am \u2013 7 pm" },
            { days: "Saturday", hrs: "9 am \u2013 6 pm" },
            { days: "Sunday", hrs: "10 am \u2013 4 pm" },
          ].map((r) => (
            <div
              key={r.days}
              className="flex justify-between max-w-[220px] text-[#6A4A3E]"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                fontWeight: 300,
              }}
            >
              <span>{r.days}</span>
              <span>{r.hrs}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#2A1A14] max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-[#4A2E26] text-center sm:text-left"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            fontWeight: 300,
          }}
        >
          &copy; {year} Great Salon &amp; Spa. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {["Instagram", "Facebook"].map((p) => (
            <a
              key={p}
              href="#"
              className="text-[#4A2E26] hover:text-[#C17E68] active:text-[#C17E68] uppercase tracking-[0.2em] transition-colors py-1"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
              }}
            >
              {p}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

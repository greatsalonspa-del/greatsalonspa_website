export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/[0.05]">
      <div className="max-w-screen-xl mx-auto px-7 sm:px-10 lg:px-16 pt-14 sm:pt-18 pb-10 sm:pb-12">
        {/* Top row: brand + nav */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16 mb-14 sm:mb-16 pb-10 sm:pb-12 border-b border-white/[0.05]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span
                className="text-white leading-none block"
                style={{ fontFamily: "var(--font-great-vibes)", fontSize: "44px" }}
              >
                Great
              </span>
              <span
                className="text-white/20 uppercase tracking-[0.4em] mt-0.5 block"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "8px", fontWeight: 400 }}
              >
                Salon &amp; Spa
              </span>
            </div>
            <p
              className="text-white/25 leading-[1.9] max-w-[220px]"
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
            >
              Premium beauty services in the heart of Vienna, Virginia.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-14">
            {/* Explore */}
            <div className="flex flex-col gap-3.5">
              <h4
                className="text-white/20 uppercase tracking-[0.35em] mb-0.5"
                style={{ fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 500 }}
              >
                Explore
              </h4>
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Book Now", href: "#booking" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/35 hover:text-white transition-colors duration-200 py-0.5"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3.5">
              <h4
                className="text-white/20 uppercase tracking-[0.35em] mb-0.5"
                style={{ fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 500 }}
              >
                Contact
              </h4>
              <a
                href="tel:+15716709838"
                className="text-white/35 hover:text-white transition-colors duration-200 py-0.5"
                style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
              >
                (571) 670-9838
              </a>
              <a
                href="mailto:greatsalonspa@gmail.com"
                className="text-white/35 hover:text-white transition-colors duration-200 py-0.5 break-all sm:break-normal"
                style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
              >
                greatsalonspa@gmail.com
              </a>
              <p
                className="text-white/35 leading-[1.75]"
                style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
              >
                2104B Gallows Rd, Ste 2,<br />
                Vienna, VA 22182
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-3.5 col-span-2 sm:col-span-1">
              <h4
                className="text-white/20 uppercase tracking-[0.35em] mb-0.5"
                style={{ fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 500 }}
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
                  className="flex justify-between max-w-[210px] text-white/35"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
                >
                  <span>{r.days}</span>
                  <span>{r.hrs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p
              className="text-white/18 text-center sm:text-left"
              style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 300 }}
            >
              &copy; {year} Great Salon &amp; Spa. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacy-policy"
                 className="text-white/18 hover:text-white/50 transition-colors duration-200"
                 style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 300 }}>
                Privacy Policy
              </a>
              <span className="text-white/10">·</span>
              <a href="/terms"
                 className="text-white/18 hover:text-white/50 transition-colors duration-200"
                 style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 300 }}>
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "Instagram", href: "https://www.instagram.com/greatsalonspa" },
              { label: "Facebook",  href: "https://www.facebook.com/people/Great-Salon-Spa/61580587087147/?mibextid=wwXIfr" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/18 hover:text-[#C4714A] uppercase tracking-[0.22em] transition-colors duration-200 py-1"
                style={{ fontFamily: "var(--font-inter)", fontSize: "9px" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

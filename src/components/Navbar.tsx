"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF6F1]/95 backdrop-blur-md shadow-[0_1px_0_0_#E2D0C6]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-[64px] sm:h-[72px] flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none shrink-0 group">
          <span
            className="text-[#C17E68] leading-none group-hover:text-[#A76753] transition-colors"
            style={{ fontFamily: "var(--font-great-vibes)", fontSize: "24px" }}
          >
            Great
          </span>
          <span
            className="text-[#3A2519]/50 uppercase tracking-[0.3em] leading-none"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "7px",
              fontWeight: 400,
            }}
          >
            Salon &amp; Spa
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[#3A2519]/55 hover:text-[#C17E68] transition-colors duration-200 uppercase tracking-[0.18em]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 400,
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          <a
            href="tel:+15716709838"
            className="text-[#8A7268] hover:text-[#C17E68] transition-colors"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            (571) 670-9838
          </a>
          <a
            href="https://square.site/book/YOUR-SQUARE-SITE-ID"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 lg:px-7 py-2.5 bg-[#1C1210] text-white hover:bg-[#C17E68] transition-colors duration-400 uppercase tracking-[0.18em]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 500,
            }}
          >
            Book Now
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2.5">
          <a
            href="https://square.site/book/YOUR-SQUARE-SITE-ID"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#1C1210] text-white uppercase tracking-[0.15em]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              fontWeight: 500,
            }}
          >
            Book
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 -mr-1"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-px bg-[#3A2519] mb-[5px] transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-[#3A2519] mb-[5px] transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-[#3A2519] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-[64px] bg-black/20 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`md:hidden bg-[#FAF6F1] border-b border-[#E2D0C6]/70 overflow-hidden transition-all duration-300 relative z-50 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-5 pb-6 pt-3 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#3A2519] hover:text-[#C17E68] active:text-[#C17E68] uppercase tracking-[0.15em] transition-colors block py-1"
                style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-[#E2D0C6]/50">
            <a
              href="tel:+15716709838"
              className="text-[#8A7268] active:text-[#C17E68] block py-1"
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
            >
              (571) 670-9838
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D0D0D]/92 backdrop-blur-sm border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-7 sm:px-10 lg:px-16 h-[64px] sm:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col group shrink-0">
          <span
            className="text-white leading-none block group-hover:text-[#C4714A] transition-colors duration-300"
            style={{ fontFamily: "var(--font-great-vibes)", fontSize: "36px" }}
          >
            Great
          </span>
          <span
            className="text-white/20 uppercase tracking-[0.4em] mt-0.5 block"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "8px", fontWeight: 400 }}
          >
            Salon &amp; Spa
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-white/40 hover:text-white transition-colors duration-200 uppercase tracking-[0.22em]"
                style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 400 }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+15716709838"
            className="text-white/30 hover:text-white/60 transition-colors"
            style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 300 }}
          >
            (571) 670-9838
          </a>
          <a
            href="https://book.squareup.com/appointments/rpad4r74waczrj/location/LQ5APZMWFKHYR/services"
            className="px-6 py-2.5 bg-white text-[#0D0D0D] hover:bg-[#C4714A] hover:text-white transition-all duration-300 uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600 }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="https://book.squareup.com/appointments/rpad4r74waczrj/location/LQ5APZMWFKHYR/services"
            className="px-4 py-2 bg-[#C4714A] text-white uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600 }}
          >
            Book
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 -mr-1.5 flex flex-col justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-[64px] bg-black/70 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-[#0D0D0D] border-b border-white/[0.06] overflow-hidden transition-all duration-300 relative z-50 ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-7 pb-7 pt-3 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/55 hover:text-white uppercase tracking-[0.2em] transition-colors block py-1"
                style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3 border-t border-white/[0.06]">
            <a
              href="tel:+15716709838"
              className="text-white/30 hover:text-white/60 block py-1 transition-colors"
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
            >
              (571) 670-9838
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default function LocationMap() {
  return (
    <section id="location" className="bg-[#0D0D0D]">
      {/* Full-width map */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[2.2/1] lg:aspect-[4/1]">
        <iframe
          title="Great Salon & Spa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.8035011276884!2d-77.2229122!3d38.9056086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25be037deee721bd%3A0x3266224d00e5323b!2sGreat%20Salon%20%26%20Spa!5e0!3m2!1sen!2sus!4v1775025551179!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-same-origin allow-scripts allow-popups allow-presentation allow-forms"
          allowFullScreen
          style={{ filter: "invert(0.88) grayscale(1) brightness(0.95) contrast(1.05)" }}
        />
      </div>

      {/* Info bar */}
      <div className="max-w-screen-xl mx-auto px-7 sm:px-10 lg:px-16 py-8 sm:py-10 border-t border-white/[0.05]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-10">
          {/* Address */}
          <div>
            <p
              className="text-white/45 uppercase tracking-[0.4em] mb-2"
              style={{ fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 400 }}
            >
              Find Us
            </p>
            <p
              className="text-white/60"
              style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 300 }}
            >
              2104B Gallows Rd, Ste 2, Vienna, VA 22182
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2104B+Gallows+Rd+Ste+2+Vienna+VA+22182"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 bg-white text-[#0D0D0D] hover:bg-[#C4714A] hover:text-white transition-all duration-300 uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600 }}
            >
              Get Directions
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                viewBox="0 0 12 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M1 5h10M7 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+15716709838"
              className="text-white/35 hover:text-white/70 transition-colors"
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
            >
              (571) 670-9838
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

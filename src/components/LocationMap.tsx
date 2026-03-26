export default function LocationMap() {
  return (
    <section id="location" className="bg-white py-14 sm:py-24 lg:py-32 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p
            className="text-[#C9A87C] uppercase tracking-[0.4em] mb-3 sm:mb-4"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 400,
            }}
          >
            Find Us
          </p>
          <h2
            className="text-[#3A2519] leading-tight mb-4 sm:mb-5"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(26px, 4.5vw, 44px)",
              fontWeight: 400,
            }}
          >
            Visit Our Salon
          </h2>
          <p
            className="text-[#8A7268] mx-auto leading-relaxed max-w-md"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 2.5vw, 14px)",
              fontWeight: 300,
            }}
          >
            2104B Gallows Rd, Ste 2, Vienna, VA 22182
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[5/2] overflow-hidden">
          <iframe
            title="Great Salon & Spa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.6!2d-77.2536!3d38.8851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e63c68f5bcf%3A0x0!2s2104B+Gallows+Rd%2C+Vienna%2C+VA+22182!5e0!3m2!1sen!2sus!4v1"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            style={{
              filter: "saturate(0.85) contrast(0.95)",
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-10">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=2104B+Gallows+Rd+Ste+2+Vienna+VA+22182"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#1C1210] text-white hover:bg-[#C17E68] active:bg-[#C17E68] transition-colors duration-400 uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 500,
            }}
          >
            Get Directions
            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 12 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M1 5h10M7 1l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="tel:+15716709838"
            className="text-[#8A7268] hover:text-[#C17E68] active:text-[#C17E68] transition-colors"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            (571) 670-9838
          </a>
        </div>
      </div>
    </section>
  );
}

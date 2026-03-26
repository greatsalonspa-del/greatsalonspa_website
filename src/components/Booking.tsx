const SQUARE_BOOKING_URL = "https://book.squareup.com/appointments/rpad4r74waczrj/location/LQ5APZMWFKHYR/services";

export default function Booking() {
  return (
    <section id="booking" className="bg-[#EEDDD3] py-14 sm:py-24 lg:py-32 px-5 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-[#C17E68] uppercase tracking-[0.4em] mb-4 sm:mb-5"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "10px",
            fontWeight: 400,
          }}
        >
          Reserve Your Visit
        </p>
        <h2
          className="text-[#3A2519] leading-[1.1] mb-5 sm:mb-6"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(26px, 4.5vw, 48px)",
            fontWeight: 400,
          }}
        >
          Book Your <em>Appointment</em>
        </h2>
        <div className="w-12 h-px bg-[#C9A87C]/30 mb-6 sm:mb-8 mx-auto" aria-hidden="true" />
        <p
          className="text-[#6B5349] leading-[1.8] mb-10 sm:mb-12 max-w-[420px] mx-auto"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(13px, 2.5vw, 14.5px)",
            fontWeight: 300,
          }}
        >
          Schedule your next appointment online in just a few clicks. Pick your
          service, choose a time that works, and we&apos;ll take care of the rest.
        </p>

        <a
          href={SQUARE_BOOKING_URL}
          className="group inline-flex items-center gap-3 sm:gap-4 px-10 sm:px-14 py-4 sm:py-[18px] bg-[#1C1210] text-white hover:bg-[#C17E68] active:bg-[#C17E68] transition-all duration-500 uppercase tracking-[0.25em] mb-10 sm:mb-12"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(10px, 2.5vw, 11px)",
            fontWeight: 400,
          }}
        >
          Book Now
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            aria-hidden="true"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div className="flex items-center justify-center gap-3">
          <span className="text-[#C9A87C]/50 text-[10px]">&#10022;</span>
          <span
            className="text-[#6B5349]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            Or call us at{" "}
            <a
              href="tel:+15716709838"
              className="text-[#C17E68] hover:underline"
            >
              (571) 670-9838
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

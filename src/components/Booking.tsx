import Reveal from "./Reveal";

const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/rpad4r74waczrj/location/LQ5APZMWFKHYR/services";

export default function Booking() {
  return (
    <section id="booking" className="bg-[#C4714A] overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[420px] sm:min-h-[500px] lg:min-h-[580px]">
        {/* Left: big headline */}
        <div className="flex flex-col justify-center px-7 sm:px-10 lg:px-16 py-12 sm:py-20 lg:py-24">
          <Reveal direction="left">
          <p
            className="text-white/55 uppercase tracking-[0.5em] mb-5 sm:mb-7"
            style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 400 }}
          >
            Reserve Your Visit
          </p>
          <h2
            className="text-white leading-[1.0] mb-0"
            style={{
              fontFamily: "var(--font-great-vibes)",
              fontSize: "clamp(80px, 18vw, 200px)",
            }}
          >
            Book
          </h2>
          <p
            className="text-white/55 mt-1 sm:mt-2"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(12px, 2vw, 18px)",
              fontWeight: 400,
              letterSpacing: "0.55em",
            }}
          >
            Your appointment
          </p>
          </Reveal>
        </div>

        {/* Right: CTA content */}
        <div className="flex flex-col justify-center px-7 sm:px-10 lg:px-16 py-10 sm:py-16 lg:py-24 bg-white/[0.06] border-t lg:border-t-0 lg:border-l border-white/15">
          <Reveal direction="right" delay={150}>
          <p
            className="text-white/75 leading-[1.88] mb-10 sm:mb-12 max-w-[400px]"
            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px, 2.3vw, 16px)", fontWeight: 300 }}
          >
            Schedule your next appointment in just a few clicks. Pick your service, choose your time,
            and let us take care of the rest.
          </p>

          <a
            href={SQUARE_BOOKING_URL}
            className="group inline-flex items-center gap-4 px-9 sm:px-11 py-4 sm:py-5 bg-white text-[#C4714A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-400 uppercase tracking-[0.25em] mb-8 sm:mb-10 self-start"
            style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700 }}
          >
            Book Now
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p
            className="text-white/45"
            style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
          >
            Walk-ins always welcome &nbsp;&mdash;&nbsp;{" "}
            <a
              href="tel:+15716709838"
              className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
            >
              (571) 670-9838
            </a>
          </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Great Salon & Spa",
  description: "Terms of Service for Great Salon & Spa, Vienna Virginia.",
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using www.greatsalonspa.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website. We reserve the right to update these Terms at any time.`,
  },
  {
    title: "2. Use of Website",
    content: `You agree to use this website only for lawful purposes. You may not:\n\n• Use the website in any way that violates applicable laws\n• Attempt to gain unauthorized access to any part of the website\n• Transmit any harmful or disruptive content\n• Use automated tools to scrape or extract data from the website`,
  },
  {
    title: "3. Services & Appointments",
    content: `Great Salon & Spa provides hair, lash, facial, waxing, threading, and beauty services in Vienna, Virginia.\n\n• Bookings are subject to availability. We reserve the right to refuse service.\n• Please provide reasonable notice to cancel or reschedule.\n• Service prices are subject to change. Final pricing confirmed at appointment.\n• eGift cards are non-refundable and redeemable for services only.`,
  },
  {
    title: "4. SMS Communications",
    content: `By opting in to receive SMS messages, you agree to receive texts including appointment reminders and promotional content.\n\n• Opt out at any time by replying STOP.\n• Message and data rates may apply.\n• Message frequency may vary up to 4 messages per month.\n• Reply HELP for assistance or call (571) 670-9838.\n\nSee our Privacy Policy for full details.`,
  },
  {
    title: "5. Intellectual Property",
    content: `All content on this website is the property of Great Salon & Spa and protected by applicable copyright and trademark laws. You may not reproduce or distribute any content without our written permission.`,
  },
  {
    title: "6. Third-Party Services",
    content: `Our website links to third-party services such as Square for booking and payment. We are not responsible for their privacy policies or terms.`,
  },
  {
    title: "7. Disclaimer & Limitation of Liability",
    content: `This website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, Great Salon & Spa shall not be liable for any indirect or consequential damages arising from your use of this website or our services.`,
  },
  {
    title: "8. Governing Law",
    content: `These Terms are governed by the laws of the Commonwealth of Virginia. Any disputes shall be resolved in the courts of Fairfax County, Virginia.`,
  },
  {
    title: "9. Contact Us",
    content: `Great Salon & Spa\n2104B Gallows Rd, Ste 2, Vienna, VA 22182\nPhone: (571) 670-9838\nEmail: greatsalonspa@gmail.com`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0D0D0D] min-h-screen pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-3xl mx-auto px-7 sm:px-10">
          <div className="mb-12 sm:mb-16">
            <p className="text-[#C4714A] uppercase tracking-[0.45em] mb-4"
               style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 400 }}>
              Legal
            </p>
            <h1 className="text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400 }}>
              Terms of Service
            </h1>
            <p className="text-white/35"
               style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}>
              Effective Date: April 2, 2026
            </p>
            <div className="w-12 h-px bg-[#C4714A]/30 mt-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-10 sm:gap-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-white mb-4"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "18px", fontWeight: 500 }}>
                  {section.title}
                </h2>
                <div className="text-white/50 leading-[1.9]"
                     style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 300 }}>
                  {section.content.split("\n").map((line, i) => {
                    if (line.startsWith("•")) {
                      return (
                        <div key={i} className="flex gap-3 mb-1.5">
                          <span className="text-[#C4714A] mt-0.5 shrink-0">•</span>
                          <span>{line.replace("• ", "")}</span>
                        </div>
                      );
                    }
                    return line ? <p key={i} className="mb-3">{line}</p> : <br key={i} />;
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <a href="/"
               className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]"
               style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 400 }}>
              <svg className="w-3 h-3" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M10 5H2M5 1L1 5l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Great Salon & Spa",
  description: "Privacy Policy for Great Salon & Spa, Vienna Virginia.",
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: "1. Introduction",
    content: `Great Salon & Spa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website at www.greatsalonspa.com, contact us, or use our services.

By using our website or providing your personal information, you agree to the terms of this Privacy Policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect the following types of information:

• **Contact Information:** Name, phone number, and email address when you book an appointment, contact us, or sign up for updates.
• **Appointment Details:** Service preferences and appointment history.
• **Usage Data:** Pages visited, browser type, and device information collected automatically when you use our website.
• **SMS Opt-In Data:** If you provide your phone number and consent to receive text messages, we collect and store that consent along with your phone number.`,
  },
  {
    title: "3. SMS Communications",
    content: `By providing your phone number and opting in to receive SMS messages from Great Salon & Spa, you consent to receive text messages including appointment reminders, promotional offers, and business updates.

• **Opt-In:** You may opt in by providing your phone number through our website, in person at our salon, or by texting us directly.
• **Opt-Out:** You may opt out at any time by replying STOP to any text message you receive from us. After opting out, you will receive one final confirmation message and no further messages will be sent.
• **Help:** Reply HELP to any message for assistance, or contact us directly at (571) 670-9838.
• **Message Frequency:** Message frequency may vary. You may receive up to 4 messages per month.
• **Message & Data Rates:** Message and data rates may apply depending on your mobile carrier and plan.
• **No Third-Party Sharing:** Your phone number and SMS opt-in data will NOT be shared with, sold to, or used by any third party for their own marketing purposes.
• **Carriers:** Carriers are not liable for delayed or undelivered messages.`,
  },
  {
    title: "4. How We Use Your Information",
    content: `We use the information we collect to:

• Schedule and manage your appointments
• Send appointment confirmations and reminders
• Respond to your inquiries and requests
• Send promotional offers and updates (with your consent)
• Improve our website and servicesw
• Comply with legal obligations

We will never sell your personal information to third parties.`,
  },
  {
    title: "5. Data Sharing",
    content: `We do not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:

• **Service Providers:** Third-party vendors who assist us in operating our business (such as Square for appointment booking and payment processing), subject to confidentiality agreements.
• **Legal Requirements:** When required by law, court order, or governmental authority.
• **Business Transfer:** In the event of a merger, acquisition, or sale of our business assets.

We do not share your SMS opt-in information or phone number with any third party for marketing purposes.`,
  },
  {
    title: "6. Data Security",
    content: `We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "7. Your Rights & Choices",
    content: `You have the right to:

• **Access:** Request a copy of the personal information we hold about you.
• **Correction:** Request that we correct inaccurate or incomplete information.
• **Deletion:** Request that we delete your personal information, subject to legal obligations.
• **Opt-Out of SMS:** Reply STOP to any text message to unsubscribe at any time.
• **Opt-Out of Marketing:** Contact us to opt out of marketing communications.

To exercise any of these rights, please contact us using the information below.`,
  },
  {
    title: "8. Cookies & Tracking",
    content: `Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser settings. Disabling cookies may affect the functionality of our website.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our website or services after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Great Salon & Spa
2104B Gallows Rd, Ste 2
Vienna, VA 22182

Phone: (571) 670-9838
Email: greatsalonspa@gmail.com
Website: www.greatsalonspa.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0D0D0D] min-h-screen pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-3xl mx-auto px-7 sm:px-10">

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p
              className="text-[#C4714A] uppercase tracking-[0.45em] mb-4"
              style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 400 }}
            >
              Legal
            </p>
            <h1
              className="text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400 }}
            >
              Privacy Policy
            </h1>
            <p
              className="text-white/35"
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 300 }}
            >
              Effective Date: April 2, 2026
            </p>
            <div className="w-12 h-px bg-[#C4714A]/30 mt-6" aria-hidden="true" />
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10 sm:gap-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "18px", fontWeight: 500 }}
                >
                  {section.title}
                </h2>
                <div
                  className="text-white/50 leading-[1.9] whitespace-pre-line"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 300 }}
                >
                  {section.content.split("\n").map((line, i) => {
                    if (line.startsWith("•")) {
                      return (
                        <div key={i} className="flex gap-3 mb-1.5">
                          <span className="text-[#C4714A] mt-0.5 shrink-0">•</span>
                          <span>{line.replace("• ", "").replace(/\*\*(.*?)\*\*/g, "$1")}</span>
                        </div>
                      );
                    }
                    return line ? <p key={i} className="mb-3">{line.replace(/\*\*(.*?)\*\*/g, "$1")}</p> : <br key={i} />;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 400 }}
            >
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

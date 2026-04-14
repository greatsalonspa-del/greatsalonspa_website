import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const OG_IMAGE = "https://www.greatsalonspa.com/logo.png";

export const metadata: Metadata = {
  title: "Great Salon & Spa — Vienna, Virginia",
  description:
    "A premium salon and spa experience in Vienna, Virginia. Expert hair, nails, lashes, facials, waxing, and threading by licensed professionals.",
  keywords: [
    "salon", "spa", "Vienna Virginia", "hair salon", "nail salon",
    "lash extensions", "facials", "waxing", "threading", "beauty", "bridal",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Great Salon & Spa — Vienna, Virginia",
    description:
      "Premium salon and spa experience in Vienna, Virginia. Expert hair, nails, lashes, facials, and more.",
    type: "website",
    url: "https://www.greatsalonspa.com",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Great Salon & Spa Vienna Virginia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Salon & Spa — Vienna, Virginia",
    description: "Premium salon and spa experience in Vienna, Virginia.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Great Salon & Spa",
  description:
    "A premium salon and spa in Vienna, Virginia offering hair, nails, lashes, facials, waxing, and threading.",
  url: "https://www.greatsalonspa.com",
  telephone: "+15716709838",
  email: "greatsalonspa@gmail.com",
  image: OG_IMAGE,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2104B Gallows Rd, Ste 2",
    addressLocality: "Vienna",
    addressRegion: "VA",
    postalCode: "22182",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.9056086,
    longitude: -77.2229122,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "16:00" },
  ],
  hasMap: "https://maps.google.com/?cid=3638622736695870011",
  sameAs: [
    "https://www.instagram.com/greatsalonspa",
    "https://www.facebook.com/people/Great-Salon-Spa/61580587087147/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#0D0D0D]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

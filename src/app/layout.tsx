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

export const metadata: Metadata = {
  title: "Great Salon & Spa — Vienna, Virginia",
  description:
    "A premium salon and spa experience in Vienna, Virginia. Expert hair, nails, skincare, and massage by a dedicated team of beauty professionals.",
  keywords: ["salon", "spa", "Vienna Virginia", "hair salon", "nail salon", "skincare", "beauty"],
  openGraph: {
    title: "Great Salon & Spa — Vienna, Virginia",
    description: "Premium salon and spa experience in Vienna, Virginia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF6F1] text-[#3A2519]">
        {children}
      </body>
    </html>
  );
}

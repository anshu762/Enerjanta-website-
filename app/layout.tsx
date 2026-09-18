import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics/Analytics";

// Font substitution note: "Sora" (for geometric, modern headings) and "Inter" (for legible body text)
// are self-hosted via next/font as the closest professional, web-optimized open alternative to "Felix".
const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://enerjanta.org";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Enerjanta — Community Energy Initiative",
    default: "Enerjanta — Community Clean Energy Transition & Survey Insights",
  },
  description:
    "Enerjanta is a grassroots community initiative accelerating rooftop solar adoption, neighborhood microgrids, and citizen energy literacy through open survey data across 28 municipal wards.",
  keywords: [
    "Clean Energy",
    "Community Solar",
    "Renewable Energy",
    "Microgrids",
    "Energy Survey",
    "Enerjanta",
    "Citizen Power",
    "Net Metering",
  ],
  authors: [{ name: "Enerjanta Community Initiative", url: baseUrl }],
  creator: "Enerjanta Civic Coalition",
  publisher: "Enerjanta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Enerjanta — Community Clean Energy",
    title: "Enerjanta — Empowering Communities to Own Their Energy Future",
    description:
      "Independent citizen energy survey and community collective action across 28 municipal wards.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enerjanta — Community Clean Energy Initiative",
    description:
      "Grassroots clean energy transition powered by 1,420+ household survey insights across 28 municipal wards.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Organization Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Enerjanta",
        url: baseUrl,
        logo: `${baseUrl}/favicon.ico`,
        description:
          "Grassroots community initiative accelerating rooftop solar adoption and neighborhood microgrids through open citizen data.",
        sameAs: ["https://twitter.com", "https://github.com", "https://linkedin.com"],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Enerjanta Community Clean Energy",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0B0B0F] text-[#FFFFF0] flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        {/* Accessible skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-500 text-[#0B0B0F] font-semibold rounded-md shadow-lg outline-none ring-2 ring-white"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1 w-full flex flex-col">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  title: {
    template: "%s | Enerjanta — Community Energy Initiative",
    default: "Enerjanta — Community Clean Energy Transition & Survey Insights",
  },
  description:
    "Enerjanta is a grassroots community initiative accelerating rooftop solar adoption, neighborhood microgrids, and citizen energy literacy through open survey data.",
  keywords: [
    "Clean Energy",
    "Community Solar",
    "Renewable Energy",
    "Microgrids",
    "Energy Survey",
    "Enerjanta",
  ],
  authors: [{ name: "Enerjanta Community Initiative" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} dark scroll-smooth`}>
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
      </body>
    </html>
  );
}

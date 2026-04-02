import type { Metadata } from "next";
import { Inter, Permanent_Marker, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800", "900"],
  variable: "--font-inter",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "DISTRICT — Curated City Experiences",
  description: "Behaviorally curated city experiences powered by Flynet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${permanentMarker.variable} ${spaceMono.variable}`}>
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
      </head>
      <body className="bg-brand-black md:bg-brand-dark font-sans text-brand-white antialiased min-h-screen md:flex md:items-center md:justify-center">
        {/* Mobile: full-screen app. Desktop: phone frame mockup */}
        <div className="relative w-full h-full md:w-auto md:h-auto">
          {/* Ambient glow orbs — desktop only */}
          <div className="hidden md:block absolute -top-20 -left-20 w-96 h-96 bg-brand-terracotta blur-[100px] opacity-20 mix-blend-screen pointer-events-none" />
          <div className="hidden md:block absolute -bottom-20 -right-20 w-96 h-96 bg-brand-orange blur-[100px] opacity-20 mix-blend-screen pointer-events-none" />

          {/* Phone frame on desktop, full-screen on mobile */}
          <div className="relative w-full min-h-screen md:w-[402px] md:h-[874px] md:min-h-0 bg-brand-black md:rounded-[50px] overflow-hidden md:border-[6px] md:border-[#222] md:shadow-2xl z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

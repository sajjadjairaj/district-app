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
      <body className="bg-brand-dark font-sans text-brand-white antialiased min-h-screen flex items-center justify-center">
        <div className="relative">
          {/* Ambient glow orbs */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-terracotta blur-[100px] opacity-20 mix-blend-screen pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-orange blur-[100px] opacity-20 mix-blend-screen pointer-events-none" />

          {/* Phone frame */}
          <div className="relative w-[402px] h-[874px] bg-brand-black rounded-[50px] overflow-hidden border-[6px] border-[#222] shadow-2xl z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

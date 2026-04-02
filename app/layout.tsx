import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
      </head>
      <body className="bg-[#0a0a0a] min-h-screen md:flex md:items-center md:justify-center">
        {/* Mobile: full-screen. Desktop: phone frame */}
        <div className="relative w-full h-full md:w-auto md:h-auto">
          {/* Ambient glows — desktop only */}
          <div className="hidden md:block absolute -top-20 -left-20 w-96 h-96 bg-[#D95C41] blur-[120px] opacity-[0.06] pointer-events-none -z-10" />
          <div className="hidden md:block absolute -bottom-20 -right-20 w-96 h-96 bg-white blur-[120px] opacity-[0.03] pointer-events-none -z-10" />

          {/* Phone frame on desktop, full-screen on mobile */}
          <div className="relative w-full min-h-screen md:w-[402px] md:h-[874px] md:min-h-0 bg-[#111111] overflow-hidden md:border-[6px] md:border-[#222222] flex flex-col z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

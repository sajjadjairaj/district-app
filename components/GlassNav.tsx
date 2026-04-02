"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: "ph-fill ph-house", label: "Home" },
  { href: "/map", icon: "ph-fill ph-map-pin", label: "Map" },
  { href: "/itinerary", icon: "ph-fill ph-ticket", label: "Itinerary" },
  { href: "/profile", icon: "ph-fill ph-user-circle", label: "Profile" },
];

export default function GlassNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="absolute bottom-6 left-6 right-6 h-[72px] glass-nav rounded-full px-8 z-50 flex justify-between items-center">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center gap-1"
        >
          <i
            className={`${item.icon} text-3xl transition-all duration-200 ${
              isActive(item.href)
                ? "text-brand-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                : "text-brand-white/40 hover:text-brand-white"
            }`}
          />
          {isActive(item.href) && (
            <div className="w-1 h-1 rounded-full bg-brand-white" />
          )}
        </Link>
      ))}
    </div>
  );
}

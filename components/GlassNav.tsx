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
    <div className="fixed md:absolute bottom-4 left-1/2 -translate-x-1/2 h-[50px] glass-nav rounded-full z-50 flex items-center gap-6 px-8 w-max">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center gap-0.5"
        >
          <i
            className={`${item.icon} text-2xl transition-all duration-200 ${
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

"use client";

import { user } from "@/lib/districtData";

interface AppHeaderProps {
  flyBalance?: number;
}

export default function AppHeader({ flyBalance }: AppHeaderProps) {
  const balance = flyBalance ?? user.flyBalance;

  return (
    <div className="sticky top-0 md:top-12 z-40 px-6 pb-4 pt-2 bg-brand-black/95 backdrop-blur-md border-b border-brand-border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gray font-mono">
            Current City
          </p>
          <button className="text-xl font-extrabold tracking-tight flex items-center gap-1 hover:text-brand-orange transition-colors">
            NEW YORK
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className="mt-0.5">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="bg-brand-card border border-brand-border px-4 py-2 rounded-full flex items-center gap-2" style={{ boxShadow: "0 0 15px rgba(232,141,57,0.1)" }}>
          <span className="font-script text-brand-orange text-2xl -rotate-6 mt-1 leading-none">$FLY</span>
          <span className="font-mono font-bold text-lg">{balance.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

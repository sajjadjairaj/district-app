"use client";

import { useState } from "react";
import { user, cityNames } from "@/lib/districtData";

interface AppHeaderProps {
  flyBalance?: number;
}

export default function AppHeader({ flyBalance }: AppHeaderProps) {
  const balance = flyBalance ?? user.flyBalance;
  const [cityIndex, setCityIndex] = useState(0);

  const cycleCity = () => {
    setCityIndex((prev) => (prev + 1) % cityNames.length);
  };

  return (
    <div className="sticky top-0 z-40 bg-[#111111] px-6 pb-4 pt-2 border-b border-[#222]">
      <div className="flex items-center justify-between">
        <div>
          <p className="t-label mb-1">CURRENT CITY</p>
          <button onClick={cycleCity} className="t-display flex items-center gap-1">
            {cityNames[cityIndex]}
            <span className="text-[#555] text-xs">↓</span>
          </button>
        </div>
        <div className="bg-[#1a1a1a] border border-[#333] px-4 py-2 flex items-center gap-2">
          <span className="t-fly font-bold">$FLY</span>
          <span className="t-value font-bold">{balance.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

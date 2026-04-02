"use client";

import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import TimelineStop from "@/components/TimelineStop";
import ProgressLine from "@/components/ProgressLine";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import { itinerary } from "@/lib/districtData";
import Link from "next/link";

export default function ItineraryPage() {
  return (
    <div className="relative h-full flex flex-col">
      <StatusBar />
      <AppHeader />

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Day header */}
        <div className="px-4 pt-4 pb-8 border-b border-[#222]">
          <p className="t-label mb-2">TODAY</p>
          <p className="t-display mb-1">THURSDAY / APRIL 3RD</p>
          <p className="t-caption mt-2" style={{ color: "#555" }}>
            4 EXPERIENCES · 1,300 $FLY COMMITTED
          </p>
          <div className="mt-6">
            <ProgressLine width="50%" />
          </div>
        </div>

        {/* Timeline */}
        <div className="px-4 pt-8 flex flex-col">
          {itinerary.map((stop, i) => (
            <TimelineStop
              key={i}
              stop={stop}
              isLast={i === itinerary.length - 1}
            />
          ))}
        </div>

        {/* Add more */}
        <div className="px-4 mt-4 mb-32">
          <Link href="/">
            <div className="border border-[#222] py-4 px-4 flex justify-between items-center">
              <span className="t-label">ADD TO YOUR EVENING</span>
              <span className="t-value" style={{ color: "#555" }}>→</span>
            </div>
          </Link>
        </div>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}

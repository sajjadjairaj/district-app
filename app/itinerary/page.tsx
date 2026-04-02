"use client";

import { useEffect, useState } from "react";
import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import TransitionWrapper from "@/components/TransitionWrapper";
import { itinerary } from "@/lib/districtData";

export default function ItineraryPage() {
  const [visibleStops, setVisibleStops] = useState<number[]>([]);

  useEffect(() => {
    itinerary.forEach((_, i) => {
      setTimeout(() => {
        setVisibleStops((prev) => [...prev, i]);
      }, i * 80);
    });
  }, []);

  return (
    <div className="relative h-full flex flex-col">
      <StatusBar />
      <AppHeader />

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <TransitionWrapper>
          {/* Day header */}
          <div className="px-6 pt-4 pb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gray">Today</p>
            <h1 className="text-[40px] font-black leading-none tracking-tight">
              Thursday<br />April 3rd
            </h1>
            <p className="font-mono text-xs text-brand-gray mt-2">
              4 experiences · 1,300{" "}
              <span className="font-script text-brand-orange">$FLY</span>
            </p>
          </div>

          {/* Timeline */}
          <div className="px-6 flex flex-col">
            {itinerary.map((stop, i) => (
              <div
                key={i}
                className={`relative flex gap-4 transition-all duration-300 ease-out ${
                  visibleStops.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-brand-terracotta bg-brand-black flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-brand-terracotta" />
                  </div>
                  {i < itinerary.length - 1 && (
                    <div className="w-[1px] flex-1 bg-brand-border" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-brand-card border border-brand-border rounded-2xl p-4 mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-mono text-[10px] text-brand-gray uppercase mb-1">{stop.time}</p>
                      <h3 className="text-xl font-bold">{stop.name}</h3>
                      <p className="font-mono text-xs text-brand-gray">{stop.neighborhood}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-script text-brand-orange text-lg leading-none mt-1">$FLY</span>
                      <span className="font-mono font-bold">{stop.flyPrice}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-sm ${
                        stop.status === "confirmed"
                          ? "bg-brand-terracotta/10 text-brand-terracotta"
                          : "bg-brand-border text-brand-gray"
                      }`}
                    >
                      {stop.status}
                    </span>
                    {stop.code && (
                      <span className="font-mono text-[10px] tracking-[0.15em] text-brand-gray/60">
                        {stop.code}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add More button */}
          <button className="mx-6 mt-6 w-auto border border-brand-border rounded-2xl py-4 font-bold text-sm flex items-center justify-center gap-2 hover:border-brand-gray transition-colors">
            Add to your evening →
          </button>
        </TransitionWrapper>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import Link from "next/link";
import { experiences } from "@/lib/districtData";

const pinPositions: Record<string, { x: number; y: number }> = {
  "don-angie": { x: 30, y: 62 },
  "fotografiska": { x: 55, y: 40 },
  "reserve-padel": { x: 75, y: 24 },
  "noah-nyc": { x: 44, y: 55 },
  "flyover-nyc": { x: 24, y: 82 },
};

export default function MapPage() {
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selected = experiences.find((e) => e.id === selectedId)!;
  const pin = pinPositions[selectedId];

  useEffect(() => {
    if (scrollRef.current) {
      const idx = experiences.findIndex((e) => e.id === selectedId);
      const card = scrollRef.current.children[idx] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [selectedId]);

  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      <StatusBar />
      <AppHeader />

      {/* Map — 60% of viewport */}
      <div className="relative" style={{ height: "calc(60vh - 60px)" }}>
        <div className="absolute inset-0 bg-[#0c0c0c]">
          {/* Street grid */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Water */}
            <rect x="0" y="0" width="6" height="100" fill="#0e1012" />
            <rect x="94" y="0" width="6" height="100" fill="#0e1012" />

            {/* Park suggestion */}
            <path d="M 38 6 L 66 4 L 64 22 L 36 24 Z" fill="#0f120f" stroke="#1a2a1a" strokeWidth="0.3" />

            {/* Major avenues */}
            <line x1="85" y1="0" x2="78" y2="100" stroke="#1a1a1a" strokeWidth="0.6" />
            <line x1="70" y1="0" x2="63" y2="100" stroke="#1a1a1a" strokeWidth="0.6" />
            <line x1="55" y1="0" x2="48" y2="100" stroke="#1a1a1a" strokeWidth="0.6" />
            <line x1="40" y1="0" x2="33" y2="100" stroke="#1a1a1a" strokeWidth="0.6" />
            <line x1="25" y1="0" x2="18" y2="100" stroke="#1a1a1a" strokeWidth="0.4" />

            {/* Cross streets */}
            <line x1="8" y1="15" x2="93" y2="12" stroke="#181818" strokeWidth="0.3" />
            <line x1="8" y1="28" x2="93" y2="25" stroke="#181818" strokeWidth="0.3" />
            <line x1="8" y1="38" x2="93" y2="35" stroke="#181818" strokeWidth="0.3" />
            <line x1="8" y1="48" x2="93" y2="45" stroke="#181818" strokeWidth="0.3" />
            <line x1="8" y1="58" x2="93" y2="55" stroke="#181818" strokeWidth="0.3" />
            <line x1="8" y1="68" x2="93" y2="65" stroke="#181818" strokeWidth="0.3" />
            <line x1="8" y1="78" x2="93" y2="75" stroke="#181818" strokeWidth="0.3" />
            <line x1="8" y1="88" x2="93" y2="85" stroke="#181818" strokeWidth="0.3" />

            {/* Broadway */}
            <line x1="68" y1="4" x2="22" y2="96" stroke="#1c1c1c" strokeWidth="0.8" />

            {/* Downtown irregulars */}
            <line x1="12" y1="65" x2="42" y2="62" stroke="#161616" strokeWidth="0.3" />
            <line x1="15" y1="72" x2="38" y2="75" stroke="#161616" strokeWidth="0.3" />
            <line x1="18" y1="80" x2="45" y2="78" stroke="#161616" strokeWidth="0.3" />
            <line x1="20" y1="88" x2="50" y2="85" stroke="#161616" strokeWidth="0.3" />
          </svg>

          {/* Non-selected pins */}
          {experiences.map((exp) => {
            const pos = pinPositions[exp.id];
            if (!pos || exp.id === selectedId) return null;
            return (
              <button
                key={exp.id}
                className="absolute z-10"
                style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
                onClick={() => setSelectedId(exp.id)}
              >
                <div className="w-[6px] h-[6px] bg-[#444] transition-colors duration-200" />
              </button>
            );
          })}

          {/* Selected pin */}
          {pin && (
            <div
              className="absolute z-20 flex flex-col items-center transition-all duration-300"
              style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -100%)" }}
            >
              <div className="bg-[#111] border border-[#444] px-2 py-1 mb-1.5">
                <span style={{ fontSize: "7px", letterSpacing: "0.1em", textTransform: "uppercase", color: "white" }}>
                  {selected.name}
                </span>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-[10px] h-[10px] bg-[#D95C41]" />
                <div className="absolute w-5 h-5 border border-[#D95C41] opacity-30 dot-pulse" />
              </div>
            </div>
          )}

          {/* Corner labels */}
          <div className="absolute top-4 left-4">
            <p style={{ fontSize: "7px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#444" }}>
              MANHATTAN
            </p>
          </div>
          <div className="absolute bottom-4 left-4 t-caption" style={{ color: "#2a2a2a" }}>
            FLYNET / ORBIT FILTERED
          </div>
          <div className="absolute bottom-4 right-4 t-caption" style={{ color: "#2a2a2a" }}>
            {experiences.length} LOCATIONS
          </div>
        </div>
      </div>

      {/* Bottom card strip */}
      <div className="flex-shrink-0 border-t border-[#222] bg-[#111111]">
        <div className="px-4 pt-3 pb-2 flex justify-between items-center">
          <span className="t-section">YOUR ITINERARY</span>
          <span className="t-caption" style={{ color: "#555" }}>{experiences.length} SPOTS</span>
        </div>

        <div ref={scrollRef} className="flex gap-3 overflow-x-auto px-4 pb-20">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/experience/${exp.id}`}
              onClick={(e) => {
                if (selectedId !== exp.id) {
                  e.preventDefault();
                  setSelectedId(exp.id);
                }
              }}
            >
              <div
                className={`flex-shrink-0 w-[200px] border flex flex-col transition-all duration-200 ${
                  selectedId === exp.id ? "border-white" : "border-[#222]"
                }`}
              >
                <div className="w-full h-[80px] overflow-hidden">
                  <img
                    src={exp.imageUrl}
                    alt={exp.name}
                    className="w-full h-full object-cover"
                    style={selectedId !== exp.id ? { filter: "brightness(0.35)" } : undefined}
                  />
                </div>
                <div className="px-2.5 py-2.5 bg-[#111]">
                  <div className="flex items-center gap-1 mb-0.5">
                    {exp.isBlackbirdPartner && (
                      <div className="w-1.5 h-1.5 bg-[#D95C41] dot-pulse" />
                    )}
                    <span className="t-caption" style={{ color: "#555", fontSize: "7px" }}>{exp.categoryLabel}</span>
                  </div>
                  <p className="t-value" style={{ fontSize: "10px" }}>{exp.name.toUpperCase()}</p>
                  <p className="t-caption mt-0.5" style={{ color: "#555", fontSize: "7px" }}>
                    {exp.neighborhood.toUpperCase()}
                  </p>
                  <div className="flex justify-between items-center mt-1.5">
                    <span className="t-fly" style={{ fontSize: "10px" }}>{exp.priceFly}</span>
                    <span className="t-caption" style={{ color: "#555", fontSize: "7px" }}>$FLY</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}

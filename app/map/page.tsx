"use client";

import { useState } from "react";
import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ExperienceCard from "@/components/ExperienceCard";
import SectionHeader from "@/components/SectionHeader";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import { neighborhoods, westVillageExperiences } from "@/lib/districtData";

const markers = [
  { x: 22, y: 30, label: "W. VILLAGE" },
  { x: 55, y: 18, label: "FLATIRON" },
  { x: 72, y: 50, label: "SOHO" },
  { x: 35, y: 68, label: "LES" },
  { x: 80, y: 28, label: "H. YARDS" },
];

export default function MapPage() {
  const [activeCategory, setActiveCategory] = useState("For You");
  const [activeNeighborhood, setActiveNeighborhood] = useState("West Village");

  return (
    <div className="relative h-full flex flex-col">
      <StatusBar />
      <AppHeader />
      <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Map block */}
        <div className="mx-4 mt-4 border border-[#222] relative" style={{ height: 260 }}>
          <div className="absolute inset-0 bg-[#0f0f0f]">
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.06 }}>
              <line x1="0" y1="40" x2="100%" y2="40" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="80" x2="100%" y2="80" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="130" x2="100%" y2="130" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="170" x2="100%" y2="170" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="210" x2="100%" y2="210" stroke="white" strokeWidth="0.5" />
              <line x1="60" y1="0" x2="60" y2="100%" stroke="white" strokeWidth="0.5" />
              <line x1="130" y1="0" x2="130" y2="100%" stroke="white" strokeWidth="0.5" />
              <line x1="200" y1="0" x2="200" y2="100%" stroke="white" strokeWidth="0.5" />
              <line x1="270" y1="0" x2="270" y2="100%" stroke="white" strokeWidth="0.5" />
              <line x1="340" y1="0" x2="340" y2="100%" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="350" y2="260" stroke="white" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="350" y2="180" stroke="white" strokeWidth="0.5" />
            </svg>

            {markers.map((m, i) => (
              <div
                key={i}
                className="absolute flex flex-col items-center"
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
              >
                <div className="w-1 h-1 bg-[#D95C41]" />
                <span className="t-caption mt-1" style={{ color: "#555", fontSize: "6px" }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 left-3 t-caption" style={{ color: "#555" }}>
            NEW YORK CITY / FLYNET MAP
          </div>
          <div className="absolute bottom-3 right-3 t-caption" style={{ color: "#555" }}>
            ORBIT FILTERED →
          </div>
        </div>

        {/* Neighborhood section */}
        <div className="px-4 mt-8">
          <SectionHeader>BY NEIGHBORHOOD</SectionHeader>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {neighborhoods.map((n) => (
              <button
                key={n.name}
                onClick={() => setActiveNeighborhood(n.name)}
                className={`border px-4 py-3 flex flex-col gap-1 whitespace-nowrap flex-shrink-0 ${
                  activeNeighborhood === n.name
                    ? "border-white"
                    : "border-[#222]"
                }`}
              >
                <span className="t-value">{n.name.toUpperCase()}</span>
                <span className="t-caption" style={{ color: "#555" }}>
                  {n.count} SPOTS
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtered experience cards */}
        <div className="mt-6 flex flex-col">
          {westVillageExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}

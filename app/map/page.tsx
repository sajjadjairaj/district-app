"use client";

import { useState } from "react";
import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ReceiptCard from "@/components/ReceiptCard";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import TransitionWrapper from "@/components/TransitionWrapper";
import { neighborhoods, westVillageExperiences } from "@/lib/districtData";

const pins = [
  { x: 25, y: 35 },
  { x: 55, y: 20 },
  { x: 70, y: 55 },
  { x: 40, y: 70 },
  { x: 80, y: 30 },
];

export default function MapPage() {
  const [activeCategory, setActiveCategory] = useState("For You");
  const [activeNeighborhood, setActiveNeighborhood] = useState("West Village");

  return (
    <div className="relative h-full flex flex-col">
      <StatusBar />
      <AppHeader />
      <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <TransitionWrapper>
          {/* Map placeholder */}
          <div className="mx-6 w-auto h-[300px] bg-brand-card rounded-[24px] overflow-hidden border border-brand-border relative">
            <div className="absolute inset-0 bg-[#1a1a1a]">
              {/* SVG grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10">
                <line x1="0" y1="60" x2="100%" y2="60" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="120" x2="100%" y2="120" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="180" x2="100%" y2="180" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="240" x2="100%" y2="240" stroke="white" strokeWidth="0.5" />
                <line x1="60" y1="0" x2="60" y2="100%" stroke="white" strokeWidth="0.5" />
                <line x1="120" y1="0" x2="120" y2="100%" stroke="white" strokeWidth="0.5" />
                <line x1="180" y1="0" x2="180" y2="100%" stroke="white" strokeWidth="0.5" />
                <line x1="240" y1="0" x2="240" y2="100%" stroke="white" strokeWidth="0.5" />
                <line x1="300" y1="0" x2="300" y2="100%" stroke="white" strokeWidth="0.5" />
                {/* Diagonal streets */}
                <line x1="0" y1="0" x2="350" y2="300" stroke="white" strokeWidth="0.5" />
                <line x1="100" y1="0" x2="350" y2="200" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="150" x2="200" y2="300" stroke="white" strokeWidth="0.5" />
              </svg>

              {/* Location pins */}
              {pins.map((pin, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  <div className="w-4 h-4 rounded-full bg-brand-terracotta flex items-center justify-center shadow-lg shadow-brand-terracotta/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 font-mono text-xs text-brand-gray uppercase tracking-widest">
              New York City
            </div>
            <button className="absolute bottom-4 right-4 font-mono text-xs text-brand-gray hover:text-brand-white transition-colors">
              Open in Maps →
            </button>
          </div>

          {/* Neighborhood section */}
          <div className="px-6 mt-6">
            <h2 className="text-xl font-bold mb-4">By Neighborhood</h2>
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-3 pb-2">
                {neighborhoods.map((n) => (
                  <button
                    key={n.name}
                    onClick={() => setActiveNeighborhood(n.name)}
                    className={`bg-brand-card border rounded-full px-5 py-2.5 flex flex-col items-center whitespace-nowrap transition-colors ${
                      activeNeighborhood === n.name
                        ? "border-brand-terracotta text-brand-terracotta"
                        : "border-brand-border text-brand-white"
                    }`}
                  >
                    <span className="font-bold text-sm">{n.name}</span>
                    <span className="font-mono text-[10px] text-brand-gray">{n.count} spots</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Experiences in neighborhood */}
          <div className="px-6 mt-6">
            <h2 className="text-lg font-bold mb-4">Experiences in {activeNeighborhood}</h2>
            <div className="flex flex-col gap-8 pb-8">
              {westVillageExperiences.map((exp, i) => (
                <ReceiptCard key={exp.id} experience={exp} index={i} />
              ))}
            </div>
          </div>
        </TransitionWrapper>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}

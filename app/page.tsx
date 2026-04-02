"use client";

import { useState, useEffect } from "react";
import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ReceiptCard from "@/components/ReceiptCard";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import TransitionWrapper from "@/components/TransitionWrapper";
import { experiences } from "@/lib/districtData";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("For You");
  const [cardsVisible, setCardsVisible] = useState(true);

  const handleCategoryChange = (cat: string) => {
    setCardsVisible(false);
    setTimeout(() => {
      setActiveCategory(cat);
      setCardsVisible(true);
    }, 200);
  };

  const filteredExperiences = activeCategory === "For You"
    ? experiences
    : experiences.filter((e) => {
        const map: Record<string, string[]> = {
          Dining: ["dining"],
          Boutiques: ["drop"],
          Courts: ["courts"],
          Culture: ["culture"],
          Drops: ["drop"],
        };
        return map[activeCategory]?.includes(e.type);
      });

  return (
    <div className="relative h-full flex flex-col">
      <StatusBar />
      <AppHeader />
      <CategoryFilter active={activeCategory} onSelect={handleCategoryChange} />

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <TransitionWrapper>
          {/* Hero Editorial Section */}
          <div className="px-6 pb-8 pt-2 relative">
            {/* Handwritten annotation */}
            <div className="absolute top-10 right-8 font-script text-brand-terracotta text-2xl rotate-12 opacity-80 mix-blend-screen pointer-events-none animate-float">
              Curated{"\n"}for your orbit
            </div>

            {/* Main headline */}
            <h1 className="text-[44px] font-black leading-[0.95] tracking-tight mb-2">
              The city<br />you already
            </h1>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-[44px] font-black leading-[0.95] tracking-tight">belong in</span>
              <svg width="120" height="12" viewBox="0 0 120 12" className="-mb-1 ml-1">
                <path d="M0 8 Q 30 12 60 6 Q 90 0 120 4" stroke="#D95C41" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* $FLY logo accent */}
            <div className="font-script text-[64px] leading-none text-brand-white/90 mt-2">$FLY</div>

            {/* Hero featured card */}
            <div className="w-full h-[320px] rounded-[32px] overflow-hidden border border-brand-border relative group cursor-pointer mt-6">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Featured dining experience"
                className="w-full h-full object-cover img-editorial"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-brand-white text-brand-black text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-sm">
                    Flynet Pick
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gray">
                    NYC EDITION
                  </span>
                </div>
                <h2 className="text-2xl font-bold">A Night Across Three Neighborhoods</h2>
                <p className="text-sm text-brand-gray font-mono mt-1">
                  Dinner at Don Angie → Gallery hour at Fotografiska → Rooftop at Le Bain
                </p>
              </div>
              {/* Corner badge */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-white rounded-full border-[6px] border-brand-black shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center">
                <span className="text-[8px] font-black uppercase tracking-widest text-brand-black text-center leading-tight">
                  Exclusively<br />With
                </span>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="black" className="mt-1">
                  <path d="M10 0C6 0 3 3 1 6c2 1 4 2 6 2 1 0 2-.3 3-1 1 .7 2 1 3 1 2 0 4-1 6-2C17 3 14 0 10 0z" />
                  <path d="M10 9c-1 0-2-.3-3-1-1 .7-2 1-3 1-1.5 0-3-.5-4.5-1.5C1 10 3 14 7 15c1 .3 2 .5 3 .5s2-.2 3-.5c4-1 6-5 7.5-7.5C19 8.5 17.5 9 16 9c-1 0-2-.3-3-1-1 .7-2 1-3 1z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Section header */}
          <div className="px-6 mb-6 flex justify-between items-end">
            <h2 className="text-xl font-bold tracking-tight">Your itinerary for today</h2>
            <span className="font-script text-brand-orange text-lg -rotate-3 animate-float">3 spots left</span>
          </div>

          {/* Receipt Cards */}
          <div className={`px-6 flex flex-col gap-10 pb-8 transition-all duration-200 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
            {filteredExperiences.map((exp, i) => (
              <ReceiptCard key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </TransitionWrapper>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}

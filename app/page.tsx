"use client";

import { useState } from "react";
import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import CategoryFilter from "@/components/CategoryFilter";
import ExperienceCard from "@/components/ExperienceCard";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import ProgressLine from "@/components/ProgressLine";
import { experiences } from "@/lib/districtData";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("For You");
  const [cardsVisible, setCardsVisible] = useState(true);

  const handleCategoryChange = (cat: string) => {
    setCardsVisible(false);
    setTimeout(() => {
      setActiveCategory(cat);
      setCardsVisible(true);
    }, 100);
  };

  const filteredExperiences =
    activeCategory === "For You"
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

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Hero editorial block */}
        <div className="px-4 py-8 border-b border-[#222]">
          <p className="t-label mb-3">FLYNET / NYC EDITION</p>
          <ProgressLine width="25%" />
          <h1 className="t-display leading-tight mb-4" style={{ whiteSpace: "pre-line" }}>
            {"THE CITY\nYOU ALREADY\nBELONG IN"}
          </h1>
          <p className="t-editorial mb-8">
            Curated from your orbit. 4 experiences selected for today.
          </p>

          {/* Hero image */}
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
              alt="Featured dining experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
              <span className="t-caption text-white">FLYNET PICK</span>
              <span className="t-caption" style={{ color: "#555" }}>NYC EDITION</span>
            </div>
          </div>
        </div>

        {/* Experience feed */}
        <div
          className={`flex flex-col transition-opacity duration-100 ${
            cardsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}

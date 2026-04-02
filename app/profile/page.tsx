"use client";

import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import SectionHeader from "@/components/SectionHeader";
import OrbitBar from "@/components/OrbitBar";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import { user, experiences, savedExperienceIds } from "@/lib/districtData";
import Link from "next/link";

export default function ProfilePage() {
  const savedExperiences = experiences.filter((e) =>
    savedExperienceIds.includes(e.id)
  );

  return (
    <div className="relative h-full flex flex-col">
      <StatusBar />
      <AppHeader />

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Identity block */}
        <div className="px-4 pt-6 pb-8 border-b border-[#222]">
          <p className="t-label mb-3">DISTRICT MEMBER</p>
          <p className="t-display mb-1">{user.name.toUpperCase()}</p>
          <p className="t-caption" style={{ color: "#555" }}>FLY / {user.flynetId}</p>
          <p className="t-value mt-4">FLYNET {user.orbitTier.toUpperCase()} / {user.accessTier}</p>
          <div className="mt-6">
            <OrbitBar score={user.orbitScore} />
          </div>
          <p className="t-caption mt-3" style={{ color: "#555" }}>
            DINING TIER: {user.diningTier.toUpperCase()} · NEIGHBORHOODS: {user.neighborhoods.join(", ").toUpperCase()}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 divide-x divide-[#222] border-b border-[#222]">
          <div className="px-4 py-6">
            <p className="t-label mb-1">CITIES VISITED</p>
            <p className="t-display">{user.citiesVisited}</p>
          </div>
          <div className="px-4 py-6">
            <p className="t-label mb-1">$FLY SPENT</p>
            <p className="t-display">{user.flySpent.toLocaleString()}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-[#222] border-b border-[#222]">
          <div className="px-4 py-6">
            <p className="t-label mb-1">EXPERIENCES</p>
            <p className="t-display">{user.experiences}</p>
          </div>
          <div className="px-4 py-6">
            <p className="t-label mb-1">ORBIT SCORE</p>
            <p className="t-display">{user.orbitScore}</p>
          </div>
        </div>

        {/* Taste fingerprint */}
        <div className="px-4 mt-8 mb-8">
          <SectionHeader>TASTE PROFILE</SectionHeader>
          <div className="flex flex-wrap gap-2">
            {user.tasteTags.map((tag, i) => (
              <span
                key={tag}
                className={`t-caption px-3 py-2 border ${
                  i === 0
                    ? "border-white text-white"
                    : "border-[#222] text-[#555]"
                }`}
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="px-4 mt-8 mb-8">
          <SectionHeader>CITIES VISITED</SectionHeader>
          <div className="flex gap-3 overflow-x-auto">
            {user.cities.map((city) => (
              <div
                key={city.name}
                className="border border-[#222] px-4 py-3 flex flex-col gap-1 flex-shrink-0"
              >
                <span className="t-value">{city.name.toUpperCase()}</span>
                <span className="t-caption" style={{ color: "#555" }}>
                  {city.visits} VISITS
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Saved */}
        <div className="px-4 mt-8 mb-32">
          <SectionHeader>SAVED</SectionHeader>
          <div className="flex flex-col">
            {savedExperiences.map((item) => (
              <Link
                key={item.id}
                href={`/experience/${item.id}`}
                className="flex items-center gap-4 border-b border-[#222] py-4"
              >
                <div className="w-14 h-14 flex-shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="t-value">{item.name.toUpperCase()}</p>
                  <p className="t-caption" style={{ color: "#555" }}>{item.neighborhood.toUpperCase()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}

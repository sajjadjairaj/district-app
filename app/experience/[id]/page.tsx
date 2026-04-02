"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import TransitionWrapper from "@/components/TransitionWrapper";
import { experiences } from "@/lib/districtData";

export default function ExperienceDetail() {
  const params = useParams();
  const router = useRouter();
  const experience = experiences.find((e) => e.id === params.id);

  const [booked, setBooked] = useState(false);
  const [buttonScale, setButtonScale] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [saved, setSaved] = useState(false);
  const [bookmarkScale, setBookmarkScale] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("district-saved") || "[]");
    setSaved(savedItems.includes(params.id));
  }, [params.id]);

  if (!experience) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-brand-gray font-mono">Experience not found</p>
      </div>
    );
  }

  const handleBook = () => {
    if (booked) return;
    setButtonScale(true);
    setTimeout(() => setButtonScale(false), 100);
    setTimeout(() => {
      setBooked(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }, 100);
  };

  const toggleBookmark = () => {
    setBookmarkScale(true);
    setTimeout(() => setBookmarkScale(false), 150);
    const savedItems = JSON.parse(localStorage.getItem("district-saved") || "[]");
    let next: string[];
    if (savedItems.includes(experience.id)) {
      next = savedItems.filter((id: string) => id !== experience.id);
    } else {
      next = [...savedItems, experience.id];
    }
    localStorage.setItem("district-saved", JSON.stringify(next));
    setSaved(!saved);
  };

  return (
    <div className="relative h-full flex flex-col">
      <TransitionWrapper>
        {/* Full-bleed image */}
        <div className="relative h-[280px] w-full">
          <img
            src={experience.imageUrl}
            alt={experience.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />

          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="absolute top-12 left-4 w-10 h-10 bg-brand-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center z-20"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M11 4L6 9l5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Bookmark */}
          <button
            onClick={toggleBookmark}
            className={`absolute top-12 right-4 w-10 h-10 bg-brand-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center z-20 transition-transform duration-150 ${
              bookmarkScale ? "scale-[1.3]" : "scale-100"
            }`}
          >
            <svg width="14" height="16" viewBox="0 0 14 16" fill={saved ? "white" : "none"} stroke="white" strokeWidth="1.5">
              <path d="M1 2.5A1.5 1.5 0 012.5 1h9A1.5 1.5 0 0113 2.5V15l-6-3.5L1 15V2.5z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-32 -mt-8 relative z-10">
          <div className="px-6">
            {/* Category badge */}
            <div className="bg-brand-card border border-brand-border font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">
              {experience.categoryLabel}
            </div>

            {/* Name */}
            <h1 className="text-[36px] font-black tracking-tight leading-tight">
              {experience.name}
            </h1>
            <p className="font-mono text-xs text-brand-gray uppercase tracking-wider mt-1">
              {experience.neighborhood} • {experience.category}
            </p>

            {/* Flynet Match */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-5 my-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-brand-gray mb-3">
                Why This Is For You
              </p>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-[48px] font-black text-brand-terracotta leading-none">
                  {experience.orbitMatchScore}%
                </span>
                <span className="font-mono text-xs text-brand-gray mb-2">Orbit Match</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {experience.matchReasons.map((reason) => (
                  <span
                    key={reason}
                    className="bg-brand-black border border-brand-border px-3 py-1.5 rounded-full font-mono text-[10px] text-brand-gray"
                  >
                    {reason}
                  </span>
                ))}
              </div>
            </div>

            {/* Detail rows */}
            <div className="flex flex-col divide-y divide-brand-border my-6">
              {experience.detailLines.map((line, i) => (
                <div key={i} className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-2">
                    <i className={`ph-fill ${line.icon} text-brand-gray`} />
                    <span className="font-mono text-xs text-brand-gray">{line.label.toUpperCase()}</span>
                  </div>
                  <span className="font-mono text-xs text-brand-white">{line.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-2">
                  <i className="ph-fill ph-map-pin text-brand-gray" />
                  <span className="font-mono text-xs text-brand-gray">LOCATION</span>
                </div>
                <span className="font-mono text-xs text-brand-white">{experience.neighborhood}, NYC</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-2">
                  <i className="ph-fill ph-star text-brand-gray" />
                  <span className="font-mono text-xs text-brand-gray">ORBIT MATCH</span>
                </div>
                <span className="font-mono text-xs text-brand-white">{experience.orbitMatchScore}%</span>
              </div>
            </div>

            {/* Handwritten annotation */}
            <div className="relative my-4">
              <span className="font-script text-brand-terracotta text-2xl -rotate-3 inline-block animate-float">
                Worth every $FLY
              </span>
            </div>

            {/* About */}
            <h2 className="text-lg font-bold mb-2">About</h2>
            <p className="text-sm text-brand-gray leading-relaxed mb-8">
              {experience.description}
            </p>
          </div>
        </div>
      </TransitionWrapper>

      {/* Bottom action bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-black/95 backdrop-blur-md border-t border-brand-border px-6 py-4 flex justify-between items-center z-40">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-script text-brand-orange text-2xl leading-none mt-1">$FLY</span>
            <span className="font-mono font-bold text-xl">{experience.price.toLocaleString()}</span>
          </div>
          <span className="font-mono text-[10px] text-brand-gray">per person</span>
        </div>
        <button
          onClick={handleBook}
          className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
            buttonScale ? "scale-95" : "scale-100"
          } ${
            booked
              ? "bg-brand-terracotta text-white"
              : "bg-brand-white text-brand-black"
          }`}
        >
          {booked ? "Booked ✓" : experience.actionLabel}
        </button>
      </div>

      {/* Toast */}
      <div
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 bg-brand-card border border-brand-border px-6 py-3 rounded-full font-mono text-xs z-50 transition-all duration-300 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Added to your itinerary
      </div>
    </div>
  );
}

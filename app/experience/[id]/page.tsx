"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import MetaRow from "@/components/MetaRow";
import OrbitBar from "@/components/OrbitBar";
import ProgressLine from "@/components/ProgressLine";
import { experiences } from "@/lib/districtData";

export default function ExperienceDetail() {
  const params = useParams();
  const experience = experiences.find((e) => e.id === params.id);

  const [booked, setBooked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [displayBalance, setDisplayBalance] = useState(2450);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!experience) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="t-label">EXPERIENCE NOT FOUND</p>
      </div>
    );
  }

  const handleBook = () => {
    if (booked) return;
    setBooked(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);

    // Animate balance decrement
    const start = displayBalance;
    const end = start - experience.priceFly;
    const steps = 30;
    const stepSize = (start - end) / steps;
    let current = start;
    let step = 0;
    intervalRef.current = setInterval(() => {
      step++;
      current -= stepSize;
      if (step >= steps) {
        setDisplayBalance(end);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setDisplayBalance(Math.round(current));
      }
    }, 20);
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 overflow-y-auto pb-40">
        {/* Back nav */}
        <div className="px-4 pt-6 pb-4 border-b border-[#222]">
          <Link href="/" className="t-brand">← DISTRICT</Link>
        </div>

        <ProgressLine />

        {/* Hero image */}
        <div className="mt-4 w-full" style={{ aspectRatio: "4/3" }}>
          <img
            src={experience.imageUrl}
            alt={experience.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info block */}
        <div className="px-4 pt-6">
          <p className="t-label mb-4" style={{ color: "#555" }}>{experience.categoryLabel}</p>
          <h1 className="t-display mb-6">{experience.name}</h1>

          {/* Meta rows */}
          <div className="border-t border-[#222]">
            <MetaRow label="NEIGHBORHOOD" value={experience.neighborhood.toUpperCase()} />
            <MetaRow label="CATEGORY" value={experience.category.toUpperCase()} />
            <MetaRow label="AVAILABLE" value={experience.timeRange} />
            <MetaRow label="CAPACITY" value={experience.capacity} />
            <MetaRow label="PAYMENT" value="$FLY ONLY" />
          </div>

          {/* Orbit match */}
          <div className="mt-8 mb-8">
            <p className="t-label mb-3">YOUR ORBIT MATCH</p>
            <OrbitBar score={experience.orbitMatchScore} />
            <p className="t-caption mt-3 mb-4" style={{ color: "#555" }}>
              FLYNET DINING TIER: INSIDER · NEIGHBORHOOD: CONFIRMED
            </p>
            <p className="t-caption" style={{ color: "#555" }}>
              {experience.matchReasons.join(" · ")}
            </p>
          </div>

          {/* About */}
          <div className="mt-8 mb-8">
            <p className="t-label mb-3">ABOUT</p>
            <p className="t-editorial">{experience.description}</p>
          </div>

          {/* Second image */}
          {experience.secondImageUrl && (
            <div className="mt-4 w-full" style={{ aspectRatio: "3/4" }}>
              <img
                src={experience.secondImageUrl}
                alt={`${experience.name} detail`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="mb-40" />
        </div>
      </div>

      {/* Fixed bottom action bar */}
      <div className="fixed md:absolute bottom-0 left-0 right-0 bg-[#111111]/95 backdrop-blur-sm border-t border-[#222] px-4 py-4 z-40">
        <div className="flex justify-between items-center mb-3">
          <span className="t-label">PRICE PER PERSON</span>
          <div>
            <span className="t-fly font-bold">{experience.priceFly}</span>
            <span className="t-caption ml-1">$FLY</span>
          </div>
        </div>
        <button
          onClick={handleBook}
          className={`w-full border border-white px-4 py-3 flex justify-between items-center transition-colors duration-100 ${
            booked
              ? "bg-white text-[#111111]"
              : "bg-transparent text-white active:bg-white active:text-[#111111]"
          }`}
        >
          <span className="t-nav">
            {booked ? "BOOKED ✓" : `${experience.actionLabel} — ${experience.priceFly} $FLY`}
          </span>
          {!booked && <span className="t-value">→</span>}
        </button>
        {/* Terracotta confirmation line */}
        {booked && (
          <div className="mt-2 h-[1px] bg-[#D95C41] animate-[expandWidth_600ms_ease-out_forwards]" />
        )}
      </div>

      {/* Toast */}
      <div
        className={`fixed md:absolute bottom-24 left-1/2 -translate-x-1/2 border border-[#222] bg-[#111111] t-caption px-4 py-2 z-50 transition-opacity duration-300 whitespace-nowrap ${
          showToast ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        ADDED TO ITINERARY
      </div>
    </div>
  );
}

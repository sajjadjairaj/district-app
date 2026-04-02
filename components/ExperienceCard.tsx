"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import type { Experience } from "@/lib/districtData";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("district-saved") || "[]");
    setSaved(savedItems.includes(experience.id));
  }, [experience.id]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <div className="w-full border-b border-[#222]">
      {/* Image block */}
      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
        <img
          src={experience.imageUrl}
          alt={experience.name}
          className="w-full h-full object-cover"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-sm px-3 py-1.5 border border-[#333] flex items-center gap-1.5">
          {experience.isBlackbirdPartner && (
            <div className="w-1.5 h-1.5 bg-[#D95C41] dot-pulse" />
          )}
          <span className="t-label text-white">{experience.categoryLabel}</span>
        </div>
        {/* Bookmark */}
        <button
          onClick={toggleBookmark}
          className="absolute top-3 right-3 w-8 h-8 bg-[#111111]/80 backdrop-blur-sm border border-[#333] flex items-center justify-center"
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill={saved ? "white" : "none"} stroke="white" strokeWidth="1">
            <path d="M1 1.5h10V13l-5-3-5 3V1.5z" />
          </svg>
        </button>
      </div>

      {/* Info block */}
      <div className="px-4 py-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="t-title mb-1">{experience.name}</p>
            <p className="t-caption mt-1">{experience.neighborhood} · {experience.category}</p>
          </div>
          <div className="text-right">
            <span className="t-fly">{experience.priceFly}</span>
            <span className="t-caption ml-1">$FLY</span>
          </div>
        </div>
        <div className="flex gap-4 mt-3">
          {experience.details.map((detail, i) => (
            <span key={i} className="t-caption" style={{ color: "#555" }}>{detail}</span>
          ))}
        </div>
        <div className="mt-4">
          <Link href={`/experience/${experience.id}`}>
            <PrimaryButton text={`${experience.actionLabel} →`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

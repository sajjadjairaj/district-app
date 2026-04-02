"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FlyBadge from "./FlyBadge";
import type { Experience } from "@/lib/districtData";

const barcodePatterns = [
  [1, 2, 1, 3, 2, 1],
  [2, 1, 3, 1, 1, 2],
  [1, 3, 1, 2, 1, 3],
  [3, 1, 2, 1, 3, 1],
  [1, 2, 3, 1, 2, 2],
];

export default function ReceiptCard({
  experience,
  index = 0,
}: {
  experience: Experience;
  index?: number;
}) {
  const [saved, setSaved] = useState(false);
  const [bookmarkScale, setBookmarkScale] = useState(false);
  const pattern = barcodePatterns[index % barcodePatterns.length];

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("district-saved") || "[]");
    setSaved(savedItems.includes(experience.id));
  }, [experience.id]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  const widthClasses = ["w-1", "w-[2px]", "w-[3px]", "w-2"];

  return (
    <Link href={`/experience/${experience.id}`}>
      <div className="relative w-full group cursor-pointer">
        <div className="bg-brand-card rounded-t-3xl rounded-b-xl overflow-hidden border border-brand-border flex flex-col shadow-lg relative">
          {/* Image section */}
          <div className="p-4 relative">
            <div className="overflow-hidden rounded-2xl h-[200px] border border-brand-border">
              <img
                src={experience.imageUrl}
                alt={experience.name}
                className="w-full h-full object-cover img-editorial"
              />
            </div>
            {/* Category badge */}
            <div className="absolute top-7 left-7 bg-brand-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
              {experience.isBlackbirdPartner && (
                <div className="w-2 h-2 rounded-full bg-brand-terracotta animate-pulse" />
              )}
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-white">
                {experience.categoryLabel}
              </span>
            </div>
            {/* Bookmark */}
            <button
              onClick={toggleBookmark}
              className={`absolute top-7 right-7 w-8 h-8 bg-brand-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center transition-transform duration-150 ${
                bookmarkScale ? "scale-[1.3]" : "scale-100"
              }`}
            >
              <svg width="14" height="16" viewBox="0 0 14 16" fill={saved ? "white" : "none"} stroke="white" strokeWidth="1.5">
                <path d="M1 2.5A1.5 1.5 0 012.5 1h9A1.5 1.5 0 0113 2.5V15l-6-3.5L1 15V2.5z" />
              </svg>
            </button>
          </div>

          {/* Perforated separator */}
          <div className="relative flex items-center px-0 h-8">
            <div className="w-4 h-8 bg-brand-black rounded-r-full absolute left-[-1px] border-r border-y border-brand-border z-10" />
            <div className="flex-1 border-t-2 border-dashed border-[#333] mx-4" />
            <div className="w-4 h-8 bg-brand-black rounded-l-full absolute right-[-1px] border-l border-y border-brand-border z-10" />
          </div>

          {/* Info section */}
          <div className="p-6 pt-2 flex flex-col gap-6 relative">
            {/* Barcode decoration */}
            <div className="absolute top-0 right-6 opacity-20 flex gap-[2px]">
              {pattern.map((w, i) => (
                <div key={i} className={`${widthClasses[w - 1]} h-8 bg-white`} />
              ))}
            </div>

            <div>
              <h3 className="text-[28px] font-black leading-none mb-2 tracking-tight">
                {experience.name}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-wider text-brand-gray">
                {experience.neighborhood} • {experience.category}
              </p>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                {experience.detailLines.map((line, i) => (
                  <div key={i} className="font-mono text-xs text-brand-gray flex items-center gap-2">
                    <i className={`ph-fill ${line.icon} text-sm`} />
                    <span>{line.value}</span>
                  </div>
                ))}
              </div>
              <button className="bg-brand-white text-brand-black pl-5 pr-4 py-3 rounded-xl font-bold flex items-center gap-3">
                <span className="text-sm">{experience.actionLabel}</span>
                <FlyBadge amount={experience.price} />
              </button>
            </div>
          </div>

          {/* Receipt bottom */}
          <div className="absolute bottom-0 left-0 w-full receipt-bottom" />
        </div>
      </div>
    </Link>
  );
}

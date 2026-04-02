"use client";

import { categories } from "@/lib/districtData";

interface CategoryFilterProps {
  active: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ active, onSelect }: CategoryFilterProps) {
  return (
    <div className="px-6 py-4 bg-gradient-to-b from-brand-black via-brand-black/90 to-transparent pb-6 overflow-x-auto no-scrollbar">
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-colors duration-200 ${
              active === cat
                ? "bg-brand-white text-brand-black"
                : "bg-brand-card text-brand-white border border-brand-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

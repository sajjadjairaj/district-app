"use client";

import { categories } from "@/lib/districtData";

interface CategoryFilterProps {
  active: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ active, onSelect }: CategoryFilterProps) {
  return (
    <div className="px-6 py-3 flex gap-6 overflow-x-auto bg-[#111111]">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`t-nav whitespace-nowrap pb-1 transition-colors duration-100 ${
            active === cat
              ? "text-white border-b border-white"
              : "text-[#555]"
          }`}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

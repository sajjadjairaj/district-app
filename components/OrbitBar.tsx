"use client";

import { useEffect, useState } from "react";

export default function OrbitBar({ score }: { score: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedWidth(score), 50);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div>
      <div className="h-[1px] w-full bg-[#222]">
        <div
          className="h-[1px] bg-white"
          style={{
            width: `${animatedWidth}%`,
            transition: "width 800ms ease-out",
          }}
        />
      </div>
      <div className="flex justify-between t-caption mt-2">
        <span>0</span>
        <span>{score}%</span>
        <span>100</span>
      </div>
    </div>
  );
}

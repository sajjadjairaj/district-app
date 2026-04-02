"use client";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  inverted?: boolean;
}

export default function PrimaryButton({ text, onClick, inverted }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full border border-white px-4 py-3 flex justify-between items-center transition-colors duration-100 active:bg-white active:text-[#111111] ${
        inverted ? "bg-white text-[#111111]" : "bg-transparent text-white"
      }`}
    >
      <span className="t-nav">{text}</span>
      <span className="t-value">→</span>
    </button>
  );
}

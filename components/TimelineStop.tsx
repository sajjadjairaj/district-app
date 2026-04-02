import type { ItineraryStop } from "@/lib/districtData";

interface TimelineStopProps {
  stop: ItineraryStop;
  isLast: boolean;
}

export default function TimelineStop({ stop, isLast }: TimelineStopProps) {
  return (
    <div className="relative flex gap-4">
      {/* Left: marker + line */}
      <div className="w-6 flex flex-col items-center">
        <div className="w-5 h-5 border border-white flex items-center justify-center flex-shrink-0">
          <div
            className={`w-2 h-2 ${
              stop.status === "confirmed" ? "bg-[#D95C41]" : "bg-[#333]"
            }`}
          />
        </div>
        {!isLast && <div className="flex-1 w-[1px] bg-[#222] mx-auto" />}
      </div>

      {/* Right: card */}
      <div className="flex-1 bg-[#1a1a1a] border border-[#222] p-4 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="t-caption">{stop.time}</p>
            <p className="t-title mt-1">{stop.name}</p>
          </div>
          <div className="text-right">
            <span className="t-fly">{stop.flyPrice}</span>
            <span className="t-caption ml-1">$FLY</span>
          </div>
        </div>
        <p className="t-caption mt-1" style={{ color: "#555" }}>{stop.neighborhood}</p>
        <div className="mt-3">
          <span
            className={`t-caption px-2 py-1 border ${
              stop.status === "confirmed"
                ? "border-[#D95C41] text-[#D95C41]"
                : "border-[#333] text-[#555]"
            }`}
          >
            {stop.status.toUpperCase()}
          </span>
        </div>
        {stop.code && (
          <p className="t-caption mt-2" style={{ color: "#333" }}>{stop.code}</p>
        )}
      </div>
    </div>
  );
}

"use client";

export default function StatusBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-brand-black z-50 flex items-center justify-between px-8 text-sm font-semibold">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill="white" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="white" />
          <rect x="9" y="2" width="3" height="10" rx="0.5" fill="white" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="white" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
          <path d="M8 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM4.05 8.46a5.6 5.6 0 017.9 0l-.71.71a4.6 4.6 0 00-6.48 0l-.71-.71zM1.22 5.64a9.19 9.19 0 0113.56 0l-.71.71a8.19 8.19 0 00-12.14 0l-.71-.71z" />
        </svg>
        {/* Battery */}
        <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="white" strokeWidth="1" />
          <rect x="2" y="2" width="18" height="8" rx="1" fill="white" />
          <path d="M24 4v4a2 2 0 000-4z" fill="white" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

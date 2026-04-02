export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="t-section pb-2 border-b border-[#222] mb-6">
      {children}
    </div>
  );
}

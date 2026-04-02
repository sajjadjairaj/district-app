export default function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="w-full flex justify-between py-4 border-b border-[#222]">
      <span className="t-label">{label}</span>
      <span className="t-value">{value}</span>
    </div>
  );
}

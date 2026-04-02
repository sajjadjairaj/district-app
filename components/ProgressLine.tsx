export default function ProgressLine({ width = "25%" }: { width?: string }) {
  return (
    <div className="mx-4 mb-10">
      <div className="h-[1px] bg-white opacity-80" style={{ width }} />
    </div>
  );
}

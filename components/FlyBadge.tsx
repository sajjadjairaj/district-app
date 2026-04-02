export default function FlyBadge({ amount }: { amount: number }) {
  return (
    <div className="bg-brand-black text-brand-white px-2 py-1 rounded-md flex items-center">
      <span className="font-script text-brand-orange text-lg leading-none mt-1 mr-1">$FLY</span>
      <span className="font-mono">{amount.toLocaleString()}</span>
    </div>
  );
}

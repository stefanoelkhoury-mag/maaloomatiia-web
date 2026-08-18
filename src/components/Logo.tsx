export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-semibold tracking-tight text-xl select-none ${className}`}
    >
      <span>maal</span>
      <span className="relative inline-flex h-[0.62em] w-[0.62em] mx-[0.03em] translate-y-[0.02em] items-center justify-center">
        <span className="absolute inset-0 rotate-45 rounded-[0.18em] border-[0.11em] border-teal-400" />
      </span>
      <span>matiia</span>
    </span>
  );
}

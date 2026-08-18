export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center font-extrabold tracking-tight text-xl select-none ${className}`}
    >
      <span>maal</span>
      <svg
        viewBox="0 0 60 40"
        className="h-[0.72em] w-[1.15em] mx-[0.05em] -translate-y-[0.02em]"
        aria-hidden
      >
        <circle cx="18.5" cy="6" r="2.5" fill="var(--teal-400)" />
        <circle cx="34.5" cy="6" r="2.5" fill="var(--teal-400)" />
        <circle cx="19" cy="23" r="13.5" fill="none" stroke="var(--teal-400)" strokeWidth="3.6" />
        <circle cx="35" cy="23" r="13.5" fill="var(--teal-400)" />
      </svg>
      <span>matiia</span>
    </span>
  );
}

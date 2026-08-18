import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      width={10}
      height={6}
      viewBox="0 0 10 6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

export function OrbitIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TreeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="4.5" r="1.7" />
      <circle cx="5.5" cy="13" r="1.7" />
      <circle cx="12" cy="13" r="1.7" />
      <circle cx="18.5" cy="13" r="1.7" />
      <circle cx="5.5" cy="19.5" r="1.5" />
      <circle cx="18.5" cy="19.5" r="1.5" />
      <path d="M12 6.2v5.1M5.5 14.7v3.1M18.5 14.7v3.1M10.7 12H6.9M13.3 12h3.8M12 6.2L5.9 12M12 6.2l6.1 5.8" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="3.5" width="10" height="17" rx="0.6" />
      <rect x="15.5" y="9" width="4" height="11.5" rx="0.6" />
      <path d="M7.3 7h1.4M11.3 7h1.4M7.3 10.4h1.4M11.3 10.4h1.4M7.3 13.8h1.4M11.3 13.8h1.4M7.3 17.2h1.4M11.3 17.2h1.4" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4.5A2.5 2.5 0 0 0 5.8 9.3M17 5h2.5A2.5 2.5 0 0 1 18.2 9.3" />
      <path d="M12 14v3M9 20.5h6M9.5 20.5c0-2 .8-3 2.5-3s2.5 1 2.5 3" />
    </svg>
  );
}

export function GradCapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5 2.5 9.5 12 14l9.5-4.5L12 5Z" />
      <path d="M6.5 11.8v4.1c0 1.5 2.5 2.7 5.5 2.7s5.5-1.2 5.5-2.7v-4.1M21.5 9.5v6" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2" />
    </svg>
  );
}

export function LinkNodesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="7" r="2.3" />
      <circle cx="18.5" cy="7" r="2.3" />
      <circle cx="12" cy="18" r="2.3" />
      <path d="M7.5 8.3 16.5 8.3M6.6 9.1 10.8 16M17.4 9.1 13.2 16" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="M9.6 9.6 7 3.5h3l2 4.6M14.4 9.6 17 3.5h-3l-2 4.6" />
      <path d="M10.3 15.3 11.6 16.6 14 13.5" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.8" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 3.5h3l1.4 4.4-2.2 1.9a13.6 13.6 0 0 0 5.4 5.4l1.9-2.2 4.4 1.4v3a1.7 1.7 0 0 1-1.9 1.7C11 18.4 5.6 13 5 5.4a1.7 1.7 0 0 1 1.6-1.9Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.5h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.5 20.5h-3.37v-6.15c0-1.47-.03-3.35-2.04-3.35-2.05 0-2.36 1.6-2.36 3.25v6.25H9.36V8.5h3.24v1.64h.05c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.65 2.26 4.65 5.19v6.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 8h11.5M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

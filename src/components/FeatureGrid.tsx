import type { ComponentType, SVGProps } from "react";

export interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export function FeatureGrid({ features, columns = 3 }: { features: Feature[]; columns?: 3 | 4 }) {
  const gridCols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";
  return (
    <div className={`grid gap-5 ${gridCols}`}>
      {features.map(({ icon: Icon, title, description }) => (
        <div key={title} className="rounded-2xl border border-white/10 p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/40 text-teal-300">
            <Icon width={20} height={20} />
          </div>
          <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">{description}</p>
        </div>
      ))}
    </div>
  );
}

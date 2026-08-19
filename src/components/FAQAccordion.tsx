"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className={`overflow-hidden rounded-2xl border transition ${open ? "border-teal-400/40" : "border-black/10"}`}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-medium text-[var(--foreground)] sm:text-base">{item.question}</span>
              <ChevronDownIcon className={`shrink-0 text-ink-500 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div className="px-5 pb-5">
                <p className="text-sm leading-relaxed text-ink-500">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

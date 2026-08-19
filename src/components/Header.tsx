"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ChevronDownIcon } from "./icons";

const NAV = [
  {
    label: "Programs",
    items: [
      { label: "All Programs", href: "/programs" },
      { label: "Browse by Topic", href: "/programs?tab=topics" },
      { label: "Data Engineering Bootcamps", href: "/programs?tab=career-paths&highlight=Data+Engineering" },
      { label: "AI Engineering", href: "/programs?tab=career-paths&highlight=AI+Engineering" },
      { label: "AI for Business Leaders", href: "/programs?tab=courses" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "For Enterprise", href: "/solutions/for-enterprise" },
      { label: "For National Capability Programs", href: "#" },
      { label: "For Education Partners", href: "#" },
      { label: "For Individuals", href: "#" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--navy-950)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="text-white">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-1.5 text-sm text-white/90 transition hover:text-white"
                onClick={() => setOpenMenu((m) => (m === menu.label ? null : menu.label))}
              >
                {menu.label}
                <ChevronDownIcon
                  className={`transition-transform ${openMenu === menu.label ? "rotate-180" : ""}`}
                />
              </button>
              {openMenu === menu.label && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                  <div className="rounded-xl border border-white/10 bg-[var(--navy-900)] p-2 shadow-xl shadow-black/30">
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#reach-out"
            className="rounded-full border border-teal-400/70 px-5 py-2 text-sm font-medium text-teal-300 transition hover:bg-teal-400/10"
          >
            Talk to Us
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-white transition ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-white transition ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[var(--navy-950)] px-5 pb-6 md:hidden">
          {NAV.map((menu) => (
            <div key={menu.label} className="border-b border-white/10 py-3">
              <p className="mb-2 text-sm font-medium text-white">{menu.label}</p>
              <div className="flex flex-col gap-2 pl-2">
                {menu.items.map((item) => (
                  <Link key={item.label} href={item.href} className="text-sm text-white/70">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <a
            href="#reach-out"
            className="mt-4 block rounded-full border border-teal-400/70 px-5 py-2 text-center text-sm font-medium text-teal-300"
          >
            Talk to Us
          </a>
        </div>
      )}
    </header>
  );
}

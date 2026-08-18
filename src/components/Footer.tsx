import Link from "next/link";
import { Logo } from "./Logo";
import { MailIcon, PhoneIcon, LinkedInIcon, InstagramIcon } from "./icons";

const PROGRAMS = [
  { label: "All Programs", href: "/programs" },
  { label: "Data Engineering Bootcamps", href: "/programs?tab=career-paths&highlight=Data+Engineering" },
  { label: "AI Engineering", href: "/programs?tab=career-paths&highlight=AI+Engineering" },
  { label: "AI for Business Leaders", href: "/programs?tab=courses" },
];
const COMPANY = ["Higher Education", "About", "Partnerships", "Contact"];

export function Footer() {
  return (
    <footer className="bg-[var(--navy-950)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <span className="text-white">
              <Logo />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              The Data &amp; AI Capability Partner for Enterprise Teams
              Across MENA.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-ink-300">
              <a href="mailto:training@maaloomatiia.com" className="flex items-center gap-2 transition hover:text-white">
                <MailIcon width={15} height={15} />
                training@maaloomatiia.com
              </a>
              <a href="tel:+971585505808" className="flex items-center gap-2 transition hover:text-white">
                <PhoneIcon width={15} height={15} />
                +971 58 550 5808
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Programs</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-300">
              {PROGRAMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-300">
              {COMPANY.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">© 2026 maaloomatiia. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="LinkedIn" className="text-ink-300 transition hover:text-white">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="Instagram" className="text-ink-300 transition hover:text-white">
              <InstagramIcon />
            </a>
            <span className="text-xs text-ink-500">English / عربي</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

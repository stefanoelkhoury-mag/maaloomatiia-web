import { MailIcon, PhoneIcon } from "./icons";

export function ContactBar() {
  return (
    <div className="border-t border-white/10 bg-[var(--navy-950)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 py-6 text-sm text-ink-300 sm:flex-row sm:gap-10">
        <a href="mailto:training@maaloomatiia.com" className="flex items-center gap-2 transition hover:text-white">
          <MailIcon width={16} height={16} />
          training@maaloomatiia.com
        </a>
        <a href="tel:+971585505808" className="flex items-center gap-2 transition hover:text-white">
          <PhoneIcon width={16} height={16} />
          +971 58 550 5808
        </a>
      </div>
    </div>
  );
}

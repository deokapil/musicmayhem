import Link from "next/link";
import LogoMark from "./LogoMark";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-8" />
              <span className="font-display text-lg font-bold text-paper">Music Mayhem</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              Making Alzheimer&apos;s a distant memory, one song at a time. Live music
              trivia played on your phone, since 1999.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-gold-400">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/65 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-gold-400">Play & connect</p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/65">
              <li>
                <a href="https://gomayhem.com" className="transition-colors hover:text-paper">
                  gomayhem.com
                </a>
              </li>
              <li>Minneapolis, MN 55418</li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-paper">
                  Join our team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Music Mayhem LLC. All rights reserved.</p>
          <p>Trivia that goes to 11.</p>
        </div>
      </div>
    </footer>
  );
}

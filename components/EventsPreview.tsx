import Link from "next/link";
import { upcomingEvents } from "@/lib/data";
import Reveal from "./Reveal";

export default function EventsPreview() {
  return (
    <section className="bg-ink-950 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
              Where the Mayhem is headed
            </h2>
            <p className="mt-2 text-sm text-paper/60">
              Schedule shown is a placeholder — live dates land here once the feed is
              connected.
            </p>
          </div>
          <Link
            href="/events"
            className="text-sm font-semibold text-gold-400 hover:text-gold-300"
          >
            Full schedule
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.slice(0, 3).map((event, i) => (
            <Reveal key={event.id} delay={i * 0.08}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold-500/40">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                  {event.type}
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-paper">
                  {event.venue}
                </p>
                <p className="mt-1 text-sm text-paper/60">{event.city}</p>
                <p className="mt-4 text-sm text-paper/50">{event.date}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

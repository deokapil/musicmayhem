"use client";

import { useState } from "react";
import { upcomingEvents, type UpcomingEvent } from "@/lib/data";

const filters: Array<UpcomingEvent["type"] | "All"> = [
  "All",
  "Bar Night",
  "Campus",
  "Private",
  "Fundraiser",
];

export default function EventsList() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All" ? upcomingEvents : upcomingEvents.filter((e) => e.type === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active === f
                ? "border-gold-500 bg-gold-500 text-ink-950"
                : "border-white/15 text-paper/70 hover:border-gold-500/50 hover:text-paper"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 divide-y divide-white/10 rounded-lg border border-white/10">
        {filtered.map((event) => (
          <div
            key={event.id}
            className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-display text-base font-semibold text-paper">
                {event.venue}
              </p>
              <p className="text-sm text-paper/55">{event.city}</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-full border border-gold-500/40 px-3 py-1 text-xs font-semibold text-gold-400">
                {event.type}
              </span>
              <span className="text-paper/50">{event.date}</span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="px-5 py-8 text-center text-sm text-paper/50">
            No shows in this category yet — check back soon.
          </p>
        )}
      </div>
    </div>
  );
}

import { pressMentions } from "@/lib/data";

export default function PressStrip() {
  const doubled = [...pressMentions, ...pressMentions];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-ink-900 py-8">
      <div className="flex w-max animate-marquee gap-16">
        {doubled.map((mention, i) => (
          <div key={i} className="flex shrink-0 items-center gap-4">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-paper/40">
              {mention.outlet}
            </span>
            <span className="max-w-xs text-sm text-paper/50">{mention.quote}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

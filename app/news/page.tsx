import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { pressMentions } from "@/lib/data";

export const metadata: Metadata = {
  title: "In the News | Music Mayhem",
  description: "Media coverage and press releases about Music Mayhem.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="In the news"
        title="Media coverage & press releases"
        description="Coverage shown below is placeholder — swap in real clips once they're gathered."
      />

      <section className="bg-ink-950 py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          {pressMentions.map((mention, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-lg border border-white/10 p-6">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-gold-400">
                  {mention.outlet}
                </p>
                <p className="mt-2 text-base leading-relaxed text-paper/75">
                  {mention.quote}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

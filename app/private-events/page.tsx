import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { eventTypes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Private Events | Music Mayhem",
  description: "Book Music Mayhem for your bar, campus, corporate, or fundraising event.",
};

export default function PrivateEventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private events"
        title="Bring the Mayhem to your event"
        description="Bars, ballrooms, breweries, sports arenas, college campuses, holiday parties — our Trivia Jockeys travel with everything they need."
      />

      <section className="bg-ink-950 py-16">
        <div className="mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2">
          {eventTypes.map((type, i) => (
            <Reveal key={type.title} delay={i * 0.06}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-semibold text-paper">
                  {type.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">
                  {type.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-wine-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">
              Ready to book a date?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-paper/75">
              Tell us your venue, expected crowd, and the vibe you&apos;re going for — a
              Trivia Jockey will tailor the playlist to match.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-md bg-gold-500 px-7 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] hover:bg-gold-400"
            >
              Contact us to book
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

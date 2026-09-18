import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Music for Memories | Music Mayhem",
  description:
    "Music Mayhem's nonprofit initiative donating to Alzheimer's disease research every time a song is played.",
};

export default function MusicForMemoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="A cause behind every show"
        title="Making Alzheimer's a distant memory, one song at a time"
        description="Every Music Mayhem show plays toward something bigger than the leaderboard."
      />

      <section className="bg-ink-950 py-16">
        <div className="mx-auto max-w-2xl space-y-6 px-6 text-base leading-relaxed text-paper/75">
          <Reveal>
            <p>
              Music for Memories is the nonprofit organization founded by Music Mayhem
              creator Bill Solboe, dedicated to funding Alzheimer&apos;s disease
              research. Every time a song is played during a Music Mayhem show, a
              donation follows it.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="border-l-2 border-gold-500 pl-5">
              &ldquo;I donate time and money to Alzheimer&apos;s disease research via a
              nonprofit organization called Music for Memories. As a result, I&apos;ve
              dedicated myself, and my business, to join the fight to find a
              cure.&rdquo;
              <footer className="mt-3 text-sm font-semibold text-paper/55">
                — Bill Solboe, founder
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              Alzheimer&apos;s-related fundraising events can use Music Mayhem free of
              charge — turning a night of music trivia directly into research funding.
              If you&apos;re organizing a fundraiser, this is the fastest way to fill
              the room and put every song toward the cause.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href="/contact"
              className="inline-block rounded-md bg-gold-500 px-7 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] hover:bg-gold-400"
            >
              Set up a fundraiser show
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

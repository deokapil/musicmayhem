import Link from "next/link";
import Reveal from "./Reveal";

export default function MusicForMemoriesTeaser() {
  return (
    <section className="relative overflow-hidden bg-wine-700 py-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
            Music for Memories
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-paper text-balance">
            Making Alzheimer&apos;s a distant memory, one song at a time
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="border-l-2 border-gold-500 pl-5 text-base leading-relaxed text-paper/80">
            &ldquo;I donate time and money to Alzheimer&apos;s disease research through a
            nonprofit called Music for Memories. Every time a song is played in a Music
            Mayhem show, we donate toward the cure.&rdquo;
            <footer className="mt-3 text-sm font-semibold text-paper/60">
              — Bill Solboe, Music Mayhem founder
            </footer>
          </blockquote>
          <Link
            href="/music-for-memories"
            className="mt-6 inline-block text-sm font-semibold text-gold-400 underline decoration-gold-500/40 underline-offset-4 transition-colors hover:text-gold-300"
          >
            Learn about the cause
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

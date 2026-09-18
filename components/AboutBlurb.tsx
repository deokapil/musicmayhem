import Reveal from "./Reveal";

export default function AboutBlurb() {
  return (
    <section className="bg-ink-950 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-paper text-balance sm:text-4xl">
            A truly 21st-century smartphone game show
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-paper/70">
            Players listen to songs played over the venue&apos;s sound system and race to
            guess the title and artist as letters reveal on the big screen — typing their
            answers straight from their own phone or tablet. No apps, no equipment, no
            waiting for a buzzer.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-paper/70">
            Thousands of songs, every genre imaginable — last week&apos;s chart-toppers to
            &apos;40s big band swing, gospel to R&amp;B, &apos;80s metal to Broadway
            showtunes. Our Trivia Jockeys tailor every playlist to the room, by era,
            genre, or theme.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {[
            "Chart-toppers",
            "Big Band",
            "Gospel & R&B",
            "'80s Metal",
            "Broadway",
            "Love Songs",
            "Patriotic",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-paper/15 px-4 py-1.5 text-xs font-medium text-paper/65"
            >
              {tag}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Music Mayhem",
  description: "The story behind Music Mayhem, the live interactive music trivia game show.",
};

const stats = [
  { value: "1999", label: "Year the Mayhem started" },
  { value: "1,000s", label: "Songs in rotation" },
  { value: "50+", label: "States & venues played" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Music Mayhem"
        title="Trivia that goes to 11 since 1999"
        description="What started as a bar-room experiment has grown into a touring, smartphone-powered game show — without losing the late-night, sing-along energy that started it."
      />

      <section className="bg-ink-950 py-16">
        <div className="mx-auto grid max-w-4xl gap-4 px-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-lg border border-white/10 p-6 text-center">
                <p className="font-display text-3xl font-bold text-gold-400">{stat.value}</p>
                <p className="mt-1 text-xs text-paper/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink-950 pb-20">
        <div className="mx-auto max-w-2xl space-y-6 px-6 text-base leading-relaxed text-paper/75">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-paper">
              How a night of Music Mayhem works
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              A Music Mayhem show runs off two things: a smartphone in every player&apos;s
              hand, and a Trivia Jockey running the room. Songs play over the venue sound
              system while the title reveals letter by letter on the big screen — players
              race to type the title and artist first, on their own device, no app
              required.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Our Trivia Jockeys read the room and adjust the playlist live — leaning
              into a decade, a genre, or a theme the crowd is responding to. That&apos;s
              the difference between a generic trivia night and one people show up for
              every week.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <h2 className="pt-4 font-display text-2xl font-bold text-paper">
              Built by people who love a full room
            </h2>
          </Reveal>
          <Reveal delay={0.24}>
            <p>
              Music Mayhem was built by founder Bill Solboe around a simple bet: give
              people a reason to put their phones to use instead of down, and a bar
              night turns into an event. That bet is also why the company gives a
              portion of every show back to Alzheimer&apos;s research — read more on the{" "}
              <a
                href="/music-for-memories"
                className="text-gold-400 underline decoration-gold-500/40 underline-offset-4 hover:text-gold-300"
              >
                Music for Memories
              </a>{" "}
              page.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-stage-gradient py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-paper text-balance sm:text-4xl">
            Head over to gomayhem.com to join the Mayhem happening near you
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href="https://gomayhem.com"
            className="mt-8 inline-block rounded-md bg-gold-500 px-8 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] hover:bg-gold-400"
          >
            Play now
          </a>
        </Reveal>
      </div>
    </section>
  );
}

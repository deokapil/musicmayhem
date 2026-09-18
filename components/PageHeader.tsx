import PolyBackdrop from "./PolyBackdrop";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-stage-gradient py-16 sm:py-20">
      <PolyBackdrop className="absolute inset-0 h-full w-full opacity-80" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {eyebrow && (
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-4xl font-bold text-paper text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

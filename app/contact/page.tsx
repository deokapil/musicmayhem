import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Music Mayhem",
  description: "Get in touch with Music Mayhem to book a show or join the team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's book your night of Mayhem"
        description="Bar shows, campus nights, fundraisers, or private parties — send us the details."
      />

      <section className="bg-ink-950 py-16">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
                Music Mayhem LLC
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                Minneapolis, MN 55418
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
                Join our team
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                We&apos;re always looking for outgoing Trivia Jockeys who love music and
                a full room. Mention &ldquo;Join our team&rdquo; in the message above and
                we&apos;ll follow up.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
                Already playing?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                Head to{" "}
                <a href="https://gomayhem.com" className="text-gold-400 hover:text-gold-300">
                  gomayhem.com
                </a>{" "}
                on your phone to join a live game already in progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

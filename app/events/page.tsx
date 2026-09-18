import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EventsList from "./EventsList";

export const metadata: Metadata = {
  title: "Show Schedule | Music Mayhem",
  description: "Upcoming Music Mayhem shows and live locations.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live show locations"
        title="Find the Mayhem near you"
        description="This schedule is running on placeholder dates for now — the live feed drops in here once it's connected."
      />
      <section className="bg-ink-950 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <EventsList />
        </div>
      </section>
    </>
  );
}

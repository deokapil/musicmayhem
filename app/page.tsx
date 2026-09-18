import Hero from "@/components/Hero";
import AboutBlurb from "@/components/AboutBlurb";
import MusicForMemoriesTeaser from "@/components/MusicForMemoriesTeaser";
import EventsPreview from "@/components/EventsPreview";
import PressStrip from "@/components/PressStrip";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBlurb />
      <MusicForMemoriesTeaser />
      <EventsPreview />
      <PressStrip />
      <CTASection />
    </>
  );
}

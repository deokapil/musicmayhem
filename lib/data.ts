export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Schedule" },
  { href: "/private-events", label: "Book Us" },
  { href: "/music-for-memories", label: "Music for Memories" },
  { href: "/news", label: "In the News" },
  { href: "/contact", label: "Contact" },
];

export type UpcomingEvent = {
  id: string;
  date: string; // display string, placeholder until real feed is wired up
  venue: string;
  city: string;
  type: "Bar Night" | "Campus" | "Private" | "Fundraiser";
};

// PLACEHOLDER — swap for the real events feed once the schedule source is finalized.
export const upcomingEvents: UpcomingEvent[] = [
  { id: "evt-1", date: "TBD", venue: "Venue name TBD", city: "City, State", type: "Bar Night" },
  { id: "evt-2", date: "TBD", venue: "Venue name TBD", city: "City, State", type: "Campus" },
  { id: "evt-3", date: "TBD", venue: "Venue name TBD", city: "City, State", type: "Fundraiser" },
  { id: "evt-4", date: "TBD", venue: "Venue name TBD", city: "City, State", type: "Bar Night" },
  { id: "evt-5", date: "TBD", venue: "Venue name TBD", city: "City, State", type: "Private" },
  { id: "evt-6", date: "TBD", venue: "Venue name TBD", city: "City, State", type: "Campus" },
];

export const howItWorks = [
  {
    title: "Listen",
    description: "A song plays over the house speakers, pulled from a crowd-tailored playlist.",
  },
  {
    title: "Guess",
    description: "Type the title and artist on your own phone as the letters reveal on screen.",
  },
  {
    title: "Win",
    description: "Fastest, most accurate players climb the live leaderboard for the night.",
  },
];

export const pressMentions = [
  { outlet: "Outlet Name", quote: "Placeholder pull-quote about a Music Mayhem show — replace with a real clip." },
  { outlet: "Outlet Name", quote: "Placeholder pull-quote about a Music Mayhem show — replace with a real clip." },
  { outlet: "Outlet Name", quote: "Placeholder pull-quote about a Music Mayhem show — replace with a real clip." },
];

export const eventTypes = [
  {
    title: "Bars & Breweries",
    description: "A recurring weekly draw that turns a slow night into the busiest one on the calendar.",
  },
  {
    title: "College Campuses",
    description: "Student-union and Greek-life nights built around chart-toppers and campus-era throwbacks.",
  },
  {
    title: "Corporate & Private",
    description: "Holiday parties, retirement send-offs, and team nights with a playlist tuned to the room.",
  },
  {
    title: "Fundraisers",
    description: "Every song played can route donations toward Alzheimer's research through Music for Memories.",
  },
];

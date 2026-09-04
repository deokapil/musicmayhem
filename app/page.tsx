"use client";

import { useState } from "react";

// ─── Icons (inline SVGs for zero-dependency) ─────────────────────────
const MusicNoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────
const EVENTS = [
  {
    id: 1,
    city: "NYC",
    date: "Sep 15, 2026",
    title: "Music Mayhem NYC",
    venue: "Madison Square Garden • New York, NY",
    price: "$45",
    status: "SOLD OUT" as const,
    gradient: "from-maroon-900 to-maroon-800",
  },
  {
    id: 2,
    city: "LA",
    date: "Sep 22, 2026",
    title: "West Coast Throwdown",
    venue: "The Forum • Los Angeles, CA",
    price: "$55",
    status: "FEW LEFT" as const,
    gradient: "from-accent-yellow to-accent-orange",
  },
  {
    id: 3,
    city: "CHI",
    date: "Oct 5, 2026",
    title: "Windy City Music Battle",
    venue: "United Center • Chicago, IL",
    price: "$40",
    status: "ON SALE" as const,
    gradient: "from-maroon-900 to-maroon-950",
  },
];

const TESTIMONIALS = [
  {
    name: "Jessica Davis",
    role: "NYC Show Attendee",
    initials: "JD",
    bg: "bg-maroon-900",
    text: "Best night out I've had in years! The energy is insane and the trivia rounds are actually challenging. Already bought tickets for the next show.",
  },
  {
    name: "Marcus Kim",
    role: "Chicago Winner",
    initials: "MK",
    bg: "bg-accent-yellow",
    text: "We won $2,500 at the Chicago show! The production quality is top-notch and the host keeps everyone laughing. Highly recommend for music lovers.",
  },
  {
    name: "Aisha Rahman",
    role: "Regular Player",
    initials: "AR",
    bg: "bg-maroon-900",
    text: "I've been to 5 shows and each one is different. The surprise rounds keep you on your toes. Great for date nights or group outings!",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Get Your Ticket",
    desc: "Reserve your spot at one of our live shows. Early birds get the best seats and exclusive merch.",
    rotate: "rotate-3",
  },
  {
    num: "02",
    title: "Form Your Team",
    desc: "Grab 3 friends and create your squad. The more diverse your music knowledge, the better your chances.",
    rotate: "-rotate-2",
  },
  {
    num: "03",
    title: "Win Big",
    desc: "Compete in rounds of music trivia, karaoke battles, and surprise challenges. Cash prizes await!",
    rotate: "rotate-2",
  },
];

// ─── Components ──────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "SHOWS", href: "#shows" },
    { label: "SCHEDULE", href: "#schedule" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
      <a href="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-accent-yellow rounded-lg flex items-center justify-center">
          <MusicNoteIcon className="w-6 h-6 text-maroon-900" />
        </div>
        <span className="text-2xl font-black tracking-tight">MusicMayhem</span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="hover:text-accent-yellow transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="btn-solid">GET TICKETS</button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-maroon-900/95 backdrop-blur-lg md:hidden border-t border-white/10">
          <div className="flex flex-col p-6 gap-4 text-center font-semibold">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-accent-yellow"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button className="btn-solid mt-2">GET TICKETS</button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-maroon-900 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent-yellow blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent-yellow blur-3xl" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse" />
            LIVE MUSIC GAME SHOWS
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Where Music
            <br />
            <span className="text-accent-yellow">Meets Mayhem</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
            The ultimate music game show experience. Test your knowledge,
            compete with friends, and win epic prizes at our live events across
            the nation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#shows" className="btn-primary">
              Upcoming Events →
            </a>
            <button className="btn-secondary">Watch Trailer</button>
          </div>
          <div className="flex items-center gap-6 mt-10 text-sm text-white/60">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent-yellow/30 border-2 border-maroon-900" />
              <div className="w-10 h-10 rounded-full bg-white/30 border-2 border-maroon-900" />
              <div className="w-10 h-10 rounded-full bg-accent-yellow/50 border-2 border-maroon-900" />
            </div>
            <span>
              Join <strong className="text-white">10,000+</strong> music lovers
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent-yellow/20 to-maroon-900 border border-white/10 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-accent-yellow rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform duration-500">
                <MusicNoteIcon className="w-16 h-16 text-maroon-900" />
              </div>
              <div className="text-6xl font-black text-accent-yellow">2026</div>
              <div className="text-xl font-bold text-white/80 mt-2">
                SEASON KICKOFF
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-accent-yellow text-maroon-900 px-4 py-2 rounded-xl font-bold text-sm rotate-12 shadow-lg animate-float">
            LIVE NOW
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white text-maroon-900 px-4 py-2 rounded-xl font-bold text-sm -rotate-6 shadow-lg">
            NEW SEASON
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "50+", label: "Cities Hosted" },
    { value: "10K+", label: "Players" },
    { value: "$100K", label: "Prizes Given" },
    { value: "4.9★", label: "Rating" },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-black text-maroon-900">{s.value}</div>
            <div className="text-sm font-semibold text-gray-500 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventCard({ event }: { event: (typeof EVENTS)[0] }) {
  const statusColors = {
    "SOLD OUT": "bg-accent-yellow text-maroon-900",
    "FEW LEFT": "bg-maroon-900 text-white",
    "ON SALE": "bg-accent-green text-white",
  };

  return (
    <div className="group bg-gray-50 rounded-3xl overflow-hidden card-hover">
      <div
        className={`h-48 bg-gradient-to-br ${event.gradient} relative overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-6xl font-black ${event.status === "FEW LEFT" ? "text-maroon-900/20" : "text-white/10"}`}
          >
            {event.city}
          </span>
        </div>
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${statusColors[event.status]}`}
        >
          {event.status}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <CalendarIcon className="w-4 h-4" />
          {event.date}
        </div>
        <h3 className="text-xl font-bold text-maroon-900 mb-2">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{event.venue}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-maroon-900">
            {event.price}
          </span>
          <button className="bg-maroon-900 text-white px-4 py-2 rounded-full text-sm font-bold group-hover:bg-accent-yellow group-hover:text-maroon-900 transition-colors">
            {event.status === "SOLD OUT" ? "Join Waitlist" : "Get Tickets"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ShowsSection() {
  return (
    <section id="shows" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="section-label">Upcoming Events</div>
            <h2 className="section-title">Shows Near You</h2>
          </div>
          <a
            href="#schedule"
            className="text-maroon-900 font-bold hover:text-accent-yellow transition-colors mt-4 md:mt-0 flex items-center gap-2"
          >
            View All Events →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-24 bg-maroon-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-label">How It Works</div>
          <h2 className="text-4xl md:text-5xl font-black">
            Three Steps to Mayhem
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {STEPS.map((step) => (
            <div key={step.num} className="text-center">
              <div
                className={`w-20 h-20 bg-accent-yellow rounded-2xl flex items-center justify-center mx-auto mb-6 ${step.rotate}`}
              >
                <span className="text-3xl font-black text-maroon-900">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">What Players Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent-yellow" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${t.bg} rounded-full flex items-center justify-center ${t.bg === "bg-accent-yellow" ? "text-maroon-900" : "text-white"} font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-maroon-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-24 bg-maroon-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent-yellow blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent-yellow blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Don't Miss the Beat
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Get early access to tickets, exclusive behind-the-scenes content, and
          surprise giveaways delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="bg-accent-yellow/20 border border-accent-yellow/30 rounded-2xl p-6 max-w-xl mx-auto">
            <p className="text-accent-yellow font-bold text-lg">
              🎉 You're on the list! Check your inbox soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20"
            />
            <button
              type="submit"
              className="bg-accent-yellow text-maroon-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-sm text-white/50 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-maroon-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-yellow rounded-lg flex items-center justify-center">
                <MusicNoteIcon className="w-6 h-6 text-maroon-900" />
              </div>
              <span className="text-2xl font-black">MusicMayhem</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              The ultimate live music game show experience. Bringing people
              together through the power of music and competition.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent-yellow">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {["Upcoming Shows", "How to Play", "Prizes & Rules", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent-yellow">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {["About Us", "Careers", "Press Kit", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent-yellow">Follow Us</h4>
            <div className="flex gap-4">
              {[TwitterIcon, InstagramIcon, YouTubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-yellow hover:text-maroon-900 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 MusicMayhem. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Hero />
      <StatsBar />
      <ShowsSection />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-lg border border-gold-500/40 bg-gold-500/5 p-6 text-center">
        <p className="font-display text-lg font-semibold text-paper">Message sent</p>
        <p className="mt-2 text-sm text-paper/65">
          A Music Mayhem Trivia Jockey will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-paper/75">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1.5 w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-paper outline-none placeholder:text-paper/35 focus:border-gold-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-paper/75">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-paper outline-none placeholder:text-paper/35 focus:border-gold-500"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="venue" className="text-sm font-medium text-paper/75">
          Venue or organization
        </label>
        <input
          id="venue"
          name="venue"
          className="mt-1.5 w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-paper outline-none placeholder:text-paper/35 focus:border-gold-500"
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-paper/75">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-paper outline-none placeholder:text-paper/35 focus:border-gold-500"
          placeholder="Tell us about your event, date, and crowd size"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02] hover:bg-gold-400"
      >
        Send message
      </button>
    </form>
  );
}

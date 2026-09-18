"use client";

import { motion, type Variants } from "framer-motion";
import { Headphones, Lightbulb, Trophy } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import PolyBackdrop from "./PolyBackdrop";
import { howItWorks } from "@/lib/data";

const icons = [Headphones, Lightbulb, Trophy];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stage-gradient">
      <PolyBackdrop className="absolute inset-0 h-full w-full opacity-90" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-wine-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-28">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <PhoneMockup />
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] text-paper text-balance sm:text-5xl lg:text-6xl"
          >
            Think you know music?
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 font-display text-xl font-semibold tracking-tight text-gold-400 sm:text-2xl"
          >
            Trivia that goes to 11.
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-lg text-base leading-relaxed text-paper/75">
            Music Mayhem is the live, interactive music game show that&apos;s been packing
            bars, campuses, and private events since 1999 — played entirely on your own
            phone.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://gomayhem.com"
              className="rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] hover:bg-gold-400"
            >
              Play at gomayhem.com
            </a>
            <a
              href="/private-events"
              className="rounded-md border border-paper/25 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              Book the Mayhem
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {howItWorks.map((step, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={step.title}
                  className="rounded-lg border border-gold-500/40 px-3 py-4 text-center sm:px-4"
                >
                  <Icon className="mx-auto h-6 w-6 text-gold-400 sm:h-7 sm:w-7" strokeWidth={1.5} />
                  <p className="mt-2 font-display text-xs font-bold tracking-wide text-paper sm:text-sm">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

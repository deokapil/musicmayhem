export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[240px] sm:w-[270px]">
      <div className="rounded-[2.2rem] border-[6px] border-ink-950 bg-ink-950 shadow-2xl shadow-black/50 ring-1 ring-white/10">
        <div className="overflow-hidden rounded-[1.6rem] bg-wine-700">
          <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-medium text-paper/70">
            <span>9:41</span>
            <span>gomayhem.com</span>
            <span>100%</span>
          </div>

          <div className="mt-3 flex items-center justify-between px-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gold-500 text-xs font-black text-ink-950">
              M
            </div>
            <div className="rounded-full border border-gold-500/60 px-2 py-0.5 text-[10px] font-semibold text-gold-400">
              Round 3
            </div>
          </div>

          <div className="mt-4 flex justify-between px-4 text-[10px] text-paper/70">
            <span>SONG SCORE: 40</span>
            <span>TOTAL: 260</span>
          </div>

          <div className="mt-5 px-4">
            <p className="text-[10px] uppercase tracking-wide text-paper/50">
              Enter song title or artist
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-paper">
              the beastle b...
            </p>
          </div>

          <div className="mx-4 mt-4 rounded-md bg-gold-500 py-2 text-center text-[11px] font-bold text-ink-950">
            GUESS
          </div>

          <div className="mt-4 flex justify-between px-4 text-[9px] text-paper/50">
            <span>ARTIST SCORE: 20</span>
            <span>TITLE SCORE: 20</span>
          </div>

          <div className="mt-5 grid grid-cols-10 gap-[3px] bg-ink-950/40 px-2 py-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="h-4 rounded-[2px] bg-white/10" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -right-3 top-16 h-16 w-1 rounded-full bg-ink-950" />
    </div>
  );
}

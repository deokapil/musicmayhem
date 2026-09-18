export default function PolyBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g opacity="0.5" stroke="rgba(242,200,104,0.14)" strokeWidth="1.5">
        <path d="M900 0L1200 120V0Z" fill="rgba(242,200,104,0.05)" />
        <path d="M1050 40L1200 260L980 220Z" fill="rgba(255,255,255,0.03)" />
        <path d="M780 120L980 220L860 380L680 300Z" fill="rgba(44,33,120,0.35)" />
        <path d="M980 220L1200 260L1120 460L860 380Z" fill="rgba(27,20,84,0.4)" />
        <path d="M1120 460L1200 260L1200 560Z" fill="rgba(15,11,48,0.5)" />
        <path d="M680 300L860 380L760 560L560 480Z" fill="rgba(111,34,71,0.3)" />
        <path d="M860 380L1120 460L980 640L760 560Z" fill="rgba(27,20,84,0.25)" />
        <path d="M560 480L760 560L640 760L420 680Z" fill="rgba(82,26,55,0.35)" />
        <path d="M760 560L980 640L860 800L640 760Z" fill="rgba(44,33,120,0.2)" />
        <path d="M0 620L220 540L340 720L120 800L0 760Z" fill="rgba(82,26,55,0.3)" />
        <path d="M220 540L420 480L560 620L340 720Z" fill="rgba(15,11,48,0.3)" />

        <path d="M900 0L1200 120V0Z" />
        <path d="M1050 40L1200 260L980 220Z" />
        <path d="M780 120L980 220L860 380L680 300Z" />
        <path d="M980 220L1200 260L1120 460L860 380Z" />
        <path d="M1120 460L1200 260L1200 560Z" />
        <path d="M680 300L860 380L760 560L560 480Z" />
        <path d="M860 380L1120 460L980 640L760 560Z" />
        <path d="M560 480L760 560L640 760L420 680Z" />
        <path d="M760 560L980 640L860 800L640 760Z" />
        <path d="M0 620L220 540L340 720L120 800L0 760Z" />
        <path d="M220 540L420 480L560 620L340 720Z" />
      </g>
    </svg>
  );
}

export default function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="mm-gold" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f2c868" />
          <stop offset="55%" stopColor="#e3a73e" />
          <stop offset="100%" stopColor="#c88a26" />
        </linearGradient>
      </defs>
      <polygon points="32,2 62,20 62,44 32,62 2,44 2,20" fill="url(#mm-gold)" />
      <polygon points="32,2 62,20 32,32 2,20" fill="#f6d585" opacity="0.55" />
      <polygon points="2,20 32,32 32,62 2,44" fill="#000000" opacity="0.12" />
      <path
        d="M14 42V22h5.2l6.4 10.4L32 22h5.2v20h-5V30.6l-5.4 8.8h-1.6l-5.4-8.8V42Z"
        fill="#1b1454"
      />
    </svg>
  );
}

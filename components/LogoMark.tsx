import Image from "next/image";

export default function LogoMark({
  className = "h-9 w-9",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/MM_logo.png"
      alt="Music Mayhem logo"
      width={586}
      height={482}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

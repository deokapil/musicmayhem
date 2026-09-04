import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MusicMayhem — Live Music Game Shows",
  description:
    "The ultimate live music game show experience. Test your knowledge, compete with friends, and win epic prizes.",
  keywords: [
    "music game show",
    "live trivia",
    "music trivia",
    "interactive games",
    "events",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

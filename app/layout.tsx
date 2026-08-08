import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClipDays | Sports Memory Infrastructure",
  description:
    "ClipDays helps sports venues capture, deliver and monetize personal guest memories through one flexible platform.",
  keywords: [
    "sports media",
    "automated sports photography",
    "ski resort technology",
    "guest experience",
    "sports memories",
  ],
  openGraph: {
    title: "ClipDays | Own Your Moment",
    description:
      "Turn real sports experiences into personal memories, organic reach and new revenue.",
    images: [{ url: "/assets/hero-ski.webp", width: 1674, height: 940 }],
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

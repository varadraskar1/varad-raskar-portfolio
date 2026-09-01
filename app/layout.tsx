import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varad Raskar — Cybersecurity / Systems / Backend",
  description: "Portfolio of Varad Raskar: exploring systems, building and securing them.",
  metadataBase: new URL("https://varad-raskar.vercel.app"),
  openGraph: { title: "Varad Raskar", description: "Exploring systems. Building & securing them.", type: "website" },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

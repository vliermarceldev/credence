import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Credence.",
  description: "Reputation Management SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      {/* Klassen für globalen Hintergrund und Textfarbe zur Sicherheit auch hier */}
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

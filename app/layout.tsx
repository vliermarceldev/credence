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
      {/* ÄNDERUNG: 'bg-zinc-950' und 'text-zinc-100' wurden entfernt. 
         Die Farben werden nun dynamisch über 'globals.css' (body-Rule) gesteuert.
      */}
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

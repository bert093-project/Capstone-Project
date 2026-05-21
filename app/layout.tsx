import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from '@/app/utils/lenis'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Capstone Project",
  description: "Capstone Project SMT6 (Mobile Computing)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <ReactLenis options={{ duration: 1.7 }} root>
        <body>{children}</body>
      </ReactLenis>
    </html>
  );
}

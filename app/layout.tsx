import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from '@/app/utils/lenis'

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
    <html lang="en">
      <ReactLenis options={{ duration: 1.7 }} root>
        <body>{children}</body>
      </ReactLenis>
    </html>
  );
}

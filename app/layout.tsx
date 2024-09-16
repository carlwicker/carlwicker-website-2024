"use client";

import { Inter } from "next/font/google";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import PageTransitionEffect from "@/components/PageTransitionEfffect";
import { usePathname } from "next/navigation";
import TheCube from "@/components/thecube/TheCube";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${inter.className} relative w-full h-full overflow-hidden`}
      >
        <div className="fixed top-0 left-0 w-full h-full z-[-1]">
          <TheCube />
        </div>
        <div className="relative z-10 w-full h-full overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

"use client";

import { Inter } from "next/font/google";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import PageTransitionEffect from "@/components/PageTransitionEfffect";
import { usePathname } from "next/navigation";
import ReactLenis from "lenis/react";

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
    <html style={{ overflow: "hidden" }}>
      <body>
        <ReactLenis root>
          <main className={inter.className}>
            <PageTransitionEffect>{children}</PageTransitionEffect>
          </main>
        </ReactLenis>
      </body>
    </html>
  );
}

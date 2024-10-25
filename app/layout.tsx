import { Inter } from "next/font/google";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
// import PageTransitionEffect from "@/components/PageTransitionEfffect";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carl Wicker | Web Developer",
  description:
    "I create sleek, responsive, and scalable applications that push the boundaries of modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative w-full h-full ${inter.className}`}
        suppressHydrationWarning
      >
        {/* <TopNav /> */}
        {/* <PageTransitionEffect> */}
        <div className="relative z-10 w-full h-full overflow-auto">
          <div className="container mx-auto px-5 py-10 min-h-screen">
            {children}
          </div>
          <div className="z-0">
            <Footer />
          </div>
        </div>
        {/* </PageTransitionEffect> */}
        {/* <div className="w-full">
          <HorizontalScroll />
        </div> */}
      </body>
    </html>
  );
}

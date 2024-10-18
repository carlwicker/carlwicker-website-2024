"use client";

import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import SplitText from "@/components/split-text/SplitText";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import ClipText from "@/components/clip-text/ClipText";
import Iracing from "@/components/iracing/Iracing";
import InterstellarPoster from "@/components/interstellar-poster/InterstellarPoster";
import LightBloom from "@/components/light-bloom/LightBloom";
import UxUi from "@/components/uxui/UxUi";
import LineSplit from "@/components/line-splitter/LineSplit";
import ParticleCube from "@/components/particle-cube/ParticleCube";
import PerceptionTypography from "@/components/perception-typography/PerceptionTypography";

export default function Home() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* <Hero /> */}{" "}
      <div className="fixed top-0 left-0 w-full h-full -z-1 no-touch ">
        <ParticleCube />
      </div>
      <PerceptionTypography />
      {/* <div className="container mx-auto flex lg:flex-row flex-col lg:gap-10 gap-40 pb-60 lg:text-[1rem] text-[1.6rem] text-neutral-600">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            necessitatibus architecto iure cupiditate facilis temporibus
            possimus voluptate minima repellendus suscipit, quos aperiam
            accusantium ad vero a quae asperiores quia veritatis.
          </p>
        </div>
        <div>
          <p>
            Ipsa dolorum ratione, non, sint consequuntur explicabo accusantium
            facilis minus expedita praesentium quas quam ad amet quaerat aliquid
            enim atque vel omnis quis et nesciunt. In nisi exercitationem
            molestias facere.
          </p>
        </div>
        <div>
          <p>
            Eveniet ipsa, fugit harum doloremque tenetur molestias voluptates,
            quos fuga deleniti sunt consectetur maiores error dolore praesentium
            commodi officia vitae quas consequatur ad illo. Culpa iusto unde
            nobis veritatis iure?
          </p>
        </div>
      </div> */}
      {/* <SplitText /> */}
    </main>
  );
}

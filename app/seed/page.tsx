"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import { BasketProvider } from "@/context/BasketContext";
import Top from "@/components/seed/Top";
import SeedList from "@/components/seed/SeedList";
import Basket from "@/components/seed/Basket";
import seedData from "@/json/seed.json"; // Import the JSON data
import CustomCheckout from "@/components/seed/CustomCheckoutForm";

export default function Page() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <BasketProvider>
      <Basket />
      <div>
        <CustomCheckout />
      </div>
      <Top storeData={seedData.store} />
      <SeedList seeds={seedData.seeds} />
    </BasketProvider>
  );
}

import { Seed as SeedTypes } from "@/types/types";
import { useBasket } from "@/context/BasketContext";
import Seed from "./Seed";

export default function SeedList({ seeds }: { seeds: any }) {
  const { addToBasket } = useBasket();
  return (
    <>
      {seeds.map((seed: any, index: number) => (
        <div key={index}>
          <Seed seed={seed} />
        </div>
      ))}
    </>
  );
}

// Seed.tsx
import { useBasket } from "@/context/BasketContext";
import { Seed } from "@/types/types";

export default function SeedItem({ seed }: { seed: Seed }) {
  const { addToBasket } = useBasket();

  return (
    <div className="bg-[#556B2F] w-full min-h-screen py-20 px-5 text-lg uppercase">
      <div className="text-9xl font-bold uppercase w-1/2">{seed.name}</div>
      <div className="font-bold">{seed.type}</div>
      <div>
        THC: <span className="font-bold"> {seed.thc_content}</span>
      </div>
      <div>
        CBD: <span className="font-bold"> {seed.cbd_content}</span>
      </div>
      <div className="">
        Effects:{" "}
        {seed.effects?.map((effect: any, effectIndex: number) => (
          <span key={effectIndex}>
            <span className="font-bold">{effect}</span>
            {effectIndex !== seed.effects.length - 1 && ", "}
          </span>
        ))}
      </div>
      <div className="flex">
        Flavour:{" "}
        {seed.flavor_profile?.map((flavor: any, flavorIndex: number) => (
          <div key={flavorIndex}>
            <span className="font-bold">{flavor}</span>
            {flavorIndex !== seed.flavor_profile.length - 1 && ", "}
          </div>
        ))}
      </div>
      <div>
        Price per seed: <span className="font-bold">{seed.price_per_seed}</span>
      </div>
      <div>
        Availability:{" "}
        <span className="font-bold">
          {seed.availability ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <div>
        <button
          className="bg-white text-black p-5 uppercase font-bold mt-10"
          onClick={() => addToBasket(seed)}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}

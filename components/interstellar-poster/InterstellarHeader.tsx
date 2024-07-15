import FiveColorSquares from "./FiveColorSquares";
import Image from "next/image";

export default function InterstellarHeader() {
  return (
    <div className="flex justify-between w-full items-center">
      <FiveColorSquares />
      <Image
        src="/jpg/mpa.jpg"
        width={0}
        height={0}
        sizes="100vw"
        alt="Movie Association"
        className="mix-blend-multiply w-auto h-[30px]"
      />
    </div>
  );
}

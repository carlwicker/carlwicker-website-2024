import Image from "next/image";

export default function InterstellarImage() {
  return (
    <div className="container mx-auto relative w-full">
      <Image
        src="/webp/interstellar.webp"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto px-5 py-20 mix-blend-multiply"
        alt="Interstellar"
      />
    </div>
  );
}

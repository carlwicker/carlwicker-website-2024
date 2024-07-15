import Credits from "./Credits";
import FiveColorSquares from "./FiveColorSquares";
import InterstellarHeader from "./InterstellarHeader";
import InterstellarImage from "./InterstellarImage";

export default function InterstellarPoster() {
  return (
    <div
      style={{
        backgroundColor: "rgb(234, 236, 222)",
        color: "rgb(58, 54, 53)",
      }}
      className="flex flex-col"
    >
      <div className="container mx-auto pt-10 px-5">
        <InterstellarHeader />
        <Credits />
        <h1
          className="md:text-[15vw] tracking-[-0.1em] leading-[0.8em] md:py-20 text-[20vw] py-5"
          style={{ fontWeight: "600" }}
        >
          Interstellar
        </h1>
      </div>
      <InterstellarImage />
    </div>
  );
}

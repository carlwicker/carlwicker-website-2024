import Credits from "./Credits";
import FiveColorSquares from "./FiveColorSquares";

export default function MovieTitle() {
  return (
    <div
      style={{
        color: "rgb(58, 54, 53)",
      }}
      className="h-screen"
    >
      <div className="container mx-auto pt-10 px-5">
        <FiveColorSquares />
        <Credits />
        <h1
          className="text-[550px] tracking-[-0.1em] leading-[0.8em] mt-10"
          style={{ fontWeight: "600" }}
        >
          Interstellar
        </h1>
      </div>
    </div>
  );
}

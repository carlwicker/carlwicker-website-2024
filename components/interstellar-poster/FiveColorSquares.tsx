import Link from "next/link";

export default function FiveColorSquares() {
  return (
    <Link className="flex" href="/">
      <div
        className="h-[30px] w-[30px]"
        style={{ backgroundColor: "rgb(58, 54, 53)" }}
      ></div>
      <div
        className="h-[30px] w-[30px]"
        style={{ backgroundColor: "rgb(44, 142, 143)" }}
      ></div>
      <div
        className="h-[30px] w-[30px]"
        style={{ backgroundColor: "rgb(106, 134, 59)" }}
      ></div>
      <div
        className="h-[30px] w-[30px]"
        style={{ backgroundColor: "rgb(209, 183, 60)" }}
      ></div>
      <div
        className="h-[30px] w-[30px]"
        style={{ backgroundColor: "rgb(197, 89, 40)" }}
      ></div>
    </Link>
  );
}

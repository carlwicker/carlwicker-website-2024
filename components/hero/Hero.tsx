import HeroLinks from "./HeroLinks";

export default function Hero() {
  return (
    <div className="container mx-auto flex min-h-screen h-fit flex-col justify-center p-5">
      <div className="text-[8vw] py-10 font-semibold w-full flex flex-col container tracking-tighter leading-none -mt-[100px] -z-10">
        <div className=" text-white pt-600 lg:pt-40">Web Developer</div>
      </div>

      <HeroLinks />
    </div>
  );
}

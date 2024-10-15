import HeroLinks from "./HeroLinks";
import ClipText from "../clip-text/ClipText";

export default function Hero() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-center p-5 h-[150vh]">
      <div className="py-10 font-semibold w-full flex flex-col container tracking-tighter leading-none -mt-[100px] -z-10">
        <div className="pt-600 lg:pt-40" data-scroll data-scroll-speed="0.2">
          <ClipText color={"white"} fontSize={80}>
            Web Developer
          </ClipText>
        </div>
      </div>

      <HeroLinks />
    </div>
  );
}

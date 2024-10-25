import ClipText from "../clip-text/ClipText";
import LineSplit from "../line-splitter/LineSplit";

export default function PerceptionTypography({ color }: { color: string }) {
  console.log("color", color);
  return (
    <div
      className="container mx-auto flex flex-col py-64 text-[#eee] text-[1.2rem] lg:text-[2rem] gap-32"
      data-scroll
    >
      <div className="flex flex-col">
        {/* <ClipText color="#eee" clamp={[3, 10, 8]}>
          perception
        </ClipText> */}
        <div
          className="xl:w-1/2 tracking-tight leading-relaxed"
          data-scroll
          data-scroll-speed="0.05"
        >
          <LineSplit>
            I'm a Web developer focused on crafting cutting-edge, dynamic user
            experiences with NextJS, React, and TypeScript. I specialize in
            high-performance interfaces, leveraging GSAP, Framer Motion, and
            ThreeJS for immersive animations and interactions. With decades of
            experience in Front End and a strong command of JavaScript, I create
            sleek, responsive, and scalable applications that push the
            boundaries of modern web development.
          </LineSplit>
        </div>
      </div>

      <div className="flex flex-col gap-32">
        <div
          className="flex gap-2 flex-col"
          data-scroll
          data-scroll-speed="0.1"
        >
          <ClipText color="#eee" clamp={[2, 12, 8]}>
            environmental
          </ClipText>
          <div style={{ color: color }}>
            <ClipText clamp={[2, 12, 8]}>interaction </ClipText>
          </div>
          <ClipText color="#eee" clamp={[2, 12, 8]}>
            transformation
          </ClipText>
        </div>
        <div className="lg:text-[3rem] text-[1.4rem]">
          <div
            className="tracking-tight leading-relaxed"
            data-scroll
            data-scroll-speed="0.05"
          >
            <LineSplit>
              Enhancing user experience through structured layouts and elevating
              brand identity with powerful typography, my design approach
              balances form and function. Each website I create is built to not
              only look great but also provide an effortless and engaging
              experience for the user. By focusing on detail and clarity, I help
              clients make a lasting impression through every digital
              touchpoint.
            </LineSplit>
          </div>
        </div>
      </div>
    </div>
  );
}

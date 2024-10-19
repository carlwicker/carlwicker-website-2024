import ClipText from "../clip-text/ClipText";
import LineSplit from "../line-splitter/LineSplit";

export default function PerceptionTypography() {
  return (
    <div
      className="container mx-auto flex flex-col py-64 text-[#eee] gap-32 text-[1.2rem] lg:text-[2rem]"
      data-scroll
    >
      <div className="flex flex-col gap-32">
        {/* <ClipText color="#eee" clamp={[3, 10, 8]}>
          perception
        </ClipText> */}
        <div className="xl:w-1/2" data-scroll data-scroll-speed="0.05">
          <LineSplit>
            Web developer focused on crafting cutting-edge, dynamic user
            experiences with NextJS, React, and TypeScript. I specialize in
            high-performance interfaces, leveraging GSAP, Framer Motion, and
            ThreeJS for immersive animations and interactions. With decades of
            experience with CSS and a strong command of JavaScript, I create
            sleek, responsive, and scalable applications that push the
            boundaries of modern web development.
          </LineSplit>
        </div>
      </div>

      <div className="flex flex-col gap-32 ">
        {/* <ClipText color="#eee" clamp={[3, 10, 8]}>
          precision
        </ClipText> */}
        <div className="lg:w-2/3" data-scroll data-scroll-speed="-0.2">
          {/* <LineSplit>
            Using advanced CSS techniques, I transform static designs into
            dynamic, responsive websites that work flawlessly across devices.
            From complex animations to subtle interactions, I pay close
            attention to every element to ensure smooth performance and
            intuitive navigation. My expertise lies in creating clean, efficient
            code that brings creative concepts to life in the most optimized way
            possible.
          </LineSplit> */}
        </div>
      </div>

      <div className="flex flex-col gap-32 ">
        <div
          className="flex gap-2 flex-col"
          data-scroll
          data-scroll-speed="0.1"
        >
          <ClipText color="#eee" clamp={[2, 12, 8]}>
            environmental
          </ClipText>
          <div className="text-red-800">
            <ClipText clamp={[2, 14, 8]}>interaction </ClipText>
          </div>
          <ClipText color="#eee" clamp={[2, 12, 8]}>
            transformation
          </ClipText>
        </div>
        <div className="lg:text-[3rem] text-[1.4rem]">
          <div className="" data-scroll data-scroll-speed="0.05">
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

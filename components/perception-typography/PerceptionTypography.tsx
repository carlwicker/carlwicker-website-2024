import ClipText from "../clip-text/ClipText";
import LineSplit from "../line-splitter/LineSplit";

export default function PerceptionTypography() {
  return (
    <div className="container mx-auto flex flex-col py-64 text-[#666] gap-32 text-[1.2rem] lg:text-[2rem]">
      <div className="flex flex-col gap-32">
        <ClipText color="#666" clamp={[3, 10, 8]}>
          perception
        </ClipText>
        <div className="lg:w-1/2" data-scroll data-scroll-speed="0.1">
          <LineSplit>
            With a focus on typography and structured layouts, I create visually
            clean websites that stand out. My CSS skills help bring precision
            and functionality to each project, delivering elegant, responsive
            designs.
          </LineSplit>
        </div>
      </div>

      <div className="flex flex-col gap-32 ">
        <ClipText color="red" clamp={[3, 10, 8]}>
          precision
        </ClipText>
        <div className="lg:w-1/2" data-scroll data-scroll-speed="0.1">
          <LineSplit>
            Specializing in Swiss design principles, I create harmonious,
            grid-based layouts. Through careful attention to typography, CSS,
            and user experience, I deliver web designs that are as functional as
            they are visually stunning.
          </LineSplit>
        </div>
      </div>

      <div className="flex flex-col gap-32 ">
        <div className="flex gap-2 flex-col">
          <ClipText color="#666" clamp={[3, 20, 4]}>
            perception
          </ClipText>
          <ClipText color="red" clamp={[2, 20, 16]}>
            reaction
          </ClipText>
          <ClipText color="#666" clamp={[4, 30, 4]}>
            perception
          </ClipText>
        </div>
        <div
          className="lg:text-[3rem] text-[1.4rem]"
          data-scroll
          data-scroll-speed="0.1"
        >
          <LineSplit>
            I specialize in building precise, grid-based web layouts that
            emphasize clean typography and user experience. Using CSS, I develop
            sites that are both aesthetically pleasing and highly functional
            across all platforms.
          </LineSplit>
        </div>
      </div>
    </div>
  );
}

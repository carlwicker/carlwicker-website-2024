import FooterStart from "./FooterStart";
import FooterEnd from "./FooterEnd";

export default function Footer() {
  return (
    <div
      className="relative lg:h-[400px] h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 lg:h-[400px] h-[800px] w-full">
        <div className="container flex lg:flex-row flex-col gap-20 px-5 py-40 mx-auto text-normal">
          <div className="lg:w-1/2">
            <FooterStart />
          </div>
          <div className="lg:w-1/2">
            <FooterEnd />
          </div>
        </div>
      </div>
    </div>
  );
}

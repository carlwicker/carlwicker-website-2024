import FooterStart from "./FooterStart";
import FooterEnd from "./FooterEnd";

export default function Footer() {
  return (
    <footer className="container mx-auto flex items-center justify-center text-white z-50 py-40">
      <div className="container flex flex-col lg:flex-row w-full lg:gap-0 gap-16 px-5">
        <div className="lg:w-3/12">
          <FooterStart />
        </div>
        <div className="lg:w-3/12">
          <FooterEnd />
        </div>
      </div>
    </footer>
  );
}

import FooterStart from "./FooterStart";
import FooterEnd from "./FooterEnd";

export default function Footer() {
  return (
    <footer className="container mx-auto flex items-center justify-center text-white ">
      <div className="container flex flex-col lg:flex-row w-full lg:gap-32 gap-16 px-5 py-24">
        <FooterStart />

        <FooterEnd />
      </div>
    </footer>
  );
}

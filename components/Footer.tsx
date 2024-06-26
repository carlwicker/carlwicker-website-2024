import FooterStart from "./FooterStart";
import FooterEnd from "./FooterEnd";

export default function Footer() {
  return (
    <footer className="flex min-h-screen items-center justify-center  text-white lg:text-3xl text-xl uppercase  p-5">
      <div className="container flex flex-col lg:flex-row gap-5">
        <div className="w-full">
          <FooterStart />
        </div>

        <FooterEnd />
      </div>
    </footer>
  );
}

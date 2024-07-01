import FooterStart from "./FooterStart";
import FooterEnd from "./FooterEnd";

export default function Footer() {
  return (
    <footer className="flex min-h-screen items-center justify-center  text-white lg:text-3xl text-xl uppercase">
      <div className="container flex flex-col lg:flex-row  w-full gap-10 justify-between">
        <FooterStart />

        <FooterEnd />
      </div>
    </footer>
  );
}

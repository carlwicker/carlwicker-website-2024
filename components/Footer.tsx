import FooterStart from "./FooterStart";
import FooterEnd from "./FooterEnd";

export default function Footer() {
  return (
    <footer className="container mx-auto flex min-h-screen items-center justify-center p-5 text-white lg:text-3xl text-xl uppercase font-semibold">
      <div className="container flex flex-col lg:flex-row  w-full gap-10 justify-between">
        <FooterStart />

        <FooterEnd />
      </div>
    </footer>
  );
}

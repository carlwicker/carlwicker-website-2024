import FooterStart from "./FooterStart";
import FooterEnd from "./FooterEnd";

export default function Footer() {
  return (
    <footer className="flex min-h-screen items-center justify-center bg-black text-white text-3xl uppercase">
      <div className="container flex">
        <div className="w-full">
          <FooterStart />
        </div>

        <FooterEnd />
      </div>
    </footer>
  );
}

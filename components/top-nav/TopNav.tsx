import Link from "next/link";

export default function TopNav() {
  return (
    <div className="flex gap-5 sticky top-0 z-50  mx-auto p-5 bg-neutral-900 text-neutral-300">
      <div className="flex container gap-10 mx-auto px-5">
        <Link href="/">
          <div>home</div>
        </Link>
        <Link href="/perception">
          <div>perception</div>
        </Link>
        <Link href="/uxui">
          <div>uxui</div>
        </Link>
        <Link href="/interstellar">
          <div>interstellar</div>
        </Link>
      </div>
    </div>
  );
}

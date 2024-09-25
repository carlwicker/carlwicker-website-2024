export default function Swiss2() {
  return (
    <div className="flex bg-red-700 w-full h-screen px-5 py-40 text-neutral-900 font-semibold gap-10">
      <div className="w-1/2 place-self-end hidden lg:block">
        <div className="flex text-base lg:text-[2vw] tracking-tight leading-[2vw] justify-end text-right">
          Musikalische Leitung:
          <br />
          Inszenierung:
          <br />
          B&uuml;dnenbild/Kost&uuml;me:
          <br />
          Chôre:
        </div>
      </div>
      <div className="flex flex-col gap-10 w-1/2 place-self-end">
        <div className="tracking-tighter text-[8vw] leading-[8vw]">
          Palestrina
        </div>
        <div className="text-base lg:text-[2vw] tracking-tight lg:leading-[2vw] leading-tight">
          Musikalische Legende von Hans Pfitzner
        </div>
        <div className="text-base lg:text-[2vw] tracking-tight lg:leading-[2vw] leading-tight">
          Erstauff&uuml;hrung
          <br />
          Samstag, 7, September, 19.00 Uhr
        </div>
        <div className="text-base lg:text-[2vw] tracking-tight lg:leading-[2vw] leading-tight">
          Alberto Erede
          <br />
          Herbert Graf
          <br />
          Max R&uuml;thlisberger
          <br />
          Hans Erismann
        </div>
      </div>
    </div>
  );
}

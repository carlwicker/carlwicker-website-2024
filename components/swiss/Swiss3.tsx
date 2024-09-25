export default function Swiss3() {
  return (
    <div className="flex bg-red-600 w-full h-screen px-5 py-40 text-neutral-900 font-semibold gap-10 ">
      <div className="w-1/2 place-self-end hidden  lg:block">
        <div className="flex text-[2vw] tracking-tight leading-[2vw] justify-end text-right">
          Musikalische Leitung:
          <br />
          Inszenierung:
          <br />
          B&uuml;dnenbild/Kost&uuml;me:
          <br />
          Chôre:
        </div>
      </div>
      <div className="flex flex-col gap-10 text-[2vw] tracking-tight leading-[2vw] place-self-end w-1/2">
        <div className="tracking-tighter text-[8vw] leading-[8vw]">
          Wildsch&uuml;tz
        </div>
        <div>Komische Oper von Albert Lortzing</div>
        <div>
          Neuinszenierung
          <br />
          Samstag, 14, September, 20.00 Uhr
        </div>
        <div>
          Matthias Aeschbacher
          <br />
          Martin Markun
          <br />
          Monika von Zallinger
          <br />
          Hans Erismann
        </div>
      </div>
    </div>
  );
}

export default function Swiss3() {
  return (
    <div className="flex bg-red-600 w-full h-screen px-5 py-40 text-neutral-900 font-semibold gap-10 ">
      <div className="w-1/2 place-self-end hidden lg:flex flex-col gap-10 text-[2vw] tracking-tight leading-[2vw] justify-end text-right">
        <div className="tracking-tighter text-[8vw] leading-[8vw] self-end sm:invisible lg:visible">
          Der
        </div>
        <div className="invisible">Invisible Placeholder</div>
        <div className="invisible">
          Invisible Placeholder
          <br />
          Invisible Placeholder
        </div>
        <div className="">
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
        <div className="tracking-tighter text-[8vw] leading-[8vw] before:content-['Der\00a0'] lg:before:content-[``]">
          Wildsch&uuml;tz
        </div>
        <div className="text-base lg:text-[2vw] tracking-tight lg:leading-[2vw] leading-tight">
          Komische Oper von Albert Lortzing
        </div>
        <div className="text-base lg:text-[2vw] tracking-tight lg:leading-[2vw] leading-tight">
          Neuinszenierung
          <br />
          Samstag, 14, September, 20.00 Uhr
        </div>
        <div className="text-base lg:text-[2vw] tracking-tight lg:leading-[2vw] leading-tight">
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

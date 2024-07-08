export default function Hero() {
  return (
    <div
      data-scroll
      data-scroll-speed="2"
      className="container mx-auto flex min-h-screen flex-col justify-center gap-4 "
    >
      <h1 className="xl:text-9xl text-4xl md:text-4xl lg:text-6xl font-extrabold uppercase  tracking-[-0.9px] z-50 break-words">
        Transforming Ideas Into Stunning, High-Performance Websites.
      </h1>
      <span className="flex flex-col gap-2 w-fit">
        <a
          href="mailto:carlwicker@gmail.com"
          className={`lg:text-3xl text-xl bg-black p-2 hover:text-black hover:bg-white`}
        >
          carlwicker@gmail.com
        </a>

        <a
          className={`lg:text-3xl text-xl bg-black p-2 hover:text-black hover:bg-white`}
          href="tel:44 7810 830237"
        >
          44 7810 830237
        </a>
      </span>
    </div>
  );
}

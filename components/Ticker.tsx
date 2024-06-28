const Ticker = () => {
  return (
    <div
      className="overflow-hidden whitespace-nowrap h-[50px]"
      data-scroll-section
    >
      <div
        className="inline-block animate-slide-right font-bold text-[800px] uppercase -z-10"
        data-scroll
        data-scroll-speed="2" // Adjust the scroll speed as needed
      >
        {Array(3)
          .fill(
            "I'm currently seeking a creative UX/UI design/experiment/code role..."
          )
          .join("")}
      </div>
    </div>
  );
};

export default Ticker;

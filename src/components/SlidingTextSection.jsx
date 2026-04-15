import slidingTextIcon from "../assets/images/icon/sliding-text-icon-1.png";

const slidingItems = [
  "AI POWERED",
  "Tracking",
  "Delivery Service",
  "Logistics",
  "Warehouse",
];

const duplicatedItems = [...slidingItems, ...slidingItems];

const SlidingTextSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes sliding-text-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <section className="relative block overflow-hidden px-0 bg-white">
        <div className="relative block">
          <div className="group overflow-hidden">
            <ul className="m-0 flex w-max shrink-0 list-none items-center whitespace-nowrap [animation:sliding-text-marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {duplicatedItems.map((item, index) => (
                <li key={`${item}-${index}`} className="mr-10 block float-left">
                  <h2
                    data-hover={item}
                    className="relative flex items-center gap-[18px] text-[60px] font-bold uppercase leading-none text-transparent transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-0 before:overflow-hidden before:whitespace-nowrap before:text-[#f78134] before:content-[attr(data-hover)] before:transition-all before:duration-500 before:[transition-timing-function:cubic-bezier(0.17,0.67,0.32,0.87)] hover:[-webkit-text-stroke:1px_#f78134] hover:before:w-full sm:gap-6 sm:text-[55px] md:gap-8 md:text-[75px] lg:gap-10 lg:text-[95px]"
                    style={{ WebkitTextStroke: "1px #d9dddb" }}
                  >
                    <span>{item}</span>
                    <img
                      src={slidingTextIcon}
                      alt=""
                      className="relative w-[30px] sm:w-[38px] md:w-auto"
                    />
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlidingTextSection;

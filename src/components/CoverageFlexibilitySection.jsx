import bannerBg from "../assets/images/backgrounds/bannerbg.webp";
import manImage from "../assets/images/resources/Image.webp";

const stats = [
  {
    value: "100K+",
    label: "Orders Delivered",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M8 18h8M6.5 7.5h11M8 4h8l2 4v9.5A2.5 2.5 0 0 1 15.5 20h-7A2.5 2.5 0 0 1 6 17.5V8l2-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 12.5h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: "95K+",
    label: "Delivered on Time",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M9 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6 1.5A2.5 2.5 0 1 0 15 7.5a2.5 2.5 0 0 0 0 5ZM4.5 18a4.5 4.5 0 0 1 9 0M10.5 18a4.5 4.5 0 0 1 9 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: "5K+",
    label: "Satisfied Customers",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="m12 3 7 4v10l-7 4-7-4V7l7-4Zm0 0v18M5 7l7 4 7-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const CoverageFlexibilitySection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="">
        <div
          className="relative overflow-hidden rounded-sm bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(204,24,10,0.68)_0%,rgba(243,115,19,0.4)_42%,rgba(255,155,0,0.16)_100%)]" />
          <div className="absolute left-[10%] top-0 h-full w-[26%] skew-x-[-32deg] bg-[rgba(115,10,10,0.16)] blur-[1px] lg:block hidden" />
          <div className="relative z-10 grid items-end gap-8 px-5 py-8 sm:px-8 md:px-10 md:py-10 lg:grid-cols-[1.08fr_1fr] lg:px-14 lg:py-14">
            <div className="order-2 flex justify-center lg:order-1 lg:-mb-14 lg:-ml-20 lg:justify-start">
              <img
                src={manImage}
                alt="Delivery man"
                className="w-full hidden -mb-[40px] md:block max-w-[460px] object-contain md:max-w-[620px] lg:max-w-[860px]"
              />
            </div>

            <div className="order-1 text-white lg:order-2 lg:pb-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-['Rubik',sans-serif] text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 md:text-[13px]">
                  We Deliver On Time
                </span>
                <span className="h-px w-12 bg-white/70" />
              </div>

              <h2 className="max-w-[640px] font-['Rubik',sans-serif] text-[30px] font-bold leading-[1.1] text-white sm:text-[38px] md:text-[46px] lg:text-[54px]">
                Fast Delivery Across All Over Pakistan
              </h2>

              <p className="max-w-[560px] font-['poppins',sans-serif] text-[14px] text-white/90 md:mt-6 md:text-[16px]">
                Lionex Courier ensures fast and reliable delivery services, helping businesses manage shipments efficiently while providing secure, timely logistics solutions worldwide.
              </p>

              <div className="mt-8 grid gap-10 sm:gap-4 pb-7 sm:grid-cols-3 md:mt-10 md:pb-8">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="relative flex aspect-square items-center justify-center rounded-sm bg-white px-4 py-5 text-center shadow-[0_18px_38px_rgba(93,38,0,0.16)] sm:px-5"
                  >
                    <div>
                      <div className="font-['Rubik',sans-serif] text-[38px] font-bold leading-none text-[#20243a] md:text-[44px]">
                        {item.value}
                      </div>
                      <p className="mx-auto mt-3 max-w-[140px] font-['Rubik',sans-serif] text-[15px] font-medium leading-[1.35] text-[#7a7d88] md:text-[16px]">
                        {item.label}
                      </p>
                    </div>
                    <div className="absolute left-1/2 top-full flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#f78134] text-white shadow-[0_10px_22px_rgba(255,165,0,0.35)]">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageFlexibilitySection;

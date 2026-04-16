import processImage from "../assets/images/shapes/process-one-map.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    icon: "icon-box1",
    title: "Booked",
    desc: "Lionex makes delivery calls ensuring timely, smooth, accurate, and reliable shipments.",
  },
  {
    icon: "icon-truck",
    title: "In Transit",
    desc: "Lionex manages replenishment and picking for accurate, organized, and timely orders.",
  },
  {
    icon: "icon-data-warehouse",
    title: "AI Working",
    desc: "Lionex ensures secure packaging and efficient distribution for fast, reliable deliveries nationwide.",
  },
  {
    icon: "icon-delivery-man",
    title: "Delivered",
    desc: "Lionex manages transportation process efficiently, ensuring safe, timely, and reliable deliveries.",
  },
];

const ProcessSteps = () => {
  return (
    <>
      <style>
        {`
          @keyframes l-r-move {
            0%, 100% { transform: translateX(0) rotate(180deg); }
            50% { transform: translateX(6px) rotate(180deg); }
          }

          @keyframes l-r-move-normal {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-6px); }
          }

          .process-plane-left {
            animation: l-r-move 2s linear infinite;
          }

          .process-plane-right {
            animation: l-r-move-normal 2s linear infinite;
          }
        `}
      </style>

      <section className="relative z-[1] block bg-[#f2f3f5] px-0 py-5 my-5">
        <div
          className="absolute inset-0 z-[-1]  bg-cover bg-center bg-no-repeat opacity-[0.03]"
          style={{ backgroundImage: `url(${processImage})` }}
        ></div>

        <div className="px-[15px]">
          <div className="mb-[52px] text-center">
            <div className="relative mb-3 inline-flex flex-wrap items-center gap-[10px]">
              <span className="block w-10 border border-dashed border-[#f78134]"></span>
              <div className="absolute left-2 top-[-4px] rotate-180">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
                />
              </div>

              <h6 className="relative block  text-[18px] font-semibold uppercase leading-[18px] text-[#f78134]">
                Working Process
              </h6>
              <span className="block w-10 border border-dashed border-[#f78134]"></span>
              <div className="absolute right-2 top-[-4px]">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
                />
              </div>
            </div>
            <h3 className="font-sans text-[25px] font-bold leading-[1.2] text-[#062f3a] md:text-[40px]">
              Lionex delivers ecommerce shipments through <br />
              smart,{" "}
              <span className="text-[#f78134]">Efficient Automation</span>
            </h3>
          </div>

          <div className="relative z-[1] block">
            <ul className="relative mx-[15px] flex flex-wrap items-center">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="group relative mb-[21px] block w-full px-[15px] text-center md:w-1/2 xl:w-1/4"
                >
                  <div className="relative z-[1] mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#f78134]/60 transition-all duration-500 group-hover:bg-[#062f3a]/60">
                    <div className="absolute inset-[5px] -z-[1] rounded-full bg-[#f78134] transition-all duration-500 group-hover:bg-[#062f3a]"></div>
                    <span
                      className={`${step.icon} relative z-[2] inline-block text-[40px] text-white transition-all delay-100 duration-500 group-hover:scale-90`}
                    ></span>
                    <div className="absolute right-[-5px] top-[-15px] z-[2] h-10 w-10">
                      <div className="flex h-full w-full items-center justify-center rounded-full border-[3px] border-white/50 bg-[#062f3a] text-[15px] font-semibold leading-[15px] text-white transition-all delay-100 duration-200 group-hover:border-black/50 group-hover:bg-white group-hover:text-[#f78134]">
                        {`0${index + 1}`}
                      </div>
                    </div>
                  </div>

                  <h4 className="mt-5 font-sans text-[22px] font-bold capitalize leading-8 text-[#062f3a]">
                    {step.title}
                  </h4>
                  <p className="mt-[5px] text-[15px] font-medium text-[#797f7d]">
                    {step.desc}
                  </p>

                  {index < steps.length - 1 ? (
                    <div className="absolute left-1/2 right-[-30%] top-[19%] hidden h-1 bg-[#f78134] transition-all duration-500 group-hover:bg-[#062f3a] xl:block">
                      <div className="absolute right-[-10px] top-[-8px] h-5 w-5 bg-[#f78134] [clip-path:polygon(0_0,0_100%,100%_50%)] transition-all duration-500 group-hover:bg-[#062f3a]"></div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSteps;

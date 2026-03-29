import { Link } from "react-router-dom";
import ThmBtn from "./thmBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
const features = [
  {
    icon: "icon-professional-services",
    title: "Nationwide Service",
    desc: "Lionex delivers shipping solutions with reliable, efficient, and secure logistics services.",
  },
  {
    icon: "icon-delivery-man1",
    title: "Delivered Safely",
    desc: "Lionex ensures every shipment arrives safely with secure, reliable delivery solutions.",
  },
];

const checks = [
  "Make long term business decisions",
  "Transparent career journey and support.",
  "Provide a service we are proud of",
  "Be a responsible member of the community",
];

const inputClasses =
  "h-[50px] w-full rounded-[6px] border border-black/10 bg-white pl-5 pr-10 text-[14px] font-normal text-[#797f7d] outline-none transition-all duration-300 placeholder:text-[#797f7d]";

const WhyChooseSection = () => {
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

          @keyframes wobble-horizontal-hover {
            16.65% { transform: translateX(8px); }
            33.3% { transform: translateX(-6px); }
            49.95% { transform: translateX(4px); }
            66.6% { transform: translateX(-2px); }
            83.25% { transform: translateX(1px); }
            100% { transform: translateX(0); }
          }

          .why-choose-plane-left {
            animation: l-r-move 2s linear infinite;
          }

          .why-choose-plane-right {
            animation: l-r-move-normal 2s linear infinite;
          }

          .why-choose-point:hover .why-choose-point-icon {
            animation: wobble-horizontal-hover 1s ease-in-out 1;
          }
        `}
      </style>

      <section className="relative block pb-20 md:py-[85px] xl:pb-[120px] xl:pt-0">
        <div className="mx-auto max-w-[1320px] px-[15px]">
          <div className="grid grid-cols-1 gap-y-[50px] xl:grid-cols-2 xl:gap-x-0">
            <div className="xl:col-span-1">
              <div className="relative block md:mx-auto md:max-w-[650px] xl:max-w-none">
                <div className="mb-[31px] text-left">
                  <div className="relative mb-3 inline-flex flex-wrap items-center gap-[10px]">
                    <span className="block w-10 border border-dashed border-[#f78134]"></span>
                    <div className="absolute left-2 top-[-4px] rotate-180">
                      <FontAwesomeIcon
                        icon={faPlane}
                        className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
                      />
                    </div>

                    <h6 className="relative block  text-[18px] font-semibold uppercase leading-[18px] text-[#f78134]">
                      Why Choose Us
                    </h6>
                    <span className="block w-10 border border-dashed border-[#f78134]"></span>
                    <div className="absolute right-2 top-[-4px]">
                      <FontAwesomeIcon
                        icon={faPlane}
                        className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
                      />
                    </div>
                  </div>
                  <h3 className="font-sans text-[34px] font-bold leading-[1.2] text-[#062f3a] md:text-[40px]">
                    Efficient, Safe, & Swift <br />
                    <span className="text-[#f78134]">AI Powered Solution!</span>
                  </h3>
                </div>

                <p className="text-[15px] leading-[30px] text-[#797f7d]">
                  Choose Lionex for innovative AI-powered courier solutions,
                  seamless ecommerce logistics, real-time tracking, secure
                  shipments, reliable domestic and international deliveries,
                  optimized routes, professional support, fast service, and
                  smarter, stress-free operations tailored to modern businesses
                  nationwide.
                </p>

                <div className="mb-[31px] mt-[37px]">
                  <ul className="flex flex-col items-start gap-5 md:flex-row md:flex-wrap md:items-center">
                    {features.map((feature) => (
                      <li
                        key={feature.title}
                        className="why-choose-point flex w-full max-w-[315px] gap-[15px] min-[1200px]:max-w-[270px] xl:max-w-[315px]"
                      >
                        <div className="relative flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full bg-[#f78134]/60">
                          <div className="absolute inset-[5px] rounded-full bg-[#f78134]"></div>
                          <span
                            className={`${feature.icon} why-choose-point-icon relative inline-block text-[35px] text-white transition-all duration-500`}
                          ></span>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-[2px] font-sans text-[18px] font-semibold leading-[1.2] text-[#062f3a]">
                            {feature.title}
                          </h4>
                          <p className="text-[15px] leading-[22px] text-[#797f7d]">
                            {feature.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                

                <div className="mt-[33px]">
                  <ThmBtn as={Link} to="/contact">
                    Contact Us
                  </ThmBtn>
                </div>
              </div>
            </div>

            <div className="xl:col-span-1">
              <div className="relative block md:mx-auto md:mt-[60px] md:max-w-[650px] xl:ml-[30px] xl:mt-0 xl:max-w-none">
                <div className="relative z-[2] block rounded-[6px] rounded-tl-none rounded-tr-none bg-white px-[15px] pb-[55px] pt-[50px] shadow-[0_0_35px_rgba(0,0,0,0.08)] sm:px-[50px]">
                  <div className="mb-11">
                    <h2 className="font-sans text-[30px] font-bold leading-none text-[#062f3a] sm:text-[40px]">
                      Request a Quote
                    </h2>
                  </div>

                  <form
                    className="relative block"
                    action="https://dreamlayout.mnsithub.com/html/tanspot/main-html/assets/inc/sendemail.php"
                    method="POST"
                  >
                    <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
                      <div className="relative mb-[30px] block">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          className={inputClasses}
                        />
                        <div className="absolute right-5 top-[15px] text-[15px] text-[#797f7d]">
                          <span className="icon-user"></span>
                        </div>
                      </div>

                      <div className="relative mb-[30px] block">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          className={inputClasses}
                        />
                        <div className="absolute right-5 top-[15px] text-[15px] text-[#797f7d]">
                          <span className="icon-email"></span>
                        </div>
                      </div>

                      <div className="relative mb-[30px] block">
                        <input
                          type="text"
                          name="Phone"
                          placeholder="Phone"
                          required
                          className={inputClasses}
                        />
                        <div className="absolute right-5 top-[15px] text-[15px] text-[#797f7d]">
                          <span className="icon-phone-call"></span>
                        </div>
                      </div>

                      <div className="relative mb-[30px] block">
                        <input
                          type="text"
                          name="date"
                          placeholder="Date"
                          id="datepicker"
                          className={inputClasses}
                        />
                        <div className="absolute right-5 top-[15px] text-[15px] text-[#797f7d]">
                          <span className="icon-calendar"></span>
                        </div>
                      </div>

                      <div className="relative mb-[30px] block">
                        <select
                          defaultValue="Freight Type"
                          className={`${inputClasses} appearance-none`}
                        >
                          <option disabled>Freight Type</option>
                          <option>Overnight</option>
                          <option>Detain</option>
                          <option>Overland</option>
                        </select>
                        <div className="pointer-events-none absolute right-5 top-[15px] text-[15px] text-[#797f7d]">
                          <span className="icon-down-arrow"></span>
                        </div>
                      </div>

                      <div className="relative mb-[30px] block">
                        <input
                          type="text"
                          name="weight"
                          placeholder="Weight KG (0.5)"
                          required
                          className={inputClasses}
                        />
                        <div className="absolute right-5 top-[15px] text-[15px] text-[#797f7d]">
                          <span className="icon-phone-call"></span>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <div className="relative block">
                          <ThmBtn type="submit" className="border-none">
                            Submit
                          </ThmBtn>
                        </div>
                      </div>
                    </div>
                    <div className="result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;

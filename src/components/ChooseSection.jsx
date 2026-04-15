import chooseMainImage from "../assets/images/choose/choose.png";
import waterIcon from "../assets/images/choose/water.svg";
import airHeatIcon from "../assets/images/choose/airheat.svg";
import radiatorIcon from "../assets/images/choose/fan.svg";
import ceilingIcon from "../assets/images/choose/celling.svg";
import acIcon from "../assets/images/choose/accond.svg";
import floorHeatIcon from "../assets/images/choose/floorheat.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const chooseItems = {
  left: [
    { title: "Fully AI Powered System", icon: waterIcon },
    { title: "Live Whatsapp Notifications", icon: airHeatIcon },
    { title: "AI Auto Return Handling", icon: radiatorIcon },
    { title: "Auto Reattempts", icon: waterIcon },
  ],
  right: [
    { title: "Smart Customer Support", icon: ceilingIcon },
    { title: "Fast Payments Processing", icon: acIcon },
    { title: "Detailed Return Reports", icon: floorHeatIcon },
    { title: "Booking & Tracking via WhatsApp", icon: ceilingIcon },
  ],
};

const ChooseCard = ({ title, icon, side }) => {
  const isLeft = side === "left";

  return (
    <div className="relative flex w-full items-center justify-center lg:justify-normal">
      <div
        className={`absolute top-1/2 hidden h-[2px] w-[120px] -translate-y-1/2 bg-[#f78134]/35 lg:block ${
          isLeft ? "left-full" : "right-full"
        }`}
      >
        <span
          className={`absolute top-1/2 z-10 flex h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-full bg-[#f78134]/20 ${
            isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
          }`}
        >
          <span className="h-[8px] w-[8px] rounded-full bg-[#f78134]"></span>
        </span>
      </div>

      <div
        className={`relative flex min-h-[92px] w-full max-w-[310px] items-center gap-4 overflow-hidden bg-[#eef3f4] px-5 py-5 ${
          isLeft ? "justify-start" : "justify-end"
        } ${
          isLeft
            ? "[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]"
            : "[clip-path:polygon(0_0,100%_0,100%_100%,8%_100%)]"
        }`}
      >
        <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] bg-[#f78134]">
          <img
            src={icon}
            alt=""
            className="h-7 w-7 object-contain brightness-0 invert"
          />
        </div>
        <h4
          className={`max-w-[140px] font-['poppins',sans-serif] text-[15px] font-semibold leading-[1.2] text-[#062f3a] text-left ${
            isLeft ? "text-left" : "text-left"
          }`}
        >
          {title}
        </h4>
      </div>
    </div>
  );
};

const ChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-5 my-5">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(6,47,58,0.06)_1px,transparent_0)] [background-size:18px_18px]"></div>
        <div className="absolute left-[-140px] top-[120px] h-[360px] w-[360px] rounded-full bg-[#f78134]/8 blur-3xl"></div>
        <div className="absolute bottom-[40px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#062f3a]/6 blur-3xl"></div>
      </div>

      <div className="relative mx-auto px-5">
        <div className="section-title text-center sec-title-animation animation-style2 mb-[31px] mt-[-10px]">
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

                <h3 className="section-title__title title-animation text-[25px] sm:text-[46px] font-bold leading-[1.2]">
                  Our Expertise Stands in{" "}
                  <span className="text-[var(--tanspot-base)]">
                    <br />
                    Logistics Solutions
                  </span>
                </h3>
              </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_minmax(320px,520px)_1fr] lg:gap-6 xl:gap-10">
          <div className="order-1 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:order-1 lg:flex lg:items-end lg:gap-10">
            {chooseItems.left.map((item, index) => (
              <ChooseCard
                key={`${item.title}-${index}`}
                title={item.title}
                icon={item.icon}
                side="left"
              />
            ))}
          </div>

          <div className="order-1 mx-auto w-full max-w-[520px] lg:order-2">
            <div className="relative">
              <div className="absolute inset-x-[8%] top-[10%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(247,129,52,0.12)_0%,rgba(247,129,52,0)_72%)]"></div>
              <img
                src={chooseMainImage}
                alt="Transportation services"
                className="relative z-[1] w-full object-contain drop-shadow-[0_22px_38px_rgba(6,47,58,0.14)]"
              />
            </div>
          </div>

          <div className="order-3 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:items-start lg:gap-10">
            {chooseItems.right.map((item, index) => (
              <ChooseCard
                key={`${item.title}-${index}`}
                icon={item.icon}
                title={item.title}
                side="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;

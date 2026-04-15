import { useState } from "react";
import aboutImage from "../assets/images/services/service-details-img-1.jpg";
import ThmBtn from "./thmBtn";

const stats = [
  { value: "5+", label: "NationWide Branches" },
  { value: "5K+", label: "Satisfied Customers" },
  { value: "500K+", label: "Positive Reviews" },
  { value: "98%", label: "Successful Delivery" },
];

const chooseCards = [
  {
    id: 1,
    title: "What makes LionEx Courier unique in Pakistan?",
    description:
      "LionEx Courier blends AI-powered shipment routing with local courier expertise, delivering faster, smarter logistics solutions across Pakistan for modern ecommerce businesses.",
  },
  {
    id: 2,
    title: "Why should I choose LionEx Courier for my business?",
    description:
      "LionEx Courier provides reliable pickup, secure shipment handling, and proactive communication so brands can scale confidently with professional delivery support.",
  },
  {
    id: 3,
    title: "How does LionEx Courier ensure package safety?",
    description:
      "Every parcel moves through our secure tracking system, quality checks, and dedicated delivery partners, reducing damage and keeping customer orders safe from pickup to drop-off.",
  },
  {
    id: 4,
    title: "Is LionEx Courier officially registered?",
    description:
      "Yes. LionEx Courier is a licensed Pakistani logistics company backed by verified operations, professional service standards, and transparent ecommerce shipping practices.",
  },
  {
    id: 5,
    title: "How quickly does LionEx Courier deliver?",
    description:
      "LionEx Courier delivers nationwide in 3 to 7 business days using optimized routes and smart dispatch, ensuring fast and predictable delivery performance.",
  },
  {
    id: 6,
    title: "Does LionEx Courier provide customer support?",
    description:
      "Yes. Our support team is available on WhatsApp, email, and phone to resolve shipment queries, track orders, and provide friendly logistics assistance when you need it.",
  },
  {
    id: 7,
    title: "What happens if my shipment is damaged?",
    description:
      "LionEx Courier handles damaged deliveries with care, offering quick claims assistance, replacement coordination, and support to restore customer satisfaction fast.",
  },
  {
    id: 8,
    title: "Does LionEx Courier allow returns and exchanges?",
    description:
      "Yes. We support simple returns and exchanges with clear procedures, making it easy for merchants and customers to manage reverse logistics efficiently.",
  },
  {
    id: 9,
    title: "Why is LionEx Courier a better choice than other couriers?",
    description:
      "LionEx Courier combines advanced AI routing, ecommerce-focused delivery services, and reliable customer care, creating a smarter shipping experience for online sellers.",
  },
];

const AboutCarrotSection = () => {
  const [isChooseOpen, setIsChooseOpen] = useState(false);

  return (
    <section className="bg-white !px-5 sm:px-6 lg:px-8 py-5 my-5">
      <div className="mx-auto grid gap-3 sm:gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <h2 className="font-['Poppins',sans-serif] text-4xl font-light uppercase leading-none tracking-tight text-[#1f2433] sm:text-5xl md:text-6xl">
            Your <span className="font-semibold text-[#f78134]">Trusted</span>
            <br />
            E-Commerce
            <br />
            Platform
          </h2>

          <div className="my-3 space-y-5 font-['Poppins',sans-serif] text-base  text-[#374151]">
            <p>
              LionEx Courier is your reliable eCommerce destination, offering high
              quality products with proven dependability. We go beyond selling
              items by creating lasting confidence, delivering seamless service
              and an exceptional online shopping journey for every valued
              customer experience.
            </p>
            <ThmBtn className="px-14">Exlplore Our Services</ThmBtn>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,rgba(247,129,52,0.18),rgba(255,255,255,0.9))]">
          <img
            src={aboutImage}
            alt="About section"
            className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 88% 100%, 0 100%)" }}
          />
        </div>
      </div>

      <div className="mx-auto mt-14">
        <h3 className="text-center font-['Poppins',sans-serif] text-2xl font-semibold text-[#062f3a] sm:text-3xl">
          Some impressive numbers
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="rounded-[6px] border border-[#d9e3e6] bg-[#f8fafc] px-6 py-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#f78134]/40 hover:shadow-[0_12px_28px_rgba(6,47,58,0.08)]">
                <p className="font-['Rubik',sans-serif] text-4xl font-bold text-[#062f3a] sm:text-5xl">
                  {stat.value}
                </p>
              </div>
              <p className="mt-4 font-['Rubik',sans-serif] text-base text-[#062f3a]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 rounded-[8px] border border-[#e5e7eb] bg-white shadow-[0_14px_34px_rgba(6,47,58,0.06)]">
        <button
          type="button"
          onClick={() => setIsChooseOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-[#f8fafc] sm:px-6"
        >
          <span className="font-['Rubik',sans-serif] text-lg font-semibold text-[#062f3a] sm:text-xl">
            Why Choose LionEx?
          </span>

          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#f78134]/10 text-[#f78134] transition-all duration-300 ${
              isChooseOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </span>
        </button>

        <div
          className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
            isChooseOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="border-t border-[#e5e7eb] px-5 py-6 sm:px-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {chooseCards.map((card) => (
                  <div
                    key={card.id}
                    className="rounded-[6px] border border-[#d9e3e6] bg-[#f8fafc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f78134]/40 hover:shadow-[0_12px_28px_rgba(6,47,58,0.08)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f78134] font-['Rubik',sans-serif] text-xs font-bold text-white">
                        {card.id}
                      </span>
                      <div>
                        <h4 className="font-['Rubik',sans-serif] text-[15px] font-semibold leading-6 text-[#062f3a]">
                          {card.title}
                        </h4>
                        <p className="mt-3 font-['Rubik',sans-serif] text-sm leading-7 text-[#6a6c6e]">
                          {card.description}
                        </p>
                      </div>
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

export default AboutCarrotSection;

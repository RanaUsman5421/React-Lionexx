import { useState } from "react";
import aboutImage from "../assets/images/services/service-details-img-1.jpg";
import ThmBtn from "./thmBtn";

const stats = [
  { value: "7", label: "Years of experience" },
  { value: "3,097", label: "Happy customers" },
  { value: "10", label: "Score on ecommerce" },
  { value: "98%", label: "Customer Satisfaction" },
];

const chooseCards = [
  {
    id: 1,
    title: "What makes Behoice different from other eCommerce stores?",
    description:
      "Behoice stands out because we don't just sell products, we sell trust. Our focus is on premium quality, fast delivery, and excellent customer service, ensuring a smooth and reliable shopping experience.",
  },
  {
    id: 2,
    title: "Why should I trust Behoice?",
    description:
      "We have been serving customers since 2017 and have built a strong reputation for quality and reliability. Our transparent policies, secure payments, and dedicated customer support make us a brand you can trust.",
  },
  {
    id: 3,
    title: "Does Behoice guarantee product quality?",
    description:
      "Yes! Every product on Behoice is carefully checked to ensure premium quality. If you ever face an issue, our easy return and exchange policy has you covered.",
  },
  {
    id: 4,
    title: "Is Behoice an official company?",
    description:
      "Yes, Behoice is a registered eCommerce store in Pakistan, operating under a trusted business network that includes Bellis (IT Training), BServices (Software Solutions), and Asaan Zindgi (Home Services).",
  },
  {
    id: 5,
    title: "How fast is Behoice's delivery service?",
    description:
      "We deliver across Pakistan within 3 to 7 business days. Our logistics partners ensure safe and timely deliveries to your doorstep.",
  },
  {
    id: 6,
    title: "Does Behoice offer customer support?",
    description:
      "Absolutely! Our support team is available via WhatsApp, email, and live chat to assist you with any inquiries or issues.",
  },
  {
    id: 7,
    title: "What if I receive a wrong or damaged product?",
    description:
      "No worries! Just contact us within 24 hours, and we'll arrange a replacement or refund. Customer satisfaction is our top priority.",
  },
  {
    id: 8,
    title: "Does Behoice offer a return policy?",
    description:
      "Yes! We offer easy returns and exchanges if your product meets our return conditions. Simply follow the return process for a hassle-free experience.",
  },
  {
    id: 9,
    title: "Why should I choose Behoice over other platforms?",
    description:
      "Because we care about our customers. From high-quality products to excellent service, Behoice is built on trust, reliability, and customer satisfaction. Your happiness is our success!",
  },
];

const AboutCarrotSection = () => {
  const [isChooseOpen, setIsChooseOpen] = useState(false);

  return (
    <section className="bg-white !px-5 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <h2 className="font-['Poppins',sans-serif] text-4xl font-light uppercase leading-none tracking-tight text-[#1f2433] sm:text-5xl md:text-6xl">
            Your <span className="font-semibold text-[#f78134]">Trusted</span>
            <br />
            E-Commerce
            <br />
            Platform
          </h2>

          <div className="mt-6 space-y-5 font-['Poppins',sans-serif] text-base leading-8 text-[#374151]">
            <p>
              Lionex is your reliable eCommerce destination, offering high
              quality products with proven dependability. We go beyond selling
              items by creating lasting confidence, delivering seamless service
              and an exceptional online shopping journey for every valued
              customer experience.
            </p>
            <ThmBtn className="px-14">Exlplore Our Services</ThmBtn>
          </div>
        </div>

        <div className="overflow-hidden rounded-[4px]">
          <img
            src={aboutImage}
            alt="About section"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl">
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

      <div className="mx-auto mt-14 max-w-7xl rounded-[8px] border border-[#e5e7eb] bg-white shadow-[0_14px_34px_rgba(6,47,58,0.06)]">
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

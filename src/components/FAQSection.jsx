import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export const faqItems = [
  {
    question: "What services does Lionex Courier offer?",
    answer:
      "Lionex provides AI-powered ecommerce logistics, domestic and international shipping, rail, road, and ocean freight, fast personal delivery, packaging, tracking, and smart, reliable courier solutions across Pakistan.",
  },
  {
    question: "Does Lionex support international shipping?",
    answer:
      "Yes, Lionex offers seamless international shipping with customs clearance, secure handling, real-time tracking, and reliable delivery, ensuring global ecommerce shipments arrive safely and efficiently for businesses worldwide.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "Lionex provides real-time tracking for all shipments through their website, mobile app, or WhatsApp support, allowing businesses and customers to monitor packages easily, ensuring transparency and timely delivery updates.",
  },
  {
    question: "Is Lionex suitable for ecommerce businesses?",
    answer:
      "Absolutely, Lionex specializes in AI-powered courier solutions tailored for ecommerce, streamlining order management, shipping, tracking, and delivery, ensuring fast, secure, and reliable logistics for online businesses nationwide.",
  },
  {
    question: "Does Lionex provide 24/7 customer support?",
    answer:
      "Yes, Lionex offers round-the-clock online support via WhatsApp, call, and website assistance, ensuring businesses receive prompt help, smooth deliveries, and hassle-free courier operations anytime across Pakistan.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

          .faq-plane-left {
            animation: l-r-move 2s linear infinite;
          }

          .faq-plane-right {
            animation: l-r-move-normal 2s linear infinite;
          }
        `}
      </style>

      <section className="relative z-[1] block overflow-hidden px-0 pb-20 pt-[38px] before:absolute before:inset-0 before:-z-[1] before:bg-[#d9dddb]/50 before:content-[''] md:pb-[120px]">
        <div className="absolute left-[-70px] top-[-100px] z-[-1] h-[765px] w-[730px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(253,85,35,0.62)_0%,rgba(6,47,58,0)_100%)] opacity-40 blur-[120px]"></div>
        <div className="absolute bottom-[-255px] right-[100px] z-[-1] h-[765px] w-[730px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(253,85,35,0.62)_0%,rgba(6,47,58,0)_100%)] opacity-40 blur-[120px]"></div>

        <div className="mx-auto max-w-[1320px] px-[15px]">
          <div className="grid grid-cols-1 gap-y-[50px] lg:grid-cols-12 lg:gap-x-6">
            <div className="lg:col-span-5 xl:col-span-6">
              <div className="relative block lg:mb-[60px] xl:mb-0">
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
                      Our Faqs
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
                    Frequently Asking{" "}
                    <span className="text-[#f78134]">Any Question</span>
                  </h3>
                </div>

                <div className="relative mr-0 block md:mr-0 xl:mr-[252px]">
                  <div className="relative block overflow-hidden rounded-[6px]">
                    <img
                      src="/assets/images/resources/faq-one-img-1.jpg"
                      alt=""
                      className="w-full rounded-[6px]"
                    />
                  </div>

                  <div className="relative mt-[30px] w-full max-w-[180px] rounded-[6px] bg-[linear-gradient(270deg,#FD5523_45%,#ffffff_100%)] px-0 py-[30px] text-center xl:absolute xl:bottom-[30px] xl:right-[-70px] xl:mt-0">
                    <div className="relative block">
                      <h2 className="font-sans text-[50px] font-bold leading-[1.2] text-white">
                        05
                      </h2>
                    </div>
                    <p className="text-[15px] font-medium leading-[30px] text-[#062f3a]">
                      Year of <br />
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 xl:col-span-6">
              <div className="relative block">
                <div className="faq-one-accrodion relative block">
                  {faqItems.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={faq.question}
                        className={`relative block overflow-hidden rounded-[6px] border border-black/15 bg-white transition-all duration-500 ${
                          index === 0 ? "" : "mt-5"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setOpenIndex(isOpen ? null : index);
                          }}
                          className="relative block w-full cursor-pointer p-3 pr-[40px] text-left transition-all duration-200 sm:px-[25px] sm:pr-[70px]"
                          aria-expanded={isOpen}
                        >
                          <h4 className="m-0 pr-0 font-sans text-[15px] font-semibold leading-[30px] text-[#062f3a] sm:text-[20px]">
                            {faq.question}
                          </h4>
                          <span
                            className={`absolute right-[10px] top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all duration-500 sm:right-[10px] ${
                              isOpen ? "bg-[#062f3a]" : "bg-[#f78134]"
                            }`}
                          >
                            {isOpen ? (
                              <ChevronDown
                                className="h-[17px] w-[17px]"
                                strokeWidth={3}
                              />
                            ) : (
                              <ChevronRight
                                className="h-[17px] w-[17px]"
                                strokeWidth={3}
                              />
                            )}
                          </span>
                        </button>

                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="rounded-[6px] px-[15px] pb-7 sm:px-[25px]">
                              <p className="m-0 text-[15px] leading-[30px] text-[#797f7d]">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;

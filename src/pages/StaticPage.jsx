import { ChevronDown, ChevronRight, Download, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageShell from "../components/PageShell";
import { faqItems } from "../components/FAQSection";
import pages from "../data/pages";

const serviceRoutes = [
  { key: "nation-wide", title: "Nationwide Delivery", path: "/nation-wide" },
  { key: "cash-on-delivery", title: "Cash on Delivery", path: "/cash-on-delivery" },
  {
    key: "ecommerce-order-fullfillment",
    title: "E-Commerce Delivery",
    path: "/ecommerce-order-fullfillment",
  },
  { key: "3pl-services", title: "3PL Services", path: "/3pl-services" },
  { key: "overnight", title: "Overnight Service", path: "/overnight" },
  { key: "detain", title: "Detain Service", path: "/detain" },
  { key: "smart-ai-service", title: "AI Automation", path: "/smart-ai-service" },
];

const serviceContent = {
  "nation-wide": {
    image: "/assets/images/services/service-details-img-1.jpg",
    intro:
      "Lionex nationwide delivery connects businesses to customers across Pakistan with dependable pickups, optimized linehaul movement, and final-mile execution that supports consistent service at scale.",
    body:
      "Our nationwide network combines hub coordination, route planning, and real-time shipment visibility into one operating flow. Merchants benefit from structured dispatch, exception handling, and reporting that improves delivery confidence and supports growth into new cities and regions.",
    points: [
      "Structured intercity movement improves delivery coverage without sacrificing reliability for brands expanding beyond major metros.",
      "Centralized shipment visibility helps support teams resolve exceptions faster and communicate accurate updates to customers.",
      "Scalable dispatch planning supports seasonal spikes, promotional campaigns, and steady day-to-day order flow.",
      "Reliable proof of delivery and status monitoring reduce disputes and strengthen customer trust.",
    ],
    cards: [
      {
        image: "/assets/images/services/service-details-img-box-img-1.jpg",
        title: "Quality Assured Service",
        text: "Coordinated hub operations and delivery checkpoints create a dependable shipping experience with fewer blind spots.",
      },
      {
        image: "/assets/images/services/service-details-img-box-img-2.jpg",
        title: "100% Delivery Reliability",
        text: "Better route planning and real-time tracking help teams keep customers informed and reduce delivery uncertainty.",
      },
    ],
  },
  "cash-on-delivery": {
    image: "/assets/images/services/service-details-img-2.jpg",
    intro:
      "Lionex cash on delivery service helps merchants grow sales with reliable order fulfillment, verified delivery handling, and structured collection workflows that improve confidence for both seller and buyer.",
    body:
      "Our COD operations are built around secure parcel movement, customer communication, and accurate reconciliation. Merchants gain access to clearer payment status, better exception management, and a delivery process designed to support ecommerce growth across multiple regions.",
    points: [
      "Structured COD processes reduce payment ambiguity and support better post-delivery reconciliation.",
      "Customers benefit from smoother communication before delivery, improving readiness and reducing failed attempts.",
      "Operational visibility helps merchants monitor order completion and collection outcomes more confidently.",
      "Consistent service handling builds trust for fast-growing online brands and repeat buyers.",
    ],
    cards: [
      {
        image: "/assets/images/services/service-details-img-box-img-1.jpg",
        title: "Secure COD Handling",
        text: "Verified delivery and structured payment workflows support cleaner collections and fewer service disputes.",
      },
      {
        image: "/assets/images/services/service-details-img-box-img-2.jpg",
        title: "Merchant Confidence",
        text: "Clearer status reporting helps businesses track fulfillment, collections, and exceptions in one flow.",
      },
    ],
  },
  "ecommerce-order-fullfillment": {
    image: "/assets/images/services/service-details-img-6.jpg",
    intro:
      "Lionex ecommerce fulfillment gives merchants a connected workflow for storage, order processing, packing, and dispatch. Inventory visibility and shipment coordination support faster fulfillment with fewer operational gaps.",
    body:
      "Our fulfillment model combines receiving, SKU handling, pick-pack execution, and outbound dispatch into one streamlined process. Businesses get more control over order readiness, exception monitoring, and service consistency while improving the post-purchase experience for their customers.",
    points: [
      "Inventory visibility and organized order handling help teams reduce processing delays and improve dispatch readiness.",
      "Standardized packing and shipment coordination create a more consistent customer experience for ecommerce brands.",
      "Operational reporting supports better planning for promotions, seasonal demand, and fast-moving products.",
      "Integrated fulfillment and delivery flow reduces handoff friction between warehouse and courier operations.",
    ],
    cards: [
      {
        image: "/assets/images/services/service-details-img-box-img-1.jpg",
        title: "Quality Assured Service",
        text: "Unified dashboards consolidate receiving, packing, and dispatch events so teams can respond faster with cleaner execution.",
      },
      {
        image: "/assets/images/services/service-details-img-box-img-2.jpg",
        title: "100% Delivery Reliability",
        text: "Coordinated fulfillment and courier handoff keeps orders moving with better visibility and fewer missed steps.",
      },
    ],
  },
  "3pl-services": {
    image: "/assets/images/services/service-details-img-3.jpg",
    intro:
      "Lionex 3PL services help businesses outsource logistics operations while keeping the visibility needed to manage service quality, delivery performance, and growth across multiple channels.",
    body:
      "From warehousing and dispatch planning to last-mile coordination and reporting, our 3PL model supports brands that need scalable logistics without building everything in-house. Teams stay informed through better oversight, practical support, and reliable operating processes.",
    points: [
      "Flexible logistics support helps brands expand without the burden of managing every internal workflow themselves.",
      "Shared reporting and structured service handling improve coordination between teams and delivery partners.",
      "Scalable operations make it easier to absorb demand shifts and maintain consistent customer experience.",
      "Better process visibility supports cleaner performance management and faster exception response.",
    ],
    cards: [
      {
        image: "/assets/images/services/service-details-img-box-img-1.jpg",
        title: "Operational Flexibility",
        text: "Our 3PL setup adapts to changing order volumes while preserving structure, speed, and delivery oversight.",
      },
      {
        image: "/assets/images/services/service-details-img-box-img-2.jpg",
        title: "Reliable Support",
        text: "Coordinated logistics processes help brands stay responsive as fulfillment and distribution needs evolve.",
      },
    ],
  },
  overnight: {
    image: "/assets/images/services/service-details-img-4.jpg",
    intro:
      "Lionex overnight service is designed for urgent shipments that require faster handling, tighter movement windows, and dependable coordination from pickup through final delivery.",
    body:
      "Priority sorting, dispatch discipline, and clear milestone tracking help overnight shipments move with better speed and confidence. This service supports businesses that need time-sensitive delivery performance without losing visibility across the journey.",
    points: [
      "Priority processing supports urgent parcel movement and more dependable next-day delivery windows.",
      "Operational visibility helps teams track critical shipments and respond quickly when plans change.",
      "Structured handling reduces risk for time-sensitive orders and important customer commitments.",
      "Clear communication around delivery status improves trust for both merchants and recipients.",
    ],
    cards: [
      {
        image: "/assets/images/services/service-details-img-box-img-1.jpg",
        title: "Priority Dispatch",
        text: "Time-sensitive orders benefit from faster sorting, focused routing, and better service discipline.",
      },
      {
        image: "/assets/images/services/service-details-img-box-img-2.jpg",
        title: "Trusted Speed",
        text: "Reliable overnight coordination helps businesses deliver urgent shipments with more confidence.",
      },
    ],
  },
  detain: {
    image: "/assets/images/services/service-details-img-5.jpg",
    intro:
      "Lionex detain service gives businesses a controlled way to hold shipments when delivery timing, routing decisions, or customer confirmation needs to change before completion.",
    body:
      "This service supports secure pauses within the delivery workflow while keeping shipment visibility intact. Teams can manage exceptions more deliberately, reduce rushed decisions, and resume movement with greater clarity once the next step is confirmed.",
    points: [
      "Controlled shipment holding helps businesses manage delivery changes without losing operational visibility.",
      "Exception handling becomes easier when teams can pause and re-route with clearer internal coordination.",
      "Secure process flow supports better communication with customers during uncertain or changing delivery conditions.",
      "Structured resumption of movement reduces confusion and keeps follow-up actions more reliable.",
    ],
    cards: [
      {
        image: "/assets/images/services/service-details-img-box-img-1.jpg",
        title: "Controlled Handling",
        text: "Detain workflows help operations teams manage route or customer changes without breaking visibility.",
      },
      {
        image: "/assets/images/services/service-details-img-box-img-2.jpg",
        title: "Clear Resolution Flow",
        text: "A structured holding process makes it easier to resume delivery once the correct action is confirmed.",
      },
    ],
  },
  "smart-ai-service": {
    image: "/assets/images/services/service-details-img-7.jpg",
    intro:
      "Lionex AI automation improves logistics decision-making with smarter routing support, faster response workflows, and better operational visibility across high-volume delivery activity.",
    body:
      "Automation tools can help teams respond to demand shifts, delivery exceptions, and customer communication more efficiently. With stronger data flow and more consistent operational logic, businesses gain speed without losing control over service quality.",
    points: [
      "Automation can reduce repetitive manual steps and improve how quickly operations teams respond.",
      "Smarter routing and planning support better resource use across fulfillment and delivery workflows.",
      "Improved visibility helps businesses spot exceptions earlier and communicate with more clarity.",
      "AI-assisted operations create a stronger foundation for scaling service without adding unnecessary complexity.",
    ],
    cards: [
      {
        image: "/assets/images/services/service-details-img-box-img-1.jpg",
        title: "Smarter Operations",
        text: "Automation helps teams process information faster and act with more consistency across logistics workflows.",
      },
      {
        image: "/assets/images/services/service-details-img-box-img-2.jpg",
        title: "Better Visibility",
        text: "AI-supported insights help businesses identify issues sooner and improve service responsiveness.",
      },
    ],
  },
};

const downloads = [
  { title: "Pdf Download", label: "Download" },
  { title: "Pdf Download", label: "Download" },
  { title: "Pdf Download", label: "Download" },
];

const StaticPage = ({ pageKey }) => {
  const page = pages[pageKey];
  const [openIndex, setOpenIndex] = useState(1);

  if (!page) {
    return (
      <PageShell title="Page Not Found">
        <div className="text-center text-gray-600">
          The page you are looking for does not exist.
        </div>
      </PageShell>
    );
  }

  const content = serviceContent[pageKey];

  if (!content) {
    return (
      <PageShell title={page.title} subtitle={page.subtitle}>
        <div className="text-center text-gray-600">{page.subtitle}</div>
      </PageShell>
    );
  }

  return (
    <PageShell title={page.title} subtitle={page.subtitle}>
      <section className="relative block py-[80px] lg:py-[85px]">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-10 xl:px-[15px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-[30px]">
            <div className="order-2 lg:order-1 lg:col-span-5 xl:col-span-4">
              <div className="relative mb-[60px] block lg:mb-0">
                <div className="block rounded-[6px] bg-[#eef4f5] px-[15px] pb-10 pt-[31px] min-[576px]:px-[35px]">
                  <h3 className="mb-[28px] font-['Rubik',sans-serif] text-[24px] font-bold leading-[34px] text-[#062f3a]">
                    Our Services
                  </h3>
                  <ul className="list-none">
                    {serviceRoutes.map((service) => (
                      <li
                        key={service.key}
                        className={service.key !== serviceRoutes[0].key ? "mt-3" : ""}
                      >
                        <Link
                          to={service.path}
                          className={`group relative flex items-center justify-between overflow-hidden rounded-[6px] px-5 py-[13px] font-['Rubik',sans-serif] text-[16px] font-semibold capitalize transition-all duration-500 before:absolute before:inset-0 before:-z-[1] before:origin-bottom-right before:scale-y-0 before:bg-[#f78134] before:transition-transform before:duration-500 before:content-[''] hover:text-white hover:bg-[#f78134] hover:before:origin-top hover:before:scale-y-100 ${
                            service.key === pageKey
                              ? "bg-[#f78134] text-white before:origin-top before:scale-y-100"
                              : "bg-white text-[#062f3a]"
                          }`}
                        >
                          <span>{service.title}</span>
                          <ChevronRight
                            className={`h-[14px] w-[14px] transition-all duration-500 ${
                              service.key === pageKey
                                ? "text-white"
                                : "text-[#6c7176] group-hover:text-white"
                            }`}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative my-[30px] block overflow-hidden rounded-[6px] bg-[#eef4f5] pb-[47px] pt-[18px] text-center">
                  <div className="absolute inset-x-0 top-0 -z-[2] h-[305px] bg-[#f78134] [clip-path:polygon(0_0,100%_0%,100%_82%,0%_100%)] content-['']"></div>
                  <div className="absolute inset-x-0 top-0 -z-[1] h-[295px] bg-[#062f3a] [clip-path:polygon(0_0,100%_0%,100%_82%,0%_100%)] content-['']"></div>

                  <div className="relative z-[1] block [clip-path:polygon(0_0,100%_0%,100%_82%,0%_100%)]">
                    <div className="relative block">
                      <img
                        src="/assets/images/services/service-details-sidebar-img.png"
                        alt=""
                        className="mx-auto w-auto"
                      />
                    </div>
                  </div>

                  <div className="relative z-[2] mt-[-65px] block">
                    <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#062f3a]">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="mb-[13px] font-['Rubik',sans-serif] text-[25px] font-bold leading-[35px] text-[#062f3a]">
                      <a href="tel:+923054447156" className="transition-all duration-500 hover:text-[#f78134]">
                        03054447156
                      </a>
                    </h2>
                    <p className="text-[18px] font-semibold capitalize leading-[28px] text-[#062f3a]">
                      If You Need Any Help <br />
                      Contact With Us
                    </p>
                  </div>
                </div>

                <div className="block rounded-[6px] bg-[#eef4f5] px-[15px] pb-10 pt-[31px] min-[576px]:px-[35px]">
                  <h3 className="mb-[28px] font-['Rubik',sans-serif] text-[24px] font-bold leading-[34px] text-[#062f3a]">
                    Download
                  </h3>

                  <div className="block">
                    <ul className="list-none">
                      {downloads.map((item, index) => (
                        <li
                          key={index}
                          className={`flex items-center justify-between border-b border-[rgba(247,129,52,0.3)] py-[14px] leading-none ${
                            index === 0 ? "pt-0" : ""
                          } ${index === downloads.length - 1 ? "border-b-0 pb-0" : ""}`}
                        >
                          <div className="flex items-center">
                            <div className="block">
                              <FileText className="h-[45px] w-[45px] text-[#062f3a]" />
                            </div>
                            <div className="ml-[17px] block flex-1">
                              <h2 className="font-['Rubik',sans-serif] text-[18px] font-semibold capitalize leading-[30px] text-[#062f3a]">
                                <a href="#" className="transition-all duration-300 hover:text-[#f78134]">
                                  {item.title}
                                </a>
                              </h2>
                              <p className="text-[14px] font-normal capitalize leading-5 text-[#062f3a]">
                                <a href="#" className="transition-all duration-300 hover:text-[#f78134]">
                                  {item.label}
                                </a>
                              </p>
                            </div>
                          </div>

                          <div className="block">
                            <a
                              href="#"
                              className="flex h-[45px] w-[45px] items-center justify-center rounded-[6px] bg-[#f78134] text-white transition-all duration-500 hover:bg-[#062f3a]"
                            >
                              <Download className="h-5 w-5" />
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7 xl:col-span-8">
              <div className="relative block">
                <div className="relative block">
                  <img
                    src={content.image}
                    alt={page.title}
                    className="w-full rounded-[6px] object-cover"
                  />
                </div>

                <h3 className="mb-[30px] mt-[41px] font-['Rubik',sans-serif] text-[40px] font-bold leading-[50px] text-[#062f3a]">
                  {page.title}
                </h3>

                <p className="font-['Poppins',sans-serif] text-[20px] font-semibold leading-[30px] text-[#062f3a]">
                  {content.intro}
                </p>
                <p className="mb-[41px] mt-5 text-[16px] leading-[30px] text-[#6c7176]">
                  {content.body}
                </p>

                <ul className="list-none">
                  {content.points.map((point, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-[10px] ${index > 0 ? "mt-4" : ""}`}
                    >
                      <div className="flex items-center">
                        <ChevronRight className="h-[18px] w-[18px] text-[#f78134]" />
                      </div>
                      <p className="text-[16px] leading-[30px] text-[#062f3a]">{point}</p>
                    </li>
                  ))}
                </ul>

                <div className="mb-[31px] mt-[60px] grid grid-cols-1 gap-x-[30px] xl:grid-cols-2">
                  {content.cards.map((card, index) => (
                    <div key={index} className="mb-[21px] block">
                      <div className="group relative mb-[30px] block overflow-hidden rounded-[6px]">
                        <div className="absolute inset-0 z-[1] rounded-[6px] bg-black opacity-0 transition-all duration-500 group-hover:opacity-20"></div>
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full rounded-[6px] transition-transform duration-1000 ease-in-out group-hover:scale-[1.06]"
                        />
                      </div>
                      <div className="block">
                        <div className="flex items-center gap-[15px]">
                          <div className="flex items-center">
                            <div className="h-9 w-9 rounded-full bg-[#f78134]"></div>
                          </div>
                          <h3 className="font-['Rubik',sans-serif] text-[24px] font-bold leading-[36px] text-[#062f3a]">
                            {card.title}
                          </h3>
                        </div>
                        <p className="mt-[17px] text-[16px] leading-[30px] text-[#6c7176]">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-[30px] block">
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
                              if (!isOpen) {
                                setOpenIndex(index);
                              }
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
        </div>
      </section>
    </PageShell>
  );
};

export default StaticPage;

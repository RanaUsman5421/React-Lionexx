import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    image: "/assets/images/services/services-2.png",
    icon: "icon-worldwide-shipping",
    number: "01",
    title: "Nationwide Delivery",
    desc: "Lionex overnight courier service ensures urgent parcels arrive by morning through priority handling and secure transportation.",
    link: "/nation-wide",
  },
  {
    image: "/assets/images/services/services-2.png",
    icon: "icon-shipment",
    number: "02",
    title: "Cash on Delivery",
    desc: "Lionex overland transport moves shipments efficiently across cities and regions using optimized, reliable trucking networks.",
    link: "/cash-on-delivery",
  },
  {
    image: "/assets/images/services/services-2.png",
    icon: "icon-delivery-man",
    number: "03",
    title: "E-Commerce Delivery",
    desc: "Secure warehouse facilities providing inventory storage, smart management systems, and efficient order.",
    link: "/ecommerce-order-fullfillment",
  },
  {
    image: "/assets/images/services/services-4.png",
    icon: "icon-truck",
    number: "04",
    title: "3PL Fullfillment",
    desc: "Partnered delivery networks expand reach, ensuring dependable parcel distribution through trusted logistics collaborations.",
    link: "/3pl-services",
  },
  {
    image: "/assets/images/services/services-5.png",
    icon: "icon-shipment",
    number: "05",
    title: "Overnight Service",
    desc: "Real time tracking technology lets customers monitor shipments instantly with accurate updates throughout transit.",
    link: "/overnight",
  },
  {
    image: "/assets/images/services/services-6.png",
    icon: "icon-delivery-man",
    number: "06",
    title: "Detain Service",
    desc: "Real time tracking technology lets customers monitor shipments instantly with accurate updates throughout transit.",
    link: "/detain",
  },
  {
    image: "/assets/images/services/services-one-1-1.jpg",
    icon: "icon-worldwide-shipping",
    number: "07",
    title: "Overland Service",
    desc: "Advanced AI automation optimizes routing, shipment processing, logistics planning, improving operational efficiency.",
    link: "/overland",
  },
  {
    image: "/assets/images/services/services-one-1-1.jpg",
    icon: "icon-worldwide-shipping",
    number: "08",
    title: "Cargo Services",
    desc: "Advanced AI automation optimizes routing, shipment processing, logistics planning, improving operational efficiency.",
    link: "/cargo-service",
  },
  {
    image: "/assets/images/services/services-one-1-1.jpg",
    icon: "icon-worldwide-shipping",
    number: "09",
    title: "Smart AI Features",
    desc: "Advanced AI automation optimizes routing, shipment processing, logistics planning, improving operational efficiency.",
    link: "/smart-ai-service",
  },
];

const serviceMask =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='250' viewBox='0 0 300 250'%3E%3Cimage xlink:href='data:image/png;base64,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' x='0' y='0' width='300' height='250'/%3E%3C/svg%3E\")";

const ServicesCarousel = () => {
  return (
    <section className="bg-white pt-[75px] pb-[85px]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="relative mb-3 inline-flex flex-wrap items-center gap-[10px]">
            <span className="block w-10 border border-dashed border-[#f78134]"></span>
            <div className="absolute left-2 top-[-4px] rotate-180">
              <FontAwesomeIcon
                icon={faPlane}
                className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
              />
            </div>

            <h6 className="relative block  text-[18px] font-semibold uppercase leading-[18px] text-[#f78134]">
              Our Services
            </h6>
            <span className="block w-10 border border-dashed border-[#f78134]"></span>
            <div className="absolute right-2 top-[-4px]">
              <FontAwesomeIcon
                icon={faPlane}
                className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-black leading-tight text-[#062f3a] md:text-5xl lg:text-6xl">
            Provide Efficient Logistics <br className="hidden lg:block" />
            <span className="text-[#f78134]">Solutions Business</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".services-swiper-pagination",
            renderBullet: (_, className) =>
              `<span class="${className} !mx-[5px] !my-0 !inline-flex !h-[18px] !w-[18px] items-center justify-center rounded-[6px] border-2 border-[rgba(6,47,58,0.7)] bg-transparent p-0 opacity-100 transition-all duration-100 delay-100 [&.swiper-pagination-bullet-active]:border-lionex-primary [&.swiper-pagination-bullet-active_.services-bullet-inner]:bg-lionex-primary">
                <span class="services-bullet-inner block h-2 w-2 rounded-[6px] bg-[rgba(6,47,58,0.7)] transition-all duration-100 delay-100"></span>
              </span>`,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1320: { slidesPerView: 4 },
          }}
          className="services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.number} className="h-auto">
              <div className="item h-full">
                <div className="group relative block h-full">
                  <div className="relative block">
                    <div
                      className="relative z-[1] block overflow-hidden rounded-tl-[20px]"
                      style={{
                        WebkitMaskImage: serviceMask,
                        maskImage: serviceMask,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center center",
                        maskPosition: "center center",
                        WebkitMaskSize: "cover",
                        maskSize: "cover",
                      }}
                    >
                      <span className="absolute inset-0 z-[1] bg-[rgba(6,47,58,0.6)] opacity-0 transition-all duration-700 delay-100 ease-in-out group-hover:opacity-100"></span>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full scale-105 rounded-tl-[20px] transition duration-500 ease-[ease] group-hover:scale-100"
                      />
                    </div>

                    <div className="absolute right-[27px] top-0 z-[1] flex h-[65px] w-[65px] items-center justify-center rounded-full bg-lionex-primary transition-all delay-100 duration-200 group-hover:bg-lionex-black">
                      <span
                        className={`${service.icon} inline-block text-[36px] text-white transition-all delay-100 duration-500 group-hover:[transform:rotateY(180deg)]`}
                      />
                    </div>
                  </div>

                  <div className="relative mt-[-100px] block rounded-bl-[20px] rounded-br-[20px] bg-white px-5 pb-6 pt-[120px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.07)] xl:px-5">
                    <div className="font-poppins absolute left-5 top-[45px] text-[50px] font-bold leading-[0.8] text-transparent transition-all delay-100 duration-200 [-webkit-text-stroke:1px_#062f3a] group-hover:text-lionex-primary group-hover:[-webkit-text-stroke:1px_#f78134]">
                      {service.number}
                    </div>

                    <h4 className="text-[22px] font-semibold capitalize leading-[1.2]">
                      <a
                        href={service.link}
                        className="text-lionex-black transition-colors duration-500 hover:text-lionex-primary"
                      >
                        {service.title}
                      </a>
                    </h4>

                    <p className="mb-4 mt-4 text-base leading-[30px] text-[#6a6c6e]">
                      {service.desc}
                    </p>

                    <div className="relative block">
                      <a
                        href={service.link}
                        className="flex flex-wrap items-center gap-[5px] font-semibold capitalize text-lionex-black transition-colors duration-500 hover:text-lionex-primary"
                      >
                        Read More <span className="icon-right-arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="services-swiper-pagination relative mt-10 flex items-center justify-center text-center"></div>
      </div>
    </section>
  );
};

export default ServicesCarousel;

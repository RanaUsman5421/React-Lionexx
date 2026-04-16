import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const videos = [
  {
    src: "https://youtube.com/embed/YeKKCS2mpdc",
    title:
      "Why Choose LionEx - Pakistan Smartest Courier System - LionEx Courier",
    name: "Ahsan Raza",
    role: "Ecommerce Brand Owner",
    quote:
      "Lionex helped us make delivery communication feel faster, clearer, and far more dependable for customers.",
  },
  {
    src: "https://www.youtube.com/embed/3LyEMj7MLuI",
    title:
      "Customer Video Feedback for LionEx Courier - Pkaistan No 1 Ai Powered Courier Network",
    name: "Hira Khan",
    role: "Retail Operations Lead",
    quote:
      "The support experience and tracking visibility gave our team much more confidence during high-order periods.",
  },
  {
    src: "https://www.youtube.com/embed/a6jaYXVnS1Y",
    title: "Customer Feedback about LionEx Courier",
    name: "Umair Shah",
    role: "D2C Founder",
    quote:
      "From fulfillment coordination to final-mile reliability, the service has felt modern and operationally strong.",
  },
  {
    src: "https://www.youtube.com/embed/ivqCKSdd-kE?si=H49f_3aMWKC1gX1G",
    title:
      "Why Choose LionEx - Pakistan Smartest Courier System - LionEx Courier",
    name: "Sania Malik",
    role: "Growth Manager",
    quote:
      "Lionex gives our brand a sharper shipping experience that customers notice and our internal team can rely on.",
  },
];

const TestimonialsGrid = () => {
  return (
    <section className="relative overflow-hidden px-0 py-5 my-5">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(6,47,58,0.06),transparent)]" />
        <div className="absolute -left-24 h-72 w-72 rounded-full bg-[#f78134]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#062f3a]/10 blur-3xl" />
      </div>

      <div className="p-5">
        <div className="mb-5 grid gap-8 lg:mb-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-[760px]">
            <div className="relative mb-3 inline-flex flex-wrap items-center gap-[10px]">
              <span className="block w-10 border border-dashed border-[#f78134]"></span>
              <div className="absolute left-2 top-[-4px] rotate-180">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="inline-block text-[14px] text-[#f78134]"
                />
              </div>
              <h6 className="relative block text-[15px] font-semibold uppercase leading-[18px] tracking-[0.22em] text-[#f78134]">
                Our Testimonials
              </h6>
              <span className="block w-10 border border-dashed border-[#f78134]"></span>
              <div className="absolute right-2 top-[-4px]">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="inline-block text-[14px] text-[#f78134]"
                />
              </div>
            </div>

            <h3 className="font-sans text-[36px] font-bold leading-[1] text-[#062f3a] sm:text-[46px] lg:text-[60px]">
              Explore Our{" "}
              <span className="text-[#f78134]">Testimonials</span>
            </h3>
          </div>          
        </div>

        <div className="grid gap-3 grid-cols-2 xl:grid-cols-4">
          {videos.map((video, index) => (
            <article
              key={`${video.src}-${index}`}
              className="overflow-hidden rounded-[30px] border border-[#e8dfd3] bg-white p-3 shadow-[0_20px_50px_rgba(6,47,58,0.07)]"
            >
              <div className="overflow-hidden rounded-[22px] bg-black">
                <iframe
                  className="block aspect-[9/16] w-full border-0"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;

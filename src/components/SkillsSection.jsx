import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThmBtn from "./thmBtn";
import mainVisual from "../assets/images/services/service-details-img-1.jpg";
import accentVisualOne from "../assets/images/resources/logistics.webp";
import accentVisualTwo from "../assets/images/project/project-1-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { label: "Shipping", percent: 70 },
  { label: "Management", percent: 80 },
  { label: "Warehousing", percent: 95 },
  { label: "Delivery Service", percent: 98 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [controls, isInView]);

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

          .skill-plane-left {
            animation: l-r-move 2s linear infinite;
          }

          .skill-plane-right {
            animation: l-r-move-normal 2s linear infinite;
          }
        `}
      </style>

      <section
        ref={ref}
        className="relative z-[1] hidden overflow-hidden px-0 py-20 md:block bg-white md:py-[85px]"
      >
        <div className="mx-auto max-w-[1320px] px-[15px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="relative block">
                <div className="mb-[21px] text-left">
                  <div className="relative mb-3 inline-flex flex-wrap items-center gap-[10px]">
                    <span className="block w-10 border border-dashed border-[#f78134]"></span>
                    <div className="absolute left-2 top-[-4px] rotate-180">
                      <FontAwesomeIcon
                        icon={faPlane}
                        className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
                      />
                    </div>

                    <h6 className="relative block  text-[18px] font-semibold uppercase leading-[18px] text-[#f78134]">
                      Our Skills
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
                    First AI Powered <br />{" "}
                    <span className="text-[#f78134]">Solution in Pakitan</span>
                  </h3>
                </div>

                <p className="text-[15px] leading-[30px] text-[#797f7d]">
                  Lionex excels in AI-powered logistics, offering smart delivery
                  solutions, real-time tracking, ecommerce support, route
                  optimization, secure handling, warehousing, international and
                  domestic shipping, rail, road, and ocean freight services,
                  ensuring fast, reliable, and efficient operations nationwide.
                </p>

                <div className="mr-0 mt-6 block lg:mr-[60px]">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.label}
                      className={
                        index === 0
                          ? "relative block"
                          : "relative mt-[14px] block"
                      }
                    >
                      <div className="mb-3 font-sans text-[20px] font-semibold capitalize leading-[30px] tracking-[1px] text-[#062f3a]">
                        {skill.label}
                      </div>
                      <div className="relative h-[7px] w-full rounded-[6px] bg-white">
                        <motion.div
                          className="relative block h-[7px] rounded-[6px] bg-[#f78134]"
                          initial={{ width: 0 }}
                          animate={controls}
                          variants={{
                            animate: {
                              width: `${skill.percent}%`,
                              transition: { duration: 1.5, ease: "easeOut" },
                            },
                          }}
                        >
                          <motion.div
                            className="absolute bottom-[18px] right-0 mr-[-35px] h-[22px] w-10 rounded-[6px] bg-[#f78134] text-center font-sans text-[14px] font-medium leading-[22px] text-white"
                            initial={{ opacity: 0 }}
                            animate={controls}
                            variants={{
                              animate: {
                                opacity: 1,
                                transition: { duration: 0.5, delay: 0.5 },
                              },
                            }}
                          >
                            {skill.percent}%
                            <span className="absolute left-0 top-full mt-[-5px] h-0 w-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-[#f78134] border-r-transparent border-t-[#f78134] border-b-transparent"></span>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <ThmBtn as={Link} to="/contact">
                    Book Your Parcel
                  </ThmBtn>
                </div>
              </div>
            </div>

            <div className="mt-14 flex items-center justify-center lg:mt-0 lg:justify-end">
              <div className="relative w-full max-w-[620px] px-4 md:px-8 lg:px-0">
                <div className="absolute right-[8%] top-[4%] hidden h-[82%] w-[74%] rounded-sm bg-[#7f351f] opacity-95 [clip-path:polygon(0_0,86%_0,100%_100%,14%_100%)] lg:block"></div>

                <div className="relative rounded-sm bg-[#ff643f] p-[18px] shadow-[0_24px_60px_rgba(167,69,29,0.25)] [clip-path:polygon(0_0,86%_0,100%_100%,14%_100%)] md:p-6">
                  <div className="overflow-hidden rounded-sm [clip-path:polygon(0_0,88%_0,100%_100%,12%_100%)]">
                    <img
                      src={mainVisual}
                      alt="Lionex logistics"
                      className="h-[300px] w-full object-cover md:h-[420px] lg:h-[500px]"
                    />
                  </div>

                </div>

                <div className="absolute bottom-[3%] left-0 w-[38%] rounded-sm bg-[linear-gradient(180deg,#080808_0%,#26100d_42%,#8e341f_100%)] p-[10px] [clip-path:polygon(14%_0,100%_0,86%_100%,0_100%)] md:w-[32%] md:p-[14px]">
                  <div className="h-[120px] rounded-sm border bg-transparent [clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)] md:h-[150px]"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <span className="font-sans text-[34px] font-bold leading-none md:text-[44px]">
                      10+
                    </span>
                    <span className="mt-2 block max-w-[110px] text-[12px] font-semibold leading-[1.35] md:text-[15px]">
                      Years of Experiences
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;

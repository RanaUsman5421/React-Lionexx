import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ThmBtn from "./thmBtn";
import image from "../assets/images/resources/about-one-img-1.jpg";
import "../index.css";
import "../assets/css/module-css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const ExperienceCounter = ({ start, value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId;
    const duration = 1500;
    const startedAt = performance.now();

    const updateValue = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateValue);
      } else {
        setDisplayValue(value);
      }
    };

    frameId = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(frameId);
  }, [start, value]);

  return <>{String(displayValue).padStart(2, "0")}</>;
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about-one relative block md:pt-20 lg:pt-32 z-[1] bg-white">
      <style>
        {`
          @keyframes aboutCircleSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div className="container mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="row grid grid-cols-1 gap-y-5 xl:grid-cols-2">
          <div className="col-xl-6 order-2 md:order-1">
            <div
              className="about-one__left relative block mr-[60px]"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="about-one__img-box relative block">
                <div className="about-one__img relative block">
                  <img src={image} alt="" className="w-full !rounded-sm" />
                </div>

                <div className="about-one__review-and-experience-box absolute right-0 top-0 z-[2] bg-[var(--tanspot-base)] px-5 py-[30px] rounded-sm md:rounded-[50px]">
                  <div className="about-one__review-box relative block">
                    <ul className="about-one__review-list list-unstyled relative flex items-center">
                      <li className="relative block">
                        <div className="about-one__review-img relative block h-[54px] w-[54px] overflow-hidden rounded-full">
                          <img
                            src="/assets/images/resources/about-one-review-img-1-1.png"
                            alt=""
                            className="w-full border-2 border-white rounded-full"
                          />
                        </div>
                      </li>
                      <li className="relative ml-[-15px] block">
                        <div className="about-one__review-img relative block h-[54px] w-[54px] overflow-hidden rounded-full">
                          <img
                            src="/assets/images/resources/about-one-review-img-1-2.jpg"
                            alt=""
                            className="w-full border-2 border-white rounded-full"
                          />
                        </div>
                      </li>
                      <li className="relative ml-[-15px] block">
                        <div className="about-one__review-img relative block h-[54px] w-[54px] overflow-hidden rounded-full">
                          <img
                            src="/assets/images/resources/about-one-review-img-1-3.jpg"
                            alt=""
                            className="w-full border-2 border-white rounded-full"
                          />
                        </div>
                      </li>
                      <li className="relative ml-[-15px] block">
                        <div className="about-one__review-img relative block h-[54px] w-[54px] overflow-hidden rounded-full">
                          <img
                            src="/assets/images/resources/about-one-review-img-1-4.jpg"
                            alt=""
                            className="w-full border-2 border-white rounded-full"
                          />
                        </div>
                      </li>
                    </ul>

                    <div className="about-one__review-star relative mb-[10px] mt-[15px] flex items-center gap-[5px]">
                      <span className="fas fa-star text-[15px] text-[#FFD25D]"></span>
                      <span className="fas fa-star text-[15px] text-[#FFD25D]"></span>
                      <span className="fas fa-star text-[15px] text-[#FFD25D]"></span>
                      <span className="fas fa-star text-[15px] text-[#FFD25D]"></span>
                      <span className="fas fa-star text-[15px] text-[#FFD25D]"></span>
                    </div>

                    <p className="about-one__review-text text-white">
                      Clients 5.9K (3,567 Reviews)
                    </p>
                  </div>

                  <div className="about-one__experience-box mt-[15px]">
                    <div className="about-one__experience-count relative flex items-center gap-[2px]">
                      <h3
                        className="odometer text-[40px] font-bold leading-[40px] text-white"
                        data-count="05"
                      >
                        <ExperienceCounter start={hasStarted} value={5} />
                      </h3>
                      <span className="text-[40px] font-semibold leading-[40px] text-white">
                        +
                      </span>
                    </div>
                    <p className="about-one__experience-count-text font-medium text-white">
                      Years Of <br /> Experience
                    </p>
                  </div>

                  <div className="about-one__video-link relative z-[3] mt-[20px] flex items-center gap-[25px]">
                    <a
                      href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                      className="video-popup relative block"
                    >
                      <div className="about-one__video-icon relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-[18px] text-[var(--tanspot-black)] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.07)] transition-all duration-500 ease-[ease] hover:bg-[var(--tanspot-black)] hover:text-white">
                        <span className="fa fa-play"></span>
                        <i className="ripple absolute inset-0 rounded-full animate-[ripple_3s_infinite]"></i>
                      </div>
                    </a>
                    <h4 className="about-one__video-title text-[18px] font-semibold leading-[18px] text-white">
                      Watch Video
                    </h4>
                  </div>
                </div>

                <div className="about-one__circle-text">
                  <div className="about-one__round-text-box absolute bottom-[6px] left-[2px] z-[5] h-[180px] w-[180px] rounded-full bg-[var(--tanspot-base)]">
                    <div className="inner relative block h-[180px] w-[180px]">
                      <svg
                        viewBox="0 0 180 180"
                        className="absolute inset-0 h-[180px] w-[180px]"
                        style={{
                          animation: "aboutCircleSpin 14s linear infinite",
                        }}
                        aria-hidden="true"
                      >
                        <defs>
                          <path
                            id="about-circle-path"
                            d="M 90,90 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
                          />
                        </defs>
                        <text
                          fill="#ffffff"
                          fontSize="12"
                          fontWeight="700"
                          letterSpacing="2.2"
                          textTransform="uppercase"
                        >
                          <textPath
                            href="#about-circle-path"
                            startOffset="50%"
                            textAnchor="middle"
                          >
                            WELCOME TO OUR COMPANY WORKING PROPERLY SINCE 2002
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="overlay-icon-box absolute inset-[30px] flex items-center justify-center rounded-full bg-[var(--tanspot-black)] transition-all duration-500 ease-[ease] hover:bg-white">
                      <Link
                        to="/about"
                        className="text-[45px] text-white transition-all duration-500 ease-[ease] hover:text-[var(--tanspot-base)]"
                      >
                        <i className="icon-plane"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 order-1 md:order-2 !mt-5">
            <div className="about-one__right relative ml-[-10px] block">
              <div className="section-title text-center md:text-left sec-title-animation animation-style2 mb-[31px] mt-[-10px]">
                <div className="relative mb-3 inline-flex flex-wrap items-center gap-[10px]">
                  <span className="block w-10 border border-dashed border-[#f78134]"></span>
                  <div className="absolute left-2 top-[-4px] rotate-180">
                    <FontAwesomeIcon
                      icon={faPlane}
                      className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
                    />
                  </div>

                  <h6 className="relative block  text-[18px] font-semibold uppercase leading-[18px] text-[#f78134]">
                    About Us
                  </h6>
                  <span className="block w-10 border border-dashed border-[#f78134]"></span>
                  <div className="absolute right-2 top-[-4px]">
                    <FontAwesomeIcon
                      icon={faPlane}
                      className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"
                    />
                  </div>
                </div>

                <h3 className="section-title__title title-animation text-[46px] font-bold leading-[1.2]">
                  Our Expertise Stands in{" "}
                  <span className="text-[var(--tanspot-base)]">
                    Logistics Solutions
                  </span>
                </h3>
              </div>

              <p className="about-one__text text-[16px] text-[var(--tanspot-gray)]">
                Lionex is Pakistan&apos;s first AI-powered courier platform
                transforming ecommerce logistics through intelligent automation,
                advanced tracking, rapid fulfillment, secure parcel movement,
                innovative shipping technology, and scalable solutions
                empowering businesses with dependable nationwide distribution.
              </p>

              <div className="about-one__point-box my-[31px]">
                <ul className="about-one__point relative flex items-center">
                  <li className="group relative flex w-full max-w-[315px] gap-[15px]">
                    <div className="about-one__point-icon relative z-[1] flex h-[65px] w-[65px] items-center justify-center bg-[var(--tanspot-base)] transition-all duration-500 ease-[ease] group-hover:bg-[var(--tanspot-black)]">
                      <span className="icon-worldwide-shipping-1 inline-block text-[35px] text-white transition-all duration-500 ease-[ease] group-hover:[animation:wobble-horizontal-hover_1s_ease-in-out_1]"></span>
                    </div>
                    <div className="about-one__point-content relative block flex-1">
                      <h4 className="mb-[2px] text-[18px] font-semibold leading-[1.2]">
                        National Service
                      </h4>
                      <p className="text-[15px] leading-[22px] text-[var(--tanspot-gray)]">
                        Lionex plays a pivotal role in ecommerce logistics with
                        AI solutions.
                      </p>
                    </div>
                  </li>

                  <li className="group relative flex w-full max-w-[315px] gap-[15px]">
                    <div className="about-one__point-icon relative z-[1] flex h-[65px] w-[65px] items-center justify-center bg-[var(--tanspot-base)] transition-all duration-500 ease-[ease] group-hover:bg-[var(--tanspot-black)]">
                      <span className="icon-24-hours-service inline-block text-[35px] text-white transition-all duration-500 ease-[ease] group-hover:[animation:wobble-horizontal-hover_1s_ease-in-out_1]"></span>
                    </div>
                    <div className="about-one__point-content relative block flex-1">
                      <h4 className="mb-[2px] text-[18px] font-semibold leading-[1.2]">
                        24/7 Online Support
                      </h4>
                      <p className="text-[15px] leading-[22px] text-[var(--tanspot-gray)]">
                        Lionex provides 24/7 online support for seamless
                        ecommerce shipping and logistics.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="about-one__point-box-two relative flex flex-wrap items-center">
                <ul className="about-one__point-two relative block w-full max-w-[315px]">
                  <li className="relative flex items-center gap-[10px]">
                    <div className="icon relative flex h-5 w-5 items-center justify-center rounded-full bg-[var(--tanspot-base)]">
                      <span className="fas fa-check text-[10px] text-white"></span>
                    </div>
                    <div className="text relative block flex-1">
                      <p>Quality Control System</p>
                    </div>
                  </li>
                  <li className="relative mt-[9px] flex items-center gap-[10px]">
                    <div className="icon relative flex h-5 w-5 items-center justify-center rounded-full bg-[var(--tanspot-base)]">
                      <span className="fas fa-check text-[10px] text-white"></span>
                    </div>
                    <div className="text relative block flex-1">
                      <p>Affrodable Cost</p>
                    </div>
                  </li>
                </ul>

                <ul className="about-one__point-two about-one__point-two--three relative block w-full max-w-[315px]">
                  <li className="relative flex items-center gap-[10px]">
                    <div className="icon relative flex h-5 w-5 items-center justify-center rounded-full bg-[var(--tanspot-base)]">
                      <span className="fas fa-check text-[10px] text-white"></span>
                    </div>
                    <div className="text relative block flex-1">
                      <p>100% Satisfaction Guarantee</p>
                    </div>
                  </li>
                  <li className="relative mt-[9px] flex items-center gap-[10px]">
                    <div className="icon relative flex h-5 w-5 items-center justify-center rounded-full bg-[var(--tanspot-base)]">
                      <span className="fas fa-check text-[10px] text-white"></span>
                    </div>
                    <div className="text relative block flex-1">
                      <p>On Time Delivery</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="about-one__btn-and-author-box relative mt-[38px] flex flex-wrap items-center gap-[30px]">
                <div className="about-one__btn-box relative block">
                  <ThmBtn className="mt-3" as={Link} to="/about">
                    About Us
                  </ThmBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
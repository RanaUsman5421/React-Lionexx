import AboutSection from "../components/AboutSection";
import BusinessGrowthSection from "../components/BusinessGrowthSection";
import BlogPreviews from "../components/BlogPreviews";
import ChooseSection from "../components/ChooseSection";
import CoverageFlexibilitySection from "../components/CoverageFlexibilitySection";
import CounterStatsSection from "../components/CounterStatsSection";
import FAQSection from "../components/FAQSection";
import ProcessSteps from "../components/ProcessSteps";
import ServicesCarousel from "../components/ServicesCarousel";
import SkillsSection from "../components/SkillsSection";
import SlidingTextSection from "../components/SlidingTextSection";
import TestimonialsGrid from "../components/TestimonialsGrid";
import WhyChooseSection from "../components/WhyChooseSection";
import ThmBtn from "../components/thmBtn";
import AiImage from "../assets/images/resources/LionEx Robo Icon Logo.webp";
import bgImage from "../assets/images/backgrounds/Home-web page-Liones.png";
import "@fortawesome/fontawesome-free/css/all.css";
import heroBgImage from "../assets/images/backgrounds/Home-web page-Liones.png";
import "../index.css";
import Tooltip from "../components/Tooltip";

const Home = () => {
  return (
    <>
      <div className="overflow-y-visible lg:mb-[110px]">
        <section className="relative z-0 flex h-[70vh] w-full items-center overflow-visible bg-[#0F3340] sm:h-[80vh] md:h-screen md:min-h-[90vh] lg:pb-0">
          <style>
            {`
            @keyframes aiFloat {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-30px);
              }
            }
              
          `}
          </style>
          <div className="absolute inset-0 bg-[url('./assets/images/blog/blog-list-1-2.jpg')] bg-cover bg-center opacity-5 z-0"></div>
          <div
            className="fixed bottom-0 right-0 hidden md:block h-[50vh] w-[50vh] lg:h-[70vh] lg:w-[70vh] xl:h-[80vh] xl:w-[80vh] object-contain opacity-10 z-5 pointer-events-none"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "contain",
              backgroundPosition: "bottom right",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="relative z-10 grid h-full w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 text-center lg:grid-cols-2 lg:gap-12 lg:text-left sm:px-10 mx-auto">
            <div className="w-full lg:w-auto pt-5 md:pt-0 lg:py-0 col-span-1 order-2 lg:order-1">
              <p className="text-md text-left font-medium text-white">
                Pakistan 1<sup className="text-xs lowercase">st</sup> AI Powered
              </p>
              <h1 className="!my-0 text-3xl sm:text-[45px] md:text-6xl lg:text-[59px] font-semibold text-left text-white">
                SMARTEST COURIER <br />
                <span className="text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                  NETWORK
                </span>
              </h1>
              <p className="!mt-2 text-left sm:max-w-md text-xs md:mx-0 md:text-md lg:text-sm xl:text-[15px] text-white max-w-2xl lg:mx-0">
                Lionex is Pakistan's first AI-powered courier. Fast, reliable
                deliveries with smart automation, real-time tracking, and full
                WhatsApp support for modern eCommerce.
              </p>
              <div className="flex mt-5 flex-col items-start md:flex-row gap-4 md:items-center justify-start lg:justify-start">
                <ThmBtn
                  href="https://youtu.be/4at6J81fG5o"
                  icon="icon-play-button mt-1 ml-1"
                >
                  Watch Intro
                </ThmBtn>
                <div className="flex gap-1 text-sm px-0 md:px-4 py-2 rounded-sm shadow-lg">
                  <img
                    src="/assets/images/resources/star.webp"
                    alt="Star"
                    className="w-4 h-4"
                  />
                  <img
                    src="/assets/images/resources/star.webp"
                    alt="Star"
                    className="w-4 h-4"
                  />
                  <img
                    src="/assets/images/resources/star.webp"
                    alt="Star"
                    className="w-4 h-4"
                  />
                  <img
                    src="/assets/images/resources/star.webp"
                    alt="Star"
                    className="w-4 h-4"
                  />
                  <img
                    src="/assets/images/resources/star.webp"
                    alt="Star"
                    className="w-4 h-4"
                  />
                  <span className="font-semibold text-white">(1K+)</span>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 lg:col-span-1 hidden items-center justify-center relative h-[60vh] lg:h-full order-1 lg:order-2 lg:flex z-50"
              style={{ backgroundImage: `url${heroBgImage}` }}
            >
              <img
                className="w-[50%] h-[50%] md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[50%] xl:w-[70%] xl:h-[70%] 2xl:w-[75%] 2xl:h-[75%] object-contain relative z-40 animate-[aiFloat_3s_ease-in-out_infinite]"
                src={AiImage}
                alt="AI Robot"
              />
            </div>
          </div>
          <div className="absolute hidden bottom-[-90px] left-1/2 z-[500] lg:flex -translate-x-1/2 w-[92%] flex-wrap items-center justify-center gap-3 rounded-sm bg-white p-3 shadow-lg sm:w-[88%] sm:gap-4 sm:p-4 lg:w-[80%] lg:flex-nowrap lg:justify-around opacity-[92%]">
            <img
              src="/assets/images/resources/Leopards Logo.png"
              alt="Client"
              className="h-20 w-[calc(50%-0.375rem)] min-w-[120px] flex-1 border-[2px] border-red-700 rounded-bl-[32px] rounded-tr-[32px] object-cover sm:h-24 md:h-28 lg:h-[130px] lg:w-[130px] lg:flex-none lg:rounded-bl-[50px] lg:rounded-tr-[50px]"
            />
            <img
              src="/assets/images/resources/M&P Courier.png"
              alt="Client"
              className="h-20 w-[calc(50%-0.375rem)] min-w-[120px] flex-1 border-[2px] border-red-700 rounded-bl-[32px] rounded-tr-[32px] object-cover sm:h-24 md:h-28 lg:h-[130px] lg:w-[130px] lg:flex-none lg:rounded-bl-[50px] lg:rounded-tr-[50px]"
            />
            <img
              src="/assets/images/resources/Trax.jpg"
              alt="Client"
              className="h-20 w-[calc(50%-0.375rem)] min-w-[120px] flex-1 border-[2px] border-red-700 rounded-bl-[32px] rounded-tr-[32px] object-cover sm:h-24 md:h-28 lg:h-[130px] lg:w-[130px] lg:flex-none lg:rounded-bl-[50px] lg:rounded-tr-[50px]"
            />
            <img
              src="/assets/images/resources/TCS Courier.png"
              alt="Client"
              className="h-20 w-[calc(50%-0.375rem)] min-w-[120px] flex-1 border-[2px] border-red-700 rounded-bl-[32px] rounded-tr-[32px] object-cover sm:h-24 md:h-28 lg:h-[130px] lg:w-[130px] lg:flex-none lg:rounded-bl-[50px] lg:rounded-tr-[50px]"
            />
            <img
              src="/assets/images/resources/Barq Raftar.webp"
              alt="Client"
              className="h-20 w-[calc(50%-0.375rem)] min-w-[120px] flex-1 border-[2px] border-red-700 rounded-bl-[32px] rounded-tr-[32px] object-cover sm:h-24 md:h-28 lg:h-[130px] lg:w-[130px] lg:flex-none lg:rounded-bl-[50px] lg:rounded-tr-[50px]"
            />
          </div>
        </section>
      </div>
      <AboutSection />
      <ChooseSection />
      <BusinessGrowthSection />
      <SlidingTextSection />
      <CoverageFlexibilitySection />
      <ServicesCarousel />
      <SkillsSection />
      <TestimonialsGrid />
      <WhyChooseSection />
      <ProcessSteps />
      <CounterStatsSection />
      <FAQSection />
      <BlogPreviews />
    </>
  );
};

export default Home;

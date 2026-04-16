import { Link } from "react-router-dom";
import ThmBtn from "./thmBtn";
import bgImage from "../assets/images/shapes/site-footer-shape-bg.webp";
import footerLogo from "../assets/images/resources/Just White PNG-10.webp";
import {Phone,Mail,EarthLock} from 'lucide-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faPinterestP, faInstagram, faWhatsapp, faTiktok} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="relative mt-10 block overflow-hidden bg-[#062f3a] z-[1]">
        <div
          className="absolute inset-0 -z-[1] bg-cover bg-center bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="relative block">
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <div className="relative flex flex-wrap items-center justify-center gap-6 px-0 pb-[42px] pt-[74px] text-center xl:justify-between xl:gap-8 xl:px-0 xl:pb-16 xl:pt-24 xl:text-left">
                  <h3 className="text-[25px] font-bold leading-[1.3] text-white xl:text-[35px]">
                    Subscribe To Our Newsletter To<br />
                    Get Latest Update
                  </h3>
                  <form
                    className="relative flex w-full max-w-[550px] flex-col items-center gap-[10px] xl:flex-row"
                    action="https://dreamlayout.mnsithub.com/html/tanspot/main-html/assets/inc/sendemail.php"
                    method="POST"
                  >
                    <div className="relative block w-full max-w-[353px]">
                      <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        className="h-[45px] w-full rounded-[6px] border-none bg-white/10 px-5 text-[16px] font-normal text-white/80 outline-none placeholder:text-white/80"
                      />
                    </div>
                    <ThmBtn
                      type="submit"
                      className="border-none before:bg-[#062f3a] after:bg-[#062f3a] hover:text-white hover:[&>span]:bg-white hover:[&>span]:text-[#f78134]"
                    >
                      Subscribe
                    </ThmBtn>
                    <div className="result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              <div
                className="md:col-span-1 xl:col-span-1"
                data-wow-delay="100ms"
              >
                <div className="relative mt-[5px] block">
                  <div className="relative block">
                    <Link to="/">
                      <img
                        src={footerLogo}
                        alt=""
                        className="w-[130px]"
                      />
                    </Link>
                  </div>
                  <p className="mb-[22px] mt-2 text-white/80">
                    Secure other greater pleasures, or else he endures pains to
                    avoid worse pains selection
                  </p>
                  <div className="mt-5 flex items-center border-t border-dashed border-white/20 pt-5">
                    <a href="https://www.facebook.com/share/1As4M3nSQv/" target="__blank" className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/15 text-[16px] text-white transition-all duration-500 ease-[ease] hover:bg-[#f78134]">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://wa.me/923054447156" target="__blank" className="relative ml-[10px] flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/15 text-[16px] text-white transition-all duration-500 ease-[ease] hover:bg-[#f78134]">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://www.instagram.com/lionex.courier?igsh=ZGEwdmRvaW04eDM2" target="__blank" className="relative ml-[10px] flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/15 text-[16px] text-white transition-all duration-500 ease-[ease] hover:bg-[#f78134]">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.tiktok.com/@lionex.courier?_r=1&_t=ZS-94qf3RUID2d" target="__blank" className="relative ml-[10px] flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/15 text-[16px] text-white transition-all duration-500 ease-[ease] hover:bg-[#f78134]">
                      <FontAwesomeIcon icon={faTiktok} />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="mb-[34px] mt-[42px] md:mb-0 md:mt-0 xl:ml-20 xl:mt-0"
                data-wow-delay="200ms"
              >
                <div className="relative block">
                  <div className="relative mb-2 sm:mb-[25px] block">
                    <h3 className="text-[24px] font-semibold capitalize leading-[34px] text-white">Quick Links</h3>
                  </div>
                  <div className="relative block">
                    <ul className="relative block">
                      <li className="block">
                        <Link to="/about" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">About Us</Link>
                      </li>
                      <li className="mt-3 block">
                        <Link to="/projects" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">Portfolio</Link>
                      </li>
                      <li className="mt-3 block">
                        <Link to="/faq" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">Help & FAQs</Link>
                      </li>
                      <li className="mt-3 block">
                        <Link to="/blog" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">Blog</Link>
                      </li>
                      <li className="mt-3 block">
                        <Link to="/contact" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="mb-[34px] md:mb-0 xl:ml-[70px]"
                data-wow-delay="300ms"
              >
                <div className="relative block">
                  <div className="relative mb-2 sm:mb-[25px] block">
                    <h3 className="text-[24px] font-semibold capitalize leading-[34px] text-white">Our Services</h3>
                  </div>
                  <ul className="relative block">
                    <li className="block">
                      <Link to="/nation-wide" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">
                        Nationwide Delivery
                      </Link>
                    </li>
                    <li className="mt-3 block">
                      <Link to="/cash-on-delivery" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">Cash On Delivery</Link>
                    </li>
                    <li className="mt-3 block">
                      <Link to="/ecommerce-order-fullfillment" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">E-Commerce Delivery</Link>
                    </li>
                    <li className="mt-3 block">
                      <Link to="/3pl-services" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">3PL Fullfillment</Link>
                    </li>
                    <li className="mt-3 block">
                      <Link to="/smart-ai-service" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">AI Automation</Link>
                    </li>
                    <li className="mt-3 block">
                      <Link to="/services" className="capitalize text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">More</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="xl:ml-[70px]"
                data-wow-delay="400ms"
              >
                <div className="relative block">
                  <div className="relative mb-2 sm:mb-[25px] block">
                    <h3 className="text-[24px] font-semibold capitalize leading-[34px] text-white">Official info</h3>
                  </div>
                  <ul className="relative block">
                    <li className="group relative flex items-center gap-[13px]">
                      <div className="relative flex h-[35px] w-[35px] items-center justify-center rounded-[6px] bg-white/15 transition-all duration-500 ease-[ease] group-hover:bg-[#f78134]">
                        <span className="icon-phone-call relative inline-block text-[16px] text-white transition-all duration-500 ease-[ease]"> </span>
                      </div>
                      <div className="relative block flex-1">
                        <p className="text-white/80"><a href="tel:+923054447156" className="text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">03054447156</a></p>
                      </div>
                    </li>
                    <li className="group relative mt-[14px] flex items-center gap-[13px]">
                      <div className="relative flex h-[35px] w-[35px] items-center justify-center rounded-[6px] bg-white/15 transition-all duration-500 ease-[ease] group-hover:bg-[#f78134]">
                        <span className="icon-email relative inline-block text-[16px] text-white transition-all duration-500 ease-[ease]"></span>
                      </div>
                      <div className="relative block flex-1">
                        <p className="text-white/80">
                          <a href="mailto:hello@lionex.pk" className="text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">hello@lionex.pk</a>
                        </p>
                      </div>
                    </li>
                    <li className="group relative mt-[14px] flex items-center gap-[13px]">
                      <div className="relative flex h-[35px] w-[35px] items-center justify-center rounded-[6px] bg-white/15 transition-all duration-500 ease-[ease] group-hover:bg-[#f78134]">
                        <span className="icon-location1 relative inline-block text-[16px] text-white transition-all duration-500 ease-[ease]"> </span>
                      </div>
                      <div className="relative block flex-1">
                        <p className="text-white/80">1003F DHA Phase 5 Lahore</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative block border-t border-dashed border-white/20">
          <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-wrap items-center justify-between px-0 pb-[25px] pt-[26px] text-center max-[1199px]:flex-col">
              <p className="mb-[10px] text-white/80 max-[1199px]:mb-[10px] xl:mb-0">
                © Copywright 2026 by{" "}
                <a href="https://lionexcourier.com/" className="font-semibold text-[#f78134] transition-all duration-500 ease-[ease] hover:text-white">LionEx Courier PVT LTD</a> All
                Rights Reserved.
              </p>
              <ul className="flex flex-col items-center max-[1199px]:gap-[10px] xl:flex-row">
                <li className="block">
                  <Link to="/contact" className="flex items-center text-[16px] text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">Support</Link>
                </li>
                <li className="block xl:ml-[30px]">
                  <Link to="/about" className="flex items-center text-[16px] text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">Terms and Condition</Link>
                </li>
                <li className="block xl:ml-[30px]">
                  <Link to="/about" className="flex items-center text-[16px] text-white/80 transition-all duration-500 ease-[ease] hover:text-[#f78134]">Privacy and Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;

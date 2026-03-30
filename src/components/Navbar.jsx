import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/images/resources/Robot Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMobileNavState = (event) => {
      setMobileNavOpen(Boolean(event.detail?.open));
    };

    window.addEventListener("lionex-mobile-nav-state", handleMobileNavState);

    return () => {
      window.removeEventListener("lionex-mobile-nav-state", handleMobileNavState);
    };
  }, []);

  const toggleMobileNav = () => {
    window.dispatchEvent(new CustomEvent("lionex-mobile-nav-toggle"));
  };

  const toggleInfoSidebar = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.dispatchEvent(new CustomEvent("lionex-info-sidebar-toggle"));
  };

  const desktopLinkClass = (isActive) =>
    `relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#f78134] after:transition-all after:duration-300 after:content-[''] ${
      isActive
        ? "after:w-full"
        : "hover:text-lionex-primary after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-[calc(100%-24px)] -translate-x-1/2 rounded-sm border border-gray-300 bg-white/95 shadow-lg transition-all duration-300 backdrop-blur-md sm:w-[90%] sm:max-w-[90%] ${scrolled ? "shadow-2xl ring-1 ring-gray-100/50" : ""}`}
    >
      <nav className="flex w-full max-w-full flex-wrap items-center justify-between gap-y-2 px-4 py-2 sm:px-[30px] sm:py-[7px]">
        {/* Logo */}
        <Link to="/" className="min-w-0 flex-shrink">
          <img
            src={logo}
            alt="Lionex"
            className="h-8 w-auto max-w-full sm:h-9 lg:h-9"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex 
        gap-5 xl:gap-7
        items-center 
        font-medium text-gray-700 text-sm">
          <li>
            <Link
              to="/"
              className={desktopLinkClass(pathname === "/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={desktopLinkClass(pathname === "/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={desktopLinkClass(pathname === "/contact")}
            >
              Contact
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <span
              className={desktopLinkClass(
                [
                  "/nation-wide",
                  "/cash-on-delivery",
                  "/ecommerce-order-fullfillment",
                  "/3pl-services",
                ].includes(pathname)
              ) + " flex cursor-pointer items-center gap-1"}
            >
              Services
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-md rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
              <li>
                <Link
                  to="/nation-wide"
                  className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 hover:text-lionex-primary transition-colors border-b border-gray-50 last:border-b-0"
                >
                  Nationwide Delivery
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  to="/cash-on-delivery"
                  className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 hover:text-lionex-primary transition-colors border-b border-gray-50 last:border-b-0"
                >
                  Cash On Delivery
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  to="/ecommerce-order-fullfillment"
                  className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 hover:text-lionex-primary transition-colors border-b border-gray-50 last:border-b-0"
                >
                  E-Commerce Delivery
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  to="/3pl-services"
                  className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 hover:text-lionex-primary transition-colors border-b border-gray-50 last:border-b-0"
                >
                  3PL Fullfillment
                  <ChevronRight size={14} />
                </Link>
              </li>
            </ul>
          </li>

          {/* More Dropdown */}
          <li className="relative group">
            <span
              className={desktopLinkClass(
                [
                  "/rateCalculator",
                  "/invoice",
                  "/smart-ai-service",
                  "/blog",
                  "/faq",
                  "/testimonials",
                ].includes(pathname)
              ) + " flex cursor-pointer items-center gap-1"}
            >
              More
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-md rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
              <li>
                <Link
                  to="/rateCalculator"
                  className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 hover:text-lionex-primary transition-colors border-b border-gray-50 last:border-b-0"
                >
                  Rate Calculator
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-ai-service"
                  className="flex items-center justify-between px-6 py-4 hover:text-lionex-primary transition-colors border-b border-gray-50 last:border-b-0"
                >
                  AI Automation
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 hover:text-lionex-primary transition-colors border-b border-gray-50 last:border-b-0"
                >
                  Blog
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 hover:text-lionex-primary transition-colors border-b border-gray-50 last:border-b-0"
                >
                  FAQ's
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="flex items-center justify-between px-6 py-4 hover:bg-orange-50 hover:text-lionex-primary transition-colors"
                >
                  Testimonials
                  <ChevronRight size={14} />
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Search & Mobile Menu */}
        <div className="flex shrink-0 items-center gap-4 lg:hidden md:ml-8">
          <button
            type="button"
            onClick={toggleMobileNav}
            className="mobile-nav__toggler cursor-pointer text-[#6A6C6E] transition-all duration-500 hover:text-[#062f3a] xl:hidden"
          >
            {mobileNavOpen ? <X size={20} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden min-w-0 flex-wrap items-center justify-end gap-3 lg:flex">
          <div className="main-menu__btn-box flex min-w-0 flex-wrap justify-end gap-2">
            <Link
            to="/tracking"
            className="shrink-0 px-5 py-2 bg-green-500 text-sm text-white transition-all duration-300 hover:bg-green-600 group relative z-[1] inline-flex cursor-pointer items-center gap-[7px] overflow-hidden rounded-sm border-0 align-middle text-[14px] font-normal capitalize leading-[17px] outline-none ease-linear appearance-none before:absolute before:left-0 before:top-0 before:-z-[1] before:h-0 before:w-1/2 before:bg-[#062f3a] before:opacity-0 before:invisible before:content-[''] before:transition-all before:duration-[400ms] before:ease-in-out after:absolute after:bottom-0 after:right-0 after:-z-[1] after:h-0 after:w-1/2 after:bg-[#062f3a] after:opacity-0 after:invisible after:content-[''] after:transition-all after:duration-[400ms] after:ease-in-out hover:text-white hover:before:h-full hover:before:w-full hover:before:visible hover:before:opacity-100 hover:after:h-full hover:after:w-full hover:after:visible hover:after:opacity-100"
          >
            <img
              src="/assets/images/resources/Tracking Portal PNG Logo.webp"
              alt="Track"
              className="w-auto h-5"
            />
            Live Track
          </Link>
          <Link
            to="https://portal.lionexcourier.com/login"
            className="shrink-0 text-sm group relative z-[1] inline-flex cursor-pointer items-center gap-[7px] overflow-hidden rounded-sm border-0 bg-[#f78134] pb-[5px] pl-[15px] pr-[8px] pt-[5px] align-middle text-[14px] font-normal capitalize leading-[17px] text-white outline-none transition-all duration-500 ease-linear appearance-none before:absolute before:left-0 before:top-0 before:-z-[1] before:h-0 before:w-1/2 before:bg-[#062f3a] before:opacity-0 before:invisible before:content-[''] before:transition-all before:duration-[400ms] before:ease-in-out after:absolute after:bottom-0 after:right-0 after:-z-[1] after:h-0 after:w-1/2 after:bg-[#062f3a] after:opacity-0 after:invisible after:content-[''] after:transition-all after:duration-[400ms] after:ease-in-out hover:text-white hover:before:h-full hover:before:w-full hover:before:visible hover:before:opacity-100 hover:after:h-full hover:after:w-full hover:after:visible hover:after:opacity-100"
          >
            <img
              src="/assets/images/resources/My Account Portal PNG Logo.webp"
              alt="Account"
              className="w-5 h-5"
            />
            My Account
          </Link>
          </div>
          
          <div className="relative block shrink-0 main-menu__nav-sidebar-icon">
          <a
            className="group relative flex h-[45px] w-[45px] flex-col items-end justify-center rounded-full pr-[11px] transition-all duration-500 ease-[ease] navSidebar-button"
            href="#"
            onClick={toggleInfoSidebar}
          >
            <span className="relative block h-[3px] w-[28px] rounded-[6px] bg-gray-500 transition-all duration-500 ease-[ease] icon-dots-menu-one group-hover:w-[18px]"></span>
            <span className="relative right-[4px] my-[5px] block h-[3px] w-[28px] rounded-[6px] bg-gray-500 transition-all duration-500 ease-[ease] icon-dots-menu-two group-hover:right-0 group-hover:w-[24px]"></span>
            <span className="relative block h-[3px] w-[28px] rounded-[6px] bg-gray-500 transition-all duration-500 ease-[ease] icon-dots-menu-three"></span>
          </a>
        </div>
        </div>

        
        
      </nav>


    </header>
  );
};

export default Navbar;

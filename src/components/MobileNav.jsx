import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThmBtn from "./thmBtn";
import footerLogo from "../assets/images/resources/Just White PNG-10.webp";
import trackingPortalLogo from "../assets/images/resources/Tracking Portal PNG Logo.webp";
import accountPortalLogo from "../assets/images/resources/My Account Portal PNG Logo.webp";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  {
    label: "Services",
    children: [
      { label: "Nationwide Delivery", to: "/nation-wide" },
      { label: "Cash On Delivery", to: "/cash-on-delivery" },
      { label: "E-Commerce Delivery", to: "/ecommerce-order-fullfillment" },
      { label: "3PL Fullfillment", to: "/3pl-services" },
      { label: "More", to: "/services" },
    ],
  },
  {
    label: "More",
    children: [
      { label: "Rate Calculator", to: "/rateCalculator" },
      { label: "AI Automation", to: "/smart-ai-service" },
      { label: "Blog", to: "/blog" },
      { label: "FAQ's", to: "/faq" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const handleToggle = (event) => {
      const nextOpen =
        typeof event.detail?.open === "boolean" ? event.detail.open : undefined;

      if (typeof nextOpen === "boolean") {
        setIsOpen(nextOpen);
        if (!nextOpen) setExpandedIndex(null);
        return;
      }

      setIsOpen((prev) => {
        const updated = !prev;
        if (!updated) setExpandedIndex(null);
        return updated;
      });
    };

    const handleClose = () => {
      setIsOpen(false);
      setExpandedIndex(null);
    };

    window.addEventListener("lionex-mobile-nav-toggle", handleToggle);
    window.addEventListener("lionex-mobile-nav-close", handleClose);

    return () => {
      window.removeEventListener("lionex-mobile-nav-toggle", handleToggle);
      window.removeEventListener("lionex-mobile-nav-close", handleClose);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("lionex-mobile-nav-state", { detail: { open: isOpen } })
    );
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeNav = () => {
    setIsOpen(false);
    setExpandedIndex(null);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[999] h-screen w-screen origin-left transition-all duration-300 ${
        isOpen
          ? "visible translate-x-0"
          : "invisible -translate-x-full"
      } xl:hidden`}
    >
      <div
        className={`absolute inset-0 cursor-pointer bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={closeNav}
      ></div>

      <div
        className={`relative z-10 h-full w-full max-w-[330px] overflow-y-auto bg-[#062f3a] px-[15px] pb-[30px] pt-[30px] transition-all duration-300 ${
          isOpen ? "visible translate-x-0 opacity-100 delay-100" : "invisible -translate-x-full opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={closeNav}
          className="absolute right-[15px] top-5 text-[18px] text-white"
        >
          <i className="fa fa-times"></i>
        </button>

        <div className="mb-10 flex">
          <Link to="/" aria-label="logo image" onClick={closeNav}>
            <img
              src={footerLogo}
              width="140"
              alt=""
            />
          </Link>
        </div>

        <div className="border-y border-white/10">
          <ul className="m-0 list-none p-0">
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className={index !== menuItems.length - 1 ? "border-b border-white/10" : ""}
              >
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedIndex(expandedIndex === index ? null : index)
                        }
                        className={`flex h-10 flex-1 items-center justify-between text-left font-['Rubik',sans-serif] text-[15px] font-medium text-white transition-all duration-500 ${
                          expandedIndex === index ? "text-[#f78134]" : ""
                        }`}
                      >
                        <span>{item.label}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedIndex(expandedIndex === index ? null : index)
                        }
                        className={`flex h-[30px] w-[30px] items-center justify-center bg-[#f78134] text-white transition-all duration-500 ${
                          expandedIndex === index
                            ? "rotate-0 bg-[#062f3a] text-[#f78134]"
                            : "-rotate-90"
                        }`}
                      >
                        <i className="fa fa-angle-down"></i>
                      </button>
                    </div>

                    <ul
                      className={`ml-2 overflow-hidden border-t border-white/10 transition-all duration-300 ${
                        expandedIndex === index ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      {item.children.map((child, childIndex) => (
                        <li
                          key={child.label}
                          className={
                            childIndex !== item.children.length - 1
                              ? "border-b border-white/10"
                              : ""
                          }
                        >
                          <Link
                            to={child.to}
                            onClick={closeNav}
                            className="flex h-10 items-center justify-between font-['Rubik',sans-serif] text-[15px] font-medium text-white transition-all duration-500 hover:text-[#f78134]"
                          >
                            <span>{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    onClick={closeNav}
                    className="flex h-10 items-center justify-between font-['Rubik',sans-serif] text-[15px] font-medium text-white transition-all duration-500 hover:text-[#f78134]"
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="my-[18px] flex flex-wrap gap-[10px]">
          <Link
            to="/tracking"
            className="shrink-0 px-5 py-2 bg-green-500 text-sm text-white transition-all duration-300 hover:bg-green-600 group relative z-[1] inline-flex cursor-pointer items-center gap-[7px] overflow-hidden rounded-sm border-0 align-middle text-[14px] font-normal capitalize leading-[17px] outline-none ease-linear appearance-none before:absolute before:left-0 before:top-0 before:-z-[1] before:h-0 before:w-1/2 before:bg-[#062f3a] before:opacity-0 before:invisible before:content-[''] before:transition-all before:duration-[400ms] before:ease-in-out after:absolute after:bottom-0 after:right-0 after:-z-[1] after:h-0 after:w-1/2 after:bg-[#062f3a] after:opacity-0 after:invisible after:content-[''] after:transition-all after:duration-[400ms] after:ease-in-out hover:text-white hover:before:h-full hover:before:w-full hover:before:visible hover:before:opacity-100 hover:after:h-full hover:after:w-full hover:after:visible hover:after:opacity-100"
          >
            <img
              src={trackingPortalLogo}
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
              src={accountPortalLogo}
              alt="Account"
              className="w-5 h-5"
            />
            My Account
          </Link>
        </div>

        <ul className="my-5 list-none">
          <li className="flex items-center text-[14px] font-medium text-white">
            <i className="fa fa-envelope mr-3"></i>
            <a
              href="mailto:hello@lionex.pk"
              className="text-white transition-all duration-500 hover:text-[#f78134]"
            >
              hello@lionex.pk
            </a>
          </li>
          <li className="mt-[15px] flex items-center text-[14px] font-medium text-white">
            <i className="fas fa-phone mr-3"></i>
            <a
              href="tel:+923054447156"
              className="text-white transition-all duration-500 hover:text-[#f78134]"
            >
              03054447156
            </a>
          </li>
        </ul>

        <div className="mb-[30px] flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="text-[16px] text-white transition-all duration-500 hover:text-[#f78134]"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="ml-[30px] text-[16px] text-white transition-all duration-500 hover:text-[#f78134]"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="#"
              className="ml-[30px] text-[16px] text-white transition-all duration-500 hover:text-[#f78134]"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a
              href="#"
              className="ml-[30px] text-[16px] text-white transition-all duration-500 hover:text-[#f78134]"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

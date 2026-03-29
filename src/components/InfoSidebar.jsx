import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThmBtn from "./thmBtn";

const InfoSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = (event) => {
      const nextOpen =
        typeof event.detail?.open === "boolean" ? event.detail.open : undefined;

      if (typeof nextOpen === "boolean") {
        setIsOpen(nextOpen);
        return;
      }

      setIsOpen((prev) => !prev);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    window.addEventListener("lionex-info-sidebar-toggle", handleToggle);
    window.addEventListener("lionex-info-sidebar-close", handleClose);

    return () => {
      window.removeEventListener("lionex-info-sidebar-toggle", handleToggle);
      window.removeEventListener("lionex-info-sidebar-close", handleClose);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("lionex-info-sidebar-state", { detail: { open: isOpen } })
    );
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fixed inset-0 z-[99999] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black transition-all duration-[800ms] ${
          isOpen ? "visible opacity-80" : "invisible opacity-0 delay-[800ms]"
        }`}
        onClick={closeSidebar}
      ></div>

      <div
        className={`fixed bottom-0 left-0 top-0 z-[999999] w-full max-w-[360px] overflow-y-auto border-r-[5px] border-r-[rgba(255,255,255,0.5)] bg-[#062f3a] transition-all duration-700 ease-[cubic-bezier(0.9,0.03,0,0.96)] ${
          isOpen ? "visible left-0 opacity-100 delay-[400ms]" : "invisible -left-full opacity-0 delay-[600ms]"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={`relative px-[30px] py-[70px] transition-all duration-1000 ${
            isOpen ? "visible top-0 opacity-100 delay-[1200ms]" : "invisible top-[150px] opacity-0 delay-[300ms]"
          }`}
        >
          <div className="absolute right-0 top-0 p-[25px]">
            <button
              type="button"
              onClick={closeSidebar}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white text-[16px] font-normal text-white transition-all duration-500 hover:border-[#f78134] hover:text-[#f78134]"
            >
              X
            </button>
          </div>

          <div className="content-inner">
            <div className="relative mb-[30px] max-w-[172px]">
              <Link to="/" onClick={closeSidebar}>
                <img
                  src="/assets/images/resources/logo-3.png"
                  alt=""
                  className="w-[100px]"
                />
              </Link>
            </div>

            <h4 className="mb-[15px] block font-['Rubik',sans-serif] text-[20px] font-medium uppercase leading-[30px] tracking-[0.05em] text-white">
              About Us
            </h4>
            <div className="mb-[30px] pr-[15px]">
              <p className="text-[16px] leading-[30px] text-white">
                Lionex is Pakistan&apos;s first AI powered ecommerce courier
                solution helping online businesses manage orders, shipping,
                tracking, and logistics with smart automation, making deliveries
                faster, reliable, and efficient nationwide.
              </p>
            </div>

            <div className="form-inner">
              <h4 className="mb-[15px] block font-['Rubik',sans-serif] text-[20px] font-medium uppercase leading-[30px] tracking-[0.05em] text-white">
                Get a free quote
              </h4>
              <form className="contact-form-validated">
                <div className="relative mb-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="block h-[50px] w-full rounded-[6px] border-none px-5 py-[10px] text-[15px] text-[#6c7176] outline-none transition-all duration-500"
                  />
                </div>
                <div className="relative mb-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block h-[50px] w-full rounded-[6px] border-none px-5 py-[10px] text-[15px] text-[#6c7176] outline-none transition-all duration-500"
                  />
                </div>
                <div className="relative mb-5">
                  <textarea
                    name="message"
                    placeholder="Message..."
                    className="block h-[120px] w-full resize-none rounded-[6px] border-none px-5 py-[10px] text-[15px] text-[#6c7176] outline-none transition-all duration-500"
                  ></textarea>
                </div>
                <div className="relative mb-0">
                  <ThmBtn
                    type="submit"
                    className="hover:text-[#062f3a] hover:before:bg-white hover:after:bg-white"
                  >
                    Submit Now
                  </ThmBtn>
                </div>
              </form>
            </div>

            <div className="relative block pt-[43px]">
              <h4 className="mb-[15px] block font-['Rubik',sans-serif] text-[20px] font-medium uppercase leading-[30px] tracking-[0.05em] text-white">
                Contact Info
              </h4>
              <ul className="block pb-[22px]">
                <li className="block text-white">
                  <span className="mr-[6px] inline-block text-[#f78134]">
                    <i className="icon-location1"></i>
                  </span>
                  88 broklyn street, New York
                </li>
                <li className="mt-[15px] block text-white">
                  <span className="mr-[6px] inline-block text-[#f78134]">
                    <i className="icon-phone-call"></i>
                  </span>
                  <a
                    href="tel:+923054447156"
                    className="text-white transition-all duration-500 hover:text-[#f78134]"
                  >
                    03054447156
                  </a>
                </li>
                <li className="mt-[15px] block text-white">
                  <span className="mr-[6px] inline-block text-[#f78134]">
                    <i className="icon-email"></i>
                  </span>
                  <a
                    href="mailto:hello@lionex.pk"
                    className="text-white transition-all duration-500 hover:text-[#f78134]"
                  >
                    hello@lionex.pk
                  </a>
                </li>
              </ul>
            </div>

            <div className="thm-social-link1 relative block">
              <ul className="social-box list-unstyled">
                <li className="mr-[6px] inline-block last:mr-0">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] text-[15px] text-white transition-all duration-500 before:absolute before:inset-0 before:-z-[1] before:scale-50 before:rounded-full before:bg-[#f78134] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:scale-100 hover:before:opacity-100"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mr-[6px] inline-block last:mr-0">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] text-[15px] text-white transition-all duration-500 before:absolute before:inset-0 before:-z-[1] before:scale-50 before:rounded-full before:bg-[#f78134] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:scale-100 hover:before:opacity-100"
                  >
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mr-[6px] inline-block last:mr-0">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] text-[15px] text-white transition-all duration-500 before:absolute before:inset-0 before:-z-[1] before:scale-50 before:rounded-full before:bg-[#f78134] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:scale-100 hover:before:opacity-100"
                  >
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mr-[6px] inline-block last:mr-0">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] text-[15px] text-white transition-all duration-500 before:absolute before:inset-0 before:-z-[1] before:scale-50 before:rounded-full before:bg-[#f78134] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:scale-100 hover:before:opacity-100"
                  >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSidebar;

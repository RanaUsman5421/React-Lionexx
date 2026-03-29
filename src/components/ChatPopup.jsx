import { useEffect, useState } from "react";
import ThmBtn from "./thmBtn";
import Tooltip from "./Tooltip";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed bottom-[60px] left-[60px] z-[99] inline-block">
        <Tooltip />
      </div>

      <div
        className={`fixed bottom-0 left-0 z-[99999] w-[350px] rounded-[6px] rounded-bl-none rounded-br-none rounded-tl-none bg-[#062f3a] shadow-[0_0_30px_0_rgba(0,0,0,0.10)] transition-all duration-700 ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0"
        }`}
      >
        <div
          className={`absolute inset-0 ${isOpen ? "block" : "hidden"}`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="relative block px-[35px] pb-10 pt-8">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute left-0 top-[-55px] flex h-[55px] w-[60px] items-center justify-center rounded-[6px] rounded-bl-none rounded-br-none rounded-tl-none bg-[#f78134] text-[16px] text-white shadow-[0_0_20px_0_rgba(0,0,0,0.10)]"
          >
            <i className="fa fa-times"></i>
          </button>

          <div className="chat-form relative z-[1]">
            <p className="mb-10 block text-center text-[14px] leading-5 text-[rgba(255,255,255,0.70)]">
              Please fill out the form below and we will get back to you as soon
              as possible.
            </p>

            <form className="contact-form-validated">
              <div className="relative mb-5 block">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="block h-10 w-full rounded-[6px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] px-5 py-[10px] text-[13px] text-[rgba(255,255,255,0.70)] transition-all duration-500 outline-none placeholder:text-[rgba(255,255,255,0.70)]"
                />
              </div>

              <div className="relative mb-5 block">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="block h-10 w-full rounded-[6px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] px-5 py-[10px] text-[13px] text-[rgba(255,255,255,0.70)] transition-all duration-500 outline-none placeholder:text-[rgba(255,255,255,0.70)]"
                />
              </div>

              <div className="relative mb-5 block">
                <textarea
                  name="message"
                  placeholder="Your Text"
                  required
                  className="block h-[120px] w-full resize-none rounded-[6px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] px-5 py-[10px] text-[13px] text-[rgba(255,255,255,0.70)] transition-all duration-500 outline-none placeholder:text-[rgba(255,255,255,0.70)]"
                ></textarea>
              </div>

              <div className="relative mb-0 block">
                <ThmBtn
                  type="submit"
                  className="hover:text-[#f78134] hover:before:bg-white hover:after:bg-white hover:[&>span]:bg-[#f78134] hover:[&>span]:text-white"
                >
                  Submit Now
                </ThmBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPopup;

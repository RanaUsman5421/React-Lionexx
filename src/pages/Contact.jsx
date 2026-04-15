import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageShell from "../components/PageShell";
import ThmBtn from "../components/thmBtn";
import { faBriefcase, faEnvelope, faLocationDot, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { BriefcaseBusiness, Mail, MapPin, PhoneCall } from "lucide-react";

const contactCards = [
  {
    icon: faPhone,
    label: "Contact Us",
    content: (
      <>
        <h5>
          <a href="tel:+923054447156">03054447156</a>
        </h5>
        <h5>
          <a href="tel:+923054447156">03054447156</a>
        </h5>
      </>
    ),
  },
  {
    icon: faEnvelope,
    label: "Mail Us",
    content: (
      <>
        <h5>
          <a href="mailto:hello@lionex.pk">hello@lionex.pk</a>
        </h5>
        <h5>
          <a href="mailto:hello@lionex.pk">hello@lionex.pk</a>
        </h5>
      </>
    ),
  },
  {
    icon: faBriefcase,
    label: "Working Hours",
    content: (
      <h5>
        Wednesday - Sunday
        <br /> 7:00 AM - 5:00 PM
      </h5>
    ),
  },
  {
    icon: faLocationDot,
    label: "Our Office Location",
    content: <h5>1003F DHA Phase 5 <br /> Lahore Pakitan</h5>,
  },
];

const darkInputClasses =
  "block h-[60px] w-full rounded-[6px] border-none bg-white/[0.03] px-5 text-[14px] font-normal text-white/70 outline-none placeholder:text-white/70";

const Contact = () => {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Tell us about your delivery needs and we will respond quickly."
    >
      <section className="relative block py-8">
        <div className="mx-auto max-w-[1320px] px-[15px]">
          <div className="relative block rounded-[6px] bg-[#062f3a] px-[15px] py-[30px] md:px-[50px] md:py-[60px]">
            <div className="grid grid-cols-1 gap-y-[50px]">
              <div>
                <div className="relative block xl:ml-5 xl:mr-10">
                  <h3 className="mb-[10px] sm:mb-[26px] font-sans text-[25px] font-medium leading-[1.2] text-white md:text-[45px]">
                    Get A Free Quote
                  </h3>
                  <form
                    className="relative block"
                    action="https://dreamlayout.mnsithub.com/html/tanspot/main-html/assets/inc/sendemail.php"
                    method="POST"
                  >
                    <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
                      <div className="mb-[30px]">
                        <div className="relative block">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className={darkInputClasses}
                          />
                        </div>
                      </div>
                      <div className="mb-[30px]">
                        <div className="relative block">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className={darkInputClasses}
                          />
                        </div>
                      </div>
                      <div className="mb-[30px]">
                        <div className="relative block">
                          <input
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            required
                            className={darkInputClasses}
                          />
                        </div>
                      </div>
                      <div className="mb-[30px]">
                        <div className="relative block">
                          <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            required
                            className={darkInputClasses}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="relative mb-[30px] block h-[175px]">
                          <textarea
                            name="message"
                            placeholder="Messege"
                            required
                            className="relative block h-[175px] w-full rounded-[6px] border-none bg-white/[0.03] px-5 pb-[30px] pt-[15px] text-[14px] font-normal text-white/70 outline-none placeholder:text-white/70"
                          ></textarea>
                        </div>
                        <div className="relative flex justify-center">
                          <ThmBtn
                            type="submit"
                            className="border-none before:!bg-[#062f3a] after:!bg-[#062f3a]"
                          >
                            Send A Message
                          </ThmBtn>
                        </div>
                      </div>
                    </div>
                    <div className="result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative block px-0 py-5">
        <div className="px-[15px]">
          <div className="grid grid-cols-1 gap-y-5 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => (
              <div key={card.label}>
                <div className="group relative block rounded-[6px] bg-[#f2f3f5] px-[15px] pb-[41px] pt-10 text-center sm:px-[25px] md:px-5 xl:px-10">
                  <div className="relative z-[1] mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white">
                    <div className="absolute inset-0 -z-[1] scale-0 rounded-full bg-[#062f3a] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.62,0.21,0.45,1.52)] group-hover:scale-100"></div>
                    <FontAwesomeIcon icon={card.icon} className="relative inline-block text-[32px] text-[#062f3a] transition-all delay-100 duration-500 group-hover:scale-90 group-hover:text-white" />
                  </div>
                  <p className="mb-[5px] mt-5 text-[15px] leading-[30px] text-[#797f7d]">
                    {card.label}
                  </p>
                  <div className="space-y-0 font-sans text-[18px] font-semibold leading-7 text-[#062f3a]">
                    {card.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
};

export default Contact;

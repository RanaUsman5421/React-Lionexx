import React from "react";

const ThmBtn = ({
  children = "Read More",
  href,
  type = "button",
  className = "",
  icon,
  as,
  ...props
}) => {
  const Component = as || (href ? "a" : "button");
  const componentProps = href ? { href, ...props } : { type, ...props };
  const baseClasses =
    "group relative z-[1] inline-flex cursor-pointer items-center gap-[7px] overflow-hidden rounded-sm border-0 bg-[#f78134] pb-[5px] pl-[15px] pr-[8px] pt-[5px] align-middle text-[14px] font-normal capitalize leading-[17px] text-white outline-none transition-all duration-500 ease-linear appearance-none before:absolute before:left-0 before:top-0 before:-z-[1] before:h-0 before:w-1/2 before:bg-[#062f3a] before:opacity-0 before:invisible before:content-[''] before:transition-all before:duration-[400ms] before:ease-in-out after:absolute after:bottom-0 after:right-0 after:-z-[1] after:h-0 after:w-1/2 after:bg-[#062f3a] after:opacity-0 after:invisible after:content-[''] after:transition-all after:duration-[400ms] after:ease-in-out hover:text-white hover:before:h-full hover:before:w-full hover:before:visible hover:before:opacity-100 hover:after:h-full hover:after:w-full hover:after:visible hover:after:opacity-100";
  const iconWrapperClasses =
    "relative flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white text-[12px] text-[#062f3a] transition-all duration-500 ease-linear group-hover:bg-white group-hover:text-[#f78134]";
  const iconClasses =
    "relative inline-block h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[3px]";

  return (
    <Component
      className={`${baseClasses} ${className}`.trim()}
      {...componentProps}
    >
      {children}
      <span aria-hidden="true" className={iconWrapperClasses}>
        {icon ? (
          <span className={`${icon} ${iconClasses}`} />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={iconClasses}
          >
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        )}
      </span>
    </Component>
  );
};

export default ThmBtn;


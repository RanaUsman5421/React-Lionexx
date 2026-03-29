const PageShell = ({ title, subtitle, headerContent, children }) => {
  return (
    <>
      <section className="relative z-[1] block overflow-hidden bg-[#062f3a]">
        <div
          className="absolute inset-0 -z-[1] bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url('/assets/images/backgrounds/page-header-bg.jpg')",
          }}
        ></div>

        <div className="mx-auto flex justify-between w-full max-w-[1320px] px-10 sm:px-10 lg:px-16 xl:px-10 2xl:px-0">
          <div className="relative z-[15] block px-0 py-[80px] min-[768px]:py-[150px]">
            <h3 className="mb-[14px] text-[30px] font-semibold leading-[40px] text-white min-[768px]:text-[60px] min-[768px]:leading-[1em]">
              {title}
            </h3>

            <div className="relative block">
              <ul className="relative block">
                <li className="relative inline-block font-['Rubik',sans-serif] text-[16px] font-medium capitalize leading-[18px] text-white transition-all duration-500 ease-[ease]">
                  <a
                    href="/"
                    className="inline-block font-['Rubik',sans-serif] text-[16px] font-medium capitalize leading-[18px] text-white transition-all duration-500 ease-[ease] hover:text-[#f78134]"
                  >
                    Home
                  </a>
                </li>
                <li className="relative ml-[5px] inline-block font-['Rubik',sans-serif] text-[16px] font-medium capitalize leading-[18px] text-white transition-all duration-500 ease-[ease]">
                  <span className="fas fa-angle-right relative top-[1px] text-[16px] font-bold text-[#f78134]"></span>
                </li>
                <li className="relative ml-[5px] inline-block font-['Rubik',sans-serif] text-[16px] font-medium capitalize leading-[18px] text-white transition-all duration-500 ease-[ease]">
                  {subtitle || title}
                </li>
              </ul>
            </div>

            {headerContent ? (
              <div className="mt-6 max-w-[620px]">{headerContent}</div>
            ) : null}
          </div>
          <div className="absolute bottom-0 right-0 hidden min-[768px]:block">
            <img
              src="/assets/images/resources/page-header-img-1.png"
              alt=""
              className="w-[75%]"
            />
          </div>
        </div>
      </section>

      {children}
    </>
  );
};

export default PageShell;

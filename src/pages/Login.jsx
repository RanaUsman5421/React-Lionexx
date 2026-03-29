import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import ThmBtn from "../components/thmBtn";

const Login = () => {
  return (
    <PageShell title="Login" subtitle="Access your Lionex account.">
      <section className="relative z-[1] block bg-white px-0 pb-20 pt-[70px] min-[768px]:pb-[100px] min-[768px]:pt-24">
        <div className="mx-auto w-full max-w-[620px] px-4 sm:px-6 lg:px-8">
          <div className="relative block">
            <div className="relative block pb-[35px] text-center min-[611px]:pb-[60px]">
              <h2 className="text-[40px] font-bold capitalize leading-[1] min-[611px]:text-[60px]">
                Login Here
              </h2>
            </div>

            <form
              id="login-one__form"
              name="Login-one_form"
              action="#"
              method="post"
              className="relative block bg-white px-[15px] pb-[52px] pt-[60px] shadow-[0px_0px_80px_rgba(0,0,0,0.06)] min-[611px]:px-[50px]"
            >
              <div>
                <div className="relative mb-5 block">
                  <div className="relative block">
                    <input
                      type="email"
                      name="form_email"
                      id="formEmail"
                      placeholder="Email..."
                      required
                      className="h-[60px] w-full rounded-[6px] border border-black/10 bg-[#f5f5f5] px-[30px] text-[16px] font-normal text-[#062f3a] outline-none transition-all duration-500 ease-[ease] placeholder:text-[#6a6c6e] focus:border-[#f78134] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="relative mb-5 block">
                  <div className="relative block">
                    <input
                      type="password"
                      name="form_password"
                      id="formPassword"
                      placeholder="Password..."
                      required
                      className="h-[60px] w-full rounded-[6px] border border-black/10 bg-[#f5f5f5] px-[30px] text-[16px] font-normal text-[#062f3a] outline-none transition-all duration-500 ease-[ease] placeholder:text-[#6a6c6e] focus:border-[#f78134] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="relative mb-5 block">
                  <ThmBtn
                    type="submit"
                    className="flex w-full justify-center border-none"
                  >
                    Login Here
                  </ThmBtn>
                </div>

                <div className="relative flex items-center justify-between pt-6">
                  <div className="relative block min-h-[26px]">
                    <input type="checkbox" id="saveinfo" className="peer hidden" />
                    <label
                      htmlFor="saveinfo"
                      className="relative inline-block cursor-pointer pl-[25px] font-['Poppins',sans-serif] text-[14px] font-normal leading-[26px] text-[#6a6c6e] min-[611px]:text-[16px]"
                    >
                      <span className="absolute left-0 top-[5px] block h-4 w-4 cursor-pointer rounded-[6px] border border-[#e3e4ea] transition-all duration-300 ease-[ease] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-2 before:w-2 before:scale-0 before:rounded-[6px] before:bg-[#f78134] before:transition-all before:duration-300 before:ease-[ease] peer-checked:border-[#f78134] peer-checked:before:scale-100"></span>
                      Remember me
                    </label>
                  </div>

                  <div className="relative block">
                    <a
                      href="#"
                      className="font-['Poppins',sans-serif] text-[14px] font-normal leading-[26px] text-[#062f3a] transition-all duration-200 ease-linear hover:text-[#f78134] min-[611px]:text-[16px]"
                    >
                      Forget password?
                    </a>
                  </div>
                </div>

                <div className="relative block pt-[25px] text-center">
                  <p>
                    Not registered yet?{" "}
                    <Link to="/sign-up" className="font-medium text-[#f78134]">
                      Create an Account
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Login;

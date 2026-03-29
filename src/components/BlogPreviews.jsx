import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import ThmBtn from "./thmBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const BlogPreviews = () => {
  const [featuredPost, ...sidePosts] = blogPosts;

  return (
    <>
      <style>
        {`
          @keyframes l-r-move {
            0%, 100% { transform: translateX(0) rotate(180deg); }
            50% { transform: translateX(6px) rotate(180deg); }
          }

          @keyframes l-r-move-normal {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-6px); }
          }

          .blog-plane-left {
            animation: l-r-move 2s linear infinite;
          }

          .blog-plane-right {
            animation: l-r-move-normal 2s linear infinite;
          }
        `}
      </style>

      <section className="relative z-[1] block px-0 pb-[50px] pt-20 md:pb-20 md:pt-[100px]">
        <div className="mx-auto max-w-[1320px] px-[15px]">
          <div className="mb-[52px] text-center">
            <div className="relative mb-3 inline-flex flex-wrap items-center gap-[10px]">
                  <span className="block w-10 border border-dashed border-[#f78134]"></span>
                  <div className="absolute left-2 top-[-4px] rotate-180">
                    <FontAwesomeIcon icon={faPlane} className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"/>
                  </div>
                  
                  <h6 className="relative block  text-[18px] font-semibold uppercase leading-[18px] text-[#f78134]">
                    Blog & News
                  </h6>
                  <span className="block w-10 border border-dashed border-[#f78134]"></span>
                  <div className="absolute right-2 top-[-4px]">
                    <FontAwesomeIcon icon={faPlane} className="inline-block text-[14px] text-[#f78134] animate-[l-r-move_2s_linear_infinite]"/>
                  </div>
                </div>
            <h3 className="font-sans text-[34px] font-bold leading-[1.2] text-[#062f3a] md:text-[40px]">
              Latest News Directly <br />
              <span className="text-[#f78134]">From Our Blog</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2">
            <div>
              <article className="group relative mb-[30px] block rounded-[6px] bg-white p-[15px] pb-[30px] shadow-[0_10px_60px_rgba(0,0,0,0.07)] md:mx-auto md:max-w-[600px] xl:max-w-none">
                <div className="relative z-[1] block overflow-hidden rounded-[6px] before:absolute before:bottom-0 before:left-0 before:z-[1] before:h-full before:w-1/2 before:origin-left before:[transform:perspective(370px)_translateY(100%)] before:bg-black/70 before:opacity-0 before:transition-all before:duration-[900ms] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[1] after:h-full after:w-1/2 after:origin-top after:[transform:perspective(370px)_translateY(-100%)] after:bg-black/70 after:opacity-0 after:transition-all after:duration-[900ms] after:content-[''] group-hover:before:[transform:perspective(370px)_translateY(0%)] group-hover:before:opacity-100 group-hover:after:[transform:perspective(370px)_translateY(0%)] group-hover:after:opacity-100">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full rounded-[6px] transition-transform duration-1000 ease-in-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 z-[3] flex scale-0 items-center justify-center rotate-[-45deg] transition-all duration-[600ms] group-hover:rotate-0 group-hover:scale-100 [transition-delay:700ms]">
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[15px] text-[#f78134] transition-all duration-500 hover:bg-[#f78134] hover:text-white"
                    >
                      <i className="icon-plus"></i>
                    </Link>
                  </div>
                  <div className="absolute bottom-0 right-[-1px] z-[4]">
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center justify-center bg-[#f78134] px-[25px] py-[7px] pl-10 text-[18px] font-semibold text-white [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)] transition-all duration-500 hover:bg-white hover:text-[#f78134]"
                    >
                      {featuredPost.category}
                    </Link>
                  </div>
                </div>

                <div className="relative block px-[15px] pb-0 pt-[25px] sm:px-[25px] max-[767px]:px-0">
                  <ul className="relative flex items-center gap-[10px] min-[1200px]:gap-5">
                    <li>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="flex items-center gap-2 text-[15px] min-[1200px]:text-[16px] text-[#797f7d] transition-all duration-500 hover:text-[#f78134]"
                      >
                        <span className="fas fa-calendar-alt text-[16px] text-[#f78134]"></span>
                        {featuredPost.date}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="flex items-center gap-2 text-[15px] min-[1200px]:text-[16px] text-[#797f7d] transition-all duration-500 hover:text-[#f78134]"
                      >
                        <span className="fas fa-comments text-[16px] text-[#f78134]"></span>
                        Comment
                      </Link>
                    </li>
                  </ul>

                  <h3 className="mb-[25px] mt-[17px] font-sans text-[22px] font-semibold capitalize leading-8 text-[#062f3a] sm:text-[26px] sm:leading-9">
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="transition-all duration-500 hover:text-[#f78134]"
                    >
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <div className="relative flex flex-col items-baseline justify-between gap-[15px] sm:flex-row sm:flex-wrap sm:items-center">
                    <div className="relative flex items-center">
                      <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#f78134]">
                        <div className="relative flex h-[55px] w-[55px] items-center justify-center rounded-full">
                          <img
                            src={featuredPost.authorImage}
                            alt={featuredPost.author}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div className="relative ml-[15px] block">
                        <h5 className="font-sans text-[18px] font-semibold leading-[18px] text-[#062f3a]">
                          {featuredPost.author}
                        </h5>
                        <p className="text-[14px] font-medium leading-6 text-[#797f7d]">
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>

                    <div className="relative block">
                      <ThmBtn as={Link} to={`/blog/${featuredPost.id}`}>
                        Read More
                      </ThmBtn>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div>
              <div className="relative block">
                {sidePosts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative mb-[30px] block rounded-[6px] bg-white p-[15px] shadow-[0_10px_60px_rgba(0,0,0,0.07)] md:mx-auto md:max-w-[600px] xl:max-w-none xl:flex xl:flex-wrap xl:items-center xl:gap-[25px]"
                  >
                    <div className="relative z-[1] block overflow-hidden rounded-[6px] before:absolute before:bottom-0 before:left-0 before:z-[1] before:h-full before:w-1/2 before:origin-left before:[transform:perspective(370px)_translateY(100%)] before:bg-black/70 before:opacity-0 before:transition-all before:duration-[900ms] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[1] after:h-full after:w-1/2 after:origin-top after:[transform:perspective(370px)_translateY(-100%)] after:bg-black/70 after:opacity-0 after:transition-all after:duration-[900ms] after:content-[''] group-hover:before:[transform:perspective(370px)_translateY(0%)] group-hover:before:opacity-100 group-hover:after:[transform:perspective(370px)_translateY(0%)] group-hover:after:opacity-100 xl:max-w-[250px] xl:w-full">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full rounded-[6px] transition-transform duration-1000 ease-in-out group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 z-[3] flex scale-0 items-center justify-center rotate-[-45deg] transition-all duration-[600ms] group-hover:rotate-0 group-hover:scale-100 [transition-delay:700ms]">
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[15px] text-[#f78134] transition-all duration-500 hover:bg-[#f78134] hover:text-white"
                        >
                          <i className="icon-plus"></i>
                        </Link>
                      </div>
                      <div className="absolute bottom-0 right-[-1px] z-[4]">
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center justify-center bg-[#f78134] px-[25px] py-[7px] pl-10 text-[18px] font-semibold text-white [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)] transition-all duration-500 hover:bg-white hover:text-[#f78134]"
                        >
                          {post.category}
                        </Link>
                      </div>
                    </div>

                    <div className="relative block flex-1 px-0 pb-0 pt-[25px] max-[767px]:px-0 xl:pt-0">
                      <ul className="relative flex items-center gap-[10px] min-[1200px]:gap-5">
                        <li>
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex items-center gap-2 text-[15px] min-[1200px]:text-[16px] text-[#797f7d] transition-all duration-500 hover:text-[#f78134]"
                          >
                            <span className="fas fa-calendar-alt text-[16px] text-[#f78134]"></span>
                            {post.date}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex items-center gap-2 text-[15px] min-[1200px]:text-[16px] text-[#797f7d] transition-all duration-500 hover:text-[#f78134]"
                          >
                            <span className="fas fa-comments text-[16px] text-[#f78134]"></span>
                            Comment
                          </Link>
                        </li>
                      </ul>

                      <h3 className="mb-[15px] mt-[7px] font-sans text-[20px] font-semibold capitalize leading-[30px] text-[#062f3a] min-[1200px]:text-[24px] min-[1200px]:leading-[34px] max-[767px]:text-[22px] max-[767px]:leading-8">
                        <Link
                          to={`/blog/${post.id}`}
                          className="transition-all duration-500 hover:text-[#f78134]"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <div className="relative flex flex-wrap items-center justify-between">
                        <div className="relative flex items-center max-[767px]:mb-[15px] max-[767px]:flex-col max-[767px]:items-baseline">
                          <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#f78134]">
                            <div className="relative flex h-[55px] w-[55px] items-center justify-center rounded-full">
                              <img
                                src={post.authorImage}
                                alt={post.author}
                                className="rounded-full"
                              />
                            </div>
                          </div>
                          <div className="relative ml-[15px] block max-[767px]:ml-0 max-[767px]:mt-[15px]">
                            <h5 className="font-sans text-[16px] min-[1200px]:text-[18px] font-semibold leading-[18px] text-[#062f3a]">
                              {post.author}
                            </h5>
                            <p className="text-[14px] font-medium leading-6 text-[#797f7d]">
                              {post.date}
                            </p>
                          </div>
                        </div>

                        <div className="relative block">
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#f78134] text-[15px] text-white transition-all duration-500 hover:bg-[#062f3a] hover:text-white"
                          >
                            <span className="icon-right-arrow"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPreviews;
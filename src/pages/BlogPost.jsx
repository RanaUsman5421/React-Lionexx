import {
  ArrowRight,
  Clock3,
  Facebook,
  Instagram,
  MessageCircle,
  Search,
  Share2,
  Twitter,
  User,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import ThmBtn from "../components/thmBtn";
import blogPosts from "../data/blogPosts";
import commentOneImage from "../assets/images/blog/comment-1-1.webp";
import commentTwoImage from "../assets/images/blog/comment-1-2.webp";

const postContentById = {
  "mastering-last-mile": {
    readTime: "4 Min Read",
    dateBox: { day: "12", month: "Nov" },
    intro:
      "Your team's brilliance, determination, and confidence will drive you to conquer new frontiers in last-mile delivery. When dispatching, routing, and customer communication move together, service quality improves at every final step.",
    body:
      "The wisest logistics teams choose systems that remove friction before it reaches the customer. From route planning and real-time updates to proof of delivery and returns handling, every decision should support faster turnaround and a smoother delivery experience.",
    quote:
      "Strong logistics operations are built on clarity, timing, and the confidence to improve each handoff until the final mile feels effortless.",
    quoteAuthor: "Kane Williamson",
    quoteRole: "CEO",
    sectionTitle: "How Modern Delivery Teams Stay Ahead.",
    sectionText:
      "Businesses that lead in delivery performance usually invest in better visibility, flexible fulfillment, and responsive support. These systems create trust, reduce failed deliveries, and help operations scale without sacrificing customer experience.",
    tags: ["Transport", "Logistics"],
  },
  "greenhouse-gas-effect": {
    readTime: "5 Min Read",
    dateBox: { day: "18", month: "Nov" },
    intro:
      "Sustainability in logistics starts with operational decisions that reduce waste across transport networks. Cleaner routing, better fleet utilization, and smarter warehouse coordination all contribute to lower emissions.",
    body:
      "Organizations introducing greenhouse-gas reduction initiatives are focusing on measurable improvements. Better packaging choices, data-driven planning, and consolidated shipment models make it possible to cut environmental impact while maintaining reliable service.",
    quote:
      "Sustainable logistics becomes powerful when efficiency and environmental responsibility are planned together from the start.",
    quoteAuthor: "Kevin Cooper",
    quoteRole: "Operations Lead",
    sectionTitle: "Why Emissions Strategy Matters In Logistics.",
    sectionText:
      "Teams that embed sustainability into daily operations often discover it supports performance as well. Reduced idle time, cleaner processes, and more deliberate transport planning can strengthen both margins and brand trust.",
    tags: ["Transport", "Green"],
  },
  "quality-services": {
    readTime: "3 Min Read",
    dateBox: { day: "24", month: "Nov" },
    intro:
      "Quality service in logistics comes from consistency across every touchpoint, from pickup to delivery confirmation. Reliable execution creates confidence for both businesses and customers.",
    body:
      "Service excellence is rarely the result of a single improvement. It grows from clear processes, well-trained teams, and systems that help operations stay fast, accountable, and customer focused as order volume changes.",
    quote:
      "The best service standards are the ones customers can feel without needing to ask how they were delivered.",
    quoteAuthor: "Alisa Fox",
    quoteRole: "Service Director",
    sectionTitle: "What Quality Looks Like In Daily Operations.",
    sectionText:
      "High-performing logistics providers focus on response time, careful handling, accurate tracking, and dependable support. When those fundamentals stay strong, businesses can scale with confidence.",
    tags: ["Agency", "Business"],
  },
};

const comments = [
  {
    name: "Theresa Webb",
    date: "02 June 2024 at 03:30 pm",
    image: commentOneImage,
    text: "The wise team always chooses better processes when they improve customer trust. Reliable communication and careful execution make every shipment feel more dependable.",
  },
  {
    name: "Cameron Williamson",
    date: "02 June 2024 at 03:30 pm",
    image: commentTwoImage,
    text: "Operational discipline matters most when volume increases. The best logistics experiences come from teams that stay responsive, organized, and consistent at every step.",
  },
];

const categories = [
  { name: "New Technologies", count: 12 },
  { name: "Parallax Effect", count: 15, active: true },
  { name: "Digital Marketing", count: 8 },
  { name: "Content Writting", count: 20 },
  { name: "One Page Template", count: 14 },
  { name: "Relationship Buildup", count: 5 },
];

const sidebarTags = [
  "Carpet",
  "Office",
  "Agent",
  "Room",
  "Love",
  "Business",
  "Project",
  "Corporate",
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id === id) || blogPosts[0];
  const content = postContentById[post.id] || postContentById["mastering-last-mile"];
  const recentPosts = blogPosts.filter((item) => item.id !== post.id).concat(post).slice(0, 3);

  return (
    <PageShell title={post.title} subtitle={post.title}>
      <section className="block py-[80px] lg:py-[85px]">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-10 xl:px-[15px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-[30px]">
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="relative block">
                <div className="relative block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full rounded-[6px] object-cover"
                  />
                  <div className="absolute right-[10px] top-[10px] flex h-[70px] w-[70px] items-center justify-center rounded-[6px] border-[5px] border-[#f78134] bg-white text-center min-[576px]:right-[40px] min-[576px]:top-[40px]">
                    <p className="font-['Rubik',sans-serif] text-[15px] font-bold leading-[18px] text-[#062f3a]">
                      {content.dateBox.day}
                      <br />
                      {content.dateBox.month}
                    </p>
                  </div>
                </div>

                <div className="mt-[30px] block">
                  <div className="flex flex-col gap-5 min-[576px]:gap-[30px] min-[576px]:max-[767px]:flex-col md:flex-col lg:flex-col xl:flex-row xl:items-center">
                    <div className="flex h-[35px] w-fit items-center justify-center rounded-[6px] bg-[#f78134] px-[15px]">
                      <p className="flex items-center gap-[10px] font-['Rubik',sans-serif] text-[14px] font-semibold uppercase text-white">
                        <User className="h-4 w-4" />
                        By {post.author}
                      </p>
                    </div>

                    <ul className="flex list-none items-center gap-[10px] min-[576px]:gap-[30px]">
                      <li>
                        <span className="flex items-center gap-[10px] text-[16px] text-[#6c7176] transition-all duration-500 hover:text-[#f78134]">
                          <MessageCircle className="h-4 w-4 text-[#f78134]" />
                          Comments (05)
                        </span>
                      </li>
                      <li>
                        <span className="flex items-center gap-[10px] text-[16px] text-[#6c7176] transition-all duration-500 hover:text-[#f78134]">
                          <Clock3 className="h-4 w-4 text-[#f78134]" />
                          {content.readTime}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="mb-[19px] mt-[30px] font-['Rubik',sans-serif] text-[30px] font-bold leading-[40px] text-[#062f3a] min-[576px]:text-[40px] min-[576px]:leading-[1.2em]">
                    {post.title}
                  </h3>

                  <p className="text-[16px] leading-[30px] text-[#6c7176]">
                    {content.intro}
                  </p>
                  <p className="mb-[40px] mt-[21px] text-[16px] leading-[30px] text-[#6c7176]">
                    {content.body}
                  </p>

                  <div className="block rounded-[6px] bg-[rgba(247,129,52,0.07)] px-5 pb-[37px] pt-10 min-[576px]:px-10">
                    <h4 className="mb-[30px] font-['Rubik',sans-serif] text-[22px] font-semibold leading-[32px] text-[#062f3a]">
                      "{content.quote}"
                    </h4>
                    <p className="text-right font-['Rubik',sans-serif] text-[18px] font-semibold leading-[27px] text-[#062f3a]">
                      {content.quoteAuthor}
                      <span className="font-['Poppins',sans-serif] text-[16px] font-normal text-[#6c7176]">
                        {" "}
                        / {content.quoteRole}
                      </span>
                    </p>
                  </div>

                  <h3 className="mb-[19px] mt-[41px] font-['Rubik',sans-serif] text-[30px] font-bold leading-[40px] text-[#062f3a] min-[576px]:text-[38px] min-[576px]:leading-[48px]">
                    {content.sectionTitle}
                  </h3>

                  <p className="text-[16px] leading-[30px] text-[#6c7176]">
                    {content.sectionText}
                  </p>

                  <div className="mt-[29px] grid grid-cols-1 gap-[30px] xl:grid-cols-2">
                    <div className="mb-0 block">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full rounded-[6px] object-cover"
                      />
                    </div>
                    <div className="mb-0 block">
                      <img
                        src={recentPosts[0]?.image || post.image}
                        alt={recentPosts[0]?.title || post.title}
                        className="w-full rounded-[6px] object-cover"
                      />
                    </div>
                  </div>

                  <div className="mb-[60px] mt-[30px] flex flex-col rounded-[6px] bg-[#eef4f5] px-[15px] py-[30px] min-[576px]:px-[30px] md:flex-col lg:flex-col xl:flex-row xl:items-center xl:justify-between">
                    <div className="mb-[15px] flex flex-col gap-[17px] xl:mb-0 xl:flex-row xl:items-center">
                      <h3 className="font-['Rubik',sans-serif] text-[22px] font-semibold leading-[34px] text-[#062f3a]">
                        Tags :
                      </h3>
                      <ul className="flex list-none flex-wrap items-center gap-2">
                        {content.tags.map((tag) => (
                          <li key={tag}>
                            <Link
                              to="/blog"
                              className="block rounded-[6px] border border-[#d9e3e6] bg-white px-[15px] py-[10px] text-[16px] capitalize leading-[1] text-[#6c7176] transition-all duration-500 hover:border-[#f78134] hover:bg-[#f78134] hover:text-white"
                            >
                              #{tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-[10px] flex items-center gap-[17px]">
                      <h3 className="font-['Rubik',sans-serif] text-[18px] font-semibold leading-[28px] text-[#062f3a] min-[576px]:text-[22px] min-[576px]:leading-[34px]">
                        Share :
                      </h3>
                      <div className="flex items-center gap-[5px] min-[576px]:gap-[10px]">
                        {[Facebook, Twitter, Instagram, ArrowRight].map((Icon, index) => (
                          <a
                            key={index}
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e3e6] bg-white text-[#062f3a] transition-all duration-500 hover:border-[#f78134] hover:bg-[#f78134] hover:text-white"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="block rounded-[6px] bg-[#eef4f5] px-[15px] py-10 min-[576px]:px-10">
                    {comments.map((comment, index) => (
                      <div
                        key={comment.name}
                        className={`relative flex flex-col items-start gap-5 rounded-[6px] border border-[#d9e3e6] bg-white px-[15px] pb-[30px] pt-[29px] min-[576px]:px-[29px] lg:flex-col xl:flex-row ${
                          index > 0 ? "mt-[30px]" : ""
                        }`}
                      >
                        <div className="w-full max-w-[70px]">
                          <img
                            src={comment.image}
                            alt={comment.name}
                            className="w-full rounded-full"
                          />
                        </div>

                        <div className="relative block flex-1">
                          <h3 className="font-['Rubik',sans-serif] text-[20px] font-semibold leading-[30px] text-[#062f3a]">
                            {comment.name}
                          </h3>
                          <span className="text-[16px] leading-[30px] text-[#6c7176]">
                            {comment.date}
                          </span>
                          <p className="mt-[14px] text-[16px] leading-[30px] text-[#6c7176]">
                            {comment.text}
                          </p>
                          <div className="relative mt-[10px] xl:absolute xl:right-0 xl:top-[28px] xl:mt-0">
                            <Link
                              to={`/blog/${post.id}`}
                              className="flex items-center gap-[13px] font-['Rubik',sans-serif] text-[15px] font-semibold uppercase leading-[15px] text-[#062f3a] transition-all duration-500 hover:text-[#f78134]"
                            >
                              <Share2 className="h-[11px] w-[11px] text-[#f78134]" />
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-[60px] block rounded-[6px] bg-[#eef4f5] px-[15px] py-10 min-[576px]:px-10">
                    <h3 className="font-['Rubik',sans-serif] text-[24px] font-bold leading-[34px] text-[#062f3a]">
                      Leave A Reply
                    </h3>
                    <p className="mb-[30px] mt-5 text-[16px] leading-[30px] text-[#6c7176]">
                      By using form u agree with the message sorage, you can contact
                      us directly now
                    </p>

                    <form className="block">
                      <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
                        <div className="mb-[30px] block">
                          <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            className="block h-[60px] w-full rounded-[6px] border border-[#d9e3e6] bg-white px-5 text-[16px] font-normal text-[#6c7176] outline-none"
                          />
                        </div>
                        <div className="mb-[30px] block">
                          <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            className="block h-[60px] w-full rounded-[6px] border border-[#d9e3e6] bg-white px-5 text-[16px] font-normal text-[#6c7176] outline-none"
                          />
                        </div>
                      </div>

                      <div className="mb-[30px] block h-[140px]">
                        <textarea
                          name="message"
                          placeholder="Write your messege"
                          className="h-[140px] w-full rounded-[6px] border border-[#d9e3e6] bg-white px-5 pb-[30px] pt-5 text-[16px] font-normal text-[#6c7176] outline-none"
                        ></textarea>
                      </div>

                      <div className="block">
                        <ThmBtn type="submit">submit now</ThmBtn>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4">
              <div className="block">
                <div className="block rounded-[6px] bg-[#eef4f5] px-5 py-[50px] min-[576px]:px-[30px]">
                  <form className="relative">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="block h-[60px] w-full rounded-[6px] border border-[#d9e3e6] bg-white pl-5 pr-[60px] text-[14px] font-medium text-[#6c7176] outline-none"
                    />
                    <button
                      type="submit"
                      className="absolute bottom-[5px] right-[5px] top-[5px] flex w-[50px] items-center justify-center rounded-[6px] bg-[#f78134] text-white transition-all duration-500 hover:bg-[#062f3a]"
                    >
                      <Search className="h-[18px] w-[18px]" />
                    </button>
                  </form>
                </div>

                <div className="mt-[30px] block rounded-[6px] bg-[#eef4f5] px-5 pb-[50px] pt-[42px] min-[576px]:px-[30px]">
                  <h3 className="relative mb-[30px] pl-10 font-['Rubik',sans-serif] text-[24px] font-semibold capitalize leading-[34px] text-[#062f3a] before:absolute before:bottom-[10px] before:left-0 before:h-[2px] before:w-[30px] before:bg-[#f78134] before:content-['']">
                    Categories
                  </h3>
                  <ul className="list-none">
                    {categories.map((category) => (
                      <li key={category.name} className="mt-[15px] first:mt-0">
                        <a
                          href="#"
                          className={`relative block overflow-hidden rounded-[6px] px-5 py-[15px] pr-[80px] font-['Rubik',sans-serif] text-[18px] font-medium leading-[28px] transition-all duration-500 before:absolute before:inset-0 before:-z-[1] before:origin-left before:scale-y-0 before:bg-[#f78134] before:transition-all before:duration-200 before:content-[''] hover:bg-[#f78134] hover:before:scale-y-100 hover:text-white ${
                            category.active
                              ? "bg-[#f78134] text-white"
                              : "bg-white text-[#062f3a]"
                          }`}
                        >
                          {category.name}
                          <span
                            className={`absolute bottom-0 right-0 top-0 flex w-[60px] items-center justify-center rounded-r-[10px] font-['Poppins',sans-serif] text-[15px] font-semibold hover:text-white ${
                              category.active
                                ? "bg-[rgba(255,255,255,0.1)] text-white"
                                : "bg-[rgba(6,47,58,0.1)] text-[#062f3a]"
                            }`}
                          >
                            ({category.count})
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-[30px] block rounded-[6px] bg-[#eef4f5] px-5 pb-[42px] pt-[42px] min-[576px]:px-[30px]">
                  <h3 className="relative mb-[30px] pl-10 font-['Rubik',sans-serif] text-[24px] font-semibold capitalize leading-[34px] text-[#062f3a] before:absolute before:bottom-[10px] before:left-0 before:h-[2px] before:w-[30px] before:bg-[#f78134] before:content-['']">
                    Recent Post
                  </h3>
                  <div className="block">
                    {recentPosts.map((item, index) => (
                      <div key={item.id} className={index > 0 ? "mt-[27px]" : ""}>
                        <Link to={`/blog/${item.id}`} className="group block">
                          <div className="overflow-hidden rounded-[6px] bg-[#062f3a]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full rounded-[6px] transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-70"
                            />
                          </div>
                          <div className="mt-[18px]">
                            <h3 className="font-['Rubik',sans-serif] text-[21px] font-medium leading-[31px] text-[#062f3a] transition-all duration-500 group-hover:text-[#f78134]">
                              {item.title}
                            </h3>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-[30px] block overflow-hidden rounded-[6px] bg-[#eef4f5] px-5 pb-10 pt-[41px] min-[576px]:px-[30px]">
                  <h3 className="relative mb-[30px] pl-10 font-['Rubik',sans-serif] text-[24px] font-semibold capitalize leading-[34px] text-[#062f3a] before:absolute before:bottom-[10px] before:left-0 before:h-[2px] before:w-[30px] before:bg-[#f78134] before:content-['']">
                    Tags Cloud
                  </h3>
                  <ul className="-mx-[5px] list-none">
                    {sidebarTags.map((tag) => (
                      <li
                        key={tag}
                        className="mb-[10px] inline-block px-[5px] align-top"
                      >
                        <a
                          href="#"
                          className="block rounded-[6px] bg-white px-6 py-[6px] text-[15px] font-normal capitalize text-[#6c7176] transition-all duration-300 hover:bg-[#f78134] hover:text-white"
                        >
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     </PageShell>
  );
};

export default BlogPost;

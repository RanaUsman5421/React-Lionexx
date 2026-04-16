import "bootstrap/dist/js/bootstrap.bundle";
import Swiper from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { WOW } from "wowjs";
import { jarallax } from "jarallax";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.Swiper = Swiper;
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.SplitText = SplitText;
  window.WOW = WOW;
  window.jarallax = jarallax;
  window.$ = $;
  window.jQuery = $;
}

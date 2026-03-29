(function ($) {
  "use strict";





  /*--------------------------------------------------------------
    TOUCH DEVICE HOVER FIX
    Uses :focus for mobile/tablet and :hover for desktop
    Prevents stuck hover states on touch devices
  --------------------------------------------------------------*/
  
  // Detect touch device
  function detectTouchDevice() {
    var isTouch = ('ontouchstart' in window) || 
                  (navigator.maxTouchPoints > 0) || 
                  (navigator.msMaxTouchPoints > 0);
    
    if (isTouch) {
      document.documentElement.classList.add('touch-device', 'touch-hover-fix');
    }
  }
  
  // Run on DOM ready
  $(document).ready(function() {
    detectTouchDevice();
    
    // Handle touch events for focus management
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      var touchMedia = window.matchMedia('(hover: none), (pointer: coarse)');
      var thmBtnSelector = '.thm-btn';
      var touchHoverTargetSelector = [
        '.thm-btn',
        '.main-menu__list > li',
        '.main-menu__contact-list li .text p a',
        '.services-one__single',
        '.services-two__single',
        '.services-three__single',
        '.blog-one__single',
        '.blog-two__single',
        '.blog-list__single',
        '.project-one__single',
        '.project-two__single',
        '.team-one__single',
        '.team-two__single',
        '.feature-one__single',
        '.feature-two__single',
        '.testimonial-one__single',
        '.testimonial-two__single',
        '.testimonial-three__single',
        '.footer-widget__link li a',
        '.blog-one__title a',
        '.blog-one__meta li a',
        '.thm-social-link1 ul li a',
        '.site-footer__social a',
        '.video-one__video-icon',
        '.video-two__video-icon',
        '.about-one__video-icon',
        '.scroll-to-top',
        '.search-popup .close-search',
        '.owl-theme .owl-nav [class*=\"owl-\"]'
      ].join(',');
      var touchHoverParentSelector = [
        '.main-menu__list > li',
        '.services-one__single',
        '.services-two__single',
        '.services-three__single',
        '.blog-one__single',
        '.blog-two__single',
        '.blog-list__single',
        '.project-one__single',
        '.project-two__single',
        '.team-one__single',
        '.team-two__single',
        '.feature-one__single',
        '.feature-two__single',
        '.testimonial-one__single',
        '.testimonial-two__single',
        '.testimonial-three__single'
      ].join(',');
      
      function clearTouchFocusState(excludedEl) {
        $('.is-touch-focus').each(function() {
          if (excludedEl && this === excludedEl) {
            return;
          }
          $(this).removeClass('is-touch-focus');
          if (typeof this.blur === 'function') {
            this.blur();
          }
        });
      }

      // Touch devices: translate hover behavior into touch focus state
      $(document).on('touchstart', function(e) {
        if (!touchMedia.matches) {
          return;
        }

        var touchedEl = $(e.target).closest(touchHoverTargetSelector).get(0);
        if (touchedEl) {
          clearTouchFocusState(touchedEl);
          $(touchedEl).addClass('is-touch-focus');
          $(touchedEl).parents(touchHoverParentSelector).addClass('is-touch-focus');
          if (typeof touchedEl.focus === 'function' && $(touchedEl).is('a, button, input, textarea, select, [tabindex], ' + thmBtnSelector)) {
            touchedEl.focus();
          }
          return;
        }

        clearTouchFocusState();
      });
      
      // For interactive elements - remove focus after tap
      $('a, button, input, textarea, select').on('touchend', function(e) {
        var $this = $(this);
        
        // Remove focus after a short delay to allow click to fire
        setTimeout(function() {
          // Only blur if it's not an input that needs focus
          if (!$this.is('input, textarea, select') && !$this.is(touchHoverTargetSelector)) {
            $this.blur();
          }
        }, 100);
      });

      // Banner watch video button: prevent stuck touch-focus after opening popup
      $(document).on('touchend click', '.banner-one .video-popup, .banner-one .about-one__video-icon', function() {
        var el = this;
        setTimeout(function() {
          $(el).removeClass('is-touch-focus');
          $(el).find('.about-one__video-icon').removeClass('is-touch-focus');
          if (typeof el.blur === 'function') {
            el.blur();
          }
        }, 120);
      });
      
      // For menu items - handle dropdowns with touch
      $('.main-menu__list > li.dropdown > a').on('touchend', function(e) {
        var $this = $(this);
        var $parent = $this.parent();
        
        // If already touched recently, allow navigation
        if ($parent.data('touch-time') && Date.now() - $parent.data('touch-time') < 300) {
          return true;
        }
        
        // Mark touch time
        $parent.data('touch-time', Date.now());
        
        // Toggle dropdown on tap
        if ($parent.hasClass('current-menu-ancestor') || $parent.hasClass('current-menu-parent')) {
          $parent.removeClass('current-menu-ancestor current-menu-parent');
          $parent.find('> ul, > .megamenu').hide();
        } else {
          // Close others first
          $('.main-menu__list > li').not($parent).removeClass('current-menu-ancestor current-menu-parent');
          $('.main-menu__list > li').not($parent).find('> ul, > .megamenu').hide();
          
          $parent.addClass('current-menu-ancestor');
          $parent.find('> ul, > .megamenu').show();
        }
        
        e.preventDefault();
        return false;
      });
      
      // For sticky header menu
      if ($('.stricked-menu').length) {
        $('.stricked-menu .main-menu__list > li.dropdown > a').on('touchend', function(e) {
          var $this = $(this);
          var $parent = $this.parent();
          
          if ($parent.hasClass('current-menu-ancestor') || $parent.hasClass('current-menu-parent')) {
            $parent.removeClass('current-menu-ancestor current-menu-parent');
            $parent.find('> ul, > .megamenu').hide();
          } else {
            $parent.addClass('current-menu-ancestor');
            $parent.find('> ul, > .megamenu').show();
          }
          
          e.preventDefault();
          return false;
        });
      }
      
      // Disable 300ms tap delay on mobile
      document.addEventListener('touchstart', function() {}, {passive: true});

      // Click away: clear touch focus state from thm-btn
      $(document).on('click', function(e) {
        if (!touchMedia.matches) {
          return;
        }
        if ($(e.target).closest(touchHoverTargetSelector).length) {
          return;
        }
        clearTouchFocusState();
      });
    }
  });



  /*--------------------------------------------------------------
    RegisterPlugin, ScrollTrigger, SplitText
  --------------------------------------------------------------*/
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false
  });



  // Preloader
  $(window).on('load', function (event) {
    $('.js-preloader').delay(300).fadeOut(200);
  });


  // AOS Animation
  if ($("[data-aos]").length) {
    AOS.init({
      duration: '1200',
      disable: 'false',
      easing: 'ease',
      mirror: true
    });
  }


  // ===Datepicker===
  if ($("#datepicker").length) {
    $("#datepicker").datepicker();
  }


  /*--------------------------------------------------------------
    FullHeight
  --------------------------------------------------------------*/
  function fullHeight() {
    $('.full-height').css("height", $(window).height());
  }




  function thmSwiperInit() {
    // swiper slider
    if ($(".thm-swiper__slider").length) {
      $(".thm-swiper__slider").each(function () {
        let elm = $(this);
        let options = elm.data('swiper-options');
        let thmSwiperSlider = new Swiper(elm, options);
      });
    }

  }



  //Services One Carousel
  if ($(".services-one__carousel").length) {
    $(".services-one__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 7000,
      navText: [
        '<span class="icon-arrow-right"></span>',
        '<span class="icon-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1320: {
          items: 4,
        },
      },
    });
  }





  //Services Two Carousel
  if ($(".services-two__carousel").length) {
    $(".services-two__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 7000,
      navText: [
        '<span class="icon-arrow-right"></span>',
        '<span class="icon-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1320: {
          items: 3,
        },
      },
    });
  }







  //Brand One Carousel
  if ($(".brand-one__carousel").length) {
    $(".brand-one__carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 7000,
      navText: [
        '<span class="icon-left-arrow"></span>',
        '<span class="icon-left-arrow right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1320: {
          items: 6,
        },
      },
    });
  }






  //Project Two Carousel
  if ($(".project-two__carousel").length) {
    $(".project-two__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 7000,
      navText: [
        '<span class="icon-arrow-right"></span>',
        '<span class="icon-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1320: {
          items: 4,
        },
      },
    });
  }



  //Testimonial Two Carousel
  if ($(".testimonial-two__carousel").length) {
    $(".testimonial-two__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 7000,
      navText: [
        '<span class="icon-right-arrow"></span>',
        '<span class="icon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1320: {
          items: 3,
        },
      },
    });
  }




  //Team Two Carousel
  if ($(".team-two__carousel").length) {
    $(".team-two__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 7000,
      navText: [
        '<span class="icon-next"></span>',
        '<span class="icon-next"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1320: {
          items: 4,
        },
      },
    });
  }







  //Image Reveal Animation
  if ($(".reveal").length) {
    gsap.registerPlugin(ScrollTrigger);
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });
      tl.set(container, {
        autoAlpha: 1,
      });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });
  }




  // custom coursor
  if ($(".custom-cursor").length && window.matchMedia("(min-width: 992px)").matches) {

    var cursor = document.querySelector('.custom-cursor__cursor');
    var cursorinner = document.querySelector('.custom-cursor__cursor-two');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function () {
      cursor.classList.add('click');
      cursorinner.classList.add('custom-cursor__innerhover')
    });

    document.addEventListener('mouseup', function () {
      cursor.classList.remove('click')
      cursorinner.classList.remove('custom-cursor__innerhover')
    });

    a.forEach(item => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('custom-cursor__hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('custom-cursor__hover');
      });
    })
  }








  //Progress Count Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      }, {
        accY: -50
      }
    );
  }



  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            }
          });
        }
      }, {
        accY: 0
      }
    );
  }




  // Accrodion
  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }



  $(".contact-form-validated").each(function () {
    $(this).validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      submitHandler: function (form) {
        $.post(
          $(form).attr("action"),
          $(form).serialize(),
          function (response) {
            $(form).find(".result").html(response);
            $(form).find('input[type="text"], input[type="email"], textarea').val("");
          }
        );
        return false;
      }
    });
  });







  if ($(".video-popup").length) {
    // Get the current origin safely for YouTube API
    var currentOrigin = window.location.origin || window.location.protocol + "//" + window.location.host;
    var youtubeEmbedSrc = "https://www.youtube.com/embed/%id%?autoplay=1&rel=0&playsinline=1&enablejsapi=1&origin=" + encodeURIComponent(currentOrigin);

    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,
      callbacks: {
        beforeOpen: function () {
          this._lastVideoTrigger = this.st.el && this.st.el[0] ? this.st.el[0] : null;
        },
        open: function() {
          // Additional fix for mobile - reload the iframe to ensure origin is set
          var iframe = $('.mfp-iframe')[0];
          if (iframe) {
            iframe.onload = function() {
              try {
                var player = new YT.Player(iframe.contentWindow);
              } catch(e) {
                // Player initialization handled by YouTube automatically
              }
            };
          }
        },
        close: function () {
          var trigger = this._lastVideoTrigger;
          if (trigger && $(trigger).is('.banner-one .video-popup')) {
            $(trigger).removeClass('is-touch-focus');
            $(trigger).find('.about-one__video-icon').removeClass('is-touch-focus');
            if (typeof trigger.blur === 'function') {
              trigger.blur();
            }
          }
        }
      },
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: function (url) {
              var match = url.match(/[?&]v=([^&#]+)/);
              return match && match[1] ? match[1] : url.split("/").pop();
            },
            src: youtubeEmbedSrc
          },
          youtu_be: {
            index: "youtu.be/",
            id: "/",
            src: youtubeEmbedSrc
          }
        }
      },
      fixedContentPos: false,
      
    });
  }

  if ($(".img-popup").length) {
    var groups = {};
    $(".img-popup").each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      });
    });
  }



  //Chat Popup
  if ($('#chat-popup').length) {

    //Show Popup
    $('.chat-toggler').on('click', function () {
      $('#chat-popup').addClass('popup-visible');
    });
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $('#chat-popup').removeClass('popup-visible');
      }
    });
    //Hide Popup
    $('.close-chat,.chat-popup .overlay-layer').on('click', function () {
      $('#chat-popup').removeClass('popup-visible');
    });
  }




  function dynamicCurrentMenuClass(selector) {
    let fileName = window.location.pathname.split("/").pop() || "index.html"; // Default to index.html if no file name
    console.log("Current file:", fileName);

    // Remove existing 'current' classes to avoid duplicates
    selector.find("li").removeClass("current");

    // Iterate through all <li> elements, including nested ones
    selector.find("li").each(function () {
      let anchor = $(this).find("a").first(); // Get the first <a> in the <li>
      if (anchor.length && anchor.attr("href") === fileName) {
        $(this).addClass("current"); // Add 'current' to the matching <li>
        // Add 'current' to parent <li> if it exists (for dropdowns)
        let parentLi = $(this).closest("li.dropdown");
        if (parentLi.length) {
          parentLi.addClass("current");
        }
      }
    });

    // If no match is found, add 'current' to the first top-level <li> (Home)
    if (!selector.find("li.current").length) {
      selector.children("li").first().addClass("current");
    }
  }

  // Run the function if the main menu exists
  if ($(".main-menu__list").length) {
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }




  if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__list").outerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;

    let navButtons = document.querySelectorAll(".main-menu__right .main-menu__btn-box a");
    if (navButtons.length) {
      let ctaWrap = document.createElement("div");
      ctaWrap.className = "mobile-nav__cta";

      navButtons.forEach(function (buttonLink) {
        let clonedButton = buttonLink.cloneNode(true);
        clonedButton.classList.add("mobile-nav__cta-btn");
        ctaWrap.appendChild(clonedButton);
      });

      mobileNavContainer.appendChild(ctaWrap);
    }
  }
  if ($(".sticky-header__content").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".sticky-header__content");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click touchend", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }




  //Header Search
  if ($('.searcher-toggler-box').length) {
    $('.searcher-toggler-box').on('click', function () {
      $('body').addClass('search-active');
    });
    $('.close-search').on('click', function () {
      $('body').removeClass('search-active');
    });

    $('.search-popup .color-layer').on('click', function () {
      $('body').removeClass('search-active');
    });
  }




  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }






  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }


  if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }









  // ===Portfolio===
  function projectMasonaryLayout() {
    if ($(".masonary-layout").length) {
      $(".masonary-layout").isotope({
        layoutMode: "masonry"
      });
    }
    if ($(".post-filter").length) {
      $(".post-filter li")
        .children(".filter-text")
        .on("click", function () {
          var Self = $(this);
          var selector = Self.parent().attr("data-filter");
          $(".post-filter li").removeClass("active");
          Self.parent().addClass("active");
          $(".filter-layout").isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false
            }
          });
          return false;
        });
    }

    if ($(".post-filter.has-dynamic-filters-counter").length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
        "li"
      );
      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this)
          .children(".filter-text")
          .append('<span class="count">' + count + "</span>");
      });
    }
  }













  function SmoothMenuScroll() {
    var anchor = $(".scrollToLink");
    if (anchor.length) {
      anchor.children("a").bind("click", function (event) {
        if ($(window).scrollTop() > 10) {
          var headerH = "90";
        } else {
          var headerH = "90";
        }
        var target = $(this);
        $("html, body")
          .stop()
          .animate({
              scrollTop: $(target.attr("href")).offset().top - headerH + "px"
            },
            200,
            "easeInOutExpo"
          );
        anchor.removeClass("current");
        anchor.removeClass("current-menu-ancestor");
        anchor.removeClass("current_page_item");
        anchor.removeClass("current-menu-parent");
        target.parent().addClass("current");
        event.preventDefault();
      });
    }
  }
  SmoothMenuScroll();

  function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 117) {
      var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
      menuAnchor.each(function () {
        var sections = $(this).attr("href");
        $(sections).each(function () {
          if ($(this).offset().top <= windscroll + 100) {
            var Sectionid = $(sections).attr("id");
            $(".one-page-scroll-menu").find("li").removeClass("current");
            $(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor");
            $(".one-page-scroll-menu").find("li").removeClass("current_page_item");
            $(".one-page-scroll-menu").find("li").removeClass("current-menu-parent");
            $(".one-page-scroll-menu")
              .find("a[href*=\\#" + Sectionid + "]")
              .parent()
              .addClass("current");
          }
        });
      });
    } else {
      $(".one-page-scroll-menu li.current").removeClass("current");
      $(".one-page-scroll-menu li:first").addClass("current");
    }
  }






  /*-- Handle Scrollbar --*/
  function handleScrollbar() {
    const bodyHeight = $("body").height();
    const scrollPos = $(window).innerHeight() + $(window).scrollTop();
    let percentage = (scrollPos / bodyHeight) * 100;
    if (percentage > 100) {
      percentage = 100;
    }
    $(".scroll-to-top .scroll-to-top__inner").css("width", percentage + "%");
  }




  // Animation gsap 
  function title_animation() {
    var tg_var = jQuery('.sec-title-animation');
    if (!tg_var.length) {
      return;
    }
    const quotes = document.querySelectorAll(".sec-title-animation .title-animation");

    quotes.forEach(quote => {

      //Reset if needed
      if (quote.animation) {
        quote.animation.progress(1).kill();
        quote.split.revert();
      }

      var getclass = quote.closest('.sec-title-animation').className;
      var animation = getclass.split('animation-');
      if (animation[1] == "style4") return

      quote.split = new SplitText(quote, {
        type: "lines,words,chars",
        linesClass: "split-line"
      });
      gsap.set(quote, {
        perspective: 400
      });

      if (animation[1] == "style1") {
        gsap.set(quote.split.chars, {
          opacity: 0,
          y: "90%",
          rotateX: "-40deg"
        });
      }
      if (animation[1] == "style2") {
        gsap.set(quote.split.chars, {
          opacity: 0,
          x: "50"
        });
      }
      if (animation[1] == "style3") {
        gsap.set(quote.split.chars, {
          opacity: 0,
        });
      }
      quote.animation = gsap.to(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 90%",
        },
        x: "0",
        y: "0",
        rotateX: "0",
        opacity: 1,
        duration: 1,
        ease: Back.easeOut,
        stagger: .02
      });
    });
  }
  ScrollTrigger.addEventListener("refresh", title_animation);






  // ===Price Filter===
  function priceFilter() {
    if ($(".price-ranger").length) {
      $(".price-ranger #slider-range").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [0, 3000],
        slide: function (event, ui) {
          $(".price-ranger .ranger-min-max-block .min").val("" + ui.values[0]);
          $(".price-ranger .ranger-min-max-block .max").val("" + ui.values[1]);
        },
      });
      $(".price-ranger .ranger-min-max-block .min").val(
        "" + $(".price-ranger #slider-range").slider("values", 0)
      );
      $(".price-ranger .ranger-min-max-block .max").val(
        "" + $(".price-ranger #slider-range").slider("values", 1)
      );
    }
  }



  $(".add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });






  // ===Checkout Payment===
  if ($(".checkout__payment__title").length) {
    $(".checkout__payment__item").find(".checkout__payment__content").hide();
    $(".checkout__payment__item--active").find(".checkout__payment__content").show();

    $(".checkout__payment__title").on("click", function (e) {
      e.preventDefault();

      $(this)
        .parents(".checkout__payment")
        .find(".checkout__payment__item")
        .removeClass("checkout__payment__item--active");
      $(this).parents(".checkout__payment").find(".checkout__payment__content").slideUp();

      $(this).parent().addClass("checkout__payment__item--active");
      $(this).parent().find(".checkout__payment__content").slideDown();
    });
  }





  // Product All Tab
  if ($(".product__all-tab").length) {
    $(".product__all-tab .tabs-button-box .tab-btn-item").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).hasClass("actve-tab")) {
        return false;
      } else {
        $(".product__all-tab .tabs-button-box .tab-btn-item").removeClass("active-btn-item");
        $(this).addClass("active-btn-item");
        $(".product__all-tab .tabs-content-box .tab-content-box-item").removeClass(
          "tab-content-box-item-active"
        );
        $(target).addClass("tab-content-box-item-active");
      }
    });
  }





  if ($("#shop-details-one__thumb").length) {
    let testimonialsThumb = new Swiper("#shop-details-one__thumb", {
      slidesPerView: 3,
      spaceBetween: 0,
      speed: 1400,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      loop: true,
      autoplay: {
        delay: 5000
      }
    });

    let testimonialsCarousel = new Swiper("#shop-details-one__carousel", {
      observer: true,
      observeParents: true,
      loop: true,
      speed: 1400,
      mousewheel: false,
      slidesPerView: 1,
      autoplay: {
        delay: 5000
      },
      thumbs: {
        swiper: testimonialsThumb
      },
      pagination: {
        el: '#testimonials-one__carousel-pagination',
        type: 'bullets',
        clickable: true
      },

      "navigation": {
        "nextEl": "#product-details__swiper-button-next",
        "prevEl": "#product-details__swiper-button-prev"
      },
    });
  }



  //Related Products Carousel
  if ($(".related-products__carousel").length) {
    $(".related-products__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 2000,
      navText: [
        '<span class="icon-left-arrow"></span>',
        '<span class="icon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
        1320: {
          items: 4,
        },
      },
    });
  }













  if ($("#testimonial-one__thumb").length) {
    let testimonialsThumb = new Swiper("#testimonial-one__thumb", {
      slidesPerView: 3,
      spaceBetween: 0,
      speed: 1400,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loopedSlides: 4,
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0
        },

      }
    });

    let testimonialsCarousel = new Swiper("#testimonial-one__carousel", {
      observer: true,
      observeParents: true,
      loop: true,
      speed: 1400,
      mousewheel: false,
      slidesPerView: 1,
      spaceBetween: 72,
      autoplay: {
        delay: 5000
      },
      thumbs: {
        swiper: testimonialsThumb
      },
      pagination: {
        el: "#testimonials-one__carousel-pagination",
        type: "bullets",
        clickable: true
      },

      navigation: {
        nextEl: "#testimonial-one__swiper-button-next",
        prevEl: "#testimonial-one__swiper-button-prev"
      }
    });
  }





  if ($("#testimonial-three__thumb").length) {
    let testimonialsThumb = new Swiper("#testimonial-three__thumb", {
      slidesPerView: 3,
      spaceBetween: 0,
      speed: 1400,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loopedSlides: 4,
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0
        },

      }
    });

    let testimonialsCarousel = new Swiper("#testimonial-three__carousel", {
      observer: true,
      observeParents: true,
      loop: true,
      speed: 1400,
      mousewheel: false,
      slidesPerView: 1,
      spaceBetween: 72,
      autoplay: {
        delay: 5000
      },
      thumbs: {
        swiper: testimonialsThumb
      },
      pagination: {
        el: "#testimonial-three__carousel-pagination",
        type: "bullets",
        clickable: true
      },

      navigation: {
        nextEl: "#testimonial-three__swiper-button-next",
        prevEl: "#testimonial-three__swiper-button-prev"
      }
    });
  }




  // Quote One Tab
  if ($(".quote-tab").length) {
    $(".quote-tab .tabs-button-box .tab-btn-item").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).hasClass("actve-tab")) {
        return false;
      } else {
        $(".quote-tab .tabs-button-box .tab-btn-item").removeClass("active-btn-item");
        $(this).addClass("active-btn-item");
        $(".quote-tab .tabs-content-box .tab-content-box-item").removeClass(
          "tab-content-box-item-active"
        );
        $(target).addClass("tab-content-box-item-active");
      }
    });
  }










  // window load event
  $(window).on("load", function () {


    projectMasonaryLayout();
    fullHeight();
    title_animation();
    priceFilter();
    thmSwiperInit();








    if ($(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }





    if ($(".marquee_mode").length) {
      $('.marquee_mode').marquee({
        speed: 30,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      });
    }



    if ($(".marquee_mode-1").length) {
      $('.marquee_mode-1').marquee({
        speed: 40,
        gap: 45,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      });
    }



    // Curved Circle
    if ($(".about-one__curved-circle").length) {
      $(".about-one__curved-circle").circleType({
        position: "absolute",
        dir: 1,
        radius: 88,
        forceHeight: true,
        forceWidth: true,
      });
    }





    // Curved Circle
    if ($(".video-one__curved-circle").length) {
      $(".video-one__curved-circle").circleType({
        position: "absolute",
        dir: 1,
        radius: 100,
        forceHeight: true,
        forceWidth: true,
      });
    }






    if ($(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }

















  });





  // Type Effect
  if ($('.typed-effect').length) {
    $('.typed-effect').each(function () {
      var typedStrings = $(this).data('strings');
      var typedTag = $(this).attr('id');
      var typed = new Typed('#' + typedTag, {
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: true,
        loop: true,
        strings: typedStrings.split(',')
      });
    });

  }





  var BLOG_DATA = [{
      id: "ai-courier-pakistan",
      title: "How AI Is Transforming Ecommerce Courier Services in Pakistan",
      shortTitle: "How AI Is Transforming Ecommerce Courier Services in Pakistan",
      category: "AI Logistics",
      author: "Lionex Team",
      authorRole: "Operations",
      dateText: "January 12, 2026",
      readTime: "6 Min Read",
      commentsText: "Comments (08)",
      cardImage: "assets/images/blog/blog-2-1.jpg",
      detailImage: "assets/images/blog/blog-details-img-1.jpg",
      detailImageOne: "assets/images/blog/blog-details-img-box-img-1.jpg",
      detailImageTwo: "assets/images/blog/blog-details-img-box-img-2.jpg",
      excerpt: "AI is helping courier companies improve route planning, reduce delivery errors, and speed up operations for online sellers.",
      paragraphOne: "AI powered logistics is changing how ecommerce deliveries are managed in Pakistan. From smart order allocation to route based dispatching, businesses can now process higher order volume with fewer delays and better consistency.",
      paragraphTwo: "With better data visibility, courier teams can predict delivery windows, reduce failed attempts, and improve customer communication. This creates a stronger buyer experience and helps online stores build long term trust.",
      sectionTitle: "Why AI Creates Better Delivery Outcomes",
      paragraphThree: "AI driven courier workflows make dispatching smarter and faster. Teams can prioritize urgent orders, reduce manual errors, and handle seasonal spikes without breaking service quality.",
      quote: "When delivery operations are guided by data, speed and reliability improve together.",
      tags: ["#AI", "#Ecommerce"]
    },
    {
      id: "last-mile-delivery-pakistan",
      title: "Last-Mile Delivery Challenges for Online Stores and How to Solve Them",
      shortTitle: "Last-Mile Delivery Challenges for Online Stores",
      category: "Last Mile",
      author: "Areeba Khan",
      authorRole: "Customer Success",
      dateText: "January 20, 2026",
      readTime: "5 Min Read",
      commentsText: "Comments (06)",
      cardImage: "assets/images/blog/blog-2-2.jpg",
      detailImage: "assets/images/blog/blog-details-img-1.jpg",
      detailImageOne: "assets/images/blog/blog-details-img-box-img-1.jpg",
      detailImageTwo: "assets/images/blog/blog-details-img-box-img-2.jpg",
      excerpt: "Failed attempts, wrong addresses, and delayed rider assignment are common issues in last-mile delivery.",
      paragraphOne: "The last mile is where most delivery issues happen for ecommerce stores. Problems like incomplete addresses, customer unavailability, and weak communication can increase failed deliveries and extra costs.",
      paragraphTwo: "A practical solution is to combine address verification, proactive call confirmation, and live tracking updates. This reduces confusion and improves first attempt success rates.",
      sectionTitle: "Building a Reliable Last-Mile System",
      paragraphThree: "Online sellers should monitor failed attempts by area, optimize dispatch timing, and use performance based rider assignment. Small process improvements can produce major service gains.",
      quote: "Last-mile excellence is not luck, it is process discipline and consistent follow-through.",
      tags: ["#LastMile", "#Delivery"]
    },
    {
      id: "domestic-vs-international-shipping",
      title: "Domestic vs International Shipping: Which Option Is Right for Your Business?",
      shortTitle: "Domestic vs International Shipping for Ecommerce",
      category: "Shipping",
      author: "Usman Ali",
      authorRole: "Strategy",
      dateText: "February 02, 2026",
      readTime: "7 Min Read",
      commentsText: "Comments (05)",
      cardImage: "assets/images/blog/blog-2-3.jpg",
      detailImage: "assets/images/blog/blog-details-img-1.jpg",
      detailImageOne: "assets/images/blog/blog-details-img-box-img-1.jpg",
      detailImageTwo: "assets/images/blog/blog-details-img-box-img-2.jpg",
      excerpt: "Choosing domestic or international shipping depends on product type, margin, customer demand, and delivery expectations.",
      paragraphOne: "Domestic shipping is ideal for speed, lower complexity, and tighter delivery control. It helps growing stores improve repeat purchases by serving local demand quickly and consistently.",
      paragraphTwo: "International shipping unlocks larger markets but requires customs handling, documentation accuracy, and stronger packaging standards. Businesses need clear pricing and timeline communication before scaling globally.",
      sectionTitle: "How to Choose the Right Shipping Model",
      paragraphThree: "Start by segmenting products and destinations, then define service levels by order value and urgency. This hybrid model helps brands manage costs while expanding reach.",
      quote: "The best shipping strategy is not one-size-fits-all, it is market-aware and margin-aware.",
      tags: ["#Shipping", "#International"]
    },
    {
      id: "real-time-tracking-customer-trust",
      title: "Real-Time Tracking: Why It Increases Customer Trust and Repeat Orders",
      shortTitle: "Real-Time Tracking Builds Customer Trust",
      category: "Tracking",
      author: "Hina Rauf",
      authorRole: "Experience Lead",
      dateText: "February 14, 2026",
      readTime: "4 Min Read",
      commentsText: "Comments (04)",
      cardImage: "assets/images/blog/blog-2-4.jpg",
      detailImage: "assets/images/blog/blog-details-img-1.jpg",
      detailImageOne: "assets/images/blog/blog-details-img-box-img-1.jpg",
      detailImageTwo: "assets/images/blog/blog-details-img-box-img-2.jpg",
      excerpt: "Real-time tracking lowers support tickets and gives buyers confidence from dispatch to doorstep.",
      paragraphOne: "Customers want delivery transparency. Real-time tracking keeps them informed at every step and reduces uncertainty after checkout, especially for prepaid and urgent orders.",
      paragraphTwo: "For businesses, tracking visibility reduces support pressure because buyers can self-check status updates. It also improves accountability across hubs and riders.",
      sectionTitle: "From Tracking Data to Better Service",
      paragraphThree: "Tracking events should trigger proactive communication when delays are expected. Timely notifications protect trust and reduce cancellation risk.",
      quote: "Visibility is customer service, and tracking is the clearest form of visibility.",
      tags: ["#Tracking", "#CustomerTrust"]
    },
    {
      id: "road-rail-ocean-freight-guide",
      title: "A Complete Guide to Choosing the Right Freight Mode: Road, Rail, or Ocean",
      shortTitle: "Road, Rail, or Ocean: Freight Mode Guide",
      category: "Freight",
      author: "Noman Saeed",
      authorRole: "Freight Operations",
      dateText: "February 22, 2026",
      readTime: "6 Min Read",
      commentsText: "Comments (07)",
      cardImage: "assets/images/blog/blog-2-5.jpg",
      detailImage: "assets/images/blog/blog-details-img-1.jpg",
      detailImageOne: "assets/images/blog/blog-details-img-box-img-1.jpg",
      detailImageTwo: "assets/images/blog/blog-details-img-box-img-2.jpg",
      excerpt: "Each freight mode offers different tradeoffs in speed, cost, shipment volume, and route flexibility.",
      paragraphOne: "Road freight is flexible and strong for short to medium distance domestic movement. It supports frequent dispatch and direct-to-door logistics for many business categories.",
      paragraphTwo: "Rail freight is efficient for bulk inland movement, while ocean freight is suitable for high-volume international shipments where transit time is less urgent than cost efficiency.",
      sectionTitle: "Matching Mode to Shipment Priority",
      paragraphThree: "Build a freight matrix using delivery urgency, shipment weight, destination, and cost targets. This helps teams consistently choose the most practical mode.",
      quote: "Freight optimization starts with clear priorities, not assumptions.",
      tags: ["#Freight", "#RoadRailOcean"]
    },
    {
      id: "scalable-ecommerce-courier-workflow",
      title: "How to Build a Scalable Courier Workflow for Growing Ecommerce Brands",
      shortTitle: "Build a Scalable Courier Workflow",
      category: "Operations",
      author: "Maham Tariq",
      authorRole: "Process Lead",
      dateText: "March 01, 2026",
      readTime: "8 Min Read",
      commentsText: "Comments (09)",
      cardImage: "assets/images/blog/blog-2-6.jpg",
      detailImage: "assets/images/blog/blog-details-img-1.jpg",
      detailImageOne: "assets/images/blog/blog-details-img-box-img-1.jpg",
      detailImageTwo: "assets/images/blog/blog-details-img-box-img-2.jpg",
      excerpt: "Scalable courier workflows connect order intake, dispatch, tracking, and delivery without operational bottlenecks.",
      paragraphOne: "As order volume grows, manual coordination becomes the biggest risk to service quality. A scalable courier workflow requires clear handoffs from booking to dispatch to final delivery.",
      paragraphTwo: "Automation for status updates, exception handling, and reporting helps teams maintain speed while controlling costs. Standardized SOPs also reduce onboarding time for new operations staff.",
      sectionTitle: "Core Steps for Scalable Growth",
      paragraphThree: "Track key metrics like first attempt success, transit SLA, return ratio, and support ticket volume. Use these signals to continuously improve fulfillment performance.",
      quote: "Growth is sustainable when operations scale before customer complaints do.",
      tags: ["#Workflow", "#EcommerceGrowth"]
    }
  ];

  function formatDateParts(dateText) {
    var parsed = new Date(dateText);
    if (isNaN(parsed.getTime())) {
      return {
        day: "01",
        month: "Jan"
      };
    }
    return {
      day: String(parsed.getDate()).padStart(2, "0"),
      month: parsed.toLocaleString("en-US", {
        month: "short"
      })
    };
  }

  function applyCardContent(cardEl, blog) {
    if (!cardEl || !blog) return;

    var detailLink = "blog-details.html?id=" + encodeURIComponent(blog.id);
    var titleLink = cardEl.querySelector(".blog-two__title a, .blog-one__title a, .blog-list__title a");
    if (titleLink) {
      titleLink.textContent = blog.shortTitle;
      titleLink.setAttribute("href", detailLink);
    }

    var imageEl = cardEl.querySelector(".blog-two__img > img, .blog-one__img > img, .blog-list__img > img");
    if (imageEl) {
      imageEl.setAttribute("src", blog.cardImage);
    }

    var tagLink = cardEl.querySelector(".blog-two__tag a, .blog-one__tag a");
    if (tagLink) {
      tagLink.textContent = blog.category;
      tagLink.setAttribute("href", detailLink);
    }

    var dateMetaLink = cardEl.querySelector(".blog-two__meta li:first-child a, .blog-one__meta li:first-child a");
    if (dateMetaLink) {
      var cal = dateMetaLink.querySelector(".fas.fa-calendar-alt");
      dateMetaLink.textContent = blog.dateText;
      if (cal) {
        dateMetaLink.prepend(cal);
      }
      dateMetaLink.setAttribute("href", detailLink);
    }

    var authorName = cardEl.querySelector(".blog-two__author-content h5, .blog-one__author-content h5");
    if (authorName) authorName.textContent = blog.author;
    var authorDate = cardEl.querySelector(".blog-two__author-content p, .blog-one__author-content p");
    if (authorDate) authorDate.textContent = blog.dateText;

    var listDate = cardEl.querySelector(".blog-list__date p");
    if (listDate) {
      var parts = formatDateParts(blog.dateText);
      listDate.innerHTML = parts.day + "<br>" + parts.month;
    }
    var listUser = cardEl.querySelector(".blog-list__user p");
    if (listUser) {
      var userIcon = listUser.querySelector(".icon-user-1");
      listUser.textContent = "By " + blog.author;
      if (userIcon) {
        listUser.prepend(userIcon);
      }
    }
    var listText = cardEl.querySelector(".blog-list__text");
    if (listText) listText.textContent = blog.excerpt;
    var listReadMore = cardEl.querySelector(".blog-list__read-more");
    if (listReadMore) listReadMore.setAttribute("href", detailLink);

    cardEl.querySelectorAll(".blog-two__plus a, .blog-one__plus a, .blog-two__arrow, .blog-one__arrow, .blog-two__meta li:nth-child(2) a, .blog-one__meta li:nth-child(2) a").forEach(function (el) {
      el.setAttribute("href", detailLink);
    });
  }

  function applyBlogsToCards() {
    var allCards = Array.from(document.querySelectorAll(".blog-two__single, .blog-one__single, .blog-list__single"));
    var cards = allCards.filter(function (card) {
      return !card.closest(".owl-item.cloned");
    });
    if (!cards.length) return;

    cards.forEach(function (card, index) {
      var blog = BLOG_DATA[index % BLOG_DATA.length];
      applyCardContent(card, blog);
    });
  }

  function applyBlogDetailsTemplate() {
    var detailsRoot = document.querySelector(".blog-details__left");
    if (!detailsRoot) return;

    var params = new URLSearchParams(window.location.search);
    var blogId = params.get("id");
    var selected = BLOG_DATA.find(function (item) {
      return item.id === blogId;
    }) || BLOG_DATA[0];

    var detailImage = detailsRoot.querySelector(".blog-details__img > img");
    if (detailImage) detailImage.setAttribute("src", selected.detailImage);

    var dateBox = detailsRoot.querySelector(".blog-details__date p");
    if (dateBox) {
      var parts = formatDateParts(selected.dateText);
      dateBox.innerHTML = parts.day + "<br>" + parts.month;
    }

    var user = detailsRoot.querySelector(".blog-details__user p");
    if (user) {
      var userIcon = user.querySelector(".icon-user-1");
      user.textContent = "By " + selected.author;
      if (userIcon) {
        user.prepend(userIcon);
      }
    }

    var metaItems = detailsRoot.querySelectorAll(".blog-details__meta li a");
    if (metaItems.length >= 2) {
      var commentIcon = metaItems[0].querySelector(".fas.fa-comments");
      metaItems[0].textContent = selected.commentsText;
      if (commentIcon) metaItems[0].prepend(commentIcon);

      var clockIcon = metaItems[1].querySelector(".fas.fa-clock");
      metaItems[1].textContent = selected.readTime;
      if (clockIcon) metaItems[1].prepend(clockIcon);
    }

    var mainTitle = detailsRoot.querySelector(".blog-details__title");
    if (mainTitle) mainTitle.textContent = selected.title;
    var textOne = detailsRoot.querySelector(".blog-details__text-1");
    if (textOne) textOne.textContent = selected.paragraphOne;
    var textTwo = detailsRoot.querySelector(".blog-details__text-2");
    if (textTwo) textTwo.textContent = selected.paragraphTwo;
    var quoteText = detailsRoot.querySelector(".blog-details__author-text");
    if (quoteText) quoteText.textContent = "\"" + selected.quote + "\"";
    var quoteAuthor = detailsRoot.querySelector(".blog-details__author-name");
    if (quoteAuthor) quoteAuthor.innerHTML = selected.author + "<span> / " + selected.authorRole + "</span>";
    var secondaryTitle = detailsRoot.querySelector(".blog-details__title-2");
    if (secondaryTitle) secondaryTitle.textContent = selected.sectionTitle;
    var textThree = detailsRoot.querySelector(".blog-details__text-3");
    if (textThree) textThree.textContent = selected.paragraphThree;

    var detailBoxImages = detailsRoot.querySelectorAll(".blog-details__img-box-img img");
    if (detailBoxImages.length >= 2) {
      detailBoxImages[0].setAttribute("src", selected.detailImageOne);
      detailBoxImages[1].setAttribute("src", selected.detailImageTwo);
    }

    var tagLinks = detailsRoot.querySelectorAll(".blog-details__tag-list a");
    if (tagLinks.length >= 1) tagLinks[0].textContent = selected.tags[0] || "#Logistics";
    if (tagLinks.length >= 2) tagLinks[1].textContent = selected.tags[1] || "#Courier";

    var pageHeaderTitle = document.querySelector(".page-header__inner h3");
    if (pageHeaderTitle) pageHeaderTitle.textContent = selected.shortTitle;
    var breadcrumbItems = document.querySelectorAll(".thm-breadcrumb li");
    if (breadcrumbItems.length) breadcrumbItems[breadcrumbItems.length - 1].textContent = selected.shortTitle;

    document.title = selected.shortTitle + " || Tanspot || Tanspot HTML 5 Template";
  }

  applyBlogsToCards();
  applyBlogDetailsTemplate();


  // window scroll event

  $(window).on("scroll", function () {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 300;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }

    OnePageMenuScroll();

  });

  $(window).on("scroll", function () {
    handleScrollbar();
    if ($(".sticky-header--one-page").length) {
      var headerScrollPos = 130;
      var stricky = $(".sticky-header--one-page");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("active");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("active");
      }
    }

    var scrollToTopBtn = ".scroll-to-top";
    if (scrollToTopBtn.length) {
      if ($(window).scrollTop() > 500) {
        $(scrollToTopBtn).addClass("show");
      } else {
        $(scrollToTopBtn).removeClass("show");
      }
    }
  });











  $('select:not(.ignore)').niceSelect();



})(jQuery);

// CORS
XMLHttpRequest.withCredentials = true;

// Loading
(function () {
  function clearLoading() {
    document.getElementById("c-loading").classList.add("is-hide");
  }

  (function (d) {
    var config = {
        kitId: "lxb6bjm",
        scriptTimeout: 2000,
        async: true,
      },
      h = d.documentElement,
      t = setTimeout(function () {
        h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
      }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
      a = this.readyState;
      if (f || (a && a != "complete" && a != "loaded")) return;
      f = true;
      clearTimeout(t);
      try {
        Typekit.load(config);
      } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
  })(document);

  setTimeout(function () {
    clearLoading();
  }, 2000);
})();

// Slider
(function () {
  // MainImage Slider
  const Slider = document.querySelector(".splide");
  if (Slider) {
    const splide = new Splide(".splide", {
      type: "fade",
      autoplay: true,
      rewind: true,
      interval: 5000,
      arrows: false,
      speed: 3000,
      pagination: false,
    }).mount();
  }
})();

(function () {
  const select = document.querySelector(".header");
  const observer = new window.IntersectionObserver((entry) => {
    if (!entry[0].isIntersecting) {
      document.querySelector(".global-nav").classList.add("is-active");
    } else {
      document.querySelector(".global-nav").classList.remove("is-active");
    }
  });
  observer.observe(select);
})();

// LightBox
(function () {
  const luminousTrigger = document.querySelectorAll(".luminous");
  if (luminousTrigger !== null) {
    new LuminousGallery(luminousTrigger);
  }
})();

// Accordion
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    setUpAccordion();
  });

  const setUpAccordion = () => {
    const details = document.querySelectorAll(".js-details");
    const RUNNING_VALUE = "running";
    const IS_OPENED_CLASS = "is-opened";

    details.forEach((element) => {
      const summary = element.querySelector(".js-summary");
      const content = element.querySelector(".js-content");

      summary.addEventListener("click", (event) => {
        event.preventDefault();

        if (element.dataset.animStatus === RUNNING_VALUE) {
          return;
        }

        if (element.open) {
          element.classList.toggle(IS_OPENED_CLASS);
          const closingAnim = content.animate(closingAnimKeyframes(content), animTiming);
          element.dataset.animStatus = RUNNING_VALUE;

          closingAnim.onfinish = () => {
            element.removeAttribute("open");
            element.dataset.animStatus = "";
          };
        } else {
          element.setAttribute("open", "true");
          element.classList.toggle(IS_OPENED_CLASS);
          const openingAnim = content.animate(openingAnimKeyframes(content), animTiming);
          element.dataset.animStatus = RUNNING_VALUE;

          openingAnim.onfinish = () => {
            element.dataset.animStatus = "";
          };
        }
      });
    });
  };

  const animTiming = {
    duration: 400,
    easing: "ease-out",
  };

  const closingAnimKeyframes = (content) => [
    {
      height: content.offsetHeight + "px",
      opacity: 1,
    },
    {
      height: 0,
      opacity: 0,
    },
  ];

  const openingAnimKeyframes = (content) => [
    {
      height: 0,
      opacity: 0,
    },
    {
      height: content.offsetHeight + "px",
      opacity: 1,
    },
  ];
})();

$(function () {
  "use strict";

  // Smartphone Menu
  (function () {
    let state = false;
    let scrollPos;

    // Fixed Background
    function fixedBg() {
      if (state === false) {
        scrollPos = $(window).scrollTop();
        $("body").addClass("is-fixed").css({ top: -scrollPos });
        state = true;
      } else {
        removeFixedBg();
      }
    }

    function removeFixedBg() {
      $("body").removeClass("is-fixed").css({ top: 0 });
      window.scrollTo(0, scrollPos);
      state = false;
    }

    // HamburgerBtn&OverlayMenu Switch
    $("#js__sideMenuBtn").on("click", function () {
      $(this).toggleClass("is-active");
      $(".overlay").fadeToggle(100);
      fixedBg();
    });
  })();

  // MainImage Change
  (function () {
    const $setElem = $(".switch"),
      mdName = "_md",
      smName = "_sm",
      replaceWidth = 640;

    $setElem.each(function () {
      const $this = $(this);
      function imgSize() {
        if (window.innerWidth > replaceWidth) {
          $this.attr("src", $this.attr("src").replace(smName, mdName)).css({ visibility: "visible" });
        } else {
          $this.attr("src", $this.attr("src").replace(mdName, smName)).css({ visibility: "visible" });
        }
      }
      $(window).resize(function () {
        imgSize();
      });
      imgSize();
    });
  })();

  // AccordionMenu
  (function () {
    $(".accordion-menu").click(function () {
      $(this).toggleClass("is-active");
      $(this).find(".c-list-menu-md__child").slideToggle();
    });
  })();

  /* Vimeo トップページ */
  (function () {
    if ($("#video01").length) {
      const optionsVideo01 = {
        id: 835294112,
        transparent: false,
      };
      const playerVideo01 = new Vimeo.Player("video01", optionsVideo01);

      playerVideo01.on("play", function () {
        $(".play1").fadeOut();
      });
      playerVideo01.on("pause", function () {
        $(".play1").fadeIn();
      });
      $(".play1").on("click", function () {
        playerVideo01.play();
        $(".play1").fadeOut();
      });
    }
  })();

  /* Page Scroll */
  (function () {
    /* PageTop Btn */
    const topBtn = $(".page-top");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        topBtn.addClass("is-active");
      } else {
        topBtn.removeClass("is-active");
      }
    });

    topBtn.on("click", function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });

    // AnchorLink Scroll
    $(".innerAnchor").on("click", function () {
      var headerHeight = $("header").outerHeight();
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "body" : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({ scrollTop: position }, 200, "swing");
    });
  })();
});

setTimeout(function () {
  if (document.getElementsByTagName("html")[0].classList.contains("wf-active") != true) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }
}, 3000);

// 230829
jQuery(document).ready(function ($) {
  // 最初の状態で .active クラス以外の要素を非表示にする
  $("#js-tab-list .c-list-news:not(.active)").hide();

  $("#js-tab-menu .c-tab-item").on("click", function (e) {
    e.preventDefault();

    // クリックされたタブに active クラスを追加し、他のタブから active クラスを削除
    $("#js-tab-menu .c-tab-item").removeClass("active");
    $(this).addClass("active");

    var category = $(this).data("category");

    $("#js-tab-list .c-list-news").hide();
    $("#js-tab-list .c-list-news.category-" + category).show();
  });
});

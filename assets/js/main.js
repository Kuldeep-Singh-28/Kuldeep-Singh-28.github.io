/*======================================================================
 Table of Content:
 
 01. One Page Scrollspy
 02. Header Sticky
 03. Tooltip
 04. Skills LineProgressbar
 05. jQuery counterUp
 06. Porfolio Isotope Filter
 07. Magnific Popup
 7.1. Image Gallery Popup
 7.2. Youtube - Vimeo - SoundCloud Popup
 7.3. Porfolio Detail Popup
 7.4. Blog Detail Popup
 08. Form Validation
 09. Menu Toggle
 10. Back To Top Scroll Arrow
 ========================================================================*/

(function ($) {
  // Start of use strict
  "use strict";

  /*--------------------------------
     01. One Page Scrollspy
     ----------------------------------*/
  $("body").scrollspy({ target: "#navigation" });
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: $section.offset().top,
      },
      1000
    );
  }
  $("#navigation [data-scroll]").on("click", scrollToSection);
  $(this).addClass("active").siblings().removeClass("active");

  /*--------------------------------
     02. Header Sticky
     ----------------------------------*/
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("sticky-header fadeInDown");
    } else {
      $("#header").removeClass("sticky-header fadeInDown");
    }
  });
  $(".main-wrapper").on("click", ".about-btn", function () {
    $('.navbar li a[href="#about"]').trigger("click");
  });
  $(".main-wrapper").on("click", ".portfolio-btn", function () {
    $('.navbar li a[href="#portfolio"]').trigger("click");
  });

  /*--------------------------------
     03. Tooltip
     ----------------------------------*/
  function tooltip() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  tooltip();

  /*--------------------------------
     04. Skills LineProgressbar
     ----------------------------------*/
  function skill_html() {
    $("#html").LineProgressbar({
      percentage: 93,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_html();

  function skill_javaScript() {
    $("#javascript").LineProgressbar({
      percentage: 80,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_javaScript();

  function skill_python() {
    $("#python").LineProgressbar({
      percentage: 85,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_python();

  function skill_node_express() {
    $("#node_express").LineProgressbar({
      percentage: 82,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_node_express();

  function skill_react() {
    $("#react").LineProgressbar({
      percentage: 78,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_react();

  // design skills
  function skill_web_design() {
    $("#web-design").LineProgressbar({
      percentage: 90,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_web_design();

  function skill_figma() {
    $("#figma").LineProgressbar({
      percentage: 80,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_figma();

  function skill_photoshop() {
    $("#photoshop").LineProgressbar({
      percentage: 89,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_photoshop();

  function skill_AdobeXD() {
    $("#AdobeXD").LineProgressbar({
      percentage: 90,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_AdobeXD();

  function skill_wordpress() {
    $("#wordpress").LineProgressbar({
      percentage: 75,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_wordpress();

  //   other skills
  function skill_mongodb() {
    $("#mongodb").LineProgressbar({
      percentage: 80,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_mongodb();
  function skill_mysql() {
    $("#mysql").LineProgressbar({
      percentage: 85,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_mysql();

  function skill_web_development() {
    $("#web_development").LineProgressbar({
      percentage: 90,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_web_development();

  function skill_github() {
    $("#github").LineProgressbar({
      percentage: 88,
      radius: "3px",
      height: "10px",
      duration: 4000,
      backgroundColor: "#ddd",
    });
  }
  skill_github();

  /*--------------------------------
     05. jQuery counterUp
     ----------------------------------*/
  function counter_number() {
    $(".counter").countUp();
  }
  counter_number();

  /*--------------------------------
     06. Porfolio Isotope Filter
     ----------------------------------*/
  $(window).on("load", function () {
    /* Porfolio Filter */
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");
      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });

    /* Preloader */
    $(".preloader").removeClass("active");
  });
})(jQuery);

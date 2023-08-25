const realEstate = {

  heroBannerPosition: $("#hero-banner")[0].offsetTop ? $("#hero-banner")[0].offsetTop : 100000,
  lastScroll: 0,

  // Handle DOM Events
  handleDomEvents: function () {

    // Handle scroll event
    $(window).scroll(function () {
      const currentScroll = this.scrollY;
      if (currentScroll > realEstate.heroBannerPosition) {
        $(".main-header").addClass("attach");
        if (currentScroll > realEstate.lastScroll) {
          $(".main-header").removeClass("scrolled");
        } else {
          $(".main-header").addClass("scrolled");
        }
      } else {
        $(".main-header").removeClass("attach");
      }

      realEstate.lastScroll = currentScroll;
    });

    // Handle open, close dropdown
    $(".hero-dropdown-container").click(function () {
      const isActive = $(this).hasClass("active");
      if (!isActive) {
        $(this).addClass("active");
        $(this).find(".hero-dropdown-options").addClass("active");
        $(this).find(".hero-dropdown-arrow").addClass("active");
      } else {
        $(this).removeClass("active");
        $(this).find(".hero-dropdown-options").removeClass("active");
        $(this).find(".hero-dropdown-arrow").removeClass("active");
      }
    });

    // // Handle select option
    $(".hero-dropdown-option").click(function () {
      const currentOption = $(this).text();
      $(this).closest(".hero-dropdown-container").find(".choose-option").text(currentOption);
    });
  },

  init: function () {
    this.handleDomEvents();
  }

};

$(document).ready(function () {
  realEstate.init();

  
});
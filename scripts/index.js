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

    // form validation
    
  },

  init: function () {
    this.handleDomEvents();
  }

};

// $( "#form-abc" ).on( "submit", function( event ) {
//   event.preventDefault();
//   console.log(event);
// });

$("#myForm").validate({
  rules: {
    "first-name": "required",
    "last-name": "required",
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      number: true
    },
    comments: "required"
  },
  messages: {
    "first-name": "Please enter your first name.",
    "last-name": "Please enter your last name.",
    email: {
      required: "Please enter your email.",
      email: "Please enter a valid email address."
    },
    phone: {
      required: "Please enter your phone number.",
      number: "Please enter a valid phone number."
    },
    comments: "Please enter your comments or questions."
  },
  submitHandler: function(form, event) {
    // Display a success message using alert
    console.log(form, event);
    console.log(event);
    alert("Form submitted successfully!");

    return false; // Prevent the form from submitting traditionally
  }
});


$(document).ready(function () {
  realEstate.init();
  
  
});
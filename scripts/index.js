const realEstate = {
  heroBannerPosition: $("#hero-banner")[0].offsetTop
    ? $("#hero-banner")[0].offsetTop
    : 100000,
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

    // Handle select option
    $(".hero-dropdown-option").click(function () {
      const currentOption = $(this).text();
      $(this)
        .closest(".hero-dropdown-container")
        .find(".choose-option")
        .text(currentOption);
    });
  },

  init: function () {
    this.handleDomEvents();
  },
};

//Validate Sign up form
$("#signup").validate({
  rules: {
    firstname: {
      required: true,
      //only text allowed
      RegExp: /^[a-zA-Z]+$/,
    },
    lastname: {
      required: true,
      //only text allowed
      RegExp: /^[a-zA-Z]+$/,
    },
    username: {
      required: true,
      //username cannot contain special characters
      RegExp: /^[a-zA-Z0-9_]+$/,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 6,
    },
    confirm_password: {
      required: true,
      minlength: 6,
      equalTo: "#password",
    },
    phone: {
      required: true,
      minlength: 10,
      maxlength: 10,
      number: true,
    },
  },
  message: {
    firstname: {
      required: "Please enter your firstname",
    },
    lastname: {
      required: "Please enter your lastname",
    },
    username: {
      required: "Please enter your username",
      RegExp: "Username cannot contain special characters",
    },
    email: "Please enter a valid email address",
    password: {
      required: "Please provide a password",
      minlength: "Your password must be at least 6 characters long",
    },
    confirm_password: {
      required: "Please provide a password",
      minlength: "Your password must be at least 6 characters long",
      equalTo: "Please enter the same password as above",
    },
    phone: {
      required: "Please provide a phone number",
      minlength: "Your phone number must be at least 10 characters long",
      maxlength: "Your phone number must be at least 10 characters long",
      number: "Please enter a valid phone number",
    },
  },
  submitHandler: function (event, form) {
    event.submit;
    //log all the values as an object
    console.log(form);
    console.log(event.target.value);
  },
});

$("#form-abc").validate({
  rules: {
    firstname: "required",
    lastname: "required",
    email: {
      required: true,
      email: true,
    },
  },
  message: {
    firstname: {
      required: "Please enter your firstname",
      minlength: "Your firstname must consist of at least 3 characters",
    },
    lastname: {
      required: "Please enter your lastname",
      minlength: "Your lastname must consist of at least 3 characters",
    },
    email: "Please enter a valid email address",
  },
  submitHandler: function (form, event) {
    console.log(form);
    console.log(event);
    return false;
  },
});

// $("#form-abc").submit(function (e) {
//   e.preventDefault();
//   console.log(e);
// });

$(document).ready(function () {
  realEstate.init();
});

$("#registerForm").validate({
    rules: {
      "first-name": "required",
      "last-name": "required",
      "username": "required",
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        number: true
      },
      password: {
        required: true,
        minlength: 6
      },
      confirmPassword: {
        required: true,
        equalto: "#password"
      }
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
      password: {
        required: "Please enter your password.",
        minLength: "Please enter at least 6 characters"
      },
      confirmPassword: {
        equalTo: "Password confirmation does not match"
      }
    },
    
    submitHandler: function(form, event) {
        // Display a success message using alert
        console.log(form, event);
        console.log(event);
        alert("Form submitted successfully!");
    
        return false; // Prevent the form from submitting traditionally
      }
  });
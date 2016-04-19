$(document).ready(function() {

  headerParallax();
  validateFormOptional();

  // Header - Parallax effect
  function headerParallax() {
    $(window).on("scroll", function () {
      var windowScroll = $(this).scrollTop();

      $(".logo").css({
        "transform": "translate(0px, "+ windowScroll / 3 + "%)"
      });

      $(".back-image").css({
        "transform": "translate(0px, "+ windowScroll / 8 + "%)"
      });

      $(".fore-image").css({
        "transform": "translate(0px, -"+ windowScroll / 20 + "%)"
      });
    });
  }


  // Validate optional form inputs (name, email), when checkbox is checked
  function validateFormOptional() {
    var form = $("form");
    var submitButton = $("input[type=submit]");
    var checkbox = $("#optional");
    var nameInput = $("#name");
    var emailInput = $("#email");
    var nameLabel = $("label[for=name]");
    var emailLabel = $("label[for=email]");

    checkbox.on("change", function () {
      if (checkbox.prop('checked')) {
        // enable inpputs and fill in input placeholder
        nameInput.prop("disabled", false);
        nameInput.attr("placeholder", "Your Name");

        emailInput.prop("disabled", false);
        emailInput.attr("placeholder", "Your Email Address");
      } else {
        // disable inputs, clear inpput's placeholder and value
        nameInput.prop("disabled", true);
        nameInput.attr("placeholder", "");
        nameInput.val("");

        emailInput.prop("disabled", true);
        emailInput.attr("placeholder", "");
        emailInput.val("");
      }
    });

    // prevent from reloading the page on submit
    form.on("submit", function (event) {
      event.preventDefault();

      // inputs value
      var name = nameInput.val();
      var email = emailInput.val();

      // validate name and email always
      isNameValid(name);
      isEmailValid(email);

      // if checkbox checked make name and email required


      // validation functions
      function isNameValid (name) {
        if (name.length < 3) {
          console.log("Imie za krotkie");
        }
      }

      function isEmailValid (emailAddress) {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        console.log(email.length > 0 && emailRegex.test(emailAddress));
      }
    });
  }

}); // $(document).ready(function()

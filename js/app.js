$(document).ready(function() {

  parallax();
  validateFormOptional();


  function parallax() {
    $(window).on("scroll", function () {
      var windowScroll = $(this).scrollTop();

      // parallax on header
      $(".logo").css({
        "transform": "translate(0px, "+ windowScroll / 3 + "%)"
      });

      $(".back-image").css({
        "transform": "translate(0px, "+ windowScroll / 8 + "%)"
      });

      $(".fore-image").css({
        "transform": "translate(0px, -"+ windowScroll / 20 + "%)"
      });

      // parallax on team section
      if (windowScroll > $(".team").offset().top - $(window).height() / 2) {

        $(".photo-placeholder").each(function (i) {
          var self = $(this);

          if (!self.hasClass("is-visible")) {
            setTimeout(function () {
              self.addClass("is-visible");
            }, 150 * (i + 1));
          }
        });
      }
    }); // window scroll
  } // parallax


  // Validate optional form inputs (name, email), when checkbox is checked
  function validateFormOptional() {
    var form = $("form");
    var submitButton = $("input[type=submit]");
    var checkbox = $("#optional");
    var nameInput = $("#name");
    var emailInput = $("#email");
    var nameLabel = $("label[for=name]");
    var emailLabel = $("label[for=email]");

    var nameError = $("#name-error");
    var emailError = $("#email-error");

    nameInput.on("blur", isNameValid);
    emailInput.on("blur", isEmailValid);

    checkbox.on("change", function () {
      if (checkbox.prop('checked')) {

        // enable inpputs and fill in input placeholder
        nameInput.prop("disabled", false);
        nameInput.attr("placeholder", "Your Name");
        nameLabel.text("Name - required");

        emailInput.prop("disabled", false);
        emailInput.attr("placeholder", "Your Email Address");
        emailLabel.text("Email - required");

      } else {

        // disable inputs, clear input's placeholder and value
        nameInput.prop("disabled", true);
        nameInput.attr("placeholder", "");
        nameInput.val("");
        nameLabel.text("Name");
        nameError.html("&nbsp;");

        emailInput.prop("disabled", true);
        emailInput.attr("placeholder", "");
        emailInput.val("");
        emailLabel.text("Email");
        emailError.html("&nbsp;");
      }
    });

    // prevent from reloading the page on submit
    form.on("submit", function (event) {
      event.preventDefault();

      if (isNameValid() && isEmailValid()) {
        console.log("hurra");
        // setTimeout(function(){ alert("Hello"); }, 3000); ---> form sent ---> show info
      }
    });


    // validation functions
    function isNameValid() {
      var name = nameInput.val();

      if (name.length < 3) {
        nameError.text("Name too short - min. 3 letters");
        return false;
      } else {
        nameError.html("&nbsp;");
        return true;
      }
    }

    function isEmailValid() {
      var email = emailInput.val();
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      if (! emailRegex.test(email)) {
        emailError.text("Invalid email address");
        return false;
      } else {
        emailError.html("&nbsp;");
        return true;
      }
    }
  } // validateFormOptional()

}); // $(document).ready(function()

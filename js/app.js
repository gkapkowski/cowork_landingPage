$(document).ready(function() {


  $(window).on("scroll", function () {
    var windowScroll = $(this).scrollTop();
    console.log(windowScroll);

    $(".logo").css ({
      "transform": "translate(0px, "+ windowScroll / 3 + "%)"
    });

    $(".back-image").css ({
      "transform": "translate(0px, "+ windowScroll / 8 + "%)"
    });

    $(".fore-image").css ({
      "transform": "translate(0px, -"+ windowScroll / 20 + "%)"
    });
  });
});

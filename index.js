$(document).ready(function () {
  // everytime the orientation of the device is changed the web would reload,
  window.onorientationchange = function () {
    window.location.reload();
  };

  //show navbar

  $(".menu").click(function () {
    $(".mobile-sidebar").css("display", "flex");
  });

  //hidenavba

  $(".close-icon").click(function () {
    $(".mobile-sidebar").hide();
  });

  $(".nav-links")
    .children()
    .click(function () {
      $(".mobile-sidebar").hide();
    });
});

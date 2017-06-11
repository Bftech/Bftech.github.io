$(document).ready(function() {
  $("nav .about").click(function() {
    $("#main, #about").toggleClass("anim-hide");
    // $("#about").delay(600).fadeIn();
  });

  $("nav .back").click(function() {
    $("#main, #about").toggleClass("anim-hide");
    // $("#about").fadeOut();
    // $("#main").delay(600).fadeIn();
  });
});

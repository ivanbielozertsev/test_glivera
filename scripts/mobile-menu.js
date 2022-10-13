$(document).ready(function () {
  $("#mobile-menu-button").click(function() {
    $("#mobile-nav").css("display", "block");
  });

  $("#mobile-nav-close").click(function() {
    $("#mobile-nav").css("display", "none");
  });
});
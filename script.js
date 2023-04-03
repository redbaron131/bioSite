$(document).ready(function() {
  $(".image-container img").click(function() {
    if ($(this).hasClass("expanded")) {
      // if the image is already expanded, shrink it back to normal size
      $(this).removeClass("expanded");
      $(this).css({
        width: "",
        height: ""
      });
    } else {
      // if the image is not expanded, enlarge it
      $(this).addClass("expanded");
      $(this).css({
        width: "100%",
        height: "auto"
      });
    }
  });
});

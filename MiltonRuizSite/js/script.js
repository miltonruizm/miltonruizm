// makes navbar toggler disappear when clicking somwhere else in the page
$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#navbarToggler").collapse('hide');
    }
  });
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

// makes navbar change color when scrolling
var a = $(".navbar").offset().top;
$(document).scroll(function() {
if ($(this).scrollTop() > a) {
$('.navbar').css({
  "background": "#f0d8c8"
 //"background": "rgba(255,255,255,0.5)"
});
} else {
$('.navbar').css({
  "background": "white"
});
}
});

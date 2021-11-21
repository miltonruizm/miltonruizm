// makes navbar toggler disappear when clicking somwhere else in the page
//$(function () {
//  $("#navbarToggle").blur(function (event) {
//    var screenWidth = window.innerWidth;
//    if (screenWidth < 992) {
//      $("#navbarToggler").collapse('hide');
//    }
//  });
//  $("#navbarToggle").click(function (event) {
//    $(event.target).focus();
//  });
//});

// changes the aspect of the toggler button when active to an X
$(".toggle").click(function () {
$(this).toggleClass("active");
});

// makes all navbar(s) color changes when scrolling
var a = $(".navbar").offset().top;
$(document).scroll(function() {
if ($(this).scrollTop() > a) {
$('.navbar').css({
  "background": "#102e50"
});
} else {
$('.navbar').css({
  "background": "white"
});
}
});

var a = $(".nav-link").offset().top;
$(document).scroll(function() {
if ($(this).scrollTop() > a) {
$('.nav-link').css({
  "color": "#d4dae2"
});
} else {
$('.nav-link').css({
  "color": "#999999"
});
}
});


// get current year in footer
document.getElementById("year").innerHTML = new Date().getFullYear();

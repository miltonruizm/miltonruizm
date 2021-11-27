/*------------------
  Preloder
--------------------*/
'use strict';

$(window).on('load', function() {
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");
});

/*------------------
  Changes the aspect of the toggler button when active to an X:
--------------------*/

$(".toggle").click(function () {
$(this).toggleClass("active");
});

/*------------------
  Makes all navbar(s) color changes when scrolling:
--------------------*/

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
  "color": "black"
});
}
});

/*------------------
  Gets current year in footer:
--------------------*/

document.getElementById("year").innerHTML = new Date().getFullYear();

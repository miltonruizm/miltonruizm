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
   Animations
--------------------*/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


/*------------------
  Makes all navbar(s) color changes when scrolling:
--------------------*/
// Option 1
//var a = $(".navbar").offset().top;
//$(document).scroll(function() {

//if ($(this).scrollTop() > a) {
//$('.navbar').css({
//  "background": "#102e50"
//});
//} else {
//$('.navbar').css({
//  "background": "white"
//});
//}
//});

//Option 2
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.navbar').css('background', 'white');
    } else{
        $('.navbar').css('background', '#102e50');
    }
});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.nav-link').css('color', 'black');
    } else{
        $('.nav-link').css('color', '#d4dae2');
    }
});


/*------------------
  Scroll to Top Button:
--------------------*/
//Get the button
//let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function () {
//  scrollFunction();
//};

//function scrollFunction() {
//  if (
//    document.body.scrollTop > 20 ||
//    document.documentElement.scrollTop > 20
//  ) {
//    mybutton.style.display = "block";
//  } else {
//    mybutton.style.display = "none";
//  }
//}
// When the user clicks on the button, scroll to the top of the document
//mybutton.addEventListener("click", backToTop);

//function backToTop() {
//  document.body.scrollTop = 0;
//  document.documentElement.scrollTop = 0;
//};

/*------------------
  Gets current year in footer:
--------------------*/

document.getElementById("year").innerHTML = new Date().getFullYear();

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

/*-------*/
function revealhead() {
  var revealheads = document.querySelectorAll(".revealhead");

  for (var i = 0; i < revealheads.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealheads[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealheads[i].classList.add("active");
    } else {
      revealheads[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealhead);
/*-------*/

function revealslider() {
  var revealsliders = document.querySelectorAll(".revealslider");

  for (var i = 0; i < revealsliders.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsliders[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsliders[i].classList.add("active");
    } else {
      revealsliders[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealslider);
/*-------*/

function revealresearch1() {
  var revealresearch1s = document.querySelectorAll(".revealresearch1");

  for (var i = 0; i < revealresearch1s.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealresearch1s[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealresearch1s[i].classList.add("active");
    } else {
      revealresearch1s[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealresearch1);
/*-------*/

function revealresearch2() {
  var revealresearch2s = document.querySelectorAll(".revealresearch2");

  for (var i = 0; i < revealresearch2s.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealresearch2s[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealresearch2s[i].classList.add("active");
    } else {
      revealresearch2s[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealresearch2);
/*-------*/

function revealresearch3() {
  var revealresearch3s = document.querySelectorAll(".revealresearch3");

  for (var i = 0; i < revealresearch3s.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealresearch3s[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealresearch3s[i].classList.add("active");
    } else {
      revealresearch3s[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealresearch3);
/*-------*/

function revealresearch4() {
  var revealresearch4s = document.querySelectorAll(".revealresearch4");

  for (var i = 0; i < revealresearch4s.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealresearch4s[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealresearch4s[i].classList.add("active");
    } else {
      revealresearch4s[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealresearch4);

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

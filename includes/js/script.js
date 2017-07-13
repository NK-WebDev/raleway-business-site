const NAVICON=document.querySelector(".nav-toggle");
const NAVMENU=document.querySelector("nav");
const HEADER=document.querySelector("header");
const SLIDES=document.querySelectorAll(".testimonial");
const INDICATORS=document.querySelectorAll(".slide-indicator")
var navChange=false;
var slideNo=0;
var interval;
NAVICON.onclick=function () {
    this.classList.toggle("fa-bars");
    this.classList.toggle("fa-times");
    NAVMENU.classList.toggle("show");
};

/** changing the nav style on scroll for larger screens only **/
   document.body.onscroll=function () {
        if (window.scrollY>150 && navChange === false) {
            if (HEADER.classList.length===0) {
                HEADER.classList.add("scroll");
            }
            navChange=true;
        }
        if (window.scrollY<150) {
            if (HEADER.classList.length===1) {
                HEADER.classList.remove("scroll");
            }
            navChange=false;
        }
    };
/** slider **/
function slideChange(n){
    SLIDES[slideNo].classList.remove("active");
    INDICATORS[slideNo].classList.remove("active");
    slideNo=(n+SLIDES.length)%SLIDES.length;
    SLIDES[slideNo].classList.add("active");
    INDICATORS[slideNo].classList.add("active");
}
interval=setInterval(nextSlide,15000);

function nextSlide(){ 
    slideChange(slideNo+1);
}

/* slider indicators */
INDICATORS[0].onclick=function () {
    clearInterval(interval);
    slideChange(0);
};
INDICATORS[1].onclick=function () {
    clearInterval(interval);
    slideChange(1);
};
INDICATORS[2].onclick=function () {
    clearInterval(interval);
    slideChange(2);
};

const NAVICON=document.querySelector(".nav-toggle");
const NAVMENU=document.querySelector("nav");
const HEADER=document.querySelector("header");
var navChange=false;
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

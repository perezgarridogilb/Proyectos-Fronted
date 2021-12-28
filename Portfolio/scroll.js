window.addEventListener("scroll", function(){
var header = document.getElementById("header");
var nav = document.querySelector("nav");
var origOffsetY = nav.offsetTop;
    header.classList.toggle("abajo",window.pageYOffset > 211);
})
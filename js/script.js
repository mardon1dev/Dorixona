const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-list");

burger.addEventListener("click", ()=>{
    menu.classList.toggle("open");
    burger.classList.toggle("change")
})

let video = document.querySelector(".video__video");
let play = document.querySelector(".video__play");
let pause = document.querySelector(".video__pause");

play.addEventListener("click", ()=>{
    video.play();
    play.style.display = "none";
})

video.addEventListener("click", ()=>{
    video.pause();
    play.style.display = "grid"
})

const backtotop = document.querySelector(".top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    backtotop.style.display = "flex";
  } else {
    backtotop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
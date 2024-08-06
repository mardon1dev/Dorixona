const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-list");

burger.addEventListener("click", ()=>{
    menu.classList.toggle("open");
    burger.classList.toggle("change")
})
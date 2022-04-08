//VARIABLES
const headerEl = document.querySelector(".header");
const menuBtnIcon = document.querySelector(".menu__icon");
const overlay = document.getElementById("overlay");

//TOGGLE FUNCTION
const toggleNav = () => {
    headerEl.classList.toggle("nav--open");
    overlay.classList.toggle("show");

}
//EVENTLISTENER
menuBtnIcon.addEventListener("click", toggleNav)

// menuBtnIcon.addEventListener("click", (event) => {
//     event.stopPropagation()
//     overlay.classList.add("show");
// })
// menuBtnIcon.addEventListener("click", (event) => {
//     event.stopPropagation()
//     overlay.classList.remove("show");
// })



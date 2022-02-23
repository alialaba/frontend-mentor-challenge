// VARIABLES
const headerEl = document.querySelector(".header");
const btnEl = document.querySelector(".menu");

//eventListener
const menuClick = () => {
    headerEl.classList.toggle("nav--open");
}
btnEl.addEventListener("click", menuClick)


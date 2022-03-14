//VARIABLES
const headerEl = document.querySelector(".header");
const menuBtnIcon = document.querySelector(".menu__icon");

//TOGGLE FUNCTION
const toggleNav = () => {
    headerEl.classList.toggle("nav--open");
}
//EVENTLISTENER
menuBtnIcon.addEventListener("click", toggleNav)


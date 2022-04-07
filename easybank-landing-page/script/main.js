const headerEl = document.querySelector(".header__wrapper");
const menuBtnIcon = document.querySelector(".menu__icon");

const toggleNav = () => {
    headerEl.classList.toggle("nav-open");
}
menuBtnIcon.addEventListener("click", toggleNav)


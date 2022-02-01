// VARIABLES
const headerEl = document.querySelector(".header");
const btnEl = document.querySelector(".menu-toggle");

//eventListener
btnEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
})


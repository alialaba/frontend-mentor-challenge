const headerEl = document.querySelector(".header__wrapper");
const menuBtnIcon = document.querySelector(".menu__icon");

const toggleNav = () => {
    headerEl.classList.toggle("nav-open");
}
menuBtnIcon.addEventListener("click", toggleNav)

//SMOOTH SCROLLING

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("clicked");
        const href = link.getAttribute("href")
        if (href === "#") {
            window.scrollTo({
                left: 100,
                behavior: "smooth"
            })
        }
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth"
            })
        }
    })
})
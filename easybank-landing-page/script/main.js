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

        // Scroll back to top
        const href = link.getAttribute("href")
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth"
            })
        }

        // Close mobile navigation
        if (link.classList.contains("nav__link")) {
            headerEl.classList.toggle("nav-open")
        }
    })
})
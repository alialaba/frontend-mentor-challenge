// VARIABLES
const headerEl = document.querySelector(".header");
const btnEl = document.querySelector(".menu");

//eventListener
const menuClick = () => {
    headerEl.classList.toggle("nav--open");
}
btnEl.addEventListener("click", menuClick)

// slideshow functionality

let slideIndex = 1;

const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("testimonial__item");
    let dots = document.getElementsByClassName("dots__circle")

    //conditional checking
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    //for loop thru slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //for loop dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";


    console.log(slides, dots)
}
showSlides(slideIndex)

const plusSlide = (n) => {
    showSlides(slideIndex += n)
}
const currentSlide = (n) => {
    showSlides(slideIndex = n)
}
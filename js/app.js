// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar")
menu.addEventListener("click",()=>{
    menu.classList.toggle("toggle");
    navbar.classList.toggle("toggle");
})

window.document.addEventListener("scroll",()=>{
    menu.classList.remove("toggle")
    navbar.classList.remove("toggle")
})
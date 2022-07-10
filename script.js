const searchCont = document.querySelector('.search-container');
const closeBtn = document.querySelector('.search-writte .close');
const searchBtn = document.querySelector('.desktop-nav .search');
const overlay = document.querySelector('.overlay');
const deskNav = document.querySelector('.desktop-nav')

closeBtn.addEventListener("click", () => {
    searchCont.classList.toggle("active");
    overlay.classList.remove("show");
    deskNav.classList.remove("no-show");
})

searchBtn.addEventListener("click", () => {
    searchCont.classList.remove("active");
    overlay.classList.toggle("show");
    deskNav.classList.toggle("no-show");

})

overlay.addEventListener("click", () => {
    searchCont.classList.toggle("active");
    overlay.classList.remove("show");
    deskNav.classList.remove("no-show");
})

const searchBarMobile = document.querySelector('.mobile-search-container .search-writte .search-bar');
const mobileSearch = document.querySelector(".mobile-search-container");
const mobileNav = document.querySelector(".mobile-nav");
const cancel = document.querySelector(".cancel");

searchBarMobile.addEventListener("click", () => {
    mobileSearch.classList.add("active");
    mobileNav.classList.add("active");
    deskNav.classList.add("no-show");
})

cancel.addEventListener("click", () => {
    mobileSearch.classList.remove("active");
    mobileNav.classList.remove("active");
    deskNav.classList.remove("no-show");
})

const closeMobile = document.querySelector('.mobile-nav .lineas');

closeMobile.addEventListener("click", () => {
    deskNav.classList.toggle("hide");
    mobileSearch.classList.toggle("no-show");
    mobileNav.classList.toggle("no-bag");
})

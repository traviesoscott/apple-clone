const searchBtn = document.querySelector('nav .nav-desk .search');
const closeBtn = document.querySelector('.search-container .close');
const deskNav = document.querySelector('.nav-desk');
const searchCont = document.querySelector('.search-container');
const overlay = document.querySelector('.overlay');

searchBtn.addEventListener("click", () => {
    deskNav.classList.add("hide");
    searchCont.classList.remove("hide");
    overlay.classList.add("show");
})

closeBtn.addEventListener("click", () => {
    deskNav.classList.remove("hide");
    searchCont.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    deskNav.classList.remove("hide");
    searchCont.classList.add("hide");
    overlay.classList.remove("show");
})

const menuIconCont = document.querySelector('nav .menu-icon-cont');
const navCont = document.querySelector('.nav-container');

menuIconCont.addEventListener("click", () => {
    navCont.classList.toggle("active");
})


const searchBar = document.querySelector('.mobile-search-container .search-bar');
const nav = document.querySelector('.nav-container nav');
const searchInput = document.querySelector('.mobile-search-container input');
const cancelBtn = document.querySelector('.mobile-search-container .cancel');

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    deskNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    deskNav.classList.remove("move-down");
})

// gnb
const gnbdepth1 = document.querySelectorAll(".gnb-list > li");
const gnbdepth1Tag = document.querySelectorAll(".gnb-list > li > a");
const depth2 = document.querySelectorAll(".gnb-list > li > ul");

[...gnbdepth1].map((li) => {
    li.addEventListener("mouseenter", function (e) {
        const target = e.target;
        notShowMenu();
        showMenu(target);
        this.classList.add("on");
    });

    li.addEventListener("mouseleave", function (e) {
        const target = e.target;
        notShowMenu();
        this.classList.remove("on");
    });
});

[...gnbdepth1Tag].map((a) => {
    const lastLi = a.nextElementSibling.lastElementChild;
    a.addEventListener("focusin", function (e) {
        const target = e.target.parentElement;
        notShowMenu();
        showMenu(target);
    });
    lastLi.addEventListener("focusout", function (e) {
        const target = e.target.parentElement;
        notShowMenu();
    });
});

function showMenu(elem) {
    elem.querySelector("ul").style.display = "block";
}

function notShowMenu() {
    [...depth2].map((ul) => (ul.style.display = "none"));
}

const bodys = document.querySelector("body");
let allBtn = document.querySelectorAll(".btn-all");
let gnbMenu = document.querySelector(".menu-all");
let menuClose = document.querySelector(".btn-close");
let dimOpen = document.querySelector(".dim");

function menuAll() {
    gnbMenu.classList.add("is-active");
    bodys.classList.add("on");
    dimOpen.classList.add("open");
}

function closeMenu() {
    gnbMenu.classList.remove("is-active");
    bodys.classList.remove("on");
    dimOpen.classList.remove("open");
}

allBtn.forEach((item) => {
    item.addEventListener("click", menuAll);
});

// allBtn.addEventListener("click", menuAll);
menuClose.addEventListener("click", closeMenu);

let star = document.querySelectorAll(".btn-enjoy");
star.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle("on");
        item.parentNode.classList.toggle("on");
    });
});

// main swiper
let swiper = new Swiper(".main-banner-slider", {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let itemBtn = document.querySelectorAll(".btn-item");
itemBtn.forEach((item, ele) => {
    item.addEventListener("click", function () {
        itemBtn.forEach((idx) => {
            idx.classList.remove("on");
        });
        itemBtn[ele].classList.add("on");
    });
});

let pickBtn = document.querySelectorAll(
    ".item-btn, .map-infos .btn-wrap button, .btn-info, .map-items"
);
pickBtn.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle("on");
    });
});

// 유휴시설정보안내 swiper
const interSwiper = new Swiper(".inter-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

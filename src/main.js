'use strict';

// Header 페이지 스크롤시 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(window.scrollY);

    if (window.scrollY > headerHeight) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home-container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    const scrollNum = window.scrollY;
    // console.log(1 - scrollNum / homeHeight);
    home.style.opacity = 1 - scrollNum / homeHeight;
})


// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    const scrollNum = window.scrollY;
    if (scrollNum > homeHeight / 2 ) {
        arrowUp.classList.add('on');
    } else {
        arrowUp.classList.remove('on');
    }
})

// Navbar 토글버튼 클릭 처리
const btnMenu = document.querySelector('.btn-menu');
const headerNav = document.querySelector('.header-menu');

btnMenu.addEventListener('click', () => {
    // if (headerNav.classList.contains('open')) {
    //     headerNav.classList.remove('open');
    // } else {
    //     headerNav.classList.add('open');
    // }
    headerNav.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
// const navMenuItems = document.querySelectorAll('.header-menu-item');

// navMenuItems.forEach((item) => {
//     item.addEventListener('click', () => {
//         headerNav.classList.remove('open')
//     })
// });
headerNav.addEventListener('click', () => {
    headerNav.classList.remove('open')
})
let swiper = new Swiper('.main-banner-slider', {
    slidesPerView: 1,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let swiperSlider = new Swiper('.sec-banner .banner', {
    centeredSlides: false,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        319: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        430: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        799: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});

let itemFaq = document.querySelectorAll('.faq-item');
itemFaq.forEach((item, ele) => {
    item.addEventListener('click', function () {
        itemFaq.forEach((idx) => {
            idx.classList.remove('on');
        });
        itemFaq[ele].classList.add('on');
    });
});

let accodionBtn = document.querySelectorAll('.item-link, .acc-btn');
accodionBtn.forEach((btn, idx) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('is-active');
        accodionBtn.forEach((ele, current) => {
            if (idx !== current) {
                ele.parentNode.classList.remove('is-active');
            }
        });
    });
});

let windowWidth = window.innerWidth;
if (windowWidth <= 799) {
    let question = document.querySelectorAll('.question-wrap');
    question.forEach((idx, acc) => {
        idx.addEventListener('click', function () {
            question.forEach((e) => {
                e.nextElementSibling.classList.remove('is-active');
            });

            question[acc].nextElementSibling.classList.add('is-active');
        });
    });
}

let ingBtnView = document.querySelectorAll('.ing-detail .btn-view');
ingBtnView.forEach((ele) => {
    ele.addEventListener('click', function () {
        if (ele.classList.contains('on')) {
            ele.classList.remove('on');
            ele.parentElement.parentElement.style.border = '1px solid #C2C2C2';
            ele.innerHTML = `상세보기`;
        } else {
            ele.classList.add('on');
            ele.parentElement.parentElement.style.border = '1px solid #1161F8';
            ele.innerHTML = `수정`;
        }
    });
});

let ksaBtnView = document.querySelectorAll('.ksa-application .btn-view');
ksaBtnView.forEach((ele) => {
    ele.addEventListener('click', function () {
        if (ele.classList.contains('on')) {
            ele.classList.remove('on');
            ele.innerHTML = `수정`;
        } else {
            ele.classList.add('on');
            ele.innerHTML = `등록`;
        }
    });
});

let btnChoice = document.querySelectorAll('.btn-choice');
btnChoice.forEach((current) => {
    current.addEventListener('click', function () {
        console.log(current);
        if (current.classList.contains('on')) {
            current.classList.remove('on');
        } else {
            current.classList.add('on');
        }
    });
});

const detailSee = document.querySelector('.search-detail');
const citeBg = document.querySelector('.box-bg');

function detailSearch(e) {
    e.target.classList.toggle('is-active');
    if (citeBg.classList.contains('is-active')) {
        citeBg.classList.remove('is-active');
    } else {
        citeBg.classList.add('is-active');
    }
}

detailSee.addEventListener('click', detailSearch);

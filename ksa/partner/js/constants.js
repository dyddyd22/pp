// gnb
let body = document.querySelector('body');
let gnb = document.querySelector('.gnb');
let gnbInner = document.querySelector('.gnb > .gnb-inner');
let gnbOn = document.querySelector('.gnb-on');
let gnbBtn = document.querySelector('.btn-menu');
let moGnbBtn = document.querySelector('.m-btn-menu');
let btnClose = document.querySelector('.btn-close');
let dim = document.querySelector('.dim');

function btnClick(e) {
    gnb.classList.add('is-active');
    gnbInner.classList.add('on');

    let innerWidth = window.innerWidth;
    if (innerWidth <= 1280 && innerWidth >= 800) {
        dim.classList.add('open');
    }
}

gnbBtn.addEventListener('click', btnClick);

function closeBtn() {
    gnb.classList.remove('is-active');
    gnbInner.classList.remove('on');
    dim.classList.remove('open');
    if (innerWidth <= 799) {
        body.style.overflow = 'auto';
    }
}

btnClose.addEventListener('click', closeBtn);

// mobile gnb
function moClick() {
    gnb.classList.add('is-active');
    let innerWidth = window.innerWidth;
    if (innerWidth <= 799) {
        body.style.overflow = 'hidden';
    }
}

moGnbBtn.addEventListener('click', moClick);

// 자료실
let itemFaq = document.querySelectorAll('.faq-item');
itemFaq.forEach((item, ele) => {
    item.addEventListener('click', function () {
        console.log('!!!!');
        itemFaq.forEach((idx) => {
            idx.classList.remove('on');
        });
        itemFaq[ele].classList.add('on');
    });
});

// 참고 진행상태
let container = document.querySelector('.content');
let progressInfo = document.querySelector('.progress-info');
let progressBtn = document.querySelector('.progress-inner .btn');

function btnEvent(e) {
    const targetElem = e.target;

    if (targetElem.classList.contains('on')) {
        progressBtn.classList.remove('on');
        progressInfo.classList.remove('is-active');
    } else {
        progressBtn.classList.add('on');
        progressInfo.classList.add('is-active');
    }
}

progressBtn.addEventListener('click', btnEvent);

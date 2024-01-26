$(document).ready(function () {
    let gnbIn = '#gnb';
    let mainNav = '.main-nav';
    let subs = '.gnb-sub-list';
    let bg = '.gnb-bg';
    let btnAll = '.btn-all';
    let gnbSub = '.gnb-sub-item.item-three-tabs > a';
    let smClose = '.sm-close';

    // js 엎어야 하는 시작부분
    $(gnbIn).removeClass('on');
    $(gnbIn).hover(
        function (e) {
            e.preventDefault();
            $(subs + ',' + bg)
                .stop()
                .slideDown('fast', null, function () {
                    $(subs).css('visibility', 'visible');
                });
            $(mainNav).removeClass('active');
        },
        function () {
            $(subs + ',' + bg)
                .stop()
                .slideUp('fast', null, function () {
                    $(subs).removeAttr('style');
                    $(subs).css('visibility', 'hidden');
                });
            $(mainNav).removeClass('active');
            $(btnAll).removeClass('on');
        },
    );

    $(mainNav)
        .first()
        .focus(function () {
            $(gnbIn).trigger('mouseenter');
            $(this).addClass('active');
        });

    $(mainNav).focus(function () {
        $(mainNav).removeClass('active');
        $(this).addClass('active');
    });

    $(mainNav)
        .first()
        .keydown(function (e) {
            if (e.keyCode === 9) {
                if (e.shithKey) {
                    $(gnbIn).trigger('mouseleave');
                    $(this).removeClass('active');
                }
            }
        });

    $(subs)
        .last()
        .find('li:last a')
        .keydown(function (e) {
            if (e.keyCode === 9) {
                if (!e.shiftKey) {
                    $(gnbIn).trigger('mouseleave');
                    $(this).removeClass('active');
                }
            }
        });

    $(subs)
        .find('li:last a')
        .focus(function () {
            $(mainNav).removeClass('active');
            $(this).parents(subs).prev().addClass('active');
        });

    $(btnAll).on('click', function () {
        $(subs + ',' + bg)
            .stop()
            .slideDown('fast', null, function () {
                $(subs).css('visibility', 'visible');
            });
        $(mainNav).removeClass('active');
        $(this).toggleClass('on');
        console.log(this);
        if ($(this).hasClass('on')) {
            $('header').addClass('on');
            $(gnbIn).off('mouseenter mouseleave');
            $(gnbIn).addClass('on');
            $('.dim').addClass('on');
            $('.sm-only.gnb').addClass('on');

            $(mainNav).removeClass('active');
        } else {
            $(subs + ',' + bg)
                .stop()
                .slideUp('fast', null, function () {
                    $(subs).removeAttr('style');
                    $(subs).css('visibility', 'hidden');
                });

            $(gnbIn)
                .on('mouseenter mouseleave')
                .hover(
                    function () {
                        $(subs + ',' + bg)
                            .stop()
                            .slideDown('fast', null, function () {
                                $(subs).css('visibility', 'visible');
                            });
                        $(mainNav).removeClass('active');
                    },
                    function () {
                        $(subs + ',' + bg)
                            .stop()
                            .slideUp('fast', null, function () {
                                $(subs).removeAttr('style');
                                $(subs).css('visibility', 'hidden');
                            });
                        $(mainNav).removeClass('active');

                        $(btnAll).removeClass('on');
                    },
                );
            $('header').removeClass('on');
            $(gnbIn).removeClass('on');
            $('.dim').removeClass('on');
            $('.sm-only.gnb').removeClass('on');
        }

        $('body').toggleClass('on');

        $(smClose).on('click', function () {
            $('.sm-only.gnb').removeClass('on');
            $('.dim').removeClass('on');
            $('body').removeClass('on');
            $(subs).css('display', 'none');
            $('.menu-item').removeClass('is-active');
            $(gnbIn).removeClass('on');
            $(btnAll).removeClass('on');
            $(bg).css('display', 'none');
            $(gnbIn)
                .on('mouseenter mouseleave')
                .hover(
                    function () {
                        $(subs + ',' + bg)
                            .stop()
                            .slideDown('fast');
                        $(mainNav).removeClass('active');
                        $(subs).addClass('on');
                    },
                    function () {
                        $(subs + ',' + bg)
                            .stop()
                            .slideUp('fast');
                        $(mainNav).removeClass('active');
                        $(subs).removeClass('on');
                        $(btnAll).removeClass('on');
                    },
                );
        });
    });
    // js 엎어야 하는 끝부분

    $(gnbSub).on('click', function () {
        if ($(this).hasClass('is-active')) {
            $(bg).removeClass('on');
            $(this).removeClass('is-active');
        } else {
            $(bg).addClass('on');
            $(this).addClass('is-active');
        }
    });

    $('.datepicker').datepicker({
        language: 'ko',
        showOn: 'both',
        buttonImage: '/user/images/picker.svg',
        buttonImageOnly: true,
        dayNames: [
            '일요일',
            '월요일',
            '화요일',
            '수요일',
            '목요일',
            '금요일',
            '토요일',
        ],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames: [
            '1월',
            '2월',
            '3월',
            '4월',
            '5월',
            '6월',
            '7월',
            '8월',
            '9월',
            '10월',
            '11월',
            '12월',
        ],
        monthNamesShort: [
            '1월',
            '2월',
            '3월',
            '4월',
            '5월',
            '6월',
            '7월',
            '8월',
            '9월',
            '10월',
            '11월',
            '12월',
        ],
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear: true,
        yearSuffix: '년',

        beforeShow: function (input) {
            let iOffset = $('input').offset();
            setTimeout(function () {
                $('.datepicker').css({ left: iOffset });
            });
        },
    });

    // multiple select
    $('.multi-select').SumoSelect();
});

let body = document.querySelector('body');

let headSearch = document.querySelector('.head-search');
let allSearch = document.querySelector('.all-search');
let searchClose = document.querySelector('.search-close');
let dim = document.querySelector('.dim');

// head 검색
function searchBtn() {
    allSearch.classList.add('on');
    dim.classList.add('on');
    body.classList.add('on');
}
headSearch.addEventListener('click', searchBtn);

function closeSearch(e) {
    allSearch.classList.remove('on');
    dim.classList.remove('on');
    body.classList.remove('on');
}
searchClose.addEventListener('click', closeSearch);

const links = document.querySelectorAll('.itme-link');

links.forEach(function (ele, index) {
    ele.addEventListener('click', function (e) {
        e.preventDefault();

        this.parentNode.classList.toggle('is-active');

        links.forEach(function (item, idx) {
            if (index !== idx) {
                item.parentNode.classList.remove('is-active');
            }
        });
    });
});

let subTabsLink = document.querySelector('.subTabs');

function subTabMenu(e) {
    console.log(e.target);
    if (e.target.classList.contains('is-active')) {
        e.target.classList.remove('is-active');
    } else {
        e.target.classList.add('is-active');
    }
}
subTabsLink.addEventListener('click', subTabMenu);

let toggleBtn = document.querySelector('.toggle-btn');

function toggleClick(e) {
    if (e.target.classList.contains('on')) {
        e.target.classList.remove('on');
        swiper.autoplay.start();
    } else {
        e.target.classList.add('on');
        swiper.autoplay.stop();
    }
}
toggleBtn.addEventListener('click', toggleClick);

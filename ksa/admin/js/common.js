$(document).ready(function () {
    let lnbUI = {
        clickE: function (target, speed) {
            // var _self = this;
            let $target = $(target);
            // _self.speed = speed || 300;

            $target.each(function () {
                if ($(this).find('> ul').length > 0) {
                    return true;
                }
                $(this).addClass('noDepth');
            });

            $target.on('click', 'a', function () {
                let $this = $(this);
                let $depthTarget = $this.next(); // ul
                let $siblings = $this.parent().siblings(); // li

                if (!$this.parent('li').hasClass('noDepth')) {
                    $this.parent('li').find('ul li').removeClass('on');
                    $siblings.removeClass('on');

                    $this.parent('li').find('ul').slideUp();
                    $siblings.find('ul').slideUp();

                    if ($depthTarget.css('display') == 'none') {
                        $depthTarget.slideDown();
                        $this.parent().addClass('on');
                    } else {
                        $depthTarget.slideUp();
                        $this.parent().removeClass('on');
                    }
                } else {
                    console.log('noDepth');
                }
                return false;
            });
        },
    };

    lnbUI.clickE('.lnb li', 300);

    const menuBtn = $('.btn_menu');
    const lnbInner = $('.lnb');
    const lnbFirstItem = $('.lnb_wrap .lnb_first_item');

    $(menuBtn).click(function (e) {
        if (lnbInner.hasClass('on')) {
            lnbInner.removeClass('on');
            lnbFirstItem.removeClass('on');
            $('.lnb_wrap').find('ul').slideUp();
            menuBtn.removeClass('on');
        } else {
            menuBtn.addClass('on');
            lnbInner.addClass('on');
        }
    });

    $('html').click(function (e) {
        if (!$(e.target).hasClass('on')) {
            lnbInner.removeClass('on');
            menuBtn.removeClass('on');
        }
    });

    // datepicker 년, 월, 일 나오는 소스
    $('.datepicker').datepicker({
        language: 'ko',
        showOn: 'both',
        buttonImage: 'images/picker.svg',
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
    });

    // 달만 선택
    $('.picker-month').MonthPicker({
        pattern: 'yyyy-mm',
        months: [
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
    });

    $('#summernote').summernote({
        height: 300, // 에디터 높이
        minHeight: null, // 최소 높이
        maxHeight: null, // 최대 높이
        //focus: true, // 에디터 로딩후 포커스를 맞출지 여부
        lang: 'ko-KR', // 한글 설정
        // placeholder: "최대 2048자까지 쓸 수 있습니다", //placeholder 설정
    });

    // multiple select
    $('.multi-select').SumoSelect();

    let tabMenu = $('.tab_menu').offset().top;
    $(window).scroll(function () {
        let window = $(this).scrollTop();

        if (tabMenu <= window) {
            $('.tab_menu').addClass('on');
        } else {
            $('.tab_menu').removeClass('on');
        }
    });

    // dropdown 버튼
    $('.drop_btn').change(function () {
        let state = $('.drop_btn option:selected').val();
        if (state === 'option1') {
            $('.down_list').show();
        } else if (state === 'option2') {
            $('.down_list').show();
        } else if (state === 'option3') {
            $('.down_list').show();
        } else {
            $('.down_list').hide();
        }
    });

    $('.down_list li a').click(function () {
        $('.down_list').hide();
    });

    // 답변 삭제
    function delBtn() {
        const $noteInfo = $('.note_write .note_info');

        $noteInfo.off('click').on('click', function () {
            const $this = $(this);
            console.log($this);
            this.remove();
        });
    }
    delBtn();
});

// 팝업
const opens = document.querySelector('body > button.popup_btn');
const modal = document.querySelector('.popup_inner');
const close = document.querySelectorAll('.btn.pop_close');
const dim = document.querySelector('.dim');

function openPop(e) {
    e.preventDefault();
    if (modal.dataset) {
        modal.classList.add('open');
        dim.classList.add('open');
    }
}

function closePop(e) {
    e.preventDefault();
    let closeParent = e.target.parentNode.parentNode.parentNode.parentNode;
    if (closeParent.dataset.index === '1') {
        closeParent.classList.remove('open');
        dim.classList.remove('open');
    } else {
        closeParent.classList.remove('open');
    }
}

opens?.addEventListener('click', openPop);

if (close.length) {
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', closePop);
    }
}

// 브라우저별 체크
function getBrowser() {
    const browsers = [
        'Chrome',
        'Opera',
        'WebTV',
        'Whale',
        'Beonex',
        'Chimera',
        'NetPositive',
        'Phoenix',
        'Firefox',
        'Safari',
        'SkipStone',
        'Netscape',
        'Mozilla',
    ];

    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes('edg')) {
        return 'Edge';
    }

    if (userAgent.includes('trident') || userAgent.includes('msie')) {
        return 'Internet Explorer';
    }

    return (
        browsers.find((browser) => userAgent.includes(browser.toLowerCase())) ||
        'Other'
    );
}
getBrowser();

const targets = document.querySelector('.input_pw .btn_del');
if (getBrowser() === 'Edge') {
    targets.style.display = 'none';
}

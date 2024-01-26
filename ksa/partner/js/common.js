$(document).ready(function () {
    $('.datepicker').datepicker({
        language: 'ko',
        showOn: 'both',
        buttonImage: '../images/picker.svg',
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

        // changeMonth: true,
        // changeYear: true,
    });

    // multiple select
    $('.multi-select').SumoSelect();

    let tabMenu = $('.tab_menu').offset().top;
    $(window).scroll(function () {
        let window = $(this).scrollTop();

        if (tabMenu <= window) {
            $('.tab_menu').addClass('fixed');
        } else {
            $('.tab_menu').removeClass('fixed');
        }
    });

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
        placeholder: '최대 2048자까지 쓸 수 있습니다', //placeholder 설정
    });

    $('.chk-disabled-box .choice-false').click(function () {
        if (this.checked) {
            $('.chk-disabled-box input:text').prop('disabled', true);
        }
    });

    $('.chk-disabled-box .chioce-true').click(function () {
        if (this.checked) {
            $('.chk-disabled-box input:text').prop('disabled', false);
        }
    });
});

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

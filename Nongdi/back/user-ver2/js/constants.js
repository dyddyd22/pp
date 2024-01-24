// 달력
$(document).ready(function () {
    $(".datepicker").datepicker({
        language: "ko",
        showOn: "both",
        buttonImage: "../images/picker.svg",
        buttonImageOnly: true,
        dayNames: [
            "일요일",
            "월요일",
            "화요일",
            "수요일",
            "목요일",
            "금요일",
            "토요일",
        ],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        monthNamesShort: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        dateFormat: "yy-mm-dd",
        showMonthAfterYear: true,
        yearSuffix: "년",
    });
});

const btnFolding = document.querySelectorAll(".btn-folding");
const subInfo = document.querySelector(".sub-detail-info");

// 유휴시설정보안내 접기 버튼
btnFolding.forEach((e) => {
    e.addEventListener("click", function () {
        if (e.parentElement.parentElement.classList.contains("is-active")) {
            e.parentElement.parentElement.classList.remove("is-active");
            subInfo.style.borderLeft = "1px solid #ddd";
        } else {
            e.parentElement.parentElement.classList.add("is-active");
            subInfo.style.borderLeft = "0";
        }
    });
});

let aroundOver = document.querySelectorAll(".map-item");
aroundOver.forEach((item, ele) => {
    item.addEventListener("mouseenter", function () {
        aroundOver.forEach((idx) => {
            idx.classList.remove("on");
        });
        aroundOver[ele].classList.add("on");
    });
});

let boxOver = document.querySelectorAll(".measure .model-box");
boxOver.forEach((item, ele) => {
    item.addEventListener("mouseenter", function () {
        boxOver.forEach((idx) => {
            idx.classList.remove("on");
        });
        boxOver[ele].classList.add("on");
    });
});

let aroundBtn = document.querySelectorAll(".around-item");
aroundBtn.forEach((item, ele) => {
    item.addEventListener("click", function () {
        aroundBtn.forEach((idx) => {
            idx.classList.remove("on");
        });
        aroundBtn[ele].classList.add("on");
    });
});

// faq 아코디언
let accodionBtn = document.querySelectorAll(".item-link");
accodionBtn.forEach((btn, idx) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle("is-active");
        accodionBtn.forEach((ele, current) => {
            if (idx !== current) {
                ele.parentNode.classList.remove("is-active");
            }
        });
    });
});

// 창업지원사업 탭
let planItem = document.querySelectorAll(".plan-item");
let planInfos = document.querySelectorAll(".plan-infos");

planItem.forEach((tab, idx) => {
    tab.addEventListener("click", function () {
        planInfos.forEach((inner) => {
            inner.classList.remove("is-active");
        });

        planItem.forEach((item) => {
            item.classList.remove("is-active");
        });

        planItem[idx].classList.add("is-active");
        planInfos[idx].classList.add("is-active");
    });
});

// map page
let mapBtn = document.querySelector(".map-btn");
mapBtn.addEventListener("click", function () {
    if (mapBtn.classList.contains("is-active")) {
        this.classList.remove("is-active");
        aroundBtn.forEach((item) => {
            item.classList.remove("on");
        });
    } else {
        this.classList.add("is-active");
    }
});

let modelBox = document.querySelectorAll(".model-box");
modelBox.forEach((item, ele) => {
    item.addEventListener("click", function () {
        modelBox.forEach((idx) => {
            idx.classList.remove("on");
        });
        modelBox[ele].classList.add("on");
    });
});

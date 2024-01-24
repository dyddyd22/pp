$(document).ready(function () {
    let gnbUI = {
        clickE: function (target, speed) {
            // var _self = this;
            let $target = $(target);
            // _self.speed = speed || 300;

            $target.each(function () {
                if ($(this).find("> ul").length > 0) {
                    return true;
                }
                $(this).addClass("is-active");
            });

            $target.on("click", "a", function () {
                let $this = $(this);
                let $depthTarget = $this.next(); // ul
                let $siblings = $this.parent().siblings(); // li

                if (!$this.parent("li").hasClass("noDepth")) {
                    $this.parent("li").find("ul li").removeClass("on");
                    $siblings.removeClass("on");

                    $this.parent("li").find("ul").slideUp();
                    $siblings.find("ul").slideUp();

                    if ($depthTarget.css("display") == "none") {
                        $depthTarget.slideDown();
                        $this.parent().addClass("on");
                    } else {
                        $depthTarget.slideUp();
                        $this.parent().removeClass("on");
                    }
                } else {
                    console.log("noDepth");
                }
                return false;
            });
        },
    };

    gnbUI.clickE(".aside-list li", 200);

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

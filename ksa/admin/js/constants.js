// tab 버튼
const tabList = document.querySelectorAll('.tab_type .tabs li');
const tabInner = document.querySelectorAll('.tab_type .tab_info');

tabList.forEach((tab, idx) => {
    tab.addEventListener('click', function () {
        tabInner.forEach((inner) => {
            inner.classList.remove('on');
        });

        tabList.forEach((item) => {
            item.classList.remove('on');
        });

        tabList[idx].classList.add('on');
        tabInner[idx].classList.add('on');
    });
});

// 숫자 count
function count(type) {
    const numbers = document.querySelector('.number');
    const increase = document.querySelector('#increase');
    const decrease = document.querySelector('#decrease');

    let numTxt = numbers.innerText;

    if (type === 'plus') {
        numTxt = parseInt(numTxt) + 1;
    } else if (type === 'minus') {
        numTxt = parseInt(numTxt) - 1;
    }

    numbers.innerText = numTxt;
}
count();

function checkbox(check) {
    let chkInput = document.querySelectorAll('.company-expose .datepicker');
    for (let i = 0; i < chkInput.length; i++) {
        chkInput[i].disabled = check.checked ? false : true;

        if (chkInput[i].disabled) {
            chkInput[i].value = null;
        }
    }
}

let accodionBtn = document.querySelectorAll(".btn-more");
accodionBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle("is-active");
    });
});

const number = document.getElementById("count-nums");
const inplus = document.getElementById("btn-plus");
const inminus = document.getElementById("btn-minus");

inplus.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
};

inminus.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
};

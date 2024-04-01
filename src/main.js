const wrapper = document.querySelector(".wrapper")
const leftContainer = document.querySelector(".left")
const rightContainer = document.querySelector(".right")
const leftFigures = document.querySelectorAll(".left .img")
const rightFigures = document.querySelectorAll(".right .img")
const boom = document.querySelector(".boom")

wrapper.addEventListener("mousemove", (e) => {
    const position = e.pageX / leftContainer.clientWidth;
    leftFigures[0].style.transform = `translateX(${-position * 28}px)`;
    leftFigures[1].style.transform = `translateX(${-position * 70}px)`;
    leftFigures[2].style.transform = `translateX(${-position * 110}px)`;

    rightFigures[0].style.transform = `translateX(${position * 28}px)`;
    rightFigures[1].style.transform = `translateX(${position * 70}px)`;
    rightFigures[2].style.transform = `translateX(${position * 110}px)`;
});

window.addEventListener("load", () => {
    leftContainer.style.animation = `battleLeft 1.5s 2s cubic-bezier(0.65, 0, 0.35, 1)`
    rightContainer.style.animation = `battleRight 1.5s 2s cubic-bezier(0.65, 0, 0.35, 1)`
    boom.style.animation = `boom .4s 2.5s linear`
})
const $body = document.body;
const $slides = document.querySelectorAll('.slide');
const $leftBtn = document.getElementById('left');
const $rightBtn = document.getElementById('right');

let activeSlide = 0;

const setBgToBody = () => {
    $body.style.backgroundImage = $slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = () => {
    $slides.forEach($slide => $slide.classList.remove('active'));
    $slides[activeSlide].classList.add('active');
};

const setEvent = () => {
    $rightBtn.addEventListener('click', () => {
        activeSlide += 1;
        if (activeSlide > $slides.length - 1) activeSlide = 0;
        setActiveSlide();
        setBgToBody();
    });

    $leftBtn.addEventListener('click', () => {
        activeSlide -= 1;
        if (activeSlide < 0) activeSlide = $slides.length - 1;
        setActiveSlide();
        setBgToBody();
    });
};

const init = () => {
    setEvent();
    setBgToBody();
};

init();
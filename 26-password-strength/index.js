const $pwd = document.getElementById('password');
const $bg = document.getElementById('background');

const MAX_BLUR = 10;

const setPwdBlurEvent = () => {
    $pwd.addEventListener('input', event => {
        const input = event.target.value;
        const length = input.length;

        const blurValue = (MAX_BLUR - length) / MAX_BLUR;
        $bg.style.filter = `blur(${blurValue}rem)`;
    });
};

setPwdBlurEvent();
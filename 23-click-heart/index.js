/**
 * [way1]
 * - using dblclick event
 */
/**
 * [way2]
 * - using click event
 * - test time between clicks
 * -> if it's less than a certain times(ex. 800s), considers as a double click
 */

const $loveMe = document.querySelector('.loveMe');
const $times = document.querySelector('#times');

const DELAY_SECONDS = 800;
let clickedTime = null;
let likedTimes = 0;

const createHeart = event => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // 1. viewport
    const x = event.clientX;
    const y = event.clientY;

    // 2. offset of event target image
    const leftOffset = event.target.offsetLeft;
    const topOffset = event.target.offsetTop;

    // 3 working space of image
    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    $loveMe.appendChild(heart);

    // if not remove, it left on dom -> I can use like sticker! ☺️
    setTimeout(() => heart.remove(), DELAY_SECONDS - 200);
};

const updateLikedTimes = () => {
    likedTimes += 1;
    $times.innerHTML = likedTimes;
};

const setEvent = () => {
    $loveMe.addEventListener('click', event => {
        if (clickedTime === null || new Date().getTime() - clickedTime > DELAY_SECONDS) {
            clickedTime = new Date().getTime();
            return;
        }
        if (new Date().getTime() - clickedTime < DELAY_SECONDS) {
            clickedTime = null;
            createHeart(event);
            updateLikedTimes();
        }
    });
};

setEvent();
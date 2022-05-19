const $hour = document.querySelector('.hour');
const $minute = document.querySelector('.minute');
const $second = document.querySelector('.second');
const $time = document.querySelector('.time');
const $date = document.querySelector('.date');
const $toggle = document.querySelector('.toggle');

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MAX_ANGLE = 360;

const setEventModeChange = () => {
    $toggle.addEventListener('click', event => {
        const html = document.querySelector('html');

        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            event.target.innerHTML = 'Dark Mode';
            return;
        }

        html.classList.add('dark');
        event.target.innerHTML = 'Light Mode';
    });
};

const setTime = () => {
        const time = new Date();
        const month = time.getMonth();
        const date = time.getDate();
        const hours = time.getHours();
        const hoursForClock = hours % 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        $hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, MAX_ANGLE)}deg)`;
        $minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, MAX_ANGLE)}deg)`;
        $second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, MAX_ANGLE)}deg)`;

        $date.innerHTML = `${DAYS[date]}, ${MONTHS[month]} <span class="circle">${date}</span>`;
        $time.innerHTML = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
};

/**
 * @description
 * - map a range of number to another range of numbers
 * - stack overflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 * @param {*} num
 * @param {*} in_mun
 * @param {*} in_max
 * @param {*} out_min
 * @param {*} out_max
 * @returns
 */
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

setEventModeChange();
setInterval(setTime, 1000);
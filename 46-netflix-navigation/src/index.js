const openBtnEl = document.querySelector('.open-btn');
const closeBtnEl = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

openBtnEl.addEventListener('click', () => nav.forEach(el => el.classList.add('visible')));
closeBtnEl.addEventListener('click', () => nav.forEach(el => el.classList.remove('visible')));

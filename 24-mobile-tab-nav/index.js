const $contents = document.querySelectorAll('.content');
const $navList = document.querySelectorAll('nav ul li');

const hideAllContents = () => {
    $contents.forEach($content => $content.classList.remove('show'));
};

const hideAllNav = () => {
    $navList.forEach($nav => $nav.classList.remove('active'));
};

const setEvent = () => {
    $navList.forEach(($nav, idx) => {
        $nav.addEventListener('click', () => {
            hideAllNav();
            $nav.classList.add('active');

            hideAllContents();
            $contents[idx].classList.add('show');
        });
    });
};

setEvent();
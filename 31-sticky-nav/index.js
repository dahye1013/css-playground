const $nav = document.querySelector('.nav');

const NAV_BOUNDARY = 150;

const handleNav = () => {
    if (window.scrollY > $nav.offsetHeight + NAV_BOUNDARY) {
        $nav.classList.add('active');
        return;
    }

    $nav.classList.remove('active');
};

window.addEventListener('scroll', handleNav);
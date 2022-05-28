const $toggle = document.querySelector('.toggle');
const $body = document.querySelector('.body');
const $good = document.getElementById('good');

const doTrick = target => {
    if (target.checked) {
        $body.classList.add('mint');
        return;
    }

    $body.classList.remove('mint');
};

$toggle.addEventListener('change', e => doTrick(e.target));
const $container = document.getElementById('container');

const COLOR_TYPES = ['#fa5252', '#be4bdb', '#4c6ef5', '#82c91e', '#fab005'];
const SQUARE_QUANTITY = 500;

const getRandomColor = () => {
    return COLOR_TYPES[Math.floor(Math.random() * COLOR_TYPES.length)];
};
const removeColor = $el => {
    $el.style.backgroundColor = '#1d1d1d';
    $el.style.boxShadow = '0 0 2px #000';
};

const setColor = $el => {
    const color = getRandomColor();
    $el.style.backgroundColor = color;
    $el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const makeSquares = () => {
    for (let i = 0; i < SQUARE_QUANTITY; i++) {
        const $square = document.createElement('div');
        $square.classList.add('square');

        $square.addEventListener('mouseover', () => setColor($square));
        $square.addEventListener('mouseout', () => removeColor($square));

        $container.appendChild($square);
    }
};

makeSquares();
const $container = document.querySelector('.container');
const unsplashUrl = 'https://source.unsplash.com/random';
const rows = 3;

const generateRandomImg = () => {
    const img = document.createElement('img');
    img.src = `${unsplashUrl}/${getRandomSize()}`
    return img;
}

const getRandomNr = () => {
    return Math.floor(Math.random() * 10) + 300;
}

const getRandomSize = () => {
    return `${getRandomNr()}x${getRandomNr()}`
}

const images = Array.from({ length: 10 * rows }, () => generateRandomImg());

images.forEach(image => {
    $container.appendChild(image);
})

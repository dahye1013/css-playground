const $text = document.getElementById('text');
const $speed = document.getElementById('speed');
const text = 'Hi ☺️ This is Dahye! Have a Good Day~!';

let idx = 1;
let speed = 300 / $speed.value;

const writeText = () => {
  $text.innerText = text.slice(0, idx);

  idx += 1;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
};

writeText();

$speed.addEventListener('input', e => (speed = 300 / e.target.value));

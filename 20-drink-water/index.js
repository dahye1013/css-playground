const $smallCups = document.querySelectorAll('.cup-small');
const $liters = document.getElementById('liters');
const $percentage = document.getElementById('percentage');
const $remained = document.getElementById('remained');

const updateBigCup = () => {
  const fullCups = document.querySelectorAll('.cup-small.full').length;

  const totalCups = $smallCups.length;
  if (fullCups) {
    $percentage.style.visibility = 'hidden';
    $percentage.style.height = 0;
  }

  if (fullCups === totalCups) {
    $remained.style.visibility = 'hidden';
    $remained.style.height = 0;
  } else {
    $remained.style.visibility = 'visible';
    $liters.innerText = `${(2000 - 250 * fullCups) / 1000}L`;
  }

  $percentage.style.visibility = 'visible';
  $percentage.style.height = `${(fullCups / totalCups) * 330}px`;
  $percentage.innerText = `${(fullCups / totalCups) * 100}%`;
};

const highlightCups = clickedIndex => {
  // 1. toggle current cup (clicked same cup & next cup is empty)
  if (
    $smallCups[clickedIndex].classList.contains('full') &&
    !$smallCups[clickedIndex].nextElementSibling.classList.contains('full')
  ) {
    clickedIndex -= 1;
  }

  // 2. fill small cups
  $smallCups.forEach((cup, idx) => {
    const isFull = idx <= clickedIndex;
    isFull ? cup.classList.add('full') : cup.classList.remove('full');
  });

  // 3. update big cup
  updateBigCup();
};

$smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

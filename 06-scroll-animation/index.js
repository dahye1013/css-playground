const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    //if the top of the box is less than the trigger bottom show
    if (boxTop < triggerBottom) box.classList.add('show');
    if (boxTop > triggerBottom) box.classList.remove('show');
  });
}

checkBoxes();

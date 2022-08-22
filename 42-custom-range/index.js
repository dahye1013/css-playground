const $range = document.getElementById('range');

$range.addEventListener('input', e => {
  const { nextElementSibling: label, value } = e.target;
  label.textContent = value;
});

import {
  resultElement,
  lengthElement,
  upperCaseElement,
  lowerCaseElement,
  numberCaseElement,
  symbolsCaseElement,
  generateBtn,
} from './selector.js';

import randomFunc from './util/randomFunc.js';

const generatePassword = (length, types) => {
  let generatePassword = Array.from({ length });
  const selectedTypes = Object.entries(types)
    .filter(([_, v]) => v)
    .map(([k]) => k);

  for (let i = 0; i < generatePassword.length; i += selectedTypes.length) {
    selectedTypes.forEach((typeKey, j) => {
      generatePassword[i + j] = randomFunc[typeKey]();
    });
  }

  return generatePassword.slice(0, length).join('');
};

generateBtn.addEventListener('click', () => {
  const length = lengthElement.valueAsNumber;
  const isUpper = upperCaseElement.checked;
  const isLower = lowerCaseElement.checked;
  const isNumber = numberCaseElement.checked;
  const isSymbol = symbolsCaseElement.checked;

  if (!length) {
    alert('please enter the password length.');
    return;
  }

  const types = {
    lower: isUpper,
    upper: isLower,
    number: isNumber,
    symbol: isSymbol,
  };

  resultElement.innerText = generatePassword(length, types);
});

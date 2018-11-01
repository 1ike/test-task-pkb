/**
 *  Необходимо реализовать функцию Caesar для кода ниже,
 * которая будет применять шифр Цезаря с указанным ключом (сдвигом) для указанной строки.
 *  Алфивит - 256 символов.
 */


const alphabet = 256;
const lowerLimitCode = 65;
const upperLimitCode = lowerLimitCode + alphabet;


const getShiftedCode = (code, shift) => {
  const shiftedCode = code + shift;

  if (shiftedCode > upperLimitCode) {
    return lowerLimitCode + ((shiftedCode - upperLimitCode) % alphabet);
  }
  if (shiftedCode < lowerLimitCode) {
    return upperLimitCode - ((lowerLimitCode - shiftedCode) % alphabet);
  }

  return shiftedCode;
};


const Caesar = shift => (input) => {
  if (!shift) return input;

  return input
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);
      const shiftedCode = getShiftedCode(code, shift);

      return String.fromCharCode(shiftedCode);
    })
    .join('');
};


export default Caesar;

/* const enc = Caesar(3);
enc('ABC'); // DEF
enc('hello'); // khoor
Caesar(10)('script'); // }m|sz~ */

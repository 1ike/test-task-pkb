/**
 *  Напишите, пожалуйста, код, который будет преобразовывать строку в волну:
 *    - Каждый символ, должен быть помещен в span;
 *    - До середины строки каждый тег span должен иметь
 *      увеличенный на 5 пикселей шрифт по отношению к предыдущему,
 *      начиная с 10 пикселей;
 *    - После середины размер шрифта должен уменьшаться обратно;
 *    - Пробелы не должны влиять на изменение размера.
 *
 *  Для реализации используйте строку из тега input,
 * результат поместите в тег .result:
 *  <div><input type="text"></div>
 *  <div class="result"></div>
 *
 *  Example of result: __tests__/__fixtures__/wave.png
 */

/* const config = {
  inputSelector: 'input',
  outputSelector: '.result',
  startSize: 10,
  step: 5,
  measureUnit: 'px',
}
 */

const getSupportedEvent = (elem, eventsNames) => {
  for (let i = 0; i < eventsNames.length; i++) {
    if (`on${eventsNames[i].trim().toLowerCase()}` in elem) {
      return eventsNames[i];
    }
  }
};

const wrapInSpan = (char, fontSize) => `<span style="font-size:${fontSize}">${char}</span>`;

const dropUselessSpaces = (char, idx, chars) => !(char === ' ' && chars[idx - 1] === ' ');

export const transformChar = (state, char, idx, chars) => {
  const {
    transformedChars,
    size,
    startSize,
    step,
    measureUnit,
  } = state;


  let newSize = size;
  if (idx && char !== ' ') {
    newSize = idx < chars.length / 2 ? size + step : size - step;
  }


  const fontSize = `${char === ' ' ? startSize : newSize}${measureUnit}`;
  const newChar = wrapInSpan(char, fontSize);

  return {
    ...state,
    size: newSize,
    transformedChars: [...transformedChars, newChar],
  };
};

export const transformTextToWave = (text, config) => {
  const chars = text.split('');

  const initState = {
    transformedChars: [],
    size: config.startSize,
    startSize: config.startSize,
    step: config.step,
    measureUnit: config.measureUnit,
  };

  const { transformedChars } = chars
    .filter(dropUselessSpaces) // optionally, can be commented
    .reduce(transformChar, initState);

  return transformedChars.join('');
};


const makeWave = (config) => {
  const { inputSelector, outputSelector } = config;

  const input = document.querySelector(inputSelector);
  const output = document.querySelector(outputSelector);

  const events = ['input', 'change', 'keyup', 'blur'];
  const supportedEvent = getSupportedEvent(input, events);

  input.addEventListener(supportedEvent, () => {
    const wave = transformTextToWave(input.value.trim(), config);
    output.innerHTML = wave;
  });
};

export default makeWave;

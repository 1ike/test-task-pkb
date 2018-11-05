import makeWave, { transformTextToWave } from '../src/makeWave';

const config = {
  inputSelector: 'input',
  outputSelector: '.result',
  startSize: 10,
  step: 5,
  measureUnit: 'px',
};

const testTransform = (text, expected) => {
  const html = transformTextToWave(text, config);

  expect(html).toBe(expected);
};

const testDOM = (text, expected) => {
  document.body.innerHTML = `
  <div><input type="text"></div>
  <div class="result"></div>
`;

  makeWave(config);

  const input = document.querySelector(config.inputSelector);
  const output = document.querySelector(config.outputSelector);
  input.value = text;
  input.dispatchEvent(new Event('input'));
  const received = output.innerHTML;

  expect(received).toBe(expected);
};

const textABC = 'abc';
const expectedABC = '<span style="font-size:10px">a</span><span style="font-size:15px">b</span><span style="font-size:10px">c</span>';


describe('makeWave', () => {
  test('odd length', () => {
    testTransform(textABC, expectedABC);
  });

  test.skip('even length', () => { // skipped because unclear problem specification
    const text = 'abcd';
    const expected = '<span style="font-size:10px">a</span><span style="font-size:15px">b</span><span style="font-size:15px">c</span><span style="font-size:10px">d</span>';

    testTransform(text, expected);
  });

  test.skip('spaces', () => { // skipped because unclear problem specification
    const text = ' ab   cd ';
    const expected = '<span style="font-size:10px"> </span><span style="font-size:10px">a</span><span style="font-size:15px">b</span><span style="font-size:10px"> </span><span style="font-size:10px"> </span><span style="font-size:10px"> </span><span style="font-size:15px">c</span><span style="font-size:10px">d</span><span style="font-size:10px"> </span>';

    testTransform(text, expected);
  });

  test('DOM abc', () => {
    testDOM(textABC, expectedABC);
  });

  test('DOM example', () => {
    const text = 'hello world, this is test string';
    const expected = '<span style="font-size:10px">h</span><span style="font-size:15px">e</span><span style="font-size:20px">l</span><span style="font-size:25px">l</span><span style="font-size:30px">o</span><span style="font-size:10px"> </span><span style="font-size:35px">w</span><span style="font-size:40px">o</span><span style="font-size:45px">r</span><span style="font-size:50px">l</span><span style="font-size:55px">d</span><span style="font-size:60px">,</span><span style="font-size:10px"> </span><span style="font-size:65px">t</span><span style="font-size:70px">h</span><span style="font-size:75px">i</span><span style="font-size:70px">s</span><span style="font-size:10px"> </span><span style="font-size:65px">i</span><span style="font-size:60px">s</span><span style="font-size:10px"> </span><span style="font-size:55px">t</span><span style="font-size:50px">e</span><span style="font-size:45px">s</span><span style="font-size:40px">t</span><span style="font-size:10px"> </span><span style="font-size:35px">s</span><span style="font-size:30px">t</span><span style="font-size:25px">r</span><span style="font-size:20px">i</span><span style="font-size:15px">n</span><span style="font-size:10px">g</span>';

    testDOM(text, expected);
  });
});

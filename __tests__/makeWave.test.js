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

const textABC = 'abc';
const expectedABC = '<span style="font-size:10px">a</span><span style="font-size:15px">b</span><span style="font-size:10px">c</span>';


describe('makeWave', () => {
  test('odd length', () => {
    testTransform(textABC, expectedABC);
  });

  test('even length', () => {
    const text = 'abcd';
    const expected = '<span style="font-size:10px">a</span><span style="font-size:15px">b</span><span style="font-size:15px">c</span><span style="font-size:10px">d</span>';

    testTransform(text, expected);
  });

  test('spaces', () => {
    const text = ' ab   cd ';
    const expected = '<span style="font-size:10px"> </span><span style="font-size:10px">a</span><span style="font-size:15px">b</span><span style="font-size:10px"> </span><span style="font-size:10px"> </span><span style="font-size:10px"> </span><span style="font-size:15px">c</span><span style="font-size:10px">d</span><span style="font-size:10px"> </span>';

    testTransform(text, expected);
  });

  test('DOM', () => {
    document.body.innerHTML = `
      <div><input type="text"></div>
      <div class="result"></div>
    `;

    makeWave(config);

    const input = document.querySelector(config.inputSelector);
    const output = document.querySelector(config.outputSelector);
    input.value = textABC;
    input.dispatchEvent(new Event('input'));
    const received = output.innerHTML;

    expect(received).toBe(expectedABC);
  });
});

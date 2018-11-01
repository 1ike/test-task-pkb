import Caesar from '../src/Caesar';

const expectations = (alphabet = 0) => {
  const enc = Caesar(alphabet + 3);

  expect(enc('ABC')).toBe('DEF');
  expect(enc('hello')).toBe('khoor');
  expect(Caesar(alphabet + 10)('script')).toBe('}m|sz~');
};

describe('Caesar', () => {
  test('its alive', () => {
    expectations();
  });

  test('shift absent', () => {
    expect(Caesar()('hello')).toBe('hello');
    expect(Caesar(0)('hello')).toBe('hello');
  });

  test('shift more than alphabet', () => {
    const alphabet = 512;

    expectations(alphabet);
  });

  test('negative shift more than alphabet', () => {
    const alphabet = -512;

    expectations(alphabet);
  });
});

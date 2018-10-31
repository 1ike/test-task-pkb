import { getHashTag, clearFromSpecChars } from '../src/getHashTag';

describe('getHashTag', () => {
  test('is string', () => {
    expect(getHashTag(111)).toBe(false);
    expect(getHashTag('111')).toBeTruthy();
  });
  test('empty string', () => {
    expect(getHashTag('')).toBe(false);
    expect(getHashTag('  ')).toBe(false);
  });
  test('clear special chars', () => {
    const input = 'Пример НОВОГО   "хэштега"';
    const expected = 'Пример НОВОГО   хэштега';
    expect(clearFromSpecChars(input)).toBe(expected);
  });
  test('its alive', () => {
    const input = 'Пример НОВОГО   "хэштега"';
    const expected = '#ПримерНовогоХэштега';
    expect(getHashTag(input)).toBe(expected);
  });
});

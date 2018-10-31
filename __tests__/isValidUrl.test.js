import isValidUrl from '../src/isValidUrl';

describe('isValidUrl', () => {
  test('http', () => {
    expect(isValidUrl('http://pikabu.ru/page/')).toBe(true);
  });
  test('https', () => {
    expect(isValidUrl('https://pikabu.ru/page/')).toBe(true);
  });
  test('wrong scheme', () => {
    expect(isValidUrl('htt://pikabu.ru/page/')).toBe(false);
    expect(isValidUrl('http//pikabu.ru/page/')).toBe(false);
    expect(isValidUrl('http:/pikabu.ru/page/')).toBe(false);
  });

  test('subdomain', () => {
    expect(isValidUrl('https://subdomain-1.pikabu.ru/page/')).toBe(true);
    expect(isValidUrl('https://sub-1.su2b.pikabu.ru?page/')).toBe(true);
  });
  test('wrong subdomain', () => {
    expect(isValidUrl('http://.pikabu.ru/page/')).toBe(false);
    expect(isValidUrl('http://sub_domain.pikabu.ru/page/')).toBe(false);
  });

  test('wrong host', () => {
    expect(isValidUrl('http://ikabu.ru/page/')).toBe(false);
    expect(isValidUrl('http://img.piabu.ru/page/')).toBe(false);
    expect(isValidUrl('http://img.pikabu.ruu/page/')).toBe(false);
    expect(isValidUrl('http://img.pikaburu/page/')).toBe(false);
  });

  test('port', () => {
    expect(isValidUrl('https://pikabu.ru:3000/page/')).toBe(true);
    expect(isValidUrl('http://sub-1.su2b.pikabu.ru:/page/')).toBe(true);
  });
  test('wrong port', () => {
    expect(isValidUrl('http://ikabu.ru:300page/')).toBe(false);
  });

  test('path', () => {
    expect(isValidUrl('https://pikabu.ru:3000/')).toBe(true);
    expect(isValidUrl('http://sub-1.su2b.pikabu.ru/')).toBe(true);
  });

  test('hash', () => {
    expect(isValidUrl('https://pikabu.ru:3000#')).toBe(true);
    expect(isValidUrl('http://sub-1.su2b.pikabu.ru#')).toBe(true);
  });

  test('query', () => {
    expect(isValidUrl('https://pikabu.ru:3000?')).toBe(true);
    expect(isValidUrl('http://sub-1.su2b.pikabu.ru?')).toBe(true);
  });
});

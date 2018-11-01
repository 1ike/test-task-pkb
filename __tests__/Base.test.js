import Base from '../src/Base';

describe('Base', () => {
  test('its alive', () => {
    if (Base.x + Base.x === 3 && (new Base().x) === Base.x + Base.x) {
      console.log('Nice!');
    } else {
      throw new Error();
    }
  });
});

import sort from '../src/sort';

describe('sort', () => {
  test('example 1 (light)', () => {
    const input = [
      [11, 0, 1, 0],
      [8, 1, 0, 0],
      [9, 1, 0, 1],
      [3, 0, 1, 1],
      [15, 0, 0, 1],
    ];
    const expected = [
      [3, 0, 1, 1],
      [8, 1, 0, 0],
      [9, 1, 0, 1],
      [11, 0, 1, 0],
      [15, 0, 0, 1],
    ];
    expect(sort(input)).toEqual(expected);
  });
  test('example 2 (hardcore)', () => {
    const input = [
      [11, 3, 1, 5],
      [8, 1, 0, 0],
      [11, 2, 0, 5],
      [11, 2, 0, 4],
      [9, 1, 0, 1],
      [11, 2, 0, 5],
      [3, 0, 1, 1],
      [11, 2, 1, 5],
      [15, 0, 0, 1],
    ];
    const expected = [
      [3, 0, 1, 1],
      [8, 1, 0, 0],
      [9, 1, 0, 1],
      [11, 2, 0, 4],
      [11, 2, 0, 5],
      [11, 2, 0, 5],
      [11, 2, 1, 5],
      [11, 3, 1, 5],
      [15, 0, 0, 1],
    ];
    expect(sort(input)).toEqual(expected);
  });
});

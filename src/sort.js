/**
 * Имеется массив флагов изменения версий продуктов number[][],
 *  в котором каждый элемент является массивом, содержащим следующие значения:
 *  id продукта, флаг изменения мажорной версии, флаг изменения минорной версии,
 *  флаг изменения патча.
 * Например, запись продукта #12 без изменения - [12, 0, 0, 0],
 *  с изменением минорной и патча - [12, 0, 1, 1],
 *  с изменением только мажорной - [12, 1, 0, 0].
 * Необходимо написать код сортировки массива по "силе" изменения версии продуктов,
 *  где самые сильные вначале массива. Например, [12, 1, 0, 0] будет сильнее,
 *  чем [12, 0, 1, 1], но слабее, чем [12, 1, 0, 1]
 */

/*
const compare = (a, b) => {
  const recur = (idx = 0) => {
    if (idx === a.length) return 0;

    const diff = a[idx] - b[idx];
    if (diff > 0) {
      return 1;
    }
    if (diff < 0) {
      return -1;
    }
    return recur(idx + 1);
  };

  return recur();
};
*/

const compare = (a, b) => {
  for (let idx = 0; idx < a.length; idx++) {
    const diff = a[idx] - b[idx];
    if (diff > 0) {
      return 1;
    }
    if (diff < 0) {
      return -1;
    }
  }

  return 0;
};

const sort = input => input.sort(compare);

export default sort;

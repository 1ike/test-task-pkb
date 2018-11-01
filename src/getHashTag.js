import _ from 'lodash';

/**
 * Напишите, пожалуйста, функцию, которая принимает строку, и превращает ее в хэштег:
 * - строка должна начинаться с символа #;
 * - каждое слово должно начинаться с прописной буквы, все остальные буквы строчные;
 * - функция должна возвращать false, если длина хэштега превышает 100 символов или равна 0;
 * - хэштег может содержать только буквы, цифры и символ #.
 */

// const isString = input => typeof input === 'string' || input instanceof String;
const isNotEmpty = input => input && input.trim();
const isNotTooLong = (input, maxLength = 100) => input.length <= maxLength;
const validate = (input, constraints) => constraints.every((constraint) => {
  if (constraint instanceof Function) {
    return constraint(input);
  }
  return constraint.function(input, ...constraint.args);
});

export const clearFromSpecChars = input => input.replace(/[^a-zA-Zа-яА-ЯЁё\d\s]/g, '');


export const getHashTag = (input) => {
  if (!validate(
    input,
    [_.isString, isNotEmpty, { function: isNotTooLong, args: [1000] }],
  )) return false;

  const words = _.words(clearFromSpecChars(input).toLowerCase());

  const hashName = words.map(word => _.capitalize(word)).join('');

  return `#${hashName}`;
};

/* const res = getHashTag('Пример НОВОГО "хэштега"');
console.log(res); // #ПримерНовогоХэштега */

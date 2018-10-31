/**
 *  Юному специалисту поручили написать функцию валидации URL к сайту pikabu.ru:
 * - поддержка протоколов http/https;
 * - поддомен необязателен и может содержать только буквы, цифры и дефис;
 * - путь и параметры после домена не имеют значения.
 * Однако итоговая функция получилась некачественной и вам передали эту функцию на переработку.
 * Предложите, пожалуйста, вариант исправления данной функции:
*/


const regexp = /https?:\/\/(?:[a-zA-Z\d-]+\.)*pikabu\.ru(?::\d*)?(?:(?:\/|#|\?).*)?$/i;
const isValidUrl = url => regexp.test(url);

export default isValidUrl;
/**
 *  Реализуйте, пожалуйста, ES6 класс таким образом,
 * чтобы выполнялось следующее условие из теста
 */


class Base {
  constructor() {
    this.x = 3;
  }

  // x = 3; // также возможно при определенных настройках бабеля (Stage 3)

  static get x() {
    return 1.5;
  }
}

export default Base;


/* if (Base.x + Base.x === 3 && (new Base().x) === Base.x + Base.x) {
  console.log('Nice!');
} */

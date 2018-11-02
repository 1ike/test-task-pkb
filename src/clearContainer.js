/**
 *  Есть функция, которая удаляет все элементы с data-role="user"
 * внутри определенного контейнера. Однако в функции закралась ошибка,
 * которая иногда дает о себе знать: некоторые элементы не удаляются.
 *  Необходимо исправить ошибку в данной функции:
 */


function clearContainer() {
  /*   let cont = document.querySelector('#container'),
      els = cont.childNodes; */

  const cont = document.querySelector('#container');
  const els = [...cont.childNodes]; // or Array.from(cont.childNodes)
  for (let i = 0; i < els.length; i++) {
    if (els[i].nodeType === Element.ELEMENT_NODE
          && els[i].dataset.role === 'user') {
      cont.removeChild(els[i]); // or add next line i--;  :)
    }
  }
}

export default clearContainer;

import clearContainer from '../src/clearContainer';

const addNewElemTo = (cont) => {
  const newElem = document.createElement('p');
  newElem.dataset.role = 'user';
  cont.appendChild(newElem);
};

describe('clearContainer', () => {
  test('its alive', () => {
    document.body.innerHTML = `
      <div id="container">
        <div data-role="user"></div>
        <span data-role="user"></span>
        <div></div>
        <div data-role="user"></div>
        <span data-role="user"></span>
        <span></span>
      </div>
    `;

    const cont = document.getElementById('container');

    expect(cont.children).toHaveLength(6);

    clearContainer();

    expect(cont.children).toHaveLength(2);

    addNewElemTo(cont);
    addNewElemTo(cont);

    clearContainer();

    expect(cont.children).toHaveLength(2);
  });
});

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listFinal = document.querySelector(`#ingredients`);
const list = [];

ingredients.map(elem => {
  const li = document.createElement(`li`);
  li.textContent = elem;
  li.classList.add(`item`);
  list.push(li);
});

listFinal.append(...list);

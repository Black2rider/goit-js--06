const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const item = ingredients.map(ingredient => {
  const items = document.createElement('li')
  items.textContent = ingredient
  return items
});



list.append(...item);


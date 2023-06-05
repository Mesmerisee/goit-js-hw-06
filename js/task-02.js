const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients")

ingredients.map(el => 
{const itemEl = document.createElement("li");
itemEl.classList.add("item");
itemEl.innerHTML = el;
ingredientsEl.append(itemEl);
console.log(itemEl);
})
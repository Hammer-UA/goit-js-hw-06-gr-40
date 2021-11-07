const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newIngredients = document.querySelector("#ingredients");

const addIngredient = (array) =>
  array.map((element) => {
    const itemList = document.createElement("li");
    itemList.classList.add("item");
    itemList.textContent = element;
    return itemList;
  });

newIngredients.append(...addIngredient(ingredients));

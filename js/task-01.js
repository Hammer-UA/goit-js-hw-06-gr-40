const allCategories = document.querySelector("#categories");
console.log(`Number of categories: ${allCategories.children.length}`);

const array = [...allCategories.children];
array.forEach((element) =>
  console.log(
    `Category: ${element.firstElementChild.innerHTML} Elements: ${element.lastElementChild.children.length}`
  )
);

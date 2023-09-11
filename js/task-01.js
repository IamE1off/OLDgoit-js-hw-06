// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const list = document.querySelectorAll(".item");

console.log("Number of categories: ", list.length); // Number of categories: 3

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

list.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent); // Category: Animals  // Category: Products  // Category: Technologies

  console.log("Elements:", element.lastElementChild.children.length); // Elements: 4 // Elements: 3 // Elements: 5
});

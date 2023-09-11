const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// посилання на список ul#ingredients
const ul = document.querySelector("#ingredients");
//  фрагмент для збереження всіх елементів <li>
const fragment = document.createDocumentFragment();
// Ітерація по масиву ingredients і створення <li> для кожного інгредієнта
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  fragment.appendChild(li);
});
// Додати усі <li> до списку ul за одну операцію
ul.appendChild(fragment);

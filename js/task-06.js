// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// посилання на HTML елемент інпуту та його атрибут data-length
const input = document.querySelector("#validation-input");
const dataLength = parseInt(input.getAttribute("data-length"), 10);

// слухач події blur до інпуту
input.addEventListener("blur", () => {
  // поточне значення інпуту і його довжинa
  const inputValue = input.value;
  const inputLength = inputValue.length;

  // Видалення класів valid і invalid перед перевіркою
  input.classList.remove("valid", "invalid");

  // Перевірка, чи співпадає довжина з data-length
  if (inputLength === dataLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});

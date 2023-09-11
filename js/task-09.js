// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Функція для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Додаємо слухача події click до кнопки
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  // Змінюємо фон body
  document.body.style.backgroundColor = randomColor;

  // Виводимо значення кольору у span.color
  colorSpan.textContent = randomColor;
});

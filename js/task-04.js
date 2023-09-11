// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// посилання на HTML елементи
const counterValueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
// початкове значення лічильника
let counterValue = 0;
// Функція для оновлення інтерфейсу
function updateCounterValue() {
  counterValueEl.textContent = counterValue;
}
// слухач кліків для кнопки збільшення
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});
//слухач кліків для кнопки зменшення
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});
// початковий інтерфейс
updateCounterValue();

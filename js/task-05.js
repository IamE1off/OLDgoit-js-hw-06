// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
// посилання на HTML елементи
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
// слухач події input до інпуту
nameInput.addEventListener("input", () => {
  //  поточне значення інпуту
  const inputValue = nameInput.value.trim();

  // оновити текст в спані залежно від значення інпуту
  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
});

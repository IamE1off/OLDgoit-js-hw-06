// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
//посилання на HTML елементи
const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

//слухач події input до input#font-size-control
fontSizeControl.addEventListener("input", () => {
  //поточне значення input#font-size-control
  const fontSize = fontSizeControl.value;

  //розмір шрифта для span#text
  textElement.style.fontSize = fontSize + "px";
});

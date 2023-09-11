// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки при відправці форми
  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;
  // Перевірка заповненості полів
  if (!emailInput.value || !passwordInput.value) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  // Створення об'єкта з введеними даними
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  // Виведення об'єкта у консоль
  console.log(formData);
  // Очищення значень полів форми
  this.reset();
});

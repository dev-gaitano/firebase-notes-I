// Debug: alert("app.js run")
const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
  body.classList.toggle('light');
});

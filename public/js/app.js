// Theme Toggle
const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
  body.classList.toggle('light');
});

// Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });
})

const hiddenElements = document.getElementsByClassName('hidden')
hiddenElements.forEach((element) => {
  observer.observe(element)
});

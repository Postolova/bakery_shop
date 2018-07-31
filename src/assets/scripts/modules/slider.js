const slides = document.querySelectorAll('#slides .slide');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('.controls');

let currentSlide = 0;

// Переход к слайдеру n (начиная с 0)
function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length; // Остаток от деления
  slides[currentSlide].className = 'slide showing';
}

// Навешивает обработчики на элементы next и previous
function setupListners() {
  next.onclick = function() {
    goToSlide(currentSlide + 1);
  }
  previous.onclick = function() {
    goToSlide(currentSlide - 1);
  }
}

// Показывает кнопки для навигации
function showButtons() {
  for (const iterator of controls) {
    iterator.style.display = 'inline-block';
  }
}

// Инициализация слайдера
function sliderInit() {
  if(slider.length !== 0) { // Если на странице есть нужный html код
    setupListners();
    showButtons();
  }
}
console.log("Is work");

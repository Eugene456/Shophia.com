


let INDEX = 0;

function showSlides(index) {
    // извлекаем слайды и навигационные точки
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot-navigation');

    // // проверка диапазона индекса
    if (index >= slides.length) INDEX = 0;

    if (index < 0) INDEX = slides.length - 1;

    // скрытие слайдов и удаление активной точки в навигации
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove("active-dot");
    }

    // показ активнового слайда и активация точки навигации
    slides[INDEX].style.display = "block";
    dots[INDEX].classList.add("active-dot");
};

showSlides(INDEX);



// обработка событий для точек
for (let elem of document.querySelectorAll('.dot-navigation')) {
    elem.addEventListener('click', function (event) {
        let dotIndex = event.target.getAttribute('data-index');

        // вызов функции для прокрутки слайдера
        showSlides(INDEX = dotIndex - 1)
    });
};

// автоматическое слайд-шоу
setInterval(function () {
    showSlides(--INDEX);
}, 10000);

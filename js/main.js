$(document).ready(function () {
    // Переменные
    let currentFloor = 2,
        counter = $('.counter'),
        floorPath = $('.main-image path'),
        counterUp = $('.counter-up'),
        modal = $('.modal'),
        modalClose = $('.modal-close-btn'),
        viewFlatsBtn = $('.view-flats'),
        counterDown = $('.counter-down');
    
    // Функции
    // Функция наведения на этаж, меняет цифру этажа в счетчике
    floorPath.on('mouseover', function(){
        // Очистка класса АКТИВНОГО этажа
        floorPath.removeClass("current-floor");

        // Изъятие номера этажа и атрибута и вставка этого числа в счётчик этажей
        currentFloor = $(this).attr('data-floor');
        counter.text(currentFloor);
    });

    // Клик на этаж вверх
    counterUp.on('click', function(){
        // Условие, которое выполнит код только если число этажей меньше 18
        if(currentFloor < 18){
            // Увеличиваем число этажа на 1 
            currentFloor++;

            // Функция коорая добавляет нолик в начало
            usCurrentFloor = currentFloor.toLocaleString("en-US",{ minimumIntegerDigits: 2, useGrouping: false});

            // Выводим отформатированное  значение в счётчик
            counter.text(usCurrentFloor);

            // Очистка класса АКТИВНОГО этажа
            floorPath.removeClass("current-floor");
            // Подсветка активного этажа
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    // Клик на этаж вниз
    counterDown.on('click', function(){
        if(currentFloor > 2){
            currentFloor--;

            usCurrentFloor = currentFloor.toLocaleString("en-US",{ minimumIntegerDigits: 2, useGrouping: false});

            // Выводим отформатированное  значение в счётчик
            counter.text(usCurrentFloor);
            // Очистка класса АКТИВНОГО этажа
            floorPath.removeClass("current-floor");
            // Подсветка активного этажа
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
            
        }
    });

    // Модальное окно
    floorPath.on('click', toggleModal);

    modalClose.on('click', toggleModal);
    viewFlatsBtn.on('click', toggleModal);
    
    // Функция открыть закрыть окно
    function toggleModal() {
        modal.toggleClass('is-open');
    };
});
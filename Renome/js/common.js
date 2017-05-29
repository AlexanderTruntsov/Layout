var menuElem = document.getElementById('menu-cart');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};

document.getElementById('search-open').onclick = function() {
    document.getElementById('header-search').classList.remove('hidden-search');
    document.getElementById('header-search').classList.add('show-search');
};

document.getElementById('header-search-hidden').onclick = function() {
    document.getElementById('header-search').classList.add('hidden-search');
};

/* конфигурация */
var width = 1366; // ширина изображения
var count = 1; // количество изображений

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};
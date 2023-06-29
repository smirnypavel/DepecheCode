import GridMasonry from './GridMasonry';
//Слушаем событие загрузки страницы
document.addEventListener('DOMContentLoaded', e => {
    //Создаем экземпляр класса с настройками и запускаем функцией init()
    let Masonry = new GridMasonry({
        containerClass:   '.grid-masonry',                 //Контейнер для элементов сетки
        itemClass:        '.grid-masonry-item',            //Каждый элемент сетки
        itemContentClass: '.grid-masonry-item__container', //Контейнер внутри каждого элемента стеки
        gridRowGap:       '5px',  //Верхний и нижний отступ
        gridColumnGap:    '5px',  //Правый и левый отступ
        itemMinWith:      '140px', //Минимальная ширина одного элемента сетки
        itemMaxWith:      '1fr'    //Максимальная ширина одного элемента сетки, для работы адаптива нужно значение в единицах изменения fr
      }).init();
});

import './sass/main.scss';


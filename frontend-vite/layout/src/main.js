import { useDynamicAdapt } from './script/dynamicAdapt.js';
import { sliders } from './script/sliders.js';

const width = window.innerWidth;

// это готовая библиотека для перемещения блоков в верстке 
// https://github.com/FreelancerLifeStyle/dynamic_adapt
useDynamicAdapt();

if (document.querySelector('.header')) {
    showElement('.header', '.btn--phone');
}

if (document.querySelector('.header__lang')) {
    showElement('.header__lang', '.header__lang-open');
}

if (document.querySelector('.history')) {
    showElement('.history__item.history__item--short', '.btn--open-review');
}

if (document.querySelector('.answers')) {
    showElement('.answers__item', '.answers__item-header');

    showControllerOne('.answers', '.answers__item');
}

if (document.querySelector('.tabs')) {
    toggleTabs('.tabs', '.tabs__item', '.tabs__controller-item');

    if (width < 1023.98) {
        showElement('.tabs__controller', '.tabs__controller-phone');

        getState('.tabs', '.tabs__controller-item', '.tabs__controller-phone-span')
    }
}

if (document.querySelector('.tabs-next')) {
    toggleTabs('.tabs-next', '.tabs-next__item', '.tabs-next__controller-item');
}

if (document.querySelector('.blog__catalog-tags')) {
    let tagsMain = document.querySelector('.blog__catalog-tags'),
        tagsOpen = tagsMain.querySelector('.open'),
        tagsClose = tagsMain.querySelector('.blog__catalog-tags-item--close');

    tagsOpen.onclick = () => {
        tagsMain.classList.add('show');
    }

    tagsClose.onclick = () => {
        tagsMain.classList.remove('show');
    }

    if (width < 767.98) {
        showElement('.blog__catalog-tags', '.blog__catalog-tags-button');
    }
}

// Функции для страниц
function showElement(main, button){
    let arrMainShow = document.querySelectorAll(main);

    arrMainShow.forEach(main => {
        let btnShow = main.querySelector(button);

        btnShow.onclick = (e) => {
            if (main.classList.contains('show')) {
                e.stopPropagation();
            }

            setTimeout(() => {
                main.classList.toggle('show')
            }, 0);
        }
    });
    

    // использую setTimeout чтобы точно срабатывала после showControllerOne
}

function showControllerOne(main, item){
    let thisMain = document.querySelector(main),
        arrItem = thisMain.querySelectorAll(item);
    
    thisMain.onclick = () => {
        arrItem.forEach(item => {
            item.classList.remove('show');
        });
    }
}

function toggleTabs(main, item, button) {
    let thisMain = document.querySelector(main),
        arrItems = thisMain.querySelectorAll(item),
        arrButtons = thisMain.querySelectorAll(button);

    arrButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            renderArrActive(arrItems, index, 'active');
            renderArrActive(arrButtons, index, 'active');
        });
    });
}

function getState(main, button,  state) {
    let thisMain = document.querySelector(main),
        arrButtons = thisMain.querySelectorAll(button),
        thisState = thisMain.querySelector(state);
    
    arrButtons.forEach(button => {
        button.addEventListener('click', () => {
            thisState.textContent = button.textContent;
        });
    });
}

// Прочие функции
function renderArrActive(arr, indexActive, cssClass){
    arr.forEach((item, index) => {
        if (index == indexActive) {
            item.classList.add(cssClass);
        } else {
            item.classList.remove(cssClass);
        }
    });
}

// swiper
sliders(width);
import { useDynamicAdapt } from './script/dynamicAdapt.js';
import { sliders } from './script/sliders.js';
import * as utils from './script/utils.js';

const width = window.innerWidth;

// это готовая библиотека для перемещения блоков в верстке 
// https://github.com/FreelancerLifeStyle/dynamic_adapt
useDynamicAdapt();

const STATE_CLASSES = {
    isActive: 'is-active',
};



if (document.querySelector('[data-js-lang]')) {
    renderOpenToggle('[data-js-lang]', '[data-js-lang-btn]');
}
if (document.querySelector('.header') && width < 1023.98) {
    renderOpenToggle('[data-js-menu-wrapper]', '[data-js-open-menu]');
}

if (document.querySelector('[data-js-tab]')) {
    renderTabs('[data-js-tab]', '[data-js-tab-item]', '[data-js-tab-btn]');

    if (width < 1023.98) {
        renderOpenToggle('[data-js-tabs-list]', '[data-js-tabs-list-open]');
    }
}

if (document.querySelector('[data-js-answers]')) {
    renderAnswers('[data-js-answers]', '[data-js-answers-item]', '[data-js-answers-btn]');
}

if (document.querySelector('.history')) {
    renderAnswers('.history', '.history__item--short', '.btn--open-review')
}

if (document.querySelector('[data-js-tab-next]')) {
    renderTabs('[data-js-tab-next]', '[data-js-tab-item]', '[data-js-tab-btn]')
}

if (document.querySelector('[data-js-catalog-tags]')) {
    const TAGS_MAIN = document.querySelector('[data-js-catalog-tags]'),
        TAGS_OPEN = TAGS_MAIN.querySelector('[data-js-open]'),
        TAGS_CLOSE = TAGS_MAIN.querySelector('[data-js-close]');

    TAGS_OPEN.onclick = () => {
        TAGS_MAIN.classList.add(STATE_CLASSES.isActive);
    }

    TAGS_CLOSE.onclick = () => {
        TAGS_MAIN.classList.remove(STATE_CLASSES.isActive);
    }
}

// swiper
sliders(width);

// Функции для страниц

function renderOpenToggle(main, button) {
    const MAIN = document.querySelector(main),
        BUTTON = document.querySelector(button);

    BUTTON.onclick = () => {
        MAIN.classList.toggle(STATE_CLASSES.isActive);
        BUTTON.classList.toggle(STATE_CLASSES.isActive);
    }
}

function renderTabs(main, item, button) {
    const MAIN = document.querySelector(main),
        ARR_ITEMS = MAIN.querySelectorAll(item),
        ARR_BUTTONS = MAIN.querySelectorAll(button);

    ARR_BUTTONS.forEach((button, index) => {
        button.onclick = () => {
            renderArrActive(ARR_ITEMS, index, STATE_CLASSES.isActive);
            renderArrActive(ARR_BUTTONS, index, STATE_CLASSES.isActive);
        }
    });
}

function renderAnswers(main, item, button) {
    const MAIN = document.querySelector(main),
        ARR_ITEMS = MAIN.querySelectorAll(item),
        ARR_BUTTONS = MAIN.querySelectorAll(button);

    ARR_BUTTONS.forEach((button, index) => {
        button.onclick = () => {
            console.log(ARR_ITEMS[index]);
            

            if (ARR_ITEMS[index].classList.contains(STATE_CLASSES.isActive)) {
                ARR_ITEMS[index].classList.remove(STATE_CLASSES.isActive);
            }else{
                renderArrActive(ARR_ITEMS, index, STATE_CLASSES.isActive);
            }
        }
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
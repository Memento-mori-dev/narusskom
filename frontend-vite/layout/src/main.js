import { useDynamicAdapt } from './script/dynamicAdapt';
import { Menu } from './script/Menu';
import { Tabs } from './script/Tabs';
import { Answers } from './script/Answers';
import { History } from './script/History';

useDynamicAdapt();

// Подключение классов для блоков

if (document.querySelector('.header')) {
    new Menu('.header', '[data-js-open-menu]', '[data-js-menu-wrapper]', '[data-js-menu-content]');
}

if (document.querySelector('.header__lang')) {
    new Menu('[data-js-lang]', '[data-js-lang-btn]', '[data-js-lang-wrapper]', '[data-js-lang-content]');
}

if (document.querySelector('.tabs')) {
    new Tabs('[data-js-tab]', '[data-js-tab-btn]', '[data-js-tab-state]', '[data-js-tab-item]');

    new Menu('[data-js-tabs-list]', '[data-js-tabs-list-open]', '[data-js-tabs-list-wrapper]', '[data-js-tabs-list-content]');
}

if (document.querySelector('.answers')) {
    new Answers('[data-js-answers]', '[data-js-answers-item]', '[data-js-answers-btn]', '[data-js-answers-wrapper]', '[data-js-answers-content]')
}

if (document.querySelector('.history')) {
    new History('.history', '.history__item--short', '.history__item--short .btn--open-review', '.history__item--short .history__item-description', '.history__item--short .history__item-description-text');
}

// swiper
if (document.querySelector('.everyone')) {
    const swiperEveryone = new Swiper('.everyone', {
        slidesPerView: 3,
        spaceBetween: 20,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            0:   { 
                slidesPerView: 1.1,
                spaceBetween: 12,
            },
            560:   { 
                slidesPerView: 1.8,
                spaceBetween: 12,
            },
            760:   { 
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1023:   { 
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}

if (document.querySelector('.history')) {
    const swiperHistory = new Swiper('.history', {
        slidesPerView: 3,
        spaceBetween: 20,
        // And if we need scrollbar
        breakpoints: {
            0:   { 
                slidesPerView: 1,
                spaceBetween: 20,
            },
            560:   { 
                slidesPerView: 1.8,
                spaceBetween: 20,
            },
            760:   { 
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1023:   { 
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: '.history-controller .next',
            prevEl: '.history-controller .prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    }); 
}


if (document.querySelector('.exams')) {
    const swiperExams = new Swiper('.exams', {
        slidesPerView: 4,
        spaceBetween: 20,
        // And if we need scrollbar
        breakpoints: {
            0:   { 
                slidesPerView: 1.24,
                spaceBetween: 20,
            },
            600:   { 
                slidesPerView: 2,
                spaceBetween: 20,
            },
            860:   { 
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200:   { 
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

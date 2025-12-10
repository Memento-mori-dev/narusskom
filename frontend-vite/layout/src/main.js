import { useDynamicAdapt } from './script/dynamicAdapt';
import { Menu } from './script/Menu';
import { Tabs } from './script/Tabs';

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


// swiper
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
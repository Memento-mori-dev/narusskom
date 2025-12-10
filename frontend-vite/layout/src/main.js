import { useDynamicAdapt } from './script/dynamicAdapt';

useDynamicAdapt();

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
    },
    navigation: {
        nextEl: '.history-controller .next',
        prevEl: '.history-controller .prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
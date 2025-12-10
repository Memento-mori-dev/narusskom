import { useDynamicAdapt } from './script/dynamicAdapt';

useDynamicAdapt();

const swiper = new Swiper('.everyone', {
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